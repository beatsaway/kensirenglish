const levelSelect = document.getElementById("levelSelect");
const levelInfo = document.getElementById("levelInfo");
const categoryLegend = document.getElementById("categoryLegend");
const questionCard = document.getElementById("questionCard");
const keywordList = document.getElementById("keywordList");
const questionStatus = document.getElementById("questionStatus");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const CATEGORY_ORDER = [
    "opinion",
    "size",
    "age",
    "shape",
    "color",
    "origin",
    "material",
    "purpose"
];

const categoryLabels = {
    opinion: "Opinion",
    size: "Size",
    age: "Age",
    shape: "Shape",
    color: "Color",
    origin: "Origin",
    material: "Material",
    purpose: "Purpose"
};

const adjectiveBank = {
    cute: { category: "opinion", yue: "可愛的" },
    angry: { category: "opinion", yue: "生氣的" },
    gentle: { category: "opinion", yue: "溫和的" },
    noisy: { category: "opinion", yue: "嘈吵的" },
    brave: { category: "opinion", yue: "勇敢的" },
    lovely: { category: "opinion", yue: "可愛的" },
    funny: { category: "opinion", yue: "好笑的" },
    smart: { category: "opinion", yue: "聰明的" },
    friendly: { category: "opinion", yue: "友善的" },
    scary: { category: "opinion", yue: "可怕的" },
    shiny: { category: "opinion", yue: "閃亮的" },
    beautiful: { category: "opinion", yue: "美麗的" },
    small: { category: "size", yue: "細小的" },
    big: { category: "size", yue: "大的" },
    large: { category: "size", yue: "巨大的" },
    tiny: { category: "size", yue: "細細的" },
    little: { category: "size", yue: "小的" },
    old: { category: "age", yue: "舊的" },
    young: { category: "age", yue: "年輕的" },
    new: { category: "age", yue: "新的" },
    ancient: { category: "age", yue: "古老的" },
    round: { category: "shape", yue: "圓形的" },
    long: { category: "shape", yue: "長的" },
    square: { category: "shape", yue: "正方形的" },
    flat: { category: "shape", yue: "平的" },
    red: { category: "color", yue: "紅色的" },
    black: { category: "color", yue: "黑色的" },
    white: { category: "color", yue: "白色的" },
    blue: { category: "color", yue: "藍色的" },
    Italian: { category: "origin", yue: "意大利的" },
    Japanese: { category: "origin", yue: "日本的" },
    Chinese: { category: "origin", yue: "中國的" },
    French: { category: "origin", yue: "法國的" },
    wooden: { category: "material", yue: "木製的" },
    metal: { category: "material", yue: "金屬的" },
    plastic: { category: "material", yue: "膠的" },
    glass: { category: "material", yue: "玻璃的" },
    cooking: { category: "purpose", yue: "煮食用的" },
    sports: { category: "purpose", yue: "運動用的" },
    school: { category: "purpose", yue: "上學用的" },
    travel: { category: "purpose", yue: "旅行用的" }
};

