window.sixHatSets = [
  {
    title: "🏠 Understanding Homelessness",
    link: "https://www.youtube.com/shorts/zsGqssvK1EI",
    questions: [
      { emoji: "📊", text: "What is this about?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you think they deserve to be homeless?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Why is it a bad experience to be homeless?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Who would want to help them? Why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "How did they end up homeless?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How could they get better?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "👩 A Woman's Story",
    link: "https://www.youtube.com/watch?v=6TLVgwoqhoc",
    questions: [
      { emoji: "📊", text: "What happened to her?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you think the charities have done enough?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "What problems is she experiencing?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Who could get help from the charities? Why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "How is she not getting a job?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What would you do if you were here?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "🚗 Living in a Car",
    link: "https://www.youtube.com/shorts/mzMZU7pdmQc",
    questions: [
      { emoji: "📊", text: "What is this about?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Have you ever stayed overnight in a car?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Who wouldn't want to live in a car? Why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Who would want to live in a car? Why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "How does he keep warm in winter?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What if it is a truck? Would it make things easier?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "⚖️ Homelessness Laws",
    link: "https://www.youtube.com/shorts/gnDfvJVTTrY",
    questions: [
      { emoji: "📊", text: "Is it illegal to be homeless in the UK?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you think it is the right thing to do?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Who would not like this law? Why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Who would support this law? Why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "How do we help homeless people?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What more can we do to help?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "🔥 Tent Fires Crisis",
    link: "https://www.youtube.com/watch?v=c6uI76IQ_OA",
    questions: [
      { emoji: "📊", text: "What is the crisis about?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you think it's a problem that can be solved?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Why would one not want to stay in a tent?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Why would someone want to set fire on his tent?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "Where could one live if they lost their homes?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What could the government do?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "🏨 Living in Hotels",
    link: "https://www.youtube.com/shorts/k23RTgB1NVE",
    questions: [
      { emoji: "📊", text: "Where are they living in?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you want to live in hotels your whole life?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Why don't they just live on the street?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Why are they living in the hotel?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "How could we make housing more affordable?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What would you do if you know Kaya in person?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  }
];

// Shuffle the questions for each set
window.sixHatSets.forEach(set => {
  set.questions = set.questions.sort(() => Math.random() - 0.5);
});
