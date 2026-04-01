// RULES FOR THIS FILE:
// 1. Language switching rule: If cvocab word is English → blank in ctext must be Cantonese. If cvocab word is Cantonese → blank in ctext must be English. Vice versa for evocab/etext.
// 2. Blank completeness rule: Every word in evocab must have a corresponding blank [word:index] in etext. Every word in cvocab must have a corresponding blank in ctext.

window.Weather = [
  {
    ctitle: "打風前後",
    ctext: "朝早天文台已經[懸掛:0]咗三號強風信號。\n聽日可能[改掛八號風球:1]，阿媽叫我哋去超市[入貨:2]，話一掛波就要[留喺屋企:3]。",
    cvocab: "Issued, Signal No. 8, Stock up, Stay home",
    cbracketstuff: "懸掛, 改掛八號風球, 入貨, 留喺屋企",

    etitle: "Before the typhoon signal",
    etext: "Early morning the Hong Kong Observatory had already [issued:0] Strong Wind Signal No. 3.\nThey said it might go to [Signal No. 8:1] the next day, so Mum told us to [stock up:2] at the supermarket and [stay home:3] once the signal went up.",
    evocab: "Issued, Signal No. 8, Stock up, Stay home",
    edef: "Issued: officially announced a warning or signal (common in HKO bulletins) | Signal No. 8: strong typhoon signal when schools and many offices close | Stock up: buy extra food and supplies | Stay home: remain indoors for safety"
  },
  {
    ctitle: "濕熱夏天",
    ctext: "香港七月成個[蒸籠:0]咁，[濕度:1]長期九成。\n晚晚要[開冷氣:2]先瞓得着，朝早塊面仲係[黐立立:3]。",
    cvocab: "Steamer, Humidity, Air conditioning, Sticky",
    cbracketstuff: "蒸籠, 濕度, 開冷氣, 黐立立",

    etitle: "Humid Hong Kong summer",
    etext: "July in Hong Kong feels like a [steamer:0]; [humidity:1] stays around ninety percent.\nWe need the [air conditioning:2] on all night just to sleep, and we still wake up [sticky:3].",
    evocab: "Steamer, Humidity, Air conditioning, Sticky",
    edef: "Steamer: very hot, steamy place | Humidity: amount of water vapour in the air | Air conditioning: cooling system in buildings | Sticky: damp and uncomfortable on skin"
  },
  {
    ctitle: "寒冷天氣警告",
    ctext: "天文台發出[寒冷天氣警告:0]，市區得十度。\n我[加多件衫:1]坐小巴都仲[打冷震:2]，大家笑凍三日又[和暖返:3]。",
    cvocab: "Cold weather warning, Extra layer, Shivering, Turn mild again",
    cbracketstuff: "寒冷天氣警告, 加多件衫, 打冷震, 和暖返",

    etitle: "Cold snap in the city",
    etext: "The Observatory issued a [cold weather warning:0] when the urban areas hit ten degrees.\nI wore an [extra layer:1] and still sat on the minibus [shivering:2]; everyone joked that 'HK winter' lasts three days, then it [turn mild again:3].",
    evocab: "Cold weather warning, Extra layer, Shivering, Turn mild again",
    edef: "Cold weather warning: official notice when temperatures are unusually low | Extra layer: one more piece of clothing | Shivering: shaking from cold | Turn mild again: become warmer after a cold spell"
  },
  {
    ctitle: "黃雨街頭",
    ctext: "天文台出咗[黃雨警告:0]，條街幾分鐘就[水浸:1]。\n我同班[上班族:3]一齊匿喺[天橋底:2]避雨。",
    cvocab: "Amber rainstorm signal, Flooded, Footbridge, Office workers",
    cbracketstuff: "黃雨警告, 水浸, 天橋底, 上班族",

    etitle: "Amber rain downtown",
    etext: "The Observatory raised the [amber rainstorm signal:0] and the street [flooded:1] within minutes.\nI waited under a [footbridge:2] with crowds of [office workers:3] doing the same.",
    evocab: "Amber rainstorm signal, Flooded, Footbridge, Office workers",
    edef: "Amber rainstorm signal: first level of heavy-rain warning in Hong Kong | Flooded: covered with water | Footbridge: bridge for pedestrians over a road | Office workers: people commuting to desk jobs"
  },
  {
    ctitle: "酷熱天氣警告",
    ctext: "天文台發出[酷熱天氣警告:0]，體育課改上[室內:1]。\n老師叫我哋[飲多啲水:2]，公公婆婆去[商場:3]嘆冷氣。",
    cvocab: "Very hot weather warning, Indoors, Drink plenty of water, Shopping mall",
    cbracketstuff: "酷熱天氣警告, 室內, 飲多啲水, 商場",

    etitle: "Very hot weather warning",
    etext: "The Observatory issued a [very hot weather warning:0], so PE class moved [indoors:1].\nTeachers told us to [Drink plenty of water:2], while grandparents headed to a [shopping mall:3] for the air-con.",
    evocab: "Very hot weather warning, Indoors, Drink plenty of water, Shopping mall",
    edef: "Very hot weather warning: official alert when heat could harm health | Indoors: inside a building | Drink plenty of water: stay hydrated in heat | Shopping mall: large indoor shopping centre, often cool in summer"
  }
];
