const SENTENCES = [
  {
    id: "1A-01",
    world: "simple",
    label: "A",
    sentence: "I go home by tram."
  },
  {
    id: "1A-02",
    world: "simple",
    label: "A",
    sentence: "You go home by train."
  },
  {
    id: "1A-03",
    world: "simple",
    label: "A",
    sentence: "We go home by tube."
  },
  {
    id: "1A-04",
    world: "simple",
    label: "A",
    sentence: "They go home by taxi."
  },
  {
    id: "1A-05",
    world: "simple",
    label: "A",
    sentence: "He goes home by bike."
  },
  {
    id: "1A-06",
    world: "simple",
    label: "A",
    sentence: "She goes home by ferry."
  },
  {
    id: "1A-07",
    world: "simple",
    label: "A",
    sentence: "It goes home by bus."
  },
  {
    id: "1P-01",
    world: "simple",
    label: "P",
    sentence: "I went home by tram."
  },
  {
    id: "1P-02",
    world: "simple",
    label: "P",
    sentence: "You went home by train."
  },
  {
    id: "1P-03",
    world: "simple",
    label: "P",
    sentence: "We went home by tube."
  },
  {
    id: "1P-04",
    world: "simple",
    label: "P",
    sentence: "They went home by taxi."
  },
  {
    id: "1P-05",
    world: "simple",
    label: "P",
    sentence: "He went home by bike."
  },
  {
    id: "1P-06",
    world: "simple",
    label: "P",
    sentence: "She went home by ferry."
  },
  {
    id: "1P-07",
    world: "simple",
    label: "P",
    sentence: "It went home by bus."
  },
  {
    id: "1F-01",
    world: "simple",
    label: "F",
    sentence: "I will go home by tram."
  },
  {
    id: "1F-02",
    world: "simple",
    label: "F",
    sentence: "You will go home by train."
  },
  {
    id: "1F-03",
    world: "simple",
    label: "F",
    sentence: "We will go home by tube."
  },
  {
    id: "1F-04",
    world: "simple",
    label: "F",
    sentence: "They will go home by taxi."
  },
  {
    id: "1F-05",
    world: "simple",
    label: "F",
    sentence: "He will go home by bike."
  },
  {
    id: "1F-06",
    world: "simple",
    label: "F",
    sentence: "She will go home by ferry."
  },
  {
    id: "1F-07",
    world: "simple",
    label: "F",
    sentence: "It will go home by bus."
  },
  {
    id: "2A-01",
    world: "continuous",
    label: "A",
    sentence: "I am going home by tram."
  },
  {
    id: "2A-02",
    world: "continuous",
    label: "A",
    sentence: "You are going home by train."
  },
  {
    id: "2A-03",
    world: "continuous",
    label: "A",
    sentence: "We are going home by tube."
  },
  {
    id: "2A-04",
    world: "continuous",
    label: "A",
    sentence: "They are going home by taxi."
  },
  {
    id: "2A-05",
    world: "continuous",
    label: "A",
    sentence: "He is going home by bike."
  },
  {
    id: "2A-06",
    world: "continuous",
    label: "A",
    sentence: "She is going home by ferry."
  },
  {
    id: "2A-07",
    world: "continuous",
    label: "A",
    sentence: "It is going home by bus."
  },
  {
    id: "2P-01",
    world: "continuous",
    label: "P",
    sentence: "I was going home by tram."
  },
  {
    id: "2P-02",
    world: "continuous",
    label: "P",
    sentence: "You were going home by train."
  },
  {
    id: "2P-03",
    world: "continuous",
    label: "P",
    sentence: "We were going home by tube."
  },
  {
    id: "2P-04",
    world: "continuous",
    label: "P",
    sentence: "They were going home by taxi."
  },
  {
    id: "2P-05",
    world: "continuous",
    label: "P",
    sentence: "He was going home by bike."
  },
  {
    id: "2P-06",
    world: "continuous",
    label: "P",
    sentence: "She was going home by ferry."
  },
  {
    id: "2P-07",
    world: "continuous",
    label: "P",
    sentence: "It was going home by bus."
  },
  {
    id: "2F-01",
    world: "continuous",
    label: "F",
    sentence: "I will be going home by tram soon."
  },
  {
    id: "2F-02",
    world: "continuous",
    label: "F",
    sentence: "You will be going home by train later."
  },
  {
    id: "2F-03",
    world: "continuous",
    label: "F",
    sentence: "We will be going home by tube at eight."
  },
  {
    id: "2F-04",
    world: "continuous",
    label: "F",
    sentence: "They will be going home by taxi late."
  },
  {
    id: "2F-05",
    world: "continuous",
    label: "F",
    sentence: "He will be going home by bike right away."
  },
  {
    id: "2F-06",
    world: "continuous",
    label: "F",
    sentence: "She will be going home by ferry in no time."
  },
  {
    id: "2F-07",
    world: "continuous",
    label: "F",
    sentence: "It will be going home by bus tomorrow."
  },
  {
    id: "3A-01",
    world: "perfect",
    label: "A",
    sentence: "I have gone home by tram."
  },
  {
    id: "3A-02",
    world: "perfect",
    label: "A",
    sentence: "You have gone home by train."
  },
  {
    id: "3A-03",
    world: "perfect",
    label: "A",
    sentence: "We have gone home by tube."
  },
  {
    id: "3A-04",
    world: "perfect",
    label: "A",
    sentence: "They have gone home by taxi."
  },
  {
    id: "3A-05",
    world: "perfect",
    label: "A",
    sentence: "He has gone home by bike."
  },
  {
    id: "3A-06",
    world: "perfect",
    label: "A",
    sentence: "She has gone home by ferry."
  },
  {
    id: "3A-07",
    world: "perfect",
    label: "A",
    sentence: "It has gone home by bus."
  },
  {
    id: "3P-01",
    world: "perfect",
    label: "P",
    sentence: "I had gone home by tram."
  },
  {
    id: "3P-02",
    world: "perfect",
    label: "P",
    sentence: "You had gone home by train."
  },
  {
    id: "3P-03",
    world: "perfect",
    label: "P",
    sentence: "We had gone home by tube."
  },
  {
    id: "3P-04",
    world: "perfect",
    label: "P",
    sentence: "They had gone home by taxi."
  },
  {
    id: "3P-05",
    world: "perfect",
    label: "P",
    sentence: "He had gone home by bike."
  },
  {
    id: "3P-06",
    world: "perfect",
    label: "P",
    sentence: "She had gone home by ferry."
  },
  {
    id: "3P-07",
    world: "perfect",
    label: "P",
    sentence: "It had gone home by bus."
  },
  {
    id: "3F-01",
    world: "perfect",
    label: "F",
    sentence: "I will have gone home by tram."
  },
  {
    id: "3F-02",
    world: "perfect",
    label: "F",
    sentence: "You will have gone home by train."
  },
  {
    id: "3F-03",
    world: "perfect",
    label: "F",
    sentence: "We will have gone home by tube."
  },
  {
    id: "3F-04",
    world: "perfect",
    label: "F",
    sentence: "They will have gone home by taxi."
  },
  {
    id: "3F-05",
    world: "perfect",
    label: "F",
    sentence: "He will have gone home by bike."
  },
  {
    id: "3F-06",
    world: "perfect",
    label: "F",
    sentence: "She will have gone home by ferry."
  },
  {
    id: "3F-07",
    world: "perfect",
    label: "F",
    sentence: "It will have gone home by bus."
  },
  {
    id: "4A-01",
    world: "perfectcontinuous",
    label: "A",
    sentence: "I have been going home by tram."
  },
  {
    id: "4A-02",
    world: "perfectcontinuous",
    label: "A",
    sentence: "You have been going home by train."
  },
  {
    id: "4A-03",
    world: "perfectcontinuous",
    label: "A",
    sentence: "We have been going home by tube."
  },
  {
    id: "4A-04",
    world: "perfectcontinuous",
    label: "A",
    sentence: "They have been going home by taxi."
  },
  {
    id: "4A-05",
    world: "perfectcontinuous",
    label: "A",
    sentence: "He has been going home by bike."
  },
  {
    id: "4A-06",
    world: "perfectcontinuous",
    label: "A",
    sentence: "She has been going home by ferry."
  },
  {
    id: "4A-07",
    world: "perfectcontinuous",
    label: "A",
    sentence: "It has been going home by bus."
  },
  {
    id: "4P-01",
    world: "perfectcontinuous",
    label: "P",
    sentence: "I had been going home by tram."
  },
  {
    id: "4P-02",
    world: "perfectcontinuous",
    label: "P",
    sentence: "You had been going home by train."
  },
  {
    id: "4P-03",
    world: "perfectcontinuous",
    label: "P",
    sentence: "We had been going home by tube."
  },
  {
    id: "4P-04",
    world: "perfectcontinuous",
    label: "P",
    sentence: "They had been going home by taxi."
  },
  {
    id: "4P-05",
    world: "perfectcontinuous",
    label: "P",
    sentence: "He had been going home by bike."
  },
  {
    id: "4P-06",
    world: "perfectcontinuous",
    label: "P",
    sentence: "She had been going home by ferry."
  },
  {
    id: "4P-07",
    world: "perfectcontinuous",
    label: "P",
    sentence: "It had been going home by bus."
  },
  {
    id: "4F-01",
    world: "perfectcontinuous",
    label: "F",
    sentence: "I will have been going home for more than an hour."
  },
  {
    id: "4F-02",
    world: "perfectcontinuous",
    label: "F",
    sentence: "You will have been going home for more than an hour."
  },
  {
    id: "4F-03",
    world: "perfectcontinuous",
    label: "F",
    sentence: "We will have been going home for more than an hour."
  },
  {
    id: "4F-04",
    world: "perfectcontinuous",
    label: "F",
    sentence: "They will have been going home for more than an hour."
  },
  {
    id: "4F-05",
    world: "perfectcontinuous",
    label: "F",
    sentence: "He will have been going home for more than an hour."
  },
  {
    id: "4F-06",
    world: "perfectcontinuous",
    label: "F",
    sentence: "She will have been going home for more than an hour."
  },
  {
    id: "4F-07",
    world: "perfectcontinuous",
    label: "F",
    sentence: "It will have been going home for more than an hour."
  }
];

