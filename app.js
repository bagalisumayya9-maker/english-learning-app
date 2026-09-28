// EnglishEase AI - Interactive Application Logic

// ================= APP STATE =================
const STATE = {
  currentView: 'welcome',
  userLevel: localStorage.getItem('ee_level') || 'Beginner',
  userGoals: JSON.parse(localStorage.getItem('ee_goals') || '["Speaking", "Daily Conversation"]'),
  streak: parseInt(localStorage.getItem('ee_streak') || '3'),
  wordsLearned: parseInt(localStorage.getItem('ee_words') || '26'),
  lessonsCompleted: parseInt(localStorage.getItem('ee_lessons') || '5'),
  xp: parseInt(localStorage.getItem('ee_xp') || '140'),
  settings: JSON.parse(localStorage.getItem('ee_settings') || '{"aiMode":"builtin","apiKey":"","speechRate":0.85}'),
  
  // Active module states
  basicsTab: 'alphabet',
  vocabCategory: 'home',
  grammarTopicId: 'nouns',
  sbCurrentLevel: 1,
  sbTray: [],
  sbBank: [],
  
  // Speaking practice state
  activeScenarioId: 'intro',
  chatHistories: {},
  isRecording: false
};

// ================= AUDIO HELPER (Web Speech API & Web Audio) =================
function speakText(text) {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser.');
    return;
  }
  window.speechSynthesis.cancel(); // Cancel any ongoing speech
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = STATE.settings.speechRate || 0.85;
  utterance.pitch = 1.0;
  
  // Pick a natural English voice if available
  const voices = window.speechSynthesis.getVoices();
  const enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')));
  if (enVoice) {
    utterance.voice = enVoice;
  }
  
  window.speechSynthesis.speak(utterance);
}

// Gentle pleasant success chime using Web Audio API
function playSuccessChime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc1.type = 'sine';
    osc2.type = 'triangle';
    
    osc1.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
    osc1.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.15); // E5
    osc1.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.3); // G5
    
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    
    osc1.connect(gain);
    gain.connect(ctx.destination);
    
    osc1.start();
    osc1.stop(ctx.currentTime + 0.5);
  } catch (e) {
    // Audio context may require user gesture on some browsers
  }
}

// ================= NAVIGATION =================
function navigateTo(viewName) {
  STATE.currentView = viewName;
  const views = ['welcome', 'onboarding', 'dashboard', 'basics', 'vocabulary', 'grammar', 'sentence-builder', 'speaking'];
  
  views.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    if (el) {
      if (v === viewName) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    }
  });

  // Update top nav active styling
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('text-brand-600', 'bg-slate-100');
  });

  // Re-render view specific logic if needed
  if (viewName === 'basics') renderBasics();
  if (viewName === 'vocabulary') renderVocabulary();
  if (viewName === 'grammar') renderGrammarLesson(STATE.grammarTopicId);
  if (viewName === 'sentence-builder') loadSentenceLevel(STATE.sbCurrentLevel);
  if (viewName === 'speaking') renderSpeakingScenario(STATE.activeScenarioId);
  if (viewName === 'dashboard') updateDashboard();

  window.scrollTo({ top: 0, behavior: 'smooth' });
  refreshIcons();
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('hidden');
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ================= ONBOARDING & PROFILE =================
function startOnboardingFlow() {
  navigateTo('onboarding');
}

function openOnboardingModal() {
  navigateTo('onboarding');
}

function selectLevel(level) {
  STATE.userLevel = level;
}

function toggleGoal(button) {
  const goal = button.getAttribute('data-goal');
  if (goal === 'All') {
    STATE.userGoals = ['Speaking', 'Grammar', 'Vocabulary', 'Pronunciation', 'Reading', 'Writing', 'Daily Conversation'];
    document.querySelectorAll('.goal-chip').forEach(btn => {
      btn.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-800');
    });
    return;
  }
  
  if (STATE.userGoals.includes(goal)) {
    STATE.userGoals = STATE.userGoals.filter(g => g !== goal);
    button.classList.remove('bg-emerald-50', 'border-emerald-500', 'text-emerald-800');
  } else {
    STATE.userGoals.push(goal);
    button.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-800');
  }
}

function finishOnboarding() {
  const selectedLevelRadio = document.querySelector('input[name="user_level"]:checked');
  if (selectedLevelRadio) {
    STATE.userLevel = selectedLevelRadio.value;
  }
  
  localStorage.setItem('ee_level', STATE.userLevel);
  localStorage.setItem('ee_goals', JSON.stringify(STATE.userGoals));
  
  updateDashboard();
  navigateTo('dashboard');
}

