window.sixHatSets = [
  {
    title: "🔊 Mysterious Sounds from the Borehole",
    link: "https://www.youtube.com/shorts/oLqWVcKuHsw",
    questions: [
      { emoji: "📊", text: "What do they hear down below?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you find this borehole story scary?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Why do they stop drilling?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Who decided to drill the borehole and why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "What would you do if you have the superpower to drill through rock easily?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How could we confirm the sound source nowadays?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "🧊 Lake Vostok - Hidden Under the Ice",
    link: "https://www.youtube.com/shorts/aAW3CxVDT3w",
    questions: [
      { emoji: "📊", text: "What is 4km below the ice?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you want scientists to go down and study the lake Vostok?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Who would want to have access to the lake? Why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "Who would not want to drink it? Why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "What would you do if you own the lake?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How do you ensure safety of activities at the lake?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "✈️ The Guo Incident",
    link: "https://www.youtube.com/shorts/MpKb8YlCwqc",
    questions: [
      { emoji: "📊", text: "What is a transponder?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you think Antarctica should be owned by any countries?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Who think he should be arrested? Why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Who think he did nothing wrong? Why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "What would you do, if you own a plane?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What could his online supporters do to help?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "🗺️ Ancient Maps of Antarctica",
    link: "https://www.youtube.com/shorts/ajr0PfjT-Lw",
    questions: [
      { emoji: "📊", text: "What is different between the Pinkerton map in 1818 and the ancient ones?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you believe his theory?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Who would collect old maps? Why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "Who would not like outdated maps? Why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "What would you do if you have a collection of ancient maps?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What to do when Google Map doesn't work in Antarctica?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "🏔️ The Pyramid Mystery",
    link: "https://www.youtube.com/shorts/ra-KiO9rMos",
    questions: [
      { emoji: "📊", text: "What does erosion do to mountains?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you believe that pyramid is natural?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Who would want to visit it and why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "Who would not want to go there and Why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "What would you do if you could build a pyramid in your hometown? For what?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How could we confirm if it is formed by erosion?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  }
];

// Shuffle the questions for each set
window.sixHatSets.forEach(set => {
  set.questions = set.questions.sort(() => Math.random() - 0.5);
});

