/**
 * Ebola emergency — part-of-speech fill-in + discussion (adapted from UNICEF).
 * Source: https://www.unicef.org/emergencies/ebola-emergency
 */
window.EBOLA_EMERGENCY_PASSAGE = {
  title: "Ebola emergency",
  titleZh: "伊波拉疫情",
  source: {
    label: "Original article (UNICEF)",
    url: "https://www.unicef.org/emergencies/ebola-emergency"
  },
  sections: [
    {
      title: "WHO emergency declaration",
      emoji: "🌍",
      text:
        "The World Health Organization (WHO) _____ (declare) the outbreak a Public Health Emergency of International Concern, and cases _____ (report) in a number of locations, _____ (increase) the urgency of the response.",
      answers: ["has declared", "have been reported", "increasing"],
      questions: [
        "What does a Public Health Emergency of International Concern mean?",
        "Why does reporting cases in many locations increase urgency?",
        "How might news of an outbreak affect daily life in affected areas?",
        "What organisations might lead the international response?"
      ]
    },
    {
      title: "How Ebola affects children",
      emoji: "👧",
      text:
        "Beyond the immediate physical danger, children may experience _____ (last) emotional distress from _____ (witness) the _____ (suffer) of loved ones, _____ (face) isolation and _____ (endure) stigma within their communities.",
      answers: ["lasting", "witnessing", "suffering", "facing", "enduring"],
      questions: [
        "Why might witnessing a loved one's illness cause lasting distress?",
        "How can stigma make a child's isolation worse?",
        "What support might schools provide during an outbreak?",
        "How is protecting children's mental health different from treating the virus?"
      ]
    },
    {
      title: "The outbreak today",
      emoji: "🦠",
      text:
        "It _____ (drive) by the Bundibugyo strain of the Ebola virus, which _____ (believe) to have begun _____ (circulate) in April. Ongoing conflicts, _____ (limit) humanitarian access and high cross-border movement _____ (complicate) containment efforts and further _____ (increase) the risk of transmission.",
      answers: ["is being driven", "is believed", "circulating", "limited", "complicate", "increase"],
      questions: [
        "Why might cross-border movement make an outbreak harder to contain?",
        "How can conflict limit humanitarian access?",
        "What is meant by \"transmission\" in this context?",
        "Why is knowing when a virus began circulating useful for responders?"
      ]
    },
    {
      title: "Treatment and survival",
      emoji: "🏥",
      text:
        "Crucially, there is currently no _____ (approve) vaccine or specific treatment available, although early supportive care _____ (improve) the prospects for survival.",
      answers: ["approved", "improves"],
      questions: [
        "What is the difference between a vaccine and supportive care?",
        "Why might early care improve survival even without a cure?",
        "How could lack of an approved vaccine affect public fear?",
        "What other health services might be disrupted during an outbreak?"
      ]
    },
    {
      title: "Community information & prevention",
      emoji: "📻",
      text:
        "Through channels such as local radio, UNICEF helps families _____ (understand) how the virus _____ (transmit) and how to reduce their risk. UNICEF also supports the installation of critical _____ (handwash) stations and temperature _____ (screen) in public spaces.",
      answers: ["understand", "is transmitted", "handwashing", "screenings"],
      questions: [
        "Why is local radio useful in a community-led response?",
        "How does understanding transmission help families reduce risk?",
        "Why are handwashing stations important at hospitals and public places?",
        "What might temperature screening detect — and what might it miss?"
      ]
    },
    {
      title: "Psychosocial support",
      emoji: "💙",
      text:
        "_____ (draw) on lessons from past outbreaks, UNICEF psychosocial teams provide timely support to _____ (affect) families. These teams assist families through traumatic moments – from _____ (transfer) a loved one to a treatment centre, to _____ (agree) to household disinfection or _____ (organise) a Safe and Dignified Burial. They also track contacts of cases for early detection.",
      answers: ["Drawing", "affected", "transferring", "agreeing", "organising"],
      questions: [
        "Why might transferring a loved one to a treatment centre be traumatic?",
        "How can psychosocial teams build trust during an outbreak?",
        "Why is contact tracing important for early detection?",
        "What might \"Safe and Dignified Burial\" mean for grieving families?"
      ]
    }
  ]
};
