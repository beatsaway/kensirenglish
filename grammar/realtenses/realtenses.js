const VERB_FORMS = {
  bite: { base: "bite", past: "bit", pastParticiple: "bitten", ing: "biting", third: "bites" },
  use: { base: "use", past: "used", pastParticiple: "used", ing: "using", third: "uses" },
  hurt: { base: "hurt", past: "hurt", pastParticiple: "hurt", ing: "hurting", third: "hurts" },
  show: { base: "show", past: "showed", pastParticiple: "shown", ing: "showing", third: "shows" },
  hold: { base: "hold", past: "held", pastParticiple: "held", ing: "holding", third: "holds" },
  seem: { base: "seem", past: "seemed", pastParticiple: "seemed", ing: "seeming", third: "seems" },
  be: { base: "be", past: "was", pastParticiple: "been", ing: "being", third: "is" },
  belong: { base: "belong", past: "belonged", pastParticiple: "belonged", ing: "belonging", third: "belongs" },
  like: { base: "like", past: "liked", pastParticiple: "liked", ing: "liking", third: "likes" },
  grab: { base: "grab", past: "grabbed", pastParticiple: "grabbed", ing: "grabbing", third: "grabs" },
  think: { base: "think", past: "thought", pastParticiple: "thought", ing: "thinking", third: "thinks" },
  read: { base: "read", past: "read", pastParticiple: "read", ing: "reading", third: "reads" },
  mean: { base: "mean", past: "meant", pastParticiple: "meant", ing: "meaning", third: "means" },
  pass: { base: "pass", past: "passed", pastParticiple: "passed", ing: "passing", third: "passes" },
  support: { base: "support", past: "supported", pastParticiple: "supported", ing: "supporting", third: "supports" },
  grow: { base: "grow", past: "grew", pastParticiple: "grown", ing: "growing", third: "grows" },
  make: { base: "make", past: "made", pastParticiple: "made", ing: "making", third: "makes" },
  draw: { base: "draw", past: "drew", pastParticiple: "drawn", ing: "drawing", third: "draws" },
  expect: { base: "expect", past: "expected", pastParticiple: "expected", ing: "expecting", third: "expects" },
  watch: { base: "watch", past: "watched", pastParticiple: "watched", ing: "watching", third: "watches" },
  hear: { base: "hear", past: "heard", pastParticiple: "heard", ing: "hearing", third: "hears" },
  love: { base: "love", past: "loved", pastParticiple: "loved", ing: "loving", third: "loves" },
  dream: { base: "dream", past: "dreamed", pastParticiple: "dreamed", ing: "dreaming", third: "dreams" },
  dash: { base: "dash", past: "dashed", pastParticiple: "dashed", ing: "dashing", third: "dashes" },
  come: { base: "come", past: "came", pastParticiple: "come", ing: "coming", third: "comes" },
  fall: { base: "fall", past: "fell", pastParticiple: "fallen", ing: "falling", third: "falls" },
  hit: { base: "hit", past: "hit", pastParticiple: "hit", ing: "hitting", third: "hits" },
  break: { base: "break", past: "broke", pastParticiple: "broken", ing: "breaking", third: "breaks" },
  slash: { base: "slash", past: "slashed", pastParticiple: "slashed", ing: "slashing", third: "slashes" },
  receive: { base: "receive", past: "received", pastParticiple: "received", ing: "receiving", third: "receives" },
  revoke: { base: "revoke", past: "revoked", pastParticiple: "revoked", ing: "revoking", third: "revokes" },
  decide: { base: "decide", past: "decided", pastParticiple: "decided", ing: "deciding", third: "decides" },
  remain: { base: "remain", past: "remained", pastParticiple: "remained", ing: "remaining", third: "remains" },
  wrap: { base: "wrap", past: "wrapped", pastParticiple: "wrapped", ing: "wrapping", third: "wraps" },
  dispense: { base: "dispense", past: "dispensed", pastParticiple: "dispensed", ing: "dispensing", third: "dispenses" },
  go: { base: "go", past: "went", pastParticiple: "gone", ing: "going", third: "goes" },
  reclaim: { base: "reclaim", past: "reclaimed", pastParticiple: "reclaimed", ing: "reclaiming", third: "reclaims" },
  have: { base: "have", past: "had", pastParticiple: "had", ing: "having", third: "has" },
  matter: { base: "matter", past: "mattered", pastParticiple: "mattered", ing: "mattering", third: "matters" },
  train: { base: "train", past: "trained", pastParticiple: "trained", ing: "training", third: "trains" },
  talk: { base: "talk", past: "talked", pastParticiple: "talked", ing: "talking", third: "talks" },
  launch: { base: "launch", past: "launched", pastParticiple: "launched", ing: "launching", third: "launches" },
  fire: { base: "fire", past: "fired", pastParticiple: "fired", ing: "firing", third: "fires" },
  disqualify: { base: "disqualify", past: "disqualified", pastParticiple: "disqualified", ing: "disqualifying", third: "disqualifies" },
  react: { base: "react", past: "reacted", pastParticiple: "reacted", ing: "reacting", third: "reacts" },
  consider: { base: "consider", past: "considered", pastParticiple: "considered", ing: "considering", third: "considers" },
  count: { base: "count", past: "counted", pastParticiple: "counted", ing: "counting", third: "counts" },
  get: { base: "get", past: "got", pastParticiple: "got", ing: "getting", third: "gets" },
  catch: { base: "catch", past: "caught", pastParticiple: "caught", ing: "catching", third: "catches" },
  sleep: { base: "sleep", past: "slept", pastParticiple: "slept", ing: "sleeping", third: "sleeps" },
  text: { base: "text", past: "texted", pastParticiple: "texted", ing: "texting", third: "texts" },
  guess: { base: "guess", past: "guessed", pastParticiple: "guessed", ing: "guessing", third: "guesses" },
  sit: { base: "sit", past: "sat", pastParticiple: "sat", ing: "sitting", third: "sits" },
  find: { base: "find", past: "found", pastParticiple: "found", ing: "finding", third: "finds" },
  clean: { base: "clean", past: "cleaned", pastParticiple: "cleaned", ing: "cleaning", third: "cleans" },
  see: { base: "see", past: "saw", pastParticiple: "seen", ing: "seeing", third: "sees" },
  wonder: { base: "wonder", past: "wondered", pastParticiple: "wondered", ing: "wondering", third: "wonders" },
  fix: { base: "fix", past: "fixed", pastParticiple: "fixed", ing: "fixing", third: "fixes" },
  take: { base: "take", past: "took", pastParticiple: "taken", ing: "taking", third: "takes" },
  run: { base: "run", past: "ran", pastParticiple: "run", ing: "running", third: "runs" },
  peer: { base: "peer", past: "peered", pastParticiple: "peered", ing: "peering", third: "peers" },
  walk: { base: "walk", past: "walked", pastParticiple: "walked", ing: "walking", third: "walks" },
  examine: { base: "examine", past: "examined", pastParticiple: "examined", ing: "examining", third: "examines" },
  look: { base: "look", past: "looked", pastParticiple: "looked", ing: "looking", third: "looks" },
  say: { base: "say", past: "said", pastParticiple: "said", ing: "saying", third: "says" },
  try: { base: "try", past: "tried", pastParticiple: "tried", ing: "trying", third: "tries" },
  do: { base: "do", past: "did", pastParticiple: "done", ing: "doing", third: "does" },
  ask: { base: "ask", past: "asked", pastParticiple: "asked", ing: "asking", third: "asks" },
  nod: { base: "nod", past: "nodded", pastParticiple: "nodded", ing: "nodding", third: "nods" },
  tell: { base: "tell", past: "told", pastParticiple: "told", ing: "telling", third: "tells" },
  wait: { base: "wait", past: "waited", pastParticiple: "waited", ing: "waiting", third: "waits" },
  polish: { base: "polish", past: "polished", pastParticiple: "polished", ing: "polishing", third: "polishes" },
  turn: { base: "turn", past: "turned", pastParticiple: "turned", ing: "turning", third: "turns" },
  finish: { base: "finish", past: "finished", pastParticiple: "finished", ing: "finishing", third: "finishes" },
  tick: { base: "tick", past: "ticked", pastParticiple: "ticked", ing: "ticking", third: "ticks" },
  hang: { base: "hang", past: "hung", pastParticiple: "hung", ing: "hanging", third: "hangs" },
  send: { base: "send", past: "sent", pastParticiple: "sent", ing: "sending", third: "sends" },
  frame: { base: "frame", past: "framed", pastParticiple: "framed", ing: "framing", third: "frames" },
  send: { base: "send", past: "sent", pastParticiple: "sent", ing: "sending", third: "sends" },
  frame: { base: "frame", past: "framed", pastParticiple: "framed", ing: "framing", third: "frames" },
  remember: { base: "remember", past: "remembered", pastParticiple: "remembered", ing: "remembering", third: "remembers" },
  stay: { base: "stay", past: "stayed", pastParticiple: "stayed", ing: "staying", third: "stays" },
  speak: { base: "speak", past: "spoke", pastParticiple: "spoken", ing: "speaking", third: "speaks" },
  feel: { base: "feel", past: "felt", pastParticiple: "felt", ing: "feeling", third: "feels" },
  want: { base: "want", past: "wanted", pastParticiple: "wanted", ing: "wanting", third: "wants" }
};