const LEVELS = [
    {
        id: "1",
        label: "Level 1: Opinion + Size",
        focus: "Opinion > Size",
        questions: [
            { noun: "puppy", adjectives: ["cute", "small"] },
            { noun: "dog", adjectives: ["angry", "big"] },
            { noun: "Beagle", adjectives: ["friendly", "little"] },
            { noun: "poodle", adjectives: ["lovely", "tiny"] }
        ]
    },
    {
        id: "2",
        label: "Level 2: Opinion + Size + Age",
        focus: "Opinion > Size > Age",
        questions: [
            { noun: "dog", adjectives: ["brave", "big", "old"] },
            { noun: "puppy", adjectives: ["cute", "small", "young"] },
            { noun: "bulldog", adjectives: ["funny", "large", "new"] },
            { noun: "terrier", adjectives: ["smart", "little", "ancient"] }
        ]
    },
    {
        id: "3",
        label: "Level 3: Opinion + Size + Shape",
        focus: "Opinion > Size > Shape",
        questions: [
            { noun: "dog", adjectives: ["friendly", "small", "round"] },
            { noun: "tail", adjectives: ["scary", "big", "long"] },
            { noun: "dog house", adjectives: ["gentle", "large", "square"] },
            { noun: "tag", adjectives: ["shiny", "tiny", "flat"] }
        ]
    },
    {
        id: "4",
        label: "Level 4: Opinion + Size + Color",
        focus: "Opinion > Size > Color",
        questions: [
            { noun: "ball", adjectives: ["beautiful", "small", "red"] },
            { noun: "puppy", adjectives: ["cute", "tiny", "white"] },
            { noun: "dog", adjectives: ["brave", "big", "black"] },
            { noun: "collar", adjectives: ["shiny", "little", "blue"] }
        ]
    },
    {
        id: "5",
        label: "Level 5: Opinion + Size + Origin",
        focus: "Opinion > Size > Origin",
        questions: [
            { noun: "dog", adjectives: ["friendly", "small", "Italian"] },
            { noun: "poodle", adjectives: ["lovely", "tiny", "French"] },
            { noun: "puppy", adjectives: ["cute", "little", "Japanese"] },
            { noun: "bulldog", adjectives: ["brave", "big", "Chinese"] }
        ]
    },
    {
        id: "6",
        label: "Level 6: Opinion + Size + Material",
        focus: "Opinion > Size > Material",
        questions: [
            { noun: "bowl", adjectives: ["shiny", "small", "metal"] },
            { noun: "toy", adjectives: ["funny", "little", "plastic"] },
            { noun: "collar", adjectives: ["lovely", "tiny", "metal"] },
            { noun: "dog house", adjectives: ["gentle", "large", "wooden"] }
        ]
    },
    {
        id: "7",
        label: "Level 7: Opinion + Size + Purpose",
        focus: "Opinion > Size > Purpose",
        questions: [
            { noun: "bag", adjectives: ["smart", "small", "travel"] },
            { noun: "basket", adjectives: ["lovely", "large", "school"] },
            { noun: "toy", adjectives: ["cute", "tiny", "sports"] },
            { noun: "pot", adjectives: ["friendly", "big", "cooking"] }
        ]
    },
    {
        id: "8",
        label: "Level 8: Review (4 adjectives)",
        focus: "Opinion > Size > Age > Color",
        questions: [
            { noun: "puppy", adjectives: ["cute", "small", "young", "white"] },
            { noun: "dog", adjectives: ["brave", "big", "old", "black"] },
            { noun: "collar", adjectives: ["shiny", "little", "new", "blue"] },
            { noun: "bowl", adjectives: ["lovely", "tiny", "old", "red"] }
        ]
    },
    {
        id: "9",
        label: "Level 9: Review (4 adjectives)",
        focus: "Opinion > Size > Shape > Material",
        questions: [
            { noun: "dog house", adjectives: ["gentle", "large", "square", "wooden"] },
            { noun: "tag", adjectives: ["shiny", "tiny", "round", "metal"] },
            { noun: "toy", adjectives: ["funny", "small", "flat", "plastic"] },
            { noun: "bowl", adjectives: ["lovely", "little", "round", "glass"] }
        ]
    }
];

const responsesByLevel = new Map();
const keywordOrderByLevel = new Map();
let currentLevelId = LEVELS[0].id;
let currentQuestionIndex = 0;
let activeBlankIndex = null;

const formatOptionLabel = (word) => {
    const entry = adjectiveBank[word];
    if (!entry) {
        return word;
    }
    return `${word} (${entry.yue})`;
};

const shuffle = (arr) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
};

const getExpectedOrder = (words) => {
    return [...words].sort(
        (a, b) =>
            CATEGORY_ORDER.indexOf(adjectiveBank[a].category) -
            CATEGORY_ORDER.indexOf(adjectiveBank[b].category)
    );
};

const getArticle = (word) => {
    if (!word) {
        return "A";
    }
    const first = word.trim().toLowerCase()[0];
    return ["a", "e", "i", "o", "u"].includes(first) ? "An" : "A";
};

const getLevelState = (level) => {
    if (!responsesByLevel.has(level.id)) {
        const blankState = level.questions.map((question) =>
            Array(question.adjectives.length).fill("")
        );
        responsesByLevel.set(level.id, blankState);
    }
    return responsesByLevel.get(level.id);
};

const getKeywordOrder = (level, questionIndex) => {
    if (!keywordOrderByLevel.has(level.id)) {
        keywordOrderByLevel.set(
            level.id,
            level.questions.map((question) => shuffle(question.adjectives))
        );
    }
    const levelOrder = keywordOrderByLevel.get(level.id);
    if (!levelOrder[questionIndex]) {
        levelOrder[questionIndex] = shuffle(level.questions[questionIndex].adjectives);
    }
    return levelOrder[questionIndex];
};

const clearStatusClasses = (card) => {
    card.classList.remove("correct", "incorrect", "incomplete");
};

const getOrderHint = (selection) => {
    const categories = selection.map((word) => adjectiveBank[word]?.category || "opinion");
    for (let i = 0; i < categories.length - 1; i += 1) {
        const current = categories[i];
        const next = categories[i + 1];
        if (CATEGORY_ORDER.indexOf(current) > CATEGORY_ORDER.indexOf(next)) {
            return `Hint: ${categoryLabels[next]} adjectives go before ${categoryLabels[current]} adjectives.`;
        }
    }
    return "Hint: Follow the adjective order rule and use each adjective once.";
};

