// Topic Manager - Handles loading and managing all topic files
class TopicManager {
  constructor() {
    this.topics = {};
    this.currentTopic = null;
    this.currentExerciseIndex = 0;
    this.availableTopics = [
      { 
        id: 'articles', 
        name: 'Articles (a/an/the) | 冠詞', 
        file: 'articles.js',
        introduction: 'Talk about specific things vs general things<br>講特定嘢同一般嘢嘅分別'
      },
      {
        id: 'articles-2',
        name: 'Articles 2 | 冠詞2',
        file: 'the-or-no-the.js',
        introduction: 'A whole group, one species, or a named thing<br>泛指、某一種、定係指定嗰樣'
      },
      {
        id: 'articles-3',
        name: 'Articles 3 | 冠詞3',
        file: 'articles3.js',
        introduction: 'Exam cloze: a, an, the, or no article in a short text<br>考試完形：一段短文入面揀 a、an、the，或者唔加'
      },
      {
        id: 'articles-4',
        name: 'Articles 4 | 冠詞4',
        file: 'articles4.js',
        introduction: 'Proofreading: the underlined article is wrong<br>改錯：底線嘅冠詞係錯嘅'
      },
      { 
        id: 'prepositions', 
        name: 'Prepositions | 介詞', 
        file: 'prepositions.js',
        introduction: 'Describe where, when, and how things happen<br>描述事情發生嘅地方、時間同方式'
      },
      {
        id: 'prepositions-2',
        name: 'Prepositions 2 | 介詞2',
        file: 'prepositions2.js',
        introduction: 'The preposition is stuck to the word: interested in, afraid of, reason for<br>介詞跟住個字：interested in、afraid of、reason for'
      },
      {
        id: 'prepositions-3',
        name: 'Prepositions 3 | 介詞3',
        file: 'prepositions3.js',
        introduction: 'Exam cloze: a short passage, one preposition in each gap<br>考試完形：一段短文，每個空一個介詞'
      },
      {
        id: 'prepositions-4',
        name: 'Prepositions 4 | 介詞4',
        file: 'prepositions4.js',
        introduction: 'Pairs that look alike: on time / in time, beside / besides, despite / in spite of<br>望落似但唔同：準時／趕得切、隔離／除此之外、despite／in spite of'
      },
      { 
        id: 'tenses', 
        name: 'Tenses | 時態', 
        file: 'tenses.js',
        introduction: 'Express time in your conversations<br>喺對話中表達時間'
      },
      {
        id: 'tenses-2',
        name: 'Tenses 2 | 時態2',
        file: 'simple-vs-perfect.js',
        introduction: 'Have you watched it? Walking when the sky went dark<br>睇過未？行緊嗰陣個天變黑'
      },
      {
        id: 'tenses-3',
        name: 'Tenses 3 | 時態3',
        file: 'tenses3.js',
        introduction: 'Exam cloze: a short story, one verb form in each gap<br>考試完形：一段短文，每個空一個動詞形式'
      },
      {
        id: 'tenses-4',
        name: 'Tenses 4 | 時態4',
        file: 'tenses4.js',
        introduction: 'Proofreading: the underlined verb is wrong. Choose the form that should replace it<br>改錯：底線動詞係錯嘅。揀應該換上嘅形式'
      },
      {
        id: 'tenses-5',
        name: 'Tenses 5 | 時態5',
        file: 'tenses5.js',
        introduction: 'The verb is given in brackets. Choose its correct form<br>括號裡有動詞原形。揀正確形式'
      },
      {
        id: 'tenses-6',
        name: 'Tenses 6 | 時態6',
        file: 'tenses6.js',
        introduction: 'When and while: which action is still going, which one is the short moment<br>When 同 while：邊個仲進行緊，邊個係短動作'
      },
      {
        id: 'tenses-7',
        name: 'Tenses 7 | 時態7',
        file: 'tenses7.js',
        introduction: 'Same two-gap choice, with before, by the time, since, as soon as and after<br>同樣兩個空，但係 before、by the time、since、as soon as、after'
      },
      { 
        id: 'subject-verb-agreement', 
        name: 'Subject-Verb Agreement | 主謂一致', 
        file: 'subject-verb-agreement.js',
        introduction: 'Make your sentences sound natural<br>令你嘅句子聽起嚟自然'
      },
      { 
        id: 'subject-verb-agreement-2', 
        name: 'Subject-Verb Agreement 2 | 主謂一致2', 
        file: 'subject-verb-agreement-2.js',
        introduction: 'One of / some of / most of / all of / none of<br>一個/一啲/大部分/全部/一個都冇'
      },
      { 
        id: 'subject-verb-agreement-3', 
        name: 'Subject-Verb Agreement 3 | 主謂一致3', 
        file: 'subject-verb-agreement-3.js',
        introduction: 'Either of / neither of<br>其中一個 / 兩個都唔係'
      },
      { 
        id: 'countable-uncountable', 
        name: 'Countable/Uncountable Nouns | 可數/不可數名詞', 
        file: 'countable-uncountable.js',
        introduction: 'Talk about quantities correctly<br>正確咁講數量'
      },
      { 
        id: 'word-order', 
        name: 'Word Order | 詞序', 
        file: 'word-order.js',
        introduction: 'Put words in the right place<br>將詞語放喺正確位置'
      },
      { 
        id: 'comparatives', 
        name: 'Comparatives | 比較', 
        file: 'comparatives.js',
        introduction: 'Compare things and make choices<br>比較事物同做選擇'
      },
      { 
        id: 'comparatives-2', 
        name: 'Comparatives 2 | 比較2', 
        file: 'comparatives2.js',
        introduction: 'Stories, adjectives, and comparisons<br>故事種類、形容詞同比較'
      },
      { 
        id: 'comparatives-3', 
        name: 'Comparatives 3 | 比較3', 
        file: 'comparatives3.js',
        introduction: 'Adverbs and comparison of actions<br>副詞同動作比較'
      },
      { 
        id: 'modal-verbs-1', 
        name: 'Modal Verbs 1 | 情態動詞1', 
        file: 'modal-verbs-1.js',
        introduction: 'Ability and basic advice<br>能力同基本建議'
      },
      { 
        id: 'modal-verbs-2', 
        name: 'Modal Verbs 2 | 情態動詞2', 
        file: 'modal-verbs-2.js',
        introduction: 'Obligation and permission<br>責任同准許'
      },
      { 
        id: 'modal-verbs-3', 
        name: 'Modal Verbs 3 | 情態動詞3', 
        file: 'modal-verbs-3.js',
        introduction: 'Possibility and polite requests<br>可能性同禮貌請求'
      },
      { 
        id: 'gerunds-infinitives', 
        name: 'Gerunds vs Infinitives | 動名詞vs不定式', 
        file: 'gerunds-infinitives.js',
        introduction: 'Talk about activities and plans<br>講活動同計劃'
      },
      { 
        id: 'conditionals', 
        name: 'Conditionals | 條件句', 
        file: 'conditionals.js',
        introduction: 'Talk about possibilities and dreams<br>講可能同夢想'
      },
      {
        id: 'conditionals-2',
        name: 'Conditionals 2 | 條件句2',
        file: 'conditionals2.js',
        introduction: 'The result clause, unless, and if or when<br>結果子句、unless、if 定 when'
      },
      {
        id: 'conditionals-3',
        name: 'Conditionals 3 | 條件句3',
        file: 'conditionals3.js',
        introduction: 'Exam cloze: a real plan, some advice, a past regret<br>考試完形：一個計劃、一句忠告、一啲後悔'
      },
      {
        id: 'conditionals-4',
        name: 'Conditionals 4 | 條件句4',
        file: 'conditionals4.js',
        introduction: 'Proofreading: the underlined conditional is wrong<br>改錯：底線嘅條件句係錯嘅'
      },
      { 
        id: 'passive-voice', 
        name: 'Active/Passive Voice | 主動/被動語態', 
        file: 'passive-voice.js',
        introduction: 'Choose between active and passive voice<br>選擇主動語態定被動語態'
      },
      { 
        id: 'passive-voice-2', 
        name: 'Active/Passive Voice 2 | 主動/被動語態2', 
        file: 'passive-voice2.js',
        introduction: 'Active, passive, and -ed/-ing adjectives<br>主動被動同形容詞'
      },
      { 
        id: 'confusable-verbs', 
        name: 'Confusable Verbs & Word Forms | 易混淆動詞與詞形', 
        file: 'confusable-verbs.js',
        introduction: 'Irregular participles, lie/lay, hang, and more<br>過去分詞同易混淆動詞'
      },
      { 
        id: 'reported-speech', 
        name: 'Reported Speech | 間接引語', 
        file: 'reported-speech.js',
        introduction: 'Tell others what someone said<br>話俾人聽某人講咗咩'
      },
      { 
        id: 'phrasal-verbs', 
        name: 'Phrasal Verbs | 短語動詞', 
        file: 'phrasal-verbs.js',
        introduction: 'Use common English expressions<br>用常用英文表達'
      },
      { 
        id: 'collocations-verb-noun', 
        name: 'Collocations: Verb + Noun | 動詞+名詞', 
        file: 'collocations-verb-noun.js',
        introduction: 'Common verb + noun pairs<br>常見動詞+名詞搭配'
      },
      {
        id: 'collocations-verb-noun-2',
        name: 'Collocations: Verb + Noun 2 | 動詞+名詞2',
        file: 'collocations-verb-noun-2.js',
        introduction: 'Make, do, take or have: homework, a mistake, a photo, a shower<br>做功課、犯錯、拍照、沖涼，動詞唔可以亂揀'
      },
      {
        id: 'collocations-verb-noun-3',
        name: 'Collocations: Verb + Noun 3 | 動詞+名詞3',
        file: 'collocations-verb-noun-3.js',
        introduction: 'The same chunks inside a short school note<br>同一啲搭配放喺一段校園短文入面'
      },
      { 
        id: 'collocations-adjective-noun', 
        name: 'Collocations: Adjective + Noun | 形容詞+名詞', 
        file: 'collocations-adjective-noun.js',
        introduction: 'Natural adjective + noun pairs<br>自然嘅形容詞+名詞搭配'
      },
      {
        id: 'collocations-adjective-noun-2',
        name: 'Collocations: Adjective + Noun 2 | 形容詞+名詞2',
        file: 'collocations-adjective-noun-2.js',
        introduction: 'Heavy rain, strong wind, a sore throat: the adjective is fixed<br>大雨、強風、喉嚨痛，形容詞係固定嘅'
      },
      {
        id: 'collocations-adjective-noun-3',
        name: 'Collocations: Adjective + Noun 3 | 形容詞+名詞3',
        file: 'collocations-adjective-noun-3.js',
        introduction: 'The same pairs inside a wet morning and a school rule<br>同一啲配對放喺落雨朝早同校規入面'
      },
      { 
        id: 'collocations-verb-preposition', 
        name: 'Collocations: Verb + Preposition | 動詞+介詞', 
        file: 'collocations-verb-preposition.js',
        introduction: 'Verb + preposition patterns<br>動詞+介詞固定搭配'
      },
      {
        id: 'collocations-verb-preposition-2',
        name: 'Collocations: Verb + Preposition 2 | 動詞+介詞2',
        file: 'collocations-verb-preposition-2.js',
        introduction: 'Apologise for, belong to, consist of, rely on<br>道歉、屬於、由……組成、依靠'
      },
      {
        id: 'collocations-verb-preposition-3',
        name: 'Collocations: Verb + Preposition 3 | 動詞+介詞3',
        file: 'collocations-verb-preposition-3.js',
        introduction: 'The same prepositions inside an email and a club note<br>同一啲介詞放喺電郵同社團短文入面'
      },
      { 
        id: 'collocations-adverb-adjective', 
        name: 'Collocations: Adverb + Adjective | 副詞+形容詞', 
        file: 'collocations-adverb-adjective.js',
        introduction: 'Adverb + adjective pairs<br>副詞+形容詞搭配'
      },
      {
        id: 'collocations-adverb-adjective-2',
        name: 'Collocations: Adverb + Adjective 2 | 副詞+形容詞2',
        file: 'collocations-adverb-adjective-2.js',
        introduction: 'Fast asleep, bitterly cold, vitally important<br>熟睡、寒冷、極之重要'
      },
      {
        id: 'collocations-adverb-adjective-3',
        name: 'Collocations: Adverb + Adjective 3 | 副詞+形容詞3',
        file: 'collocations-adverb-adjective-3.js',
        introduction: 'The same pairs inside a camp night and a harbour note<br>同一啲配對放喺營夜同海港短文入面'
      },
      { 
        id: 'relative-clauses-1', 
        name: 'Relative Clauses 1: Who vs Whose | 關係從句1', 
        file: 'relative-clauses-1.js',
        introduction: 'Warm-up: possession (whose) vs subject (who)<br>熱身：whose（佢嘅⋯）同 who（主語）'
      },
      { 
        id: 'relative-clauses-2', 
        name: 'Relative Clauses 2: Defining vs non-defining | 關係從句2', 
        file: 'relative-clauses-2.js',
        introduction: 'Commas: essential info (which one?) vs extra info<br>逗號：限定（邊個？）同非限定（附加資料）'
      },
      { 
        id: 'relative-clauses-3', 
        name: 'Relative Clauses 3: Who, which, where, whose | 關係從句3', 
        file: 'relative-clauses-3.js',
        introduction: 'Pick the right relative pronoun for people, things, places, possession<br>人、物、地方、擁有關係點揀代詞'
      },
      { 
        id: 'relative-clauses-4', 
        name: 'Relative Clauses 4: + prepositions | 關係從句4', 
        file: 'relative-clauses-4.js',
        introduction: 'Formal: preposition before which/whom; spot stranded or wrong prep<br>正式寫法：介詞放關係代詞前；分辨尾置／錯介詞'
      },
      {
        id: 'relative-clauses-kaitak-1',
        name: 'Relative Clauses · Kai Tak 1 | 關係從句·啟德1',
        file: 'relative-clauses-kaitak1.js',
        introduction: 'Kai Tak: who / whom / which / where / when / whose<br>啟德：關係代詞填空'
      },
      {
        id: 'relative-clauses-kaitak-2',
        name: 'Relative Clauses · Kai Tak 2 | 關係從句·啟德2',
        file: 'relative-clauses-kaitak2.js',
        introduction: 'Kai Tak: defining vs non-defining (commas)<br>啟德：限定與非限定逗號'
      },
      {
        id: 'relative-clauses-kaitak-3',
        name: 'Relative Clauses · Kai Tak 3 | 關係從句·啟德3',
        file: 'relative-clauses-kaitak3.js',
        introduction: 'Kai Tak: in which / when / from which / at which<br>啟德：正式介詞+which'
      },
      { 
        id: 'participles-1', 
        name: 'Part of Speech: Participles 1 | 分詞詞性1', 
        file: 'participles1.js',
        introduction: 'Is it a verb (V), noun (N), clause (C), or adjective (A)?<br>分清楚係動詞、名詞、從句定形容詞'
      },
      { 
        id: 'participles-2', 
        name: 'Part of Speech: Participles 2 | 分詞詞性2', 
        file: 'participles2.js',
        introduction: 'Is it a verb (V), noun (N), clause (C), or adjective (A)?<br>分清楚係動詞、名詞、從句定形容詞'
      },
      { 
        id: 'participles-3', 
        name: 'Part of Speech: Participles 3 | 分詞詞性3', 
        file: 'participles3.js',
        introduction: 'Is it a verb (V), noun (N), clause (C), or adjective (A)?<br>分清楚係動詞、名詞、從句定形容詞'
      },
      {
        id: 'word-form-families',
        name: 'Word Form Families | 同根詞詞形',
        file: 'word-form-families.js',
        introduction: 'Same root, different jobs: noun, verb, -ing, -ed — pick the right form in context<br>同一字根：名詞、動詞、-ing、過去分詞——睇語境揀啱'
      },
      {
        id: 'word-form-families-2',
        name: 'Word Form Families 2 | 同根詞詞形2',
        file: 'word-form-families-2.js',
        introduction: 'Study, safety, and tech: same four-word bank per passage — pick noun, verb, -ing, or -ed forms<br>讀書、安全、科技語境——每段四個同根詞揀啱詞性'
      },
      {
        id: 'word-form-families-3',
        name: 'Word Form Families 3 | 同根詞詞形3',
        file: 'word-form-families-3.js',
        introduction: 'School life: organise, discuss, improve, invite, succeed, pollute<br>校園：組織、討論、進步、邀請、成功、污染'
      },
      {
        id: 'word-form-families-4',
        name: 'Word Form Families 4 | 同根詞詞形4',
        file: 'word-form-families-4.js',
        introduction: 'Feelings and news: exciting or excited, disappointing or disappointed<br>感覺同新聞：-ing 形容事物，-ed 形容人'
      }
    ];
  }

