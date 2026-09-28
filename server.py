import http.server
import socketserver
import os
import json
import urllib.parse
import sys
import webbrowser

if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class EnglishAppHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_POST(self):
        parsed_path = urllib.parse.urlparse(self.path)
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length).decode('utf-8') if content_length > 0 else '{}'
        
        try:
            data = json.loads(body)
        except Exception:
            data = {}

        if parsed_path.path == '/api/chat':
            self.handle_ai_chat(data)
        elif parsed_path.path == '/api/grammar_check':
            self.handle_grammar_check(data)
        elif parsed_path.path == '/api/generate_exercise':
            self.handle_generate_exercise(data)
        else:
            self.send_response(404)
            self.end_headers()

    def handle_ai_chat(self, data):
        message = data.get('message', '').strip()
        scenario = data.get('scenario', 'general')
        user_level = data.get('level', 'Beginner')
        api_key = data.get('apiKey', '') or os.environ.get('GEMINI_API_KEY', '')

        # Try live Gemini if API key is provided
        if api_key:
            try:
                import google.generativeai as genai
                genai.configure(api_key=api_key)
                model = genai.GenerativeModel('gemini-1.5-flash')
                prompt = f"""
You are an encouraging, beginner-friendly English learning tutor.
The user is at English level: '{user_level}'.
They are practicing conversation scenario: '{scenario}'.
User message: "{message}"

Instructions:
1. Speak in very simple, step-by-step English suitable for a beginner.
2. If the user makes an English grammar or vocabulary mistake:
   - Do NOT criticize them.
   - Say "Good try!"
   - Show the corrected sentence.
   - Explain the mistake simply in one short sentence.
3. Then continue the conversation by asking a friendly, simple question.
4. Keep your total response brief (2 to 4 sentences).
"""
                response = model.generate_content(prompt)
                self.send_json_response({'reply': response.text, 'source': 'gemini'})
                return
            except Exception as e:
                # Fall back gracefully to built-in intelligent tutor
                pass

        # Intelligent Built-in Tutor Engine
        reply, correction = self.generate_smart_tutor_reply(message, scenario, user_level)
        self.send_json_response({
            'reply': reply,
            'correction': correction,
            'source': 'builtin'
        })

    def handle_grammar_check(self, data):
        sentence = data.get('sentence', '').strip()
        correction = None
        lower = sentence.lower()

        # ESL Beginner Mistake Rules
        if 'i am agree' in lower:
            correction = {
                'fix': sentence.replace('am agree', 'agree').replace('Am agree', 'Agree'),
                'rule': '"Agree" is already a verb. Say "I agree" instead of "I am agree".'
            }
        elif 'i am go to' in lower or 'i am go ' in lower:
            correction = {
                'fix': sentence.replace('am go to', 'am going to').replace('am go', 'am going'),
                'rule': 'With "am", we add "-ing" to the action: "I am going".'
            }
        elif 'she don\'t' in lower or 'he don\'t' in lower:
            correction = {
                'fix': sentence.replace("don't", "doesn't"),
                'rule': 'With He, She, and It, we use "doesn\'t" instead of "don\'t".'
            }
        elif 'yesterday i go' in lower:
            correction = {
                'fix': sentence.replace('yesterday i go', 'yesterday I went'),
                'rule': 'For past events like "yesterday", use past tense "went".'
            }

        self.send_json_response({
            'original': sentence,
            'has_mistake': correction is not None,
            'correction': correction
        })

    def handle_generate_exercise(self, data):
        topic = data.get('topic', 'Daily Words')
        sample_exercises = [
            {
                'question': 'Which word is the polite way to ask for a glass of water?',
                'options': ['Please', 'Now', 'Give', 'Fast'],
                'answer': 'Please',
                'explanation': '"Please" makes requests polite and friendly.'
            },
            {
                'question': 'What do you say when someone helps you?',
                'options': ['Thank you', 'Goodbye', 'Welcome', 'Sorry'],
                'answer': 'Thank you',
                'explanation': '"Thank you" expresses gratitude when someone does something kind.'
            }
        ]
        self.send_json_response({'exercise': sample_exercises[0]})

    def generate_smart_tutor_reply(self, message, scenario, level):
        lower = message.lower()
        correction = None

        if 'i am go' in lower:
            correction = {
                'fix': 'I am going to...',
                'reason': 'When an action is happening now, add "-ing": "I am going to college".'
            }
        elif 'i am agree' in lower:
            correction = {
                'fix': 'I agree',
                'reason': 'We say "I agree with you", not "I am agree".'
            }
        elif 'how much price' in lower:
            correction = {
                'fix': 'How much does this cost? or What is the price?',
                'reason': 'Say "How much does this cost?" when shopping.'
            }

        if 'hello' in lower or 'hi' in lower:
            reply = "Hello! It is wonderful to meet you. You are doing very well practicing English! How can I help you today?"
        elif 'my name is' in lower or 'i am' in lower:
            reply = "Nice to meet you! Learning English step-by-step is great. What is your favorite thing to do in your free time?"
        elif 'order' in lower or 'menu' in lower or 'tea' in lower or 'coffee' in lower:
            reply = "Certainly! Our hot tea and fresh sandwiches are delicious. Would you like sugar with your drink?"
        elif 'where' in lower or 'direction' in lower or 'station' in lower:
            reply = "Walk straight along this road, and turn left at the traffic signal. The station will be on your right!"
        else:
            reply = "Good try! I understood your message clearly. You are making real progress. What else would you like to talk about?"

        return reply, correction

    def send_json_response(self, obj):
        res = json.dumps(obj).encode('utf-8')
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(res)))
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(res)


def run_server():
    os.chdir(DIRECTORY)
    # Check if port is available
    handler = EnglishAppHandler
    server = None
    for p in [PORT, 8080, 8888, 3000]:
        try:
            server = socketserver.TCPServer(("", p), handler)
            print(f"[SERVER] English learning app server started at: http://localhost:{p}")
            break
        except OSError:
            continue

    if not server:
        print("Could not bind to any standard port. Please check running processes.")
        sys.exit(1)

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server...")
        server.server_close()


if __name__ == '__main__':
    run_server()
