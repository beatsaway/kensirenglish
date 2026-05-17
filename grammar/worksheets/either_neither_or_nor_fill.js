/**
 * Worksheet: Either / neither / or / nor / too (fill-in)
 * 關聯詞與「都」：either…or、neither…nor、too
 * speaker / speakerZh = label above en + zh. item.answers = one per _____ (left to right).
 */
window.WORKSHEET_EITHER_NEITHER_OR_NOR_FILL = {
  id: 'either_neither_or_nor_fill',
  title: 'Either, neither, or, nor, too',
  titleZh: '關聯詞填空（either / neither / or / nor / too）',
  blankMode: 'picklist',
  picklistWords: ['either', 'neither', 'or', 'nor', 'too'],
  glossary: [
    {
      term: 'either … or',
      zh: '唔係 X 就係 Y；一係 X 一係 Y（揀其中一個／一條路）。例：Either tea or coffee.'
    },
    {
      term: 'neither … nor',
      zh: '唔 X 又唔 Y；任何一樣都唔要／都唔係。例：We have neither chocolate nor vanilla.'
    },
    {
      term: 'too / also',
      zh: '都係；同樣如此（多一個相同情況）。例：Jason finished, and Joyce did too.'
    }
  ],
  sections: [
    {
      title: 'Part 1 | Classroom',
      items: [
        {
          speaker: 'Teacher',
          speakerZh: '老師',
          en: 'Jason, you _____ do your homework _____ practise piano. If you do _____, I\'ll tell your mum. Joyce _____!',
          zh: 'Jason，你一係做功課一係練琴。如果你兩樣都唔做，我會話畀你媽咪知。Joyce 都係！',
          answers: ['either', 'or', 'neither', 'too']
        },
        {
          speaker: 'Teacher',
          speakerZh: '老師',
          en: 'Joyce, what are you doing? You\'re doing _____ Chinese _____ Maths. You should _____ be reading _____ writing. Oh I see! You\'re using the tablet to do English.',
          zh: 'Joyce，你做緊乜呀？你又唔係做中文又唔係做數學。你應該一係閱讀緊一係寫緊字。哦，我見到喇，你用部 tablet 做緊英文。',
          answers: ['neither', 'nor', 'either', 'or']
        },
        {
          speaker: 'Joyce',
          speakerZh: 'Joyce',
          en: 'I have done my homework.',
          zh: '我做晒功課啦。',
          answers: []
        },
        {
          speaker: 'Jason',
          speakerZh: 'Jason',
          en: 'Jason have done his _____.',
          zh: 'Jason 都係。',
          answers: ['too']
        },
        {
          speaker: 'Teacher',
          speakerZh: '老師',
          en: 'Please help me sharpen this pencil, and that one _____. Both were broken.',
          zh: '麻煩幫我刨呢枝鉛筆，同埋嗰枝。兩支都斷咗。',
          answers: ['too']
        },
        {
          speaker: 'Jason',
          speakerZh: 'Jason',
          en: '_____ of us knows how to use your sharpener. You _____ do it yourself _____ use mine.',
          zh: '我哋兩個都唔識用你部刨刨機。你一係自己刨一係用我呢枝。',
          answers: ['Neither', 'either', 'or']
        },
        {
          speaker: 'Teacher',
          speakerZh: '老師',
          en: '_____ of you, _____ the sharpener, are useful...',
          zh: '你兩個同呢部刨刨機都冇用……',
          answers: ['Neither', 'nor']
        }
      ]
    },
    {
      title: 'Part 2 | Mochi shop',
      items: [
        {
          speaker: 'Waiter',
          speakerZh: '侍應',
          en: 'We have only two kinds of mochi. It\'s _____ green tea _____ vanilla.',
          zh: '我哋得兩款糯米糍，一係綠茶一係雲呢拿。',
          answers: ['either', 'or']
        },
        {
          speaker: 'Joyce',
          speakerZh: 'Joyce',
          en: 'I want _____. I want chocolate.',
          zh: '我兩樣都唔要，我想要朱古力。',
          answers: ['neither']
        },
        {
          speaker: 'Jason',
          speakerZh: 'Jason',
          en: 'Me _____. I want _____ chocolate _____ nothing.',
          zh: '我都係。我要一係朱古力一係唔叫。',
          answers: ['too', 'either', 'or']
        },
        {
          speaker: 'Waiter',
          speakerZh: '侍應',
          en: 'Sorry. We now have _____ chocolate, _____ green tea, _____ vanilla.',
          zh: '唔好意思，我哋而家冇朱古力，綠茶同雲呢拿都冇。',
          answers: ['neither', 'nor', 'nor']
        },
        {
          speaker: 'Jason',
          speakerZh: 'Jason',
          en: 'Joyce, what do you think?',
          zh: 'Joyce，你點睇？',
          answers: []
        },
        {
          speaker: 'Joyce',
          speakerZh: 'Joyce',
          en: 'We could _____ order a drink, _____ some snacks, _____ just leave.',
          zh: '我哋可以一係叫嘢飲、一係叫小食，一係走人。',
          answers: ['either', 'or', 'or']
        },
        {
          speaker: 'Jason',
          speakerZh: 'Jason',
          en: 'Let\'s go. We could _____ go 7-Eleven _____ OK to get chocolate mochi.',
          zh: '走啦。我哋可以一係去 7 仔一係 OK 買朱古力糯米糍。',
          answers: ['either', 'or']
        }
      ]
    },
    {
      title: 'Part 3 | Octopus card',
      items: [
        {
          speaker: 'Joyce',
          speakerZh: 'Joyce',
          en: 'I\'ve picked up an octopus card. We could _____ give it to the MTR staff _____ the police.',
          zh: '我執到張八達通。我哋可以一係交畀港鐵職員一係交畀警方。',
          answers: ['either', 'or']
        },
        {
          speaker: 'Jason',
          speakerZh: 'Jason',
          en: '_____. We will use it to get our mochi.',
          zh: '唔好啦。我哋用嚟買糯米糍。',
          answers: ['Neither']
        }
      ]
    },
    {
      title: 'Part 4 | After school',
      items: [
        {
          en: 'After school, Jason is _____ playing basketball _____ football. If not, he\'s _____ in detention _____ sick.',
          zh: '放學後，Jason 一係打緊籃球一係踢足球；唔係嘅話，一係留堂一係病咗。',
          answers: ['either', 'or', 'either', 'or']
        },
        {
          en: 'Jason was sick yesterday. Joyce was sick, _____. The two siblings had _____ a cough, _____ a stuffy nose, _____ a sore throat. _____ of them went to school.',
          zh: 'Jason 尋日病咗，Joyce 都係。兩兄妹唔係咳就係鼻塞，一係喉嚨痛；兩個都冇返學。',
          answers: ['too', 'either', 'or', 'or', 'Neither']
        }
      ]
    }
  ]
};