const byWorldLabel = (world, label) =>
  SENTENCES.filter((item) => item.world === world && item.label === label);

const SETS = {
  simple: {
    A: byWorldLabel("simple", "A"), 
    P: byWorldLabel("simple", "P"),
    F: byWorldLabel("simple", "F")
  },
  continuous: {
    A: byWorldLabel("continuous", "A"),
    P: byWorldLabel("continuous", "P"),
    F: byWorldLabel("continuous", "F")
  },
  perfect: {
    A: byWorldLabel("perfect", "A"),
    P: byWorldLabel("perfect", "P"),
    F: byWorldLabel("perfect", "F")
  },
  perfectcontinuous: {
    A: byWorldLabel("perfectcontinuous", "A"),
    P: byWorldLabel("perfectcontinuous", "P"),
    F: byWorldLabel("perfectcontinuous", "F")
  }
};

const withCombos = (worldKey) => ({
  ...SETS[worldKey],
  BP: [...SETS[worldKey].A, ...SETS[worldKey].P],
  BF: [...SETS[worldKey].A, ...SETS[worldKey].F],
  C: [...SETS[worldKey].A, ...SETS[worldKey].P, ...SETS[worldKey].F]
});

const WORLD_SETS = {
  simple: withCombos("simple"),
  continuous: withCombos("continuous"),
  perfect: withCombos("perfect"),
  perfectcontinuous: withCombos("perfectcontinuous")
};