const evaluateCard = (card, selection) => {
    clearStatusClasses(card);
    const answer = card.dataset.answer.split("|");
    const hintLine = card.querySelector(".hint-line");
    const hasSelection = selection.some((value) => value !== "");
    if (!hasSelection) {
        if (hintLine) hintLine.textContent = "";
        return;
    }
    if (selection.some((value) => value === "")) {
        if (hintLine) hintLine.textContent = "";
        return;
    }
    if (selection.join("|") === answer.join("|")) {
        card.classList.add("correct");
        if (hintLine) hintLine.textContent = "";
    } else {
        card.classList.add("incorrect");
        if (hintLine) hintLine.textContent = getOrderHint(selection);
    }
};

const renderQuestion = () => {
    const level = LEVELS.find((item) => item.id === currentLevelId) || LEVELS[0];
    const state = getLevelState(level);
    const question = level.questions[currentQuestionIndex];
    const selection = state[currentQuestionIndex];
    activeBlankIndex = null;

    questionStatus.textContent = "";
    questionCard.innerHTML = "";

    const expected = getExpectedOrder(question.adjectives);
    questionCard.dataset.answer = expected.join("|");

    const line = document.createElement("div");
    line.className = "sentence-line";
    line.appendChild(document.createTextNode(`${getArticle(expected[0])} `));

    selection.forEach((value, index) => {
        const blank = document.createElement("span");
        blank.className = "blank-slot";
        blank.dataset.index = String(index);
        blank.textContent = value || "_____";
        blank.addEventListener("click", () => {
            const isActive = blank.classList.contains("active");
            document.querySelectorAll(".blank-slot").forEach((el) => {
                el.classList.remove("active");
            });
            if (isActive && selection[index]) {
                selection[index] = "";
                blank.textContent = "_____";
                evaluateCard(questionCard, selection);
                return;
            }
            blank.classList.add("active");
            activeBlankIndex = index;
        });
        line.appendChild(blank);
        if (index < selection.length - 1) {
            line.appendChild(document.createTextNode(", "));
        } else {
            line.appendChild(document.createTextNode(" "));
        }
    });

    line.appendChild(document.createTextNode(`${question.noun}.`));
    questionCard.appendChild(line);

    const hintLine = document.createElement("div");
    hintLine.className = "hint-line";
    hintLine.textContent = "";
    questionCard.appendChild(hintLine);

    renderKeywords(level, selection);
    evaluateCard(questionCard, selection);
    updateNav(level);
};

const renderKeywords = (level, selection) => {
    keywordList.innerHTML = "";
    const keywords = getKeywordOrder(level, currentQuestionIndex);
    keywords.forEach((word) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "keyword-btn";
        button.textContent = formatOptionLabel(word);
        button.addEventListener("click", () => {
            const targetIndex =
                activeBlankIndex ?? selection.findIndex((value) => value === "");
            if (targetIndex < 0) {
                return;
            }
            selection[targetIndex] = word;
            renderQuestion();
        });
        keywordList.appendChild(button);
    });
};

const updateNav = (level) => {
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === level.questions.length - 1;
};

const renderLevel = () => {
    const level = LEVELS.find((item) => item.id === currentLevelId) || LEVELS[0];
    levelInfo.textContent = "";
    currentQuestionIndex = 0;
    renderQuestion();
};

const initLevels = () => {
    levelSelect.innerHTML = "";
    LEVELS.forEach((level) => {
        const option = document.createElement("option");
        option.value = level.id;
        option.textContent = level.label;
        levelSelect.appendChild(option);
    });
    levelSelect.value = LEVELS[0].id;
    levelSelect.addEventListener("change", (event) => {
        currentLevelId = event.target.value;
        renderLevel();
    });
};

const renderLegend = () => {
    categoryLegend.innerHTML = "";
    CATEGORY_ORDER.forEach((key) => {
        const chip = document.createElement("span");
        chip.className = "category-chip";
        chip.textContent = categoryLabels[key];
        categoryLegend.appendChild(chip);
    });
};

prevBtn.addEventListener("click", () => {
    if (currentQuestionIndex === 0) {
        return;
    }
    currentQuestionIndex -= 1;
    renderQuestion();
});

nextBtn.addEventListener("click", () => {
    const level = LEVELS.find((item) => item.id === currentLevelId) || LEVELS[0];
    if (currentQuestionIndex >= level.questions.length - 1) {
        return;
    }
    currentQuestionIndex += 1;
    renderQuestion();
});

initLevels();
renderLegend();
renderLevel();