const getSubjectType = (subject) => {
  const normalized = String(subject || "").toLowerCase();
  if (normalized === "i") return "i";
  if (normalized === "you") return "you";
  if (normalized === "we" || normalized === "they") return "plural";
  return "third";
};

const getBePresent = (subjectType) => {
  if (subjectType === "i") return "am";
  if (subjectType === "plural" || subjectType === "you") return "are";
  return "is";
};

const getBePast = (subjectType) => {
  if (subjectType === "plural" || subjectType === "you") return "were";
  return "was";
};

const getHavePresent = (subjectType) =>
  subjectType === "third" ? "has" : "have";

const getNegAux = (aux, contraction) => {
  if (!contraction) return `${aux} not`;
  const map = {
    "do": "don't",
    "does": "doesn't",
    "did": "didn't",
    "will": "won't",
    "have": "haven't",
    "has": "hasn't",
    "had": "hadn't",
    "is": "isn't",
    "are": "aren't",
    "was": "wasn't",
    "were": "weren't"
  };
  return map[aux] || `${aux} not`;
};

const buildTenseOptions = ({ base, subject, negative = false, contraction = false, adverb }) => {
  if (base === "can") {
    const options = [
      { label: "Present — can", value: "can" },
      { label: "Past — could", value: "could" },
      { label: "Past (able to) — was able to", value: "was able to" },
      { label: "Future (able to) — will be able to", value: "will be able to" }
    ];
    if (!adverb) {
      return options;
    }
    const applyAdverb = (phrase) => {
      const parts = phrase.split(" ");
      if (parts.length === 1) return `${adverb} ${phrase}`;
      return `${parts[0]} ${adverb} ${parts.slice(1).join(" ")}`;
    };
    return options.map((option) => {
      const value = applyAdverb(option.value);
      return { label: `${option.label.split(" — ")[0]} — ${value}`, value };
    });
  }
  const forms = VERB_FORMS[base];
  if (!forms) {
    throw new Error(`Missing verb forms for "${base}".`);
  }
  const applyAdverb = (phrase) => {
    if (!adverb) return phrase;
    const parts = phrase.split(" ");
    if (parts.length === 1) return `${adverb} ${phrase}`;
    return `${parts[0]} ${adverb} ${parts.slice(1).join(" ")}`;
  };
  const subjectType = getSubjectType(subject);
  const isBe = base === "be";
  const presentSimple = applyAdverb(
    isBe ? getBePresent(subjectType) : subjectType === "third" ? forms.third : forms.base
  );
  const pastSimple = applyAdverb(isBe ? getBePast(subjectType) : forms.past);
  const futureSimple = applyAdverb(`will ${forms.base}`);
  const presentContinuous = applyAdverb(`${getBePresent(subjectType)} ${forms.ing}`);
  const pastContinuous = applyAdverb(`${getBePast(subjectType)} ${forms.ing}`);
  const futureContinuous = applyAdverb(`will be ${forms.ing}`);
  const presentPerfect = applyAdverb(`${getHavePresent(subjectType)} ${forms.pastParticiple}`);
  const pastPerfect = applyAdverb(`had ${forms.pastParticiple}`);
  const futurePerfect = applyAdverb(`will have ${forms.pastParticiple}`);
  const presentPerfectContinuous = applyAdverb(`${getHavePresent(subjectType)} been ${forms.ing}`);
  const pastPerfectContinuous = applyAdverb(`had been ${forms.ing}`);
  const futurePerfectContinuous = applyAdverb(`will have been ${forms.ing}`);

  if (!negative) {
    return [
      { label: `Present Simple — ${presentSimple}`, value: presentSimple },
      { label: `Past Simple — ${pastSimple}`, value: pastSimple },
      { label: `Future Simple — ${futureSimple}`, value: futureSimple },
      { label: `Present Continuous — ${presentContinuous}`, value: presentContinuous },
      { label: `Past Continuous — ${pastContinuous}`, value: pastContinuous },
      { label: `Future Continuous — ${futureContinuous}`, value: futureContinuous },
      { label: `Present Perfect — ${presentPerfect}`, value: presentPerfect },
      { label: `Past Perfect — ${pastPerfect}`, value: pastPerfect },
      { label: `Future Perfect — ${futurePerfect}`, value: futurePerfect },
      {
        label: `Present Perfect Continuous — ${presentPerfectContinuous}`,
        value: presentPerfectContinuous
      },
      {
        label: `Past Perfect Continuous — ${pastPerfectContinuous}`,
        value: pastPerfectContinuous
      },
      {
        label: `Future Perfect Continuous — ${futurePerfectContinuous}`,
        value: futurePerfectContinuous
      }
    ];
  }

  const presentSimpleNeg = applyAdverb(isBe
    ? getNegAux(getBePresent(subjectType), contraction)
    : `${getNegAux(subjectType === "third" ? "does" : "do", contraction)} ${forms.base}`);
  const pastSimpleNeg = applyAdverb(isBe
    ? getNegAux(getBePast(subjectType), contraction)
    : `${getNegAux("did", contraction)} ${forms.base}`);
  const futureSimpleNeg = applyAdverb(`${getNegAux("will", contraction)} ${forms.base}`);
  const presentContinuousNeg = applyAdverb(`${getNegAux(getBePresent(subjectType), contraction)} ${forms.ing}`);
  const pastContinuousNeg = applyAdverb(`${getNegAux(getBePast(subjectType), contraction)} ${forms.ing}`);
  const futureContinuousNeg = applyAdverb(`${getNegAux("will", contraction)} be ${forms.ing}`);
  const presentPerfectNeg = applyAdverb(`${getNegAux(getHavePresent(subjectType), contraction)} ${forms.pastParticiple}`);
  const pastPerfectNeg = applyAdverb(`${getNegAux("had", contraction)} ${forms.pastParticiple}`);
  const futurePerfectNeg = applyAdverb(`${getNegAux("will", contraction)} have ${forms.pastParticiple}`);
  const presentPerfectContinuousNeg = applyAdverb(`${getNegAux(getHavePresent(subjectType), contraction)} been ${forms.ing}`);
  const pastPerfectContinuousNeg = applyAdverb(`${getNegAux("had", contraction)} been ${forms.ing}`);
  const futurePerfectContinuousNeg = applyAdverb(`${getNegAux("will", contraction)} have been ${forms.ing}`);

  return [
    { label: `Present Simple — ${presentSimpleNeg}`, value: presentSimpleNeg },
    { label: `Past Simple — ${pastSimpleNeg}`, value: pastSimpleNeg },
    { label: `Future Simple — ${futureSimpleNeg}`, value: futureSimpleNeg },
    { label: `Present Continuous — ${presentContinuousNeg}`, value: presentContinuousNeg },
    { label: `Past Continuous — ${pastContinuousNeg}`, value: pastContinuousNeg },
    { label: `Future Continuous — ${futureContinuousNeg}`, value: futureContinuousNeg },
    { label: `Present Perfect — ${presentPerfectNeg}`, value: presentPerfectNeg },
    { label: `Past Perfect — ${pastPerfectNeg}`, value: pastPerfectNeg },
    { label: `Future Perfect — ${futurePerfectNeg}`, value: futurePerfectNeg },
    {
      label: `Present Perfect Continuous — ${presentPerfectContinuousNeg}`,
      value: presentPerfectContinuousNeg
    },
    {
      label: `Past Perfect Continuous — ${pastPerfectContinuousNeg}`,
      value: pastPerfectContinuousNeg
    },
    {
      label: `Future Perfect Continuous — ${futurePerfectContinuousNeg}`,
      value: futurePerfectContinuousNeg
    }
  ];
};

