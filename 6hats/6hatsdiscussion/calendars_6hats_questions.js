// Calendars: fill-in-the-blank summaries + Six Thinking Hats discussion questions
// Based on video notes in calendars.js

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

window.sixHatSets = [
  // —— 1. Gregorian calendar ——
  {
    title: "📅 The Gregorian Calendar",
    link: "https://www.youtube.com/watch?v=OZlLmPldz5Y",
    articleText: "The calendar we use today was invented by the Catholic Church—by Jesuit priests in the 1580s. We track how long Earth takes to repeat its seasons, not just to go around the Sun. A leap day every four years overcorrected, so we remove a leap day every 100 years, but that undercorrects—so we add a leap day back every 400 years. Year 2000 had a leap day because it is divisible by 400. The whole world uses this calendar; it is one of the most accurate ever devised.",
    vocablist: [
      { word: "Gregorian", translation: "格里曆", emoji: "📅" },
      { word: "seasons", translation: "季節", emoji: "🌍" },
      { word: "leap day", translation: "閏日", emoji: "📆" },
      { word: "century", translation: "世紀", emoji: "⏳" },
      { word: "accurate", translation: "準確", emoji: "✅" }
    ],
    vocabex: "The <span class='vocab-blank' data-answer='Gregorian'></span> calendar tracks Earth’s <span class='vocab-blank' data-answer='seasons'></span>. We add a <span class='vocab-blank' data-answer='leap day'></span> every four years, but skip it every <span class='vocab-blank' data-answer='century'></span> unless the year is divisible by 400. This keeps the calendar <span class='vocab-blank' data-answer='accurate'></span>.",
    questions: shuffleArray([
      { emoji: "📊", text: "Who invented the Gregorian calendar and why do we have leap years?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "How do you feel about having one calendar used by the whole world?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why is it good that we all use the same calendar?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "What problems can leap years cause for computers or plans?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "What other way could we design a calendar?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How should we teach the leap-year rule in school?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ])
  },

  // —— 2. Iran's three calendars ——
  {
    title: "🇮🇷 Iran's Three Calendars",
    link: "https://www.youtube.com/shorts/9AnegH_-dK8",
    articleText: "Iran uses three calendars: the lunar Hijri (from the migration of Prophet Muhammad), the Iranian solar Hijri for seasons and Nowruz, and the Gregorian for the rest of the world. The lunar year is about 355 days, so months shift every year. Iranians needed a stable calendar for farming, so they kept the Hijra as the start but based their own calendar on the sun.",
    vocablist: [
      { word: "lunar", translation: "陰曆／月亮", emoji: "🌙" },
      { word: "Hijri", translation: "希吉拉曆", emoji: "🕌" },
      { word: "solar", translation: "陽曆／太陽", emoji: "☀️" },
      { word: "Nowruz", translation: "諾魯茲（波斯新年）", emoji: "🌸" },
      { word: "agricultural", translation: "農業的", emoji: "🌾" }
    ],
    vocabex: "Iran has a <span class='vocab-blank' data-answer='lunar'></span> <span class='vocab-blank' data-answer='Hijri'></span> calendar and a <span class='vocab-blank' data-answer='solar'></span> one for <span class='vocab-blank' data-answer='agricultural'></span> life. <span class='vocab-blank' data-answer='Nowruz'></span> is the Persian New Year.",
    questions: shuffleArray([
      { emoji: "📊", text: "Why does Iran use three different calendars?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "How would you feel if you had to keep track of three calendars?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why is it useful for a country to have a calendar that follows the seasons?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "What problems could using three calendars cause in daily life?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "What could we learn from Iran’s way of using multiple calendars?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How could a school teach children about different calendar systems?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ])
  },

  // —— 3. Solar, lunar, lunisolar ——
  {
    title: "☀️🌙 Solar, Lunar & Lunisolar Calendars",
    link: "https://youtu.be/-T97d6dsfhE?si=cAiYK6Ade0NYUcOV",
    articleText: "Calendars can be based on the Sun (like the Gregorian), on the Moon (like the Islamic calendar—so Ramadan moves each year), or both: a lunisolar calendar. The Chinese New Year is lunisolar: it uses the moon and the sun, so its date is not fixed on our Gregorian calendar.",
    vocablist: [
      { word: "solar", translation: "太陽的", emoji: "☀️" },
      { word: "lunar", translation: "月亮的", emoji: "🌙" },
      { word: "lunisolar", translation: "陰陽曆", emoji: "🌗" },
      { word: "Ramadan", translation: "齋戒月", emoji: "🕌" },
      { word: "hybrid", translation: "混合的", emoji: "🔀" }
    ],
    vocabex: "A <span class='vocab-blank' data-answer='solar'></span> calendar follows the sun; a <span class='vocab-blank' data-answer='lunar'></span> one follows the moon. <span class='vocab-blank' data-answer='Ramadan'></span> moves each year because it is lunar. Chinese New Year uses a <span class='vocab-blank' data-answer='lunisolar'></span> (or <span class='vocab-blank' data-answer='hybrid'></span>) system.",
    questions: shuffleArray([
      { emoji: "📊", text: "What is the difference between a solar, lunar, and lunisolar calendar?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you prefer a fixed date for New Year or one that moves? Why?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why might farmers prefer a calendar that follows the seasons?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "What is difficult about having festivals on different dates each year?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "If you could invent a new calendar, would it be solar, lunar, or both? Why?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How can we explain to friends why Lunar New Year’s date changes?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ])
  },

  // —— 4. Jewish calendar (pregnant year) ——
  {
    title: "✡️ The Jewish Calendar & the “Pregnant Year”",
    link: "https://www.youtube.com/shorts/TEgWrBi3m7s",
    articleText: "The Jewish calendar uses lunar months of 29 or 30 days. Twelve lunar months are about 11 days shorter than a solar year, so Judaism adds a leap year with 13 months—called a 'pregnant year'—to keep lunar and solar in sync.",
    vocablist: [
      { word: "lunar", translation: "月亮的", emoji: "🌙" },
      { word: "pregnant year", translation: "閏年（有13個月）", emoji: "🤰" },
      { word: "sync", translation: "同步", emoji: "🔄" },
      { word: "leap", translation: "閏", emoji: "⏭️" },
      { word: "approximately", translation: "大約", emoji: "≈" }
    ],
    vocabex: "Jewish months are <span class='vocab-blank' data-answer='lunar'></span> (29 or 30 days). A <span class='vocab-blank' data-answer='pregnant year'></span> has 13 months so the calendar stays in <span class='vocab-blank' data-answer='sync'></span> with the sun. This <span class='vocab-blank' data-answer='leap'></span> happens <span class='vocab-blank' data-answer='approximately'></span> every few years.",
    questions: shuffleArray([
      { emoji: "📊", text: "What is a 'pregnant year' in the Jewish calendar and why is it used?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "How do you feel about the idea of a 13th month in some years?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why is it important for some cultures to keep moon and sun in sync?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "What problems could a 13-month year cause for schools or businesses?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "What other names could we use instead of 'pregnant year'?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How would you explain the Jewish leap year to a class?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ])
  },

  // —— 5. Chinese / Lunar New Year (lunisolar) ——
  {
    title: "🏮 Lunar Solar New Year (Chinese Calendar)",
    link: "https://www.youtube.com/shorts/5znbhHGx18s",
    articleText: "Lunar New Year comes from the Chinese agricultural (nongli) calendar. It is not purely lunar—it is a lunisolar system. The new year is the new moon closest to the start of spring (lichun), so the date moves but stays in late winter or early spring. Years have 12 months, but every 2–3 years a leap month (run) is added. The year is divided into 24 solar terms for farming and weather.",
    vocablist: [
      { word: "lunisolar", translation: "陰陽曆", emoji: "🌗" },
      { word: "new moon", translation: "新月", emoji: "🌑" },
      { word: "leap month", translation: "閏月", emoji: "📆" },
      { word: "solar terms", translation: "節氣", emoji: "🌡️" },
      { word: "Spring Festival", translation: "春節", emoji: "🏮" }
    ],
    vocabex: "The <span class='vocab-blank' data-answer='Spring Festival'></span> uses a <span class='vocab-blank' data-answer='lunisolar'></span> calendar. The year starts on the <span class='vocab-blank' data-answer='new moon'></span> near spring. Sometimes a <span class='vocab-blank' data-answer='leap month'></span> is added. There are 24 <span class='vocab-blank' data-answer='solar terms'></span> for farming.",
    questions: shuffleArray([
      { emoji: "📊", text: "Why is 'Lunar New Year' not fully accurate? What is more accurate?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "How do you feel when Lunar New Year falls in different seasons?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why is it useful to have 24 solar terms for farming?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "What is confusing about having a leap month in different positions?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "What would you tell a friend who thinks it’s 'just a lunar' calendar?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How should we explain the difference between Lunar New Year and Gregorian New Year?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ])
  },

  // —— 6. Why measuring time is hard ——
  {
    title: "⏱️ Why Calendars Are Hard to Measure",
    link: "https://youtu.be/OaYMK2n9Aow?si=oYFbrCdJOIEOfD97&t=2276",
    articleText: "Nature does not always fit into neat boxes. A day can be defined as a sidereal day (same stars overhead) or a solar day (facing the Sun again). A month can be sidereal or synodic (same position relative to the Sun). The same goes for the year. So we have many definitions to choose from—and that is why calendars are messy.",
    vocablist: [
      { word: "sidereal", translation: "恆星的", emoji: "⭐" },
      { word: "solar", translation: "太陽的", emoji: "☀️" },
      { word: "synodic", translation: "會合的", emoji: "🔄" },
      { word: "definition", translation: "定義", emoji: "📖" },
      { word: "pattern", translation: "規律／模式", emoji: "〰️" }
    ],
    vocabex: "A <span class='vocab-blank' data-answer='sidereal'></span> day uses the stars; a <span class='vocab-blank' data-answer='solar'></span> day uses the Sun. The month also has a <span class='vocab-blank' data-answer='synodic'></span> <span class='vocab-blank' data-answer='definition'></span>. There is no single <span class='vocab-blank' data-answer='pattern'></span> in nature, so calendars are hard.",
    questions: shuffleArray([
      { emoji: "📊", text: "What is the difference between a sidereal day and a solar day?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "How do you feel when you learn that 'a day' can mean different things?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why is it still useful to have one agreed calendar even if nature is messy?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "What problems do different definitions of 'day' or 'month' cause?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "If you could define one new unit of time, what would it be?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How should we teach 'why calendars are complicated' in school?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ])
  },

  // —— 7. Maya 819-day cycle & planets ——
  {
    title: "🌌 The Maya 819-Day Cycle & Planets",
    link: "https://youtu.be/CJbhBgYWxVQ?si=zk7TjilRDK9tmMZl&t=242",
    articleText: "The Maya had a cycle of 819 days. Researchers found that 819 is a timeline, not just a count of days. Mercury’s synodic period is 117 days, and 819 ÷ 117 = 7. When the calendar is extended to 20 periods of 819 days, the synodic cycles of Saturn, Venus, Jupiter, and Mars all line up. So the Maya were tracking when planets became visible—they believed the cosmos influenced daily life. They also built structures like El Caracol to observe the sky and used astronomy in temples (e.g. the serpent shadow at Chichen Itza at equinox).",
    vocablist: [
      { word: "synodic", translation: "會合週期", emoji: "🪐" },
      { word: "cycle", translation: "週期", emoji: "🔄" },
      { word: "timeline", translation: "時間線", emoji: "📅" },
      { word: "align", translation: "對齊", emoji: "↔️" },
      { word: "cosmos", translation: "宇宙", emoji: "🌌" }
    ],
    vocabex: "The Maya used an 819-day <span class='vocab-blank' data-answer='cycle'></span> as a <span class='vocab-blank' data-answer='timeline'></span>. Mercury’s <span class='vocab-blank' data-answer='synodic'></span> period fits into 819. Over 20 periods, all visible planets <span class='vocab-blank' data-answer='align'></span>. They believed the <span class='vocab-blank' data-answer='cosmos'></span> influenced life.",
    questions: shuffleArray([
      { emoji: "📊", text: "What is a synodic period and why did the Maya care about 819 days?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "How do you feel about the idea that the sky influences daily life?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why is the Maya calendar considered advanced for its time?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "What could go wrong if we relied on planets for our calendar today?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "What would you build to observe the sky like the Maya?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How could we test whether the 819-day cycle was really used for planets?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ])
  },

  // —— 8. Maya calendar round & long count ——
  {
    title: "📜 Maya Calendar Round & Long Count",
    link: "https://www.youtube.com/watch?v=KmHcwMfHeOk",
    articleText: "Many Maya inscriptions have dates that are 890 days apart. The Maya also had a calendar round of 18,980 days (combining a 365-day year with a 260-day cycle). Inscriptions often show a long count date, a distance number, and two calendar round dates. At Palenque, one exception was explained by going back 83,004 days—83,004 minus 411 equals 82,593, which is 207 × 399, linking to Jupiter’s synodic period. So the Maya linked their calendars to Jupiter and other planets.",
    vocablist: [
      { word: "inscription", translation: "銘文", emoji: "📜" },
      { word: "calendar round", translation: "曆輪", emoji: "🔄" },
      { word: "long count", translation: "長紀曆", emoji: "📅" },
      { word: "distance number", translation: "距離數", emoji: "🔢" },
      { word: "interval", translation: "間隔", emoji: "⏱️" }
    ],
    vocabex: "Maya <span class='vocab-blank' data-answer='inscription'></span>s often show a <span class='vocab-blank' data-answer='long count'></span> date and a <span class='vocab-blank' data-answer='distance number'></span>. The <span class='vocab-blank' data-answer='calendar round'></span> is 18,980 days. Many dates fall on an <span class='vocab-blank' data-answer='interval'></span> of 890 days.",
    questions: shuffleArray([
      { emoji: "📊", text: "What are the Maya calendar round and long count? What is 18,980 days?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "How do you feel about using maths and astronomy to decode ancient writing?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why might the Maya have wanted to link dates to Jupiter?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "What could be wrong with assuming every 890-day interval has the same meaning?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "💡", text: "What other reasons might the Maya have had for carving these dates?", hat: "green-hat", hatLabel: "Green Hat" },
      { emoji: "📋", text: "How would you explain the Maya calendar system to a friend in simple steps?", hat: "blue-hat", hatLabel: "Blue Hat" }
    ])
  }
];