  // Load a specific topic
  async loadTopic(topicId) {
    try {
      const topic = this.availableTopics.find(t => t.id === topicId);
      if (!topic) {
        throw new Error(`Topic ${topicId} not found`);
      }

      // Load exercises from individual topic files
      const exerciseVariableName = this.getExerciseVariableName(topicId);
      const exercises = window[exerciseVariableName];
      
      if (!exercises || !Array.isArray(exercises)) {
        throw new Error(`Exercises data not found for topic ${topicId}. Make sure ${topic.file} is loaded.`);
      }
      
      if (exercises.length === 0) {
        throw new Error(`No exercises found for topic ${topicId}`);
      }

      this.topics[topicId] = {
        ...topic,
        exercises: exercises
      };
      this.currentTopic = topicId;
      this.currentExerciseIndex = 0;
      return exercises;
      
    } catch (error) {
      console.error('Error loading topic:', error);
      throw error;
    }
  }

  // Get the variable name for exercises based on topic ID
  getExerciseVariableName(topicId) {
    const mapping = {
      'articles': 'articlesExercises',
      'prepositions': 'prepositionsExercises',
      'prepositions-2': 'prepositions2Exercises',
      'prepositions-3': 'prepositions3Exercises',
      'prepositions-4': 'prepositions4Exercises',
      'tenses': 'tensesExercises',
      'tenses-2': 'simpleVsPerfectExercises',
      'tenses-3': 'tenses3Exercises',
      'tenses-4': 'tenses4Exercises',
      'tenses-5': 'tenses5Exercises',
      'tenses-6': 'tenses6Exercises',
      'tenses-7': 'tenses7Exercises',
      'articles-2': 'theOrNoTheExercises',
      'articles-3': 'articles3Exercises',
      'articles-4': 'articles4Exercises',
      'subject-verb-agreement': 'subjectVerbAgreementExercises',
      'subject-verb-agreement-2': 'subjectVerbAgreement2Exercises',
      'subject-verb-agreement-3': 'subjectVerbAgreement3Exercises',
      'countable-uncountable': 'countableUncountableExercises',
      'word-order': 'wordOrderExercises',
      'comparatives': 'comparativesExercises',
      'comparatives-2': 'comparatives2Exercises',
      'comparatives-3': 'comparatives3Exercises',
      'modal-verbs-1': 'modalVerbs1Exercises',
      'modal-verbs-2': 'modalVerbs2Exercises',
      'modal-verbs-3': 'modalVerbs3Exercises',
      'gerunds-infinitives': 'gerundsInfinitivesExercises',
      'conditionals': 'conditionalsExercises',
      'conditionals-2': 'conditionals2Exercises',
      'conditionals-3': 'conditionals3Exercises',
      'conditionals-4': 'conditionals4Exercises',
      'passive-voice': 'passiveVoiceExercises',
      'passive-voice-2': 'passiveVoice2Exercises',
      'confusable-verbs': 'confusableVerbsExercises',
      'reported-speech': 'reportedSpeechExercises',
      'phrasal-verbs': 'phrasalVerbsExercises',
      'collocations-verb-noun': 'collocationsVerbNounExercises',
      'collocations-verb-noun-2': 'collocationsVerbNoun2Exercises',
      'collocations-verb-noun-3': 'collocationsVerbNoun3Exercises',
      'collocations-adjective-noun': 'collocationsAdjectiveNounExercises',
      'collocations-adjective-noun-2': 'collocationsAdjectiveNoun2Exercises',
      'collocations-adjective-noun-3': 'collocationsAdjectiveNoun3Exercises',
      'collocations-verb-preposition': 'collocationsVerbPrepositionExercises',
      'collocations-verb-preposition-2': 'collocationsVerbPreposition2Exercises',
      'collocations-verb-preposition-3': 'collocationsVerbPreposition3Exercises',
      'collocations-adverb-adjective': 'collocationsAdverbAdjectiveExercises',
      'collocations-adverb-adjective-2': 'collocationsAdverbAdjective2Exercises',
      'collocations-adverb-adjective-3': 'collocationsAdverbAdjective3Exercises',
      'relative-clauses-1': 'relativeClauses1Exercises',
      'relative-clauses-2': 'relativeClauses2Exercises',
      'relative-clauses-3': 'relativeClauses3Exercises',
      'relative-clauses-4': 'relativeClauses4Exercises',
      'relative-clauses-kaitak-1': 'relativeClausesKaitak1Exercises',
      'relative-clauses-kaitak-2': 'relativeClausesKaitak2Exercises',
      'relative-clauses-kaitak-3': 'relativeClausesKaitak3Exercises',
      'participles-1': 'participles1Exercises',
      'participles-2': 'participles2Exercises',
      'participles-3': 'participles3Exercises',
      'word-form-families': 'wordFormFamiliesExercises',
      'word-form-families-2': 'wordFormFamilies2Exercises',
      'word-form-families-3': 'wordFormFamilies3Exercises',
      'word-form-families-4': 'wordFormFamilies4Exercises'
    };
    return mapping[topicId];
  }

