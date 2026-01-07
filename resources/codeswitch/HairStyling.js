// RULES FOR THIS FILE:
// 1. Language switching rule: If cvocab word is English → blank in ctext must be Cantonese. If cvocab word is Cantonese → blank in ctext must be English. Vice versa for evocab/etext.
// 2. Blank completeness rule: Every word in evocab must have a corresponding blank [word:index] in etext. Every word in cvocab must have a corresponding blank in ctext.

const HairStyling = [
  {
    ctitle: "剪髮升級記",
    ctext: "噚日同髮型師講：「幫我[修短少少:0]，但要Keep返個[形:1]哦！」點知佢反問：「側面幫你做個[Fade:2]定係[Taper:3]？」我膽粗粗揀Fade。出嚟效果好[Sharp:4]，成個人都[醒神:5]咗！原來講多個關鍵字，效果真係唔同啲！",
    cvocab: "Trim a bit, Shape, 漸變/鏟青漸變, 逐漸收短/打薄, 俐落有型, Fresh & energetic",
    cbracketstuff: "修短少少, 形狀, Fade, Taper, Sharp, 醒神",
    
    etitle: "The Trim That Got an Upgrade",
    etext: "So yesterday I went in and said to the barber, \"Just a [trim:0], yeah? But keep the [shape:1].\"\nHe goes, \"Alright. You want a [fade:2] or a [taper:3] on the sides?\"\nI went for the first one, \"Fade, please.\"\nCame out looking [sharp:4], proper [fresh:5]! Turns out, knowing that one extra word makes all the difference.",
    evocab: "Trim, Shape, Fade, Taper, Sharp, Fresh",
    edef: "Trim: cut hair shorter | Shape: overall form | Fade: gradual length change | Taper: gradual thinning | Sharp: clean & stylish | Fresh: energetic look"
  },
  {
    ctitle: "髮型師台詞",
    ctext: "我個髮型師好鍾意問：「今日想點[Style:0]啊？」我次次都係話：「[易打理:1]就得喇！」但佢總會畀啲建議：「不如試下[Side Part:2]？好[Classic:3]㗎。」溝通真係好緊要，講清楚先唔會「驚喜」變驚嚇。",
    cvocab: "造型/款式, Easy to manage, 側分界, 經典款式",
    cbracketstuff: "Style, 易打理, Side Part, Classic",
    
    etitle: "The Stylist's Script",
    etext: "My barber always starts with, \"What are we doing with it today, mate?\"\nMy script is always, \"Just something [easy to manage:1], yeah?\"\nBut he'll always suggest, \"Fancy a [classic:3] [side part:2]? Never goes out of [style:0].\"\nCommunication is key. Get it clear, or your 'new look' might be a nasty shock.",
    evocab: "Style, Easy to manage, Side Part, Classic",
    edef: "Style: how hair looks | Easy to manage: simple to maintain | Side Part: hair parted to one side | Classic: timeless look"
  },
  {
    ctitle: "男士髮型煩惱",
    ctext: "夏天到，我決定要剪個極清爽嘅[短髮:0]。同Barber講：「兩邊[剷青:1]，上面剪短，後面要[乾淨:2]。」佢問：「要[Sharp Line / Natural Line:3]？」我終於明，點解上次剪完個後枕好似積木咁方——原來我冇講要自然啲！",
    cvocab: "Short cut, Shave very short, Clean-looking [neckline], 硬線條 / 自然線條",
    cbracketstuff: "短髮, 剷青, 乾淨, Sharp Line / Natural Line",
    
    etitle: "A Bloke's Summer Hair Crisis",
    etext: "It's boiling. Decided I needed a [short cut:0]. Told the barber, \"[Shave:1] the sides right back, shorten the top, and make the back [clean:2].\"\nHe asks, \"You want a [sharp line or a natural line:3] at the back?\"\nThat's why last time my neckline looked like it was drawn with a ruler – I never said \"natural\"!",
    evocab: "Short cut, Shave (the sides), Clean (neckline), Sharp Line / Natural Line",
    edef: "Short cut: brief haircut | Shave: cut very short | Clean: neat appearance | Sharp Line: defined edge | Natural Line: soft edge"
  },
  {
    ctitle: "學生髮型對抗史",
    ctext: "學校規定[Fringe:0]唔可以過眉！我個Friend偷雞用[髮蠟:1]將啲頭髮[Set:2]起，點知俾風一吹……即刻穿煲。最後被老師「邀請」去髮型屋[剪返短:3]。青春，就係同條[髮線:4]鬥爭嘅歷史。",
    cvocab: "劉海, Hair wax, 造型/固定, Cut it short again, Hairline",
    cbracketstuff: "Fringe, 髮蠟, Set, 剪返短, 髮線",
    
    etitle: "The School Hair Saga",
    etext: "School rules say your [fringe:0] can't touch your eyebrows! My mate tried to be clever, using [gel:1] to [set:2] his up. One windy day and… busted. Got a 'special invitation' to get it [chopped back short:3]. Teenage life is just one long battle against your own [hairline:4].",
    evocab: "Fringe, Gel / Hair wax, Set (your hair), Chopped (cut short), Hairline",
    edef: "Fringe: front hair over forehead | Gel: styling product | Set: style & fix hair | Chopped: cut short | Hairline: edge of hair"
  },
  {
    ctitle: "電髮溝通大作戰",
    ctext: "第一次電髮，我同Stylist講：「我想要[自然啲嘅曲:0]，唔好太爆炸。」結果出嚟效果……都係太[Curly:1]！原來我應該講：「要[大波浪:2]，唔要[細捲:3]。」學識準確形容，先係成功嘅第一步。",
    cvocab: "Natural-looking waves/curls, 捲曲, Loose waves, Tight curls",
    cbracketstuff: "自然啲嘅曲, Curly, 大波浪, 細捲",
    
    etitle: "The Perm Miscommunication",
    etext: "First time getting a perm, I told the stylist, \"Just [natural waves:0], yeah? Nothing too crazy.\"\nThe result was… well, very [curly:1]. Lesson learned: I should've said, \"[loose waves:2], not [tight curls:3].\" Getting the description right is half the battle.",
    evocab: "Natural waves, Curly, Loose waves, Tight curls",
    edef: "Natural waves: subtle curls | Curly: very wavy | Loose waves: gentle curls | Tight curls: small tight rings"
  },
  {
    ctitle: "夏日必備：漸變剷青",
    ctext: "熱到爆炸，最好就係剪個[漸變:0]。同師傅講：「兩邊同後面做[Low Fade:1]，由短[漸變:2]到極短，上面留返多少長度。」剪完個頭立刻輕幾磅，個[輪廓:3]出返曬嚟，係男人夏日恩物！",
    cvocab: "Fade, 低漸變, Graduated/tapered effect, Contour/Shape of the head",
    cbracketstuff: "漸變, Low Fade, 漸變, 輪廓",
    
    etitle: "The Essential Summer Fade",
    etext: "Sweltering. Only one solution: a proper [fade:0].\nYou tell the barber, \"[Low fade:1] on the sides and back, [graduated:2] from short to skin, keep a bit of length on top.\"\nSuddenly your head feels five pounds lighter and your [contour:3] actually exists. A bloke's best friend in summer.",
    evocab: "Fade, Low Fade, Graduated, Contour",
    edef: "Fade: gradual length change | Low Fade: fade starting low | Graduated: tapered effect | Contour: head shape"
  },
  {
    ctitle: "染髮警示錄",
    ctext: "後生時貪玩[Highlight:0]咗幾條頭髮，覺得自己好型。點知[褪色:1]之後變咗一撮枯草色，要用帽遮住。阿媽話：「你啲頭髮好似雀巢咁。」從此明白，[保養:2]同染色一樣重要。",
    cvocab: "挑染, Fade/Color washes out, Maintenance/care",
    cbracketstuff: "Highlight, 褪色, 保養",
    
    etitle: "A Cautionary Tale About Colour",
    etext: "Tried a few [highlights:0] when I was younger, thought I was the man. When the colour [faded:1], it just looked like a patch of straw. Had to live in a cap for weeks. My mum said, \"Your hair looks like a bird's nest.\" Learned that day: [maintenance:2] is as important as the colour.",
    evocab: "Highlights, Fade (colour), Maintenance",
    edef: "Highlights: colored strands | Fade: color loss | Maintenance: ongoing care"
  },
  {
    ctitle: "穩陣Salon要求",
    ctext: "我去Salon最常講：「[修剪:0]髮尾，剪走[開叉:1]，Keep返呢個[長度:2]。」如果覺得厚重，就會加句：「幫我剪少少[層次:3]，等個頭輕身啲。」簡單幾句，髮型師就Get到，安全又穩陣。",
    cvocab: "Trim, Split ends, Length, Layers",
    cbracketstuff: "修剪, 開叉, 長度, 層次",
    
    etitle: "The Reliable Salon Request",
    etext: "My standard salon line is: \"Just a [trim:0], please. Take the [split ends:1] off but keep this [length:2].\"\nIf it's feeling heavy, I'll add, \"Maybe some light [layers:3]? Just to take the weight out.\"\nSafe, simple, they always get it. No drama.",
    evocab: "Trim, Split ends, Length, Layers",
    edef: "Trim: small cut | Split ends: damaged tips | Length: hair size | Layers: different lengths"
  },
  {
    ctitle: "經典永不過時",
    ctext: "我阿爸剪咗幾十年同一個髮型：[Side Part:0]，[二八界:1]，用少少[髮油:2]。佢話：「使咩追潮流，企理、[斯文:3]、易梳，就係最好。」果然，[經典:4]之所以係經典，就係因為永不出錯。",
    cvocab: "側分界, A specific side part, Hair pomade/oil, Neat and gentlemanly, Classic",
    cbracketstuff: "Side Part, 二八界, 髮油, 斯文, 經典",
    
    etitle: "Timeless Style",
    etext: "My dad's had the same cut for decades: a [side part:0], a proper [80/20 split:1], bit of [pomade:2].\nHe says, \"Why chase trends? [Smart:3], tidy, easy to comb. That's all you need.\"\nHe's right. A [classic:4] is a classic because it never gets it wrong.",
    evocab: "Side Part, 80/20 (part), Pomade, Smart / Tidy, Classic",
    edef: "Side Part: hair parted sideways | 80/20: part ratio | Pomade: styling wax | Smart: neat appearance | Classic: timeless style"
  }
];