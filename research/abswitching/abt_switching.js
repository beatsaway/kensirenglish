// Language toggle functionality
let currentLanguage = 'zh'; // 'zh' for Chinese, 'en' for English

const translations = {
    nav: {
        logo: { zh: '雙語學習研究', en: 'Bilingual Learning Research' },
        menu: {
            abstract: { zh: '摘要', en: 'Abstract' },
            timeline: { zh: '歷史發展', en: 'Timeline' },
            recent: { zh: '最新研究', en: 'Recent Research' },
            hkResearch: { zh: '香港研究', en: 'HK Research' },
            theories: { zh: '理論發展', en: 'Theories' },
            papers: { zh: '論文分析', en: 'Papers' },
            practical: { zh: '如何應用', en: 'Use' },
            references: { zh: '參考文獻', en: 'References' }
        }
    },
    timelineItems: {
        directMethod: {
            title: { zh: '直接法 (Direct Method)', en: 'Direct Method' },
            description: {
                zh: '完全禁止使用母語，強調通過目標語言直接教學。代表人物包括François Gouin和Maximilian Berlitz。',
                en: 'Completely banned first language use, emphasizing direct teaching through the target language. Key figures include François Gouin and Maximilian Berlitz.'
            },
            scholarSummary: { zh: '學者觀點總結：', en: 'Scholar Perspectives Summary:' },
            gouin: {
                zh: '在《The Art of Teaching and Studying Languages》中提出，語言學習應該模仿兒童習得母語的過程，完全避免翻譯和語法解釋。他認為成人學習者應該通過「系列法」(Series Method)直接學習，即通過描述日常活動的連續動作來學習語言。',
                en: 'In "The Art of Teaching and Studying Languages", proposed that language learning should mimic the process of children acquiring their first language, completely avoiding translation and grammar explanation. He believed adult learners should learn directly through the "Series Method", learning language by describing sequential actions of daily activities.'
            },
            berlitz: {
                zh: '創立了Berlitz Method，堅持「不翻譯原則」。在他的教學法中，教師必須是目標語言的母語者，課堂上完全禁止使用學習者的母語。他認為翻譯會阻礙真正的語言習得，學習者應該通過直觀和聯想來理解語言。',
                en: 'Founded the Berlitz Method, insisting on the "no translation principle". In his teaching method, teachers must be native speakers of the target language, and the use of learners\' first language is completely banned in class. He believed translation would hinder true language acquisition, and learners should understand language through intuition and association.'
            },
            coreClaim: {
                zh: '「語言學習應該像兒童學習母語一樣自然，任何母語的介入都會污染這個純粹的過程。」',
                en: '"Language learning should be as natural as children learning their first language; any intervention from the first language would contaminate this pure process."'
            }
        },
        audioLingual: {
            title: { zh: '聽説法 (Audio-Lingual Method)', en: 'Audio-Lingual Method' },
            description: {
                zh: '基於行為主義心理學，強調重複練習和模式訓練，繼續排斥母語使用。',
                en: 'Based on behaviorist psychology, emphasizing repetitive practice and pattern training, continuing to reject first language use.'
            },
            scholarSummary: { zh: '學者觀點總結：', en: 'Scholar Perspectives Summary:' },
            skinner: {
                zh: '在《Verbal Behavior》中提出，語言學習是刺激-反應-強化的過程。他認為語言行為是通過環境中的強化而形成的習慣，母語的介入會產生「負遷移」，阻礙正確語言習慣的形成。',
                en: 'In "Verbal Behavior", proposed that language learning is a process of stimulus-response-reinforcement. He believed language behavior is formed through environmental reinforcement, and first language intervention would create "negative transfer", hindering the formation of correct language habits.'
            },
            fries: {
                zh: '在《Teaching and Learning English as a Foreign Language》中強調，語言學習就是「習慣形成」的過程。他主張通過大量重複練習來建立正確的語言模式，任何母語的比較都會干擾這個過程。',
                en: 'In "Teaching and Learning English as a Foreign Language", emphasized that language learning is a process of "habit formation". He advocated establishing correct language patterns through extensive repetitive practice, and any comparison with the first language would interfere with this process.'
            },
            lado: {
                zh: '在《Linguistics Across Cultures》中提出「對比分析假設」，認為母語和外語的差異是學習困難的根源。他建議通過結構化練習來克服這些差異，而不是通過母語解釋。',
                en: 'In "Linguistics Across Cultures", proposed the "Contrastive Analysis Hypothesis", believing that differences between first and foreign languages are the root of learning difficulties. He suggested overcoming these differences through structured practice rather than first language explanation.'
            },
            coreClaim: {
                zh: '「語言學習是習慣形成的過程，母語的介入會產生干擾，必須通過重複練習來建立正確的語言習慣。」',
                en: '"Language learning is a process of habit formation; first language intervention creates interference, and correct language habits must be established through repetitive practice."'
            }
        },
        communicative: {
            title: { zh: '交際法興起', en: 'Rise of Communicative Approach' },
            description: {
                zh: '開始關注語言的功能性使用，但仍對母語使用持謹慎態度。',
                en: 'Began to focus on functional language use, but remained cautious about first language use.'
            },
            scholarSummary: { zh: '學者觀點總結：', en: 'Scholar Perspectives Summary:' },
            hymes: {
                zh: '提出「交際能力」(Communicative Competence)概念，強調語言學習不僅要掌握語法規則，更要學會在適當的社會情境中使用語言。他認為語言學習應該關注語用功能，但仍建議盡量使用目標語言進行交際。',
                en: 'Proposed the concept of "Communicative Competence", emphasizing that language learning should not only master grammar rules but also learn to use language in appropriate social contexts. He believed language learning should focus on pragmatic functions, but still recommended using the target language as much as possible for communication.'
            },
            halliday: {
                zh: '在《Explorations in the Functions of Language》中提出系統功能語法，強調語言的功能性。他認為語言學習應該關注語言的社會功能，但對母語在課堂中的使用仍持保守態度。',
                en: 'In "Explorations in the Functions of Language", proposed systemic functional grammar, emphasizing language functionality. He believed language learning should focus on the social functions of language, but remained conservative about first language use in the classroom.'
            },
            krashen: {
                zh: '提出「監控模式」(Monitor Model)，強調「可理解輸入」的重要性。他認為學習者需要大量的外語輸入，母語的使用應該最小化，以免干擾「習得」過程。',
                en: 'Proposed the "Monitor Model", emphasizing the importance of "comprehensible input". He believed learners need extensive foreign language input, and first language use should be minimized to avoid interfering with the "acquisition" process.'
            },
            coreClaim: {
                zh: '「語言學習的目標是交際能力，但這主要通過目標語言的沉浸式使用來實現。」',
                en: '"The goal of language learning is communicative competence, but this is mainly achieved through immersive use of the target language."'
            }
        },
        cognitive: {
            title: { zh: '認知轉向', en: 'Cognitive Turn' },
            description: {
                zh: '研究開始認識到母語在認知過程中的重要作用，Vivian Cook提出「多能力」(Multi-competence)概念。',
                en: 'Research began to recognize the important role of first language in cognitive processes. Vivian Cook proposed the "Multi-competence" concept.'
            },
            scholarSummary: { zh: '學者觀點總結：', en: 'Scholar Perspectives Summary:' },
            cook: {
                zh: '在《Second Language Learning and Language Teaching》中提出「多能力」理論，挑戰了以母語者為標準的傳統觀念。他認為雙語者具有獨特的認知優勢，母語和外語形成一個整合的語言系統，而不是兩個分離的系統。',
                en: 'In "Second Language Learning and Language Teaching", proposed the "Multi-competence" theory, challenging the traditional notion of native speakers as the standard. He believed bilinguals have unique cognitive advantages, and first and foreign languages form an integrated language system rather than two separate systems.'
            },
            bialystok: {
                zh: '在《Language Processing in Bilingual Children》中通過認知心理學研究證明，雙語者在執行控制、注意力轉換和元認知方面具有優勢。她認為母語和外語的互動是積極的，而不是相互干擾。',
                en: 'In "Language Processing in Bilingual Children", through cognitive psychology research, proved that bilinguals have advantages in executive control, attention switching, and metacognition. She believed the interaction between first and foreign languages is positive rather than mutually interfering.'
            },
            cummins: {
                zh: '提出「語言相互依賴假設」(Linguistic Interdependence Hypothesis)，認為母語和外語之間存在積極的相互影響。他強調母語的認知基礎對外語學習的重要支持作用。',
                en: 'Proposed the "Linguistic Interdependence Hypothesis", believing there is positive mutual influence between first and foreign languages. He emphasized the important supportive role of first language cognitive foundation for foreign language learning.'
            },
            coreClaim: {
                zh: '「雙語者不是兩個單語者的組合，而是一個具有獨特認知優勢的整合系統。」',
                en: '"Bilinguals are not a combination of two monolinguals, but an integrated system with unique cognitive advantages."'
            }
        }
    },
    abstract: {
        title: {
            zh: '廣東話係咪學英文嘅障礙？作為香港人，到底點先可以學好英文外語？',
            en: 'Is Cantonese an Obstacle to Learning English? How Can Hong Kongers Master English as a Foreign Language?'
        },
        subtitle: {
            zh: '雙語學習研究：從「禁止中文」到「戰略性使用中文」',
            en: 'Bilingual Learning Research: From "Banning Chinese" to "Strategic Use of Chinese"'
        },
        content: {
            zh: '本頁探討了第二語言學習中母語使用的歷史發展，從早期的「直接法」到現代的「跨語言教學法」。研究顯示，對母語在外語學習中角色的理解經歷了重大轉變，從完全排斥到戰略性使用，反映了語言學習理論的演進和對雙語認知過程的深入理解。現代科學證據強烈支持將中文視為學習英文的寶貴資源，而非需要避免的障礙。',
            en: 'This page explores the historical development of first language use in second language learning, from the early "Direct Method" to modern "Translanguaging Pedagogy". Research shows that understanding of the role of the first language in foreign language learning has undergone significant transformation, from complete exclusion to strategic use, reflecting the evolution of language learning theory and deeper understanding of bilingual cognitive processes. Modern scientific evidence strongly supports viewing Chinese as a valuable resource for learning English, rather than an obstacle to avoid.'
        }
    },
    timeline: {
        title: { zh: '歷史發展時間線', en: 'Historical Development Timeline' },
        theorySummary: {
            zh: '🔬 理論發展總結',
            en: '🔬 Theory Development Summary'
        },
        theoryContent: {
            zh: '從1880年代的「直接法」完全禁止母語使用，到2020年代的「跨語言教學法」將母語視為寶貴資源，語言學習理論經歷了根本性轉變。現代神經科學研究證實，母語和外語在大腦中形成相互關聯的系統，戰略性使用母語不僅不會干擾外語學習，反而能顯著提升學習效果。',
            en: 'From the 1880s "Direct Method" that completely banned first language use to the 2020s "Translanguaging Pedagogy" that views the first language as a valuable resource, language learning theory has undergone fundamental transformation. Modern neuroscience research confirms that first and foreign languages form interconnected systems in the brain, and strategic use of the first language not only does not interfere with foreign language learning but can significantly enhance learning effectiveness.'
        }
    },
    recent: {
        translanguaging: {
            title: { zh: '🌐 跨語言教學法 (2000s-現在)', en: '🌐 Translanguaging Pedagogy (2000s-Present)' },
            intro: {
                zh: 'Ofelia García等學者提出Translanguaging理論，將母語視為寶貴的學習資源而非障礙。',
                en: 'Scholars like Ofelia García proposed Translanguaging theory, viewing the first language as a valuable learning resource rather than an obstacle.'
            },
            scholarSummary: { zh: '學者觀點總結：', en: 'Scholar Perspectives Summary:' },
            garciaLiwei: {
                zh: '在《Translanguaging: Language, Bilingualism and Education》中提出「跨語言」概念，認為雙語者的語言使用是流動的、動態的，不應該被限制在傳統的語言邊界內。',
                en: 'In "Translanguaging: Language, Bilingualism and Education", proposed the "translanguaging" concept, believing that bilinguals\' language use is fluid and dynamic, and should not be restricted within traditional language boundaries.'
            },
            creeseBlackledge: {
                zh: '通過課堂實證研究證明，允許和鼓勵語言切換的教學環境能夠提高學習者的參與度和理解力。',
                en: 'Through classroom empirical research, proved that teaching environments that allow and encourage language switching can improve learners\' engagement and comprehension.'
            },
            garciaKleyn: {
                zh: '提出跨語言教學法不僅是一種教學策略，更是一種教育哲學，它承認和慶祝學習者的多語言身份。',
                en: 'Proposed that translanguaging pedagogy is not just a teaching strategy, but an educational philosophy that acknowledges and celebrates learners\' multilingual identity.'
            },
            coreClaim: {
                zh: '「跨語言不是語言之間的切換，而是雙語者使用其完整語言庫進行意義建構的過程。」',
                en: '"Translanguaging is not switching between languages, but a process where bilinguals use their complete linguistic repertoire for meaning-making."'
            }
        },
        title: { zh: '最新研究發現 (2020s)', en: 'Recent Research Findings (2020s)' },
        researchCards: {
            bilingualSubtitles: {
                title: { zh: '雙語字幕的認知優勢', en: 'Cognitive Advantages of Bilingual Subtitles' },
                wangFinding: {
                    zh: '研究發現：',
                    en: 'Research Finding: '
                },
                wangContent: {
                    zh: '雙語字幕在詞彙習得方面具有顯著優勢。雖然母語有時會與外語形式產生競爭，但在教育媒體中整合母語可以支持學習者對新詞彙的理解。',
                    en: 'Bilingual subtitles have significant advantages in vocabulary acquisition. Although the first language sometimes competes with foreign language forms, integrating the first language in educational media can support learners\' understanding of new vocabulary.'
                },
                yuanFinding: {
                    zh: '進一步證實：',
                    en: 'Further Confirmation: '
                },
                yuanContent: {
                    zh: '雙語字幕比純外語或純母語字幕更能促進偶然詞彙學習，這表明母語在外語語境中提供關鍵支持，通過提供即時的認知資源來幫助詞彙記憶。',
                    en: 'Bilingual subtitles promote incidental vocabulary learning better than foreign-language-only or first-language-only subtitles, indicating that the first language provides crucial support in foreign language contexts by offering immediate cognitive resources for vocabulary memory.'
                },
                practical: {
                    zh: '實務應用：',
                    en: 'Practical Application: '
                },
                practicalContent: {
                    zh: '在英語學習視頻中使用中英雙語字幕可以顯著提高香港學生的詞彙習得效果。',
                    en: 'Using Chinese-English bilingual subtitles in English learning videos can significantly improve vocabulary acquisition effectiveness for Hong Kong students.'
                }
            },
            desirableDifficulties: {
                title: { zh: '「理想困難」概念', en: 'Concept of "Desirable Difficulties"' },
                bogulskiFinding: {
                    zh: '的突破性發現：',
                    en: ' Breakthrough Finding: '
                },
                bogulskiContent: {
                    zh: '雙語呈現「理想困難」(Desirable Difficulties)，雙語者通過調節努力來管理其主導和非主導語言，這種技能發展有助於外語學習。',
                    en: 'Bilingualism presents "Desirable Difficulties", where bilinguals manage their dominant and non-dominant languages by regulating effort, and this skill development aids foreign language learning.'
                },
                zengFinding: {
                    zh: '認知機制研究：',
                    en: ' Cognitive Mechanism Research: '
                },
                zengContent: {
                    zh: '在外語詞彙處理過程中訪問母語所涉及的認知操作可以增強詞彙訪問，而不是阻礙它。跨語言互動實際上有助於詞彙處理。',
                    en: 'The cognitive operations involved in accessing the first language during foreign language vocabulary processing can enhance vocabulary access rather than hinder it. Cross-linguistic interaction actually facilitates vocabulary processing.'
                },
                cognitiveAdvantage: {
                    zh: '認知優勢：',
                    en: 'Cognitive Advantage: '
                },
                cognitiveContent: {
                    zh: '雙語者面臨的「困難」實際上是促進深度學習的認知挑戰。',
                    en: 'The "difficulties" faced by bilinguals are actually cognitive challenges that promote deep learning.'
                }
            },
            collaborativeLearning: {
                title: { zh: '協作學習中的語言切換', en: 'Language Switching in Collaborative Learning' },
                urzuaFinding: {
                    zh: '最新實證研究：',
                    en: ' Latest Empirical Research: '
                },
                urzuaContent: {
                    zh: '允許學生在母語和外語之間切換可以增強協作學習體驗。這種跨語言實踐讓學生更充分地參與並改善理解。',
                    en: 'Allowing students to switch between their first language and foreign language can enhance collaborative learning experiences. This translanguaging practice enables students to participate more fully and improves comprehension.'
                },
                garciaSupport: {
                    zh: '理論支持：',
                    en: ' Theoretical Support: '
                },
                garciaSupportContent: {
                    zh: '採用跨語言視角讓教育者能夠利用學生的完整語言庫，強化母語作為資源而非障礙的角色。',
                    en: 'Adopting a translanguaging perspective enables educators to leverage students\' complete linguistic repertoire, reinforcing the first language\'s role as a resource rather than an obstacle.'
                },
                teachingImplication: {
                    zh: '教學啟示：',
                    en: ' Teaching Implication: '
                },
                teachingContent: {
                    zh: '在課堂活動中鼓勵語言切換可以提高學習參與度和理解效果。',
                    en: 'Encouraging language switching in classroom activities can improve learning engagement and comprehension effectiveness.'
                }
            },
            neuroscience: {
                title: { zh: '注意力控制的神經科學證據', en: 'Neuroscience Evidence for Attention Control' },
                verbeekFinding: {
                    zh: '神經科學研究：',
                    en: ' Neuroscience Research: '
                },
                verbeekContent: {
                    zh: '雙語兒童表現出獨特的注意力控制模式，促進跨語言詞彙識別，證實了使用母語來增強與外語學習相關的認知過程的必要性。',
                    en: 'Bilingual children exhibit unique attention control patterns that facilitate cross-linguistic vocabulary recognition, confirming the necessity of using the first language to enhance cognitive processes related to foreign language learning.'
                },
                jiangFinding: {
                    zh: '神經表徵研究：',
                    en: ' Neural Representation Research: '
                },
                jiangContent: {
                    zh: '母語和外語在語言神經表徵中的相互關聯性，進一步支持在外語教育中戰略性使用母語的案例。',
                    en: 'The interconnections between first and foreign languages in linguistic neural representations further support the case for strategic use of the first language in foreign language education.'
                },
                scientificBasis: {
                    zh: '科學依據：',
                    en: ' Scientific Basis: '
                },
                scientificContent: {
                    zh: '神經科學證據顯示母語和外語在大腦中是相互關聯的系統。',
                    en: 'Neuroscience evidence shows that first and foreign languages are interconnected systems in the brain.'
                }
            }
        },
        modernInsights: {
            title: { zh: '🚀 現代研究啟示', en: '🚀 Modern Research Insights' },
            content: {
                zh: '最新研究證實了跨語言教學法的科學基礎：雙語字幕、理想困難概念、協作學習中的語言切換，以及神經科學證據都指向同一個結論——<strong>母語是外語學習的寶貴資源，而非需要避免的障礙</strong>。這些發現為香港的雙語教育提供了強有力的科學支撐。',
                en: 'Recent research confirms the scientific foundation of translanguaging pedagogy: bilingual subtitles, the concept of desirable difficulties, language switching in collaborative learning, and neuroscience evidence all point to the same conclusion—<strong>the first language is a valuable resource for foreign language learning, not an obstacle to avoid</strong>. These findings provide strong scientific support for bilingual education in Hong Kong.'
            }
        }
    },
    hkResearch: {
        title: { zh: '香港雙語教育實證研究', en: 'Hong Kong Bilingual Education Empirical Research' },
        cards: {
            universitySupport: {
                title: { zh: '大學英語教學中的母語支持', en: 'First Language Support in University English Teaching' },
                punFinding: {
                    zh: '香港大學研究：',
                    en: ' Hong Kong University Research: '
                },
                punContent: {
                    zh: '研究香港以英語為教學語言的大學中學生面臨的挑戰。發現學生經常依賴母語來應對學術挑戰並發展有效的學習策略，特別是在處理複雜材料時，這些材料用外語可能難以理解。',
                    en: 'Research on challenges faced by students in Hong Kong universities where English is the medium of instruction. Found that students frequently rely on their first language to cope with academic challenges and develop effective learning strategies, especially when processing complex materials that may be difficult to understand in a foreign language.'
                },
                implication: {
                    zh: '香港教育啟示：',
                    en: ' Hong Kong Education Implication: '
                },
                implicationContent: {
                    zh: '在英語主導的教育系統中，母語作為認知資源在克服教育障礙方面發揮重要作用。',
                    en: 'In English-dominant education systems, the first language plays an important role as a cognitive resource in overcoming educational barriers.'
                }
            },
            emiClassroom: {
                title: { zh: 'EMI課堂中的跨語言實踐', en: 'Translanguaging Practices in EMI Classrooms' },
                taiFinding: {
                    zh: '英語媒介教學研究：',
                    en: ' English Medium Instruction Research: '
                },
                taiContent: {
                    zh: '探索香港英語媒介教學(EMI)課堂中跨語言實踐的採用。研究發現，允許學生在母語（粵語或普通話）和外語（英語）之間切換不僅能營造更吸引人的學習環境，還能增強理解和參與度。',
                    en: 'Explored the adoption of translanguaging practices in Hong Kong English Medium Instruction (EMI) classrooms. Research found that allowing students to switch between their first language (Cantonese or Mandarin) and foreign language (English) not only creates a more engaging learning environment but also enhances understanding and participation.'
                },
                dornyeiSupport: {
                    zh: '動機理論支持：',
                    en: ' Motivation Theory Support: '
                },
                dornyeiContent: {
                    zh: '外語動機自我系統分析強調母語學習經驗作為外語語境中動機和參與度強預測因子的重要性。',
                    en: 'Analysis of the L2 motivational self-system emphasizes the importance of first language learning experiences as strong predictors of motivation and engagement in foreign language contexts.'
                },
                practice: {
                    zh: '教學實踐：',
                    en: ' Teaching Practice: '
                },
                practiceContent: {
                    zh: '在多元語言課堂中，母語作為意義建構工具在促進外語習得方面發揮關鍵作用。',
                    en: 'In multilingual classrooms, the first language plays a key role as a meaning-making tool in promoting foreign language acquisition.'
                }
            },
            languageInteraction: {
                title: { zh: '外語學習中的語言互動', en: 'Language Interaction in Foreign Language Learning' },
                chanFinding: {
                    zh: '中文外語學習研究：',
                    en: ' Chinese Foreign Language Learning Research: '
                },
                chanContent: {
                    zh: '關注香港學生學習中文作為外語的獨特語言習得經驗。範圍審查建議，母語和外語學習之間的相互作用需要進一步研究有效的教學策略，利用學習者的語言背景作為外語教學的支架。',
                    en: 'Focused on the unique language acquisition experiences of Hong Kong students learning Chinese as a foreign language. The scoping review suggests that the interaction between first and foreign language learning requires further research on effective teaching strategies that leverage learners\' linguistic backgrounds as scaffolding for foreign language teaching.'
                },
                zhuFinding: {
                    zh: '小學互動策略研究：',
                    en: ' Primary School Interaction Strategy Research: '
                },
                zhuContent: {
                    zh: '識別小學生在母語和外語小組討論中使用的互動策略模式，表明在兩種語言中掌握相似策略可以增強交際能力。',
                    en: 'Identified patterns of interaction strategies used by primary school students in first and foreign language group discussions, indicating that mastering similar strategies in both languages can enhance communicative competence.'
                },
                strategy: {
                    zh: '策略轉移：',
                    en: ' Strategy Transfer: '
                },
                strategyContent: {
                    zh: '母語和外語之間的策略轉移是雙語學習的重要組成部分。',
                    en: 'Strategy transfer between first and foreign languages is an important component of bilingual learning.'
                }
            },
            culturalBackground: {
                title: { zh: '文化語言背景對詞彙習得的影響', en: 'Impact of Cultural-Linguistic Background on Vocabulary Acquisition' },
                wongFinding: {
                    zh: '雙語兒童詞彙研究：',
                    en: ' Bilingual Children Vocabulary Research: '
                },
                wongContent: {
                    zh: '分析文化和語言背景對雙語兒童詞彙習得的影響，揭示利用母語的教學方法可以提升外語學習成果。研究特別關注香港雙語環境下的詞彙發展模式。',
                    en: 'Analyzed the impact of cultural and linguistic backgrounds on vocabulary acquisition among bilingual children, revealing that teaching methods that leverage the first language can enhance foreign language learning outcomes. The research particularly focused on vocabulary development patterns in Hong Kong\'s bilingual environment.'
                },
                vocabularyTeaching: {
                    zh: '詞彙教學：',
                    en: ' Vocabulary Teaching: '
                },
                vocabularyContent: {
                    zh: '利用母語文化背景的教學方法能顯著改善外語詞彙習得效果。',
                    en: 'Teaching methods that leverage first language cultural backgrounds can significantly improve foreign language vocabulary acquisition effectiveness.'
                }
            }
        }
    },
    theories: {
        title: { zh: '關鍵理論發展', en: 'Key Theory Development' },
        multiCompetence: {
            title: { zh: '1. Multi-competence 理論 (Cook, 1991)', en: '1. Multi-competence Theory (Cook, 1991)' },
            content: {
                zh: 'Vivian Cook挑戰了以母語者為標準的傳統觀念，提出雙語者具有獨特的「多能力」，這不是兩種單語能力的簡單相加，而是一個整合的語言系統。',
                en: 'Vivian Cook challenged the traditional notion of native speakers as the standard, proposing that bilinguals have unique "multi-competence", which is not simply the addition of two monolingual abilities, but an integrated language system.'
            },
            coreView: {
                zh: '核心觀點：',
                en: 'Core View: '
            },
            coreContent: {
                zh: '雙語者的語言能力應該被視為一個整體系統，而不是兩個分離的單語系統。',
                en: 'Bilinguals\' language abilities should be viewed as an integrated system rather than two separate monolingual systems.'
            }
        },
        translanguaging: {
            title: { zh: '2. 跨語言理論 (Translanguaging)', en: '2. Translanguaging Theory' },
            content: {
                zh: '由Ofelia García和Li Wei發展的理論，將語言切換視為雙語者的自然認知過程，而不是需要避免的干擾。',
                en: 'A theory developed by Ofelia García and Li Wei, viewing language switching as a natural cognitive process for bilinguals rather than interference to be avoided.'
            }
        },
        cognitiveLoad: {
            title: { zh: '3. 認知負荷理論 (Cognitive Load Theory)', en: '3. Cognitive Load Theory' },
            content: {
                zh: 'Sweller的理論支持在複雜學習任務中使用母語來減少認知負荷，讓學習者能夠專注於新內容的學習。',
                en: 'Sweller\'s theory supports using the first language in complex learning tasks to reduce cognitive load, allowing learners to focus on learning new content.'
            }
        }
    },
    papers: {
        title: { zh: '關鍵研究論文分析', en: 'Key Research Paper Analysis' },
        auerbach: {
            title: { zh: '挑戰「英語專用」政策', en: 'Challenging "English Only" Policy' },
            background: {
                zh: '研究背景：',
                en: 'Research Background: '
            },
            backgroundContent: {
                zh: '在1990年代，ESL課堂普遍實行「英語專用」政策，完全禁止使用學習者的母語。',
                en: 'In the 1990s, ESL classrooms commonly implemented "English Only" policies, completely banning the use of learners\' first language.'
            },
            mainPoints: {
                zh: '主要論點：',
                en: 'Main Arguments: '
            },
            points: {
                reality: { zh: '現實性問題：完全禁止母語在實際教學中是不現實的', en: 'Reality Issue: Completely banning the first language is unrealistic in actual teaching' },
                efficiency: { zh: '效率問題：用母語解釋複雜概念比用外語更有效', en: 'Efficiency Issue: Explaining complex concepts in the first language is more effective than in a foreign language' },
                power: { zh: '權力關係：「英語專用」政策反映了語言權力不平等', en: 'Power Relations: "English Only" policies reflect linguistic power inequality' },
                needs: { zh: '學習者需求：成人學習者需要母語支持來理解抽象概念', en: 'Learner Needs: Adult learners need first language support to understand abstract concepts' }
            },
            suggestion: {
                zh: '實務建議：',
                en: 'Practical Recommendation: '
            },
            suggestionContent: {
                zh: '允許在特定情況下使用母語，如解釋語法規則、澄清文化概念、給予複雜指示等。',
                en: 'Allow first language use in specific situations, such as explaining grammar rules, clarifying cultural concepts, giving complex instructions, etc.'
            },
            finding: {
                zh: '核心發現：',
                en: 'Core Finding: '
            },
            findingContent: {
                zh: '「英語專用」政策不僅無效，而且可能阻礙學習者的認知發展和情感安全。',
                en: '"English Only" policies are not only ineffective but may also hinder learners\' cognitive development and emotional security.'
            }
        },
        cook: {
            title: { zh: '多能力理論的奠基', en: 'Foundation of Multi-competence Theory' },
            breakthrough: {
                zh: '理論突破：',
                en: 'Theoretical Breakthrough: '
            },
            breakthroughContent: {
                zh: '挑戰了以母語者為標準的傳統觀念，提出雙語者具有獨特的「多能力」。',
                en: 'Challenged the traditional notion of native speakers as the standard, proposing that bilinguals have unique "multi-competence".'
            },
            concepts: {
                zh: '核心概念：',
                en: 'Core Concepts: '
            },
            conceptItems: {
                definition: { zh: '多能力定義：雙語者的語言能力不是兩個單語系統的簡單相加', en: 'Multi-competence Definition: Bilinguals\' language abilities are not simply the addition of two monolingual systems' },
                integration: { zh: '整合系統：母語和外語形成一個整合的認知系統', en: 'Integrated System: First and foreign languages form an integrated cognitive system' },
                advantage: { zh: '獨特優勢：雙語者具有單語者沒有的認知優勢', en: 'Unique Advantage: Bilinguals have cognitive advantages that monolinguals do not have' },
                standard: { zh: '標準重設：不應以母語者為唯一標準', en: 'Standard Reset: Native speakers should not be the only standard' }
            },
            implication: {
                zh: '教學啟示：',
                en: 'Teaching Implication: '
            },
            implicationContent: {
                zh: '承認並利用學習者的雙語能力，而不是試圖壓制母語。',
                en: 'Acknowledge and leverage learners\' bilingual abilities rather than attempting to suppress the first language.'
            },
            view: {
                zh: '革命性觀點：',
                en: 'Revolutionary View: '
            },
            viewContent: {
                zh: '雙語能力本身就是一種優勢，而不是對單語能力的偏離。',
                en: 'Bilingual ability itself is an advantage rather than a deviation from monolingual ability.'
            }
        },
        garciaLiwei: {
            title: { zh: '跨語言教學法', en: 'Translanguaging Pedagogy' },
            innovation: {
                zh: '理論創新：',
                en: 'Theoretical Innovation: '
            },
            innovationContent: {
                zh: '提出「Translanguaging」概念，重新定義雙語教育中的語言使用。',
                en: 'Proposed the "Translanguaging" concept, redefining language use in bilingual education.'
            },
            views: {
                zh: '核心觀點：',
                en: 'Core Views: '
            },
            viewItems: {
                fluidity: { zh: '語言流動性：雙語者的語言使用是流動的，不是固定的', en: 'Linguistic Fluidity: Bilinguals\' language use is fluid, not fixed' },
                integration: { zh: '認知整合：母語和外語在認知層面是整合的', en: 'Cognitive Integration: First and foreign languages are integrated at the cognitive level' },
                strategy: { zh: '教學策略：有意識地利用跨語言能力進行教學', en: 'Teaching Strategy: Consciously leverage translanguaging abilities for teaching' },
                identity: { zh: '身份認同：支持學習者的多語言身份', en: 'Identity: Support learners\' multilingual identity' }
            },
            application: {
                zh: '實踐應用：',
                en: 'Practical Application: '
            },
            applicationContent: {
                zh: '設計允許和鼓勵語言切換的教學活動，如用母語思考、外語表達等。',
                en: 'Design teaching activities that allow and encourage language switching, such as thinking in the first language and expressing in a foreign language.'
            },
            standard: {
                zh: '現代標準：',
                en: 'Modern Standard: '
            },
            standardContent: {
                zh: 'Translanguaging已成為現代雙語教育的核心概念。',
                en: 'Translanguaging has become a core concept in modern bilingual education.'
            }
        },
        nation: {
            title: { zh: '母語的戰略性角色', en: 'Strategic Role of First Language' },
            orientation: {
                zh: '實務導向：',
                en: 'Practice-Oriented: '
            },
            orientationContent: {
                zh: '從實際教學角度分析母語在EFL學習中的具體作用。',
                en: 'Analyzed the specific role of the first language in EFL learning from a practical teaching perspective.'
            },
            scenarios: {
                zh: '母語使用場景：',
                en: 'First Language Use Scenarios: '
            },
            scenarioItems: {
                grammar: { zh: '語法解釋：用母語解釋複雜語法概念更有效', en: 'Grammar Explanation: Explaining complex grammar concepts in the first language is more effective' },
                vocabulary: { zh: '詞彙學習：母語翻譯有助於詞彙記憶', en: 'Vocabulary Learning: First language translation aids vocabulary memory' },
                culture: { zh: '文化理解：母語幫助理解文化背景', en: 'Cultural Understanding: First language helps understand cultural background' },
                emotion: { zh: '情感支持：降低學習焦慮，提高信心', en: 'Emotional Support: Reduces learning anxiety and increases confidence' }
            },
            principle: {
                zh: '平衡原則：',
                en: 'Balance Principle: '
            },
            principleContent: {
                zh: '大部分時間使用外語，但在特定情況下戰略性使用母語。',
                en: 'Use foreign language most of the time, but strategically use the first language in specific situations.'
            },
            advice: {
                zh: '實用建議：',
                en: 'Practical Advice: '
            },
            adviceContent: {
                zh: '「關鍵不是是否使用母語，而是如何明智地使用它。」',
                en: '"The key is not whether to use the first language, but how to use it wisely."'
            }
        },
        macaro: {
            title: { zh: '教師的語言選擇', en: 'Teacher Language Choice' },
            perspective: {
                zh: '教師視角：',
                en: 'Teacher Perspective: '
            },
            perspectiveContent: {
                zh: '研究教師在課堂中的語言切換決策過程。',
                en: 'Research on teachers\' language switching decision-making processes in the classroom.'
            },
            factors: {
                zh: '決策因素：',
                en: 'Decision Factors: '
            },
            factorItems: {
                level: { zh: '學習者水平：初學者需要更多母語支持', en: 'Learner Level: Beginners need more first language support' },
                complexity: { zh: '任務複雜度：複雜任務需要母語輔助', en: 'Task Complexity: Complex tasks require first language assistance' },
                efficiency: { zh: '時間效率：母語可以節省解釋時間', en: 'Time Efficiency: First language can save explanation time' },
                emotion: { zh: '情感因素：母語提供情感支持', en: 'Emotional Factor: First language provides emotional support' }
            },
            development: {
                zh: '專業發展：',
                en: 'Professional Development: '
            },
            developmentContent: {
                zh: '教師需要培訓如何做出明智的語言選擇決策。',
                en: 'Teachers need training on how to make wise language choice decisions.'
            },
            finding: {
                zh: '研究發現：',
                en: 'Research Finding: '
            },
            findingContent: {
                zh: '經驗豐富的教師更善於在母語和外語之間做出平衡選擇。',
                en: 'Experienced teachers are better at making balanced choices between first and foreign languages.'
            }
        },
        cummins: {
            title: { zh: '跨語言轉移理論', en: 'Cross-Linguistic Transfer Theory' },
            foundation: {
                zh: '認知基礎：',
                en: 'Cognitive Foundation: '
            },
            foundationContent: {
                zh: '從認知角度解釋母語如何支持外語學習。',
                en: 'Explains from a cognitive perspective how the first language supports foreign language learning.'
            },
            mechanisms: {
                zh: '轉移機制：',
                en: 'Transfer Mechanisms: '
            },
            mechanismItems: {
                concept: { zh: '概念轉移：母語的概念知識有助於外語理解', en: 'Conceptual Transfer: First language conceptual knowledge aids foreign language understanding' },
                metacognitive: { zh: '元認知轉移：母語的學習策略可應用於外語', en: 'Metacognitive Transfer: First language learning strategies can be applied to foreign language' },
                awareness: { zh: '語言意識：比較兩種語言增強語言意識', en: 'Language Awareness: Comparing two languages enhances language awareness' },
                identity: { zh: '身份整合：支持學習者的多語言身份', en: 'Identity Integration: Supports learners\' multilingual identity' }
            },
            implication: {
                zh: '教學啟示：',
                en: 'Teaching Implication: '
            },
            implicationContent: {
                zh: '設計利用跨語言轉移的教學活動。',
                en: 'Design teaching activities that leverage cross-linguistic transfer.'
            },
            view: {
                zh: '核心觀點：',
                en: 'Core View: '
            },
            viewContent: {
                zh: '母語和外語之間存在積極的相互影響，而不是相互干擾。',
                en: 'There is positive mutual influence between first and foreign languages rather than mutual interference.'
            }
        },
        sweller: {
            title: { zh: '認知負荷理論', en: 'Cognitive Load Theory' },
            foundation: {
                zh: '認知科學基礎：',
                en: 'Cognitive Science Foundation: '
            },
            foundationContent: {
                zh: '從認知科學角度解釋為什麼母語有助於外語學習。',
                en: 'Explains from a cognitive science perspective why the first language aids foreign language learning.'
            },
            loadTypes: {
                zh: '負荷類型：',
                en: 'Load Types: '
            },
            loadItems: {
                intrinsic: { zh: '內在負荷：學習內容本身的複雜度', en: 'Intrinsic Load: The complexity of the learning content itself' },
                extraneous: { zh: '外在負荷：教學設計造成的額外負荷', en: 'Extraneous Load: Additional load caused by instructional design' },
                germane: { zh: '相關負荷：用於學習的認知資源', en: 'Germane Load: Cognitive resources used for learning' }
            },
            role: {
                zh: '母語的作用：',
                en: 'Role of First Language: '
            },
            roleContent: {
                zh: '使用母語可以減少外在認知負荷，讓學習者專注於新內容的學習。',
                en: 'Using the first language can reduce extraneous cognitive load, allowing learners to focus on learning new content.'
            },
            basis: {
                zh: '科學依據：',
                en: 'Scientific Basis: '
            },
            basisContent: {
                zh: '認知負荷理論為母語的戰略性使用提供了科學基礎。',
                en: 'Cognitive Load Theory provides a scientific basis for the strategic use of the first language.'
            }
        }
    },
    practical: {
        title: { zh: '實務應用建議', en: 'Practical Application Recommendations' },
        principles: {
            title: { zh: '戰略性母語使用原則', en: 'Principles of Strategic First Language Use' },
            items: {
                purpose: { zh: '🎯 目的性：用於特定目的，如解釋複雜概念、給予指示、檢查理解', en: '🎯 Purpose: Use for specific purposes, such as explaining complex concepts, giving instructions, checking understanding' },
                learner: { zh: '👥 學習者中心：根據學習者水平調整母語使用量', en: '👥 Learner-Centered: Adjust first language use based on learner level' },
                progressive: { zh: '📈 漸進性：隨著外語水平提高，逐步減少母語依賴', en: '📈 Progressive: Gradually reduce first language dependence as foreign language proficiency improves' }
            }
        },
        scenarios: {
            title: { zh: '具體應用場景', en: 'Specific Application Scenarios' },
            items: {
                grammar: { zh: '📚 解釋抽象的語法概念', en: '📚 Explain abstract grammar concepts' },
                culture: { zh: '🌍 澄清文化背景知識', en: '🌍 Clarify cultural background knowledge' },
                instructions: { zh: '📋 給予複雜的活動指示', en: '📋 Give complex activity instructions' },
                check: { zh: '✅ 檢查學習者理解程度', en: '✅ Check learner understanding level' },
                support: { zh: '💝 提供情感支持和鼓勵', en: '💝 Provide emotional support and encouragement' }
            }
        },
        parents: {
            title: { zh: '給家長的建議 👨‍👩‍👧‍👦', en: 'Recommendations for Parents 👨‍👩‍👧‍👦' },
            items: {
                practice: { zh: '🌟 鼓勵每日練習：支持孩子每天在語言之間切換練習', en: '🌟 Encourage Daily Practice: Support children in daily language switching practice' },
                resources: { zh: '📚 提供雙語資源：提供雙語書籍或資源幫助翻譯', en: '📚 Provide Bilingual Resources: Provide bilingual books or resources to aid translation' },
                celebrate: { zh: '🥳 慶祝進步：慶祝進步以保持孩子的動力和信心', en: '🥳 Celebrate Progress: Celebrate progress to maintain children\'s motivation and confidence' }
            }
        },
        switching: {
            title: { zh: '語言切換的科學訓練方法', en: 'Scientific Training Methods for Language Switching' },
            daily: {
                title: { zh: '每日切換練習 🔀', en: 'Daily Switching Practice 🔀' },
                content: {
                    zh: '每天安排時間在母語和英語之間切換。例如，用母語想一個句子，然後翻譯成英語。',
                    en: 'Schedule time daily to switch between your first language and English. For example, think of a sentence in your first language, then translate it into English.'
                }
            },
            flashcards: {
                title: { zh: '使用閃卡 📇', en: 'Using Flashcards 📇' },
                content: {
                    zh: '製作包含兩種語言單詞或短語的閃卡。快速在它們之間切換練習，建立流暢度。',
                    en: 'Create flashcards containing words or phrases in both languages. Practice switching between them quickly to build fluency.'
                }
            },
            thinking: {
                title: { zh: '雙語思考 🧠', en: 'Bilingual Thinking 🧠' },
                content: {
                    zh: '訓練大腦在英語和母語之間交替思考。從簡單想法開始，逐漸增加複雜度。',
                    en: 'Train your brain to alternate thinking between English and your first language. Start with simple ideas and gradually increase complexity.'
                }
            },
            conversation: {
                title: { zh: '與他人對話 🗣️', en: 'Conversation with Others 🗣️' },
                content: {
                    zh: '用母語與家人解釋你在英語中學到的東西。同樣，用英語向某人解釋你通常用母語談論的事情。',
                    en: 'Explain to your family in your first language what you learned in English. Similarly, explain to someone in English things you usually discuss in your first language.'
                }
            },
            accurate: {
                title: { zh: '✅ 正確切換（對方明白意思）', en: '✅ Accurate Switching (The Other Person Understands)' },
                intro: {
                    zh: '重點是讓對方理解你的意思，不需要完美無缺，只要溝通有效即可。',
                    en: 'The focus is on making the other person understand your meaning; it doesn\'t need to be perfect, as long as communication is effective.'
                },
                items: {
                    basic: {
                        title: { zh: '1. 基本意思傳達 🎯', en: '1. Basic Meaning Communication 🎯' },
                        method: { zh: '方法：', en: 'Method: ' },
                        methodContent: { zh: '用簡單的詞彙和句子結構，確保對方能理解你的主要意思。', en: 'Use simple vocabulary and sentence structures to ensure the other person can understand your main meaning.' },
                        practice: { zh: '練習：', en: 'Practice: ' },
                        practiceContent: { zh: '每天用英語描述一件簡單的事情，重點是讓聽者明白你在說什麼，而不是用詞是否完美。', en: 'Describe a simple thing in English daily, focusing on making the listener understand what you\'re saying rather than whether your word choice is perfect.' }
                    },
                    practical: {
                        title: { zh: '2. 實用表達練習 💬', en: '2. Practical Expression Practice 💬' },
                        method: { zh: '方法：', en: 'Method: ' },
                        methodContent: { zh: '學習日常生活中的常用表達，讓溝通更自然流暢。', en: 'Learn common expressions in daily life to make communication more natural and fluent.' },
                        practice: { zh: '練習：', en: 'Practice: ' },
                        practiceContent: { zh: '練習用英語表達日常需求，如"我想...""我需要..."等基本句型。', en: 'Practice expressing daily needs in English, such as basic sentence patterns like "I want..." or "I need..."' }
                    },
                    gesture: {
                        title: { zh: '3. 手勢和表情輔助 🤝', en: '3. Gesture and Expression Assistance 🤝' },
                        method: { zh: '方法：', en: 'Method: ' },
                        methodContent: { zh: '善用手勢、表情和肢體語言來輔助語言表達。', en: 'Make good use of gestures, expressions, and body language to assist language expression.' },
                        practice: { zh: '練習：', en: 'Practice: ' },
                        practiceContent: { zh: '在說英語時配合適當的手勢，幫助對方更好地理解你的意思。', en: 'Accompany appropriate gestures when speaking English to help the other person better understand your meaning.' }
                    },
                    repeat: {
                        title: { zh: '4. 重複和確認 🔄', en: '4. Repetition and Confirmation 🔄' },
                        method: { zh: '方法：', en: 'Method: ' },
                        methodContent: { zh: '如果對方沒聽懂，用不同的方式重複表達，直到對方明白。', en: 'If the other person doesn\'t understand, repeat your expression in different ways until they understand.' },
                        practice: { zh: '練習：', en: 'Practice: ' },
                        practiceContent: { zh: '學會用"Let me explain again..."或"In other words..."來重新表達你的意思。', en: 'Learn to use "Let me explain again..." or "In other words..." to re-express your meaning.' }
                    }
                }
            },
            precise: {
                title: { zh: '🎯 精確切換（更準確）', en: '🎯 Precise Switching (More Accurate)' },
                intro: {
                    zh: '提升詞彙使用的精確度和效率，選擇最合適的詞彙來表達特定意思。',
                    en: 'Improve the precision and efficiency of vocabulary use, choosing the most appropriate words to express specific meanings.'
                },
                items: {
                    synonyms: {
                        title: { zh: '1. 同義詞精確選擇 📚', en: '1. Precise Synonym Selection 📚' },
                        method: { zh: '方法：', en: 'Method: ' },
                        methodContent: { zh: '建立豐富的同義詞詞彙庫，學會在不同語境中選擇最精確的詞彙。', en: 'Build a rich synonym vocabulary and learn to choose the most precise words in different contexts.' },
                        practice: { zh: '練習：', en: 'Practice: ' },
                        practiceContent: { zh: '每天學習一組同義詞（如：big, large, huge, enormous），理解它們的細微差別和使用場景。', en: 'Learn a group of synonyms daily (e.g., big, large, huge, enormous), understanding their subtle differences and usage contexts.' }
                    },
                    register: {
                        title: { zh: '2. 語域適應訓練 🎯', en: '2. Register Adaptation Training 🎯' },
                        method: { zh: '方法：', en: 'Method: ' },
                        methodContent: { zh: '學會根據不同場合（正式/非正式、學術/商務）選擇適當的詞彙。', en: 'Learn to choose appropriate vocabulary based on different contexts (formal/informal, academic/business).' },
                        practice: { zh: '練習：', en: 'Practice: ' },
                        practiceContent: { zh: '用不同語域表達同一個意思，如"開始"在正式場合用"commence"，非正式場合用"start"。', en: 'Express the same meaning in different registers, such as using "commence" in formal contexts and "start" in informal contexts.' }
                    },
                    collocation: {
                        title: { zh: '3. 詞彙搭配掌握 🤝', en: '3. Vocabulary Collocation Mastery 🤝' },
                        method: { zh: '方法：', en: 'Method: ' },
                        methodContent: { zh: '學習詞彙的固定搭配和慣用法，提升表達的自然度。', en: 'Learn fixed collocations and idiomatic usage of vocabulary to improve naturalness of expression.' },
                        practice: { zh: '練習：', en: 'Practice: ' },
                        practiceContent: { zh: '學習動詞+介詞搭配（如：depend on, rely on）、形容詞+名詞搭配（如：heavy rain, strong wind）。', en: 'Learn verb+preposition collocations (e.g., depend on, rely on) and adjective+noun collocations (e.g., heavy rain, strong wind).' }
                    },
                    semantics: {
                        title: { zh: '4. 語義精確度提升 🔍', en: '4. Semantic Precision Enhancement 🔍' },
                        method: { zh: '方法：', en: 'Method: ' },
                        methodContent: { zh: '深入理解詞彙的語義範圍和細微差別，避免詞彙使用的不準確。', en: 'Deeply understand the semantic range and subtle differences of vocabulary to avoid inaccurate word usage.' },
                        practice: { zh: '練習：', en: 'Practice: ' },
                        practiceContent: { zh: '比較近義詞的細微差別，如"happy"vs"joyful"vs"cheerful"的情感強度和使用場景。', en: 'Compare subtle differences between near-synonyms, such as the emotional intensity and usage contexts of "happy" vs "joyful" vs "cheerful".' }
                    }
                }
            },
            fast: {
                title: { zh: '⚡ 快速切換（更快）', en: '⚡ Fast Switching (Faster)' },
                intro: {
                    zh: '提升語言切換的速度和流暢度，減少思考時間和猶豫，實現自然流暢的雙語表達。',
                    en: 'Improve the speed and fluency of language switching, reduce thinking time and hesitation, achieving natural and fluent bilingual expression.'
                },
                items: {
                    instant: {
                        title: { zh: '1. 即時反應訓練 ⚡', en: '1. Instant Reaction Training ⚡' },
                        method: { zh: '方法：', en: 'Method: ' },
                        methodContent: { zh: '進行快速語言切換練習，訓練大腦的即時反應能力。', en: 'Engage in rapid language switching practice to train the brain\'s instant reaction ability.' },
                        practice: { zh: '練習：', en: 'Practice: ' },
                        practiceContent: { zh: '設定計時器，在30秒內用中英文交替描述同一個主題，逐漸縮短切換時間。', en: 'Set a timer and alternate describing the same topic in Chinese and English within 30 seconds, gradually shortening switching time.' }
                    },
                    thinking: {
                        title: { zh: '2. 思維模式切換 🧠', en: '2. Thinking Mode Switching 🧠' },
                        method: { zh: '方法：', en: 'Method: ' },
                        methodContent: { zh: '訓練大腦在不同語言思維模式間快速切換。', en: 'Train the brain to quickly switch between different language thinking modes.' },
                        practice: { zh: '練習：', en: 'Practice: ' },
                        practiceContent: { zh: '用中文思考一個問題，立即用英文表達解決方案，然後再切換回中文進行反思。', en: 'Think about a problem in Chinese, immediately express the solution in English, then switch back to Chinese for reflection.' }
                    },
                    fluency: {
                        title: { zh: '3. 流暢度提升訓練 🌊', en: '3. Fluency Enhancement Training 🌊' },
                        method: { zh: '方法：', en: 'Method: ' },
                        methodContent: { zh: '通過大量練習提升語言切換的流暢度和自然度。', en: 'Improve the fluency and naturalness of language switching through extensive practice.' },
                        practice: { zh: '練習：', en: 'Practice: ' },
                        practiceContent: { zh: '進行"影子跟讀"練習，跟隨英語音頻進行即時翻譯和表達。', en: 'Engage in "shadow reading" practice, following English audio for instant translation and expression.' }
                    },
                    automation: {
                        title: { zh: '4. 自動化程度提升 🤖', en: '4. Automation Level Enhancement 🤖' },
                        method: { zh: '方法：', en: 'Method: ' },
                        methodContent: { zh: '將語言切換訓練到自動化程度，減少有意識的思考過程。', en: 'Train language switching to an automated level, reducing conscious thinking processes.' },
                        practice: { zh: '練習：', en: 'Practice: ' },
                        practiceContent: { zh: '每天進行"語言切換馬拉松"，連續30分鐘在中英文間切換，直到感覺自然。', en: 'Engage in daily "language switching marathon", continuously switching between Chinese and English for 30 minutes until it feels natural.' }
                    }
                }
            }
        }
    },
    references: {
        title: { zh: '參考文獻', en: 'References' },
        classic: { zh: '經典研究 (Classic Studies)', en: 'Classic Studies' },
        recent: { zh: '最新研究 (Recent Studies 2020s)', en: 'Recent Studies (2020s)' },
        hk: { zh: '香港雙語教育研究 (Hong Kong Bilingual Education Studies)', en: 'Hong Kong Bilingual Education Studies' },
        historical: { zh: '歷史文獻 (Historical References)', en: 'Historical References' }
    }
};

