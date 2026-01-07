window.sixHatSets = [
  {
    title: "🤖 Medisafe AI Tool Controversy",
    articleText: "Over the past weeks, we've followed the public controversy surrounding the Medisafe project — an AI tool we developed in collaboration with Dr. Roberta Pang, a client based in Hong Kong and the wife of Dr. Poon, a surgeon and the \"Hepatobiliary-Pancreatic and Colorectal Surgery Centre hospital\" clinic owner. Their daughter later submitted this tool to academic competitions in Hong Kong and internationally. Medisafe was a prototype designed to simulate prescription safety checks, flagging drug–drug interactions, allergy contraindications, and warnings for renal or hepatic risks. It was built purely as a Minimum Viable Product (MVP) — a proof-of-concept, not a production system.",
    questions: [
      { emoji: "📊", text: "What is the Medisafe project and what does it do?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "How do you feel about students submitting AI tools to competitions?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Who would not like this AI tool being used in medical settings?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Who would like this AI tool and why would it be beneficial?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "How could we improve the Medisafe tool for better medical safety?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What steps should be taken before using AI tools in real medical practice?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "🌳 Hong Kong Primary School's Miyawaki Forest",
    link: "https://www.youtube.com/watch?v=9C8_lE0pYBw",
    questions: [
      { emoji: "📊", text: "What is a Miyawaki forest and how does it help cool cities?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "How do you feel about schools taking environmental action?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Who would not like schools spending time on environmental projects?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Who would like this approach and what are the benefits for students?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "What other environmental projects could Hong Kong schools implement?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How can schools balance environmental education with academic subjects?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "🏫 Forest-Beach School at Malvern College Pre-School",
    link: "https://www.youtube.com/watch?v=9d1n2gPm_tk",
    questions: [
      { emoji: "📊", text: "What is a Forest-Beach School and how does it work?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "How do you feel about children learning outdoors in nature?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Who would not like this outdoor learning approach?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Who would like this educational method and what are its advantages?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "How could we adapt this outdoor learning concept for Hong Kong's climate?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What safety measures are needed for outdoor learning programs?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "🎯 Chinese Kindergarten Teaching Real Life Skills",
    link: "https://www.youtube.com/shorts/2dzg8uGzrp8",
    questions: [
      { emoji: "📊", text: "What do they teach in these Chinese kindergartens?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Would you prefer this way of learning than your own kindergarten experience in Hong Kong?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Who would not like this practical skills approach in kindergarten?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Who would like this method and why is it beneficial for young children?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "How would you design a better kindergarten experience for Hong Kong children?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How would you make kindergarten a more enjoyable experience for young children?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  },
  {
    title: "📝 Note-Taking AI Technology",
    link: "https://www.youtube.com/shorts/CyMPwUlWh4Q",
    questions: [
      { emoji: "📊", text: "What is this note-taking AI app doing?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "What do you think of this AI note-taking technology?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Who would not like using AI for note-taking?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Who would like this AI tool and how does it work?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "How can we ensure AI note-taking is used properly in education?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What guidelines should schools establish for AI-assisted learning?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ]
  }
];

// Shuffle the questions for each set
window.sixHatSets.forEach(set => {
  set.questions = set.questions.sort(() => Math.random() - 0.5);
});
