window.sixHatSets = [
  {
    title: "🐹 Hamster Vest Patent",
    link: "https://www.youtube.com/shorts/gOT8J_fqyos",
    vocablist: [
      { word: "patent", translation: "專利", emoji: "📜" },
      { word: "vest", translation: "背心", emoji: "🧥" },
      { word: "crushing", translation: "壓碎", emoji: "⚠️" },
      { word: "wearer", translation: "穿戴者", emoji: "🧍" },
      { word: "risk", translation: "風險", emoji: "⚠️" }
    ],
    vocabex: "The <span class='vocab-blank' data-answer='patent'></span> describes a hamster <span class='vocab-blank' data-answer='vest'></span>, but the <span class='vocab-blank' data-answer='wearer'></span> should avoid the <span class='vocab-blank' data-answer='risk'></span> of <span class='vocab-blank' data-answer='crushing'></span> the animals.",
    questions: [
      { emoji: "📊", text: "What is the hamster vest patent supposed to do?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "What do you think of the hamster vest idea?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "What safety risks could happen with a hamster vest?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Is there any good use for a hamster vest?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "📋", text: "What product ideas do you have for pet safety?", hat: "blue-hat", hatLabel: "Blue Hat" },
      { emoji: "💡", text: "What is another weird pet-related patent you can invent?", hat: "green-hat", hatLabel: "Green Hat" }
    ]
  },
  {
    title: "🌿 Photosynthesizing Hamster Cells",
    link: "https://www.youtube.com/shorts/7RCo4gIBA8A",
    vocablist: [
      { word: "chloroplasts", translation: "葉綠體", emoji: "🧫" },
      { word: "photosynthesis", translation: "光合作用", emoji: "☀️" },
      { word: "chlorophyll", translation: "葉綠素", emoji: "🌿" },
      { word: "organs", translation: "器官", emoji: "🫀" },
      { word: "transplant", translation: "移植", emoji: "🏥" }
    ],
    vocabex: "Researchers inserted <span class='vocab-blank' data-answer='chloroplasts'></span> into hamster cells. The cells kept doing <span class='vocab-blank' data-answer='photosynthesis'></span> and producing <span class='vocab-blank' data-answer='chlorophyll'></span>. This could help grow larger <span class='vocab-blank' data-answer='organs'></span> for <span class='vocab-blank' data-answer='transplant'></span>.",
    questions: [
      { emoji: "📊", text: "What was added to the hamster cells?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Would you want your body to do photosynthesis?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "What problems might happen with plant-like cells in animals?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "How could this research help patients?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "📋", text: "What tests should scientists do before using this on humans?", hat: "blue-hat", hatLabel: "Blue Hat" },
      { emoji: "💡", text: "What other animal upgrade would help medicine?", hat: "green-hat", hatLabel: "Green Hat" }
    ]
  },
  {
    title: "📰 Hong Kong Hamster Culls",
    link: "https://www.youtube.com/watch?v=1Hy5EEKvZ3s",
    vocablist: [
      { word: "culled", translation: "撲殺", emoji: "⚠️" },
      { word: "outbreak", translation: "爆發", emoji: "🦠" },
      { word: "surrender", translation: "交出", emoji: "🤲" },
      { word: "authorities", translation: "當局", emoji: "🏛️" },
      { word: "restrictions", translation: "限制", emoji: "🚫" }
    ],
    vocabex: "The <span class='vocab-blank' data-answer='authorities'></span> ordered hamsters to be <span class='vocab-blank' data-answer='culled'></span> after a virus <span class='vocab-blank' data-answer='outbreak'></span>. Pet owners were told to <span class='vocab-blank' data-answer='surrender'></span> their pets, even as <span class='vocab-blank' data-answer='restrictions'></span> continued.",
    questions: [
      { emoji: "📊", text: "Why were hamsters culled in Hong Kong?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "How would you feel if you had to surrender a pet?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "What could go wrong with a mass cull?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Why might officials think this policy protects people?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "📋", text: "What safer steps could be used before culling?", hat: "blue-hat", hatLabel: "Blue Hat" },
      { emoji: "💡", text: "How could communities help protect both people and pets?", hat: "green-hat", hatLabel: "Green Hat" }
    ]
  }
];

// Shuffle the questions for each set
window.sixHatSets.forEach(set => {
  set.questions = set.questions.sort(() => Math.random() - 0.5);
});
