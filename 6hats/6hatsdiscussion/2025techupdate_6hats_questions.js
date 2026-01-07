// Function to shuffle array
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

window.sixHatSets = [
  {
    title: "🚗 A flying car concept",
    link: 'https://www.youtube.com/watch?v=oy4AFQzrcm8',
    questions: shuffleArray([
      { emoji: "📊", text: "What is this about?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "What do you think of it?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Who would not like this and why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Who would like this and why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "What could you do if you have one?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What would you do to make it better?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ])
  },
  {
    title: "🚁 A flying car prototype",
    link: 'https://www.youtube.com/shorts/vOB4hRQDfrM',
    questions: shuffleArray([
      { emoji: "📊", text: "What is this about?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "What do you think of it?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Who would not like this and why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Who would like this and why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "What could you do if you have one?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What would you do to make it better?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ])
  },
  {
    title: "✈️ Another flying car prototype",
    link: 'https://www.youtube.com/shorts/E0EIiRPKCbQ',
    questions: shuffleArray([
      { emoji: "📊", text: "What is this about?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "What do you think of it?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Who would not like this and why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Who would like this and why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "What could you do if you have one?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What would you do to make it better?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ])
  },
  {
    title: "⚖️ Legal debate",
    link: 'https://www.youtube.com/shorts/vKDpopHb5sk',
    questions: shuffleArray([
      { emoji: "📊", text: "What is this about?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "What do you think of it?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Who would not like this and why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Who would like this and why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "What could you do if you have one?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What would you do to make it better?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ])
  },
  {
    title: "🤖 Unitree R1",
    link: 'https://www.youtube.com/watch?v=v1Q4Su54iho',
    questions: shuffleArray([
      { emoji: "📊", text: "What is this about?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "What do you think of it?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Who would not like this and why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Who would like this and why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "What could you do if you have one?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What would you do to make it better?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ])
  },
  {
    title: "🧠 Brainwave Scanner",
    link: 'https://www.youtube.com/shorts/zlgeY6guAKY',
    questions: shuffleArray([
      { emoji: "📊", text: "What is this about?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "What do you think of it?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Who would not like this and why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Who would like this and why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "What could you do if you have one?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What would you do to make it better?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ])
  }
];