const buildChoices = (verbs) => verbs.map((verb) => buildTenseOptions(verb));

const exercise1Verbs = [
  { base: "be", subject: "it" },
  { base: "like", subject: "he" },
  { base: "hurt", subject: "he", negative: true, contraction: false },
  { base: "grab", subject: "he" },
  { base: "want", subject: "i" },
  { base: "want", subject: "i" },
  { base: "be", subject: "it" },
  { base: "be", subject: "this" },
  { base: "think", subject: "i" },
  { base: "be", subject: "it" }
];
const exercise2Verbs = [
  { base: "read", subject: "you" },
  { base: "mean", subject: "it" },
  { base: "pass", subject: "i" },
  { base: "be", subject: "it" },
  { base: "be", subject: "i" },
  { base: "be", subject: "i", negative: true, contraction: true },
  { base: "be", subject: "i" },
  { base: "go", subject: "i" },
  { base: "be", subject: "this" }
];

const exercise3Verbs = [
  { base: "receive", subject: "it" },
  { base: "revoke", subject: "it" },
  { base: "decide", subject: "he" },
  { base: "remain", subject: "everything" },
  { base: "come", subject: "they" },
  { base: "dispense", subject: "it" },
  { base: "have", subject: "it" },
  { base: "be", subject: "they" },
  { base: "get", subject: "things" },
  { base: "catch", subject: "a post" },
  { base: "be", subject: "it" },
  { base: "be", subject: "it" }
];

const exercise4Verbs = [
  { base: "be", subject: "this" },
  { base: "be", subject: "reaction time" },
  { base: "train", subject: "they" },
  { base: "talk", subject: "i", negative: true, contraction: false },
  { base: "launch", subject: "the athlete" },
  { base: "fire", subject: "the gun" },
  { base: "react", subject: "you" },
  { base: "get", subject: "you" },
  { base: "be", subject: "it" },
  { base: "be", subject: "it" },
  { base: "be", subject: "he" }
];

const exercise5Verbs = [
  { base: "sit", subject: "it" },
  { base: "find", subject: "i" },
  { base: "clean", subject: "i" },
  { base: "see", subject: "i", adverb: "never" },
  { base: "wonder", subject: "i" },
  { base: "can", subject: "i" },
  { base: "take", subject: "i" },
  { base: "run", subject: "he" },
  { base: "peer", subject: "he" },
  { base: "walk", subject: "i" },
  { base: "examine", subject: "he" },
  { base: "be", subject: "this" },
  { base: "say", subject: "he" },
  { base: "try", subject: "someone" },
  { base: "do", subject: "they" },
  { base: "ask", subject: "i" },
  { base: "can", subject: "he" },
  { base: "nod", subject: "he" },
  { base: "tell", subject: "he" },
  { base: "be", subject: "i" },
  { base: "polish", subject: "he" },
  { base: "turn", subject: "they" },
  { base: "finish", subject: "i" },
  { base: "say", subject: "he" },
  { base: "hold", subject: "i" },
  { base: "tick", subject: "it" },
  { base: "send", subject: "i" },
  { base: "frame", subject: "he" },
  { base: "remember", subject: "i" },
  { base: "be", subject: "it" },
  { base: "speak", subject: "it" },
  { base: "be", subject: "i" },
  { base: "try", subject: "i" }
];

const exercise6Verbs = [
  { base: "see", subject: "i", negative: true, contraction: false },
  { base: "watch", subject: "i" },
  { base: "see", subject: "i", negative: true, contraction: false },
  { base: "have", subject: "i" },
  { base: "be", subject: "it" },
  { base: "love", subject: "i" },
  { base: "dream", subject: "i" },
  { base: "be", subject: "i" },
  { base: "dash", subject: "i" },
  { base: "slash", subject: "i" },
  { base: "get", subject: "i" },
  { base: "fall", subject: "i" },
  { base: "hit", subject: "i" },
  { base: "break", subject: "i" },
  { base: "be", subject: "it" },
  { base: "be", subject: "i" },
  { base: "receive", subject: "i" },
  { base: "seem", subject: "it" },
  { base: "be", subject: "i", negative: true, contraction: false },
  { base: "guess", subject: "i" },
  { base: "stay", subject: "i" },
  { base: "fall", subject: "i" }
];

