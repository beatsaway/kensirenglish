/**
 * Theme-based writing tasks: Mona Lisa
 * Each task has context/instructions, optional questions, and optional vocab (en + Cantonese).
 */
window.themeBasedMonalisa = {
    theme: "Mona Lisa",
    referenceLinks: [
        { url: "https://www.youtube.com/shorts/RJGTKiiGsG0", label: "Where're the eyebrows?" },
        { url: "https://youtu.be/0yWzmtLI9tY?si=Dfmtlevi989W-owe&t=47", label: "What's it painted on?" },
        { url: "https://www.youtube.com/shorts/-9L0iZAcPVs", label: "Who's she?" },
        { url: "https://www.youtube.com/shorts/7O6P6nyfMOs", label: "Sfumato?" },
        { url: "https://www.youtube.com/shorts/DF0TbzX9r_A", label: "Leonardo Da Vinci" }

        
    ],
    tasks: [
        {
            id: "youtube-short-fun-facts",
            title: "Fun Facts about Mona Lisa",
            context: "Write a script for a YouTube short. Mention 4 fun facts about the painting Mona Lisa and its painter Leonardo. The sentence starters below are for your reference.",
            questions: [
                "Did you know that it wasn't all that famous, until...?",
                "Have you ever wondered why her eyes...?",
                "One of the most impressive things Leonardo did was...",
                "You might be surprised to learn that he's also a..."
            ],
            vocab: [
                { en: "theft", cn: "盜竊" },
                { en: "fame", cn: "名氣" },
                { en: "gaze", cn: "凝視" },
                { en: "illusion", cn: "幻覺" },
                { en: "inventor", cn: "發明家" },
                { en: "anatomist", cn: "解剖學家" },
                { en: "sfumato", cn: "暈塗法" },
                { en: "realism", cn: "寫實" },
                { en: "Renaissance", cn: "文藝復興" },
                { en: "masterpiece", cn: "傑作" },
                { en: "portrait", cn: "肖像畫" },
                { en: "unusual", cn: "不尋常" }
            ]
        },
        {
            id: "art-lesson-speech",
            title: "Art Lesson: What We can learn from Mona Lisa",
            context: "What can we learn about the past from the Mona Lisa painting? Write a short speech for your presentation in the next art lesson. Give 3 reasons.",
            questions: [
                "What can we learn by looking at the appearance of the lady? (e.g. beauty standard? fashion trend?)",
                "What can we learn by analysing the paints used? (e.g. knowledge of plants and chemicals? technologies?)",
                "What can we learn by comparing it with older paintings? (e.g. painting techniques? pursuit of realism? change of themes?)"
            ],
            vocab: [
                { en: "beauty standard", cn: "審美標準" },
                { en: "fashion", cn: "時尚" },
                { en: "pigment", cn: "顏料" },
                { en: "technique", cn: "技巧" },
                { en: "realism", cn: "寫實主義" },
                { en: "compare", cn: "比較" },
                { en: "tradition", cn: "傳統" },
                { en: "innovation", cn: "創新" },
                { en: "secular", cn: "世俗／非宗教" },
                { en: "ideal", cn: "理想" },
                { en: "evidence", cn: "證據" },
                { en: "conclude", cn: "推論／結論" }
            ]
        },
        {
            id: "who-is-mona-lisa",
            title: "Who's Mona Lisa?",
            context: "Who's Mona Lisa? Write to address the possible theories for a youth art magazine. Give reasons to justify each theory.",
            questions: [
                "Leo's wife? ",
                "A businessman's wife? ",
                "Leo himself reimagined as a woman?"
            ],
            vocab: [
                { en: "theory", cn: "理論" },
                { en: "evidence", cn: "證據" },
                { en: "historian", cn: "歷史學家" },
                { en: "portrait", cn: "肖像畫" },
                { en: "commission", cn: "委託" },
                { en: "self-portrait", cn: "自畫像" },
                { en: "overlay", cn: "疊加對比" },
                { en: "resemble", cn: "相似" },
                { en: "widely accepted", cn: "廣為接受" },
                { en: "controversial", cn: "有爭議" },
                { en: "justify", cn: "證明合理" },
                { en: "criticise", cn: "批評" },
                { en: "convincing", cn: "有說服力" },
                { en: "doubt", cn: "懷疑" }
            ]
        }
    ]
};
