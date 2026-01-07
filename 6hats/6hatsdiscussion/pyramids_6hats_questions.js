window.sixHatSets = [
  {
    title: "⚡ The Power Plant Theory",
    link: "https://www.youtube.com/shorts/ynU9fF8QrBI",
    questions: [
      { emoji: "📊", text: "What is this about?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "What do you think of it?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why would this make sense?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "Why would this not make sense?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "How could this inspire people to do what?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How shall we check further if this works?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "🔧 The Power Plant Mechanism",
    link: "https://www.youtube.com/shorts/1Fy6tZtTKCc",
    questions: [
      { emoji: "📊", text: "What is this about?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "What do you think of it?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why would this be convincing?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "Why would this not be convincing?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "How could this inspire people to do what?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How shall we investigate further?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "🔬 The Discovery by Muon Scan",
    link: "https://www.youtube.com/shorts/SUInyhPJjJE",
    questions: [
      { emoji: "📊", text: "What is muon and x-ray?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "What does this discovery mean to you?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why is this discovery important, to whom?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "Why is this discovery not that important, to whom?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "How could this inspire people to do what?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How shall we continue on this research?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "🏛️ The Great Pyramid of Giza",
    link: "https://www.youtube.com/shorts/3P7wsZN6JFk",
    questions: [
      { emoji: "📊", text: "Where is this pyramid?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you want to visit it?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Who wants to study it and why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "Who are not interested in it and why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "How could this inspire people to do what?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How could one get there?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "🗿 The Biggest Pyramid",
    link: "https://www.youtube.com/shorts/E0w-IZ0Nbwo",
    questions: [
      { emoji: "📊", text: "Where is this pyramid?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "What do you think of it?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Who would be excited by this discovery and why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "Who would not be bothered by this discovery and why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "How could this inspire people to do what?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How could one get there?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "🌑 The Dark Pyramid Rumour",
    link: "https://www.youtube.com/shorts/nF6YgWPS0l4",
    questions: [
      { emoji: "📊", text: "Where is this pyramid?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you think it is true?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "What clues suggest that it's real?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "What makes people think it's a coverup?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "How could this inspire people to do what?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How could one debunk this rumour?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "🗣️ The Dark Pyramid Story",
    link: "https://www.youtube.com/shorts/BW1B6DgXJvk",
    questions: [
      { emoji: "📊", text: "Where is Alaska?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Does she sound credible to you?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "What facts can be easily verified in her story?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "What parts of her story are more difficult to be verified?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "How could this inspire people to do what?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How could one confirm her story?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  }
];

// Shuffle the questions for each set
window.sixHatSets.forEach(set => {
  set.questions = set.questions.sort(() => Math.random() - 0.5);
});