window.realTensesExercises = [
  {
    id: 1,
    title: "Wolf Dogs and Mouthy Behavior",
    link: "https://www.youtube.com/shorts/sZTKk5sFQjM",
    text:
      "Okay. So, one thing that wolf dogs love doing _____ (be) biting and taking me around the house. So, he _____ (like) to use his mouth a lot more than a normal dog would ever choose to do, but he _____ (hurt) me. Literally, he _____ (grab) me and saying, \"I _____ (want) you to come upstairs with me now because I _____ (want) to show you something.\" So, imagine it. It _____ (be) like somebody holding your hand but with teeth. This _____ (be) typical wolf dog behavior and I _____ (think) it _____ (be) quite funny.",
    answers: [
      "is",
      "likes",
      "is not hurting",
      "is grabbing",
      "want",
      "want",
      "is",
      "is",
      "think",
      "is"
    ],
    choices: buildChoices(exercise1Verbs)
  },
  {
    id: 2,
    title: "Farewell Message from Joss",
    link: "https://x.com/josshere/status/2018441365189959913/photo/1",
    text:
      "Hi. If you _____ (read) this, it _____ (mean) I recently _____ (pass) due to my cancer. I would like to thank everyone for their support over the years. It _____ (be) so fun watching my shop grow into what it is today. I _____ (be) so sad I _____ (be) able to make any artwork over the past year, but I _____ (be) sure now I _____ (go) off to a place where I can draw every day. Thank you again, everyone. This _____ (be) joss.",
    answers: [
      "are reading",
      "means",
      "passed",
      "has been",
      "am",
      "haven't been",
      "am",
      "will be going",
      "has been"
    ],
    choices: buildChoices(exercise2Verbs)
  },
  {
    id: 3,
    title: "Rogue Burger King Story",
    link: "https://www.youtube.com/shorts/IPo3nYBIsSg",
    text:
      "In 2014, this Burger King _____ (receive) enough complaints about the quality of their food that the chain _____ (revoke) the location's franchising agreement. However, the owner _____ (decide) to just ignore that small detail and continue to operate the restaurant as usual. Everything seemingly _____ (remain) the same. The Burger King signage, advertisements, menu, uniforms. The burgers _____ (come) wrapped in tin foil. The Coke machine _____ (dispense) Pepsi products. Now, keep in mind, this Burger King previously _____ (have) terrible reviews and food quality issues. And with the bar that low, they _____ (be) able to continue with this charade for a while. But things _____ (get) worse. Eventually, a post in the Pittsburgh subreddit _____ (catch) the attention of local news channel WPXI. Today it _____ (be) back to being an otherwise normal Burger King, but the story _____ (be) a part of local legend.",
    answers: [
      "received",
      "revoked",
      "decided",
      "remained",
      "came",
      "was dispensing",
      "had",
      "were",
      "got",
      "caught",
      "is",
      "will be"
    ],
    choices: buildChoices(exercise3Verbs)
  },
  {
    id: 4,
    title: "Track False Start Rule",
    link: "https://www.youtube.com/shorts/Oo1B902oOy4",
    text:
      "This _____ (be) the only sport in the world where being too good can get you banned. Because even though reaction time _____ (be) a huge part of track and field and athletes _____ (train) it all the time, you can actually get disqualified for reacting too fast at the start of the race. And I _____ (talk) about a normal false start where the athlete _____ (launch) before the starting gun even _____ (fire). If you _____ (react) to the starting gun in under a tenth of a second, you _____ (get) disqualified from the race. Since reacting that fast _____ (be) considered humanly impossible, it _____ (be) classified as a false start. He _____ (be) shown the disqualification card.",
    answers: [
      "is",
      "is",
      "train",
      "am not talking",
      "launches",
      "fires",
      "react",
      "will get",
      "is",
      "is",
      "has been"
    ],
    choices: buildChoices(exercise4Verbs)
  },
  {
    id: 5,
    title: "Grandfather's Watch",
    link: "",
    text:
      "My grandfather's old watch _____ (sit) on my desk for a week. I _____ (find) it while I _____ (clean) the attic. I _____ (never see) it working, and I _____ (wonder) if I _____ (can) fix it.\n\nYesterday, I _____ (take) it to the old repair shop in town. Mr. Finch, the watchmaker, _____ (run) that shop for fifty years. He _____ (peer) through his eyeglass when I _____ (walk) in. He _____ (examine) the watch carefully. \"This _____ (be) a fine piece,\" he _____ (say). \"Someone _____ (try) to fix it before, but they _____ (do) more harm than good.\"\n\nI _____ (ask) him if he _____ (can) restore it. He _____ (nod) and _____ (tell) me to come back today.\n\nSo here I _____ (be), waiting in his shop. He _____ (polish) the glass face. The tiny gears _____ (turn) perfectly. \"I _____ (finish) the repair,\" he _____ (say), handing it to me. I _____ (hold) it to my ear. It _____ (tick) with a steady, sure rhythm.\n\nI _____ (send) it to my brother. By tonight, he _____ (frame) it on my wall. Every time I look at it, I _____ (remember) my grandfather's stories. For years, it _____ (be) silent, but now it _____ (speak) of time, family, and second chances. I _____ (be) so glad I _____ (try).",
    answers: [
      "had been sitting",
      "found",
      "was cleaning",
      "had never seen",
      "wondered",
      "could",
      "took",
      "has been running",
      "was peering",
      "walked",
      "examined",
      "is",
      "said",
      "tried",
      "have done",
      "asked",
      "could",
      "nodded",
      "told",
      "am",
      "is polishing",
      "are turning",
      "have finished",
      "says",
      "hold",
      "is ticking",
      "will send",
      "will have framed",
      "remember",
      "had been",
      "is speaking",
      "am",
      "have tried"
    ],
    choices: buildChoices(exercise5Verbs)
  },
  {
    id: 6,
    title: "Demon Slayer Dream",
    link: "",
    text:
      "Hi, how are you doing? I _____ (see) you for a long time! I _____ (watch) this anime show Demon Slayer. Though I _____ (see) anything so full of gore and violence ever, I still enjoyed it. I _____ (have) to admit that their production _____ (be) really top notch.\n\nI _____ (love) the character Zenitsu so much that I _____ (dream) last night that I _____ (be) a demon slayer. I _____ (dash) and _____ (slash) at lightning speed. I _____ (get) so excited that I _____ (fall) off my bed, _____ (hit) my head and _____ (break) my leg. That _____ (be) why I _____ (be) in the hospital writing to you.\n\nI _____ (receive) a message from my doctor just now. It _____ (seem) that I _____ (be) able to walk for at least a week. So I _____ (guess) I _____ (stay) on bed watching TV for days then.\n\nBy the time you read this, I _____ (fall) asleep. Text me back yeah. Cheers!",
    answers: [
      "have not seen",
      "have been watching",
      "had not seen",
      "have",
      "is",
      "love",
      "dreamed",
      "was",
      "was dashing",
      "was slashing",
      "had got",
      "fell",
      "hit",
      "broke",
      "is",
      "am",
      "have received",
      "seems",
      "will not be",
      "guess",
      "will be staying",
      "will have fallen"
    ],
    choices: buildChoices(exercise6Verbs)
  }
];
/*
const VERB_FORMS = {
  bite: { base: "bite", past: "bit", pastParticiple: "bitten", ing: "biting", third: "bites" },
  use: { base: "use", past: "used", pastParticiple: "used", ing: "using", third: "uses" },
  hurt: { base: "hurt", past: "hurt", pastParticiple: "hurt", ing: "hurting", third: "hurts" },
  show: { base: "show", past: "showed", pastParticiple: "shown", ing: "showing", third: "shows" },
  hold: { base: "hold", past: "held", pastParticiple: "held", ing: "holding", third: "holds" },
  seem: { base: "seem", past: "seemed", pastParticiple: "seemed", ing: "seeming", third: "seems" },
  be: { base: "be", past: "was", pastParticiple: "been", ing: "being", third: "is" },
  like: { base: "like", past: "liked", pastParticiple: "liked", ing: "liking", third: "likes" },
  slash: { base: "slash", past: "slashed", pastParticiple: "slashed", ing: "slashing", third: "slashes" },
  grab: { base: "grab", past: "grabbed", pastParticiple: "grabbed", ing: "grabbing", third: "grabs" },
  think: { base: "think", past: "thought", pastParticiple: "thought", ing: "thinking", third: "thinks" },
  read: { base: "read", past: "read", pastParticiple: "read", ing: "reading", third: "reads" },
  mean: { base: "mean", past: "meant", pastParticiple: "meant", ing: "meaning", third: "means" },
  pass: { base: "pass", past: "passed", pastParticiple: "passed", ing: "passing", third: "passes" },
  support: { base: "support", past: "supported", pastParticiple: "supported", ing: "supporting", third: "supports" },
  grow: { base: "grow", past: "grew", pastParticiple: "grown", ing: "growing", third: "grows" },
  make: { base: "make", past: "made", pastParticiple: "made", ing: "making", third: "makes" },
  draw: { base: "draw", past: "drew", pastParticiple: "drawn", ing: "drawing", third: "draws" },
  watch: { base: "watch", past: "watched", pastParticiple: "watched", ing: "watching", third: "watches" },
  hear: { base: "hear", past: "heard", pastParticiple: "heard", ing: "hearing", third: "hears" },
  love: { base: "love", past: "loved", pastParticiple: "loved", ing: "loving", third: "loves" },
  dream: { base: "dream", past: "dreamed", pastParticiple: "dreamed", ing: "dreaming", third: "dreams" },
  dash: { base: "dash", past: "dashed", pastParticiple: "dashed", ing: "dashing", third: "dashes" },
  slash: { base: "slash", past: "slashed", pastParticiple: "slashed", ing: "slashing", third: "slashes" },
  come: { base: "come", past: "came", pastParticiple: "come", ing: "coming", third: "comes" },
  fall: { base: "fall", past: "fell", pastParticiple: "fallen", ing: "falling", third: "falls" },
  hit: { base: "hit", past: "hit", pastParticiple: "hit", ing: "hitting", third: "hits" },
  break: { base: "break", past: "broke", pastParticiple: "broken", ing: "breaking", third: "breaks" },
  receive: { base: "receive", past: "received", pastParticiple: "received", ing: "receiving", third: "receives" },
  revoke: { base: "revoke", past: "revoked", pastParticiple: "revoked", ing: "revoking", third: "revokes" },
  decide: { base: "decide", past: "decided", pastParticiple: "decided", ing: "deciding", third: "decides" },
  remain: { base: "remain", past: "remained", pastParticiple: "remained", ing: "remaining", third: "remains" },
  wrap: { base: "wrap", past: "wrapped", pastParticiple: "wrapped", ing: "wrapping", third: "wraps" },
  dispense: { base: "dispense", past: "dispensed", pastParticiple: "dispensed", ing: "dispensing", third: "dispenses" },
  go: { base: "go", past: "went", pastParticiple: "gone", ing: "going", third: "goes" },
  reclaim: { base: "reclaim", past: "reclaimed", pastParticiple: "reclaimed", ing: "reclaiming", third: "reclaims" },
  have: { base: "have", past: "had", pastParticiple: "had", ing: "having", third: "has" },
  matter: { base: "matter", past: "mattered", pastParticiple: "mattered", ing: "mattering", third: "matters" },
  train: { base: "train", past: "trained", pastParticiple: "trained", ing: "training", third: "trains" },
  talk: { base: "talk", past: "talked", pastParticiple: "talked", ing: "talking", third: "talks" },
  launch: { base: "launch", past: "launched", pastParticiple: "launched", ing: "launching", third: "launches" },
  fire: { base: "fire", past: "fired", pastParticiple: "fired", ing: "firing", third: "fires" },
  disqualify: { base: "disqualify", past: "disqualified", pastParticiple: "disqualified", ing: "disqualifying", third: "disqualifies" },
  react: { base: "react", past: "reacted", pastParticiple: "reacted", ing: "reacting", third: "reacts" },
  consider: { base: "consider", past: "considered", pastParticiple: "considered", ing: "considering", third: "considers" },
  count: { base: "count", past: "counted", pastParticiple: "counted", ing: "counting", third: "counts" },
  get: { base: "get", past: "got", pastParticiple: "got", ing: "getting", third: "gets" },
  catch: { base: "catch", past: "caught", pastParticiple: "caught", ing: "catching", third: "catches" },
  guess: { base: "guess", past: "guessed", pastParticiple: "guessed", ing: "guessing", third: "guesses" },
  sit: { base: "sit", past: "sat", pastParticiple: "sat", ing: "sitting", third: "sits" },
  find: { base: "find", past: "found", pastParticiple: "found", ing: "finding", third: "finds" },
  clean: { base: "clean", past: "cleaned", pastParticiple: "cleaned", ing: "cleaning", third: "cleans" },
  see: { base: "see", past: "saw", pastParticiple: "seen", ing: "seeing", third: "sees" },
  wonder: { base: "wonder", past: "wondered", pastParticiple: "wondered", ing: "wondering", third: "wonders" },
  fix: { base: "fix", past: "fixed", pastParticiple: "fixed", ing: "fixing", third: "fixes" },
  take: { base: "take", past: "took", pastParticiple: "taken", ing: "taking", third: "takes" },
  run: { base: "run", past: "ran", pastParticiple: "run", ing: "running", third: "runs" },
  peer: { base: "peer", past: "peered", pastParticiple: "peered", ing: "peering", third: "peers" },
  walk: { base: "walk", past: "walked", pastParticiple: "walked", ing: "walking", third: "walks" },
  examine: { base: "examine", past: "examined", pastParticiple: "examined", ing: "examining", third: "examines" },
  look: { base: "look", past: "looked", pastParticiple: "looked", ing: "looking", third: "looks" },
  say: { base: "say", past: "said", pastParticiple: "said", ing: "saying", third: "says" },
  try: { base: "try", past: "tried", pastParticiple: "tried", ing: "trying", third: "tries" },
  do: { base: "do", past: "did", pastParticiple: "done", ing: "doing", third: "does" },
  ask: { base: "ask", past: "asked", pastParticiple: "asked", ing: "asking", third: "asks" },
  nod: { base: "nod", past: "nodded", pastParticiple: "nodded", ing: "nodding", third: "nods" },
  tell: { base: "tell", past: "told", pastParticiple: "told", ing: "telling", third: "tells" },
  wait: { base: "wait", past: "waited", pastParticiple: "waited", ing: "waiting", third: "waits" },
  polish: { base: "polish", past: "polished", pastParticiple: "polished", ing: "polishing", third: "polishes" },
  turn: { base: "turn", past: "turned", pastParticiple: "turned", ing: "turning", third: "turns" },
  finish: { base: "finish", past: "finished", pastParticiple: "finished", ing: "finishing", third: "finishes" },
  tick: { base: "tick", past: "ticked", pastParticiple: "ticked", ing: "ticking", third: "ticks" },
  hang: { base: "hang", past: "hung", pastParticiple: "hung", ing: "hanging", third: "hangs" },
  send: { base: "send", past: "sent", pastParticiple: "sent", ing: "sending", third: "sends" },
  frame: { base: "frame", past: "framed", pastParticiple: "framed", ing: "framing", third: "frames" },
  remember: { base: "remember", past: "remembered", pastParticiple: "remembered", ing: "remembering", third: "remembers" },
  stay: { base: "stay", past: "stayed", pastParticiple: "stayed", ing: "staying", third: "stays" },
  speak: { base: "speak", past: "spoke", pastParticiple: "spoken", ing: "speaking", third: "speaks" },
  feel: { base: "feel", past: "felt", pastParticiple: "felt", ing: "feeling", third: "feels" }
};

const getSubjectType = (subject) => {
  const normalized = String(subject || "").toLowerCase();
  if (normalized === "i") return "i";
  if (normalized === "you") return "you";
  if (normalized === "we" || normalized === "they") return "plural";
  return "third";
};

const getBePresent = (subjectType) => {
  if (subjectType === "i") return "am";
  if (subjectType === "plural" || subjectType === "you") return "are";
  return "is";
};

const getBePast = (subjectType) => {
  if (subjectType === "plural" || subjectType === "you") return "were";
  return "was";
};

const getHavePresent = (subjectType) =>
  subjectType === "third" ? "has" : "have";

const getNegAux = (aux, contraction) => {
  if (!contraction) return `${aux} not`;
  const map = {
    "do": "don't",
    "does": "doesn't",
    "did": "didn't",
    "will": "won't",
    "have": "haven't",
    "has": "hasn't",
    "had": "hadn't",
    "is": "isn't",
    "are": "aren't",
    "was": "wasn't",
    "were": "weren't"
  };
  return map[aux] || `${aux} not`;
};

const buildTenseOptions = ({ base, subject, negative = false, contraction = false, adverb }) => {
  if (base === "can") {
    const options = [
      { label: "Present — can", value: "can" },
      { label: "Past — could", value: "could" },
      { label: "Past (able to) — was able to", value: "was able to" },
      { label: "Future (able to) — will be able to", value: "will be able to" }
    ];
    if (!adverb) {
      return options;
    }
    const applyAdverb = (phrase) => {
      const parts = phrase.split(" ");
      if (parts.length === 1) return `${adverb} ${phrase}`;
      return `${parts[0]} ${adverb} ${parts.slice(1).join(" ")}`;
    };
    return options.map((option) => {
      const value = applyAdverb(option.value);
      return { label: `${option.label.split(" — ")[0]} — ${value}`, value };
    });
  }
  const forms = VERB_FORMS[base];
  if (!forms) {
    throw new Error(`Missing verb forms for "${base}".`);
  }
  const applyAdverb = (phrase) => {
    if (!adverb) return phrase;
    const parts = phrase.split(" ");
    if (parts.length === 1) return `${adverb} ${phrase}`;
    return `${parts[0]} ${adverb} ${parts.slice(1).join(" ")}`;
  };
  const subjectType = getSubjectType(subject);
  const isBe = base === "be";
  const presentSimple = applyAdverb(
    isBe ? getBePresent(subjectType) : subjectType === "third" ? forms.third : forms.base
  );
  const pastSimple = applyAdverb(isBe ? getBePast(subjectType) : forms.past);
  const futureSimple = applyAdverb(`will ${forms.base}`);
  const presentContinuous = applyAdverb(`${getBePresent(subjectType)} ${forms.ing}`);
  const pastContinuous = applyAdverb(`${getBePast(subjectType)} ${forms.ing}`);
  const futureContinuous = applyAdverb(`will be ${forms.ing}`);
  const presentPerfect = applyAdverb(`${getHavePresent(subjectType)} ${forms.pastParticiple}`);
  const pastPerfect = applyAdverb(`had ${forms.pastParticiple}`);
  const futurePerfect = applyAdverb(`will have ${forms.pastParticiple}`);
  const presentPerfectContinuous = applyAdverb(`${getHavePresent(subjectType)} been ${forms.ing}`);
  const pastPerfectContinuous = applyAdverb(`had been ${forms.ing}`);
  const futurePerfectContinuous = applyAdverb(`will have been ${forms.ing}`);

  if (!negative) {
    return [
      { label: `Present Simple — ${presentSimple}`, value: presentSimple },
      { label: `Past Simple — ${pastSimple}`, value: pastSimple },
      { label: `Future Simple — ${futureSimple}`, value: futureSimple },
      { label: `Present Continuous — ${presentContinuous}`, value: presentContinuous },
      { label: `Past Continuous — ${pastContinuous}`, value: pastContinuous },
      { label: `Future Continuous — ${futureContinuous}`, value: futureContinuous },
      { label: `Present Perfect — ${presentPerfect}`, value: presentPerfect },
      { label: `Past Perfect — ${pastPerfect}`, value: pastPerfect },
      { label: `Future Perfect — ${futurePerfect}`, value: futurePerfect },
      {
        label: `Present Perfect Continuous — ${presentPerfectContinuous}`,
        value: presentPerfectContinuous
      },
      {
        label: `Past Perfect Continuous — ${pastPerfectContinuous}`,
        value: pastPerfectContinuous
      },
      {
        label: `Future Perfect Continuous — ${futurePerfectContinuous}`,
        value: futurePerfectContinuous
      }
    ];
  }

  const presentSimpleNeg = applyAdverb(
    isBe
      ? getNegAux(getBePresent(subjectType), contraction)
      : `${getNegAux(subjectType === "third" ? "does" : "do", contraction)} ${forms.base}`
  );
  const pastSimpleNeg = applyAdverb(
    isBe
      ? getNegAux(getBePast(subjectType), contraction)
      : `${getNegAux("did", contraction)} ${forms.base}`
  );
  const futureSimpleNeg = applyAdverb(`${getNegAux("will", contraction)} ${forms.base}`);
  const presentContinuousNeg = applyAdverb(`${getNegAux(getBePresent(subjectType), contraction)} ${forms.ing}`);
  const pastContinuousNeg = applyAdverb(`${getNegAux(getBePast(subjectType), contraction)} ${forms.ing}`);
  const futureContinuousNeg = applyAdverb(`${getNegAux("will", contraction)} be ${forms.ing}`);
  const presentPerfectNeg = applyAdverb(`${getNegAux(getHavePresent(subjectType), contraction)} ${forms.pastParticiple}`);
  const pastPerfectNeg = applyAdverb(`${getNegAux("had", contraction)} ${forms.pastParticiple}`);
  const futurePerfectNeg = applyAdverb(`${getNegAux("will", contraction)} have ${forms.pastParticiple}`);
  const presentPerfectContinuousNeg = applyAdverb(`${getNegAux(getHavePresent(subjectType), contraction)} been ${forms.ing}`);
  const pastPerfectContinuousNeg = applyAdverb(`${getNegAux("had", contraction)} been ${forms.ing}`);
  const futurePerfectContinuousNeg = applyAdverb(`${getNegAux("will", contraction)} have been ${forms.ing}`);

  return [
    { label: `Present Simple — ${presentSimpleNeg}`, value: presentSimpleNeg },
    { label: `Past Simple — ${pastSimpleNeg}`, value: pastSimpleNeg },
    { label: `Future Simple — ${futureSimpleNeg}`, value: futureSimpleNeg },
    { label: `Present Continuous — ${presentContinuousNeg}`, value: presentContinuousNeg },
    { label: `Past Continuous — ${pastContinuousNeg}`, value: pastContinuousNeg },
    { label: `Future Continuous — ${futureContinuousNeg}`, value: futureContinuousNeg },
    { label: `Present Perfect — ${presentPerfectNeg}`, value: presentPerfectNeg },
    { label: `Past Perfect — ${pastPerfectNeg}`, value: pastPerfectNeg },
    { label: `Future Perfect — ${futurePerfectNeg}`, value: futurePerfectNeg },
    {
      label: `Present Perfect Continuous — ${presentPerfectContinuousNeg}`,
      value: presentPerfectContinuousNeg
    },
    {
      label: `Past Perfect Continuous — ${pastPerfectContinuousNeg}`,
      value: pastPerfectContinuousNeg
    },
    {
      label: `Future Perfect Continuous — ${futurePerfectContinuousNeg}`,
      value: futurePerfectContinuousNeg
    }
  ];
};

const buildChoices = (verbs) => verbs.map((verb) => buildTenseOptions(verb));

const exercise1Verbs = [
  { base: "be", subject: "it" },
  { base: "like", subject: "he" },
  { base: "hurt", subject: "he", negative: true, contraction: false },
  { base: "grab", subject: "he" },
  { base: "want", subject: "i" },
  { base: "want", subject: "i" },
  { base: "be", subject: "it" },
  { base: "be", subject: "this" },
  { base: "think", subject: "i" },
  { base: "be", subject: "it" }
];

const exercise2Verbs = [
  { base: "read", subject: "you" },
  { base: "mean", subject: "it" },
  { base: "pass", subject: "i" },
  { base: "be", subject: "it" },
  { base: "be", subject: "i" },
  { base: "be", subject: "i", negative: true, contraction: true },
  { base: "be", subject: "i" },
  { base: "go", subject: "i" },
  { base: "be", subject: "this" }
];

const exercise3Verbs = [
  { base: "receive", subject: "it" },
  { base: "revoke", subject: "it" },
  { base: "decide", subject: "he" },
  { base: "remain", subject: "everything" },
  { base: "come", subject: "the burgers" },
  { base: "dispense", subject: "the machine" },
  { base: "have", subject: "it" },
  { base: "be", subject: "they" },
  { base: "get", subject: "things" },
  { base: "catch", subject: "a post" },
  { base: "be", subject: "it" },
  { base: "be", subject: "it" }
];

const exercise4Verbs = [
  { base: "be", subject: "this" },
  { base: "be", subject: "reaction time" },
  { base: "train", subject: "athletes" },
  { base: "talk", subject: "i", negative: true, contraction: false },
  { base: "launch", subject: "the athlete" },
  { base: "fire", subject: "the gun" },
  { base: "react", subject: "you" },
  { base: "get", subject: "you" },
  { base: "be", subject: "it" },
  { base: "be", subject: "it" },
  { base: "be", subject: "he" }
];

const exercise5Verbs = [
  { base: "sit", subject: "it" },
  { base: "find", subject: "i" },
  { base: "clean", subject: "i" },
  { base: "see", subject: "i" },
  { base: "wonder", subject: "i" },
  { base: "fix", subject: "i" },
  { base: "take", subject: "i" },
  { base: "run", subject: "he" },
  { base: "peer", subject: "he" },
  { base: "walk", subject: "i" },
  { base: "examine", subject: "he" },
  { base: "look", subject: "it" },
  { base: "say", subject: "he" },
  { base: "try", subject: "someone" },
  { base: "do", subject: "they" },
  { base: "ask", subject: "i" },
  { base: "nod", subject: "he" },
  { base: "tell", subject: "he" },
  { base: "wait", subject: "i" },
  { base: "polish", subject: "he" },
  { base: "turn", subject: "they" },
  { base: "finish", subject: "i" },
  { base: "say", subject: "he" },
  { base: "hold", subject: "i" },
  { base: "tick", subject: "it" },
  { base: "send", subject: "i" },
  { base: "frame", subject: "he" },
  { base: "remember", subject: "i" },
  { base: "stay", subject: "it" },
  { base: "speak", subject: "it" },
  { base: "feel", subject: "i" },
  { base: "try", subject: "i" }
];

window.realTensesExercises = [
  {
    id: 1,
    link: "https://www.youtube.com/shorts/sZTKk5sFQjM",
    text:
      "Wolf dogs love to _____ (bite) and take me around the house. He _____ (use) his mouth a lot more than a normal dog would, but he never _____ (hurt) me. He's literally grabbing me and saying, \"I want you to come upstairs with me now because I want to _____ (show) you something.\" So imagine it. It's like somebody _____ (hold) your hand but with teeth. This is typical wolf dog behavior and I think it _____ (seem) quite normal.",
    answers: ["bite", "uses", "hurts", "show", "is holding", "seems"],
    choices: buildChoices(exercise1Verbs)
  },
  {
    id: 2,
    link: "https://x.com/josshere/status/2018441365189959913/photo/1",
    text:
      "Hi. If you're reading this, it means I recently _____ (pass) due to my cancer. I would like to thank everyone for how they _____ (support) me over the years. It's been so fun watching my shop _____ (grow) into what it is today. I'm so sad I _____ (make) so little artwork over the past year, but I'm sure now I'll be going off to a place where I _____ (draw) every day. Thank you again, everyone. This message _____ (come) from joss.",
    answers: ["passed", "have supported", "grow", "have made", "draw", "comes"],
    choices: buildChoices(exercise2Verbs)
  },
  {
    id: 3,
    link: "https://www.youtube.com/shorts/IPo3nYBIsSg",
    text:
      "In 2014, this Burger King _____ (receive) enough complaints about the quality of their food that the chain _____ (revoke) the location's franchising agreement. The owner _____ (decide) to ignore that detail and keep operating. They _____ (wrap) the burgers in tin foil, and the Coke machine _____ (dispense) Pepsi products. The story soon _____ (go) viral, and Burger King eventually _____ (reclaim) their restaurant.",
    answers: ["received", "revoked", "decided", "wrapped", "was dispensing", "went", "reclaimed"],
    choices: buildChoices(exercise3Verbs)
  },
  {
    id: 4,
    link: "https://www.youtube.com/shorts/Oo1B902oOy4",
    text:
      "In track and field, reaction time _____ (matter), but officials can still _____ (disqualify) you for reacting too fast. If you _____ (react) to the starting gun in under a tenth of a second, officials _____ (consider) it humanly impossible, so it _____ (count) as a false start. They _____ (show) the disqualification card.",
    answers: ["matters", "disqualify", "react", "consider", "counts", "show"],
    choices: buildChoices(exercise4Verbs)
  },
  {
    id: 5,
    title: "Grandfather's Watch",
    link: "",
    text:
      "My grandfather's old watch _____ (sit) on my desk for a week. I _____ (find) it while I _____ (clean) the attic. I _____ (see) it working before, and I _____ (wonder) how to _____ (fix) it.\n\nYesterday, I _____ (take) it to the old repair shop in town. Mr. Finch, the watchmaker, _____ (run) that shop for fifty years. He _____ (peer) through his eyeglass when I _____ (walk) in. He _____ (examine) the watch carefully. \"This _____ (look) like a fine piece,\" he _____ (say). \"Someone _____ (try) to fix it before, but they _____ (do) more harm than good.\"\n\nI _____ (ask) him about restoring it. He _____ (nod) and _____ (tell) me to come back today.\n\nSo here I _____ (wait) in his shop. He _____ (polish) the glass face. The tiny gears _____ (turn) perfectly. \"I _____ (finish) the repair,\" he _____ (say), handing it to me. I _____ (hold) it to my ear. It _____ (tick) with a steady, sure rhythm.\n\nI _____ (send) it to my brother. By tonight, he _____ (frame) it on my wall. Every time I look at it, I _____ (remember) my grandfather's stories. For years, it _____ (stay) silent, but now it _____ (speak) of time, family, and second chances. I _____ (feel) so glad I _____ (try).",
    answers: [
      "had been sitting",
      "found",
      "was cleaning",
      "had seen",
      "wondered",
      "fix",
      "took",
      "has run",
      "peered",
      "walked",
      "examined",
      "looked",
      "said",
      "had tried",
      "had done",
      "asked",
      "nodded",
      "told",
      "am waiting",
      "is polishing",
      "are turning",
      "have finished",
      "says",
      "hold",
      "ticks",
      "will send",
      "will have framed",
      "remember",
      "had stayed",
      "speaks",
      "feel",
      "tried"
    ],
    choices: buildChoices(exercise5Verbs)
  },
  {
    id: 6,
    title: "Demon Slayer Dream",
    link: "",
    text:
      "Hi, how are you doing? I _____ (see) you for a long time. I _____ (watch) this anime show Demon Slayer. Though I _____ (seen) anything so full of gore and violence, I still enjoyed it. I _____ (have) to admit that their production _____ (be) really top notch.\n\nI _____ (love) the character Zenitsu so much that I _____ (dream) last night that I _____ (be) a demon slayer. I _____ (dash) and _____ (slash) at lightning speed. I _____ (get) so excited that I _____ (fall) off my bed, _____ (hit) my head and _____ (break) my leg. That _____ (be) why I _____ (be) in the hospital writing to you.\n\nI _____ (receive) a message from my doctor. It _____ (seem) that I _____ (be) able to walk for at least a week. So I _____ (guess) I _____ (stay) on bed watching TV for days then.\n\nBy the time you read this, I _____ (fall) asleep. Text me back yeah. Cheers!",
    answers: [
      "have not seen",
      "have been watching",
      "had never expected",
      "have",
      "is",
      "love",
      "dreamed",
      "was",
      "was dashing",
      "slashing",
      "had got",
      "fell",
      "hit",
      "broke",
      "is",
      "am",
      "have received",
      "seems",
      "will not be",
      "guess",
      "will be staying",
      "will have fallen"
    ],
    choices: buildChoices(exercise6Verbs)
  }
];
window.realTensesExercises = [
  {
    id: 1,
    link: "https://www.youtube.com/shorts/sZTKk5sFQjM",
    text:
      "Wolf dogs love to _____ (bite) and take me around the house. He _____ (use) his mouth a lot more than a normal dog would, but he never _____ (hurt) me. He's literally grabbing me and saying, \"I want you to come upstairs with me now because I want to _____ (show) you something.\" So imagine it. It's like somebody _____ (hold) your hand but with teeth. This is typical wolf dog behavior and I think it _____ (be) quite normal.",
    answers: ["bite", "uses", "hurts", "show", "is holding", "is"],
    choices: [
      ["bite", "bites", "bit", "are biting"],
      ["use", "uses", "used", "is using"],
      ["hurt", "hurts", "hurt", "is hurting"],
      ["show", "shows", "showed", "is showing"],
      ["hold", "holds", "held", "is holding"],
      ["be", "is", "was", "is being"]
    ]
  },
  {
    id: 2,
    link: "https://x.com/josshere/status/2018441365189959913/photo/1",
    text:
      "Hi. If you're reading this, it means I recently _____ (pass) due to my cancer. I would like to thank everyone for how they _____ (support) me over the years. It's been so fun watching my shop _____ (grow) into what it is today. I'm so sad I _____ (not make) any artwork over the past year, but I'm sure now I'll be going off to a place where I can _____ (draw) every day. Thank you again, everyone. This _____ (be) joss.",
    answers: ["passed", "have supported", "grow", "haven't made", "draw", "has been"],
    choices: [
      ["pass", "passes", "passed", "has passed"],
      ["support", "supports", "supported", "are supporting"],
      ["grow", "grows", "grew", "is growing"],
      ["didn't make", "haven't made", "wasn't making", "don't make"],
      ["draw", "draws", "drew", "is drawing"],
      ["is", "was", "has been", "is being"]
    ]
  },
  {
    id: 3,
    link: "https://www.youtube.com/shorts/IPo3nYBIsSg",
    text:
      "In 2014, this Burger King _____ (receive) enough complaints about the quality of their food that the chain _____ (revoke) the location's franchising agreement. The owner _____ (decide) to ignore that detail and keep operating. The burgers _____ (wrap) in tin foil, and the Coke machine _____ (dispense) Pepsi products. The story soon _____ (go) viral, and Burger King eventually _____ (reclaim) their restaurant.",
    answers: [
      "received",
      "revoked",
      "decided",
      "were wrapped",
      "was dispensing",
      "went",
      "reclaimed"
    ],
    choices: [
      ["receive", "receives", "received", "has received"],
      ["revoke", "revokes", "revoked", "has revoked"],
      ["decide", "decides", "decided", "is deciding"],
      ["are wrapped", "were wrapped", "have been wrapped", "are wrapping"],
      ["dispenses", "dispensed", "was dispensing", "has dispensed"],
      ["go", "goes", "went", "was going"],
      ["reclaim", "reclaims", "reclaimed", "has reclaimed"]
    ]
  },
  {
    id: 4,
    link: "https://www.youtube.com/shorts/Oo1B902oOy4",
    text:
      "In track and field, reaction time _____ (matter), but officials can _____ (disqualify) you for reacting too fast. If you _____ (react) to the starting gun in under a tenth of a second, officials _____ (consider) it humanly impossible, so it _____ (count) as a false start. They _____ (show) the disqualification card.",
    answers: ["matters", "disqualify", "react", "consider", "counts", "show"],
    choices: [
      ["matter", "matters", "mattered", "is mattering"],
      ["disqualify", "disqualifies", "disqualified", "are disqualifying"],
      ["react", "reacts", "reacted", "are reacting"],
      ["consider", "considers", "considered", "are considering"],
      ["count", "counts", "counted", "is counting"],
      ["show", "shows", "showed", "are showing"]
    ]
  },
  {
    id: 5,
    title: "Grandfather's Watch",
    link: "",
    text:
      "My grandfather's old watch _____ (sit) on my desk for a week. I _____ (find) it while I _____ (clean) the attic. I _____ (never see) it working, and I _____ (wonder) if I _____ (can) fix it.\n\nYesterday, I _____ (take) it to the old repair shop in town. Mr. Finch, the watchmaker, _____ (run) that shop for fifty years. He _____ (peer) through his eyeglass when I _____ (walk) in. He _____ (examine) the watch carefully. \"This _____ (be) a fine piece,\" he _____ (say). \"Someone _____ (try) to fix it before, but they _____ (do) more harm than good.\"\n\nI _____ (ask) him if he _____ (can) restore it. He _____ (nod) and _____ (tell) me to come back today.\n\nSo here I _____ (be), waiting in his shop. He _____ (polish) the glass face. The tiny gears _____ (turn) perfectly. \"I _____ (finish) the repair,\" he _____ (say), handing it to me. I _____ (hold) it to my ear. It _____ (tick) with a steady, sure rhythm.\n\nI _____ (send) it to my brother. By tonight, he _____ (frame) it on my wall. Every time I look at it, I _____ (remember) my grandfather's stories. For years, it _____ (be) silent, but now it _____ (speak) of time, family, and second chances. I _____ (be) so glad I _____ (try).",
    answers: [
      "had been sitting",
      "found",
      "was cleaning",
      "had never seen",
      "wondered",
      "could",
      "took",
      "has run",
      "peered",
      "walked",
      "examined",
      "is",
      "said",
      "had tried",
      "had done",
      "asked",
      "could",
      "nodded",
      "told",
      "am",
      "is polishing",
      "are turning",
      "have finished",
      "says",
      "hold",
      "ticks",
      "will send",
      "will have framed",
      "remember",
      "was",
      "speaks",
      "am",
      "tried"
    ],
    choices: [
      ["sat", "has been sitting", "had been sitting", "is sitting"],
      ["found", "have found", "find", "was finding"],
      ["cleaned", "was cleaning", "am cleaning", "had cleaned"],
      ["never saw", "had never seen", "have never seen", "never see"],
      ["wondered", "was wondering", "wonder", "had wondered"],
      ["can", "could", "was able to", "will be able to"],
      ["took", "has taken", "take", "was taking"],
      ["ran", "has run", "was running", "runs"],
      ["peered", "was peering", "peers", "has peered"],
      ["walked", "was walking", "walks", "had walked"],
      ["examined", "was examining", "examines", "had examined"],
      ["is", "was", "has been", "will be"],
      ["said", "says", "was saying", "has said"],
      ["tried", "had tried", "was trying", "has tried"],
      ["did", "had done", "was doing", "has done"],
      ["asked", "was asking", "ask", "had asked"],
      ["can", "could", "was able to", "will be able to"],
      ["nodded", "nods", "was nodding", "had nodded"],
      ["told", "tells", "was telling", "has told"],
      ["am", "was", "have been", "will be"],
      ["polishes", "is polishing", "was polishing", "has polished"],
      ["turn", "are turning", "were turning", "have turned"],
      ["finished", "have finished", "am finishing", "had finished"],
      ["says", "said", "is saying", "has said"],
      ["hold", "held", "am holding", "have held"],
      ["tick", "ticks", "is ticking", "ticked"],
      ["send", "will send", "am sending", "will have sent"],
      ["frame", "will frame", "am framing", "will have framed"],
      ["remember", "remembered", "am remembering", "will remember"],
      ["was", "has been", "is", "had been"],
      ["speaks", "spoke", "is speaking", "has spoken"],
      ["am", "was", "have been", "will be"],
      ["tried", "have tried", "was trying", "try"]
    ]
  },
  {
    id: 6,
    title: "Demon Slayer Dream",
    link: "",
    text:
      "Hi, how are you doing? I _____ (see) you for a long time. I _____ (watch) this anime show Demon Slayer. I _____ (hear) that the show _____ (have) a lot of fight scenes. But as I _____ (watch) it, I was still in shock as I _____ (see) anything so full of gore and violence ever. Still, I _____ (have) to say, their story and production _____ (be) really top notch.\n\nI _____ (love) this show so much that I _____ (dream) last night that I _____ (be) a demon slayer. I _____ (dash) and _____ (slash) at the speed of lightning. I _____ (get) so excited that I _____ (fall) off my bed, _____ (hit) my head and _____ (break) my leg. That _____ (be) why I _____ (be) in the hospital writing to you.\n\nI _____ (receive) a message from my doctor. It _____ (seem) that I _____ (be) able to walk for at least a week. So I _____ (guess) I _____ (stay) on bed watching TV for days then.",
    answers: [
      "have not seen",
      "have been watching",
      "have heard",
      "had",
      "was watching",
      "had not seen",
      "have",
      "is",
      "love",
      "dreamed",
      "was",
      "was dashing",
      "was slashing",
      "had got",
      "fell",
      "hit",
      "broke",
      "is",
      "am",
      "have received",
      "seems",
      "will not be",
      "guess",
      "will be staying"
    ],
    choices: buildChoices(exercise6Verbs)
  }
];
*/
