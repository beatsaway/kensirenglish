const questions2 = [
  {
    cantonese: "我響Minecraft入面殺喪屍",
    english: "I _____ zombies in Minecraft.",
    answer: "kill",
    options: ["kill", "am killing", "killed", "have killed", "will kill", "will have killed"],
    section: ""
  },
  {
    cantonese: "我殺咗好多喪屍",
    english: "I _____ a lot of zombies.",
    answer: "have killed",
    options: ["kill", "am killing", "killed", "have killed", "will kill", "will have killed"],
    section: ""
  },
  {
    cantonese: "我殺緊喪屍",
    english: "I _____ zombies.",
    answer: "am killing",
    options: ["kill", "am killing", "killed", "have killed", "will kill", "will have killed"],
    section: ""
  },
  {
    cantonese: "我日日返學前 check天氣",
    english: "I _____ the weather every day before school.",
    answer: "check",
    options: ["check", "am checking", "checked", "have checked", "will check", "will have checked"],
    section: ""
  },
  {
    cantonese: "我check緊天氣",
    english: "I _____ the weather.",
    answer: "am checking",
    options: ["check", "am checking", "checked", "have checked", "will check", "will have checked"],
    section: ""
  },
  {
    cantonese: "我check咗天氣啦",
    english: "I _____ the weather already.",
    answer: "have checked",
    options: ["check", "am checking", "checked", "have checked", "will check", "will have checked"],
    section: ""
  },
  {
    cantonese: "我刷緊牙",
    english: "I _____ my teeth.",
    answer: "am brushing",
    options: ["brush", "am brushing", "brushed", "have brushed", "will brush", "will be brushing"],
    section: ""
  },
  {
    cantonese: "我刷咗牙啦",
    english: "I _____ my teeth already.",
    answer: "have brushed",
    options: ["brush", "am brushing", "brushed", "have brushed", "will brush", "will have brushed"],
    section: ""
  },
  {
    cantonese: "我日日刷牙 早餐前",
    english: "I _____ my teeth every day before breakfast.",
    answer: "brush",
    options: ["brush", "am brushing", "brushed", "have brushed", "will brush", "will have brushed"],
    section: ""
  },
  {
    cantonese: "我買緊一啲零食",
    english: "I _____ some snacks.",
    answer: "am buying",
    options: ["buy", "am buying", "bought", "have bought", "will buy", "will be buying"],
    section: ""
  },
  {
    cantonese: "我買咗一啲零食",
    english: "I _____ some snacks already.",
    answer: "have bought",
    options: ["buy", "am buying", "bought", "have bought", "will buy", "will have bought"],
    section: ""
  },
  {
    cantonese: "我每日放學後響7仔買零食",
    english: "I _____ snacks at 7-Eleven every day after school.",
    answer: "buy",
    options: ["buy", "am buying", "bought", "have bought", "will buy", "will have bought"],
    section: ""
  },
  {
    cantonese: "我放學做功課",
    english: "I _____ my homework every day after school.",
    answer: "do",
    options: ["do", "am doing", "did", "have done", "will do", "will be doing"],
    section: ""
  },
  {
    cantonese: "我做咗功課啦",
    english: "I _____ my homework already.",
    answer: "have done",
    options: ["do", "am doing", "did", "have done", "will do", "will have done"],
    section: ""
  },
  {
    cantonese: "我做緊功課呀",
    english: "I _____ my homework.",
    answer: "am doing",
    options: ["do", "am doing", "did", "have done", "will do", "will be doing"],
    section: ""
  },
  {
    cantonese: "我整緊個朱古力蛋糕",
    english: "I _____ a chocolate cake.",
    answer: "am making",
    options: ["make", "am making", "made", "have made", "will make", "will be making"],
    section: ""
  },
  {
    cantonese: "我整咗個朱古力蛋糕",
    english: "I _____ a chocolate cake.",
    answer: "have made",
    options: ["make", "am making", "made", "have made", "will make", "will have made"],
    section: ""
  },
  {
    cantonese: "我成日整朱古力蛋糕",
    english: "I _____ chocolate cakes.",
    answer: "always make",
    options: ["always make", "always made", "always making", "will always make", "have always made", "will have always made"],
    section: ""
  },
  {
    cantonese: "我沖咗個涼",
    english: "I _____ a shower already!",
    answer: "have taken",
    options: ["take", "am taking", "took", "have taken", "will take", "will have taken"],
    section: ""
  },
  {
    cantonese: "我沖緊涼",
    english: "I _____ a shower.",
    answer: "am taking",
    options: ["take", "am taking", "took", "have taken", "will take", "will be taking"],
    section: ""
  },
  {
    cantonese: "我一星期沖一次涼",
    english: "I _____ a shower once a week.",
    answer: "take",
    options: ["take", "am taking", "took", "have taken", "will take", "will have taken"],
    section: ""
  },
  {
    cantonese: "我睇咗套戲啦",
    english: "I _____ the film already.",
    answer: "have watched",
    options: ["watch", "am watching", "watched", "have watched", "will watch", "will have watched"],
    section: ""
  },
  {
    cantonese: "我睇緊套戲",
    english: "I _____ the film.",
    answer: "am watching",
    options: ["watch", "am watching", "watched", "have watched", "will watch", "will be watching"],
    section: ""
  },
  {
    cantonese: "我每個星期睇一套戲",
    english: "I _____ a film every week.",
    answer: "watch",
    options: ["watch", "am watching", "watched", "have watched", "will watch", "will have watched"],
    section: ""
  },
  {
    cantonese: "我食緊早餐",
    english: "I _____ breakfast.",
    answer: "am eating",
    options: ["eat", "am eating", "ate", "have eaten", "will eat", "will be eating"],
    section: ""
  },
  {
    cantonese: "我食咗早餐啦",
    english: "I _____ breakfast already.",
    answer: "have eaten",
    options: ["eat", "am eating", "ate", "have eaten", "will eat", "will have eaten"],
    section: ""
  },
  {
    cantonese: "我唔食早餐平時",
    english: "I _____ breakfast usually.",
    answer: "don't eat",
    options: ["don't eat", "am not eating", "didn't eat", "haven't eaten", "won't eat", "will not be eating"],
    section: ""
  },
  {
    cantonese: "我日日揸車返工",
    english: "I _____ to work every day.",
    answer: "drive",
    options: ["drive", "drove", "will drive", "am driving", "was driving", "will be driving"],
    section: ""
  },
  {
    cantonese: "我尋日揸車返工",
    english: "I _____ to work yesterday.",
    answer: "drove",
    options: ["drive", "drove", "will drive", "am driving", "was driving", "will be driving"],
    section: ""
  },
  {
    cantonese: "我會揸車返工如果遲起身聽日",
    english: "I _____ to work if I wake up late tomorrow.",
    answer: "will drive",
    options: ["drive", "drove", "will drive", "am driving", "was driving", "will be driving"],
    section: ""
  },
  {
    cantonese: "我揸過Bobby架車",
    english: "I _____ Bobby's car.",
    answer: "have driven",
    options: ["have driven", "had driven", "will have driven", "am driving", "was driving", "will be driving"],
    section: ""
  },
  {
    cantonese: "我揸過Bobby架車喺佢賣左佢之前",
    english: "I _____ Bobby's car before he sold it.",
    answer: "had driven",
    options: ["have driven", "had driven", "will have driven", "am driving", "was driving", "will be driving"],
    section: ""
  },
  {
    cantonese: "我會係揸咗800里 到咗今晚",
    english: "I _____ 800 miles straight by tonight.",
    answer: "will have driven",
    options: ["have driven", "had driven", "will have driven", "am driving", "was driving", "will be driving"],
    section: ""
  },
  {
    cantonese: "我揸緊車返工",
    english: "I _____ to work.",
    answer: "am driving",
    options: ["drive", "drove", "will drive", "am driving", "was driving", "will be driving"],
    section: ""
  },
  {
    cantonese: "我當時揸緊車返工 當佢撞落我度",
    english: "I _____ to work when he crashed onto me.",
    answer: "was driving",
    options: ["drive", "drove", "will drive", "am driving", "was driving", "will be driving"],
    section: ""
  },
  {
    cantonese: "我會係揸緊一㗎新車 下星期",
    english: "I _____ a new car next week.",
    answer: "will be driving",
    options: ["drive", "drove", "will drive", "am driving", "was driving", "will be driving"],
    section: ""
  },
  {
    cantonese: "我日日睇BBC News",
    english: "I _____ BBC News every day.",
    answer: "watch",
    options: ["watch", "am watching", "watched", "have watched", "will watch", "will have watched"],
    section: ""
  },
  {
    cantonese: "我今朝睇BBC News",
    english: "I _____ BBC News this morning.",
    answer: "watched",
    options: ["watch", "am watching", "watched", "have watched", "will watch", "will have watched"],
    section: ""
  },
  {
    cantonese: "我今晚會睇BBC News",
    english: "I _____ BBC News tonight.",
    answer: "will watch",
    options: ["watch", "am watching", "watched", "have watched", "will watch", "will have watched"],
    section: ""
  },
  {
    cantonese: "我睇咗單新聞",
    english: "I _____ the news.",
    answer: "have watched",
    options: ["watch", "am watching", "watched", "have watched", "will watch", "will have watched"],
    section: ""
  },
  {
    cantonese: "我睇咗單新聞啦當你打俾我嗰陣",
    english: "I _____ the news when you called me.",
    answer: "had watched",
    options: ["watch", "am watching", "watched", "have watched", "will watch", "will have watched"],
    section: ""
  },
  {
    cantonese: "人人都會已經睇咗單新聞 到咗lunchtime",
    english: "Everyone _____ the news by lunch.",
    answer: "will have watched",
    options: ["watch", "am watching", "watched", "have watched", "will watch", "will have watched"],
    section: ""
  },
  {
    cantonese: "我睇緊新聞(而家）",
    english: "I _____ the news.",
    answer: "am watching",
    options: ["watch", "am watching", "watched", "have watched", "will watch", "will have watched"],
    section: ""
  },
  {
    cantonese: "我當時睇緊新聞",
    english: "I _____ the news.",
    answer: "was watching",
    options: ["watch", "am watching", "watched", "have watched", "will watch", "will have watched"],
    section: ""
  },
  {
    cantonese: "我會係睇緊新聞，如果係早上8:30嘅話",
    english: "I _____ the news if it's 8:30 am.",
    answer: "will be watching",
    options: ["watch", "am watching", "watched", "have watched", "will watch", "will have watched"],
    section: ""
  },
  {
    cantonese: "我每天 看Peppa Pig",
    english: "I _____ Peppa Pig every day.",
    answer: "watch",
    options: ["watch", "am watching", "watched", "have watched", "will watch", "will have watched"],
    section: ""
  },
  {
    cantonese: "我昨晚 看Peppa Pig",
    english: "I _____ Peppa Pig last night.",
    answer: "watched",
    options: ["watch", "am watching", "watched", "have watched", "will watch", "will have watched"],
    section: ""
  },
  {
    cantonese: "我明早會 看Peppa Pig",
    english: "I _____ Peppa Pig tomorrow morning.",
    answer: "will watch",
    options: ["watch", "am watching", "watched", "have watched", "will watch", "will have watched"],
    section: ""
  },
  {
    cantonese: "我 正在看Peppa Pig",
    english: "I _____ Peppa Pig.",
    answer: "am watching",
    options: ["watch", "am watching", "watched", "have watched", "will watch", "will have watched"],
    section: ""
  },
  {
    cantonese: "我昨晚 正在看Peppa Pig",
    english: "I _____ Peppa Pig last night.",
    answer: "was watching",
    options: ["watch", "am watching", "watched", "have watched", "will watch", "will have watched"],
    section: ""
  },
  {
    cantonese: "我明早會 正在看Peppa Pig",
    english: "I _____ Peppa Pig tomorrow morning.",
    answer: "will be watching",
    options: ["watch", "am watching", "watched", "have watched", "will watch", "will have watched"],
    section: ""
  },
  {
    cantonese: "我未 看完這集了",
    english: "I _____ finished this episode.",
    answer: "have not",
    options: ["have not", "had not", "will not have", "am not watching", "was not watching", "will not be watching"],
    section: ""
  },
  {
    cantonese: "我還未 看完這集 昨天晚飯前",
    english: "I _____ finished this episode before dinner yesterday.",
    answer: "had not",
    options: ["have not", "had not", "will not have", "am not watching", "was not watching", "will not be watching"],
    section: ""
  },
  {
    cantonese: "我會 看完這集 晚飯前",
    english: "I _____ finished this episode before dinner.",
    answer: "will not have",
    options: ["have not", "had not", "will not have", "am not watching", "was not watching", "will not be watching"],
    section: ""
  },
  {
    cantonese: "我每天 刷牙",
    english: "I _____ my teeth every day.",
    answer: "brush",
    options: ["brush", "am brushing", "brushed", "have brushed", "will brush", "will be brushing"],
    section: ""
  },
  {
    cantonese: "我昨天 刷牙 用我的舊牙刷",
    english: "I _____ my teeth with my old toothbrush yesterday.",
    answer: "brushed",
    options: ["brush", "am brushing", "brushed", "have brushed", "will brush", "will have brushed"],
    section: ""
  },
  {
    cantonese: "我明天會 刷牙 用一個新電動牙刷",
    english: "I _____ my teeth with a new electric toothbrush tomorrow.",
    answer: "will brush",
    options: ["brush", "am brushing", "brushed", "have brushed", "will brush", "will have brushed"],
    section: ""
  },
  {
    cantonese: "我 正在刷牙",
    english: "I _____ my teeth.",
    answer: "am brushing",
    options: ["brush", "am brushing", "brushed", "have brushed", "will brush", "will be brushing"],
    section: ""
  },
  {
    cantonese: "我昨晚 正在刷牙 當你在看Peppa Pig的時候",
    english: "I _____ my teeth last night while you were watching Peppa Pig.",
    answer: "was brushing",
    options: ["brush", "am brushing", "brushed", "have brushed", "will brush", "will be brushing"],
    section: ""
  },
  {
    cantonese: "我明早會 正在刷牙 當你還在睡覺的時候",
    english: "I _____ my teeth tomorrow morning while you are still sleeping.",
    answer: "will be brushing",
    options: ["brush", "am brushing", "brushed", "have brushed", "will brush", "will have brushed"],
    section: ""
  },
  {
    cantonese: "我 刷了牙 洗了臉",
    english: "I _____ my teeth and washed my face.",
    answer: "have brushed",
    options: ["brush", "am brushing", "brushed", "have brushed", "will brush", "will have brushed"],
    section: ""
  },
  {
    cantonese: "我 刷了牙 洗了臉 當天出門前",
    english: "I _____ my teeth and washed my face before leaving the house that day.",
    answer: "had brushed",
    options: ["brush", "am brushing", "brushed", "have brushed", "will brush", "will have brushed"],
    section: ""
  },
  {
    cantonese: "我會 刷了牙 洗了臉 在校巴到之前",
    english: "I _____ my teeth and washed my face before the school bus arrives.",
    answer: "will have brushed",
    options: ["brush", "am brushing", "brushed", "have brushed", "will brush", "will have brushed"],
    section: ""
  },
  {
    cantonese: "我日日練琴",
    english: "I _____ the piano every day.",
    answer: "practice",
    options: ["practice", "practiced", "will practice", "am practicing", "was practicing", "will be practicing"],
    section: ""
  },
  {
    cantonese: "我尋日練琴",
    english: "I _____ the piano yesterday.",
    answer: "practiced",
    options: ["practice", "practiced", "will practice", "am practicing", "was practicing", "will be practicing"],
    section: ""
  },
  {
    cantonese: "我聽日練琴",
    english: "I _____ the piano tomorrow.",
    answer: "will practice",
    options: ["practice", "practiced", "will practice", "am practicing", "was practicing", "will be practicing"],
    section: ""
  },
  {
    cantonese: "我練完琴啦",
    english: "I _____ the piano already.",
    answer: "have practiced",
    options: ["practice", "practiced", "will practice", "am practicing", "was practicing", "will be practicing"],
    section: ""
  },
  {
    cantonese: "我練完琴啦 當你打俾我嗰陣",
    english: "I _____ the piano when you called me.",
    answer: "had practiced",
    options: ["practice", "practiced", "will practice", "am practicing", "was practicing", "will be practicing"],
    section: ""
  },
  {
    cantonese: "我會係練完琴啦 到你食完早餐嗰陣",
    english: "I _____ the piano by the time you finish breakfast.",
    answer: "will have practiced",
    options: ["practice", "practiced", "will practice", "am practicing", "was practicing", "will be practicing"],
    section: ""
  },
  {
    cantonese: "我練緊琴",
    english: "I _____ the piano.",
    answer: "am practicing",
    options: ["practice", "practiced", "will practice", "am practicing", "was practicing", "will be practicing"],
    section: ""
  },
  {
    cantonese: "我當時練緊琴",
    english: "I _____ the piano.",
    answer: "was practicing",
    options: ["practice", "practiced", "will practice", "am practicing", "was practicing", "will be practicing"],
    section: ""
  },
  {
    cantonese: "我會係練緊琴當你食緊早餐果陣",
    english: "I _____ the piano when you are eating breakfast.",
    answer: "will be practicing",
    options: ["practice", "practiced", "will practice", "am practicing", "was practicing", "will be practicing"],
    section: ""
  }
];

// Export removed - using as regular script
