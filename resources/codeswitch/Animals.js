// RULES FOR THIS FILE:
// 1. Language switching rule: If cvocab word is English → blank in ctext must be Cantonese. If cvocab word is Cantonese → blank in ctext must be English. Vice versa for evocab/etext.
// 2. Blank completeness rule: Every word in evocab must have a corresponding blank [word:index] in etext. Every word in cvocab must have a corresponding blank in ctext.

window.Animals = [
  {
    ctitle: "動物領養",
    ctext: "去[領養:0]之前，我同朋友講：「我想要[well-behaved:2]啲㗎。」\n到咗[領養中心:1]，職員推咗一隻超[naughty:3]嘅狗仔過嚟。\n我本來想拒絕，但佢一搖尾，我就即刻心動。",
    cvocab: "Adopt, Shelter, 乖啲, 跳皮",
    cbracketstuff: "領養, 領養中心, well-behaved, naughty",
    
    etitle: "Adoption Day",
    etext: "Before I [adopt:0], I told my mate, \"I want one that's [well-behaved:2].\"\nAt the [shelter:1], the staff brought out a [naughty:3] little pup.\nI was going to say no, but one tail wag and I was done.",
    evocab: "Adopt, Shelter, Well-behaved, Naughty",
    edef: "Adopt: take an animal home | Shelter: rescue centre | Well-behaved: calm and obedient | Naughty: cheeky or misbehaving"
  },
  {
    ctitle: "狗狗散步大作戰",
    ctext: "一出門條[dog lead:1]已經畀佢拉到飛起。\n想執屎先發現成個[執屎袋:0]唔見咗。\n隔籬個路人教我：「用[short lead:2]啦，唔好畀佢衝！」",
    cvocab: "Poop bag, 狗繩, 短繩",
    cbracketstuff: "執屎袋, dog lead, short lead",
    
    etitle: "Dog Walk Drama",
    etext: "The second we stepped out, the [dog lead:1] was already getting pulled like mad.\nThen I realised I'd lost my [poop bag:0].\nA passer-by told me, \"Use a [short lead:2], don't let him bolt.\"",
    evocab: "Poop bag, Dog lead, Short lead",
    edef: "Poop bag: bag for picking up poop | Dog lead: leash | Short lead: shorter leash for control"
  },
  {
    ctitle: "貓奴日常失控",
    ctext: "朝早未起身就被佢[踩臉:0]叫醒，完全唔俾我瞓。\n我試下幫佢[梳毛:1]，結果梳到成手貓毛。\n成間屋都係[cat hair:2]，佢仲要超[clingy:3]。",
    cvocab: "Step on my face, Brush, 貓毛, 黐人",
    cbracketstuff: "踩臉, 梳毛, cat hair, clingy",
    
    etitle: "Cat Servant Chaos",
    etext: "She'll [step on my face:0] before I'm even awake.\nI try to [brush:1] her and end up with a handful of fur.\nThe place is full of [cat hair:2], and she's ridiculously [clingy:3].",
    evocab: "Step on my face, Brush, Cat hair, Clingy",
    edef: "Step on my face: wake you by stepping on you | Brush: groom with a brush | Cat hair: shed fur | Clingy: very attached"
  },
  {
    ctitle: "睇獸醫驚魂",
    ctext: "我個朋友去見[獸醫:0]前一直話自己好淡定。\n真係到要[打針:1]嗰刻，佢開始[shaking:3]，狗都未驚佢先驚。\n佢話自己係[play it cool:2]，但完全唔似。",
    cvocab: "Vet, Injection, 扮鎮定, 發抖",
    cbracketstuff: "獸醫, 打針, play it cool, shaking",
    
    etitle: "Vet Jitters",
    etext: "My mate kept saying he was calm before the [vet:0].\nWhen it came to the [injection:1], he started [shaking:3]; the dog wasn't even scared.\nHe swore he could [play it cool:2], but yeah, no.",
    evocab: "Vet, Injection, Play it cool, Shaking",
    edef: "Vet: animal doctor | Injection: a jab | Play it cool: act calm | Shaking: trembling from nerves"
  },
  {
    ctitle: "寵物表演尷尬位",
    ctext: "今日做寵物[表演:0]，我叫佢「[坐下:1]」。\n結果我隻狗完全[ignored me:2]，隔籬朋友隻貓就[nailed it in one:3]。\n我只可以尷尬咁笑，話係「即興」。",
    cvocab: "Show, Sit, 聽唔到, 一秒做到",
    cbracketstuff: "表演, 坐下, ignored me, nailed it in one",
    
    etitle: "Pet Show Awkwardness",
    etext: "At the pet [show:0], I told my dog to [sit:1].\nHe totally [ignored me:2], while my mate's cat [nailed it in one:3].\nI just laughed it off and called it 'improv'.",
    evocab: "Show, Sit, Ignored me, Nailed it in one",
    edef: "Show: performance event | Sit: a basic command | Ignored me: didn't listen | Nailed it in one: did it instantly"
  },
  {
    ctitle: "動物Cosplay",
    ctext: "我買咗件[公仔衫:1]畀隻狗仔玩[扮嘢:0]。\n件衫仲係[holding a knife:2]嗰款，隔籬隻大狗即刻[scared stiff:3]。\n我先知原來Cosplay都要揀對象。",
    cvocab: "Cosplay, Costume, 手持刀, 嚇到飛起",
    cbracketstuff: "扮嘢, 公仔衫, holding a knife, scared stiff",
    
    etitle: "Animal Cosplay",
    etext: "I bought a [costume:1] for my pup to do a bit of [cosplay:0].\nIt was the '[holding a knife:2]' kind, and the big dog next door went [scared stiff:3].\nTurns out even cosplay needs the right audience.",
    evocab: "Cosplay, Costume, Holding a knife, Scared stiff",
    edef: "Cosplay: dressing as a character | Costume: outfit | Holding a knife: carrying a knife | Scared stiff: frozen with fear"
  },
  {
    ctitle: "加速龜",
    ctext: "因為[上網:1]見到好玩，我學人幫隻龜裝[滑板:0]。\n而家佢爬得勁快，成日[keeps crashing into:2]隻貓。\n隻貓個樣好[helpless:3]，我都唔知點算。",
    cvocab: "Skateboard, Online, 中意撞, 無奈",
    cbracketstuff: "滑板, 上網, keeps crashing into, helpless",
    
    etitle: "Turbo Turtle",
    etext: "I saw it [online:1] and copied it, fitting my turtle with a [skateboard:0].\nNow he crawls proper fast and [keeps crashing into:2] the cat.\nThe cat looks totally [helpless:3], and I have no idea what to do.",
    evocab: "Skateboard, Online, Keeps crashing into, Helpless",
    edef: "Skateboard: board with wheels | Online: on the internet | Keeps crashing into: repeatedly bumps into | Helpless: powerless or resigned"
  }
];
