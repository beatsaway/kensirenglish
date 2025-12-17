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
    title: "🏠 Weekend Gatherings of Domestic Workers",
    link: 'https://www.youtube.com/watch?v=3bKbt9Xx-Do',
    questions: shuffleArray([
      { emoji: "📊", text: "What is the video about?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "What do you think about the weekend gatherings of domestic workers?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "Who would find the weekend gatherings of domestic workers annoying? Why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Who wouldn't mind the weekend gatherings of domestic workers? Why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "📊", text: "How do Hong Kong domestic workers make money?", hat: "blue-hat", hatLabel: "Blue Hat" },
      { emoji: "💡", text: "Any better ideas to make weekends more enjoyable for everyone?", hat: "green-hat", hatLabel: "Green Hat" }
    ])
  },
  {
    title: "🚨 Illegal Recruitment of Domestic Workers",
    link: 'https://www.youtube.com/watch?v=I_Fo62pnswQ',
    questions: shuffleArray([
      { emoji: "📊", text: "What has happened?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you think the situation is out of control?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Who would want to work as domestic helpers in Hong Kong? Why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "Who wouldn't want to work as domestic helpers in Hong Kong? Why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "📋", text: "How is this illegal?", hat: "blue-hat", hatLabel: "Blue Hat" },
      { emoji: "💡", text: "What creative measures or policies could help prevent domestic worker abuse?", hat: "green-hat", hatLabel: "Green Hat" }
    ])
  },
  {
    title: "🏛️ Hong Kong Residency for Domestic Workers",
    link: 'https://www.youtube.com/watch?v=4VWmZL0uxKg',
    questions: shuffleArray([
      { emoji: "📊", text: "What is the Hong Kong residency issue about?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "🌟", text: "Why would some people appreciate the residency ruling for domestic workers?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "Why do some people think we're mistreating domestic helpers with the residency policy?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "😊", text: "Do you think they should have Hong Kong residency?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "📋", text: "How would you have dealt with the domestic worker residency situation in the past?", hat: "blue-hat", hatLabel: "Blue Hat" },
      { emoji: "💡", text: "What ideas do you have to make the residency situation better for domestic workers in the future?", hat: "green-hat", hatLabel: "Green Hat" }
    ])
  },
  {
    title: "❤️ Appreciating Domestic Helpers",
    link: 'https://www.youtube.com/shorts/_ICJ_JBZWeA',
    questions: shuffleArray([
      { emoji: "📊", text: "What is the video about appreciating domestic helpers?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you like your domestic helper?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Who appreciates the work done by domestic helpers? Why?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "Who might not appreciate the work done by domestic helpers? Why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "How can we make domestic helpers feel more welcomed in Hong Kong?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What ideas can you implement at home to show appreciation for domestic helpers?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ])
  },
  {
    title: "👶 Domestic Helpers and Children",
    link: 'https://www.youtube.com/watch?v=8oME-ar9WpI',
    questions: shuffleArray([
      { emoji: "📊", text: "What is the video about domestic helpers and children?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you think your domestic helper knows you better?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why do some people think it's okay for domestic helpers to know children better than parents?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "Why do some people think it's a problem when domestic helpers know children better than parents?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "How can we help parents get to know their kids better?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What ideas can you implement at home to help parents connect better with their children?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ])
  },
  {
    title: "🎤 Filipino Singing Culture",
    link: 'https://www.youtube.com/shorts/n_zhdgITaiU',
    questions: shuffleArray([
      { emoji: "📊", text: "What's happening in the Filipino singing culture video?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you think Filipinos are good singers?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "What's good about their singing?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "What problems or issues do you see with the Filipino singing culture video?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "How can we become better singers?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What ideas can you practice with someone to improve your singing?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ])
  },
  {
    title: "🏠 Living Conditions and Accommodation",
    link: 'https://www.youtube.com/watch?v=example1',
    chinglishText: `<p>Many domestic workers in Hong Kong face challenges with their <span class="chinglish-mistake" data-correct="accommodation">accommodations</span> arrangements. Some employers provide proper living spaces, while others may not meet basic standards. The government has regulations about minimum space requirements, but enforcement can be difficult.</p><p>Domestic workers often share small spaces or live in converted storage areas. This affects their <span class="chinglish-mistake" data-correct="well-being">good health</span> and ability to rest properly. Some workers choose to live outside their employer's home, which gives them more freedom but also more expenses.</p>`,
    questions: shuffleArray([
      { emoji: "📊", text: "What are the current housing regulations for domestic workers in Hong Kong?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "How do you feel about the living conditions of domestic workers?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "What problems might arise from poor accommodation for domestic workers?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Why is it important to provide good living conditions for domestic workers?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "What creative solutions can we find to improve housing for domestic workers?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What steps should the government take to ensure better accommodation standards?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ])
  },
  {
    title: "💰 Wages and Financial Security",
    link: 'https://www.youtube.com/watch?v=example2',
    chinglishText: `<p>The minimum wage for domestic workers in Hong Kong is set by the government, but many workers struggle with <span class="chinglish-mistake" data-correct="financial">money</span> security. Some employers may not pay overtime or provide proper benefits. Workers often send most of their earnings back to their families in their home countries.</p><p>Many domestic workers face challenges with <span class="chinglish-mistake" data-correct="savings">save money</span> and retirement planning. They may work for many years without building significant personal wealth. Some workers take on additional jobs during their rest days to earn extra money.</p>`,
    questions: shuffleArray([
      { emoji: "📊", text: "What is the current minimum wage for domestic workers in Hong Kong?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "How do you feel about the financial situation of domestic workers?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "What financial problems do domestic workers commonly face?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Why is fair pay important for domestic workers?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "What new ideas can help domestic workers save money and plan for the future?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What policies should be implemented to improve financial security for domestic workers?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ])
  },
  {
    title: "🌍 Cultural Integration and Community",
    link: 'https://www.youtube.com/watch?v=example3',
    chinglishText: `<p>Domestic workers in Hong Kong come from different countries and bring their own <span class="chinglish-mistake" data-correct="cultures">culture</span> and traditions. Many workers form strong communities with people from their home countries, especially on Sundays when they gather in public spaces.</p><p>Some domestic workers face challenges with <span class="chinglish-mistake" data-correct="integration">integrate</span> into Hong Kong society. Language barriers and cultural differences can make it difficult to feel at home. However, many workers learn Cantonese and adapt to local customs while maintaining their own cultural identity.</p>`,
    questions: shuffleArray([
      { emoji: "📊", text: "What countries do most domestic workers in Hong Kong come from?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "How do you feel about the cultural diversity that domestic workers bring to Hong Kong?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "⚠️", text: "What challenges do domestic workers face in integrating into Hong Kong society?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "🌟", text: "Why is cultural diversity beneficial for Hong Kong?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "💡", text: "What creative ways can we help domestic workers feel more welcome in Hong Kong?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "What programs should be created to help domestic workers integrate better into the community?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ])
  }
];