const MINI_BOSS_SETS = [
  {
    id: "MiniBoss0",
    sets: ["simple.A", "continuous.A"],
    sentences: [...WORLD_SETS.simple.A, ...WORLD_SETS.continuous.A]
  },
  {
    id: "MiniBoss1",
    sets: ["simple.C", "continuous.C"],
    sentences: [...WORLD_SETS.simple.C, ...WORLD_SETS.continuous.C]
  },
  {
    id: "MiniBoss2",
    sets: ["simple.A", "perfect.A"],
    sentences: [...WORLD_SETS.simple.A, ...WORLD_SETS.perfect.A]
  },
  {
    id: "MiniBoss3",
    sets: ["continuous.A", "perfect.A"],
    sentences: [...WORLD_SETS.continuous.A, ...WORLD_SETS.perfect.A]
  },
  {
    id: "MiniBoss4",
    sets: ["simple.A", "continuous.A", "perfect.A"],
    sentences: [
      ...WORLD_SETS.simple.A,
      ...WORLD_SETS.continuous.A,
      ...WORLD_SETS.perfect.A
    ]
  },
  {
    id: "MiniBoss5",
    sets: ["simple.C", "continuous.C", "perfect.C"],
    sentences: [
      ...WORLD_SETS.simple.C,
      ...WORLD_SETS.continuous.C,
      ...WORLD_SETS.perfect.C
    ]
  },
  {
    id: "MiniBoss6",
    sets: ["continuous.A", "perfectcontinuous.A"],
    sentences: [
      ...WORLD_SETS.continuous.A,
      ...WORLD_SETS.perfectcontinuous.A
    ]
  },
  {
    id: "MiniBoss7",
    sets: ["continuous.C", "perfectcontinuous.C"],
    sentences: [
      ...WORLD_SETS.continuous.C,
      ...WORLD_SETS.perfectcontinuous.C
    ]
  },
  {
    id: "MiniBoss8",
    sets: ["continuous.C", "perfect.C", "perfectcontinuous.C"],
    sentences: [
      ...WORLD_SETS.continuous.C,
      ...WORLD_SETS.perfect.C,
      ...WORLD_SETS.perfectcontinuous.C
    ]
  },
  {
    id: "MiniBoss9",
    sets: ["simple.C", "continuous.C", "perfect.C", "perfectcontinuous.C"],
    sentences: [
      ...WORLD_SETS.simple.C,
      ...WORLD_SETS.continuous.C,
      ...WORLD_SETS.perfect.C,
      ...WORLD_SETS.perfectcontinuous.C
    ]
  }
];

const ANSWER_OPTIONS_BY_WORLD_LABEL = {
  simple: {
    A: ["go", "goes"],
    P: ["went"],
    F: ["will go"]
  },
  continuous: {
    A: ["am going", "are going", "is going"],
    P: ["was going", "were going"],
    F: ["will be going"]
  },
  perfect: {
    A: ["have gone", "has gone"],
    P: ["had gone"],
    F: ["will have gone"]
  },
  perfectcontinuous: {
    A: ["have been going", "has been going"],
    P: ["had been going"],
    F: ["will have been going"]
  }
};

