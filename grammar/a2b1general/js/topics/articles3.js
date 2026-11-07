// Articles 3 — exam cloze. Each gap is a, an, the, or no article.
// "no article" means write nothing.
// Places, meals, transport, and geographical names.
window.articles3Exercises = [
  {
    type: "dropdownBlanks",
    id: 1,
    category: "Cloze — a school morning",
    contextLines: [
      "Choose no article when the gap should be empty. Breakfast, school (as a pupil) and by bus take no article. On the bus means that bus. Hour starts with a vowel sound.",
      "揀 no article 代表個空唔寫字。早餐、返學、by bus 都唔加。on the bus 係指嗰架。hour 開頭髮音係元音。"
    ],
    paragraphs: [
      {
        parts: [
          "I have ",
          { options: ["a", "an", "the", "no article"], correct: "no article" },
          " breakfast at seven. Then I go to ",
          { options: ["a", "an", "the", "no article"], correct: "no article" },
          " school by ",
          { options: ["a", "an", "the", "no article"], correct: "no article" },
          " bus. I left my ruler on ",
          { options: ["a", "an", "the", "no article"], correct: "the" },
          " bus yesterday. The ride takes ",
          { options: ["a", "an", "the", "no article"], correct: "an" },
          " hour. After that, ",
          { options: ["a", "an", "the", "no article"], correct: "the" },
          " English lesson is first."
        ]
      }
    ],
    explanation: "<strong>Breakfast</strong>, <strong>school</strong> as a pupil, and <strong>by bus</strong> take no article. <strong>On the bus</strong> means the bus you were on. <strong>An hour</strong> because the h is silent. <strong>The English lesson</strong> is today's lesson on the timetable, not the language in general."
  },
  {
    type: "dropdownBlanks",
    id: 2,
    category: "Cloze — a hospital visit",
    contextLines: [
      "UK English: in hospital = the person is a patient. The hospital = the building, for a visitor. A meal with an adjective takes a. Football is a sport, so no the.",
      "英式：in hospital 係病人。the hospital 係嗰棟樓，探病先用。有形容詞嘅一餐可以用 a。足球係運動，唔加 the。"
    ],
    paragraphs: [
      {
        parts: [
          "My brother is in ",
          { options: ["a", "an", "the", "no article"], correct: "no article" },
          " hospital. I went to ",
          { options: ["a", "an", "the", "no article"], correct: "the" },
          " hospital to visit him after ",
          { options: ["a", "an", "the", "no article"], correct: "no article" },
          " lunch. He was asleep, so I sat on ",
          { options: ["a", "an", "the", "no article"], correct: "the" },
          " bed and read. We had ",
          { options: ["a", "an", "the", "no article"], correct: "a" },
          " big breakfast before I left home. He plays ",
          { options: ["a", "an", "the", "no article"], correct: "no article" },
          " football when he is well."
        ]
      }
    ],
    explanation: "A patient is <strong>in hospital</strong> with no article. A visitor goes to <strong>the hospital</strong>. <strong>Lunch</strong> alone has no article. <strong>The bed</strong> is the piece of furniture. <strong>A big breakfast</strong> needs a because of the adjective. <strong>Play football</strong> is a sport, so no the. Play the piano is the instrument rule, and it is different."
  },
  {
    type: "dropdownBlanks",
    id: 3,
    category: "Cloze — a geography poster",
    contextLines: [
      "Most cities and countries take nothing: Hong Kong, Japan. Rivers, oceans, deserts and plural country names take the. A single mountain takes nothing: Mount Fuji.",
      "大部分城市同國家唔加：香港、日本。河、海洋、沙漠、複數國名要 the。一座山唔加：Mount Fuji。"
    ],
    paragraphs: [
      {
        parts: [
          "We live in ",
          { options: ["a", "an", "the", "no article"], correct: "no article" },
          " Hong Kong. Yesterday the class crossed ",
          { options: ["a", "an", "the", "no article"], correct: "the" },
          " Pearl River. Next year we will visit ",
          { options: ["a", "an", "the", "no article"], correct: "no article" },
          " Japan and see ",
          { options: ["a", "an", "the", "no article"], correct: "no article" },
          " Mount Fuji. On the poster, ",
          { options: ["a", "an", "the", "no article"], correct: "the" },
          " Pacific Ocean is blue and ",
          { options: ["a", "an", "the", "no article"], correct: "the" },
          " United States is on the right."
        ]
      }
    ],
    explanation: "<strong>Hong Kong</strong>, <strong>Japan</strong> and <strong>Mount Fuji</strong> take no article. <strong>The Pearl River</strong> is a river. <strong>The Pacific Ocean</strong> is an ocean. <strong>The United States</strong> is a plural country name, like the Philippines and the Netherlands."
  }
];
