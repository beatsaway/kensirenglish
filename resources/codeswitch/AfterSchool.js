// RULES FOR THIS FILE:
// 1. Language switching rule: If cvocab word is English → blank in ctext must be Cantonese. If cvocab word is Cantonese → blank in ctext must be English. Vice versa for evocab/etext.
// 2. Blank completeness rule: Every word in evocab must have a corresponding blank [word:index] in etext. Every word in cvocab must have a corresponding blank in ctext.

window.AfterSchool = [
  {
    ctitle: "放學衝去7仔",
    ctext: "四點一[放學:0]，我同Jason即刻衝去[7仔:1]。\n佢話要買[魚蛋:2]同[思樂冰:3]，我淨係想搶最後一條[腸仔:4]。\n結帳先發現八達通冇[入錢:5]。",
    cvocab: "Dismissed, 7-Eleven, Fish balls, Slurpee, Sausage on a stick, Top up",
    cbracketstuff: "放學, 7仔, 魚蛋, 思樂冰, 腸仔, 入錢",

    etitle: "7-Eleven after the bell",
    etext: "The moment school [dismissed:0] at four, Jason and I ran to [7-Eleven:1].\nHe wanted [fish balls:2] and a [Slurpee:3]; I just needed one last [sausage on a stick:4].\nAt the till I realised my Octopus card was not [topped up:5].",
    evocab: "Dismissed, 7-Eleven, Fish balls, Slurpee, Sausage on a stick, Top up",
    edef: "Dismissed: school day ends | 7-Eleven: convenience store chain | Fish balls: street snack | Slurpee: iced drink from 7-Eleven | Sausage on a stick: classic HK snack | Top up: add money to Octopus card"
  },
  {
    ctitle: "港鐵放學人潮",
    ctext: "一上[月台:0]就已經係[逼爆:1]。\n我部電話冇[信號:2]，WhatsApp群組仲不停[彈message:3]。\n隔籬個阿叔個背囊[頂住:4]我，我成程都企到[腳麻:5]。",
    cvocab: "Platform, Packed, Signal, Notifications, Poking, Numb legs",
    cbracketstuff: "月台, 逼爆, 信號, 彈message, 頂住, 腳麻",

    etitle: "MTR after school",
    etext: "The [platform:0] was already [packed:1] when we got on.\nMy phone had no [signal:2], but the group chat kept sending [notifications:3].\nAn uncle's backpack kept [poking:4] me; I stood until my legs went [numb:5].",
    evocab: "Platform, Packed, Signal, Notifications, Poking, Numb legs",
    edef: "Platform: train waiting area | Packed: extremely crowded | Signal: phone reception | Notifications: new messages popping up | Poking: pushing into you | Numb legs: legs feel pins and needles"
  },
  {
    ctitle: "補習遲到一分鐘",
    ctext: "我話只係去廁所，點知個[鐘:0]已經響。\n入[補習社:1]嗰刻，導師眼神已經[殺過嚟:2]。\n全場安靜，我尷尬到想[縮:3]，但仲要即刻交[功課:4]。",
    cvocab: "Bell, Tutorial centre, Death stare, Shrink, Homework",
    cbracketstuff: "鐘, 補習社, 殺過嚟, 縮, 功課",

    etitle: "One minute late to tutor",
    etext: "I said I was only in the toilet, but the [bell:0] had already rung.\nWhen I walked into the [tutorial centre:1], the tutor gave me a [death stare:2].\nThe room went quiet; I wanted to [shrink:3], but still had to hand in [homework:4].",
    evocab: "Bell, Tutorial centre, Death stare, Shrink, Homework",
    edef: "Bell: school or class ending sound | Tutorial centre: after-school lesson place | Death stare: very angry look | Shrink: try to hide | Homework: work to hand in"
  },
  {
    ctitle: "群組約打波",
    ctext: "WhatsApp群組突然有人@all：「五點[球場:0]見。」\n我話要返屋企食飯，佢哋即刻話我[放飛機:1]。\n最後我帶多對[波鞋:2]，因為上次借咗對鞋冇[還:3]，成個群組追住鬧。",
    cvocab: "Court, Flaked, Trainers, Return",
    cbracketstuff: "球場, 放飛機, 波鞋, 還",

    etitle: "Basketball group chat",
    etext: "Someone @all in WhatsApp: \"Meet at the [court:0] at five.\"\nI said I needed dinner at home; they said I [flaked:1].\nI brought spare [trainers:2] because last time I borrowed a pair and never [returned:3] them — the group still mentions it.",
    evocab: "Court, Flaked, Trainers, Return",
    edef: "Court: basketball court | Flaked: did not show up as promised | Trainers: sports shoes | Return: give something back"
  },
  {
    ctitle: "奶茶排隊",
    ctext: "放學條街成條[人龍:0]，全部等[珍珠奶茶:1]。\n我order少冰少甜，店員照樣整到[甜到漏:2]。\nJason話佢要加[珍珠:3]，我話再排一次我會[爆:4]。",
    cvocab: "Queue, Bubble tea, Too sweet, Pearls, Rage quit",
    cbracketstuff: "人龍, 珍珠奶茶, 甜到漏, 珍珠, 爆",

    etitle: "Bubble tea queue",
    etext: "After school the street had a huge [queue:0] for [bubble tea:1].\nI asked for less ice and less sugar; it still came [too sweet:2].\nJason wanted extra [pearls:3]; I said if we queue again I will [rage quit:4].",
    evocab: "Queue, Bubble tea, Too sweet, Pearls, Rage quit",
    edef: "Queue: long line of people waiting | Bubble tea: milk tea with tapioca | Too sweet: sweeter than you wanted | Pearls: tapioca balls in the drink | Rage quit: quit because you are annoyed"
  },
  {
    ctitle: "忘帶功課",
    ctext: "朝早明明pack好個[袋:0]，打開先發現冇[作文:1]。\n我即刻喺群組問可唔可以[影相:2]傳你，結果老師話唔收[補交:3]。\n同桌仲好心share我半張[士多啤梨:4]。",
    cvocab: "Bag, Essay, Photo, Late submission, Sticky note",
    cbracketstuff: "袋, 作文, 影相, 補交, 士多啤梨",

    etitle: "Forgot my essay",
    etext: "I packed my [bag:0] in the morning, then realised the [essay:1] was missing.\nI asked in the group if someone could [photo:2] it to me; the teacher said no [late submission:3].\nMy deskmate shared half a [sticky note:4].",
    evocab: "Bag, Essay, Photo, Late submission, Sticky note",
    edef: "Bag: school bag | Essay: writing homework | Photo: take a picture with your phone | Late submission: handing work in after deadline | Sticky note: small paper note"
  },
  {
    ctitle: "茶餐廳搭枱",
    ctext: "放學去[茶餐廳:0]食[下午茶:1]，枱位要[搭枱:2]。\n隔離兩個中學生一路講[打機:3]，我份[公仔麵:4]未到已經聽晒成個[攻略:5]。",
    cvocab: "Cha chaan teng, Afternoon tea set, Share table, Gaming, Instant noodles, Walkthrough",
    cbracketstuff: "茶餐廳, 下午茶, 搭枱, 打機, 公仔麵, 攻略",

    etitle: "Shared table at cha chaan teng",
    etext: "After school we went to a [cha chaan teng:0] for an [afternoon tea set:1] and had to [share a table:2].\nTwo students next to us talked about [gaming:3] the whole time.\nMy [instant noodles:4] had not arrived and I already knew their full game [walkthrough:5].",
    evocab: "Cha chaan teng, Afternoon tea set, Share table, Gaming, Instant noodles, Walkthrough",
    edef: "Cha chaan teng: Hong Kong-style café | Afternoon tea set: cheaper meal combo in the afternoon | Share table: sit with strangers at the same table | Gaming: playing video games | Instant noodles: quick noodle dish | Walkthrough: step-by-step game guide"
  }
];
