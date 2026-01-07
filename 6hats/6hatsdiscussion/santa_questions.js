window.sixHatSets = [
  {
    title: "📮 Letter to Santa",
    link: "https://www.youtube.com/shorts/jo-uEd6xVwM",
    vocablist: [
      { word: "communicate", translation: "溝通", emoji: "💬" },
      { word: "deliver", translation: "遞送", emoji: "📦" },
      { word: "imagination", translation: "想像力", emoji: "💭" },
      { word: "tradition", translation: "傳統", emoji: "📜" },
      { word: "belief", translation: "信念", emoji: "🙏" }
    ],
    vocabex: "Writing letters to Santa is a <span class='vocab-blank' data-answer='tradition'></span> that many children enjoy. It helps them use their <span class='vocab-blank' data-answer='imagination'></span> to <span class='vocab-blank' data-answer='communicate'></span> their wishes. Some children have a strong <span class='vocab-blank' data-answer='belief'></span> that Santa will <span class='vocab-blank' data-answer='deliver'></span> their presents on Christmas.",
    questions: [
      { emoji: "📊", text: "What did she ask Santa for?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you want to write a letter to Santa?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why's it good for kids to write to Santa?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "Why's it not a good idea to write to Santa?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "📋", text: "How would you write a letter to Santa?", hat: "blue-hat", hatLabel: "Blue Hat" },
      { emoji: "💡", text: "How does Santa get any letters?", hat: "green-hat", hatLabel: "Green Hat" }
    ]
  },
  {
    title: "🎅 Saint Nicholas of Myra",
    link: "https://www.youtube.com/shorts/DtBDB933JkA",
    vocablist: [
      { word: "saint", translation: "聖人", emoji: "⛪" },
      { word: "bishop", translation: "主教", emoji: "👨‍💼" },
      { word: "charity", translation: "慈善", emoji: "❤️" },
      { word: "legend", translation: "傳說", emoji: "📖" },
      { word: "celebrate", translation: "慶祝", emoji: "🎉" }
    ],
    vocabex: "Saint Nicholas was a <span class='vocab-blank' data-answer='saint'></span> who worked as a <span class='vocab-blank' data-answer='bishop'></span> in Myra. He was known for his <span class='vocab-blank' data-answer='charity'></span> and helping the poor. The <span class='vocab-blank' data-answer='legend'></span> of his kindness spread far and wide. Today, people <span class='vocab-blank' data-answer='celebrate'></span> his life on Saint Nicholas Day.",
    questions: [
      { emoji: "📊", text: "Who is Nicholas?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you think we celebrate Saint Nicholas Day the right way?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why was Nicholas respected by many?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "Who doesn't like Santa and why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "What is a better way to celebrate Saint Nicholas Day?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How is Nicholas different from the Santa Claus we know?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "⚰️ The body of St. Nicholas",
    link: "https://www.youtube.com/shorts/J1fOgnylWf8",
    vocablist: [
      { word: "remains", translation: "遺骸", emoji: "⚰️" },
      { word: "discovery", translation: "發現", emoji: "🔍" },
      { word: "archaeology", translation: "考古學", emoji: "🏺" },
      { word: "tomb", translation: "陵墓", emoji: "🪦" },
      { word: "confirm", translation: "確認", emoji: "✅" }
    ],
    vocabex: "In the field of <span class='vocab-blank' data-answer='archaeology'></span>, some claim that they have made the <span class='vocab-blank' data-answer='discovery'></span> of the <span class='vocab-blank' data-answer='remains'></span> of Saint Nicholas in an ancient <span class='vocab-blank' data-answer='tomb'></span>. However, some think that we needed more tests to <span class='vocab-blank' data-answer='confirm'></span> that it was really him.",
    questions: [
      { emoji: "📊", text: "Where have they found Saint Nicholas?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you think we should dig him up?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why is it exciting to have discovered this?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "Why is it disappointing to have discovered this?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "📋", text: "How shall we confirm it's Saint Nicholas?", hat: "blue-hat", hatLabel: "Blue Hat" },
      { emoji: "💡", text: "What could he do if he's been resurrected?", hat: "green-hat", hatLabel: "Green Hat" }
    ]
  }
];

// Shuffle the questions for each set
window.sixHatSets.forEach(set => {
  set.questions = set.questions.sort(() => Math.random() - 0.5);
});

