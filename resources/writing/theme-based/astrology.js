/**
 * Theme-based writing tasks: Astrology
 * Each task has context/instructions, optional questions, and optional vocab (en + Cantonese).
 */
window.themeBasedAstrology = {
    theme: "Astrology",
    tasks: [
        {
            id: "horoscope-translation",
            title: "Horoscope Translation",
            context: "Please translate the following horoscope into English.",
            instructions: "Translate these into English:\n\n財運唔錯，有乜新投資機會就唔好錯過，踏足新領域可能會帶俾你新嘅發現。\n\n容易遇到事與願違嘅情況，少講啲說話，做多啲實事，自然可以遠離是非。\n\n多啲同人交流，分享諗法，了解彼此，互動多啲，對你會好有利。",
            questions: [],
            vocab: [
                { en: "fortune", cn: "財運" },
                { en: "investment", cn: "投資" },
                { en: "field", cn: "領域" },
                { en: "discovery", cn: "發現" },
                { en: "deviate", cn: "偏離" },
                { en: "unexpected", cn: "出乎意料" },
                { en: "actions", cn: "實事／行動" },
                { en: "words", cn: "說話" },
                { en: "gossips", cn: "是非" },
                { en: "interactions", cn: "互動" },
                { en: "beneficial", cn: "有利" }
            ]
        },
        {
            id: "art-of-ambiguity",
            title: "The Art of Ambiguity",
            context: "You're an astrologer writing horoscopes weekly online. Your readers are mostly students from Hong Kong. Be a bit vague so what you say can be applied onto any zodiac sign.",
            questions: [
                "Make a prediction about their learning in school. Give them some advice.",
                "Make a prediction about their health. Give them some advice.",
                "Make a prediction about their social life. Give them some advice."
            ],
            vocab: [
                { en: "time management", cn: "時間管理" },
                { en: "sleep deprivation", cn: "睡眠不足" },
                { en: "pressure", cn: "壓力" },
                { en: "challenge", cn: "挑戰" },
                { en: "stress", cn: "壓力／緊張" },
                { en: "workload", cn: "工作量" },
                { en: "junk food", cn: "垃圾食物" },
                { en: "exercise", cn: "運動" },
                { en: "hobbies", cn: "嗜好" },
                { en: "open-minded", cn: "開放態度" }
            ]
        },
        {
            id: "harm-or-good",
            title: "Does It Do More Harm Than Good?",
            context: "40% of students at your school read horoscopes weekly. Write to your school magazine explaining why you think that is a good habit. Give 3 reasons.",
            questions: [],
            instructions: "Give 3 reasons why reading horoscopes weekly can be a good habit.",
            vocab: [
                { en: "guidance", cn: "指引" },
                { en: "reflection", cn: "反思" },
                { en: "confirmation bias", cn: "確認偏誤" },
                { en: "ambiguity", cn: "模糊性" },
                { en: "ambiguous", cn: "含糊" },
                { en: "specifics", cn: "具體細節" },
                { en: "broad", cn: "廣泛" },
                { en: "general", cn: "籠統" },
                { en: "likely", cn: "可能" },
                { en: "knowledge", cn: "知識" },
                { en: "misleading", cn: "誤導" },
                { en: "entertaining", cn: "有趣" },
                { en: "insightful", cn: "有見地" },
                { en: "inspiring", cn: "鼓舞" },
                { en: "encouraging", cn: "鼓勵" },
                { en: "nurture", cn: "培養" },
                { en: "astrology", cn: "占星術" },
                { en: "astronomy", cn: "天文學" }
            ]
        }
    ]
};
