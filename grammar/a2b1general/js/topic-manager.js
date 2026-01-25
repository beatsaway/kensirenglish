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
        id: 'prepositions', 
        name: 'Prepositions | 介詞', 
        file: 'prepositions.js',
        introduction: 'Describe where, when, and how things happen<br>描述事情發生嘅地方、時間同方式'
      },
      { 
        id: 'tenses', 
        name: 'Tenses | 時態', 
        file: 'tenses.js',
        introduction: 'Express time in your conversations<br>喺對話中表達時間'
      },
      { 
        id: 'subject-verb-agreement', 
        name: 'Subject-Verb Agreement | 主謂一致', 
        file: 'subject-verb-agreement.js',
        introduction: 'Make your sentences sound natural<br>令你嘅句子聽起嚟自然'
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
        id: 'modal-verbs', 
        name: 'Modal Verbs | 情態動詞', 
        file: 'modal-verbs.js',
        introduction: 'Express ability, advice, and possibility<br>表達能力、建議同可能性'
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
        id: 'collocations-adjective-noun', 
        name: 'Collocations: Adjective + Noun | 形容詞+名詞', 
        file: 'collocations-adjective-noun.js',
        introduction: 'Natural adjective + noun pairs<br>自然嘅形容詞+名詞搭配'
      },
      { 
        id: 'collocations-verb-preposition', 
        name: 'Collocations: Verb + Preposition | 動詞+介詞', 
        file: 'collocations-verb-preposition.js',
        introduction: 'Verb + preposition patterns<br>動詞+介詞固定搭配'
      },
      { 
        id: 'collocations-adverb-adjective', 
        name: 'Collocations: Adverb + Adjective | 副詞+形容詞', 
        file: 'collocations-adverb-adjective.js',
        introduction: 'Adverb + adjective pairs<br>副詞+形容詞搭配'
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
      'tenses': 'tensesExercises',
      'subject-verb-agreement': 'subjectVerbAgreementExercises',
      'countable-uncountable': 'countableUncountableExercises',
      'word-order': 'wordOrderExercises',
      'comparatives': 'comparativesExercises',
      'comparatives-2': 'comparatives2Exercises',
      'modal-verbs': 'modalVerbsExercises',
      'gerunds-infinitives': 'gerundsInfinitivesExercises',
      'conditionals': 'conditionalsExercises',
      'passive-voice': 'passiveVoiceExercises',
      'passive-voice-2': 'passiveVoice2Exercises',
      'reported-speech': 'reportedSpeechExercises',
      'phrasal-verbs': 'phrasalVerbsExercises',
      'collocations-verb-noun': 'collocationsVerbNounExercises',
      'collocations-adjective-noun': 'collocationsAdjectiveNounExercises',
      'collocations-verb-preposition': 'collocationsVerbPrepositionExercises',
      'collocations-adverb-adjective': 'collocationsAdverbAdjectiveExercises'
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