function updateLanguage(lang) {
    currentLanguage = lang;
    
    // Update page title
    document.title = lang === 'en' 
        ? 'Bilingual Learning Research: Historical Development of First Language Use in Foreign Language Learning'
        : '雙語學習研究：母語在外語學習中的歷史發展';
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-HK';
    
    // Update logo
    const logoText = document.querySelector('.nav-logo span:first-child');
    if (logoText) {
        logoText.textContent = translations.nav.logo[lang];
    }
    
    // Update navigation menu
    const navLinks = document.querySelectorAll('.nav-link');
    const menuKeys = ['abstract', 'timeline', 'recent', 'hkResearch', 'theories', 'papers', 'practical', 'references'];
    navLinks.forEach((link, index) => {
        if (menuKeys[index]) {
            link.textContent = translations.nav.menu[menuKeys[index]][lang];
        }
    });
    
    // Update abstract section
    const abstractTitle = document.querySelector('#abstract h1');
    if (abstractTitle) abstractTitle.textContent = translations.abstract.title[lang];
    
    const abstractSubtitle = document.querySelector('#abstract .subtitle');
    if (abstractSubtitle) abstractSubtitle.textContent = translations.abstract.subtitle[lang];
    
    const abstractContent = document.querySelector('#abstract p:last-child');
    if (abstractContent) abstractContent.innerHTML = translations.abstract.content[lang];
    
    // Update timeline section - title
    const timelineTitle = document.querySelector('#timeline h3');
    if (timelineTitle) timelineTitle.textContent = translations.timeline.title[lang];
    
    // Update timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        const content = item.querySelector('.timeline-content');
        if (!content) return;
        
        const h3 = content.querySelector('h3');
        const firstP = content.querySelector('p');
        const h4 = content.querySelector('h4');
        const allPs = content.querySelectorAll('p');
        const citation = content.querySelector('.citation');
        
        if (index === 0) { // Direct Method
            if (h3) h3.textContent = translations.timelineItems.directMethod.title[lang];
            if (firstP) firstP.textContent = translations.timelineItems.directMethod.description[lang];
            if (h4) h4.textContent = translations.timelineItems.directMethod.scholarSummary[lang];
            // Update scholar perspectives
            allPs.forEach((p, pIndex) => {
                if (pIndex === 0) return; // Skip first paragraph (description)
                const strong = p.querySelector('strong');
                if (strong) {
                    const name = strong.textContent.trim();
                    if (name.includes('François Gouin')) {
                        p.innerHTML = '<strong>François Gouin (1880):</strong> ' + translations.timelineItems.directMethod.gouin[lang];
                    } else if (name.includes('Maximilian Berlitz')) {
                        p.innerHTML = '<strong>Maximilian Berlitz (1878):</strong> ' + translations.timelineItems.directMethod.berlitz[lang];
                    }
                }
            });
            if (citation) {
                const strong = citation.querySelector('strong');
                if (strong) {
                    const link = citation.querySelector('a');
                    const quoteText = translations.timelineItems.directMethod.coreClaim[lang];
                    if (link) {
                        citation.innerHTML = '<strong>' + (lang === 'zh' ? '核心主張：' : 'Core Claim: ') + '</strong>' + quoteText + ' ' + link.outerHTML;
                    } else {
                        citation.innerHTML = '<strong>' + (lang === 'zh' ? '核心主張：' : 'Core Claim: ') + '</strong>' + quoteText;
                    }
                }
            }
        } else if (index === 1) { // Audio-Lingual
            if (h3) h3.textContent = translations.timelineItems.audioLingual.title[lang];
            if (firstP) firstP.textContent = translations.timelineItems.audioLingual.description[lang];
            if (h4) h4.textContent = translations.timelineItems.audioLingual.scholarSummary[lang];
            // Update scholar perspectives
            allPs.forEach((p, pIndex) => {
                if (pIndex === 0) return;
                const strong = p.querySelector('strong');
                if (strong) {
                    const name = strong.textContent.trim();
                    if (name.includes('B.F. Skinner')) {
                        p.innerHTML = '<strong>B.F. Skinner (1957):</strong> ' + translations.timelineItems.audioLingual.skinner[lang];
                    } else if (name.includes('Charles Fries')) {
                        p.innerHTML = '<strong>Charles Fries (1945):</strong> ' + translations.timelineItems.audioLingual.fries[lang];
                    } else if (name.includes('Robert Lado')) {
                        p.innerHTML = '<strong>Robert Lado (1957):</strong> ' + translations.timelineItems.audioLingual.lado[lang];
                    }
                }
            });
            if (citation) {
                const strong = citation.querySelector('strong');
                if (strong) {
                    const link = citation.querySelector('a');
                    const quoteText = translations.timelineItems.audioLingual.coreClaim[lang];
                    if (link) {
                        citation.innerHTML = '<strong>' + (lang === 'zh' ? '核心主張：' : 'Core Claim: ') + '</strong>' + quoteText + ' ' + link.outerHTML;
                    } else {
                        citation.innerHTML = '<strong>' + (lang === 'zh' ? '核心主張：' : 'Core Claim: ') + '</strong>' + quoteText;
                    }
                }
            }
        } else if (index === 2) { // Communicative
            if (h3) h3.textContent = translations.timelineItems.communicative.title[lang];
            if (firstP) firstP.textContent = translations.timelineItems.communicative.description[lang];
            if (h4) h4.textContent = translations.timelineItems.communicative.scholarSummary[lang];
            // Update scholar perspectives
            allPs.forEach((p, pIndex) => {
                if (pIndex === 0) return;
                const strong = p.querySelector('strong');
                if (strong) {
                    const name = strong.textContent.trim();
                    if (name.includes('Dell Hymes')) {
                        p.innerHTML = '<strong>Dell Hymes (1972):</strong> ' + translations.timelineItems.communicative.hymes[lang];
                    } else if (name.includes('Michael Halliday')) {
                        p.innerHTML = '<strong>Michael Halliday (1973):</strong> ' + translations.timelineItems.communicative.halliday[lang];
                    } else if (name.includes('Stephen Krashen')) {
                        p.innerHTML = '<strong>Stephen Krashen (1982):</strong> ' + translations.timelineItems.communicative.krashen[lang];
                    }
                }
            });
            if (citation) {
                const strong = citation.querySelector('strong');
                if (strong) {
                    const link = citation.querySelector('a');
                    const quoteText = translations.timelineItems.communicative.coreClaim[lang];
                    if (link) {
                        citation.innerHTML = '<strong>' + (lang === 'zh' ? '核心主張：' : 'Core Claim: ') + '</strong>' + quoteText + ' ' + link.outerHTML;
                    } else {
                        citation.innerHTML = '<strong>' + (lang === 'zh' ? '核心主張：' : 'Core Claim: ') + '</strong>' + quoteText;
                    }
                }
            }
        } else if (index === 3) { // Cognitive
            if (h3) h3.textContent = translations.timelineItems.cognitive.title[lang];
            if (firstP) firstP.textContent = translations.timelineItems.cognitive.description[lang];
            if (h4) h4.textContent = translations.timelineItems.cognitive.scholarSummary[lang];
            // Update scholar perspectives
            allPs.forEach((p, pIndex) => {
                if (pIndex === 0) return;
                const strong = p.querySelector('strong');
                if (strong) {
                    const name = strong.textContent.trim();
                    if (name.includes('Vivian Cook')) {
                        p.innerHTML = '<strong>Vivian Cook (1991):</strong> ' + translations.timelineItems.cognitive.cook[lang];
                    } else if (name.includes('Ellen Bialystok')) {
                        p.innerHTML = '<strong>Ellen Bialystok (1991):</strong> ' + translations.timelineItems.cognitive.bialystok[lang];
                    } else if (name.includes('Jim Cummins')) {
                        p.innerHTML = '<strong>Jim Cummins (1991):</strong> ' + translations.timelineItems.cognitive.cummins[lang];
                    }
                }
            });
            if (citation) {
                const strong = citation.querySelector('strong');
                if (strong) {
                    const link = citation.querySelector('a');
                    const quoteText = translations.timelineItems.cognitive.coreClaim[lang];
                    if (link) {
                        citation.innerHTML = '<strong>' + (lang === 'zh' ? '核心主張：' : 'Core Claim: ') + '</strong>' + quoteText + ' ' + link.outerHTML;
                    } else {
                        citation.innerHTML = '<strong>' + (lang === 'zh' ? '核心主張：' : 'Core Claim: ') + '</strong>' + quoteText;
                    }
                }
            }
        }
    });
    
    const theorySummary = document.querySelector('#timeline .hk-conclusion h3');
    if (theorySummary) theorySummary.textContent = translations.timeline.theorySummary[lang];
    
    const theoryContent = document.querySelector('#timeline .hk-conclusion p');
    if (theoryContent) theoryContent.innerHTML = translations.timeline.theoryContent[lang];
    
    // Update recent research section
    const translanguagingTitle = document.querySelector('#recent h2');
    if (translanguagingTitle) translanguagingTitle.textContent = translations.recent.translanguaging.title[lang];
    
    const translanguagingIntro = document.querySelector('#recent .section p:first-of-type');
    if (translanguagingIntro && translanguagingIntro.textContent.includes('Ofelia García')) {
        translanguagingIntro.textContent = translations.recent.translanguaging.intro[lang];
    }
    
    const recentTitle = document.querySelector('#recent h3');
    if (recentTitle) recentTitle.textContent = translations.recent.title[lang];
    
    // Update modern insights section - find the section with the specific h2
    const allRecentSections = document.querySelectorAll('#recent .section');
    allRecentSections.forEach(section => {
        const h2 = section.querySelector('h2');
        if (h2 && (h2.textContent.includes('現代研究') || h2.textContent.includes('Modern Research') || h2.textContent.includes('🚀'))) {
            h2.textContent = translations.recent.modernInsights.title[lang];
            const p = section.querySelector('p');
            if (p && (p.textContent.includes('最新研究證實') || p.textContent.includes('Recent research confirms') || p.textContent.includes('雙語字幕'))) {
                p.innerHTML = translations.recent.modernInsights.content[lang];
            }
        }
    });
    
    // Update translanguaging section scholar perspectives
    const translanguagingSection = document.querySelector('#recent .section');
    if (translanguagingSection) {
        const scholarH4 = translanguagingSection.querySelector('h4');
        if (scholarH4 && (scholarH4.textContent.includes('學者觀點') || scholarH4.textContent.includes('Scholar Perspectives'))) {
            scholarH4.textContent = translations.recent.translanguaging.scholarSummary[lang];
        }
        const translanguagingPs = translanguagingSection.querySelectorAll('p');
        translanguagingPs.forEach(p => {
            const strong = p.querySelector('strong');
            if (strong) {
                const text = strong.textContent.trim();
                if (text.includes('Ofelia García & Li Wei')) {
                    const link = p.querySelector('a');
                    if (link) {
                        p.innerHTML = '<strong><a href="' + link.href + '" class="citation-link">Ofelia García & Li Wei (2014)</a>:</strong> ' + translations.recent.translanguaging.garciaLiwei[lang];
                    }
                } else if (text.includes('Angela Creese & Adrian Blackledge')) {
                    const link = p.querySelector('a');
                    if (link) {
                        p.innerHTML = '<strong><a href="' + link.href + '" class="citation-link">Angela Creese & Adrian Blackledge (2010)</a>:</strong> ' + translations.recent.translanguaging.creeseBlackledge[lang];
                    }
                } else if (text.includes('García & Kleyn')) {
                    const link = p.querySelector('a');
                    if (link) {
                        p.innerHTML = '<strong><a href="' + link.href + '" class="citation-link">García & Kleyn (2016)</a>:</strong> ' + translations.recent.translanguaging.garciaKleyn[lang];
                    }
                }
            }
        });
        const translanguagingCitation = translanguagingSection.querySelector('.citation');
        if (translanguagingCitation) {
            const link = translanguagingCitation.querySelector('a');
            const quoteText = translations.recent.translanguaging.coreClaim[lang];
            if (link) {
                translanguagingCitation.innerHTML = '<strong>' + (lang === 'zh' ? '核心主張：' : 'Core Claim: ') + '</strong>' + quoteText + ' <a href="' + link.href + '" class="citation-link">(García & Li Wei, 2014)</a>';
            }
        }
    }
    
    // Update recent research cards
    const researchCards = document.querySelectorAll('.research-card');
    researchCards.forEach((card, index) => {
        const h3 = card.querySelector('h3');
        const summary = card.querySelector('.research-summary');
        if (!summary) return;
        
        if (index === 0) { // Bilingual Subtitles
            if (h3) h3.textContent = translations.recent.researchCards.bilingualSubtitles.title[lang];
            const h4s = summary.querySelectorAll('h4');
            const ps = summary.querySelectorAll('p');
            const citations = summary.querySelectorAll('.citation');
            
            h4s.forEach((h4, h4Index) => {
                const link = h4.querySelector('a');
                if (h4Index === 0 && link) {
                    h4.innerHTML = '<a href="' + link.href + '" class="citation-link">Wang & Pellicer-Sánchez (2022)</a>' + translations.recent.researchCards.bilingualSubtitles.wangFinding[lang];
                } else if (h4Index === 1 && link) {
                    h4.innerHTML = '<a href="' + link.href + '" class="citation-link">Yuan & Tang (2025)</a>' + translations.recent.researchCards.bilingualSubtitles.yuanFinding[lang];
                }
            });
            
            ps.forEach((p, pIndex) => {
                if (pIndex === 0) {
                    p.textContent = translations.recent.researchCards.bilingualSubtitles.wangContent[lang];
                } else if (pIndex === 1) {
                    p.textContent = translations.recent.researchCards.bilingualSubtitles.yuanContent[lang];
                }
            });
            
            citations.forEach(citation => {
                const strong = citation.querySelector('strong');
                if (strong && strong.textContent.includes('實務應用')) {
                    citation.innerHTML = '<strong>' + translations.recent.researchCards.bilingualSubtitles.practical[lang] + '</strong>' + translations.recent.researchCards.bilingualSubtitles.practicalContent[lang];
                }
            });
        } else if (index === 1) { // Desirable Difficulties
            if (h3) h3.textContent = translations.recent.researchCards.desirableDifficulties.title[lang];
            const h4s = summary.querySelectorAll('h4');
            const ps = summary.querySelectorAll('p');
            const citations = summary.querySelectorAll('.citation');
            
            h4s.forEach((h4, h4Index) => {
                const link = h4.querySelector('a');
                if (h4Index === 0 && link) {
                    h4.innerHTML = '<a href="' + link.href + '" class="citation-link">Bogulski et al. (2018)</a>' + translations.recent.researchCards.desirableDifficulties.bogulskiFinding[lang];
                } else if (h4Index === 1 && link) {
                    h4.innerHTML = '<a href="' + link.href + '" class="citation-link">Zeng et al. (2022)</a>' + translations.recent.researchCards.desirableDifficulties.zengFinding[lang];
                }
            });
            
            ps.forEach((p, pIndex) => {
                if (pIndex === 0) {
                    p.textContent = translations.recent.researchCards.desirableDifficulties.bogulskiContent[lang];
                } else if (pIndex === 1) {
                    p.textContent = translations.recent.researchCards.desirableDifficulties.zengContent[lang];
                }
            });
            
            citations.forEach(citation => {
                const strong = citation.querySelector('strong');
                if (strong && strong.textContent.includes('認知優勢')) {
                    citation.innerHTML = '<strong>' + translations.recent.researchCards.desirableDifficulties.cognitiveAdvantage[lang] + '</strong>' + translations.recent.researchCards.desirableDifficulties.cognitiveContent[lang];
                }
            });
        } else if (index === 2) { // Collaborative Learning
            if (h3) h3.textContent = translations.recent.researchCards.collaborativeLearning.title[lang];
            const h4s = summary.querySelectorAll('h4');
            const ps = summary.querySelectorAll('p');
            const citations = summary.querySelectorAll('.citation');
            
            h4s.forEach((h4, h4Index) => {
                const link = h4.querySelector('a');
                if (h4Index === 0 && link) {
                    h4.innerHTML = '<a href="' + link.href + '" class="citation-link">Urzúa (2025)</a>' + translations.recent.researchCards.collaborativeLearning.urzuaFinding[lang];
                } else if (h4Index === 1 && link) {
                    h4.innerHTML = '<a href="' + link.href + '" class="citation-link">García & Li Wei (2014)</a>' + translations.recent.researchCards.collaborativeLearning.garciaSupport[lang];
                }
            });
            
            ps.forEach((p, pIndex) => {
                if (pIndex === 0) {
                    p.textContent = translations.recent.researchCards.collaborativeLearning.urzuaContent[lang];
                } else if (pIndex === 1) {
                    p.textContent = translations.recent.researchCards.collaborativeLearning.garciaSupportContent[lang];
                }
            });
            
            citations.forEach(citation => {
                const strong = citation.querySelector('strong');
                if (strong && strong.textContent.includes('教學啟示')) {
                    citation.innerHTML = '<strong>' + translations.recent.researchCards.collaborativeLearning.teachingImplication[lang] + '</strong>' + translations.recent.researchCards.collaborativeLearning.teachingContent[lang];
                }
            });
        } else if (index === 3) { // Neuroscience
            if (h3) h3.textContent = translations.recent.researchCards.neuroscience.title[lang];
            const h4s = summary.querySelectorAll('h4');
            const ps = summary.querySelectorAll('p');
            const citations = summary.querySelectorAll('.citation');
            
            h4s.forEach((h4, h4Index) => {
                const link = h4.querySelector('a');
                if (h4Index === 0 && link) {
                    h4.innerHTML = '<a href="' + link.href + '" class="citation-link">Verbeek et al. (2022)</a>' + translations.recent.researchCards.neuroscience.verbeekFinding[lang];
                } else if (h4Index === 1 && link) {
                    h4.innerHTML = '<a href="' + link.href + '" class="citation-link">Jiang et al. (2019)</a>' + translations.recent.researchCards.neuroscience.jiangFinding[lang];
                }
            });
            
            ps.forEach((p, pIndex) => {
                if (pIndex === 0) {
                    p.textContent = translations.recent.researchCards.neuroscience.verbeekContent[lang];
                } else if (pIndex === 1) {
                    p.textContent = translations.recent.researchCards.neuroscience.jiangContent[lang];
                }
            });
            
            citations.forEach(citation => {
                const strong = citation.querySelector('strong');
                if (strong && strong.textContent.includes('科學依據')) {
                    citation.innerHTML = '<strong>' + translations.recent.researchCards.neuroscience.scientificBasis[lang] + '</strong>' + translations.recent.researchCards.neuroscience.scientificContent[lang];
                }
            });
        }
    });
    
    // Update HK research section
    const hkResearchTitle = document.querySelector('#hk-research h2');
    if (hkResearchTitle) hkResearchTitle.textContent = translations.hkResearch.title[lang];
    
    // Update HK research cards
    const hkResearchCards = document.querySelectorAll('.hk-research-card');
    hkResearchCards.forEach((card, index) => {
        const h3 = card.querySelector('h3');
        const summary = card.querySelector('.hk-research-summary');
        if (!summary) return;
        
        if (index === 0) { // University Support
            if (h3) h3.textContent = translations.hkResearch.cards.universitySupport.title[lang];
            const h4s = summary.querySelectorAll('h4');
            const ps = summary.querySelectorAll('p');
            const implications = summary.querySelectorAll('.hk-implication');
            
            h4s.forEach(h4 => {
                const link = h4.querySelector('a');
                if (link && link.textContent.includes('Pun & Jin')) {
                    h4.innerHTML = '<a href="' + link.href + '" class="citation-link">Pun & Jin (2021)</a>' + translations.hkResearch.cards.universitySupport.punFinding[lang];
                }
            });
            
            ps.forEach(p => {
                if (p.textContent.includes('研究香港以英語為教學語言') || p.textContent.includes('Research on challenges')) {
                    p.textContent = translations.hkResearch.cards.universitySupport.punContent[lang];
                }
            });
            
            implications.forEach(impl => {
                const strong = impl.querySelector('strong');
                if (strong) {
                    impl.innerHTML = '<strong>' + translations.hkResearch.cards.universitySupport.implication[lang] + '</strong>' + translations.hkResearch.cards.universitySupport.implicationContent[lang];
                }
            });
        } else if (index === 1) { // EMI Classroom
            if (h3) h3.textContent = translations.hkResearch.cards.emiClassroom.title[lang];
            const h4s = summary.querySelectorAll('h4');
            const ps = summary.querySelectorAll('p');
            const implications = summary.querySelectorAll('.hk-implication');
            
            h4s.forEach((h4, h4Index) => {
                const link = h4.querySelector('a');
                if (h4Index === 0 && link && link.textContent.includes('Tai & Wei')) {
                    h4.innerHTML = '<a href="' + link.href + '" class="citation-link">Tai & Wei (2020)</a>' + translations.hkResearch.cards.emiClassroom.taiFinding[lang];
                } else if (h4Index === 1 && link && link.textContent.includes('Dörnyei')) {
                    h4.innerHTML = '<a href="' + link.href + '" class="citation-link">Dörnyei (2019)</a>' + translations.hkResearch.cards.emiClassroom.dornyeiSupport[lang];
                }
            });
            
            ps.forEach((p, pIndex) => {
                if (pIndex === 0) {
                    p.textContent = translations.hkResearch.cards.emiClassroom.taiContent[lang];
                } else if (pIndex === 1) {
                    p.textContent = translations.hkResearch.cards.emiClassroom.dornyeiContent[lang];
                }
            });
            
            implications.forEach(impl => {
                const strong = impl.querySelector('strong');
                if (strong && strong.textContent.includes('教學實踐')) {
                    impl.innerHTML = '<strong>' + translations.hkResearch.cards.emiClassroom.practice[lang] + '</strong>' + translations.hkResearch.cards.emiClassroom.practiceContent[lang];
                }
            });
        } else if (index === 2) { // Language Interaction
            if (h3) h3.textContent = translations.hkResearch.cards.languageInteraction.title[lang];
            const h4s = summary.querySelectorAll('h4');
            const ps = summary.querySelectorAll('p');
            const implications = summary.querySelectorAll('.hk-implication');
            
            h4s.forEach((h4, h4Index) => {
                const link = h4.querySelector('a');
                if (h4Index === 0 && link && link.textContent.includes('Chan')) {
                    h4.innerHTML = '<a href="' + link.href + '" class="citation-link">Chan et al. (2022)</a>' + translations.hkResearch.cards.languageInteraction.chanFinding[lang];
                } else if (h4Index === 1 && link && link.textContent.includes('Zhu')) {
                    h4.innerHTML = '<a href="' + link.href + '" class="citation-link">Zhu et al. (2024)</a>' + translations.hkResearch.cards.languageInteraction.zhuFinding[lang];
                }
            });
            
            ps.forEach((p, pIndex) => {
                if (pIndex === 0) {
                    p.textContent = translations.hkResearch.cards.languageInteraction.chanContent[lang];
                } else if (pIndex === 1) {
                    p.textContent = translations.hkResearch.cards.languageInteraction.zhuContent[lang];
                }
            });
            
            implications.forEach(impl => {
                const strong = impl.querySelector('strong');
                if (strong && strong.textContent.includes('策略轉移')) {
                    impl.innerHTML = '<strong>' + translations.hkResearch.cards.languageInteraction.strategy[lang] + '</strong>' + translations.hkResearch.cards.languageInteraction.strategyContent[lang];
                }
            });
        } else if (index === 3) { // Cultural Background
            if (h3) h3.textContent = translations.hkResearch.cards.culturalBackground.title[lang];
            const h4s = summary.querySelectorAll('h4');
            const ps = summary.querySelectorAll('p');
            const implications = summary.querySelectorAll('.hk-implication');
            
            h4s.forEach(h4 => {
                const link = h4.querySelector('a');
                if (link && link.textContent.includes('Wong')) {
                    h4.innerHTML = '<a href="' + link.href + '" class="citation-link">Wong et al. (2022)</a>' + translations.hkResearch.cards.culturalBackground.wongFinding[lang];
                }
            });
            
            ps.forEach(p => {
                if (p.textContent.includes('分析文化和語言背景') || p.textContent.includes('Analyzed the impact')) {
                    p.textContent = translations.hkResearch.cards.culturalBackground.wongContent[lang];
                }
            });
            
            implications.forEach(impl => {
                const strong = impl.querySelector('strong');
                if (strong && strong.textContent.includes('詞彙教學')) {
                    impl.innerHTML = '<strong>' + translations.hkResearch.cards.culturalBackground.vocabularyTeaching[lang] + '</strong>' + translations.hkResearch.cards.culturalBackground.vocabularyContent[lang];
                }
            });
        }
    });
    
    // Update theories section
    const theoriesTitle = document.querySelector('#theories h2');
    if (theoriesTitle) theoriesTitle.textContent = translations.theories.title[lang];
    
    // Update theories content
    const theoryH3s = document.querySelectorAll('#theories h3');
    theoryH3s.forEach((h3, index) => {
        if (index === 0) { // Multi-competence
            h3.textContent = translations.theories.multiCompetence.title[lang];
            const nextP = h3.nextElementSibling;
            if (nextP && nextP.tagName === 'P') {
                nextP.textContent = translations.theories.multiCompetence.content[lang];
            }
            const methodology = document.querySelector('#theories .methodology');
            if (methodology) {
                const strong = methodology.querySelector('strong');
                if (strong) {
                    methodology.innerHTML = '<strong>' + translations.theories.multiCompetence.coreView[lang] + '</strong>' + translations.theories.multiCompetence.coreContent[lang];
                }
            }
        } else if (index === 1) { // Translanguaging
            h3.textContent = translations.theories.translanguaging.title[lang];
            const nextP = h3.nextElementSibling;
            if (nextP && nextP.tagName === 'P') {
                nextP.textContent = translations.theories.translanguaging.content[lang];
            }
        } else if (index === 2) { // Cognitive Load
            h3.textContent = translations.theories.cognitiveLoad.title[lang];
            const nextP = h3.nextElementSibling;
            if (nextP && nextP.tagName === 'P') {
                nextP.textContent = translations.theories.cognitiveLoad.content[lang];
            }
        }
    });
    
    // Update papers section
    const papersTitle = document.querySelector('#papers h2');
    if (papersTitle) papersTitle.textContent = translations.papers.title[lang];
    
    // Update paper cards
    const paperCards = document.querySelectorAll('.paper-card');
    paperCards.forEach((card, index) => {
        const h3 = card.querySelector('h3');
        const summary = card.querySelector('.paper-summary');
        if (!summary) return;
        
        // Translate based on card content patterns
        if (h3 && h3.textContent.includes('Auerbach')) {
            const link = h3.querySelector('a');
            if (link) {
                h3.innerHTML = '<a href="' + link.href + '" class="citation-link">Auerbach (1993)</a> - ' + translations.papers.auerbach.title[lang];
            }
            const h4s = summary.querySelectorAll('h4');
            const ps = summary.querySelectorAll('p');
            const uls = summary.querySelectorAll('ul');
            const citations = summary.querySelectorAll('.citation');
            
            h4s.forEach((h4, h4Index) => {
                if (h4Index === 0) h4.textContent = translations.papers.auerbach.background[lang];
                else if (h4Index === 1) h4.textContent = translations.papers.auerbach.mainPoints[lang];
                else if (h4Index === 2) h4.textContent = translations.papers.auerbach.suggestion[lang];
            });
            
            ps.forEach((p, pIndex) => {
                if (pIndex === 0) p.textContent = translations.papers.auerbach.backgroundContent[lang];
                else if (pIndex === 1) p.textContent = translations.papers.auerbach.suggestionContent[lang];
            });
            
            // Translate list items
            uls.forEach((ul, ulIndex) => {
                if (ulIndex === 0) { // Main arguments list
                    const lis = ul.querySelectorAll('li');
                    if (lis.length >= 4) {
                        lis[0].innerHTML = '<strong>' + (lang === 'zh' ? '現實性問題：' : 'Reality Issue: ') + '</strong>' + (lang === 'zh' ? '完全禁止母語在實際教學中是不現實的' : 'Completely banning the first language is unrealistic in actual teaching');
                        lis[1].innerHTML = '<strong>' + (lang === 'zh' ? '效率問題：' : 'Efficiency Issue: ') + '</strong>' + (lang === 'zh' ? '用母語解釋複雜概念比用外語更有效' : 'Explaining complex concepts in the first language is more effective than in a foreign language');
                        lis[2].innerHTML = '<strong>' + (lang === 'zh' ? '權力關係：' : 'Power Relations: ') + '</strong>' + (lang === 'zh' ? '「英語專用」政策反映了語言權力不平等' : '"English Only" policies reflect linguistic power inequality');
                        lis[3].innerHTML = '<strong>' + (lang === 'zh' ? '學習者需求：' : 'Learner Needs: ') + '</strong>' + (lang === 'zh' ? '成人學習者需要母語支持來理解抽象概念' : 'Adult learners need first language support to understand abstract concepts');
                    }
                }
            });
            
            citations.forEach(citation => {
                const strong = citation.querySelector('strong');
                if (strong && strong.textContent.includes('核心發現')) {
                    citation.innerHTML = '<strong>' + translations.papers.auerbach.finding[lang] + '</strong>' + translations.papers.auerbach.findingContent[lang];
                }
            });
        } else if (h3 && h3.textContent.includes('Cook (1991)')) {
            const link = h3.querySelector('a');
            if (link) {
                h3.innerHTML = '<a href="' + link.href + '" class="citation-link">Cook (1991)</a> - ' + translations.papers.cook.title[lang];
            }
            const h4s = summary.querySelectorAll('h4');
            const ps = summary.querySelectorAll('p');
            const uls = summary.querySelectorAll('ul');
            const citations = summary.querySelectorAll('.citation');
            
            h4s.forEach((h4, h4Index) => {
                if (h4Index === 0) h4.textContent = translations.papers.cook.breakthrough[lang];
                else if (h4Index === 1) h4.textContent = translations.papers.cook.concepts[lang];
                else if (h4Index === 2) h4.textContent = translations.papers.cook.implication[lang];
            });
            
            ps.forEach((p, pIndex) => {
                if (pIndex === 0) p.textContent = translations.papers.cook.breakthroughContent[lang];
                else if (pIndex === 1) p.textContent = translations.papers.cook.implicationContent[lang];
            });
            
            // Translate list items
            uls.forEach((ul, ulIndex) => {
                if (ulIndex === 0) { // Core concepts list
                    const lis = ul.querySelectorAll('li');
                    if (lis.length >= 4) {
                        lis[0].innerHTML = '<strong>' + (lang === 'zh' ? '多能力定義：' : 'Multi-competence Definition: ') + '</strong>' + (lang === 'zh' ? '雙語者的語言能力不是兩個單語系統的簡單相加' : 'Bilinguals\' language abilities are not simply the addition of two monolingual systems');
                        lis[1].innerHTML = '<strong>' + (lang === 'zh' ? '整合系統：' : 'Integrated System: ') + '</strong>' + (lang === 'zh' ? '母語和外語形成一個整合的認知系統' : 'First and foreign languages form an integrated cognitive system');
                        lis[2].innerHTML = '<strong>' + (lang === 'zh' ? '獨特優勢：' : 'Unique Advantage: ') + '</strong>' + (lang === 'zh' ? '雙語者具有單語者沒有的認知優勢' : 'Bilinguals have cognitive advantages that monolinguals do not have');
                        lis[3].innerHTML = '<strong>' + (lang === 'zh' ? '標準重設：' : 'Standard Reset: ') + '</strong>' + (lang === 'zh' ? '不應以母語者為唯一標準' : 'Native speakers should not be the only standard');
                    }
                }
            });
            
            citations.forEach(citation => {
                const strong = citation.querySelector('strong');
                if (strong && strong.textContent.includes('革命性觀點')) {
                    citation.innerHTML = '<strong>' + translations.papers.cook.view[lang] + '</strong>' + translations.papers.cook.viewContent[lang];
                }
            });
        } else if (h3 && h3.textContent.includes('García & Li Wei')) {
            const link = h3.querySelector('a');
            if (link) {
                h3.innerHTML = '<a href="' + link.href + '" class="citation-link">García & Li Wei (2014)</a> - ' + translations.papers.garciaLiwei.title[lang];
            }
            const h4s = summary.querySelectorAll('h4');
            const ps = summary.querySelectorAll('p');
            const uls = summary.querySelectorAll('ul');
            const citations = summary.querySelectorAll('.citation');
            
            h4s.forEach((h4, h4Index) => {
                if (h4Index === 0) h4.textContent = translations.papers.garciaLiwei.innovation[lang];
                else if (h4Index === 1) h4.textContent = translations.papers.garciaLiwei.views[lang];
                else if (h4Index === 2) h4.textContent = translations.papers.garciaLiwei.application[lang];
            });
            
            ps.forEach((p, pIndex) => {
                if (pIndex === 0) p.textContent = translations.papers.garciaLiwei.innovationContent[lang];
                else if (pIndex === 1) p.textContent = translations.papers.garciaLiwei.applicationContent[lang];
            });
            
            // Translate list items
            uls.forEach((ul, ulIndex) => {
                if (ulIndex === 0) { // Core views list
                    const lis = ul.querySelectorAll('li');
                    if (lis.length >= 4) {
                        lis[0].innerHTML = '<strong>' + (lang === 'zh' ? '語言流動性：' : 'Linguistic Fluidity: ') + '</strong>' + (lang === 'zh' ? '雙語者的語言使用是流動的，不是固定的' : 'Bilinguals\' language use is fluid, not fixed');
                        lis[1].innerHTML = '<strong>' + (lang === 'zh' ? '認知整合：' : 'Cognitive Integration: ') + '</strong>' + (lang === 'zh' ? '母語和外語在認知層面是整合的' : 'First and foreign languages are integrated at the cognitive level');
                        lis[2].innerHTML = '<strong>' + (lang === 'zh' ? '教學策略：' : 'Teaching Strategy: ') + '</strong>' + (lang === 'zh' ? '有意識地利用跨語言能力進行教學' : 'Consciously leverage translanguaging abilities for teaching');
                        lis[3].innerHTML = '<strong>' + (lang === 'zh' ? '身份認同：' : 'Identity: ') + '</strong>' + (lang === 'zh' ? '支持學習者的多語言身份' : 'Support learners\' multilingual identity');
                    }
                }
            });
            
            citations.forEach(citation => {
                const strong = citation.querySelector('strong');
                if (strong && strong.textContent.includes('現代標準')) {
                    citation.innerHTML = '<strong>' + translations.papers.garciaLiwei.standard[lang] + '</strong>' + translations.papers.garciaLiwei.standardContent[lang];
                }
            });
        } else if (h3 && h3.textContent.includes('Nation')) {
            const link = h3.querySelector('a');
            if (link) {
                h3.innerHTML = '<a href="' + link.href + '" class="citation-link">Nation (2003)</a> - ' + translations.papers.nation.title[lang];
            }
            const h4s = summary.querySelectorAll('h4');
            const ps = summary.querySelectorAll('p');
            const uls = summary.querySelectorAll('ul');
            const citations = summary.querySelectorAll('.citation');
            
            h4s.forEach((h4, h4Index) => {
                if (h4Index === 0) h4.textContent = translations.papers.nation.orientation[lang];
                else if (h4Index === 1) h4.textContent = translations.papers.nation.scenarios[lang];
                else if (h4Index === 2) h4.textContent = translations.papers.nation.principle[lang];
            });
            
            ps.forEach((p, pIndex) => {
                if (pIndex === 0) p.textContent = translations.papers.nation.orientationContent[lang];
                else if (pIndex === 1) p.textContent = translations.papers.nation.principleContent[lang];
            });
            
            // Translate list items
            uls.forEach((ul, ulIndex) => {
                if (ulIndex === 0) { // Scenarios list
                    const lis = ul.querySelectorAll('li');
                    if (lis.length >= 4) {
                        lis[0].innerHTML = '<strong>' + (lang === 'zh' ? '語法解釋：' : 'Grammar Explanation: ') + '</strong>' + (lang === 'zh' ? '用母語解釋複雜語法概念更有效' : 'Explaining complex grammar concepts in the first language is more effective');
                        lis[1].innerHTML = '<strong>' + (lang === 'zh' ? '詞彙學習：' : 'Vocabulary Learning: ') + '</strong>' + (lang === 'zh' ? '母語翻譯有助於詞彙記憶' : 'First language translation aids vocabulary memory');
                        lis[2].innerHTML = '<strong>' + (lang === 'zh' ? '文化理解：' : 'Cultural Understanding: ') + '</strong>' + (lang === 'zh' ? '母語幫助理解文化背景' : 'First language helps understand cultural background');
                        lis[3].innerHTML = '<strong>' + (lang === 'zh' ? '情感支持：' : 'Emotional Support: ') + '</strong>' + (lang === 'zh' ? '降低學習焦慮，提高信心' : 'Reduces learning anxiety and increases confidence');
                    }
                }
            });
            
            citations.forEach(citation => {
                const strong = citation.querySelector('strong');
                if (strong && strong.textContent.includes('實用建議')) {
                    citation.innerHTML = '<strong>' + translations.papers.nation.advice[lang] + '</strong>' + translations.papers.nation.adviceContent[lang];
                }
            });
        } else if (h3 && h3.textContent.includes('Macaro')) {
            const link = h3.querySelector('a');
            if (link) {
                h3.innerHTML = '<a href="' + link.href + '" class="citation-link">Macaro (2001)</a> - ' + translations.papers.macaro.title[lang];
            }
            const h4s = summary.querySelectorAll('h4');
            const ps = summary.querySelectorAll('p');
            const uls = summary.querySelectorAll('ul');
            const citations = summary.querySelectorAll('.citation');
            
            h4s.forEach((h4, h4Index) => {
                if (h4Index === 0) h4.textContent = translations.papers.macaro.perspective[lang];
                else if (h4Index === 1) h4.textContent = translations.papers.macaro.factors[lang];
                else if (h4Index === 2) h4.textContent = translations.papers.macaro.development[lang];
            });
            
            ps.forEach((p, pIndex) => {
                if (pIndex === 0) p.textContent = translations.papers.macaro.perspectiveContent[lang];
                else if (pIndex === 1) p.textContent = translations.papers.macaro.developmentContent[lang];
            });
            
            // Translate list items
            uls.forEach((ul, ulIndex) => {
                if (ulIndex === 0) { // Decision factors list
                    const lis = ul.querySelectorAll('li');
                    if (lis.length >= 4) {
                        lis[0].innerHTML = '<strong>' + (lang === 'zh' ? '學習者水平：' : 'Learner Level: ') + '</strong>' + (lang === 'zh' ? '初學者需要更多母語支持' : 'Beginners need more first language support');
                        lis[1].innerHTML = '<strong>' + (lang === 'zh' ? '任務複雜度：' : 'Task Complexity: ') + '</strong>' + (lang === 'zh' ? '複雜任務需要母語輔助' : 'Complex tasks require first language assistance');
                        lis[2].innerHTML = '<strong>' + (lang === 'zh' ? '時間效率：' : 'Time Efficiency: ') + '</strong>' + (lang === 'zh' ? '母語可以節省解釋時間' : 'First language can save explanation time');
                        lis[3].innerHTML = '<strong>' + (lang === 'zh' ? '情感因素：' : 'Emotional Factor: ') + '</strong>' + (lang === 'zh' ? '母語提供情感支持' : 'First language provides emotional support');
                    }
                }
            });
            
            citations.forEach(citation => {
                const strong = citation.querySelector('strong');
                if (strong && strong.textContent.includes('研究發現')) {
                    citation.innerHTML = '<strong>' + translations.papers.macaro.finding[lang] + '</strong>' + translations.papers.macaro.findingContent[lang];
                }
            });
        } else if (h3 && h3.textContent.includes('Cummins')) {
            const link = h3.querySelector('a');
            if (link) {
                h3.innerHTML = '<a href="' + link.href + '" class="citation-link">Cummins (2007)</a> - ' + translations.papers.cummins.title[lang];
            }
            const h4s = summary.querySelectorAll('h4');
            const ps = summary.querySelectorAll('p');
            const uls = summary.querySelectorAll('ul');
            const citations = summary.querySelectorAll('.citation');
            
            h4s.forEach((h4, h4Index) => {
                if (h4Index === 0) h4.textContent = translations.papers.cummins.foundation[lang];
                else if (h4Index === 1) h4.textContent = translations.papers.cummins.mechanisms[lang];
                else if (h4Index === 2) h4.textContent = translations.papers.cummins.implication[lang];
            });
            
            ps.forEach((p, pIndex) => {
                if (pIndex === 0) p.textContent = translations.papers.cummins.foundationContent[lang];
                else if (pIndex === 1) p.textContent = translations.papers.cummins.implicationContent[lang];
            });
            
            // Translate list items
            uls.forEach((ul, ulIndex) => {
                if (ulIndex === 0) { // Transfer mechanisms list
                    const lis = ul.querySelectorAll('li');
                    if (lis.length >= 4) {
                        lis[0].innerHTML = '<strong>' + (lang === 'zh' ? '概念轉移：' : 'Conceptual Transfer: ') + '</strong>' + (lang === 'zh' ? '母語的概念知識有助於外語理解' : 'First language conceptual knowledge aids foreign language understanding');
                        lis[1].innerHTML = '<strong>' + (lang === 'zh' ? '元認知轉移：' : 'Metacognitive Transfer: ') + '</strong>' + (lang === 'zh' ? '母語的學習策略可應用於外語' : 'First language learning strategies can be applied to foreign language');
                        lis[2].innerHTML = '<strong>' + (lang === 'zh' ? '語言意識：' : 'Language Awareness: ') + '</strong>' + (lang === 'zh' ? '比較兩種語言增強語言意識' : 'Comparing two languages enhances language awareness');
                        lis[3].innerHTML = '<strong>' + (lang === 'zh' ? '身份整合：' : 'Identity Integration: ') + '</strong>' + (lang === 'zh' ? '支持學習者的多語言身份' : 'Support learners\' multilingual identity');
                    }
                }
            });
            
            citations.forEach(citation => {
                const strong = citation.querySelector('strong');
                if (strong && strong.textContent.includes('核心觀點')) {
                    citation.innerHTML = '<strong>' + translations.papers.cummins.view[lang] + '</strong>' + translations.papers.cummins.viewContent[lang];
                }
            });
        } else if (h3 && h3.textContent.includes('Sweller')) {
            const link = h3.querySelector('a');
            if (link) {
                h3.innerHTML = '<a href="' + link.href + '" class="citation-link">Sweller (2011)</a> - ' + translations.papers.sweller.title[lang];
            }
            const h4s = summary.querySelectorAll('h4');
            const ps = summary.querySelectorAll('p');
            const uls = summary.querySelectorAll('ul');
            const citations = summary.querySelectorAll('.citation');
            
            h4s.forEach((h4, h4Index) => {
                if (h4Index === 0) h4.textContent = translations.papers.sweller.foundation[lang];
                else if (h4Index === 1) h4.textContent = translations.papers.sweller.loadTypes[lang];
                else if (h4Index === 2) h4.textContent = translations.papers.sweller.role[lang];
            });
            
            ps.forEach((p, pIndex) => {
                if (pIndex === 0) p.textContent = translations.papers.sweller.foundationContent[lang];
                else if (pIndex === 1) p.textContent = translations.papers.sweller.roleContent[lang];
            });
            
            // Translate list items
            uls.forEach((ul, ulIndex) => {
                if (ulIndex === 0) { // Load types list
                    const lis = ul.querySelectorAll('li');
                    if (lis.length >= 3) {
                        lis[0].innerHTML = '<strong>' + (lang === 'zh' ? '內在負荷：' : 'Intrinsic Load: ') + '</strong>' + (lang === 'zh' ? '學習內容本身的複雜度' : 'The complexity of the learning content itself');
                        lis[1].innerHTML = '<strong>' + (lang === 'zh' ? '外在負荷：' : 'Extraneous Load: ') + '</strong>' + (lang === 'zh' ? '教學設計造成的額外負荷' : 'Additional load caused by instructional design');
                        lis[2].innerHTML = '<strong>' + (lang === 'zh' ? '相關負荷：' : 'Germane Load: ') + '</strong>' + (lang === 'zh' ? '用於學習的認知資源' : 'Cognitive resources used for learning');
                    }
                }
            });
            
            citations.forEach(citation => {
                const strong = citation.querySelector('strong');
                if (strong && strong.textContent.includes('科學依據')) {
                    citation.innerHTML = '<strong>' + translations.papers.sweller.basis[lang] + '</strong>' + translations.papers.sweller.basisContent[lang];
                }
            });
        }
    });
    
    // Update practical application section
    // Find all sections and check for practical application
    const allSectionsForPractical = document.querySelectorAll('.section');
    allSectionsForPractical.forEach(practicalSection => {
        const h2 = practicalSection.querySelector('h2');
        if (h2 && (h2.textContent.includes('實務應用') || h2.textContent.includes('Practical Application'))) {
            const findingCards = practicalSection.querySelectorAll('.finding-card');
            findingCards.forEach((card, index) => {
                const h4 = card.querySelector('h4');
                
                if (h4 && (h4.textContent.includes('戰略性母語') || h4.textContent.includes('Strategic First Language'))) {
                    h4.textContent = translations.practical.principles.title[lang];
                    const lis = card.querySelectorAll('li');
                    if (lis.length >= 3) {
                        lis[0].textContent = translations.practical.principles.items.purpose[lang];
                        lis[1].textContent = translations.practical.principles.items.learner[lang];
                        lis[2].textContent = translations.practical.principles.items.progressive[lang];
                    }
                } else if (h4 && (h4.textContent.includes('具體應用') || h4.textContent.includes('Specific Application'))) {
                    h4.textContent = translations.practical.scenarios.title[lang];
                    const lis = card.querySelectorAll('li');
                    if (lis.length >= 5) {
                        lis[0].textContent = translations.practical.scenarios.items.grammar[lang];
                        lis[1].textContent = translations.practical.scenarios.items.culture[lang];
                        lis[2].textContent = translations.practical.scenarios.items.instructions[lang];
                        lis[3].textContent = translations.practical.scenarios.items.check[lang];
                        lis[4].textContent = translations.practical.scenarios.items.support[lang];
                    }
                } else if (h4 && (h4.textContent.includes('給家長') || h4.textContent.includes('Recommendations for Parents'))) {
                    h4.textContent = translations.practical.parents.title[lang];
                    const lis = card.querySelectorAll('li');
                    if (lis.length >= 3) {
                        lis[0].textContent = translations.practical.parents.items.practice[lang];
                        lis[1].textContent = translations.practical.parents.items.resources[lang];
                        lis[2].textContent = translations.practical.parents.items.celebrate[lang];
                    }
                }
            });
        }
    });
    
    // Update language switching training section
    const switchingSections = document.querySelectorAll('.section');
    switchingSections.forEach(section => {
        const h2 = section.querySelector('h2');
        if (h2 && (h2.textContent.includes('語言切換') || h2.textContent.includes('Language Switching'))) {
            // Translate daily practice, flashcards, thinking, conversation cards
            const findingCards = section.querySelectorAll('.finding-card');
            findingCards.forEach((card, index) => {
                const h4 = card.querySelector('h4');
                const p = card.querySelector('p');
                
                if (index === 0 && h4 && h4.textContent.includes('每日切換')) {
                    h4.textContent = translations.practical.switching.daily.title[lang];
                    if (p) p.textContent = translations.practical.switching.daily.content[lang];
                } else if (index === 1 && h4 && h4.textContent.includes('使用閃卡')) {
                    h4.textContent = translations.practical.switching.flashcards.title[lang];
                    if (p) p.textContent = translations.practical.switching.flashcards.content[lang];
                } else if (index === 2 && h4 && h4.textContent.includes('雙語思考')) {
                    h4.textContent = translations.practical.switching.thinking.title[lang];
                    if (p) p.textContent = translations.practical.switching.thinking.content[lang];
                } else if (index === 3 && h4 && h4.textContent.includes('與他人對話')) {
                    h4.textContent = translations.practical.switching.conversation.title[lang];
                    if (p) p.textContent = translations.practical.switching.conversation.content[lang];
                }
            });
            
            // Translate accurate switching, precise switching, fast switching sections
            const accurateSection = section.querySelector('.section');
            if (accurateSection) {
                const h3 = accurateSection.querySelector('h3');
                if (h3 && h3.textContent.includes('正確切換')) {
                    h3.textContent = translations.practical.switching.accurate.title[lang];
                    const introP = accurateSection.querySelector('p');
                    if (introP && introP.textContent.includes('重點是讓對方理解')) {
                        introP.textContent = translations.practical.switching.accurate.intro[lang];
                    }
                    // Translate the 4 items in accurate switching
                    const accurateCards = accurateSection.querySelectorAll('.finding-card');
                    accurateCards.forEach((card, cardIndex) => {
                        const h4 = card.querySelector('h4');
                        const ps = card.querySelectorAll('p');
                        
                        if (cardIndex === 0 && h4 && h4.textContent.includes('基本意思')) {
                            h4.textContent = translations.practical.switching.accurate.items.basic.title[lang];
                            ps.forEach((p, pIndex) => {
                                if (pIndex === 0 && p.textContent.includes('方法：')) {
                                    p.innerHTML = '<strong>' + translations.practical.switching.accurate.items.basic.method[lang] + '</strong>' + translations.practical.switching.accurate.items.basic.methodContent[lang];
                                } else if (pIndex === 1 && p.textContent.includes('練習：')) {
                                    p.innerHTML = '<strong>' + translations.practical.switching.accurate.items.basic.practice[lang] + '</strong>' + translations.practical.switching.accurate.items.basic.practiceContent[lang];
                                }
                            });
                        } else if (cardIndex === 1 && h4 && h4.textContent.includes('實用表達')) {
                            h4.textContent = translations.practical.switching.accurate.items.practical.title[lang];
                            ps.forEach((p, pIndex) => {
                                if (pIndex === 0 && p.textContent.includes('方法：')) {
                                    p.innerHTML = '<strong>' + translations.practical.switching.accurate.items.practical.method[lang] + '</strong>' + translations.practical.switching.accurate.items.practical.methodContent[lang];
                                } else if (pIndex === 1 && p.textContent.includes('練習：')) {
                                    p.innerHTML = '<strong>' + translations.practical.switching.accurate.items.practical.practice[lang] + '</strong>' + translations.practical.switching.accurate.items.practical.practiceContent[lang];
                                }
                            });
                        } else if (cardIndex === 2 && h4 && h4.textContent.includes('手勢')) {
                            h4.textContent = translations.practical.switching.accurate.items.gesture.title[lang];
                            ps.forEach((p, pIndex) => {
                                if (pIndex === 0 && p.textContent.includes('方法：')) {
                                    p.innerHTML = '<strong>' + translations.practical.switching.accurate.items.gesture.method[lang] + '</strong>' + translations.practical.switching.accurate.items.gesture.methodContent[lang];
                                } else if (pIndex === 1 && p.textContent.includes('練習：')) {
                                    p.innerHTML = '<strong>' + translations.practical.switching.accurate.items.gesture.practice[lang] + '</strong>' + translations.practical.switching.accurate.items.gesture.practiceContent[lang];
                                }
                            });
                        } else if (cardIndex === 3 && h4 && h4.textContent.includes('重複')) {
                            h4.textContent = translations.practical.switching.accurate.items.repeat.title[lang];
                            ps.forEach((p, pIndex) => {
                                if (pIndex === 0 && p.textContent.includes('方法：')) {
                                    p.innerHTML = '<strong>' + translations.practical.switching.accurate.items.repeat.method[lang] + '</strong>' + translations.practical.switching.accurate.items.repeat.methodContent[lang];
                                } else if (pIndex === 1 && p.textContent.includes('練習：')) {
                                    p.innerHTML = '<strong>' + translations.practical.switching.accurate.items.repeat.practice[lang] + '</strong>' + translations.practical.switching.accurate.items.repeat.practiceContent[lang];
                                }
                            });
                        }
                    });
                }
                
                // Translate precise switching section
                const allSections = section.querySelectorAll('.section');
                allSections.forEach((subSection, subIndex) => {
                    const h3 = subSection.querySelector('h3');
                    if (h3 && (h3.textContent.includes('精確切換') || h3.textContent.includes('Precise Switching'))) {
                        h3.textContent = translations.practical.switching.precise.title[lang];
                        const introP = subSection.querySelector('p');
                        if (introP && (introP.textContent.includes('提升詞彙使用') || introP.textContent.includes('Improve the precision'))) {
                            introP.textContent = translations.practical.switching.precise.intro[lang];
                        }
                        // Translate the 4 items in precise switching
                        const preciseCards = subSection.querySelectorAll('.finding-card');
                        preciseCards.forEach((card, cardIndex) => {
                            const h4 = card.querySelector('h4');
                            const ps = card.querySelectorAll('p');
                            
                            if (cardIndex === 0 && h4 && (h4.textContent.includes('同義詞') || h4.textContent.includes('Synonym'))) {
                                h4.textContent = translations.practical.switching.precise.items.synonyms.title[lang];
                                ps.forEach((p, pIndex) => {
                                    if (pIndex === 0 && p.textContent.includes('方法：')) {
                                        p.innerHTML = '<strong>' + translations.practical.switching.precise.items.synonyms.method[lang] + '</strong>' + translations.practical.switching.precise.items.synonyms.methodContent[lang];
                                    } else if (pIndex === 1 && p.textContent.includes('練習：')) {
                                        p.innerHTML = '<strong>' + translations.practical.switching.precise.items.synonyms.practice[lang] + '</strong>' + translations.practical.switching.precise.items.synonyms.practiceContent[lang];
                                    }
                                });
                            } else if (cardIndex === 1 && h4 && (h4.textContent.includes('語域') || h4.textContent.includes('Register'))) {
                                h4.textContent = translations.practical.switching.precise.items.register.title[lang];
                                ps.forEach((p, pIndex) => {
                                    if (pIndex === 0 && p.textContent.includes('方法：')) {
                                        p.innerHTML = '<strong>' + translations.practical.switching.precise.items.register.method[lang] + '</strong>' + translations.practical.switching.precise.items.register.methodContent[lang];
                                    } else if (pIndex === 1 && p.textContent.includes('練習：')) {
                                        p.innerHTML = '<strong>' + translations.practical.switching.precise.items.register.practice[lang] + '</strong>' + translations.practical.switching.precise.items.register.practiceContent[lang];
                                    }
                                });
                            } else if (cardIndex === 2 && h4 && (h4.textContent.includes('詞彙搭配') || h4.textContent.includes('Collocation'))) {
                                h4.textContent = translations.practical.switching.precise.items.collocation.title[lang];
                                ps.forEach((p, pIndex) => {
                                    if (pIndex === 0 && p.textContent.includes('方法：')) {
                                        p.innerHTML = '<strong>' + translations.practical.switching.precise.items.collocation.method[lang] + '</strong>' + translations.practical.switching.precise.items.collocation.methodContent[lang];
                                    } else if (pIndex === 1 && p.textContent.includes('練習：')) {
                                        p.innerHTML = '<strong>' + translations.practical.switching.precise.items.collocation.practice[lang] + '</strong>' + translations.practical.switching.precise.items.collocation.practiceContent[lang];
                                    }
                                });
                            } else if (cardIndex === 3 && h4 && (h4.textContent.includes('語義精確') || h4.textContent.includes('Semantic'))) {
                                h4.textContent = translations.practical.switching.precise.items.semantics.title[lang];
                                ps.forEach((p, pIndex) => {
                                    if (pIndex === 0 && p.textContent.includes('方法：')) {
                                        p.innerHTML = '<strong>' + translations.practical.switching.precise.items.semantics.method[lang] + '</strong>' + translations.practical.switching.precise.items.semantics.methodContent[lang];
                                    } else if (pIndex === 1 && p.textContent.includes('練習：')) {
                                        p.innerHTML = '<strong>' + translations.practical.switching.precise.items.semantics.practice[lang] + '</strong>' + translations.practical.switching.precise.items.semantics.practiceContent[lang];
                                    }
                                });
                            }
                        });
                    } else if (h3 && (h3.textContent.includes('快速切換') || h3.textContent.includes('Fast Switching'))) {
                        h3.textContent = translations.practical.switching.fast.title[lang];
                        const introP = subSection.querySelector('p');
                        if (introP && (introP.textContent.includes('提升語言切換') || introP.textContent.includes('Improve the speed'))) {
                            introP.textContent = translations.practical.switching.fast.intro[lang];
                        }
                        // Translate the 4 items in fast switching
                        const fastCards = subSection.querySelectorAll('.finding-card');
                        fastCards.forEach((card, cardIndex) => {
                            const h4 = card.querySelector('h4');
                            const ps = card.querySelectorAll('p');
                            
                            if (cardIndex === 0 && h4 && (h4.textContent.includes('即時反應') || h4.textContent.includes('Instant Reaction'))) {
                                h4.textContent = translations.practical.switching.fast.items.instant.title[lang];
                                ps.forEach((p, pIndex) => {
                                    if (pIndex === 0 && p.textContent.includes('方法：')) {
                                        p.innerHTML = '<strong>' + translations.practical.switching.fast.items.instant.method[lang] + '</strong>' + translations.practical.switching.fast.items.instant.methodContent[lang];
                                    } else if (pIndex === 1 && p.textContent.includes('練習：')) {
                                        p.innerHTML = '<strong>' + translations.practical.switching.fast.items.instant.practice[lang] + '</strong>' + translations.practical.switching.fast.items.instant.practiceContent[lang];
                                    }
                                });
                            } else if (cardIndex === 1 && h4 && (h4.textContent.includes('思維模式') || h4.textContent.includes('Thinking Mode'))) {
                                h4.textContent = translations.practical.switching.fast.items.thinking.title[lang];
                                ps.forEach((p, pIndex) => {
                                    if (pIndex === 0 && p.textContent.includes('方法：')) {
                                        p.innerHTML = '<strong>' + translations.practical.switching.fast.items.thinking.method[lang] + '</strong>' + translations.practical.switching.fast.items.thinking.methodContent[lang];
                                    } else if (pIndex === 1 && p.textContent.includes('練習：')) {
                                        p.innerHTML = '<strong>' + translations.practical.switching.fast.items.thinking.practice[lang] + '</strong>' + translations.practical.switching.fast.items.thinking.practiceContent[lang];
                                    }
                                });
                            } else if (cardIndex === 2 && h4 && (h4.textContent.includes('流暢度') || h4.textContent.includes('Fluency'))) {
                                h4.textContent = translations.practical.switching.fast.items.fluency.title[lang];
                                ps.forEach((p, pIndex) => {
                                    if (pIndex === 0 && p.textContent.includes('方法：')) {
                                        p.innerHTML = '<strong>' + translations.practical.switching.fast.items.fluency.method[lang] + '</strong>' + translations.practical.switching.fast.items.fluency.methodContent[lang];
                                    } else if (pIndex === 1 && p.textContent.includes('練習：')) {
                                        p.innerHTML = '<strong>' + translations.practical.switching.fast.items.fluency.practice[lang] + '</strong>' + translations.practical.switching.fast.items.fluency.practiceContent[lang];
                                    }
                                });
                            } else if (cardIndex === 3 && h4 && (h4.textContent.includes('自動化') || h4.textContent.includes('Automation'))) {
                                h4.textContent = translations.practical.switching.fast.items.automation.title[lang];
                                ps.forEach((p, pIndex) => {
                                    if (pIndex === 0 && p.textContent.includes('方法：')) {
                                        p.innerHTML = '<strong>' + translations.practical.switching.fast.items.automation.method[lang] + '</strong>' + translations.practical.switching.fast.items.automation.methodContent[lang];
                                    } else if (pIndex === 1 && p.textContent.includes('練習：')) {
                                        p.innerHTML = '<strong>' + translations.practical.switching.fast.items.automation.practice[lang] + '</strong>' + translations.practical.switching.fast.items.automation.practiceContent[lang];
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }
    });
    
    // Update practical sections
    const practicalSections = document.querySelectorAll('.section h2');
    practicalSections.forEach(title => {
        const text = title.textContent.trim();
        if (text.includes('實務應用') || text.includes('Practical Application')) {
            title.textContent = translations.practical.title[lang];
        } else if (text.includes('語言切換') || text.includes('Language Switching')) {
            title.textContent = translations.practical.switching.title[lang];
        }
    });
    
    // Update references section
    const refTitle = document.querySelector('#references h2');
    if (refTitle) refTitle.textContent = translations.references.title[lang];
    
    const refSections = document.querySelectorAll('#references h3');
    refSections.forEach(section => {
        const text = section.textContent.trim();
        if (text.includes('經典研究') || text.includes('Classic Studies')) {
            section.textContent = translations.references.classic[lang];
        } else if (text.includes('最新研究') || text.includes('Recent Studies')) {
            section.textContent = translations.references.recent[lang];
        } else if (text.includes('香港雙語教育研究') || (text.includes('Hong Kong') && text.includes('Bilingual'))) {
            section.textContent = translations.references.hk[lang];
        } else if (text.includes('歷史文獻') || text.includes('Historical')) {
            section.textContent = translations.references.historical[lang];
        }
    });
    
    // Update all Chinese-only text elements with data attributes
    document.querySelectorAll('[data-zh]').forEach(el => {
        if (el.dataset.zh && el.dataset.en) {
            el.textContent = lang === 'zh' ? el.dataset.zh : el.dataset.en;
        }
    });
    
    // Update all elements with innerHTML translations
    document.querySelectorAll('[data-zh-html]').forEach(el => {
        if (el.dataset.zhHtml && el.dataset.enHtml) {
            el.innerHTML = lang === 'zh' ? el.dataset.zhHtml : el.dataset.enHtml;
        }
    });
    
    // Store language preference
    localStorage.setItem('pageLanguage', lang);
}

// Make logo clickable to toggle between Chinese and English
const navLogo = document.querySelector('.nav-logo');
if (navLogo) {
    navLogo.addEventListener('click', () => {
        const newLang = currentLanguage === 'zh' ? 'en' : 'zh';
        updateLanguage(newLang);
    });
}

// Always default to Chinese on page load
// The HTML content should be in Chinese by default
// Only switch to English if user explicitly toggles
const logoText = document.querySelector('.nav-logo span:first-child');
const isCurrentlyChinese = logoText && logoText.textContent === '雙語學習研究';

// Force Chinese as default - don't load from localStorage on initial page load
// This ensures the page always starts in Chinese
if (!isCurrentlyChinese) {
    // Page content is not in Chinese, set it to Chinese
    updateLanguage('zh');
} else {
    // Page is already in Chinese (correct default state)
    currentLanguage = 'zh';
    // Clear any saved English preference to ensure fresh start
    // User can toggle to English if they want
    // localStorage.removeItem('pageLanguage'); // Uncomment if you want to always start fresh
}

// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation highlighting based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section, .abstract, .references');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Initialize active state on page load
window.addEventListener('load', () => {
    const firstLink = document.querySelector('.nav-link');
    if (firstLink) {
        firstLink.classList.add('active');
    }
});

// Citation highlighting functionality
document.querySelectorAll('.citation-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove previous selections
        document.querySelectorAll('.reference-item.selected').forEach(item => {
            item.classList.remove('selected');
        });
        
        // Get the target reference ID
        const targetId = link.getAttribute('href').substring(1);
        const targetReference = document.getElementById(targetId);
        
        if (targetReference) {
            // Add selected class to the target reference
            targetReference.classList.add('selected');
            
            // Calculate scroll position to center the target reference
            const targetRect = targetReference.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const navHeight = 60; // Fixed nav height
            const bottomPadding = 200; // Extra space at bottom
            
            // Calculate the ideal scroll position to center the reference with more top space
            const idealScrollTop = window.pageYOffset + targetRect.top - (windowHeight * 0.4) + (targetRect.height / 2);
            
            // Ensure we don't scroll beyond the document bounds
            const maxScrollTop = document.documentElement.scrollHeight - windowHeight;
            const finalScrollTop = Math.min(Math.max(idealScrollTop, 0), maxScrollTop - bottomPadding);
            
            window.scrollTo({
                top: finalScrollTop,
                behavior: 'smooth'
            });
        }
    });
});