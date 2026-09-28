// English Learning App Data - Beginner Friendly Educational Dataset
const APP_DATA = {
  // Module 1: English Basics
  basics: {
    alphabet: [
      { letter: 'A a', sound: '/eɪ/', word: 'Apple', example: 'I like to eat a red apple.', meaning: 'A sweet round fruit', tip: 'Sounds like "Ay" as in day' },
      { letter: 'B b', sound: '/biː/', word: 'Book', example: 'I read an interesting book.', meaning: 'Pages with words and stories to read', tip: 'Sounds like "Bee"' },
      { letter: 'C c', sound: '/siː/', word: 'Cat', example: 'The small cat is sleeping.', meaning: 'A small pet animal that says meow', tip: 'Sounds like "K" in cat or "S" in city' },
      { letter: 'D d', sound: '/diː/', word: 'Door', example: 'Please open the door.', meaning: 'Entrance to a room or building', tip: 'Sounds like "Dee"' },
      { letter: 'E e', sound: '/iː/', word: 'Egg', example: 'She boiled an egg for breakfast.', meaning: 'Food that birds lay', tip: 'Sounds like "Ee" as in see' },
      { letter: 'F f', sound: '/ɛf/', word: 'Friend', example: 'Alex is my best friend.', meaning: 'A person you like and trust', tip: 'Sounds like "Eff"' },
      { letter: 'G g', sound: '/dʒiː/', word: 'Good', example: 'You did a very good job!', meaning: 'Nice, pleasant, or correct', tip: 'Sounds like "Jee"' },
      { letter: 'H h', sound: '/eɪtʃ/', word: 'House', example: 'They live in a beautiful house.', meaning: 'A place where people live', tip: 'Sounds like "Aytch"' },
      { letter: 'I i', sound: '/aɪ/', word: 'Ice', example: 'Ice is cold water.', meaning: 'Frozen water that is cold', tip: 'Sounds like "Eye"' },
      { letter: 'J j', sound: '/dʒeɪ/', word: 'Juice', example: 'I drink orange juice in the morning.', meaning: 'Liquid drink from fruits', tip: 'Sounds like "Jay"' },
      { letter: 'K k', sound: '/keɪ/', word: 'Key', example: 'Here is the key to my room.', meaning: 'Metal tool used to open locks', tip: 'Sounds like "Kay"' },
      { letter: 'L l', sound: '/ɛl/', word: 'Light', example: 'Turn on the light, please.', meaning: 'Brightness that helps us see', tip: 'Sounds like "Ell"' },
      { letter: 'M m', sound: '/ɛm/', word: 'Mother', example: 'My mother is very kind.', meaning: 'A female parent (mom)', tip: 'Sounds like "Emm"' },
      { letter: 'N n', sound: '/ɛn/', word: 'Name', example: 'What is your name?', meaning: 'What people call you', tip: 'Sounds like "Enn"' },
      { letter: 'O o', sound: '/oʊ/', word: 'Open', example: 'The shop is open today.', meaning: 'Not closed; ready for business', tip: 'Sounds like "Oh"' },
      { letter: 'P p', sound: '/piː/', word: 'Pen', example: 'I write with a blue pen.', meaning: 'Tool used with ink for writing', tip: 'Sounds like "Pee"' },
      { letter: 'Q q', sound: '/kjuː/', word: 'Quiet', example: 'Please be quiet in the library.', meaning: 'Making very little noise', tip: 'Sounds like "Kyoo"' },
      { letter: 'R r', sound: '/ɑːr/', word: 'Rain', example: 'The rain is falling outside.', meaning: 'Water drops falling from clouds', tip: 'Sounds like "Ahr"' },
      { letter: 'S s', sound: '/ɛs/', word: 'Sun', example: 'The sun shines brightly.', meaning: 'The bright star in our daytime sky', tip: 'Sounds like "Ess"' },
      { letter: 'T t', sound: '/tiː/', word: 'Time', example: 'What time is it now?', meaning: 'Hours, minutes, and seconds', tip: 'Sounds like "Tee"' },
      { letter: 'U u', sound: '/juː/', word: 'Umbrella', example: 'Take an umbrella when it rains.', meaning: 'Tool that protects you from rain', tip: 'Sounds like "Yoo"' },
      { letter: 'V v', sound: '/viː/', word: 'Voice', example: 'She has a calm, sweet voice.', meaning: 'Sound made when speaking or singing', tip: 'Sounds like "Vee"' },
      { letter: 'W w', sound: '/ˈdʌbəl.juː/', word: 'Water', example: 'Drink plenty of water every day.', meaning: 'Clear liquid essential for life', tip: 'Sounds like "Double-you"' },
      { letter: 'X x', sound: '/ɛks/', word: 'Box', example: 'Put the toys in the box.', meaning: 'Container with straight sides', tip: 'Sounds like "Ex"' },
      { letter: 'Y y', sound: '/waɪ/', word: 'Yes', example: 'Yes, I understand English.', meaning: 'Word used for agreement or affirmative', tip: 'Sounds like "Why"' },
      { letter: 'Z z', sound: '/zɛd/', word: 'Zero', example: 'Ten minus ten is zero.', meaning: 'The number 0 (nothing)', tip: 'Sounds like "Zee" or "Zed"' }
    ],
    numbers: [
      { word: 'One (1)', pron: '[Wun]', meaning: 'The first number', example: 'I have one sister.' },
      { word: 'Two (2)', pron: '[Too]', meaning: 'One plus one', example: 'She has two dogs.' },
      { word: 'Three (3)', pron: '[Three]', meaning: 'Two plus one', example: 'We have three classes today.' },
      { word: 'Four (4)', pron: '[For]', meaning: 'Three plus one', example: 'A car has four wheels.' },
      { word: 'Five (5)', pron: '[Fyve]', meaning: 'Four plus one', example: 'I have five fingers on my hand.' },
      { word: 'Six (6)', pron: '[Siks]', meaning: 'Five plus one', example: 'The clock shows six o’clock.' },
      { word: 'Seven (7)', pron: '[SEV-un]', meaning: 'Six plus one', example: 'There are seven days in a week.' },
      { word: 'Eight (8)', pron: '[Ayt]', meaning: 'Seven plus one', example: 'She sleeps for eight hours.' },
      { word: 'Nine (9)', pron: '[Nyne]', meaning: 'Eight plus one', example: 'It costs nine dollars.' },
      { word: 'Ten (10)', pron: '[Ten]', meaning: 'Nine plus one', example: 'I counted ten books on the desk.' },
      { word: 'Twenty (20)', pron: '[TWEN-tee]', meaning: 'Two tens', example: 'There are twenty students here.' },
      { word: 'Fifty (50)', pron: '[FIF-tee]', meaning: 'Five tens', example: 'The ticket costs fifty rupees.' },
      { word: 'Hundred (100)', pron: '[HUN-drid]', meaning: 'Ten tens', example: 'A century is one hundred years.' }
    ],
    colors: [
      { word: 'Red', hex: '#EF4444', pron: '[Red]', meaning: 'Color of blood, roses, strawberries', example: 'An apple is often red.' },
      { word: 'Blue', hex: '#3B82F6', pron: '[Bloo]', meaning: 'Color of a clear sky and deep ocean', example: 'The daytime sky is blue.' },
      { word: 'Green', hex: '#10B981', pron: '[Green]', meaning: 'Color of fresh grass and tree leaves', example: 'Leaves on trees are green.' },
      { word: 'Yellow', hex: '#F59E0B', pron: '[YEL-oh]', meaning: 'Color of bright lemons and sunshine', example: 'The warm sun is yellow.' },
      { word: 'Orange', hex: '#F97316', pron: '[OR-inj]', meaning: 'Color between red and yellow', example: 'She wears an orange sweater.' },
      { word: 'Purple', hex: '#8B5CF6', pron: '[PUR-pul]', meaning: 'Mix of blue and red', example: 'Grapes can be sweet and purple.' },
      { word: 'Pink', hex: '#EC4899', pron: '[Pingk]', meaning: 'Pale red color', example: 'Lotus flowers are soft pink.' },
      { word: 'White', hex: '#F8FAFC', pron: '[Wyte]', meaning: 'Color of clean milk and pure snow', example: 'Milk is clean white.' },
      { word: 'Black', hex: '#1E293B', pron: '[Blak]', meaning: 'Darkest color, opposite of white', example: 'The night sky is black.' },
      { word: 'Brown', hex: '#78350F', pron: '[Brown]', meaning: 'Color of wood, soil, and chocolate', example: 'Coffee is rich brown.' }
    ],
    daysMonths: [
      { word: 'Monday', pron: '[MUN-day]', meaning: 'The first working day of the week', example: 'We start our classes on Monday.' },
      { word: 'Tuesday', pron: '[TYOOZ-day]', meaning: 'The second day of the week', example: 'I visit my library every Tuesday.' },
      { word: 'Wednesday', pron: '[WENZ-day]', meaning: 'The middle weekday', example: 'Wednesday is halfway through the week.' },
      { word: 'Thursday', pron: '[THURZ-day]', meaning: 'Day before Friday', example: 'We have a sports meet this Thursday.' },
      { word: 'Friday', pron: '[FRY-day]', meaning: 'Last weekday before weekend', example: 'Friday evenings are relaxed.' },
      { word: 'Saturday', pron: '[SAT-er-day]', meaning: 'First day of the weekend', example: 'I go shopping on Saturday.' },
      { word: 'Sunday', pron: '[SUN-day]', meaning: 'Day of rest and family time', example: 'Sunday is a holiday for resting.' },
      { word: 'January', pron: '[JAN-yoo-air-ee]', meaning: 'First month of the new year', example: 'New Year begins in January.' },
      { word: 'July', pron: '[joo-LY]', meaning: 'Seventh month, middle of the year', example: 'July is warm and brings rain.' },
      { word: 'December', pron: '[dih-SEM-ber]', meaning: 'Last month of the year', example: 'Winter starts in December.' }
    ],
    family: [
      { word: 'Father', pron: '[FAH-ther]', meaning: 'Your male parent (Dad)', example: 'My father works hard for our family.' },
      { word: 'Mother', pron: '[MUH-ther]', meaning: 'Your female parent (Mom)', example: 'My mother cooks delicious food.' },
      { word: 'Brother', pron: '[BRUH-ther]', meaning: 'A boy or man who shares your parents', example: 'My elder brother helps me study.' },
      { word: 'Sister', pron: '[SIS-ter]', meaning: 'A girl or woman who shares your parents', example: 'My sister loves painting pictures.' },
      { word: 'Son', pron: '[Sun]', meaning: 'A male child', example: 'Their son goes to elementary school.' },
      { word: 'Daughter', pron: '[DAW-ter]', meaning: 'A female child', example: 'Her daughter is learning English.' },
      { word: 'Grandfather', pron: '[GRAND-fah-ther]', meaning: 'The father of your father or mother', example: 'My grandfather tells great stories.' },
      { word: 'Grandmother', pron: '[GRAND-muh-ther]', meaning: 'The mother of your father or mother', example: 'My grandmother makes sweet treats.' }
    ],
    commonObjects: [
      { word: 'Water', pron: '[WAW-ter]', meaning: 'Life-giving liquid drink', example: 'Please give me a glass of clean water.' },
      { word: 'Book', pron: '[Book]', meaning: 'Collection of printed pages', example: 'Open your English book to page ten.' },
      { word: 'Pen', pron: '[Pen]', meaning: 'Writing instrument with ink', example: 'Can I borrow your blue pen for a minute?' },
      { word: 'Phone', pron: '[Fohn]', meaning: 'Mobile device to call and message', example: 'My phone is ringing right now.' },
      { word: 'Table', pron: '[TAY-bul]', meaning: 'Flat furniture with legs to put things on', example: 'Place the notebook on the table.' },
      { word: 'Chair', pron: '[Chair]', meaning: 'Furniture made for one person to sit on', example: 'Please take a comfortable chair.' },
      { word: 'Bag', pron: '[Bag]', meaning: 'Container used to carry books or clothes', example: 'Put your laptop inside your bag.' },
      { word: 'Door', pron: '[Dor]', meaning: 'Movable barrier to enter a room', example: 'Always close the room door gently.' }
    ],
    verbs: [
      { word: 'Eat', pron: '[Eet]', meaning: 'Put food in mouth and swallow it', example: 'I eat fresh fruits every morning.' },
      { word: 'Drink', pron: '[Dringk]', meaning: 'Swallow liquid into the stomach', example: 'Drink warm water when you wake up.' },
      { word: 'Sleep', pron: '[Sleep]', meaning: 'Rest your body and mind with eyes closed', example: 'I sleep early to wake up fresh.' },
      { word: 'Go', pron: '[Goh]', meaning: 'Move or travel from one place to another', example: 'I go to college by bus.' },
      { word: 'Come', pron: '[Kum]', meaning: 'Move toward the speaker or here', example: 'Please come inside the room.' },
      { word: 'Read', pron: '[Reed]', meaning: 'Look at written words and understand them', example: 'We read simple English stories.' },
      { word: 'Write', pron: '[Ryte]', meaning: 'Make letters or words with a pen or keyboard', example: 'Write your full name clearly.' },
      { word: 'Speak', pron: '[Speek]', meaning: 'Say words with your voice', example: 'I speak English with my AI tutor.' },
      { word: 'Listen', pron: '[LIS-un]', meaning: 'Pay attention to sounds or voices', example: 'Listen carefully to the teacher.' },
      { word: 'Help', pron: '[Help]', meaning: 'Make something easier or do good for someone', example: 'Can you please help me with this word?' }
    ],
    adjectives: [
      { word: 'Happy', pron: '[HAP-ee]', meaning: 'Feeling joyful and pleased', example: 'I am very happy to learn new words.' },
      { word: 'Good', pron: '[Good]', meaning: 'High quality, enjoyable, or kind', example: 'This is a good English lesson.' },
      { word: 'Big', pron: '[Big]', meaning: 'Large in size or importance', example: 'Elephant is a very big animal.' },
      { word: 'Small', pron: '[Smawl]', meaning: 'Little in size, not large', example: 'A sparrow is a small bird.' },
      { word: 'Hot', pron: '[Hot]', meaning: 'High temperature, opposite of cold', example: 'Be careful, the tea is hot.' },
      { word: 'Cold', pron: '[Kohld]', meaning: 'Low temperature, like ice or winter', example: 'I enjoy drinking cold water in summer.' },
      { word: 'Easy', pron: '[EE-zee]', meaning: 'Not difficult, simple to do', example: 'This English sentence is easy.' },
      { word: 'Kind', pron: '[Kynd]', meaning: 'Caring, friendly, and helpful to others', example: 'She is a very kind person.' }
    ],
    dailyWords: [
      { word: 'Hello', pron: '[heh-LOH]', meaning: 'Friendly greeting to start speaking', example: 'Hello! How are you doing today?' },
      { word: 'Please', pron: '[Pleez]', meaning: 'Polite word when asking for something', example: 'Please help me pronounce this word.' },
      { word: 'Thank you', pron: '[THANGK yoo]', meaning: 'Polite words to show gratitude', example: 'Thank you very much for your advice.' },
      { word: 'Sorry', pron: '[SOR-ee]', meaning: 'Word used to apologize for a mistake', example: 'I am sorry for coming late.' },
      { word: 'Goodbye', pron: '[good-BYE]', meaning: 'Friendly word when leaving someone', example: 'Goodbye! See you tomorrow morning.' },
      { word: 'Excuse me', pron: '[ik-SKYOOZ mee]', meaning: 'Polite way to get someone’s attention', example: 'Excuse me, is this seat free?' },
      { word: 'Welcome', pron: '[WEL-kum]', meaning: 'Friendly response to "Thank you" or greeting a visitor', example: 'You are always welcome here.' }
    ]
  },

  // Module 2: Vocabulary across 12 Real-Life Situations
  vocabulary: {
    categories: [
      { id: 'home', name: 'Home', icon: 'home', desc: 'Everyday things around the house' },
      { id: 'college', name: 'College', icon: 'graduation-cap', desc: 'Studies, professors & campus' },
      { id: 'school', name: 'School', icon: 'backpack', desc: 'Classrooms, teachers & homework' },
      { id: 'office', name: 'Office', icon: 'briefcase', desc: 'Workplace, emails & meetings' },
      { id: 'shopping', name: 'Shopping', icon: 'shopping-cart', desc: 'Buying clothes, groceries & prices' },
      { id: 'restaurant', name: 'Restaurant', icon: 'utensils', desc: 'Ordering food, dining & bills' },
      { id: 'travel', name: 'Travel', icon: 'plane', desc: 'Tickets, trains, hotels & maps' },
      { id: 'hospital', name: 'Hospital', icon: 'cross', desc: 'Doctors, symptoms & medicines' },
      { id: 'friends', name: 'Friends', icon: 'users', desc: 'Hanging out, fun & chat' },
      { id: 'family', name: 'Family', icon: 'heart', desc: 'Relatives, home life & bonding' },
      { id: 'phone', name: 'Phone Calls', icon: 'phone-call', desc: 'Starting calls, leaving messages' },
      { id: 'interviews', name: 'Job Interviews', icon: 'award', desc: 'Introducing yourself & career skills' }
    ],
    items: {
      home: [
        {
          word: 'Kitchen',
          pron: '[KICH-in]',
          meaning: 'The room where food is cooked and prepared',
          example: 'Mother is preparing breakfast in the kitchen.',
          similar: ['Cooking room', 'Cookhouse'],
          question: 'Where do we cook food at home?',
          options: ['Bedroom', 'Kitchen', 'Garage', 'Garden'],
          answer: 'Kitchen',
          explanation: 'The kitchen is the specific room equipped for cooking meals.'
        },
        {
          word: 'Refrigerator',
          pron: '[ri-FRIJ-uh-ray-ter]',
          meaning: 'Electric appliance that keeps food and drinks cold and fresh (Fridge)',
          example: 'Keep the milk inside the refrigerator.',
          similar: ['Fridge', 'Cooler'],
          question: 'What appliance keeps food cold?',
          options: ['Stove', 'Refrigerator', 'Oven', 'Mirror'],
          answer: 'Refrigerator',
          explanation: 'A refrigerator or fridge keeps temperature low so food stays fresh.'
        },
        {
          word: 'Balcony',
          pron: '[BAL-kuh-nee]',
          meaning: 'An outside platform attached to an upper floor of a building',
          example: 'We enjoy drinking tea on our sunny balcony.',
          similar: ['Terrace', 'Porch'],
          question: 'An open outdoor area on an upper floor is called a:',
          options: ['Basement', 'Balcony', 'Closet', 'Drawer'],
          answer: 'Balcony',
          explanation: 'A balcony extends from the wall of a building above ground level.'
        },
        {
          word: 'Blanket',
          pron: '[BLANG-kit]',
          meaning: 'A warm woolen or cotton cloth to cover yourself in bed',
          example: 'It is cold tonight, please take an extra blanket.',
          similar: ['Quilt', 'Comforter', 'Cover'],
          question: 'What do you use to keep warm when sleeping?',
          options: ['Curtain', 'Blanket', 'Pillow', 'Rug'],
          answer: 'Blanket',
          explanation: 'A blanket covers you in bed to provide warmth.'
        }
      ],
      college: [
        {
          word: 'Professor',
          pron: '[pruh-FES-er]',
          meaning: 'A university or college teacher of high rank',
          example: 'Our English professor explains concepts very clearly.',
          similar: ['Teacher', 'Lecturer', 'Instructor'],
          question: 'Who teaches classes in a college or university?',
          options: ['Professor', 'Principal', 'Student', 'Librarian'],
          answer: 'Professor',
          explanation: 'Professors teach academic subjects at the college level.'
        },
        {
          word: 'Assignment',
          pron: '[uh-SYNE-munt]',
          meaning: 'A piece of work or homework given to students by a teacher',
          example: 'I have to submit my computer assignment before Friday.',
          similar: ['Homework', 'Task', 'Project'],
          question: 'Work given to students to complete at home is an:',
          options: ['Holiday', 'Assignment', 'Festival', 'Vacation'],
          answer: 'Assignment',
          explanation: 'An assignment is academic work assigned to learners.'
        },
        {
          word: 'Semester',
          pron: '[suh-MES-ter]',
          meaning: 'One of the two periods into which an academic year is divided',
          example: 'Our final semester examinations start next month.',
          similar: ['Term', 'Academic session', 'Half-year'],
          question: 'A six-month study period in college is called a:',
          options: ['Weekend', 'Semester', 'Decade', 'Century'],
          answer: 'Semester',
          explanation: 'A semester typically spans about 15-18 weeks of study.'
        },
        {
          word: 'Campus',
          pron: '[KAM-pus]',
          meaning: 'The grounds and buildings of a university or college',
          example: 'The college campus has lots of green trees and benches.',
          similar: ['College grounds', 'Premises'],
          question: 'The land and buildings of a college are called its:',
          options: ['Campus', 'Market', 'Station', 'Harbor'],
          answer: 'Campus',
          explanation: 'Campus refers to the total college area.'
        }
      ],
      school: [
        {
          word: 'Blackboard',
          pron: '[BLAK-bord]',
          meaning: 'A dark board in a classroom for writing on with chalk',
          example: 'The teacher wrote the math formula on the blackboard.',
          similar: ['Chalkboard', 'Whiteboard'],
          question: 'Teachers write notes in the classroom on a:',
          options: ['Blackboard', 'Cupboard', 'Window', 'Floor'],
          answer: 'Blackboard',
          explanation: 'Blackboards and whiteboards display lessons in class.'
        },
        {
          word: 'Homework',
          pron: '[HOHM-wurk]',
          meaning: 'School work that a student is given to do at home',
          example: 'Finish your homework before going out to play.',
          similar: ['School task', 'Home study'],
          question: 'School work done at home is called:',
          options: ['Playtime', 'Homework', 'Recess', 'Party'],
          answer: 'Homework',
          explanation: 'Homework reinforces what was taught during school hours.'
        },
        {
          word: 'Playground',
          pron: '[PLAY-grownd]',
          meaning: 'An outdoor area at school designed for children to play games',
          example: 'Students play football in the school playground.',
          similar: ['Sports field', 'Park'],
          question: 'Where do students run and play games at school?',
          options: ['Playground', 'Library', 'Office', 'Stairs'],
          answer: 'Playground',
          explanation: 'The playground provides safe outdoor recreational space.'
        }
      ],
      office: [
        {
          word: 'Colleague',
          pron: '[KOL-eeg]',
          meaning: 'A person you work with at the same company or job',
          example: 'My colleague David helped me finish the office report.',
          similar: ['Coworker', 'Workmate', 'Teammate'],
          question: 'A person who works with you in the same office is your:',
          options: ['Colleague', 'Customer', 'Competitor', 'Student'],
          answer: 'Colleague',
          explanation: 'Colleague is the formal word for a person sharing your workplace.'
        },
        {
          word: 'Deadline',
          pron: '[DED-lyne]',
          meaning: 'The latest date or time by which something must be finished',
          example: 'The project deadline is tomorrow at 5 PM.',
          similar: ['Due date', 'Target time', 'Cutoff'],
          question: 'The final time to complete a task is called a:',
          options: ['Break', 'Deadline', 'Holiday', 'Greeting'],
          answer: 'Deadline',
          explanation: 'A deadline marks the boundary time for task delivery.'
        },
        {
          word: 'Meeting',
          pron: '[MEE-ting]',
          meaning: 'An event where people come together to discuss work topics',
          example: 'We have a team meeting at 10 AM in the conference room.',
          similar: ['Discussion', 'Conference', 'Gathering'],
          question: 'When coworkers gather to discuss important work, it is a:',
          options: ['Vacation', 'Meeting', 'Dinner', 'Walk'],
          answer: 'Meeting',
          explanation: 'Meetings bring team members together to plan and collaborate.'
        }
      ],
      shopping: [
        {
          word: 'Discount',
          pron: '[DIS-kownt]',
          meaning: 'A reduction in the usual price of something',
          example: 'This store is offering a 20% discount on shoes today.',
          similar: ['Price reduction', 'Sale offer', 'Deduction'],
          question: 'When an item is sold for less money than usual, it has a:',
          options: ['Penalty', 'Discount', 'Fine', 'Tax'],
          answer: 'Discount',
          explanation: 'A discount saves you money on the original price.'
        },
        {
          word: 'Receipt',
          pron: '[ri-SEET]',
          meaning: 'A printed piece of paper showing that you have paid for goods',
          example: 'Always keep your receipt in case you want to return the shirt.',
          similar: ['Bill', 'Proof of purchase', 'Slip'],
          question: 'The paper slip given to prove you paid is called a:',
          options: ['Menu', 'Receipt', 'Ticket', 'Passport'],
          answer: 'Receipt',
          explanation: 'The letter "p" in receipt is silent: pronounce it "ri-SEET".'
        },
        {
          word: 'Cashier',
          pron: '[kash-EER]',
          meaning: 'The person in a shop who takes your money at the counter',
          example: 'I paid the cashier with my credit card.',
          similar: ['Clerk', 'Checkout assistant'],
          question: 'Who collects your money at the store checkout?',
          options: ['Cashier', 'Security', 'Driver', 'Mechanic'],
          answer: 'Cashier',
          explanation: 'Cashiers process customer payments and issue receipts.'
        }
      ],
      restaurant: [
        {
          word: 'Menu',
          pron: '[MEN-yoo]',
          meaning: 'A printed list of food and drinks available to order',
          example: 'Could we please have the menu card?',
          similar: ['Food list', 'Bill of fare'],
          question: 'What list shows available dishes in a restaurant?',
          options: ['Menu', 'Dictionary', 'Receipt', 'Diary'],
          answer: 'Menu',
          explanation: 'A menu lets diners choose what to order.'
        },
        {
          word: 'Delicious',
          pron: '[dih-LISH-us]',
          meaning: 'Having a very pleasant taste or smell',
          example: 'This homemade chicken soup is truly delicious!',
          similar: ['Tasty', 'Yummy', 'Flavorful'],
          question: 'Food that tastes wonderful is called:',
          options: ['Bitter', 'Delicious', 'Raw', 'Stale'],
          answer: 'Delicious',
          explanation: 'Delicious is a great positive compliment for food.'
        },
        {
          word: 'Bill',
          pron: '[Bil]',
          meaning: 'A statement of money owed for food eaten at a restaurant',
          example: 'Waiter, could you please bring us the bill?',
          similar: ['Check', 'Invoice', 'Tab'],
          question: 'What do you ask for when you are ready to pay at a restaurant?',
          options: ['Bill', 'Napkin', 'Spoon', 'Salt'],
          answer: 'Bill',
          explanation: 'In restaurants, people say "Could I have the bill/check, please?".'
        }
      ],
      travel: [
        {
          word: 'Passport',
          pron: '[PAS-port]',
          meaning: 'An official document certifying your identity for international travel',
          example: 'Make sure your passport is valid before traveling abroad.',
          similar: ['Travel document', 'ID'],
          question: 'Which document is necessary to travel to another country?',
          options: ['Library card', 'Passport', 'Movie ticket', 'Receipt'],
          answer: 'Passport',
          explanation: 'A passport proves your citizenship at international borders.'
        },
        {
          word: 'Luggage',
          pron: '[LUG-ij]',
          meaning: 'Bags and suitcases that contain your things when traveling',
          example: 'We collected our luggage from the airport carousel.',
          similar: ['Baggage', 'Suitcases', 'Bags'],
          question: 'Suitcases and travel bags are collectively called:',
          options: ['Furniture', 'Luggage', 'Vehicles', 'Tickets'],
          answer: 'Luggage',
          explanation: 'Luggage holds your clothing and personal items during travel.'
        },
        {
          word: 'Platform',
          pron: '[PLAT-form]',
          meaning: 'The raised flat area beside the train tracks where passengers board',
          example: 'Our train to Delhi arrives on platform number four.',
          similar: ['Track area', 'Station pier'],
          question: 'Where do passengers wait for trains at a station?',
          options: ['Runway', 'Platform', 'Balcony', 'Counter'],
          answer: 'Platform',
          explanation: 'Trains pull up along platforms for safe passenger boarding.'
        }
      ],
      hospital: [
        {
          word: 'Prescription',
          pron: '[prih-SKRIP-shun]',
          meaning: 'A piece of paper written by a doctor stating what medicine you need',
          example: 'The chemist gave me medicine according to the doctor’s prescription.',
          similar: ['Medical advice', 'Rx order'],
          question: 'The paper a doctor gives listing your medicines is a:',
          options: ['Prescription', 'Menu', 'Invoice', 'Flyer'],
          answer: 'Prescription',
          explanation: 'Pharmacists dispense regulated medicine against a doctor’s prescription.'
        },
        {
          word: 'Appointment',
          pron: '[uh-POYNT-munt]',
          meaning: 'An agreed meeting time arranged in advance to see someone',
          example: 'I have a doctor’s appointment at three o’clock.',
          similar: ['Booking', 'Scheduled visit'],
          question: 'A scheduled visit to see a doctor is called an:',
          options: ['Appointment', 'Accident', 'Excitement', 'Impression'],
          answer: 'Appointment',
          explanation: 'Making an appointment ensures the medical practitioner is available.'
        },
        {
          word: 'Emergency',
          pron: '[ih-MUR-jun-see]',
          meaning: 'A serious unexpected situation requiring immediate action',
          example: 'Call an ambulance immediately, it is a medical emergency!',
          similar: ['Urgent crisis', 'Critical situation'],
          question: 'A sudden, serious medical situation requiring rapid help is an:',
          options: ['Holiday', 'Emergency', 'Routine', 'Hobby'],
          answer: 'Emergency',
          explanation: 'Emergency rooms operate 24/7 for urgent, life-threatening care.'
        }
      ],
      friends: [
        {
          word: 'Hang out',
          pron: '[hang owt]',
          meaning: 'To spend casual, relaxing time together with friends',
          example: 'We usually hang out at the cafe after college.',
          similar: ['Spend time', 'Chill together', 'Meet up'],
          question: 'What phrase means spending casual fun time with friends?',
          options: ['Work overtime', 'Hang out', 'Fall down', 'Run away'],
          answer: 'Hang out',
          explanation: '"Hang out" is very common informal English for socializing.'
        },
        {
          word: 'Trust',
          pron: '[Trust]',
          meaning: 'To believe that someone is honest and will not harm you',
          example: 'True friends always trust each other.',
          similar: ['Believe in', 'Rely on', 'Faith'],
          question: 'Believing that your friend will always tell the truth is called:',
          options: ['Doubt', 'Trust', 'Fear', 'Envy'],
          answer: 'Trust',
          explanation: 'Trust is the foundation of any strong friendship.'
        }
      ],
      family: [
        {
          word: 'Relative',
          pron: '[REL-uh-tiv]',
          meaning: 'A person connected to you by blood or marriage (uncles, aunts, cousins)',
          example: 'All our relatives gathered together for the wedding.',
          similar: ['Kinsman', 'Family member', 'Relation'],
          question: 'People related to you by blood or marriage are your:',
          options: ['Strangers', 'Relatives', 'Rivals', 'Passengers'],
          answer: 'Relatives',
          explanation: 'Relatives include extended family like grandparents, uncles, and cousins.'
        },
        {
          word: 'Support',
          pron: '[suh-PORT]',
          meaning: 'Giving help, care, and encouragement to someone in need',
          example: 'My parents always support my dream of learning English.',
          similar: ['Help', 'Backing', 'Encouragement'],
          question: 'When family helps and encourages you, they give you:',
          options: ['Support', 'Penalty', 'Punishment', 'Neglect'],
          answer: 'Support',
          explanation: 'Family support helps learners build confidence.'
        }
      ],
      phone: [
        {
          word: 'Speak to',
          pron: '[speek too]',
          meaning: 'Polite phrase used to ask to talk with a specific person on the phone',
          example: 'Hello, could I please speak to Dr. Sharma?',
          similar: ['Talk with', 'Reach out to'],
          question: 'When calling an office, you say: "May I _____ Mr. John?"',
          options: ['speak to', 'watch to', 'shout at', 'break into'],
          answer: 'speak to',
          explanation: '"Could I speak to [Name]?" is the standard polite telephone request.'
        },
        {
          word: 'Call back',
          pron: '[kawl bak]',
          meaning: 'To return a phone call later because someone was busy',
          example: 'I am in a meeting right now. Can I call you back in 15 minutes?',
          similar: ['Return the call', 'Ring back'],
          question: 'If you are busy when someone rings, you tell them: "I will _____ you later."',
          options: ['call back', 'hang down', 'walk back', 'sleep back'],
          answer: 'call back',
          explanation: '"Call back" means phoning someone again at a convenient time.'
        }
      ],
      interviews: [
        {
          word: 'Strength',
          pron: '[Strength]',
          meaning: 'A good quality, skill, or ability that you are very good at',
          example: 'My biggest strength is that I learn new things very quickly.',
          similar: ['Strong point', 'Asset', 'Capability'],
          question: 'A skill or quality you are very good at in an interview is a:',
          options: ['Weakness', 'Strength', 'Doubt', 'Mistake'],
          answer: 'Strength',
          explanation: 'Interviewers often ask: "What are your greatest strengths?".'
        },
        {
          word: 'Experience',
          pron: '[ik-SPEER-ee-uns]',
          meaning: 'Knowledge and skills gained from doing a job for a period of time',
          example: 'I have two years of customer service experience.',
          similar: ['Background', 'Work history', 'Skill set'],
          question: 'Knowledge gained through previous jobs is called:',
          options: ['Experience', 'Ignorance', 'Imagination', 'Dream'],
          answer: 'Experience',
          explanation: 'Experience reflects real-world practice in a career.'
        }
      ]
    }
  },

  // Module 3: Grammar from Absolute Basics (15 Modules)
  grammar: [
    {
      id: 'nouns',
      title: '1. Nouns (Naming Words)',
      concept: 'What is a Noun?',
      explanation: 'A noun is simply a naming word. Everything you can see, touch, or name is a noun! It can be a person, a place, an animal, or a thing.',
      simpleRule: 'Person (Rohan) • Place (City) • Thing (Phone) • Animal (Dog)',
      simpleExample: 'Rohan (person) plays with a ball (thing) in the park (place).',
      everydayExamples: [
        'Mother is cooking rice in the kitchen.',
        'The cat is drinking fresh milk.',
        'Delhi is a large city in India.',
        'I am holding a black pen in my hand.'
      ],
      question: 'Which word in this sentence is a person (Noun)? "The doctor gave me warm tea."',
      options: ['Doctor', 'Gave', 'Warm', 'Me'],
      answer: 'Doctor',
      feedbackWhy: 'Great job! "Doctor" is a person, which makes it a noun. "Gave" is an action (verb) and "warm" is describing the tea (adjective).',
      followUpQuestion: 'Find the thing (Noun) in: "She bought a new book yesterday."',
      followUpOptions: ['Bought', 'New', 'Book', 'Yesterday'],
      followUpAnswer: 'Book',
      followUpWhy: '"Book" is a physical thing you can hold and read, so it is a noun!'
    },
    {
      id: 'pronouns',
      title: '2. Pronouns (Replacer Words)',
      concept: 'Words that take the place of nouns',
      explanation: 'Instead of repeating a person’s name again and again, we use short friendly words called pronouns. If you talk about a boy, say "he". If a girl, say "she". For objects or animals, say "it". For yourself, say "I".',
      simpleRule: 'I, You, He, She, It, We, They',
      simpleExample: 'Ravi is happy because he passed his English test. (We used "he" instead of repeating "Ravi").',
      everydayExamples: [
        'Priya is absent today because she is sick.',
        'This phone is new. It takes beautiful photos.',
        'Rahul and I are friends. We study together.',
        'The children are playing outside. They look excited.'
      ],
      question: 'Replace the underlined name: "Anita loves music. _____ sings sweetly."',
      options: ['He', 'She', 'It', 'They'],
      answer: 'She',
      feedbackWhy: 'Super! Anita is a female name, so we use the pronoun "She".',
      followUpQuestion: 'Which pronoun replaces two friends: "Aman and Vikram are here. _____ want water."',
      followUpOptions: ['He', 'She', 'They', 'It'],
      followUpAnswer: 'They',
      followUpWhy: 'When talking about two or more other people, always use "They"!'
    },
    {
      id: 'verbs',
      title: '3. Verbs (Action Words)',
      concept: 'Words that show action or state',
      explanation: 'A verb tells us what someone or something is doing. Without a verb, a sentence cannot breathe! Words like walk, run, eat, drink, think, and smile are all verbs.',
      simpleRule: 'Actions: Eat, Run, Sleep, Study • Helping verbs: Is, Are, Am, Was, Were',
      simpleExample: 'The boy runs to the bus stop.',
      everydayExamples: [
        'I drink a cup of milk every morning.',
        'Birds fly high in the blue sky.',
        'She writes clean notes in her book.',
        'We speak English during our practice.'
      ],
      question: 'What is the action word (Verb) in: "The boy sleeps early at night."',
      options: ['The', 'Boy', 'Sleeps', 'Night'],
      answer: 'Sleeps',
      feedbackWhy: 'Spot on! "Sleeps" is the physical action happening in the sentence.',
      followUpQuestion: 'Identify the verb in: "They listen to the teacher carefully."',
      followUpOptions: ['Listen', 'Teacher', 'They', 'Carefully'],
      followUpAnswer: 'Listen',
      followUpWhy: '"Listen" is the action of hearing with attention.'
    },
    {
      id: 'adjectives',
      title: '4. Adjectives (Describing Words)',
      concept: 'Words that describe nouns',
      explanation: 'Adjectives add color and detail to things! They tell us how something looks, feels, tastes, smells, or how many there are.',
      simpleRule: 'Answers: What kind? (Red car, Hot tea) • How many? (Two dogs)',
      simpleExample: 'She wore a bright yellow dress.',
      everydayExamples: [
        'This room is very clean and quiet.',
        'I had a cold glass of sweet water.',
        'An elephant is a heavy, strong animal.',
        'He is a kind and helpful boy.'
      ],
      question: 'Find the describing word (Adjective) in: "My grandmother lives in a small house."',
      options: ['Lives', 'Small', 'House', 'Grandmother'],
      answer: 'Small',
      feedbackWhy: 'Wonderful! "Small" tells us what kind of house it is, so it is an adjective.',
      followUpQuestion: 'Which word is the adjective in: "We saw three colorful birds."',
      followUpOptions: ['Saw', 'Birds', 'Colorful', 'We'],
      followUpAnswer: 'Colorful',
      followUpWhy: '"Colorful" describes the appearance of the birds.'
    },
    {
      id: 'adverbs',
      title: '5. Adverbs (How Actions Happen)',
      concept: 'Words that tell us how, when, or where',
      explanation: 'Adverbs describe verbs! Most of them end with "-ly" and tell you HOW an action was done (slowly, loudly, carefully, quickly).',
      simpleRule: 'Action + How? (He ran quickly. She speaks politely.)',
      simpleExample: 'The turtle walks very slowly.',
      everydayExamples: [
        'Please write your answers carefully.',
        'The rain is pouring heavily today.',
        'She answered the interview questions confidently.',
        'He came home yesterday.'
      ],
      question: 'Which word is the adverb in: "He finished his meal quickly."',
      options: ['He', 'Meal', 'Quickly', 'Finished'],
      answer: 'Quickly',
      feedbackWhy: 'Excellent! "Quickly" tells us how he finished his meal.',
      followUpQuestion: 'Choose the adverb in: "The baby cried loudly."',
      followUpOptions: ['The', 'Baby', 'Cried', 'Loudly'],
      followUpAnswer: 'Loudly',
      followUpWhy: '"Loudly" describes how the baby was crying.'
    },
    {
      id: 'articles',
      title: '6. Articles (A, An, The)',
      concept: 'Little helper words before nouns',
      explanation: 'Use "A" before consonant sounds (a book, a cat, a car). Use "An" before vowel sounds: a, e, i, o, u (an apple, an egg, an umbrella). Use "The" when talking about one specific thing known to both speaker and listener, or unique things (the sun, the moon, the door).',
      simpleRule: 'A + Consonant (A dog) • AN + Vowel Sound (An orange) • THE + Specific/Unique (The moon)',
      simpleExample: 'I ate an orange and a banana.',
      everydayExamples: [
        'She is carrying an umbrella.',
        'There is a doctor in the clinic.',
        'The sky is clear blue today.',
        'Pass me the salt on the table, please.'
      ],
      question: 'Fill in the blank: "Rohan saw _____ elephant at the zoo."',
      options: ['a', 'an', 'the', 'no article needed'],
      answer: 'an',
      feedbackWhy: 'Perfect! "Elephant" begins with the vowel sound "E", so we use "an".',
      followUpQuestion: 'Fill in the blank: "I need _____ pen to sign this letter."',
      followUpOptions: ['an', 'a', 'the', 'these'],
      followUpAnswer: 'a',
      followUpWhy: '"Pen" starts with the consonant sound "P", so we say "a pen".'
    },
    {
      id: 'prepositions',
      title: '7. Prepositions (Position & Direction)',
      concept: 'Where or when something happens',
      explanation: 'Prepositions show the position of things in space or time: IN (inside a box), ON (on top of a table), AT (specific spot or time), UNDER (below something).',
      simpleRule: 'In = inside • On = touching the surface • Under = below • At = at a point/time',
      simpleExample: 'The book is on the table.',
      everydayExamples: [
        'The keys are inside my bag.',
        'The cat is resting under the bed.',
        'Our class starts at 9:00 AM.',
        'She is waiting at the bus stop.'
      ],
      question: 'Fill in the blank: "The phone is _____ the desk."',
      options: ['at', 'on', 'with', 'by'],
      answer: 'on',
      feedbackWhy: 'Correct! When an item sits on top of a flat surface touching it, we use "on".',
      followUpQuestion: 'Fill in the blank: "Fish swim _____ the water."',
      followUpOptions: ['on', 'in', 'under', 'at'],
      followUpAnswer: 'in',
      followUpWhy: 'Fish are inside the body of water, so we use "in".'
    },
    {
      id: 'conjunctions',
      title: '8. Conjunctions (Connecting Words)',
      concept: 'Joining words and sentences',
      explanation: 'Conjunctions glue words or whole sentences together! Use "and" to add information, "but" to show a contrast, "because" to explain why, and "or" to give a choice.',
      simpleRule: 'AND = addition • BUT = contrast • BECAUSE = reason • OR = choice',
      simpleExample: 'I like tea and biscuits, but my brother prefers coffee.',
      everydayExamples: [
        'She was tired because she worked hard all day.',
        'Do you want water or juice?',
        'I studied well, so I passed the examination.',
        'He is small but very strong.'
      ],
      question: 'Fill in: "I wanted to go out, _____ it started raining heavily."',
      options: ['and', 'but', 'so', 'because'],
      answer: 'but',
      feedbackWhy: 'Well done! "But" introduces an unexpected turn or contrast.',
      followUpQuestion: 'Fill in: "She smiled _____ she was very happy."',
      followUpOptions: ['because', 'or', 'but', 'if'],
      followUpAnswer: 'because',
      followUpWhy: '"Because" explains the reason behind the smile.'
    },
    {
      id: 'singular_plural',
      title: '9. Singular and Plural (One vs Many)',
      concept: 'Talking about one thing vs multiple things',
      explanation: 'Singular means just ONE thing (one pen, one book). Plural means MORE THAN ONE (two pens, three books). Most words just add an "-s" or "-es" at the end.',
      simpleRule: 'One cat -> Two cats • One box -> Two boxes • Child -> Children (special)',
      simpleExample: 'I have one watch, but my brother has three watches.',
      everydayExamples: [
        'There is one apple in the basket. There are five apples on the tree.',
        'One glass -> Two glasses.',
        'One bus -> Many buses.',
        'One boy -> Four boys.'
      ],
      question: 'What is the plural of "box"?',
      options: ['boxs', 'boxes', 'boxies', 'boxen'],
      answer: 'boxes',
      feedbackWhy: 'Great! Words ending in -x, -s, -sh, -ch add "-es" to make plurals: box -> boxes.',
      followUpQuestion: 'What is the plural of "child"?',
      followUpOptions: ['childs', 'childrens', 'children', 'childes'],
      followUpAnswer: 'children',
      followUpWhy: '"Child" is an irregular noun; one child, many children!'
    },
    {
      id: 'subject_predicate',
      title: '10. Subject and Predicate',
      concept: 'The two core parts of every sentence',
      explanation: 'Every English sentence has two main parts: 1) The SUBJECT (WHO or WHAT the sentence is about). 2) The PREDICATE (WHAT the subject is doing or what is happening to it).',
      simpleRule: 'Subject = The doer (Ravi) • Predicate = The action + rest (plays football)',
      simpleExample: 'The little girl (Subject) is drawing a flower (Predicate).',
      everydayExamples: [
        'My mother (Subject) makes hot tea (Predicate).',
        'The train (Subject) arrived on time (Predicate).',
        'We (Subject) are learning English together (Predicate).',
        'The sun (Subject) rises in the east (Predicate).'
      ],
      question: 'Identify the SUBJECT in: "The green bird sang a lovely song."',
      options: ['The green bird', 'Sang', 'A lovely song', 'Lovely'],
      answer: 'The green bird',
      feedbackWhy: 'Spot on! "The green bird" is who the sentence is telling us about.',
      followUpQuestion: 'Identify the PREDICATE in: "Rahul plays guitar."',
      followUpOptions: ['Rahul', 'Plays guitar', 'Plays', 'Guitar'],
      followUpAnswer: 'Plays guitar',
      followUpWhy: '"Plays guitar" tells us what Rahul does, which forms the complete predicate.'
    },
    {
      id: 'sentence_formation',
      title: '11. Sentence Formation (S + V + O)',
      concept: 'How English sentences are put in order',
      explanation: 'English has a simple golden order for basic sentences: Subject (Who) + Verb (Action) + Object (What/Who receives action). Example: "I" (Subject) + "eat" (Verb) + "apples" (Object).',
      simpleRule: 'SUBJECT (Who) + VERB (Does what) + OBJECT (To what)',
      simpleExample: 'She (S) + drinks (V) + milk (O).',
      everydayExamples: [
        'Rohan plays cricket.',
        'We watch movies on Sunday.',
        'The teacher praised the students.',
        'I read an English newspaper.'
      ],
      question: 'Which is the correct sentence order?',
      options: [
        'Cricket Rohan plays.',
        'Plays Rohan cricket.',
        'Rohan plays cricket.',
        'Cricket plays Rohan.'
      ],
      answer: 'Rohan plays cricket.',
      feedbackWhy: 'Bingo! Subject (Rohan) + Verb (plays) + Object (cricket) is the proper English order.',
      followUpQuestion: 'Arrange in correct order: "water / drinks / She"',
      followUpOptions: [
        'Water drinks she.',
        'She drinks water.',
        'Drinks she water.',
        'She water drinks.'
      ],
      followUpAnswer: 'She drinks water.',
      followUpWhy: 'Subject (She) + Verb (drinks) + Object (water)!'
    },
    {
      id: 'tenses',
      title: '12. Tenses (Present, Past, Future)',
      concept: 'When does the action take place?',
      explanation: 'Tenses tell the time of an action! 1) Present: happening now or every day ("I eat"). 2) Past: already happened yesterday or before ("I ate"). 3) Future: going to happen tomorrow or later ("I will eat").',
      simpleRule: 'Past: Yesterday (went, ate) • Present: Today/Now (go, eat) • Future: Tomorrow (will go, will eat)',
      simpleExample: 'Yesterday I cooked. Today I cook. Tomorrow I will cook.',
      everydayExamples: [
        'Present: He works in an office.',
        'Past: He worked in an office last year.',
        'Future: He will work in a new office next month.',
        'I am studying English right now.'
      ],
      question: 'Which sentence talks about the FUTURE?',
      options: [
        'I went to college yesterday.',
        'I go to college every morning.',
        'I will go to college tomorrow.',
        'I am at college now.'
      ],
      answer: 'I will go to college tomorrow.',
      feedbackWhy: 'Super! "Will go" points toward future time that has not happened yet.',
      followUpQuestion: 'Which sentence is in the PAST?',
      followUpOptions: [
        'She sings a song.',
        'She sang a song.',
        'She will sing a song.',
        'She is singing a song.'
      ],
      followUpAnswer: 'She sang a song.',
      followUpWhy: '"Sang" is the past form of the verb "sing".'
    },
    {
      id: 'active_passive',
      title: '13. Active and Passive Voice',
      concept: 'Focusing on the doer vs the receiver',
      explanation: 'In ACTIVE voice, the subject does the action directly ("The cat chased the mouse"). In PASSIVE voice, the focus shifts to the object that received the action ("The mouse was chased by the cat"). In everyday speaking, active voice is usually much friendlier and easier!',
      simpleRule: 'Active: [Doer] does [Action] -> Passive: [Thing] was done by [Doer]',
      simpleExample: 'Ravi wrote a letter (Active). -> A letter was written by Ravi (Passive).',
      everydayExamples: [
        'Active: Chef cooks delicious meals.',
        'Passive: Delicious meals are cooked by the chef.',
        'Active: She cleaned the room.',
        'Passive: The room was cleaned by her.'
      ],
      question: 'Convert to passive: "The boy kicked the ball."',
      options: [
        'The ball was kicked by the boy.',
        'The ball kicks the boy.',
        'The boy was kicked by the ball.',
        'Kicked the ball was boy.'
      ],
      answer: 'The ball was kicked by the boy.',
      feedbackWhy: 'Correct! The ball became the focus, followed by "was kicked by the boy".',
      followUpQuestion: 'Is this Active or Passive? "The teacher explained the lesson."',
      followUpOptions: ['Active Voice', 'Passive Voice'],
      followUpAnswer: 'Active Voice',
      followUpWhy: 'The teacher (subject) directly performed the action of explaining.'
    },
    {
      id: 'questions',
      title: '14. Question Formation',
      concept: 'How to ask questions in English',
      explanation: 'To ask questions, we put question words or helping verbs at the very beginning! WH-words: What (thing), Where (place), When (time), Why (reason), Who (person), How (manner). Or start with Do, Does, Is, Are, Can.',
      simpleRule: 'Question Word + Helping Verb + Subject + Verb? ("Where do you live?")',
      simpleExample: 'Do you speak English? Yes, I do!',
      everydayExamples: [
        'What is your favorite color?',
        'Where is the railway station?',
        'When will the class start?',
        'Can you please help me?'
      ],
      question: 'How do you ask about someone’s living location?',
      options: [
        'What you live?',
        'Where do you live?',
        'When do you live?',
        'Who do you live?'
      ],
      answer: 'Where do you live?',
      feedbackWhy: '"Where" asks about place or location, combined with the helper "do".',
      followUpQuestion: 'Choose the correct question to ask someone if they drink coffee:',
      followUpOptions: [
        'Do you drink coffee?',
        'You drink coffee do?',
        'Are you drink coffee?',
        'Drink you coffee?'
      ],
      followUpAnswer: 'Do you drink coffee?',
      followUpWhy: 'With simple present verbs like "drink", we start questions with "Do you...?"'
    },
    {
      id: 'mistakes',
      title: '15. Common Grammar Mistakes',
      concept: 'Mistakes beginners often make and how to fix them',
      explanation: 'Don’t worry about making mistakes—everyone does when learning! Here are the most common ones beginners encounter so you can speak with clarity and confidence.',
      simpleRule: 'Say "I agree" (not "I am agree") • Say "She does" (not "She do") • Say "He goes" (not "He go")',
      simpleExample: 'Incorrect: "I am agree with you." -> Correct: "I agree with you."',
      everydayExamples: [
        'Mistake: "She don’t like tea." -> Correct: "She doesn’t like tea."',
        'Mistake: "He go to office by car." -> Correct: "He goes to office by car."',
        'Mistake: "I have 20 years old." -> Correct: "I am 20 years old."',
        'Mistake: "Yesterday I go to market." -> Correct: "Yesterday I went to market."'
      ],
      question: 'Choose the grammatically correct sentence:',
      options: [
        'I am agree with you.',
        'I agree with you.',
        'I agrees with you.',
        'I am agreed with you.'
      ],
      answer: 'I agree with you.',
      feedbackWhy: 'Brilliant! "Agree" is already a verb, so you don’t need "am". Just say "I agree".',
      followUpQuestion: 'Fix this sentence: "He do his homework every evening."',
      followUpOptions: [
        'He does his homework every evening.',
        'He is do his homework every evening.',
        'He doing his homework every evening.',
        'He did not his homework every evening.'
      ],
      followUpAnswer: 'He does his homework every evening.',
      followUpWhy: 'With He / She / It, we add -es: "He does his homework".'
    }
  ],

  // Module 4: Sentence Builder Levels
  sentenceBuilder: [
    {
      level: 1,
      target: 'I am happy.',
      words: ['am', 'I', 'happy.'],
      distractors: ['are', 'sad'],
      translation: 'I am happy. (Shows feeling)',
      rule: 'Sentence starts with "I", followed by helper verb "am", then state "happy".'
    },
    {
      level: 2,
      target: 'She is a teacher.',
      words: ['She', 'is', 'a', 'teacher.'],
      distractors: ['are', 'student'],
      translation: 'She is a teacher. (Shows occupation)',
      rule: 'With "She", use "is", plus article "a" before singular job title "teacher".'
    },
    {
      level: 3,
      target: 'We like to read.',
      words: ['We', 'like', 'to', 'read.'],
      distractors: ['likes', 'reading'],
      translation: 'We like to read. (Expresses habit)',
      rule: 'With plural pronoun "We", verb is base form "like", followed by infinitive "to read".'
    },
    {
      level: 4,
      target: 'I am going to college.',
      words: ['I', 'am', 'going', 'to', 'college.'],
      distractors: ['go', 'went', 'at'],
      translation: 'I am going to college. (Continuous action)',
      rule: 'Present continuous: Subject (I) + "am" + Verb-ing (going) + Preposition (to) + Place (college).'
    },
    {
      level: 5,
      target: 'He is eating an apple.',
      words: ['He', 'is', 'eating', 'an', 'apple.'],
      distractors: ['a', 'eats', 'banana'],
      translation: 'He is eating an apple.',
      rule: 'Use "is eating" for action happening right now, and "an" before "apple" (vowel sound).'
    },
    {
      level: 6,
      target: 'They are playing cricket outside.',
      words: ['They', 'are', 'playing', 'cricket', 'outside.'],
      distractors: ['is', 'plays', 'inside'],
      translation: 'They are playing cricket outside.',
      rule: '"They" pairs with "are" for plural subjects + verb-ing.'
    },
    {
      level: 7,
      target: 'I went to college yesterday.',
      words: ['I', 'went', 'to', 'college', 'yesterday.'],
      distractors: ['go', 'tomorrow', 'gone'],
      translation: 'I went to college yesterday. (Past action)',
      rule: 'For past time ("yesterday"), use past verb "went" instead of "go".'
    },
    {
      level: 8,
      target: 'She called her friend last night.',
      words: ['She', 'called', 'her', 'friend', 'last', 'night.'],
      distractors: ['calls', 'him', 'today'],
      translation: 'She called her friend last night.',
      rule: 'Past tense of "call" is "called", and feminine possessive is "her".'
    },
    {
      level: 9,
      target: 'I will go to college tomorrow.',
      words: ['I', 'will', 'go', 'to', 'college', 'tomorrow.'],
      distractors: ['went', 'yesterday', 'going'],
      translation: 'I will go to college tomorrow. (Future action)',
      rule: 'Future actions use "will" + base verb "go", matching the time word "tomorrow".'
    },
    {
      level: 10,
      target: 'We will learn English together.',
      words: ['We', 'will', 'learn', 'English', 'together.'],
      distractors: ['learned', 'alone', 'are'],
      translation: 'We will learn English together.',
      rule: '"We will learn" expresses a positive future intention.'
    },
    {
      level: 11,
      target: 'Where is the nearest train station?',
      words: ['Where', 'is', 'the', 'nearest', 'train', 'station?'],
      distractors: ['What', 'are', 'far'],
      translation: 'Where is the nearest train station? (Question)',
      rule: 'Question order: Question word (Where) + Verb (is) + Article (the) + Adjective (nearest) + Noun.'
    },
    {
      level: 12,
      target: 'Could you please help me today?',
      words: ['Could', 'you', 'please', 'help', 'me', 'today?'],
      distractors: ['Can', 'must', 'them'],
      translation: 'Could you please help me today? (Polite request)',
      rule: '"Could you please..." is one of the most polite and natural ways to ask for assistance.'
    }
  ],

  // Module 5: Speaking Practice Scenarios & AI Responses
  speakingScenarios: [
    {
      id: 'intro',
      title: 'Introducing Yourself',
      icon: 'user-check',
      desc: 'Learn how to state your name, where you are from, and what you do.',
      aiGreeting: 'Hello! Welcome! I am your AI practice partner. What is your name and where are you from?',
      suggestedStarters: [
        'Hello! My name is Alex, and I am from Mumbai.',
        'Hi! I am a student and I want to learn English.',
        'Nice to meet you! My name is Priya.'
      ],
      aiReplies: {
        default: 'It is wonderful to meet you! Learning a new language takes courage, and you are doing great. What do you like to do in your free time?',
        corrections: [
          { pattern: /my name are/i, fix: 'My name is...', reason: 'Use "is" with singular names: "My name is [Name]".' },
          { pattern: /i am come from/i, fix: 'I come from... or I am from...', reason: 'Say either "I come from..." or "I am from...".' },
          { pattern: /i am study /i, fix: 'I am studying... or I study...', reason: 'For an ongoing activity, say "I am studying" or simply "I study".' }
        ]
      }
    },
    {
      id: 'meeting',
      title: 'Meeting a New Person',
      icon: 'handshake',
      desc: 'Polite greetings and friendly small talk when meeting someone for the first time.',
      aiGreeting: 'Hi there! Nice to meet you. Beautiful weather today, isn’t it?',
      suggestedStarters: [
        'Yes, it is very pleasant today!',
        'Nice to meet you too! How are you doing?',
        'Yes, I enjoy sunny days like this.'
      ],
      aiReplies: {
        default: 'I agree completely! Are you visiting here or do you live nearby?',
        corrections: [
          { pattern: /i am agree/i, fix: 'I agree', reason: 'Remember, "agree" is already a verb. We say "I agree" instead of "I am agree".' },
          { pattern: /how you are/i, fix: 'How are you?', reason: 'In a question, the helping verb "are" comes before "you": "How are you?".' }
        ]
      }
    },
    {
      id: 'restaurant',
      title: 'Ordering Food at a Restaurant',
      icon: 'utensils',
      desc: 'Look at the menu, ask questions politely, and order your favorite dish.',
      aiGreeting: 'Good evening! Welcome to Sunshine Cafe. Are you ready to order, or would you like a few minutes?',
      suggestedStarters: [
        'Could I please see the menu?',
        'I am ready to order. What do you recommend?',
        'I would like a cup of tea and a sandwich, please.'
      ],
      aiReplies: {
        default: 'Excellent choice! Our grilled sandwiches are freshly prepared and very popular. Would you like anything to drink with that?',
        corrections: [
          { pattern: /i want /i, fix: 'I would like... or Could I please have...', reason: '"I would like..." sounds much more polite than "I want" when ordering in English.' },
          { pattern: /give me /i, fix: 'Could you please give me...', reason: 'Adding "Could you please..." makes your request gentle and respectful.' }
        ]
      }
    },
    {
      id: 'directions',
      title: 'Asking for Directions',
      icon: 'map-pin',
      desc: 'Ask strangers politely how to get to the station, bus stop, or hospital.',
      aiGreeting: 'Excuse me! You look a bit lost. Can I help you find something around here?',
      suggestedStarters: [
        'Excuse me, could you tell me where the railway station is?',
        'How do I get to the nearest hospital?',
        'Is there a bus stop near here?'
      ],
      aiReplies: {
        default: 'Yes, of course! Walk straight down this road for two blocks, then take a left turn at the traffic light. You will see it right in front of you. Is that clear?',
        corrections: [
          { pattern: /where is go/i, fix: 'Where is... or How do I go to...', reason: 'Say "Where is the station?" or "How do I go to the station?".' },
          { pattern: /tell me way/i, fix: 'Could you tell me the way to...', reason: 'Say "Could you please tell me the way to the station?" for natural English.' }
        ]
      }
    },
    {
      id: 'friends',
      title: 'Talking to Friends',
      icon: 'smile',
      desc: 'Chat about weekend plans, movies, sports, and having fun together.',
      aiGreeting: 'Hey friend! What are you planning to do this weekend? Any fun plans?',
      suggestedStarters: [
        'I am planning to watch a new movie with my family.',
        'Not much, just relaxing at home and reading a book.',
        'I might hang out with some college friends.'
      ],
      aiReplies: {
        default: 'That sounds like so much fun! I love relaxing weekends too. What kind of movies or books do you enjoy most?',
        corrections: [
          { pattern: /i am go /i, fix: 'I am going to... or I go to...', reason: 'With "am", we use the "-ing" verb: "I am going to watch a movie".' },
          { pattern: /we will goes/i, fix: 'We will go', reason: 'After "will", always use the base form of the verb: "We will go".' }
        ]
      }
    },
    {
      id: 'college',
      title: 'College Conversation',
      icon: 'book-open',
      desc: 'Discuss classes, homework, professors, and exams with your classmate.',
      aiGreeting: 'Hey! Did you attend today’s morning English lecture? The professor shared some helpful study tips.',
      suggestedStarters: [
        'Yes, I attended! The lecture was very interesting.',
        'No, I missed it. Could you please share your notes with me?',
        'What did the professor say about the upcoming exam?'
      ],
      aiReplies: {
        default: 'Sure thing! The professor said the test will focus mainly on vocabulary and simple grammar. Don’t worry, we can study together in the library!',
        corrections: [
          { pattern: /i am not attend/i, fix: 'I did not attend...', reason: 'For past actions, use "did not attend" instead of "am not attend".' },
          { pattern: /give your note/i, fix: 'Could you share your notes?', reason: 'Use "notes" (plural) and phrase it politely: "Could you please share your notes?".' }
        ]
      }
    },
    {
      id: 'interview',
      title: 'Job Interview Practice',
      icon: 'briefcase',
      desc: 'Practice answer questions about your strengths, background, and goals.',
      aiGreeting: 'Good morning! Thank you for coming in today. Could you please tell me a little bit about yourself?',
      suggestedStarters: [
        'Good morning! My name is John, and I have a degree in Computer Science.',
        'Thank you for this opportunity. I am a hardworking person with strong communication skills.',
        'Good morning! I am passionate about learning and helping people.'
      ],
      aiReplies: {
        default: 'That is great to hear! We value eager learners. What would you say is your greatest strength in a team setting?',
        corrections: [
          { pattern: /i am have/i, fix: 'I have...', reason: 'Just say "I have a degree" or "I have experience", without "am".' },
          { pattern: /my strengths is/i, fix: 'My strength is... or My strengths are...', reason: 'Singular: "My strength is". Plural: "My strengths are".' }
        ]
      }
    },
    {
      id: 'phone',
      title: 'Phone Conversation',
      icon: 'phone',
      desc: 'Answer the phone, ask for someone, and leave clear polite messages.',
      aiGreeting: 'Hello, this is City Medical Clinic. How may I help you today?',
      suggestedStarters: [
        'Hello, I would like to book an appointment with Dr. Mehta.',
        'Good morning, could I please speak to the clinic manager?',
        'Hi, I am calling to check the doctor’s clinic timings.'
      ],
      aiReplies: {
        default: 'Certainly! Dr. Mehta is available on Tuesday and Thursday from 4 PM to 7 PM. Would Tuesday evening work for you?',
        corrections: [
          { pattern: /i want appointment/i, fix: 'I would like to book an appointment...', reason: 'Say "I would like to book an appointment" for a professional tone.' },
          { pattern: /who is this /i, fix: 'May I know who is speaking, please?', reason: 'Instead of "Who is this?", say "May I ask who is calling, please?".' }
        ]
      }
    },
    {
      id: 'shopping',
      title: 'Shopping at a Store',
      icon: 'tag',
      desc: 'Ask for sizes, colors, discounts, and prices in a clothing or grocery shop.',
      aiGreeting: 'Hello! Welcome to our store. Are you looking for anything specific today?',
      suggestedStarters: [
        'Yes, do you have this blue shirt in a medium size?',
        'Excuse me, how much does this jacket cost?',
        'Are there any special discounts on these shoes?'
      ],
      aiReplies: {
        default: 'Yes, we do have medium size in stock! And you are lucky, all shirts have a 15% discount today. Would you like to try it on in the fitting room?',
        corrections: [
          { pattern: /how much price/i, fix: 'How much does this cost? or What is the price?', reason: 'Instead of "How much price?", say "How much is this?" or "What is the price?".' },
          { pattern: /give me discount/i, fix: 'Is there a discount on this?', reason: 'Ask gently: "Is there any discount available on this item?".' }
        ]
      }
    },
    {
      id: 'travel',
      title: 'Traveling & Airport',
      icon: 'send',
      desc: 'Check in for flights, ask about luggage, and board trains with ease.',
      aiGreeting: 'Good morning, traveler! May I please see your passport and flight ticket?',
      suggestedStarters: [
        'Good morning! Here is my passport and ticket.',
        'Here you go. Could you tell me which gate my flight leaves from?',
        'Good morning! Can I take this bag as hand luggage?'
      ],
      aiReplies: {
        default: 'Thank you! Your documents look perfect. Your flight departs from Gate 14, and boarding will begin in 40 minutes. Have a safe and pleasant journey!',
        corrections: [
          { pattern: /take this ticket/i, fix: 'Here is my ticket, please.', reason: 'Handing documents politely is done by saying "Here is my ticket" or "Here you go".' },
          { pattern: /where is gate/i, fix: 'Where is the boarding gate?', reason: 'Say "Where is Gate 14?" or "Which gate is it?".' }
        ]
      }
    }
  ]
};

// Export to window for browser access
if (typeof window !== 'undefined') {
  window.APP_DATA = APP_DATA;
}