function updateDashboard() {
  document.getElementById('nav-streak').innerText = `${STATE.streak} Days`;
  document.getElementById('nav-xp').innerText = `${STATE.xp} XP`;
  document.getElementById('nav-level-badge').innerText = STATE.userLevel;

  document.getElementById('dash-level').innerText = STATE.userLevel;
  document.getElementById('dash-streak').innerText = `${STATE.streak} Days`;
  document.getElementById('dash-words').innerText = `${STATE.wordsLearned} Words`;
  document.getElementById('dash-lessons').innerText = `${STATE.lessonsCompleted} Done`;
  document.getElementById('dash-xp').innerText = `${STATE.xp} XP`;

  // Dynamically tailor today's lesson based on user's level
  const todayTitle = document.getElementById('today-lesson-title');
  const todayDesc = document.getElementById('today-lesson-desc');
  if (STATE.userLevel === 'Beginner') {
    todayTitle.innerText = "Daily Greetings & Polite Words";
    todayDesc.innerText = "Master essential polite words: 'Please', 'Thank you', 'Sorry', and 'Excuse me' with audio pronunciation.";
  } else if (STATE.userLevel === 'Basic') {
    todayTitle.innerText = "Sentence Formation (Subject + Verb + Object)";
    todayDesc.innerText = "Understand the golden order of English sentences: Who + Does what + To what.";
  } else {
    todayTitle.innerText = "Everyday Conversation & Fluency";
    todayDesc.innerText = "Roleplay asking for directions, ordering food, and polite office conversations with AI.";
  }
}

function continueLearning() {
  if (STATE.userLevel === 'Beginner') {
    navigateTo('basics');
  } else {
    navigateTo('sentence-builder');
  }
}

function startTodayLesson() {
  if (STATE.userLevel === 'Beginner') {
    switchBasicsTab('dailyWords');
    navigateTo('basics');
  } else {
    navigateTo('grammar');
  }
}

function addXP(amount) {
  STATE.xp += amount;
  localStorage.setItem('ee_xp', STATE.xp);
  document.getElementById('nav-xp').innerText = `${STATE.xp} XP`;
  const dashXP = document.getElementById('dash-xp');
  if (dashXP) dashXP.innerText = `${STATE.xp} XP`;
  playSuccessChime();
}

function incrementWords() {
  STATE.wordsLearned += 1;
  localStorage.setItem('ee_words', STATE.wordsLearned);
  const el = document.getElementById('dash-words');
  if (el) el.innerText = `${STATE.wordsLearned} Words`;
}

// ================= MODULE 1: ENGLISH BASICS =================
function switchBasicsTab(tabKey) {
  STATE.basicsTab = tabKey;
  document.querySelectorAll('.basics-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabKey) {
      btn.className = "basics-tab-btn px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap bg-brand-600 text-white shadow-xs";
    } else {
      btn.className = "basics-tab-btn px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap bg-white text-slate-700 hover:bg-slate-100 border border-slate-200";
    }
  });
  renderBasics();
}