  // Get current exercise
  getCurrentExercise() {
    if (!this.currentTopic || !this.topics[this.currentTopic]) {
      return null;
    }
    const exercises = this.topics[this.currentTopic].exercises;
    return exercises[this.currentExerciseIndex] || null;
  }

  // Move to next exercise
  nextExercise() {
    if (!this.currentTopic || !this.topics[this.currentTopic]) {
      return false;
    }
    const exercises = this.topics[this.currentTopic].exercises;
    if (this.currentExerciseIndex < exercises.length - 1) {
      this.currentExerciseIndex++;
      return true;
    }
    return false;
  }

  // Move to previous exercise
  previousExercise() {
    if (this.currentExerciseIndex > 0) {
      this.currentExerciseIndex--;
      return true;
    }
    return false;
  }

  // Check if there are more exercises
  hasNextExercise() {
    if (!this.currentTopic || !this.topics[this.currentTopic]) {
      return false;
    }
    const exercises = this.topics[this.currentTopic].exercises;
    return this.currentExerciseIndex < exercises.length - 1;
  }

  // Check if there are previous exercises
  hasPreviousExercise() {
    return this.currentExerciseIndex > 0;
  }

  // Get all available topics
  getAvailableTopics() {
    return this.availableTopics;
  }

  // Get current topic info
  getCurrentTopicInfo() {
    if (!this.currentTopic || !this.topics[this.currentTopic]) {
      return null;
    }
    return {
      ...this.topics[this.currentTopic],
      currentIndex: this.currentExerciseIndex,
      totalExercises: this.topics[this.currentTopic].exercises.length
    };
  }

  // Reset current topic
  resetCurrentTopic() {
    this.currentExerciseIndex = 0;
  }
}

// Initialize global topic manager
window.topicManager = new TopicManager();
