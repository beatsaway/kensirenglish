// Relative clauses 4 — Preposition position: formal front (correct) vs clearly wrong distractors only (no “valid but not keyed” options)
window.relativeClauses4Exercises = [
  {
    id: 1,
    category: "Preposition + relative (in which)",
    question: "🌳 People loved visiting Georgie. They could find many cute animals in the park.",
    chineseTranslation: "大家鍾意去Georgie，入面有好多可愛動物",
    options: [
      "People loved visiting Georgie, in which they could find many cute animals.",
      "People loved visiting Georgie, where they could find many cute animals.",
      "People loved visiting Georgie, on which they could find many cute animals.",
      "People loved visiting Georgie, in who they could find many cute animals."
    ],
    correctAnswers: [
      "People loved visiting Georgie, in which they could find many cute animals.",
      "People loved visiting Georgie, where they could find many cute animals."
    ],
    explanation: "**In which** matches *in the park*; **where** is also natural for a place. **On which** is the wrong preposition. **In who** is wrong — use *which* after *in* here, not *who*."
  },
  {
    id: 2,
    category: "Preposition + relative (in which)",
    question: "🌳 Georgie was a popular park. Visitors could relax in the park.",
    chineseTranslation: "Georgie係個熱門公園，遊客可以喺入面休息",
    options: [
      "Georgie was a popular park in which visitors could relax.",
      "Georgie was a popular park where visitors could relax.",
      "Georgie was a popular park on which visitors could relax.",
      "Georgie was a popular park in who visitors could relax."
    ],
    correctAnswers: [
      "Georgie was a popular park in which visitors could relax.",
      "Georgie was a popular park where visitors could relax."
    ],
    explanation: "**In which** matches *relax in the park*; **where** is also natural for *park*. **On which** is the wrong preposition. **In who** is wrong — use *which* for *park*."
  },
  {
    id: 3,
    category: "Many of which (preposition + of)",
    question: "🦊 There were many smart animals in the park. Many of them could speak English.",
    chineseTranslation: "公園有好多叻動物，好多隻都識講英文",
    options: [
      "There were many smart animals in the park, many of which could speak English.",
      "There were many smart animals in the park, which many of could speak English.",
      "There were many smart animals in the park, many of who could speak English.",
      "There were many smart animals in the park, many which of could speak English."
    ],
    correctAnswers: ["There were many smart animals in the park, many of which could speak English."],
    explanation: "**Many of which** is the fixed pattern (things/animals as a group). Do not split it as *which many of*. After *of* use **which**, not *who*. *Many which of* is not English word order."
  },
  {
    id: 4,
    category: "Non-restrictive which (the park)",
    question: "🔬 Many scientists worked at the park. It has received lots of funding.",
    chineseTranslation: "好多科學家喺公園做嘢，個公園攞咗好多資助",
    options: [
      "Many scientists worked at the park, which has received lots of funding.",
      "Many scientists worked at the park, at which has received lots of funding.",
      "Many scientists worked at the park, in which has received lots of funding.",
      "Many scientists worked at the park, for which has received lots of funding."
    ],
    correctAnswers: ["Many scientists worked at the park, which has received lots of funding."],
    explanation: "**Which** is the subject of *has received* (= the park). *At which has received* is broken: after *at which* you still need a subject (*at which the city sent money…*). Here, just use **which has received**."
  },
  {
    id: 5,
    category: "For whom (preposition front)",
    question: "📖 This park had many skilled trainers. Taming beasts was an easy task for them.",
    chineseTranslation: "呢個公園有好多熟練訓練員，馴獸對佢哋嚟講係輕鬆嘅任務",
    options: [
      "This park had many skilled trainers, for whom taming beasts was an easy task.",
      "This park had many skilled trainers, at whom taming beasts was an easy task.",
      "This park had many skilled trainers, for who taming beasts was an easy task.",
      "This park had many skilled trainers, by whom taming beasts was an easy task."
    ],
    correctAnswers: ["This park had many skilled trainers, for whom taming beasts was an easy task."],
    explanation: "The meaning is *an easy task **for** them (the trainers)* → formal **for whom**. **At whom** and **by whom** do not fit *for them* here. **For who** is wrong — use **for whom** in this formal pattern."
  },
  {
    id: 6,
    category: "At which (preposition front)",
    question: "🧬 Georgie Park was a secret facility. Animals were enhanced with human genes at the facility.",
    chineseTranslation: "Georgie Park係秘密生物研究設施，動物喺度俾人加咗人類基因",
    options: [
      "Georgie Park was a secret bio research facility, at which animals were enhanced with human genes.",
      "Georgie Park was a secret bio research facility, where animals were enhanced with human genes.",
      "Georgie Park was a secret bio research facility, on which animals were enhanced with human genes.",
      "Georgie Park was a secret bio research facility, at who animals were enhanced with human genes."
    ],
    correctAnswers: [
      "Georgie Park was a secret bio research facility, at which animals were enhanced with human genes.",
      "Georgie Park was a secret bio research facility, where animals were enhanced with human genes."
    ],
    explanation: "**At which** matches *at the facility*; **where** is also natural here. **On which** is the wrong preposition. **At who** is wrong — use *which* for the place."
  },
  {
    id: 7,
    category: "Which (identifying the dog)",
    question: "🐕 The dog jumped onto the kids. The kids threw rocks at the dog.",
    chineseTranslation: "隻狗扑向啲細路，啲細路向隻狗掟石",
    options: [
      "The kids threw rocks at the dog which jumped onto them.",
      "The dog jumped onto the kids, who threw rocks at it.",
      "The kids threw rocks at the dog onto which the dog jumped.",
      "The dog jumped onto the kids, at which they threw rocks."
    ],
    correctAnswers: ["The kids threw rocks at the dog which jumped onto them."],
    explanation: "Put the kids’ action first, then **which** = *that dog* (the one that jumped onto them). That order shows cause then reaction. The other sentence is OK grammar, but it hides the reason for the rocks."
  },
  {
    id: 8,
    category: "With whom (preposition front)",
    question: "👥 We had worked with the guides for years. They were actually scientists.",
    chineseTranslation: "導遊我哋同佢哋合作咗好多年，原來係科學家",
    options: [
      "The guides, with whom we had worked for years, were actually scientists.",
      "The guides, with which we had worked for years, were actually scientists.",
      "The guides, with who we had worked for years, were actually scientists.",
      "The guides, at whom we had worked for years, were actually scientists."
    ],
    correctAnswers: ["The guides, with whom we had worked for years, were actually scientists."],
    explanation: "You work **with** people → **with whom**. **With which** is for things, not guides. **With who** is ungrammatical. **At whom** is the wrong preposition for *work with*."
  }
];