function renderBasics() {
  const container = document.getElementById('basics-cards-grid');
  if (!container) return;
  
  const items = APP_DATA.basics[STATE.basicsTab] || [];
  const searchQuery = (document.getElementById('basics-search')?.value || '').toLowerCase().trim();
  
  const filtered = items.filter(item => {
    const text = (item.word || item.letter || '') + ' ' + (item.meaning || '') + ' ' + (item.example || '');
    return text.toLowerCase().includes(searchQuery);
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400">
        <i data-lucide="search-x" class="w-10 h-10 mx-auto mb-2 opacity-50"></i>
        <p>No words found matching your search. Try another word!</p>
      </div>
    `;
    refreshIcons();
    return;
  }

  container.innerHTML = filtered.map((item, idx) => {
    const displayWord = item.letter ? `${item.letter} - ${item.word}` : item.word;
    const pronText = item.sound || item.pron || '';
    const example = item.example || '';
    const meaning = item.meaning || item.tip || '';
    const audioTarget = (item.word || '').replace(/[\(\)0-9]/g, '').trim();

    return `
      <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover-lift flex flex-col justify-between space-y-3">
        <div class="space-y-2">
          <div class="flex items-start justify-between gap-2">
            <div>
              <h3 class="text-xl font-bold font-heading text-slate-800">${displayWord}</h3>
              ${pronText ? `<span class="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md mt-0.5">${pronText}</span>` : ''}
            </div>
            <button onclick="speakText('${audioTarget}')" class="audio-btn p-2 rounded-xl bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-700 transition" title="Listen to pronunciation">
              <i data-lucide="volume-2" class="w-4 h-4"></i>
            </button>
          </div>

          <p class="text-xs text-slate-600 leading-relaxed font-medium">
            <span class="text-slate-400">Meaning:</span> ${meaning}
          </p>

          ${example ? `
            <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 space-y-1">
              <div class="flex items-center justify-between">
                <span class="text-[10px] uppercase font-bold text-slate-400">Example</span>
                <button onclick="speakText('${example.replace(/'/g, "\\'")}')" class="text-slate-400 hover:text-slate-700">
                  <i data-lucide="volume-1" class="w-3 h-3"></i>
                </button>
              </div>
              <p class="italic">"${example}"</p>
            </div>
          ` : ''}
        </div>

        <div class="pt-2 border-t border-slate-100 flex items-center justify-between">
          <span class="text-[11px] text-slate-400 font-medium">Beginner Friendly</span>
          <button onclick="practiceBasicsWord('${displayWord}', '${audioTarget}')" class="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Practice Word
          </button>
        </div>
      </div>
    `;
  }).join('');

  refreshIcons();
}

function filterBasics() {
  renderBasics();
}

function practiceBasicsWord(displayWord, targetWord) {
  speakText(targetWord);
  addXP(5);
  incrementWords();
  
  // Quick encouragement toast or modal
  const modal = document.getElementById('vocab-practice-modal');
  const body = document.getElementById('vocab-practice-modal-body');
  if (modal && body) {
    body.innerHTML = `
      <div class="text-center space-y-4">
        <div class="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center font-bold text-2xl">
          🎉
        </div>
        <h3 class="text-xl font-bold font-heading text-slate-800">Word Practiced: ${displayWord}</h3>
        <p class="text-xs text-slate-600">Great pronunciation practice! You earned <strong class="text-emerald-600">+5 XP</strong>.</p>
        <button onclick="speakText('${targetWord}')" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5 mx-auto">
          <i data-lucide="volume-2" class="w-4 h-4"></i> Listen Again
        </button>
        <button onclick="document.getElementById('vocab-practice-modal').classList.add('hidden')" class="w-full py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs hover:bg-brand-700">
          Continue Learning
        </button>
      </div>
    `;
    modal.classList.remove('hidden');
    refreshIcons();
  }
}

// ================= MODULE 2: REAL-LIFE VOCABULARY =================
function renderVocabulary() {
  const pillsContainer = document.getElementById('vocab-category-pills');
  const cardsContainer = document.getElementById('vocab-cards-grid');
  if (!pillsContainer || !cardsContainer) return;

  // Render 12 category pills
  pillsContainer.innerHTML = APP_DATA.vocabulary.categories.map(cat => {
    const isActive = cat.id === STATE.vocabCategory;
    return `
      <button onclick="switchVocabCategory('${cat.id}')" class="px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition ${
        isActive 
          ? 'bg-blue-600 text-white shadow-xs' 
          : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
      }">
        <i data-lucide="${cat.icon || 'book'}" class="w-3.5 h-3.5"></i>
        <span>${cat.name}</span>
      </button>
    `;
  }).join('');

  // Render cards for current category
  const items = APP_DATA.vocabulary.items[STATE.vocabCategory] || [];
  cardsContainer.innerHTML = items.map((item, idx) => {
    const similarBadges = (item.similar || []).map(s => 
      `<span class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium">${s}</span>`
    ).join(' ');

    return `
      <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover-lift flex flex-col justify-between space-y-4">
        <div class="space-y-3">
          <div class="flex items-start justify-between gap-2">
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-xl font-bold font-heading text-slate-800">${item.word}</h3>
                <span class="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">${item.pron}</span>
              </div>
              <p class="text-xs text-slate-600 mt-1 font-medium">${item.meaning}</p>
            </div>
            <button onclick="speakText('${item.word}')" class="audio-btn p-2 rounded-xl bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 transition" title="Listen">
              <i data-lucide="volume-2" class="w-4 h-4"></i>
            </button>
          </div>

          <!-- Example sentence -->
          <div class="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 space-y-1">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-bold text-slate-400 uppercase">Real Example</span>
              <button onclick="speakText('${item.example.replace(/'/g, "\\'")}')" class="text-slate-400 hover:text-slate-700">
                <i data-lucide="volume-1" class="w-3 h-3"></i>
              </button>
            </div>
            <p class="italic">"${item.example}"</p>
          </div>

          <!-- Similar words -->
          ${similarBadges ? `
            <div class="space-y-1">
              <span class="text-[10px] uppercase font-bold text-slate-400">Similar / Common Words</span>
              <div class="flex flex-wrap gap-1">${similarBadges}</div>
            </div>
          ` : ''}
        </div>

        <!-- Practice Question Inline -->
        <div class="p-3 rounded-xl bg-blue-50/50 border border-blue-100 space-y-2.5">
          <div class="text-xs font-bold text-slate-800 flex items-center gap-1.5">
            <i data-lucide="help-circle" class="w-3.5 h-3.5 text-blue-600"></i>
            <span>${item.question}</span>
          </div>

          <div class="grid grid-cols-2 gap-1.5" id="vocab-opts-${idx}">
            ${item.options.map(opt => `
              <button onclick="checkVocabAnswer(this, '${opt}', '${item.answer}', '${item.explanation.replace(/'/g, "\\'")}')" class="px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-500 hover:bg-blue-50 text-left transition">
                ${opt}
              </button>
            `).join('')}
          </div>
          <div id="vocab-feed-${idx}" class="hidden text-xs p-2 rounded-lg font-medium"></div>
        </div>
      </div>
    `;
  }).join('');

  refreshIcons();
}

