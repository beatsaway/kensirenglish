const questions4a = [
  {
    cantonese: "我喺Minecraft入面殺喪屍",
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
    cantonese: "我每日返學前check天氣",
    english: "I _____ the weather every day before school.",
    answer: "check",
    options: ["check", "am checking", "checked", "have checked", "will check", "will have checked"],
    section: ""
  },
  {
    cantonese: "我而家check緊天氣",
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
    cantonese: "我每日早餐前刷牙",
    english: "I _____ my teeth every day before breakfast.",
    answer: "brush",
    options: ["brush", "am brushing", "brushed", "have brushed", "will brush", "will have brushed"],
    section: ""
  },
  {
    cantonese: "我買緊零食",
    english: "I _____ some snacks.",
    answer: "am buying",
    options: ["buy", "am buying", "bought", "have bought", "will buy", "will be buying"],
    section: ""
  },
  {
    cantonese: "我買咗零食啦",
    english: "I _____ some snacks already.",
    answer: "have bought",
    options: ["buy", "am buying", "bought", "have bought", "will buy", "will have bought"],
    section: ""
  },
  {
    cantonese: "我每日放學去7仔買零食",
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
    cantonese: "我整緊朱古力蛋糕",
    english: "I _____ a chocolate cake.",
    answer: "am making",
    options: ["make", "am making", "made", "have made", "will make", "will be making"],
    section: ""
  },
  {
    cantonese: "我整咗朱古力蛋糕",
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
    cantonese: "我沖咗涼啦",
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
    cantonese: "我一個星期沖一次涼",
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
    cantonese: "我平時唔食早餐",
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
    cantonese: "我聽日如果遲起身會揸車返工",
    english: "I _____ to work if I wake up late tomorrow.",
    answer: "will drive",
    options: ["drive", "drove", "will drive", "am driving", "was driving", "will be driving"],
    section: ""
  }
];

// Export removed - using as regular script
