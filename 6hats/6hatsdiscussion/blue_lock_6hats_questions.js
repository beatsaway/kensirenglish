window.sixHatSets = [
  {
    title: "⚽ What is Blue Lock?",
    link: "https://www.youtube.com/watch?v=hGQ1HUVRNqA",
    questions: [
      { emoji: "📊", text: "What is this show about?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you like it?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Why would some old people dislike anime?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "What makes so many young people like anime?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "How could one watch anime if they have no Netflix?", hat: "blue-hat", hatLabel: "Blue Hat" },
      { emoji: "📋", text: "What anime shows would appeal to older audience more?", hat: "green-hat", hatLabel: "Green Hat" }
    ]
  },
  {
    title: "🎬 Blue Lock Season 2 Review",
    link: "https://www.youtube.com/watch?v=-tJ3QOatMpo",
    questions: [
      { emoji: "📊", text: "What does the word 'peak' mean in the title?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "What does the YouTuber think of the new season?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Why is the new season so bad?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "What's good about this video? Who would like it?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "What advice would you give to season 3's investors?", hat: "blue-hat", hatLabel: "Blue Hat" },
      { emoji: "📋", text: "What would you do if you were the director with a limited budget?", hat: "green-hat", hatLabel: "Green Hat" }
    ]
  },
  {
    title: "📖 Manga vs Anime",
    link: "https://www.youtube.com/shorts/FivoAVsHgC8",
    questions: [
      { emoji: "📊", text: "What is manga? What is anime?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you prefer manga or anime?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Who would not like manga? Why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Who would like manga? Why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "How are manga and anime different?", hat: "green-hat", hatLabel: "Blue Hat" },
      { emoji: "📋", text: "What story ideas do you have for manga or anime?", hat: "blue-hat", hatLabel: "Green Hat" }
    ]
  },
  {
    title: "🎨 JJK Style in Football",
    link: "https://www.youtube.com/shorts/ORbsGuZYEOY",
    questions: [
      { emoji: "📊", text: "What is JJK style as mentioned in the video?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you think the art style is too much for football?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Why would some fans hate this art style?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Why would the artist want to draw like this?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "How do artists deal with online haters usually?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What would you do if you were Blue Lock's artist?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  }
];

// Shuffle the questions for each set
window.sixHatSets.forEach(set => {
  set.questions = set.questions.sort(() => Math.random() - 0.5);
});





