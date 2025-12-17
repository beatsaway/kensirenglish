window.sixHatSets = [
  {
    title: "🚌 Minibus Driver Speeding",
    link: "https://youtu.be/ttPqbvCdFqw?si=PmKL87eTr_UyOv1_&t=18",
    questions: [
      { emoji: "📊", text: "Is the driver speeding?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you think the passengers have overreacted?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Why would it be a bad idea to scream and shout?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Why would the driver want to go so quickly?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "How might this viral video affect the minibus service?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How do we ensure safety in public transport?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "🎵 Minibus with Music",
    link: "https://www.youtube.com/shorts/OwsaotUKt0U",
    questions: [
      { emoji: "📊", text: "What does 'yau lok' mean?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you like having music played in a minibus?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Who would you not recommend to take the mini bus? Why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "What's good about taking mini bus instead of MTR?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "What has been done to make minibus a safer transport?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How would you improve mini bus service in Hong Kong?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "🚕 Hong Kong Taxis",
    link: "https://www.youtube.com/shorts/w-Ovmnq5vkU",
    questions: [
      { emoji: "📊", text: "What colours of taxi do we have in Hong Kong?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you want to own a taxi or a Tesla?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "What's wrong with replacing the classic one?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "What's good about the hybrid or electric models?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "How do you call a taxi these days?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What do you want for a futuristic taxi?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "🚈 Light Rail Transit",
    link: "https://www.youtube.com/shorts/SHB_LyhStRg",
    questions: [
      { emoji: "📊", text: "Where is the light railway system?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you think the red house is worth a visit?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Who would find the red house boring? Why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Who would want to visit the red house? Why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "How do they ensure no one's dodging the LTR fare?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How could the red house be a better place for tourists?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "🚋 Ding Ding Trams",
    link: "https://www.youtube.com/shorts/H7kBR8MljPY",
    questions: [
      { emoji: "📊", text: "What's a ding ding?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you think ding ding is obsolete?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "What's not so good about the ding ding trams?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Who would want to get on a ding ding? Why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "How do you pay for the ding ding?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What if we remove all the seats on the top deck?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "🚇 MTR Announcements",
    link: "https://www.youtube.com/watch?v=A46OzKOcTmw",
    questions: [
      { emoji: "📊", text: "Which station is it?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you like the voice for the train announcement?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Why would some dislike this kind of train announcements?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Why display the announcement in text as well?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "How is that different from the voice in Hong Kong?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How could we make Hong Kong's train announcements better?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  }
];

// Shuffle the questions for each set
window.sixHatSets.forEach(set => {
  set.questions = set.questions.sort(() => Math.random() - 0.5);
});
