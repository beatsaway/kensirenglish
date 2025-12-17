const questions = [
  {
    cantonese: "我日日食KFC",
    english: "I _____ KFC every day.",
    answer: "eat",
    options: ["eat", "ate", "will eat"],
    section: "Simple 簡單式"
  },
  {
    cantonese: "我尋晚食KFC",
    english: "I _____ KFC last night.",
    answer: "ate",
    options: ["eat", "ate", "will eat"],
    section: "Simple 簡單式"
  },
  {
    cantonese: "我今晚會食KFC 如果遲放工",
    english: "I _____ KFC tonight if I finish work late.",
    answer: "will eat",
    options: ["eat", "ate", "will eat"],
    section: "Simple 簡單式"
  },
  {
    cantonese: "我食緊KFC/我即將去食KFC/我好肯定會食KFC",
    english: "I _____ KFC.",
    answer: "am eating",
    options: ["am eating", "was eating", "will be eating"],
    section: "Continuous 進行式"
  },
  {
    cantonese: "我尋晚食緊KFC 當你打俾我嗰陣",
    english: "I _____ KFC.",
    answer: "was eating",
    options: ["am eating", "was eating", "will be eating"],
    section: "Continuous 進行式"
  },
  {
    cantonese: "我會係食緊KFC 今晚大概七點到八點",
    english: "I _____ KFC tonight from about 7 to 8.",
    answer: "will be eating",
    options: ["am eating", "was eating", "will be eating"],
    section: "Continuous 進行式"
  },
  {
    cantonese: "我食咗KFC",
    english: "I _____ KFC.",
    answer: "have eaten",
    options: ["have eaten", "had eaten", "will have eaten"],
    section: "Perfect 完成式"
  },
  {
    cantonese: "我尋晚食咗KFC了當你打俾我嗰陣",
    english: "I _____ KFC already when you called me.",
    answer: "had eaten",
    options: ["have eaten", "had eaten", "will have eaten"],
    section: "Perfect 完成式"
  },
  {
    cantonese: "我會已經食咗KFC 當你今晚放工",
    english: "I _____ KFC already when you finish work.",
    answer: "will have eaten",
    options: ["have eaten", "had eaten", "will have eaten"],
    section: "Perfect 完成式"
  },
  {
    cantonese: "我日日整蘑菇湯",
    english: "I _____ mushroom soup every day.",
    answer: "make",
    options: ["make", "made", "will make"],
    section: "Simple 簡單式"
  },
  {
    cantonese: "我尋晚整蘑菇湯",
    english: "I _____ mushroom soup last night.",
    answer: "made",
    options: ["make", "made", "will make"],
    section: "Simple 簡單式"
  },
  {
    cantonese: "我今晚會整蘑菇湯",
    english: "I _____ mushroom soup tonight.",
    answer: "will make",
    options: ["make", "made", "will make"],
    section: "Simple 簡單式"
  },
  {
    cantonese: "我整咗peri peri 雞鎚for今晚",
    english: "I _____ peri peri chicken drumsticks for tonight.",
    answer: "have made",
    options: ["have made", "had made", "will have made"],
    section: "Perfect 完成式"
  },
  {
    cantonese: "我整咗peri peri 雞鎚啦 當你講想食炸魚薯條",
    english: "I _____ peri peri chicken already when you told me you wanted to have fish and chips.",
    answer: "had made",
    options: ["have made", "had made", "will have made"],
    section: "Perfect 完成式"
  },
  {
    cantonese: "我會係整好𠴱個新醬比你試 到咗今晚",
    english: "I _____ the new sauce for you to try tonight.",
    answer: "will have made",
    options: ["have made", "had made", "will have made"],
    section: "Perfect 完成式"
  },
  {
    cantonese: "我整緊個四川醬",
    english: "I _____ the szechuan sauce.",
    answer: "am making",
    options: ["am making", "was making", "will be making"],
    section: "Continuous 進行式"
  },
  {
    cantonese: "我當時整緊個四川醬",
    english: "I _____ the szechuan sauce.",
    answer: "was making",
    options: ["am making", "was making", "will be making"],
    section: "Continuous 進行式"
  },
  {
    cantonese: "我會係整緊個四川醬，你放學嗰陣",
    english: "I _____ the sauce when you are coming back from school.",
    answer: "will be making",
    options: ["am making", "was making", "will be making"],
    section: "Continuous 進行式"
  },
  {
    cantonese: "阿媽每日都check我體溫，返學之前",
    english: "Mum _____ my body temperature every day before school.",
    answer: "checks",
    options: ["checks", "checked", "have checked"],
    section: "Daily Routine"
  },
  {
    cantonese: "我今朝check體溫",
    english: "I _____ my temperature this morning.",
    answer: "checked",
    options: ["checks", "checked", "have checked"],
    section: "Daily Routine"
  },
  {
    cantonese: "我今朝check咗體溫",
    english: "I _____ my temperature this morning.",
    answer: "have checked",
    options: ["checks", "checked", "have checked"],
    section: "Daily Routine"
  },
  {
    cantonese: "Miss Chan今朝check緊我地有冇check到體溫",
    english: "Miss Chan _____ this morning if we _____ our temperature (or not).",
    answer: ["was checking", "had checked"],
    options: ["was checking", "had checked", "checked"],
    section: "Teacher Checking"
  },
  {
    cantonese: "Miss Chan今朝check我地有冇check到體溫",
    english: "Miss Chan _____ this morning if we _____ our temperature (or not).",
    answer: ["checked", "had checked"],
    options: ["was checking", "had checked", "checked"],
    section: "Teacher Checking"
  },
  {
    cantonese: "「有吖!我check咗體溫啦!」",
    english: "Yes! I _____ my temperature!",
    answer: "have checked",
    options: ["have checked", "had checked", "has checked"],
    section: "Student Responses"
  },
  {
    cantonese: "我同佢講我check咗體溫啦!",
    english: "I told her I _____ my temperature.",
    answer: "had checked",
    options: ["have checked", "had checked", "has checked"],
    section: "Student Responses"
  },
  {
    cantonese: "當日阿媽check咗我體溫 食早餐前",
    english: "Mum _____ my temperature before breakfast.",
    answer: "had checked",
    options: ["have checked", "had checked", "has checked"],
    section: "Student Responses"
  },
  {
    cantonese: "「阿媽check咗我體溫 食早餐前」",
    english: "Mum _____ my temperature before breakfast.",
    answer: "has checked",
    options: ["have checked", "had checked", "has checked"],
    section: "Student Responses"
  },
  {
    cantonese: "「有個學生走咗入嚟!」",
    english: "A student _____ in!",
    answer: "has walked",
    options: ["has walked", "had walked", "is walking"],
    section: "New Student Arrival"
  },
  {
    cantonese: "當時有個學生走咗入嚟",
    english: "A student _____ in!",
    answer: "had walked",
    options: ["has walked", "had walked", "is walking"],
    section: "New Student Arrival"
  },
  {
    cantonese: "個男仔話: 「我係一個新學生. 我check緊呢個係咪我班房」",
    english: "He said, 'I am a new student. I _____ if this is my classroom (or not).'",
    answer: "am checking",
    options: ["has checked", "had checked", "am checking"],
    section: "New Student Arrival"
  },
  {
    cantonese: "我地尋日無學返",
    english: "We _____ no school yesterday.",
    answer: "had",
    options: ["had", "have", "will have"],
    section: "Simple Tense"
  },
  {
    cantonese: "我地今日有學返",
    english: "We _____ school today.",
    answer: "have",
    options: ["had", "have", "will have"],
    section: "Simple Tense"
  },
  {
    cantonese: "我地遲啲食lunch",
    english: "We _____ lunch later.",
    answer: "will have",
    options: ["had", "have", "will have"],
    section: "Simple Tense"
  },
  {
    cantonese: "我仲未做我既art功課",
    english: "I _____ my art assignment/homework.",
    answer: "haven't done",
    options: ["haven't done", "had done", "will have done"],
    section: "Perfect Tense"
  },
  {
    cantonese: "我尋晚忘記咗佢",
    english: "I _____ it last night.",
    answer: "had forgotten",
    options: ["have forgotten", "had forgotten", "will have forgotten"],
    section: "Perfect Tense"
  },
  {
    cantonese: "我會最遲lunch搞掂佢",
    english: "I _____ it by lunch.",
    answer: "will have finished",
    options: ["haven't finished", "had finished", "will have finished"],
    section: "Perfect Tense"
  },
  {
    cantonese: "我地而家就快食飯",
    english: "We _____ soon!",
    answer: "are eating",
    options: ["are eating", "were eating", "will be eating"],
    section: "Continuous Tense"
  },
  {
    cantonese: "我地玩緊閃避球lunch前",
    english: "We _____ dodgeball before lunch.",
    answer: "were playing",
    options: ["are playing", "were playing", "will be playing"],
    section: "Continuous Tense"
  },
  {
    cantonese: "我會係訓緊覺下午數學堂",
    english: "I _____ during the afternoon maths lesson.",
    answer: "will be sleeping",
    options: ["am sleeping", "was sleeping", "will be sleeping"],
    section: "Continuous Tense"
  },
  {
    cantonese: "我成日講大話",
    english: "I _____ .",
    answer: "always lie",
    options: ["always lie", "always lied", "will always lie"],
    section: "Lie Simple Tense"
  },
  {
    cantonese: "我之前成日講大話",
    english: "I _____ .",
    answer: "always lied",
    options: ["always lie", "always lied", "will always lie"],
    section: "Lie Simple Tense"
  },
  {
    cantonese: "我會成日講大話",
    english: "I _____ .",
    answer: "will always lie",
    options: ["always lie", "always lied", "will always lie"],
    section: "Lie Simple Tense"
  },
  {
    cantonese: "我講咗大話 (剛剛)",
    english: "I _____ .",
    answer: "have lied",
    options: ["have lied", "had lied", "will have lied"],
    section: "Lie Perfect Tense"
  },
  {
    cantonese: "我講過大話 (曾經)",
    english: "I _____ before.",
    answer: "had lied",
    options: ["have lied", "had lied", "will have lied"],
    section: "Lie Perfect Tense"
  },
  {
    cantonese: "我會係講咗十次大話 當你發現嗰陣",
    english: "I _____ already when you realise.",
    answer: "will have lied",
    options: ["have lied", "had lied", "will have lied"],
    section: "Lie Perfect Tense"
  },
  {
    cantonese: "我講緊大話",
    english: "I _____ .",
    answer: "am lying",
    options: ["am lying", "was lying", "will be lying"],
    section: "Lie Continuous Tense"
  },
  {
    cantonese: "我頭先講緊大話",
    english: "I _____ .",
    answer: "was lying",
    options: ["am lying", "was lying", "will be lying"],
    section: "Lie Continuous Tense"
  },
  {
    cantonese: "我會係講緊大話",
    english: "I _____ .",
    answer: "will be lying",
    options: ["am lying", "was lying", "will be lying"],
    section: "Lie Continuous Tense"
  },
  {
    cantonese: "我日日訓覺前沖個涼 (habit)",
    english: "I _____ a bath before sleep/bed every day.",
    answer: "take",
    options: ["take", "took", "will take"],
    section: "Bath Simple Tense"
  },
  {
    cantonese: "我(頭先)沖個涼訓覺前",
    english: "I _____ a bath before sleep/bed.",
    answer: "took",
    options: ["take", "took", "will take"],
    section: "Bath Simple Tense"
  },
  {
    cantonese: "我會訓覺前沖個涼",
    english: "I _____ a bath before sleep/bed.",
    answer: "will take",
    options: ["take", "took", "will take"],
    section: "Bath Simple Tense"
  },
  {
    cantonese: "我沖緊個涼",
    english: "I _____ a bath.",
    answer: "am taking",
    options: ["am taking", "was taking", "will be taking"],
    section: "Bath Continuous Tense"
  },
  {
    cantonese: "我(頭先)沖緊個涼",
    english: "I _____ a bath.",
    answer: "was taking",
    options: ["am taking", "was taking", "will be taking"],
    section: "Bath Continuous Tense"
  },
  {
    cantonese: "我會係沖緊涼十點嗰陣",
    english: "I _____ a bath at ten.",
    answer: "will be taking",
    options: ["am taking", "was taking", "will be taking"],
    section: "Bath Continuous Tense"
  },
  {
    cantonese: "我沖咗個涼了",
    english: "I _____ a bath already.",
    answer: "have taken",
    options: ["have taken", "had taken", "will have taken"],
    section: "Bath Perfect Tense"
  },
  {
    cantonese: "我沖咗個涼了食飯前",
    english: "I _____ a bath before dinner.",
    answer: "had taken",
    options: ["have taken", "had taken", "will have taken"],
    section: "Bath Perfect Tense"
  },
  {
    cantonese: "我會係沖咗個涼了食飯前",
    english: "I _____ a bath already before dinner.",
    answer: "will have taken",
    options: ["have taken", "had taken", "will have taken"],
    section: "Bath Perfect Tense"
  }
];

// Export removed - using as regular script
