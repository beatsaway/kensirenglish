// RULES FOR THIS FILE:
// 1. Language switching rule: If cvocab word is English → blank in ctext must be Cantonese. If cvocab word is Cantonese → blank in ctext must be English. Vice versa for evocab/etext.
// 2. Blank completeness rule: Every word in evocab must have a corresponding blank [word:index] in etext. Every word in cvocab must have a corresponding blank in ctext.

window.Animals = [
  {
    ctitle: "動物領養",
    ctext: "去[領養:0]之前，我同朋友講：「我想要[乖啲:2]啲㗎。」\n到咗[領養中心:1]，職員推咗一隻超[跳皮:3]嘅狗仔過嚟。\n我本來想拒絕，但佢一搖尾，我就即刻心動。",
    cvocab: "Adopt, Shelter, Well-behaved, Naughty",
    cbracketstuff: "領養, 領養中心, 乖啲, 跳皮",
    
    etitle: "Adoption Day",
    etext: "Before I [adopt:0], I told my mate, \"I want one that's [well-behaved:2].\"\nAt the [shelter:1], the staff brought out a [naughty:3] little pup.\nI was going to say no, but one tail wag and I was done.",
    evocab: "Adopt, Shelter, Well-behaved, Naughty",
    edef: "Adopt: take an animal home | Shelter: rescue centre | Well-behaved: calm and obedient | Naughty: cheeky or misbehaving"
  },
  {
    ctitle: "狗狗散步大作戰",
    ctext: "一出門條[狗繩:1]已經畀佢拉到飛起。\n隔籬個路人教我：「用[短繩:2]啦，唔好畀佢衝！」\n想執屎先發現成個[執屎袋:0]唔見咗。",
    cvocab: "Poop bag, Dog lead, Short lead",
    cbracketstuff: "執屎袋, 狗繩, 短繩",
    
    etitle: "Dog Walk Drama",
    etext: "The second we stepped out, the [dog lead:1] was already getting yanked like mad.\nThen I realised I'd lost my [poop bag:0].\nA passer-by told me, \"Use a [short lead:2], don't let him bolt.\"",
    evocab: "Poop bag, Dog lead, Short lead",
    edef: "Poop bag: bag for picking up poop | Dog lead: leash | Short lead: shorter leash for control"
  },
  {
    ctitle: "貓奴日常失控",
    ctext: "朝早未起身就被佢[踩臉:0]叫醒，完全唔俾我瞓。\n我試下幫佢[梳毛:1]，結果梳到成手貓毛。\n成間屋都係[貓毛:2]，佢仲要超[黐人:3]。",
    cvocab: "Step on my face, Brush, Cat hair, Clingy",
    cbracketstuff: "踩臉, 梳毛, 貓毛, 黐人",
    
    etitle: "Cat Servant Chaos",
    etext: "She'll [step on my face:0] before I'm even awake.\nI try to [brush:1] her and end up with a handful of fur.\nThe place is full of [cat hair:2], and she's ridiculously [clingy:3].",
    evocab: "Step on my face, Brush, Cat hair, Clingy",
    edef: "Step on my face: wake you by stepping on you | Brush: groom with a brush | Cat hair: shed fur | Clingy: very attached"
  },
  {
    ctitle: "睇獸醫驚魂",
    ctext: "我個朋友去見[獸醫:0]前一直話自己好淡定。\n真係到要[打針:1]嗰刻，佢開始[發抖:3]，狗都未驚佢先驚。\n佢話自己係[扮鎮定:2]，但完全唔似。",
    cvocab: "Vet, Injection, Play it cool, Shaking",
    cbracketstuff: "獸醫, 打針, 扮鎮定, 發抖",
    
    etitle: "Vet Jitters",
    etext: "My mate kept saying he was calm before the [vet:0].\nWhen it came to the [injection:1], he started [shaking:3]; the dog wasn't even scared.\nHe swore he could [play it cool:2], but yeah, no.",
    evocab: "Vet, Injection, Play it cool, Shaking",
    edef: "Vet: animal doctor | Injection: a jab | Play it cool: act calm | Shaking: trembling from nerves"
  },
  {
    ctitle: "寵物表演尷尬位",
    ctext: "今日做寵物[表演:0]，我叫佢「[坐下:1]」。\n結果我隻狗完全[聽唔到:2]，隔籬朋友隻貓就[一秒做到:3]。\n我只可以尷尬咁笑，話係「即興」。",
    cvocab: "Show, Sit, Ignored me, Nailed it in one",
    cbracketstuff: "表演, 坐下, 聽唔到, 一秒做到",
    
    etitle: "Pet Show Awkwardness",
    etext: "At the pet [show:0], I told my dog to [sit:1].\nHe totally [ignored me:2], while my mate's cat [nailed it in one:3].\nI just laughed it off as an intended 'improv'.",
    evocab: "Show, Sit, Ignored me, Nailed it in one",
    edef: "Show: performance event | Sit: a basic command | Ignored me: didn't listen | Nailed it in one: did it instantly"
  },
  {
    ctitle: "動物Cosplay",
    ctext: "我買咗件[公仔衫:1]畀隻狗仔玩[扮嘢:0]。\n件衫係有對假手[持刀:2]嗰款，隔籬隻大狗即刻[嚇到飛起:3]。\n我先知原來Cosplay可以咁刺激。",
    cvocab: "Cosplay, Costume, Holding a knife, Scared stiff",
    cbracketstuff: "扮嘢, 公仔衫, 手持刀, 嚇到飛起",
    
    etitle: "Animal Cosplay",
    etext: "I bought a [costume:1] for my pup to do a bit of [cosplay:0].\nIt was the kind with a pair of fake hands '[holding a knife:2]', and the big dog next door went [scared stiff:3].\nI didn't know cosplay could be this thrilling.",
    evocab: "Cosplay, Costume, Holding a knife, Scared stiff",
    edef: "Cosplay: dressing as a character | Costume: outfit | Holding a knife: carrying a knife | Scared stiff: frozen with fear"
  },
  {
    ctitle: "加速龜",
    ctext: "因為[上網:1]見到好玩，我學人幫隻龜裝[滑板:0]。\n而家佢爬得勁快，[成日撞:2]隻貓。\n隻貓個樣好[無奈:3]，我都唔知點算。",
    cvocab: "Skateboard, Online, Keeps crashing into, Helpless",
    cbracketstuff: "滑板, 上網, 中意撞, 無奈",
    
    etitle: "Turbo Turtle",
    etext: "I saw it [online:1] and copied it, fitting my turtle with a [skateboard:0].\nNow he crawls proper fast and [keeps crashing into:2] the cat.\nThe cat looks totally [helpless:3], and I have no idea what to do.",
    evocab: "Skateboard, Online, Keeps crashing into, Helpless",
    edef: "Skateboard: board with wheels | Online: on the internet | Keeps crashing into: repeatedly bumps into | Helpless: powerless or resigned"
  },
  {
    ctitle: "坐爆倉鼠",
    ctext: "我表妹未[留意:0]到倉鼠匿咗喺[梳化墊:1]下面，一坐落去就[坐爆:2]咗。\n佢喊到停唔到，一直話自己好[內疚:3]。\n之後佢學識咗，坐低之前一定要睇清楚。",
    cvocab: "Notice, Sofa cushion, Crushed, Guilty",
    cbracketstuff: "留意, 梳化墊, 坐爆, 內疚",
    
    etitle: "Hamster Accident",
    etext: "My cousin didn't [notice:0] the hamster hiding under the [sofa cushion:1], and she [crushed:2] it when she sat down.\nShe couldn't stop crying and kept saying she felt [guilty:3].\nShe learned to always check before sitting down.",
    evocab: "Notice, Sofa cushion, Crushed, Guilty",
    edef: "Notice: become aware or observe | Sofa cushion: a cushion from a sofa | Crushed: pressed and killed by weight | Guilty: feeling at fault"
  },
  {
    ctitle: "倉鼠充電",
    ctext: "我哋整咗個[自家製:0]嘅[發電機:1]，接落去部[手機:2]度。\n只要隻倉鼠喺跑輪跑，就可以[慢慢充電:3]。\n雖然速度好慢，但個實驗勁有趣。",
    cvocab: "DIY, Generator, Phone, Trickle-charge",
    cbracketstuff: "自家製, 發電機, 手機, 慢慢充電",
    
    etitle: "Hamster Power",
    etext: "We built a [DIY:0] [generator:1] and hooked it up to a [phone:2].\nAs long as the hamster runs on the wheel, it [trickle-charges:3] the battery.\nIt charges slowly, but the experiment is fun.",
    evocab: "DIY, Generator, Phone, Trickle-charge",
    edef: "DIY: do it yourself | Generator: a device that makes electricity | Phone: mobile phone | Trickle-charge: charge a battery very slowly at low current"
  }
];
