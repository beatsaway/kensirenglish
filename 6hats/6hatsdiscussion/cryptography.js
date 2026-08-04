/**
 * Six Hats: Cryptography — passwords, steganography, ciphers, quantum crypto, SSH
 * KS3 vocab blanks + discussion questions (繁體中文 glosses)
 */
window.sixHatSets = [
  {
    title: "🔑 What's my password?",
    link: "https://www.youtube.com/shorts/riuEVPBg4ZU",
    linkLabel: "Watch video",
    articleText:
      "<p>This short jokes about forgetting a password, getting a code by email, and being asked 'Are you a robot?' Real life uses passwords plus extra checks (codes, CAPTCHAs) to prove you are you — but weak habits still leak accounts.</p>",
    vocablist: [
      { word: "password", translation: "密碼", emoji: "🔑" },
      { word: "code", translation: "驗證碼", emoji: "📱" },
      { word: "email", translation: "電郵", emoji: "📧" },
      { word: "verify", translation: "驗證", emoji: "✅" },
      { word: "robot", translation: "機械人", emoji: "🤖" }
    ],
    vocabex: "You forget your <span class='vocab-blank' data-answer='password'></span>, check your <span class='vocab-blank' data-answer='email'></span> for a <span class='vocab-blank' data-answer='code'></span>, then <span class='vocab-blank' data-answer='verify'></span> you are not a <span class='vocab-blank' data-answer='robot'></span>.",
    questions: [
      { emoji: "📊", text: "What happens in the short?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Have you ever forgotten a password? How did it feel?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why do we need email passwords?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "What can go wrong if someone else gets your email code?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "📋", text: "How do websites check you are not a robot?", hat: "blue-hat", hatLabel: "Blue Hat" },
      { emoji: "💡", text: "What three habits make passwords safer?", hat: "green-hat", hatLabel: "Green Hat" }
    ]
  },
  {
    title: "🔊 Hide a message in sound — spectrograms",
    link: "https://www.youtube.com/shorts/9r8Tlti1gpU",
    linkLabel: "Watch video",
    articleText:
      "<p><strong>Steganography</strong> hides a secret inside something that looks normal. This short turns secret text into an audio file. You only see the hidden writing if you look at the sound’s <strong>spectrogram</strong> (a picture of the frequencies) — a bit like Morse code in sound.</p>",
    vocablist: [
      { word: "steganography", translation: "隱寫術", emoji: "🕵️" },
      { word: "spectrogram", translation: "頻譜圖", emoji: "📊" },
      { word: "audio", translation: "音訊", emoji: "🔊" },
      { word: "hide", translation: "隱藏", emoji: "🙈" },
      { word: "secret", translation: "秘密", emoji: "🤫" }
    ],
    vocabex: "<span class='vocab-blank' data-answer='Steganography'></span> can <span class='vocab-blank' data-answer='hide'></span> a <span class='vocab-blank' data-answer='secret'></span> in <span class='vocab-blank' data-answer='audio'></span>. A <span class='vocab-blank' data-answer='spectrogram'></span> shows the hidden text as a picture.",
    questions: [
      { emoji: "📊", text: "What is this video about?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Does hiding a message in sound feel clever or creepy?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why might spectrogram secrets be useful?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "What could go wrong if the wrong person finds the spectrogram?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "📋", text: "How is this different from normal encryption?", hat: "blue-hat", hatLabel: "Blue Hat" },
      { emoji: "💡", text: "Where else could you hide a secret in everyday media?", hat: "green-hat", hatLabel: "Green Hat" }
    ]
  },
  {
    title: "🖼️ Hide a message inside an image",
    link: "https://www.youtube.com/shorts/fqO9NcO8scg",
    linkLabel: "Watch video",
    articleText:
      "<p>Another steganography trick: tuck a secret message into an ordinary photo. The picture still looks normal to the eye, but software can pull the hidden text out. Spies and privacy tools both use ideas like this.</p>",
    vocablist: [
      { word: "image", translation: "圖片", emoji: "🖼️" },
      { word: "hide", translation: "隱藏", emoji: "🙈" },
      { word: "message", translation: "訊息", emoji: "💬" },
      { word: "normal", translation: "普通的", emoji: "😐" },
      { word: "detect", translation: "偵測", emoji: "🔍" }
    ],
    vocabex: "You can <span class='vocab-blank' data-answer='hide'></span> a <span class='vocab-blank' data-answer='message'></span> in an <span class='vocab-blank' data-answer='image'></span> that still looks <span class='vocab-blank' data-answer='normal'></span>. Tools may still <span class='vocab-blank' data-answer='detect'></span> it.",
    questions: [
      { emoji: "📊", text: "What is this video about?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Would you try hiding a note in a photo for a friend?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why is it useful if the picture still looks normal?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "What problems can hidden image messages cause?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "📋", text: "How is hiding in an image similar to hiding in a spectrogram?", hat: "blue-hat", hatLabel: "Blue Hat" },
      { emoji: "💡", text: "Invent a safe classroom use for image steganography.", hat: "green-hat", hatLabel: "Green Hat" }
    ]
  },
  {
    title: "🔐 Why encryption matters — and why secrets may expire",
    link: "https://www.youtube.com/watch?v=uiiaAJ3c6dM",
    linkLabel: "Watch video",
    articleText:
      "<p>When you shop online or send a private message, you trust <strong>encryption</strong> to hide it. A common method uses a <strong>secret key</strong>: only sender and receiver can read the scrambled message.</p>" +
      "<p>Today’s codes are hard to break because they need huge time and computing power. But a future <strong>quantum computer</strong> might crack them in hours. That is why researchers are building new systems for the quantum age.</p>",
    vocablist: [
      { word: "encryption", translation: "加密", emoji: "🔐" },
      { word: "key", translation: "密鑰", emoji: "🔑" },
      { word: "scramble", translation: "打亂／加密", emoji: "🔀" },
      { word: "quantum computer", translation: "量子電腦", emoji: "💻" },
      { word: "trust", translation: "信任", emoji: "🤝" }
    ],
    vocabex: "We <span class='vocab-blank' data-answer='trust'></span> <span class='vocab-blank' data-answer='encryption'></span> to <span class='vocab-blank' data-answer='scramble'></span> messages with a secret <span class='vocab-blank' data-answer='key'></span>. A <span class='vocab-blank' data-answer='quantum computer'></span> may break old codes faster.",
    questions: [
      { emoji: "📊", text: "What is secret key cryptography?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Do you trust today's encryption with your bank details?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why is strong encryption useful in daily life?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "Why might all our secrets have an 'expiry date'?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "📋", text: "How is a simple alphabet-shift key different from a bank key?", hat: "blue-hat", hatLabel: "Blue Hat" },
      { emoji: "💡", text: "What should people do to stay safer online before quantum computers arrive?", hat: "green-hat", hatLabel: "Green Hat" }
    ]
  },
  {
    title: "📡 Quantum cryptography — Alice, Bob and Eve",
    link: "https://youtu.be/uiiaAJ3c6dM?t=129",
    linkLabel: "Watch from 2:09",
    articleText:
      "<p><strong>Quantum cryptography</strong> sends the key as photons (light particles). Filters change photon spin. Because of the <strong>Heisenberg uncertainty principle</strong>, an eavesdropper (Eve) who measures the photons will often change them — so Alice and Bob can spot the attack.</p>" +
      "<p>Bob does not know which filter to use at first. Later they compare only the filter <strong>scheme</strong> (not the 1s and 0s) and keep the matching bits as the key.</p>",
    vocablist: [
      { word: "photon", translation: "光子", emoji: "💡" },
      { word: "eavesdropper", translation: "竊聽者", emoji: "👂" },
      { word: "filter", translation: "濾鏡／濾波器", emoji: "🪟" },
      { word: "impossible", translation: "不可能的", emoji: "🚫" },
      { word: "secure", translation: "安全的", emoji: "🛡️" }
    ],
    vocabex: "A key made of <span class='vocab-blank' data-answer='photon'></span>s can stay <span class='vocab-blank' data-answer='secure'></span>. An <span class='vocab-blank' data-answer='eavesdropper'></span> who picks the wrong <span class='vocab-blank' data-answer='filter'></span> changes the spin — so perfect secret copying is almost <span class='vocab-blank' data-answer='impossible'></span>.",
    questions: [
      { emoji: "📊", text: "How is a quantum key different from a normal ones-and-zeros key on a wire?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Does 'impossible to break' make you feel safer — or sceptical?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why is it useful that Eve changes the photons when she listens?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "What problem does Bob have at the start — and what could still go wrong in real life?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "📋", text: "How do Alice and Bob build a shared key after sending the photons?", hat: "blue-hat", hatLabel: "Blue Hat" },
      { emoji: "💡", text: "Where in Hong Kong life would quantum cryptography be most useful first?", hat: "green-hat", hatLabel: "Green Hat" }
    ]
  },
  {
    title: "🪵 Spartan scytale — the stick cipher",
    link: "https://www.youtube.com/shorts/VQj_nIvGzME",
    linkLabel: "Watch video",
    articleText:
      "<p>Spartans wrapped leather around a wooden rod and wrote across it. Unwrapped, the letters looked scrambled. Only a rod of the same size lined the letters up again. Wrong size = still gibberish.</p>",
    vocablist: [
      { word: "scytale", translation: "密碼杖", emoji: "🪵" },
      { word: "wrap", translation: "包裹", emoji: "🔁" },
      { word: "scramble", translation: "打亂", emoji: "🔀" },
      { word: "match", translation: "匹配", emoji: "✅" },
      { word: "enemy", translation: "敵人", emoji: "⚔️" }
    ],
    vocabex: "A <span class='vocab-blank' data-answer='scytale'></span> lets you <span class='vocab-blank' data-answer='wrap'></span> a strip so letters <span class='vocab-blank' data-answer='scramble'></span> when opened. The receiver needs a rod that can <span class='vocab-blank' data-answer='match'></span> — or an <span class='vocab-blank' data-answer='enemy'></span> cannot read it.",
    questions: [
      { emoji: "📊", text: "How does a scytale hide a message?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Would you trust a stick cipher in a real war?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why was matching rod size a clever idea?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "How could an enemy still break this system?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "📋", text: "What is the 'key' in this cipher — the leather or the rod?", hat: "blue-hat", hatLabel: "Blue Hat" },
      { emoji: "💡", text: "Invent a classroom version of the scytale using paper and a bottle.", hat: "green-hat", hatLabel: "Green Hat" }
    ]
  },
  {
    title: "🍪 Cipher wheels and secret keys",
    links: [
      { url: "https://www.youtube.com/shorts/CyFx5yIr45I", label: "What is cryptography?" },
      { url: "https://youtu.be/skgfgIs1m-Y?t=494", label: "Cipher wheel — hide your cookies" }
    ],
    articleText:
      "<p>A <strong>cipher wheel</strong> lines up two alphabets so each letter maps to another (e.g. A = U). You replace every letter in the message. The mapping is the <strong>secret key</strong> — only tell it to the person who should read the note.</p>" +
      "<p>Example message: <em>hide your cookies</em>.</p>",
    vocablist: [
      { word: "cipher", translation: "密碼／密文系統", emoji: "🔠" },
      { word: "replace", translation: "取代", emoji: "🔄" },
      { word: "alphabet", translation: "字母表", emoji: "🔤" },
      { word: "secret", translation: "秘密", emoji: "🤫" },
      { word: "decode", translation: "解碼", emoji: "📖" }
    ],
    vocabex: "A <span class='vocab-blank' data-answer='cipher'></span> wheel lets you <span class='vocab-blank' data-answer='replace'></span> each letter using a shifted <span class='vocab-blank' data-answer='alphabet'></span>. Keep the key <span class='vocab-blank' data-answer='secret'></span> so only friends can <span class='vocab-blank' data-answer='decode'></span> it.",
    questions: [
      { emoji: "📊", text: "How does a cipher wheel turn a message into code?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Would you enjoy sending coded notes to classmates?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why must you only share the key with the right person?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "What happens if you say the key out loud in class?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "📋", text: "What is the difference between the message and the key?", hat: "blue-hat", hatLabel: "Blue Hat" },
      { emoji: "💡", text: "Make a tiny cipher for three friends — what key will you use?", hat: "green-hat", hatLabel: "Green Hat" }
    ]
  },
  {
    title: "📚 Types of cipher",
    link: "https://www.youtube.com/shorts/PflizTkdwEE",
    linkLabel: "Watch video",
    articleText:
      "<p>A cipher turns readable text into unreadable ciphertext. Types include:</p>" +
      "<ul>" +
      "<li><strong>Caesar</strong> — shift every letter by a fixed number (ABC → CDE with shift 2).</li>" +
      "<li><strong>Monoalphabetic</strong> — each letter has one random substitute (ABC → SQR).</li>" +
      "<li><strong>Homophonic</strong> — one letter can become several options (A → 27 / 37 / 87).</li>" +
      "<li><strong>Polygram</strong> — replace blocks of letters (ABC → WXY).</li>" +
      "</ul>",
    vocablist: [
      { word: "ciphertext", translation: "密文", emoji: "📜" },
      { word: "shift", translation: "移位", emoji: "➡️" },
      { word: "substitute", translation: "替代", emoji: "🔀" },
      { word: "block", translation: "字塊", emoji: "🧱" },
      { word: "readable", translation: "可讀的", emoji: "👀" }
    ],
    vocabex: "Ciphers hide <span class='vocab-blank' data-answer='readable'></span> text as <span class='vocab-blank' data-answer='ciphertext'></span>. Caesar uses a <span class='vocab-blank' data-answer='shift'></span>; others <span class='vocab-blank' data-answer='substitute'></span> letters or whole <span class='vocab-blank' data-answer='block'></span>s.",
    questions: [
      { emoji: "📊", text: "Name three types of cipher from the video.", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Which type sounds the most fun to try?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why might a homophonic cipher be stronger than a simple Caesar shift?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "Which type might still be easy to break — and why?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "📋", text: "How is a polygram cipher different from replacing one letter at a time?", hat: "blue-hat", hatLabel: "Blue Hat" },
      { emoji: "💡", text: "Design a mini cipher for your class chat group.", hat: "green-hat", hatLabel: "Green Hat" }
    ]
  },
  {
    title: "🖥️ SSH — paint pots, shared secrets and man-in-the-middle",
    link: "https://youtu.be/aoag03mSuXQ?t=727",
    linkLabel: "Watch from 12:07",
    articleText:
      "<p>In 1995 a sniffing attack stole plain-text passwords on a campus network. <strong>Tatu Ylönen</strong> built <strong>SSH</strong> (Secure Shell) so remote logins stay encrypted.</p>" +
      "<p>Two ideas matter: agree a shared secret over an open line (like mixing public + private paint colours), and <strong>authenticate</strong> who you talk to (RSA-style public keys) so a man-in-the-middle cannot pretend to be your friend.</p>",
    vocablist: [
      { word: "plain text", translation: "明文", emoji: "📄" },
      { word: "shared secret", translation: "共享密鑰", emoji: "🤝" },
      { word: "authenticate", translation: "認證", emoji: "✅" },
      { word: "man-in-the-middle", translation: "中間人攻擊", emoji: "🕵️" },
      { word: "SSH", translation: "安全外殼協定", emoji: "🖥️" }
    ],
    vocabex: "Login in <span class='vocab-blank' data-answer='plain text'></span> is unsafe. <span class='vocab-blank' data-answer='SSH'></span> builds a <span class='vocab-blank' data-answer='shared secret'></span> and can <span class='vocab-blank' data-answer='authenticate'></span> the other side to stop a <span class='vocab-blank' data-answer='man-in-the-middle'></span>.",
    questions: [
      { emoji: "📊", text: "Why was SSH invented in 1995?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Does the paint-mixing story make Diffie–Hellman easier to understand?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why is authenticating the other computer so important?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "What can a man-in-the-middle do if authentication fails?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "📋", text: "How do the 'public colour' and 'private colour' steps create a shared secret?", hat: "blue-hat", hatLabel: "Blue Hat" },
      { emoji: "💡", text: "Where else online should we refuse plain-text passwords today?", hat: "green-hat", hatLabel: "Green Hat" }
    ]
  },
  {
    title: "📜 Caesar cipher and frequency analysis",
    link: "https://youtu.be/sMOZf4GN3oc?t=4",
    linkLabel: "Watch from 0:04",
    articleText:
      "<p>Julius Caesar shifted each letter by a fixed number (e.g. shift 3: A→D). Easy for friends, weak for enemies. Centuries later, <strong>Al-Kindi</strong> used <strong>frequency analysis</strong>: count letters in the ciphertext and match the 'fingerprint' of the language (in English, E is common) to find the shift.</p>",
    vocablist: [
      { word: "Caesar cipher", translation: "凱撒密碼", emoji: "🏛️" },
      { word: "shift", translation: "移位", emoji: "➡️" },
      { word: "frequency", translation: "頻率", emoji: "📊" },
      { word: "fingerprint", translation: "指紋／特徵", emoji: "🖐️" },
      { word: "break", translation: "破解", emoji: "🔨" }
    ],
    vocabex: "A <span class='vocab-blank' data-answer='Caesar cipher'></span> uses a fixed <span class='vocab-blank' data-answer='shift'></span>. Codebreakers study letter <span class='vocab-blank' data-answer='frequency'></span> like a language <span class='vocab-blank' data-answer='fingerprint'></span> to <span class='vocab-blank' data-answer='break'></span> it.",
    questions: [
      { emoji: "📊", text: "How does the Caesar cipher work?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Would you feel safe using Caesar for a real secret today?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why was a simple shift still useful for hundreds of years?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "How does frequency analysis break Caesar?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "📋", text: "What is the 'fingerprint' of English in this video?", hat: "blue-hat", hatLabel: "Blue Hat" },
      { emoji: "💡", text: "Encode a short class message with shift 3 — can a friend break it without the key?", hat: "green-hat", hatLabel: "Green Hat" }
    ]
  },
  {
    title: "🦗 Cicada 3301 — who is behind it?",
    link: "https://www.youtube.com/shorts/rQZyioC9yuI",
    linkLabel: "Watch video",
    articleText:
      "<p>On 4 January 2012, an anonymous post on 4chan said they were looking for highly intelligent people. The image hid a cipher that led to more puzzles — websites, books, phone calls, and even 14 QR codes across five countries.</p>" +
      "<p>Some thought it was a prank; others said it was too big for one person. A few solvers reached a final stage but were told not to share. Later posts said recruitment was complete. Puzzles returned in later years; the third is still unsolved, and 3301 went quiet. Nobody knows for sure who ran it.</p>",
    vocablist: [
      { word: "anonymous", translation: "匿名的", emoji: "🎭" },
      { word: "puzzle", translation: "謎題", emoji: "🧩" },
      { word: "cipher", translation: "密碼", emoji: "🔐" },
      { word: "recruitment", translation: "招募", emoji: "📢" },
      { word: "mystery", translation: "謎團", emoji: "❓" }
    ],
    vocabex: "An <span class='vocab-blank' data-answer='anonymous'></span> group posted a <span class='vocab-blank' data-answer='cipher'></span> and a hard <span class='vocab-blank' data-answer='puzzle'></span> trail for <span class='vocab-blank' data-answer='recruitment'></span>. Cicada 3301 is still an internet <span class='vocab-blank' data-answer='mystery'></span>.",
    questions: [
      { emoji: "📊", text: "What is Cicada 3301?", hat: "white-hat", hatLabel: "White Hat" },
      { emoji: "😊", text: "Would you try to solve a puzzle like this?", hat: "red-hat", hatLabel: "Red Hat" },
      { emoji: "🌟", text: "Why might a group use hard puzzles to find smart people?", hat: "yellow-hat", hatLabel: "Yellow Hat" },
      { emoji: "⚠️", text: "What could go wrong if you chase an anonymous online puzzle?", hat: "black-hat", hatLabel: "Black Hat" },
      { emoji: "📋", text: "How did the puzzles become more elaborate over time?", hat: "blue-hat", hatLabel: "Blue Hat" },
      { emoji: "💡", text: "Who do you think was behind Cicada 3301 — and why?", hat: "green-hat", hatLabel: "Green Hat" }
    ]
  }
];
