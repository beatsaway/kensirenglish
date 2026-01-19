const DEFAULT_MAP_TIP =
  "Present Simple Tense要小心留意主角He She It 動詞要s, es, 或ies尾.";
const DEFAULT_STAGE_TIP = "Choose a stage.";

const HINT_PARTS = {
  time: {
    A: {
      tenses: ["present"],
      hk: ["Present Tense係: 現在/而家/平時/家下/家陣..."]
    },
    P: {
      tenses: ["past"],
      hk: ["Past Tense係: 當時/之前/嗰陣/頭先/嗰時/早前..."]
    },
    F: {
      tenses: ["future"],
      hk: ["Future Tense係: 會/到時/未來/將會, 留意Will係Modal Verb要將後面動詞打回原形"]
    }
  },
  aspect: {
    simple: {
      tenses: ["simple"],
      hk: ["Simple Tense係: 就咁做一樣嘢 冇特別補語"],
      hkPresentOnly: ["如果係Present Simple Tense, 主角He She It嘅動詞要有s/es/ies尾"]
    },
    continuous: {
      tenses: ["continuous"],
      hk: ["Continuous Tense係:發生緊/Keep住做/正在/即將/就快會/肯定會"],
      hkPresentOnly: ["如果係 Present Continuous Tense, 主角I要配am, He/She/It要配is, 其他配are"],
      hkPastOnly: ["如果係 Past Continuous Tense, 主角I He She It 要用Was而唔係Were"]
    },
    perfect: {
      tenses: ["perfect"],
      hk: ["Perfect Tense係:做咗/做好/做哂/做倒/做足/做齊/做夠/做掂/做完某樣嘢..."],
      hkPresentOnly: ["如果係Present Perfect Tense, 主角He She It要用Has而唔係Have"]
    },
    perfectcontinuous: {
      tenses: ["perfect continuous"],
      hk: ["Perfect continuous Tense係: 一直做緊同一樣嘢 做咗一段時間 一向都係咁做"],
      hkPresentOnly: ["如果係Present Perfect Continuous Tense, 主角He She It要用Has been而唔係Have been"]
    }
  }
};
