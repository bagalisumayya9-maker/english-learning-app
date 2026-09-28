# EnglishEase AI - Modern Beginner-Friendly English Learning Web App

**EnglishEase AI** is an AI-powered English learning web application crafted specifically for absolute beginners and individuals with very basic English knowledge. It requires **zero prior grammar background**, explains every concept in plain language, and provides a warm, encouraging environment with zero embarrassment for mistakes.

---

## 🌟 Key Features & Teaching Philosophy

- **Zero-Grammar-Jargon Pedagogy**: Explains rules using everyday analogies ("Naming words", "Action words", "Position words").
- **Clear Audio Pronunciations**: Web Speech API integration provides natural audio playback for every single word, example, and sentence at an easy-to-follow speech rate.
- **Interactive Sentence Builder**: Click or drag word blocks like Lego bricks to learn natural English word order (Subject + Verb + Object).
- **Encouraging AI Speaking Partner**: Practice real conversations (ordering food, college life, job interviews). When mistakes occur, the AI gently says *"Good try! 😊"* and shows how to phrase it naturally.
- **Dual-Mode AI Engine**:
  - **Built-in Smart Tutor**: Instant, zero-cost, offline-capable dialogue and mistake detection engine.
  - **Live Google Gemini Mode**: Enter your Gemini API Key in Settings to enable live generative conversation.
- **Practice Tracking**: Tracks daily practice streaks (🔥), words learned, completed lessons, and experience points (⭐ XP) saved to `localStorage`.

---

## 📂 Project Structure

```
english_learning_app/
├── index.html       # Modern responsive UI with Tailwind CSS & Lucide Icons
├── app.js           # Core client application logic, Web Speech API & audio chimes
├── data.js          # Comprehensive educational curriculum dataset
├── styles.css       # Custom styles, animations, and responsive utilities
├── server.py        # Lightweight Python server with static file serving & AI endpoints
└── README.md        # Documentation and quickstart guide
```

---

## 🚀 How to Run the Application

### Option 1: Run with Python Web Server (Recommended)

1. Open PowerShell or Terminal and navigate to the directory:
   ```powershell
   cd C:\Users\bagal\.gemini\antigravity\scratch\english_learning_app
   python server.py
   ```
2. Open your browser and go to:
   ```
   http://localhost:8000
   ```

### Option 2: Standalone Browser Mode

Double-click `index.html` or open it directly in Google Chrome, Microsoft Edge, Firefox, or Safari:
```
file:///C:/Users/bagal/.gemini/antigravity/scratch/english_learning_app/index.html
```
*(All core features, audio synthesis, voice recognition, and the built-in smart AI tutor work directly in standalone mode without requiring a server!)*

---

## 📚 Complete Learning Modules

### 1. English Basics
- **Alphabet (A to Z)**: Phonics sounds, keywords, meaning, and audio pronunciation.
- **Numbers (1 to 100)**: Essential numbers with phonetic pronunciation and everyday examples.
- **Colors**: Visual color swatches with pronunciation and real-world examples.
- **Days & Months**: Weekdays and months in conversational context.
- **Family Members**: Father, Mother, Brother, Sister, Grandparents, etc.
- **Common Objects**: Water, Pen, Book, Phone, Table, Chair, Bag, etc.
- **Basic Verbs**: Eat, Drink, Sleep, Go, Come, Read, Write, Speak, Listen, Walk.
- **Common Adjectives**: Big, Small, Happy, Sad, Hot, Cold, Easy, Kind.
- **Daily-Use Words**: Please, Thank you, Sorry, Hello, Goodbye, Excuse me, Welcome.

### 2. Real-Life Vocabulary (12 Situations)
Categories covered:
1. Home
2. College
3. School
4. Office
5. Shopping
6. Restaurant
7. Travel
8. Hospital
9. Friends
10. Family
11. Phone Conversations
12. Job Interviews

*Every vocabulary item includes phonetic pronunciation, simple meaning, example sentence, similar words/synonyms, and an interactive practice question with instant feedback + dynamic AI practice generator.*

### 3. Grammar from Absolute Basics (15 Modules)
Step-by-step breakdown without confusing grammar terms:
1. Nouns (Naming words)
2. Pronouns (Replacer words)
3. Verbs (Action words)
4. Adjectives (Describing words)
5. Adverbs (How actions happen)
6. Articles (`A`, `An`, `The`)
7. Prepositions (`In`, `On`, `At`, `Under`)
8. Conjunctions (`And`, `But`, `Because`, `Or`)
9. Singular & Plural (One vs Many)
10. Subject & Predicate
11. Sentence Formation (Subject + Verb + Object)
12. Tenses (Present, Past, Future)
13. Active & Passive Voice
14. Question Formation (`What`, `Where`, `When`, `Do/Does`, `Is/Are`)
15. Common Grammar Mistakes (fixing *"I am agree"*, *"She don't"*, *"Yesterday I go"*)

*Each lesson features: Simple explanation → Golden rule → Everyday examples → Interactive quiz → Encouraging AI explanation → Follow-up reinforcement question.*

### 4. Interactive Sentence Builder
- 12 progressive levels:
  - Level 1: `I` + `am` + `happy.`
  - Level 4: `I` + `am` + `going` + `to` + `college.`
  - Level 7: `I` + `went` + `to` + `college` + `yesterday.`
  - Level 9: `I` + `will` + `go` + `to` + `college` + `tomorrow.`
  - Level 12: `Could` + `you` + `please` + `help` + `me` + `today?`
- Click word chips from the word bank into the sentence tray.
- Instant check button explains **why** the word order is correct or how to improve it.
- Sentence audio button speaks the full sentence out loud.

### 5. Speaking Practice with AI
- 10 real-world conversation scenarios.
- **Microphone speech-to-text** (Web Speech Recognition) and text input.
- **Auto-speak AI responses** using speech synthesis.
- **Gentle Mistake Feedback**: When a beginner says *"I am go to college"*, the AI gently highlights:
  > *"Good try! 😊 In English, when you talk about right now, say 'I am going to college'. Let's continue! Which college do you go to?"*
- Suggested starter response chips so learners never feel stuck.

---

## ⚙️ Setting Active Workspace in Antigravity

To set this project folder as your active workspace in Antigravity:
1. Open the File menu or run the command palette in Antigravity.
2. Select **Open Folder / Workspace**.
3. Choose:
   ```
   C:\Users\bagal\.gemini\antigravity\scratch\english_learning_app
   ```