function switchVocabCategory(catId) {
  STATE.vocabCategory = catId;
  renderVocabulary();
}

function checkVocabAnswer(button, selected, correct, explanation) {
  const parent = button.parentElement;
  const feed = parent.nextElementSibling;
  
  if (selected.toLowerCase() === correct.toLowerCase()) {
    button.classList.remove('bg-white', 'border-slate-200');
    button.classList.add('bg-emerald-600', 'text-white', 'border-emerald-600');
    feed.className = "text-xs p-2 rounded-lg font-medium bg-emerald-100 text-emerald-800 flex items-center gap-1.5";
    feed.innerHTML = `<span>🎉 Correct!</span> ${explanation}`;
    feed.classList.remove('hidden');
    addXP(10);
    incrementWords();
  } else {
    button.classList.add('bg-amber-100', 'border-amber-400', 'text-amber-900');
    feed.className = "text-xs p-2 rounded-lg font-medium bg-amber-50 text-amber-800";
    feed.innerHTML = `<span>Good try! 😊</span> The best answer is <strong>"${correct}"</strong>. ${explanation}`;
    feed.classList.remove('hidden');
  }
}

function generateAIVocabExercise() {
  const modal = document.getElementById('vocab-practice-modal');
  const body = document.getElementById('vocab-practice-modal-body');
  if (!modal || !body) return;

  const currentItems = APP_DATA.vocabulary.items[STATE.vocabCategory] || APP_DATA.vocabulary.items.home;
  const randomItem = currentItems[Math.floor(Math.random() * currentItems.length)];

  body.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between border-b border-slate-100 pb-3">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-accent-100 text-accent-700 flex items-center justify-center font-bold">
            <i data-lucide="sparkles" class="w-4 h-4"></i>
          </div>
          <h3 class="text-base font-bold text-slate-800">AI Generated Practice Question</h3>
        </div>
        <button onclick="document.getElementById('vocab-practice-modal').classList.add('hidden')" class="text-slate-400 hover:text-slate-600">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <div class="space-y-2">
        <span class="text-xs font-semibold text-slate-500 uppercase">Context: ${STATE.vocabCategory}</span>
        <p class="text-sm font-bold text-slate-800">${randomItem.question}</p>
      </div>

      <div class="grid grid-cols-1 gap-2">
        ${randomItem.options.map(opt => `
          <button onclick="checkVocabAnswer(this, '${opt}', '${randomItem.answer}', '${randomItem.explanation.replace(/'/g, "\\'")}')" class="p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 text-left transition flex items-center justify-between">
            <span>${opt}</span>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-400"></i>
          </button>
        `).join('')}
      </div>

      <div class="hidden text-xs p-3 rounded-xl" id="ai-gen-feedback"></div>
    </div>
  `;
  modal.classList.remove('hidden');
  refreshIcons();
}

// ================= MODULE 3: GRAMMAR FROM BASICS =================
function renderGrammarLesson(topicId) {
  STATE.grammarTopicId = topicId;
  const chipsContainer = document.getElementById('grammar-topic-chips');
  const lessonContainer = document.getElementById('grammar-lesson-container');
  if (!chipsContainer || !lessonContainer) return;

  // Render topic buttons
  chipsContainer.innerHTML = APP_DATA.grammar.map(g => {
    const isActive = g.id === topicId;
    return `
      <button onclick="renderGrammarLesson('${g.id}')" class="px-2.5 py-2 rounded-xl text-xs font-bold transition text-left truncate ${
        isActive 
          ? 'bg-indigo-600 text-white shadow-xs' 
          : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
      }">
        ${g.title}
      </button>
    `;
  }).join('');

  // Find active grammar topic
  const topic = APP_DATA.grammar.find(g => g.id === topicId) || APP_DATA.grammar[0];

  lessonContainer.innerHTML = `
    <!-- Header -->
    <div class="border-b border-slate-100 pb-4 space-y-1">
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md">
          Zero-Jargon Grammar
        </span>
        <button onclick="speakText('${topic.concept}. ${topic.explanation.replace(/'/g, "\\'")}')" class="audio-btn p-2 rounded-xl bg-slate-100 hover:bg-indigo-100 text-slate-700 hover:text-indigo-700 transition" title="Listen to lesson explanation">
          <i data-lucide="volume-2" class="w-4 h-4"></i>
        </button>
      </div>
      <h3 class="text-2xl font-bold font-heading text-slate-800">${topic.title}</h3>
      <p class="text-xs text-slate-500 font-medium">${topic.concept}</p>
    </div>

    <!-- Step 1: Simple Explanation -->
    <div class="space-y-2">
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider">Step 1: Simple Explanation</h4>
      <div class="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 text-slate-800 text-sm leading-relaxed">
        ${topic.explanation}
      </div>
    </div>

    <!-- Simple Golden Rule Box -->
    <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900 flex items-center gap-2">
      <span>💡 Golden Rule:</span>
      <span>${topic.simpleRule}</span>
    </div>

    <!-- Step 2 & 3: Everyday Real Examples -->
    <div class="space-y-2">
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider">Step 2: Everyday Examples</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        ${topic.everydayExamples.map(ex => `
          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
            <span>"${ex}"</span>
            <button onclick="speakText('${ex.replace(/'/g, "\\'")}')" class="text-slate-400 hover:text-slate-700 ml-2">
              <i data-lucide="volume-1" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Step 4: Interactive Question -->
    <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
      <div class="space-y-1">
        <h4 class="text-xs font-bold text-indigo-700 uppercase tracking-wider">Step 3: Practice Question</h4>
        <p class="text-sm font-bold text-slate-800">${topic.question}</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2" id="grammar-opts-main">
        ${topic.options.map(opt => `
          <button onclick="checkGrammarAnswer(this, '${opt}', '${topic.answer}', '${topic.feedbackWhy.replace(/'/g, "\\'")}', true)" class="p-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:border-indigo-500 hover:bg-indigo-50 text-left transition flex items-center justify-between">
            <span>${opt}</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-slate-400"></i>
          </button>
        `).join('')}
      </div>

      <div id="grammar-feedback-main" class="hidden p-4 rounded-xl text-xs space-y-2"></div>
    </div>

    <!-- Follow Up Question Container (Revealed after solving main question) -->
    <div id="grammar-followup-box" class="hidden p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-4">
      <div class="space-y-1">
        <div class="flex items-center gap-1.5 text-indigo-800 text-xs font-bold uppercase tracking-wider">
          <i data-lucide="sparkles" class="w-3.5 h-3.5 text-indigo-600"></i>
          <span>Step 4: Reinforcement Practice</span>
        </div>
        <p class="text-sm font-bold text-slate-800">${topic.followUpQuestion}</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        ${topic.followUpOptions.map(opt => `
          <button onclick="checkGrammarAnswer(this, '${opt}', '${topic.followUpAnswer}', '${topic.followUpWhy.replace(/'/g, "\\'")}', false)" class="p-3 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:border-indigo-500 hover:bg-indigo-50 text-left transition flex items-center justify-between">
            <span>${opt}</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-slate-400"></i>
          </button>
        `).join('')}
      </div>

      <div id="grammar-feedback-followup" class="hidden p-4 rounded-xl text-xs space-y-2"></div>
    </div>
  `;

  refreshIcons();
}

function checkGrammarAnswer(button, selected, correct, feedback, isMain) {
  const feedbackEl = document.getElementById(isMain ? 'grammar-feedback-main' : 'grammar-feedback-followup');
  if (!feedbackEl) return;

  if (selected.toLowerCase() === correct.toLowerCase()) {
    button.className = "p-3 rounded-xl bg-emerald-600 text-white font-bold text-xs border border-emerald-600 text-left flex items-center justify-between";
    feedbackEl.className = "p-4 rounded-xl text-xs bg-emerald-100 text-emerald-900 border border-emerald-200 space-y-1";
    feedbackEl.innerHTML = `
      <div class="font-bold flex items-center gap-1">🎉 Excellent Job!</div>
      <p>${feedback}</p>
    `;
    feedbackEl.classList.remove('hidden');
    addXP(15);

    if (isMain) {
      document.getElementById('grammar-followup-box')?.classList.remove('hidden');
    }
  } else {
    button.className = "p-3 rounded-xl bg-amber-100 text-amber-900 font-bold text-xs border border-amber-300 text-left flex items-center justify-between";
    feedbackEl.className = "p-4 rounded-xl text-xs bg-amber-50 text-amber-800 border border-amber-200 space-y-1";
    feedbackEl.innerHTML = `
      <div class="font-bold flex items-center gap-1">Good try! 😊</div>
      <p>The correct answer is <strong>"${correct}"</strong>.</p>
      <p>${feedback}</p>
    `;
    feedbackEl.classList.remove('hidden');
  }
}

// ================= MODULE 4: SENTENCE BUILDER =================
function loadSentenceLevel(levelNum) {
  STATE.sbCurrentLevel = levelNum;
  const levelData = APP_DATA.sentenceBuilder.find(l => l.level === levelNum) || APP_DATA.sentenceBuilder[0];
  
  // Populate level dropdown
  const select = document.getElementById('sb-level-select');
  if (select && select.options.length === 0) {
    select.innerHTML = APP_DATA.sentenceBuilder.map(l => 
      `<option value="${l.level}">Level ${l.level}: ${l.target.substring(0, 15)}...</option>`
    ).join('');
  }
  if (select) select.value = levelNum;

  // Set target and hint
  document.getElementById('sb-target-translation').innerText = `Goal: "${levelData.target}"`;
  document.getElementById('sb-target-hint').innerText = levelData.translation;

  // Combine words and distractors and shuffle
  const allWords = [...levelData.words, ...levelData.distractors];
  // Fisher-Yates shuffle
  for (let i = allWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allWords[i], allWords[j]] = [allWords[j], allWords[i]];
  }

  STATE.sbBank = allWords;
  STATE.sbTray = [];

  renderSentenceBuilder();

  // Hide feedback panel
  const feed = document.getElementById('sb-feedback-panel');
  if (feed) feed.classList.add('hidden');
}

function renderSentenceBuilder() {
  const trayContainer = document.getElementById('sb-sentence-tray');
  const bankContainer = document.getElementById('sb-word-bank');

  // Render Tray
  if (STATE.sbTray.length === 0) {
    trayContainer.innerHTML = '<span class="text-xs text-slate-400 italic" id="sb-tray-placeholder">Click words from the word bank below to place them here...</span>';
  } else {
    trayContainer.innerHTML = STATE.sbTray.map((word, idx) => `
      <button onclick="removeWordFromTray(${idx})" class="word-chip px-3 py-1.5 rounded-xl bg-white border border-slate-300 shadow-xs text-xs font-bold text-slate-800 hover:bg-red-50 hover:border-red-300 transition flex items-center gap-1.5" title="Click to remove">
        <span>${word}</span>
        <i data-lucide="x" class="w-3 h-3 text-slate-400 hover:text-red-500"></i>
      </button>
    `).join('');
  }

  // Render Bank
  bankContainer.innerHTML = STATE.sbBank.map((word, idx) => `
    <button onclick="addWordToTray(${idx})" class="word-chip px-3.5 py-2 rounded-xl bg-white border border-emerald-200 shadow-xs text-xs font-bold text-emerald-900 hover:bg-emerald-100 transition" title="Click to place in sentence">
      ${word}
    </button>
  `).join('');

  refreshIcons();
}

function addWordToTray(bankIdx) {
  const word = STATE.sbBank.splice(bankIdx, 1)[0];
  STATE.sbTray.push(word);
  renderSentenceBuilder();
}

function removeWordFromTray(trayIdx) {
  const word = STATE.sbTray.splice(trayIdx, 1)[0];
  STATE.sbBank.push(word);
  renderSentenceBuilder();
}

function resetSentenceTray() {
  loadSentenceLevel(STATE.sbCurrentLevel);
}

function speakCurrentSentence() {
  const text = STATE.sbTray.join(' ') || APP_DATA.sentenceBuilder.find(l => l.level === STATE.sbCurrentLevel).target;
  speakText(text);
}

function hintSentenceBuilder() {
  const levelData = APP_DATA.sentenceBuilder.find(l => l.level === STATE.sbCurrentLevel);
  const feed = document.getElementById('sb-feedback-panel');
  if (feed) {
    feed.className = "p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900 space-y-1";
    feed.innerHTML = `
      <div class="font-bold flex items-center gap-1">💡 Sentence Rule Hint:</div>
      <p>${levelData.rule}</p>
    `;
    feed.classList.remove('hidden');
  }
}

function checkSentenceBuilder() {
  const levelData = APP_DATA.sentenceBuilder.find(l => l.level === STATE.sbCurrentLevel);
  const userSentence = STATE.sbTray.join(' ').trim();
  const targetSentence = levelData.target.trim();
  const feed = document.getElementById('sb-feedback-panel');

  if (userSentence === targetSentence) {
    feed.className = "p-5 rounded-2xl bg-emerald-100 border border-emerald-200 text-emerald-900 space-y-3";
    feed.innerHTML = `
      <div class="flex items-center justify-between">
        <div class="font-bold text-sm flex items-center gap-1.5">
          <span>🎉 Correct! Perfectly built!</span>
        </div>
        <button onclick="speakText('${targetSentence}')" class="px-2.5 py-1 rounded-lg bg-emerald-200 text-emerald-900 text-xs font-bold flex items-center gap-1">
          <i data-lucide="volume-2" class="w-3.5 h-3.5"></i> Listen
        </button>
      </div>
      <p class="text-xs leading-relaxed font-medium">
        <strong>Why this works:</strong> ${levelData.rule}
      </p>
      <div class="pt-2 border-t border-emerald-200 flex justify-end">
        <button onclick="nextSentenceLevel()" class="px-5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md transition flex items-center gap-1.5">
          Next Level <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `;
    feed.classList.remove('hidden');
    addXP(20);
    playSuccessChime();
  } else {
    feed.className = "p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2";
    feed.innerHTML = `
      <div class="font-bold text-sm flex items-center gap-1.5">
        <span>Good try! 😊 You are almost there.</span>
      </div>
      <p class="text-xs">
        Your current sentence: <em>"${userSentence || '(Empty)'}"</em>
      </p>
      <p class="text-xs text-amber-800">
        <strong>Grammar Tip:</strong> ${levelData.rule}
      </p>
      <button onclick="resetSentenceTray()" class="text-xs font-bold text-amber-800 underline mt-1">
        Try arranging again
      </button>
    `;
    feed.classList.remove('hidden');
  }
  refreshIcons();
}

function nextSentenceLevel() {
  if (STATE.sbCurrentLevel < APP_DATA.sentenceBuilder.length) {
    loadSentenceLevel(STATE.sbCurrentLevel + 1);
  } else {
    loadSentenceLevel(1);
  }
}

// ================= MODULE 5: SPEAKING PRACTICE WITH AI =================
function renderSpeakingScenario(scenarioId) {
  STATE.activeScenarioId = scenarioId;
  const scenario = APP_DATA.speakingScenarios.find(s => s.id === scenarioId) || APP_DATA.speakingScenarios[0];
  
  // Render scenario pills
  const pillsContainer = document.getElementById('speaking-scenario-pills');
  if (pillsContainer) {
    pillsContainer.innerHTML = APP_DATA.speakingScenarios.map(s => {
      const isActive = s.id === scenarioId;
      return `
        <button onclick="renderSpeakingScenario('${s.id}')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition ${
          isActive 
            ? 'bg-amber-500 text-white shadow-xs' 
            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
        }">
          <i data-lucide="${s.icon || 'message-circle'}" class="w-3.5 h-3.5"></i>
          <span>${s.title}</span>
        </button>
      `;
    }).join('');
  }

  // Update header title
  document.getElementById('speaking-active-title').innerText = scenario.title;
  document.getElementById('speaking-active-desc').innerText = scenario.desc;

  // Initialize chat history if empty
  if (!STATE.chatHistories[scenarioId]) {
    STATE.chatHistories[scenarioId] = [
      { sender: 'ai', text: scenario.aiGreeting }
    ];
    // Speak greeting if voice reply enabled
    if (document.getElementById('toggle-voice-reply')?.checked) {
      speakText(scenario.aiGreeting);
    }
  }

  // Render starter chips
  const startersContainer = document.getElementById('speaking-starter-chips');
  if (startersContainer) {
    startersContainer.innerHTML = scenario.suggestedStarters.map(text => `
      <button onclick="useStarterReply('${text.replace(/'/g, "\\'")}')" class="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 text-xs font-medium transition text-left">
        💬 "${text}"
      </button>
    `).join('');
  }

  renderChatMessages();
  refreshIcons();
}

function renderChatMessages() {
  const container = document.getElementById('speaking-chat-messages');
  if (!container) return;

  const history = STATE.chatHistories[STATE.activeScenarioId] || [];
  container.innerHTML = history.map(msg => {
    if (msg.sender === 'ai') {
      return `
        <div class="flex items-start gap-3 max-w-xl">
          <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
            AI
          </div>
          <div class="space-y-1.5">
            <div class="chat-bubble-ai p-4 shadow-xs text-xs sm:text-sm text-slate-800 leading-relaxed">
              ${msg.text}
            </div>
            <button onclick="speakText('${msg.text.replace(/'/g, "\\'")}')" class="text-[11px] text-slate-400 hover:text-brand-600 flex items-center gap-1 font-semibold pl-1">
              <i data-lucide="volume-2" class="w-3 h-3"></i> Listen
            </button>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="flex flex-col items-end gap-1.5 ml-auto max-w-xl">
          <div class="chat-bubble-user p-4 shadow-sm text-xs sm:text-sm leading-relaxed">
            ${msg.text}
          </div>
          ${msg.correction ? `
            <div class="chat-bubble-feedback p-3 rounded-xl text-xs text-amber-900 border border-amber-200 max-w-md space-y-1 shadow-xs">
              <div class="font-bold flex items-center gap-1">
                <span>Good try! 😊</span>
              </div>
              <p>You can say: <strong class="text-amber-950 font-bold">"${msg.correction.fix}"</strong></p>
              <p class="text-[11px] text-amber-800 font-medium">${msg.correction.reason}</p>
            </div>
          ` : ''}
        </div>
      `;
    }
  }).join('');

  container.scrollTop = container.scrollHeight;
  refreshIcons();
}

function useStarterReply(text) {
  const input = document.getElementById('speaking-input');
  if (input) {
    input.value = text;
    handleSpeakingSubmit();
  }
}

async function handleSpeakingSubmit(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('speaking-input');
  if (!input) return;

  const text = input.value.trim();
  if (!text) return;

  input.value = '';

  const scenario = APP_DATA.speakingScenarios.find(s => s.id === STATE.activeScenarioId);
  const history = STATE.chatHistories[STATE.activeScenarioId];

  // Gentle Mistake Detection Engine (Checks without embarrassing the user)
  let foundCorrection = null;
  if (scenario && scenario.aiReplies && scenario.aiReplies.corrections) {
    for (const corr of scenario.aiReplies.corrections) {
      if (corr.pattern.test(text)) {
        foundCorrection = corr;
        break;
      }
    }
  }

  // Push user message immediately
  history.push({
    sender: 'user',
    text: text,
    correction: foundCorrection
  });

  renderChatMessages();

  // Try server endpoint /api/chat first, fallback to client rules
  let aiReplyText = "";
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: text,
        scenario: scenario ? scenario.title : 'General',
        level: STATE.userLevel,
        apiKey: STATE.settings.apiKey
      })
    });
    if (res.ok) {
      const data = await res.json();
      aiReplyText = data.reply;
      if (data.correction && !foundCorrection) {
        history[history.length - 1].correction = data.correction;
      }
    }
  } catch (err) {
    // Standalone or offline fallback
  }

  if (!aiReplyText) {
    if (scenario && scenario.aiReplies && scenario.aiReplies.default) {
      aiReplyText = scenario.aiReplies.default;
    } else {
      aiReplyText = "Thank you for sharing! That is wonderful English. Would you like to practice another sentence together?";
    }
  }

  setTimeout(() => {
    history.push({
      sender: 'ai',
      text: aiReplyText
    });

    renderChatMessages();
    addXP(10);

    // Auto-speak response if toggle is enabled
    if (document.getElementById('toggle-voice-reply')?.checked) {
      speakText(aiReplyText);
    }
  }, 400);
}

function resetConversation() {
  delete STATE.chatHistories[STATE.activeScenarioId];
  renderSpeakingScenario(STATE.activeScenarioId);
}

// Web Speech Recognition for Microphone input
function toggleSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const micBtn = document.getElementById('mic-btn');
  
  if (!SpeechRecognition) {
    alert('Voice speech recognition is supported in Google Chrome, Microsoft Edge, and modern browsers.');
    return;
  }

  if (STATE.isRecording) {
    STATE.recognition?.stop();
    STATE.isRecording = false;
    micBtn?.classList.remove('recording-pulse', 'bg-red-500', 'text-white');
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    STATE.isRecording = true;
    micBtn?.classList.add('recording-pulse', 'bg-red-500', 'text-white');
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    const input = document.getElementById('speaking-input');
    if (input) {
      input.value = transcript;
    }
  };

  recognition.onerror = (event) => {
    console.warn('Speech recognition error:', event.error);
    STATE.isRecording = false;
    micBtn?.classList.remove('recording-pulse', 'bg-red-500', 'text-white');
  };

  recognition.onend = () => {
    STATE.isRecording = false;
    micBtn?.classList.remove('recording-pulse', 'bg-red-500', 'text-white');
  };

  STATE.recognition = recognition;
  recognition.start();
}

// ================= SETTINGS & PERSISTENCE =================
function openSettingsModal() {
  document.getElementById('settings-modal')?.classList.remove('hidden');
  const aiModeSelect = document.getElementById('setting-ai-mode');
  const apiKeyInput = document.getElementById('setting-api-key');
  const speechRateInput = document.getElementById('setting-speech-rate');

  if (aiModeSelect) aiModeSelect.value = STATE.settings.aiMode || 'builtin';
  if (apiKeyInput) apiKeyInput.value = STATE.settings.apiKey || '';
  if (speechRateInput) speechRateInput.value = STATE.settings.speechRate || 0.85;
}

function closeSettingsModal() {
  document.getElementById('settings-modal')?.classList.add('hidden');
}

function saveSettings() {
  const aiMode = document.getElementById('setting-ai-mode')?.value || 'builtin';
  const apiKey = document.getElementById('setting-api-key')?.value || '';
  const speechRate = parseFloat(document.getElementById('setting-speech-rate')?.value || '0.85');

  STATE.settings = { aiMode, apiKey, speechRate };
  localStorage.setItem('ee_settings', JSON.stringify(STATE.settings));
  closeSettingsModal();
}

function resetAllProgress() {
  if (confirm('Are you sure you want to reset your learning stats and progress?')) {
    localStorage.clear();
    STATE.userLevel = 'Beginner';
    STATE.streak = 1;
    STATE.wordsLearned = 0;
    STATE.lessonsCompleted = 0;
    STATE.xp = 0;
    updateDashboard();
    closeSettingsModal();
    navigateTo('welcome');
  }
}

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  // If user already onboarded, go to welcome or dashboard
  updateDashboard();
  navigateTo('welcome');
  refreshIcons();
});
