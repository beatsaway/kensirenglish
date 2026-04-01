// RULES FOR THIS FILE:
// 1. Language switching rule: If cvocab word is English → blank in ctext must be Cantonese. If cvocab word is Cantonese → blank in ctext must be English. Vice versa for evocab/etext.
// 2. Blank completeness rule: Every word in evocab must have a corresponding blank [word:index] in etext. Every word in cvocab must have a corresponding blank in ctext.

window.Games = [
  {
    ctitle: "Obby卡關",
    ctext: "打Roblox啲[Obby:0]最易[卡關:1]。\n我跳咗十幾次都跌落去，個friend叫我[練timing:2]。\n終於過到嗰個[checkpoint:3]，我成個人都鬆一口氣。",
    cvocab: "Obby, Stuck, Timing, Checkpoint",
    cbracketstuff: "Obby, 卡關, 練timing, checkpoint",

    etitle: "Stuck on the obby",
    etext: "Roblox [obby:0] maps are where I get [stuck:1] the most.\nI missed the jump ten times, and my mate told me to practise my [timing:2].\nWhen I finally reached the next [checkpoint:3], I could breathe again.",
    evocab: "Obby, Stuck, Timing, Checkpoint",
    edef: "Obby: obstacle course map (Roblox) | Stuck: unable to pass a level | Timing: doing something at the right moment | Checkpoint: save point in a level"
  },
  {
    ctitle: "VIP玩家又嚟",
    ctext: "有啲VIP玩家成日用[Robux:1]買[特權:0]，然後就喺game入面[囇命:2]。\n我哋冇課金都照玩，但有時真係覺得好[唔公平:3]。",
    cvocab: "Perks, Robux, Show off, Unfair",
    cbracketstuff: "特權, Robux, 囇命, 唔公平",

    etitle: "VIP perks drama",
    etext: "Some VIP players spend [Robux:1] to buy extra [perks:0], and then they [show off:2] in the server.\nWe can still play without paying, but sometimes it feels really [unfair:3].",
    evocab: "Perks, Robux, Show off, Unfair",
    edef: "Perks: extra benefits or advantages | Robux: Roblox in-game currency | Show off: try to impress others | Unfair: not equal or not right"
  },
  {
    ctitle: "外掛同bot投票",
    ctext: "啲人用[外掛:0]搞亂個比賽，仲有bot狂[刷票:1]。\n明明我套衫最好睇，但最後都輸咗。\n我真係好想報告佢哋，等系統快啲[封鎖:2]佢哋個account。",
    cvocab: "Hack, Spam-vote, Ban",
    cbracketstuff: "外掛, 刷票, 封鎖",

    etitle: "Hackers and spam votes",
    etext: "People [hack:0] the game, and bots [spam-vote:1] to mess up the results.\nI wanted to report them so the system could [ban:2] their accounts faster.",
    evocab: "Hack, Spam-vote, Ban",
    edef: "Hack: cheat or break the rules using tools | Spam-vote: vote repeatedly in an unfair way | Ban: block someone from a platform or game"
  },
  {
    ctitle: "Lag到想砸機",
    ctext: "一到夜晚就多人online，我部機就開始[Lag:0]。\n畫面停一停，我就比人打死。\n隊友仲話我[累隊:1]，我即刻火都嚟，差啲想[嬲到退出:2]。",
    cvocab: "Lag, Drag the team down, Rage quit",
    cbracketstuff: "Lag, 累隊, 嬲到退出",

    etitle: "Lag made me rage quit",
    etext: "At night the servers get crowded and I start to [lag:0].\nThe screen freezes and I get eliminated.\nMy teammate said I was [dragging the team down:1], and I almost [rage quit:2].",
    evocab: "Lag, Drag the team down, Rage quit",
    edef: "Lag: delay and slow connection in games | Drag the team down: make the whole team perform worse | Rage quit: quit a game because you are angry"
  },
  {
    ctitle: "密位求生",
    ctext: "玩求生game嗰陣，我成日搵啲[隱藏位:0]匿埋。\n一有[災難:1]就衝去[掩護:2]，希望可以[生存:3]到最後。",
    cvocab: "Secret spot, Disaster, Cover, Survive",
    cbracketstuff: "隱藏位, 災難, 掩護, 生存",

    etitle: "Survival: find a secret spot",
    etext: "In survival games I always look for a [secret spot:0] to hide.\nWhen a [disaster:1] starts, I run for [cover:2] and try to [survive:3] to the end.",
    evocab: "Secret spot, Disaster, Cover, Survive",
    edef: "Secret spot: hidden place on a map | Disaster: dangerous event (e.g. quake, fire, flood) | Cover: a safer place to hide behind | Survive: stay alive and win"
  }
];

