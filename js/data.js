/*
 * KANJI DATA — JLPT N5 set (~100 kanji).
 *
 * Fields: kanji, pic(emoji), on[](katakana), kun[](hiragana), en[], es[],
 *   onEx/kunEx { jp, word, read, en, es, ruby? }, etym, rel[], strokes, grade,
 *   jlpt, trivia, spot. on/kun may be empty for kanji lacking a common reading.
 *
 * Brick faces are NOT globally unique (many N5 kanji share readings); the game
 * enforces uniqueness PER BOARD at build time (see buildTiles in game.js).
 * Structural checks: node js/validate-data.js
 */
const KANJI = [
  {
    "kanji": "日",
    "pic": "☀️",
    "on": [
      "ニチ",
      "ジツ"
    ],
    "kun": [
      "ひ",
      "か"
    ],
    "en": [
      "sun",
      "day"
    ],
    "es": [
      "sol",
      "día"
    ],
    "onEx": {
      "jp": "日曜日は休みです。",
      "word": "日曜日",
      "read": "にちようび",
      "en": "Sunday is a day off.",
      "es": "El domingo es día de descanso.",
      "ruby": {
        "休": "やす"
      }
    },
    "kunEx": {
      "jp": "日の出がきれいです。",
      "word": "日の出",
      "read": "ひので",
      "en": "The sunrise is beautiful.",
      "es": "El amanecer es hermoso."
    },
    "etym": "A pictograph of the sun — originally a circle with a dot in the center that squared off over centuries of writing.",
    "rel": [
      "月",
      "本",
      "明"
    ],
    "strokes": 4,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Also the ‘nichi’ in 日本 (Nihon): Japan’s own name means ‘sun-origin’ — the Land of the Rising Sun!",
    "spot": "On every calendar, and the red circle on the flag 🇯🇵 is this very sun."
  },
  {
    "kanji": "人",
    "pic": "🧍",
    "on": [
      "ジン",
      "ニン"
    ],
    "kun": [
      "ひと"
    ],
    "en": [
      "person"
    ],
    "es": [
      "persona"
    ],
    "onEx": {
      "jp": "日本人の友だちがいます。",
      "word": "日本人",
      "read": "にほんじん",
      "en": "I have a Japanese friend.",
      "es": "Tengo un amigo japonés.",
      "ruby": {
        "友": "とも"
      }
    },
    "kunEx": {
      "jp": "あの人は先生です。",
      "word": "人",
      "read": "ひと",
      "en": "That person is a teacher.",
      "es": "Esa persona es profesor.",
      "ruby": {
        "先生": "せんせい"
      }
    },
    "etym": "A pictograph of a person seen from the side, mid-stride — just the legs and leaning body remain.",
    "rel": [
      "大",
      "女",
      "男"
    ],
    "strokes": 2,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Only two strokes! Used to count people: 一人 (one person), 二人 (two people).",
    "spot": "On restroom signs and 求人 (help-wanted) ads."
  },
  {
    "kanji": "大",
    "pic": "🐘",
    "on": [
      "ダイ",
      "タイ"
    ],
    "kun": [
      "おお"
    ],
    "en": [
      "big",
      "great"
    ],
    "es": [
      "grande",
      "gran"
    ],
    "onEx": {
      "jp": "大学で日本語を勉強します。",
      "word": "大学",
      "read": "だいがく",
      "en": "I study Japanese at university.",
      "es": "Estudio japonés en la universidad.",
      "ruby": {
        "日本語": "にほんご",
        "勉強": "べんきょう"
      }
    },
    "kunEx": {
      "jp": "大きい犬がいます。",
      "word": "大きい",
      "read": "おおきい",
      "en": "There is a big dog.",
      "es": "Hay un perro grande.",
      "ruby": {
        "犬": "いぬ"
      }
    },
    "etym": "A person standing with arms and legs stretched wide — as big as a body can make itself.",
    "rel": [
      "人",
      "小",
      "太"
    ],
    "strokes": 3,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Add one dot and it becomes 犬 (dog) or 太 (fat) — a tiny stroke changes everything!",
    "spot": "On sizes — 大 means ‘large’ (big ramen bowl 🍜)."
  },
  {
    "kanji": "学",
    "pic": "🎒",
    "on": [
      "ガク"
    ],
    "kun": [
      "まなぶ"
    ],
    "en": [
      "learn"
    ],
    "es": [
      "aprender"
    ],
    "onEx": {
      "jp": "学校へ行きます。",
      "word": "学校",
      "read": "がっこう",
      "en": "I go to school.",
      "es": "Voy a la escuela.",
      "ruby": {
        "行": "い"
      }
    },
    "kunEx": {
      "jp": "日本語を学ぶのは楽しい。",
      "word": "学ぶ",
      "read": "まなぶ",
      "en": "Learning Japanese is fun.",
      "es": "Aprender japonés es divertido.",
      "ruby": {
        "日本語": "にほんご",
        "楽": "たの"
      }
    },
    "etym": "A child (子) under a roof, with hands passing knowledge down from above — a schoolhouse in one character.",
    "rel": [
      "子",
      "校",
      "字"
    ],
    "strokes": 8,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "It hides 子 (child) at the bottom — fitting for a character that means ‘to learn’.",
    "spot": "On every 学校 (school) and 大学 (university)."
  },
  {
    "kanji": "水",
    "pic": "💧",
    "on": [
      "スイ"
    ],
    "kun": [
      "みず"
    ],
    "en": [
      "water"
    ],
    "es": [
      "agua"
    ],
    "onEx": {
      "jp": "水曜日に会いましょう。",
      "word": "水曜日",
      "read": "すいようび",
      "en": "Let's meet on Wednesday.",
      "es": "Quedemos el miércoles.",
      "ruby": {
        "会": "あ"
      }
    },
    "kunEx": {
      "jp": "冷たい水を飲みます。",
      "word": "水",
      "read": "みず",
      "en": "I drink cold water.",
      "es": "Bebo agua fría.",
      "ruby": {
        "冷": "つめ",
        "飲": "の"
      }
    },
    "etym": "A pictograph of a flowing stream — a central current with drops splashing off both sides.",
    "rel": [
      "川",
      "海",
      "氷"
    ],
    "strokes": 4,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "The ‘sui’ in 水曜日 = Wednesday, literally ‘water day’.",
    "spot": "On taps, bottles, and pools 🏊."
  },
  {
    "kanji": "木",
    "pic": "🌳",
    "on": [
      "モク",
      "ボク"
    ],
    "kun": [
      "き"
    ],
    "en": [
      "tree",
      "wood"
    ],
    "es": [
      "árbol",
      "madera"
    ],
    "onEx": {
      "jp": "木曜日はいそがしいです。",
      "word": "木曜日",
      "read": "もくようび",
      "en": "Thursday is busy.",
      "es": "El jueves es ajetreado."
    },
    "kunEx": {
      "jp": "大きい木の下で休みます。",
      "word": "木",
      "read": "き",
      "en": "I rest under a big tree.",
      "es": "Descanso bajo un árbol grande.",
      "ruby": {
        "大": "おお",
        "下": "した",
        "休": "やす"
      }
    },
    "etym": "A pictograph of a tree: trunk in the middle, branches above, roots spreading below.",
    "rel": [
      "本",
      "林",
      "森"
    ],
    "strokes": 4,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Stack three (森) = forest; two (林) = grove. A whole woodland from one tree!",
    "spot": "木曜日 = Thursday, and on wooden signboards 🌳."
  },
  {
    "kanji": "山",
    "pic": "🗻",
    "on": [
      "サン"
    ],
    "kun": [
      "やま"
    ],
    "en": [
      "mountain"
    ],
    "es": [
      "montaña"
    ],
    "onEx": {
      "jp": "富士山にのぼりたいです。",
      "word": "富士山",
      "read": "ふじさん",
      "en": "I want to climb Mt. Fuji.",
      "es": "Quiero subir al monte Fuji."
    },
    "kunEx": {
      "jp": "山の上はさむいです。",
      "word": "山",
      "read": "やま",
      "en": "It's cold on top of the mountain.",
      "es": "Hace frío en la cima de la montaña.",
      "ruby": {
        "上": "うえ"
      }
    },
    "etym": "Three peaks rising from a baseline — one of the clearest surviving pictographs.",
    "rel": [
      "川",
      "岩",
      "島"
    ],
    "strokes": 3,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Mt. Fuji is 富士山 (Fuji-san). Also a super-common surname: 山田 (Yamada).",
    "spot": "On maps, shrines, and hiking trails ⛰️."
  },
  {
    "kanji": "川",
    "pic": "🏞️",
    "on": [
      "セン"
    ],
    "kun": [
      "かわ"
    ],
    "en": [
      "river"
    ],
    "es": [
      "río"
    ],
    "onEx": {
      "jp": "河川のちずを見ます。",
      "word": "河川",
      "read": "かせん",
      "en": "I look at a map of the rivers.",
      "es": "Miro un mapa de los ríos.",
      "ruby": {
        "見": "み"
      }
    },
    "kunEx": {
      "jp": "川でおよぎます。",
      "word": "川",
      "read": "かわ",
      "en": "I swim in the river.",
      "es": "Nado en el río."
    },
    "etym": "Three flowing lines — water running between two banks.",
    "rel": [
      "山",
      "水",
      "州"
    ],
    "strokes": 3,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Three flowing lines = a river. Lives in surnames like 石川 and 川口.",
    "spot": "On bridges and place names all over Japan."
  },
  {
    "kanji": "月",
    "pic": "🌙",
    "on": [
      "ゲツ",
      "ガツ"
    ],
    "kun": [
      "つき"
    ],
    "en": [
      "moon",
      "month"
    ],
    "es": [
      "luna",
      "mes"
    ],
    "onEx": {
      "jp": "一月はとてもさむいです。",
      "word": "一月",
      "read": "いちがつ",
      "en": "January is very cold.",
      "es": "Enero es muy frío."
    },
    "kunEx": {
      "jp": "今夜は月がきれいですね。",
      "word": "月",
      "read": "つき",
      "en": "The moon is beautiful tonight, isn't it.",
      "es": "La luna está hermosa esta noche, ¿verdad?",
      "ruby": {
        "今夜": "こんや"
      }
    },
    "etym": "A crescent moon with a shadow line inside. Because months follow the moon, it also means “month.”",
    "rel": [
      "日",
      "明",
      "曜"
    ],
    "strokes": 4,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Doubles as ‘month’ (一月 = January) and hides inside 明 (bright = sun+moon).",
    "spot": "月曜日 = Monday 🌙."
  },
  {
    "kanji": "金",
    "pic": "💰",
    "on": [
      "キン",
      "コン"
    ],
    "kun": [
      "かね"
    ],
    "en": [
      "gold",
      "money"
    ],
    "es": [
      "oro",
      "dinero"
    ],
    "onEx": {
      "jp": "金曜日が好きです。",
      "word": "金曜日",
      "read": "きんようび",
      "en": "I like Fridays.",
      "es": "Me gustan los viernes.",
      "ruby": {
        "好": "す"
      }
    },
    "kunEx": {
      "jp": "お金がたりません。",
      "word": "お金",
      "read": "おかね",
      "en": "I don't have enough money.",
      "es": "No tengo suficiente dinero."
    },
    "etym": "Nuggets of metal buried under the earth, capped by a roof — treasure in the ground.",
    "rel": [
      "土",
      "銀",
      "鉄"
    ],
    "strokes": 8,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Means gold AND money. 金曜日 = Friday — payday energy 💰.",
    "spot": "On price tags, medals 🥇, and the element gold."
  },
  {
    "kanji": "土",
    "pic": "🌱",
    "on": [
      "ド",
      "ト"
    ],
    "kun": [
      "つち"
    ],
    "en": [
      "soil",
      "earth"
    ],
    "es": [
      "tierra",
      "suelo"
    ],
    "onEx": {
      "jp": "土曜日に出かけます。",
      "word": "土曜日",
      "read": "どようび",
      "en": "I go out on Saturday.",
      "es": "Salgo el sábado.",
      "ruby": {
        "出": "で"
      }
    },
    "kunEx": {
      "jp": "土にたねをまきます。",
      "word": "土",
      "read": "つち",
      "en": "I sow seeds in the soil.",
      "es": "Siembro semillas en la tierra."
    },
    "etym": "A mound of earth sitting on the ground line — a little pile of soil.",
    "rel": [
      "金",
      "地",
      "場"
    ],
    "strokes": 3,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "One stroke away from 士 (samurai/scholar). 土曜日 = Saturday.",
    "spot": "In gardening 🌱 and pottery studios."
  },
  {
    "kanji": "子",
    "pic": "👶",
    "on": [
      "シ",
      "ス"
    ],
    "kun": [
      "こ"
    ],
    "en": [
      "child"
    ],
    "es": [
      "niño"
    ],
    "onEx": {
      "jp": "女子チームがかちました。",
      "word": "女子",
      "read": "じょし",
      "en": "The girls' team won.",
      "es": "El equipo femenino ganó."
    },
    "kunEx": {
      "jp": "子どもがあそんでいます。",
      "word": "子ども",
      "read": "こども",
      "en": "The children are playing.",
      "es": "Los niños están jugando."
    },
    "etym": "A swaddled baby with outstretched arms and a big head — the legs are wrapped up.",
    "rel": [
      "学",
      "女",
      "好"
    ],
    "strokes": 3,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "A little swaddled baby. The ‘-ko’ ending in classic girls’ names like 花子 (Hanako).",
    "spot": "On 子ども (children) signs everywhere 👶."
  },
  {
    "kanji": "女",
    "pic": "👧",
    "on": [
      "ジョ",
      "ニョ"
    ],
    "kun": [
      "おんな"
    ],
    "en": [
      "woman"
    ],
    "es": [
      "mujer"
    ],
    "onEx": {
      "jp": "この店は女性に人気です。",
      "word": "女性",
      "read": "じょせい",
      "en": "This shop is popular with women.",
      "es": "Esta tienda es popular entre las mujeres.",
      "ruby": {
        "店": "みせ",
        "人気": "にんき"
      }
    },
    "kunEx": {
      "jp": "女の人がうたっています。",
      "word": "女",
      "read": "おんな",
      "en": "A woman is singing.",
      "es": "Una mujer está cantando.",
      "ruby": {
        "人": "ひと"
      }
    },
    "etym": "A pictograph of a kneeling figure with folded arms — the ancient posture of a seated woman.",
    "rel": [
      "男",
      "子",
      "好"
    ],
    "strokes": 3,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Put a child (子) beside it and you get 好 — ‘to like / love’ 💕.",
    "spot": "On restroom doors 🚺."
  },
  {
    "kanji": "男",
    "pic": "👦",
    "on": [
      "ダン",
      "ナン"
    ],
    "kun": [
      "おとこ"
    ],
    "en": [
      "man",
      "male"
    ],
    "es": [
      "hombre",
      "varón"
    ],
    "onEx": {
      "jp": "男性用のトイレはあちらです。",
      "word": "男性",
      "read": "だんせい",
      "en": "The men's restroom is over there.",
      "es": "El baño de hombres está por allá.",
      "ruby": {
        "用": "よう"
      }
    },
    "kunEx": {
      "jp": "男の子がはしっています。",
      "word": "男",
      "read": "おとこ",
      "en": "A boy is running.",
      "es": "Un niño está corriendo.",
      "ruby": {
        "子": "こ"
      }
    },
    "etym": "Strength (力) applied in the rice field (田) — the one doing heavy field work.",
    "rel": [
      "女",
      "田",
      "力"
    ],
    "strokes": 7,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Rice field (田) + strength (力) = the one who works the field.",
    "spot": "On restroom doors 🚹."
  },
  {
    "kanji": "本",
    "pic": "📕",
    "on": [
      "ホン"
    ],
    "kun": [
      "もと"
    ],
    "en": [
      "book",
      "origin"
    ],
    "es": [
      "libro",
      "origen"
    ],
    "onEx": {
      "jp": "としょかんで本を読みます。",
      "word": "本",
      "read": "ほん",
      "en": "I read a book at the library.",
      "es": "Leo un libro en la biblioteca.",
      "ruby": {
        "読": "よ"
      }
    },
    "kunEx": {
      "jp": "木の本で待っています。",
      "word": "本",
      "read": "もと",
      "en": "I'm waiting at the foot of the tree.",
      "es": "Espero al pie del árbol.",
      "ruby": {
        "木": "き",
        "待": "ま"
      }
    },
    "etym": "A tree (木) with a stroke marking its base — the root, the origin. Books came later, as “the source” of knowledge.",
    "rel": [
      "木",
      "日",
      "体"
    ],
    "strokes": 5,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "A tree with a line at its root = ‘origin’. Also the counter for long thin things (本 of pens, bottles).",
    "spot": "On books 📕 and in 日本 (Japan) itself."
  },
  {
    "kanji": "上",
    "pic": "🎈",
    "on": [
      "ジョウ"
    ],
    "kun": [
      "うえ",
      "あがる"
    ],
    "en": [
      "up",
      "above"
    ],
    "es": [
      "arriba",
      "encima"
    ],
    "onEx": {
      "jp": "屋上から海が見えます。",
      "word": "屋上",
      "read": "おくじょう",
      "en": "You can see the ocean from the rooftop.",
      "es": "Se ve el mar desde la azotea.",
      "ruby": {
        "海": "うみ",
        "見": "み"
      }
    },
    "kunEx": {
      "jp": "つくえの上にねこがいます。",
      "word": "上",
      "read": "うえ",
      "en": "There's a cat on the desk.",
      "es": "Hay un gato sobre el escritorio."
    },
    "etym": "A short stroke above a baseline — literally the idea of “above.” Its twin, 下, points below.",
    "rel": [
      "下",
      "中",
      "山"
    ],
    "strokes": 3,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Its mirror-twin 下 means ‘down’. Also means ‘to board / go up’.",
    "spot": "On elevators ⬆️ and up-escalators."
  },
  {
    "kanji": "下",
    "pic": "⬇️",
    "on": [
      "ゲ"
    ],
    "kun": [
      "した",
      "さがる"
    ],
    "en": [
      "down",
      "below"
    ],
    "es": [
      "abajo",
      "debajo"
    ],
    "onEx": {
      "jp": "次の駅で下車します。",
      "word": "下車",
      "read": "げしゃ",
      "en": "I get off at the next station.",
      "es": "Me bajo en la próxima estación.",
      "ruby": {
        "次": "つぎ",
        "駅": "えき"
      }
    },
    "kunEx": {
      "jp": "いすの下に本があります。",
      "word": "下",
      "read": "した",
      "en": "There is a book under the chair.",
      "es": "Hay un libro debajo de la silla.",
      "ruby": {
        "本": "ほん"
      }
    },
    "etym": "The mirror-image of 上 — a short stroke hanging below the baseline: the idea of “below.”",
    "rel": [
      "上",
      "中",
      "小"
    ],
    "strokes": 3,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Its twin 上 means ‘up’. As a verb 下がる means ‘to go down / drop’.",
    "spot": "On elevators ⬇️ and down-escalators."
  },
  {
    "kanji": "中",
    "pic": "🎯",
    "on": [
      "チュウ"
    ],
    "kun": [
      "なか"
    ],
    "en": [
      "middle",
      "inside"
    ],
    "es": [
      "centro",
      "dentro"
    ],
    "onEx": {
      "jp": "中学で英語を習います。",
      "word": "中学",
      "read": "ちゅうがく",
      "en": "I learn English in middle school.",
      "es": "Aprendo inglés en la secundaria.",
      "ruby": {
        "英語": "えいご",
        "習": "なら"
      }
    },
    "kunEx": {
      "jp": "はこの中にねこがいます。",
      "word": "中",
      "read": "なか",
      "en": "There is a cat inside the box.",
      "es": "Hay un gato dentro de la caja."
    },
    "etym": "A line piercing straight through the center of a box — dead center, the middle.",
    "rel": [
      "上",
      "下",
      "口"
    ],
    "strokes": 4,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "中学 = middle school. 中 also names China: 中国 (Chūgoku), ‘the Middle Kingdom’.",
    "spot": "On 中 (medium) sizes and 中央 (center) signs."
  },
  {
    "kanji": "小",
    "pic": "🐜",
    "on": [
      "ショウ"
    ],
    "kun": [
      "ちいさい"
    ],
    "en": [
      "small",
      "little"
    ],
    "es": [
      "pequeño",
      "chico"
    ],
    "onEx": {
      "jp": "小学校に通っています。",
      "word": "小学校",
      "read": "しょうがっこう",
      "en": "I attend elementary school.",
      "es": "Voy a la escuela primaria.",
      "ruby": {
        "通": "かよ"
      }
    },
    "kunEx": {
      "jp": "小さいねこがすきです。",
      "word": "小さい",
      "read": "ちいさい",
      "en": "I like small cats.",
      "es": "Me gustan los gatos pequeños."
    },
    "etym": "Three tiny strokes — a little something split into even smaller bits.",
    "rel": [
      "大",
      "中",
      "少"
    ],
    "strokes": 3,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "The opposite of 大 (big). 小学校 = elementary school (‘little-learn-school’).",
    "spot": "On 小 (small) sizes 🍵."
  },
  {
    "kanji": "口",
    "pic": "👄",
    "on": [
      "コウ"
    ],
    "kun": [
      "くち"
    ],
    "en": [
      "mouth"
    ],
    "es": [
      "boca"
    ],
    "onEx": {
      "jp": "この町は人口が多いです。",
      "word": "人口",
      "read": "じんこう",
      "en": "This town has a large population.",
      "es": "Este pueblo tiene una población grande.",
      "ruby": {
        "町": "まち",
        "多": "おお"
      }
    },
    "kunEx": {
      "jp": "口を大きく開けてください。",
      "word": "口",
      "read": "くち",
      "en": "Please open your mouth wide.",
      "es": "Abre bien la boca, por favor.",
      "ruby": {
        "大": "おお",
        "開": "あ"
      }
    },
    "etym": "A pictograph of an open mouth — a simple square opening.",
    "rel": [
      "人",
      "目",
      "中"
    ],
    "strokes": 3,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "人口 (jinkō) = ‘people-mouths’ = population. Also 入口 (entrance) and 出口 (exit).",
    "spot": "On 入口 (entrance) and 出口 (exit) signs 🚪."
  },
  {
    "kanji": "手",
    "pic": "✋",
    "on": [
      "シュ"
    ],
    "kun": [
      "て"
    ],
    "en": [
      "hand"
    ],
    "es": [
      "mano"
    ],
    "onEx": {
      "jp": "歌手になりたいです。",
      "word": "歌手",
      "read": "かしゅ",
      "en": "I want to be a singer.",
      "es": "Quiero ser cantante.",
      "ruby": {
        "歌": "うた"
      }
    },
    "kunEx": {
      "jp": "手をあらいましょう。",
      "word": "手",
      "read": "て",
      "en": "Let's wash our hands.",
      "es": "Lavémonos las manos."
    },
    "etym": "A pictograph of a hand — five fingers fanning out from the wrist.",
    "rel": [
      "足",
      "口",
      "目"
    ],
    "strokes": 4,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "歌手 (kashu) = ‘song-hand’ = singer. 上手 = skilled, 下手 = unskilled.",
    "spot": "In 切手 (postage stamp), literally ‘cut-hand’ 📮."
  },
  {
    "kanji": "田",
    "pic": "🌾",
    "on": [
      "デン"
    ],
    "kun": [
      "た"
    ],
    "en": [
      "rice field",
      "paddy"
    ],
    "es": [
      "arrozal",
      "campo de arroz"
    ],
    "onEx": {
      "jp": "水田が広がっています。",
      "word": "水田",
      "read": "すいでん",
      "en": "The rice paddies stretch out.",
      "es": "Los arrozales se extienden.",
      "ruby": {
        "広": "ひろ"
      }
    },
    "kunEx": {
      "jp": "田んぼで働きます。",
      "word": "田",
      "read": "た",
      "en": "I work in the rice field.",
      "es": "Trabajo en el arrozal.",
      "ruby": {
        "働": "はたら"
      }
    },
    "etym": "A rice paddy seen from above — a plot divided into four sections by its footpaths.",
    "rel": [
      "男",
      "力",
      "町"
    ],
    "strokes": 5,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Field (田) + strength (力) = 男 (man). Common in surnames: 田中 (Tanaka), 山田 (Yamada).",
    "spot": "In surnames and across the countryside 🌾."
  },
  {
    "kanji": "力",
    "pic": "💪",
    "on": [
      "リョク",
      "リキ"
    ],
    "kun": [
      "ちから"
    ],
    "en": [
      "power",
      "strength"
    ],
    "es": [
      "fuerza",
      "poder"
    ],
    "onEx": {
      "jp": "毎日、体力をつけます。",
      "word": "体力",
      "read": "たいりょく",
      "en": "I build up my stamina every day.",
      "es": "Gano resistencia cada día.",
      "ruby": {
        "毎日": "まいにち"
      }
    },
    "kunEx": {
      "jp": "みんなで力を合わせましょう。",
      "word": "力",
      "read": "ちから",
      "en": "Let's join our strength together.",
      "es": "Unamos nuestras fuerzas.",
      "ruby": {
        "合": "あ"
      }
    },
    "etym": "A pictograph of a straining arm or a plow — the muscle of hard work.",
    "rel": [
      "男",
      "田",
      "動"
    ],
    "strokes": 2,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Just two strokes. 体力 (tairyoku) = physical strength; 電力 = electric power.",
    "spot": "On 力 in words like 努力 (effort) 💪."
  },
  {
    "kanji": "円",
    "pic": "💴",
    "on": [
      "エン"
    ],
    "kun": [
      "まるい"
    ],
    "en": [
      "yen",
      "round"
    ],
    "es": [
      "yen",
      "redondo"
    ],
    "onEx": {
      "jp": "この本は千円です。",
      "word": "千円",
      "read": "せんえん",
      "en": "This book is 1000 yen.",
      "es": "Este libro cuesta mil yenes.",
      "ruby": {
        "本": "ほん"
      }
    },
    "kunEx": {
      "jp": "円いテーブルを買いました。",
      "word": "円い",
      "read": "まるい",
      "en": "I bought a round table.",
      "es": "Compré una mesa redonda.",
      "ruby": {
        "買": "か"
      }
    },
    "etym": "Once written 圓 — an enclosure that simplified to the rounded 円. It means ‘circle’ and names the yen.",
    "rel": [
      "金",
      "本",
      "国"
    ],
    "strokes": 4,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "円 is the yen (¥) — and literally means ‘round’, like the old round coins.",
    "spot": "On every price tag in Japan 💴."
  },
  {
    "kanji": "年",
    "pic": "📅",
    "on": [
      "ネン"
    ],
    "kun": [
      "とし"
    ],
    "en": [
      "year"
    ],
    "es": [
      "año"
    ],
    "onEx": {
      "jp": "来年、日本へ行きます。",
      "word": "来年",
      "read": "らいねん",
      "en": "I'll go to Japan next year.",
      "es": "El próximo año iré a Japón.",
      "ruby": {
        "日本": "にほん",
        "行": "い"
      }
    },
    "kunEx": {
      "jp": "父は年を取りました。",
      "word": "年",
      "read": "とし",
      "en": "My father has grown older.",
      "es": "Mi padre ha envejecido.",
      "ruby": {
        "父": "ちち",
        "取": "と"
      }
    },
    "etym": "Once a person carrying a bundle of harvested grain — one harvest marks one year.",
    "rel": [
      "月",
      "日",
      "毎"
    ],
    "strokes": 6,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "来年 = next year, 去年 = last year, 今年 (kotoshi) = this year.",
    "spot": "On calendars and New Year cards 🎍."
  },
  {
    "kanji": "生",
    "pic": "🌱",
    "on": [
      "セイ"
    ],
    "kun": [
      "いきる",
      "なま"
    ],
    "en": [
      "life",
      "birth"
    ],
    "es": [
      "vida",
      "nacer"
    ],
    "onEx": {
      "jp": "先生はとてもやさしいです。",
      "word": "先生",
      "read": "せんせい",
      "en": "The teacher is very kind.",
      "es": "El profesor es muy amable."
    },
    "kunEx": {
      "jp": "強く生きたいです。",
      "word": "生きたい",
      "read": "いきたい",
      "en": "I want to live strongly.",
      "es": "Quiero vivir con fuerza.",
      "ruby": {
        "強": "つよ"
      }
    },
    "etym": "A young plant pushing up through the soil — the image of life sprouting.",
    "rel": [
      "学",
      "本",
      "先"
    ],
    "strokes": 5,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "生 has tons of readings. 学生 = student, 先生 = teacher, 生ビール = draft (‘raw’) beer 🍺.",
    "spot": "On 先生 (teacher) and 学生 (student)."
  },
  {
    "kanji": "白",
    "pic": "🤍",
    "on": [
      "ハク",
      "ビャク"
    ],
    "kun": [
      "しろ"
    ],
    "en": [
      "white"
    ],
    "es": [
      "blanco"
    ],
    "onEx": {
      "jp": "白紙にかきます。",
      "word": "白紙",
      "read": "はくし",
      "en": "I write on blank paper.",
      "es": "Escribo en papel en blanco.",
      "ruby": {
        "紙": "かみ"
      }
    },
    "kunEx": {
      "jp": "白いねこがすきです。",
      "word": "白い",
      "read": "しろい",
      "en": "I like white cats.",
      "es": "Me gustan los gatos blancos."
    },
    "etym": "A pictograph often linked to an acorn or a candle flame — the pale, bright color white.",
    "rel": [
      "黒",
      "百",
      "日"
    ],
    "strokes": 5,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "面白い (omoshiroi), literally ‘face-white’, means ‘interesting / funny’!",
    "spot": "On 白 (white) and in 白鳥 (swan) 🦢."
  },
  {
    "kanji": "空",
    "pic": "☁️",
    "on": [
      "クウ"
    ],
    "kun": [
      "そら",
      "あく"
    ],
    "en": [
      "sky",
      "empty"
    ],
    "es": [
      "cielo",
      "vacío"
    ],
    "onEx": {
      "jp": "明日、空港へ行きます。",
      "word": "空港",
      "read": "くうこう",
      "en": "I'm going to the airport tomorrow.",
      "es": "Mañana voy al aeropuerto.",
      "ruby": {
        "明日": "あした",
        "行": "い"
      }
    },
    "kunEx": {
      "jp": "空が青いです。",
      "word": "空",
      "read": "そら",
      "en": "The sky is blue.",
      "es": "El cielo está azul.",
      "ruby": {
        "青": "あお"
      }
    },
    "etym": "A hole (穴) shaped by craft — an open, empty space; by extension, the empty sky.",
    "rel": [
      "天",
      "雨",
      "青"
    ],
    "strokes": 8,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "空 means both ‘sky’ and ‘empty’. 空港 (airport) = ‘empty-harbor’; 空手 (karate) = ‘empty hand’.",
    "spot": "At the 空港 (airport) ✈️."
  },
  {
    "kanji": "雨",
    "pic": "☔",
    "on": [
      "ウ"
    ],
    "kun": [
      "あめ"
    ],
    "en": [
      "rain"
    ],
    "es": [
      "lluvia"
    ],
    "onEx": {
      "jp": "雨天でも行きます。",
      "word": "雨天",
      "read": "うてん",
      "en": "I'll go even in rainy weather.",
      "es": "Iré aunque llueva.",
      "ruby": {
        "行": "い"
      }
    },
    "kunEx": {
      "jp": "そとは雨がふっています。",
      "word": "雨",
      "read": "あめ",
      "en": "It is raining outside.",
      "es": "Está lloviendo afuera."
    },
    "etym": "Raindrops falling from a cloud under the sky — four drops inside a frame.",
    "rel": [
      "水",
      "空",
      "雪"
    ],
    "strokes": 8,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "The ‘rain’ radical tops weather kanji: 雪 (snow), 雲 (cloud), 電 (lightning/electricity).",
    "spot": "In weather forecasts ☔ and 梅雨 (rainy season) news."
  },
  {
    "kanji": "花",
    "pic": "🌸",
    "on": [
      "カ"
    ],
    "kun": [
      "はな"
    ],
    "en": [
      "flower"
    ],
    "es": [
      "flor"
    ],
    "onEx": {
      "jp": "開花が楽しみです。",
      "word": "開花",
      "read": "かいか",
      "en": "I look forward to the blossoming.",
      "es": "Espero con ilusión la floración.",
      "ruby": {
        "開": "ひら",
        "楽": "たの"
      }
    },
    "kunEx": {
      "jp": "きれいな花ですね。",
      "word": "花",
      "read": "はな",
      "en": "What a pretty flower.",
      "es": "Qué flor tan bonita."
    },
    "etym": "Grass (艹) over 化 (change) — the part of a plant that transforms into bloom.",
    "rel": [
      "草",
      "木",
      "華"
    ],
    "strokes": 7,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "花見 (hanami) = flower-viewing, Japan’s cherry-blossom picnic 🌸.",
    "spot": "At 花見 (cherry-blossom viewing) and flower shops."
  },
  {
    "kanji": "一",
    "pic": "☝️",
    "on": [
      "イチ",
      "イツ"
    ],
    "kun": [
      "ひとつ",
      "ひと"
    ],
    "en": [
      "one"
    ],
    "es": [
      "uno"
    ],
    "onEx": {
      "jp": "一月に日本へ行きます。",
      "word": "一月",
      "read": "いちがつ",
      "en": "I'm going to Japan in January.",
      "es": "Voy a Japón en enero.",
      "ruby": {
        "日本": "にほん",
        "行": "い"
      }
    },
    "kunEx": {
      "jp": "りんごを一つください。",
      "word": "一つ",
      "read": "ひとつ",
      "en": "One apple, please.",
      "es": "Una manzana, por favor."
    },
    "etym": "A single horizontal line — the simplest way to write 'one'.",
    "rel": [
      "二",
      "三",
      "日"
    ],
    "strokes": 1,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Just one stroke. 一月 = January; 一人 (ひとり) = one person.",
    "spot": "On 一 in words like 一番 (number one) ☝️."
  },
  {
    "kanji": "二",
    "pic": "✌️",
    "on": [
      "ニ"
    ],
    "kun": [
      "ふたつ",
      "ふた"
    ],
    "en": [
      "two"
    ],
    "es": [
      "dos"
    ],
    "onEx": {
      "jp": "二月はとても寒いです。",
      "word": "二月",
      "read": "にがつ",
      "en": "February is very cold.",
      "es": "Febrero es muy frío.",
      "ruby": {
        "寒": "さむ"
      }
    },
    "kunEx": {
      "jp": "たまごを二つ買いました。",
      "word": "二つ",
      "read": "ふたつ",
      "en": "I bought two eggs.",
      "es": "Compré dos huevos.",
      "ruby": {
        "買": "か"
      }
    },
    "etym": "Two horizontal lines stacked — a natural pair for 'two'.",
    "rel": [
      "一",
      "三",
      "十"
    ],
    "strokes": 2,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Two strokes for the number two. 二人 (ふたり) = two people.",
    "spot": "On 二 in words like 二番 (number two) ✌️."
  },
  {
    "kanji": "三",
    "pic": "🤟",
    "on": [
      "サン"
    ],
    "kun": [
      "みっつ",
      "みつ",
      "み"
    ],
    "en": [
      "three"
    ],
    "es": [
      "tres"
    ],
    "onEx": {
      "jp": "三月に学校が始まります。",
      "word": "三月",
      "read": "さんがつ",
      "en": "School starts in March.",
      "es": "La escuela empieza en marzo.",
      "ruby": {
        "学校": "がっこう",
        "始": "はじ"
      }
    },
    "kunEx": {
      "jp": "ケーキを三つ食べました。",
      "word": "三つ",
      "read": "みっつ",
      "en": "I ate three pieces of cake.",
      "es": "Comí tres trozos de pastel.",
      "ruby": {
        "食": "た"
      }
    },
    "etym": "Three horizontal lines stacked — counting up from one and two.",
    "rel": [
      "一",
      "二",
      "四"
    ],
    "strokes": 3,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Three strokes for three. 三日 (みっか) = the 3rd of the month.",
    "spot": "On 三 in words like 三角 (triangle) 🤟."
  },
  {
    "kanji": "四",
    "pic": "4️⃣",
    "on": [
      "シ"
    ],
    "kun": [
      "よっつ",
      "よん",
      "よ"
    ],
    "en": [
      "four"
    ],
    "es": [
      "cuatro"
    ],
    "onEx": {
      "jp": "四月に桜が咲きます。",
      "word": "四月",
      "read": "しがつ",
      "en": "The cherry blossoms bloom in April.",
      "es": "Los cerezos florecen en abril.",
      "ruby": {
        "桜": "さくら",
        "咲": "さ"
      }
    },
    "kunEx": {
      "jp": "みかんを四つもらいました。",
      "word": "四つ",
      "read": "よっつ",
      "en": "I received four mandarins.",
      "es": "Recibí cuatro mandarinas."
    },
    "etym": "Originally four lines; the boxed form with legs came to mean 'four'.",
    "rel": [
      "三",
      "五",
      "口"
    ],
    "strokes": 5,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Read シ or よん. 四 sounds like 死 (death), so よん is often preferred.",
    "spot": "On 四 in words like 四角 (square) 4️⃣."
  },
  {
    "kanji": "五",
    "pic": "🖐️",
    "on": [
      "ゴ"
    ],
    "kun": [
      "いつつ",
      "いつ"
    ],
    "en": [
      "five"
    ],
    "es": [
      "cinco"
    ],
    "onEx": {
      "jp": "五月は天気がいいです。",
      "word": "五月",
      "read": "ごがつ",
      "en": "The weather is nice in May.",
      "es": "El tiempo es bueno en mayo.",
      "ruby": {
        "天気": "てんき"
      }
    },
    "kunEx": {
      "jp": "みかんが五つあります。",
      "word": "五つ",
      "read": "いつつ",
      "en": "There are five mandarins.",
      "es": "Hay cinco mandarinas."
    },
    "etym": "Lines crossing between two bars — an old counting mark for 'five'.",
    "rel": [
      "四",
      "六",
      "十"
    ],
    "strokes": 4,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Four strokes for five. 五十 (ごじゅう) = fifty.",
    "spot": "On 五 in words like 五月 (May) 🖐️."
  },
  {
    "kanji": "六",
    "pic": "6️⃣",
    "on": [
      "ロク"
    ],
    "kun": [
      "むっつ",
      "むつ",
      "む"
    ],
    "en": [
      "six"
    ],
    "es": [
      "seis"
    ],
    "onEx": {
      "jp": "六月はよく雨が降ります。",
      "word": "六月",
      "read": "ろくがつ",
      "en": "It rains a lot in June.",
      "es": "Llueve mucho en junio.",
      "ruby": {
        "雨": "あめ",
        "降": "ふ"
      }
    },
    "kunEx": {
      "jp": "あめを六つ買いました。",
      "word": "六つ",
      "read": "むっつ",
      "en": "I bought six candies.",
      "es": "Compré seis caramelos.",
      "ruby": {
        "買": "か"
      }
    },
    "etym": "Said to picture a simple hut — later borrowed for the number 'six'.",
    "rel": [
      "五",
      "七",
      "八"
    ],
    "strokes": 4,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Four strokes for six. 六日 (むいか) = the 6th of the month.",
    "spot": "On 六 in words like 六百 (six hundred) 6️⃣."
  },
  {
    "kanji": "七",
    "pic": "7️⃣",
    "on": [
      "シチ"
    ],
    "kun": [
      "ななつ",
      "なな"
    ],
    "en": [
      "seven"
    ],
    "es": [
      "siete"
    ],
    "onEx": {
      "jp": "七月に海へ行きたいです。",
      "word": "七月",
      "read": "しちがつ",
      "en": "I want to go to the sea in July.",
      "es": "Quiero ir al mar en julio.",
      "ruby": {
        "海": "うみ",
        "行": "い"
      }
    },
    "kunEx": {
      "jp": "いすが七つあります。",
      "word": "七つ",
      "read": "ななつ",
      "en": "There are seven chairs.",
      "es": "Hay siete sillas."
    },
    "etym": "A line cut across by a stroke — an old tally mark that became 'seven'.",
    "rel": [
      "六",
      "八",
      "九"
    ],
    "strokes": 2,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Read シチ or なな. 七日 (なのか) = the 7th of the month.",
    "spot": "On 七 in words like 七月 (July) 7️⃣."
  },
  {
    "kanji": "八",
    "pic": "8️⃣",
    "on": [
      "ハチ"
    ],
    "kun": [
      "やっつ",
      "やつ",
      "や"
    ],
    "en": [
      "eight"
    ],
    "es": [
      "ocho"
    ],
    "onEx": {
      "jp": "八月はとても暑いです。",
      "word": "八月",
      "read": "はちがつ",
      "en": "August is very hot.",
      "es": "Agosto es muy caluroso.",
      "ruby": {
        "暑": "あつ"
      }
    },
    "kunEx": {
      "jp": "みかんを八つ数えました。",
      "word": "八つ",
      "read": "やっつ",
      "en": "I counted eight mandarins.",
      "es": "Conté ocho mandarinas.",
      "ruby": {
        "数": "かぞ"
      }
    },
    "etym": "Two lines spreading apart — a shape suggesting division into 'eight'.",
    "rel": [
      "七",
      "九",
      "十"
    ],
    "strokes": 2,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Its spreading shape is seen as lucky in Japan. 八日 (ようか) = the 8th.",
    "spot": "On 八 in words like 八百屋 (greengrocer) 8️⃣."
  },
  {
    "kanji": "九",
    "pic": "9️⃣",
    "on": [
      "キュウ",
      "ク"
    ],
    "kun": [
      "ここのつ",
      "ここの"
    ],
    "en": [
      "nine"
    ],
    "es": [
      "nueve"
    ],
    "onEx": {
      "jp": "九月に旅行します。",
      "word": "九月",
      "read": "くがつ",
      "en": "I'll travel in September.",
      "es": "Viajaré en septiembre.",
      "ruby": {
        "旅行": "りょこう"
      }
    },
    "kunEx": {
      "jp": "だんごが九つあります。",
      "word": "九つ",
      "read": "ここのつ",
      "en": "There are nine dumplings.",
      "es": "Hay nueve dango."
    },
    "etym": "A bent hooked line — an old form that came to mean 'nine'.",
    "rel": [
      "八",
      "十",
      "七"
    ],
    "strokes": 2,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Read きゅう or く. 九日 (ここのか) = the 9th of the month.",
    "spot": "On 九 in words like 九十 (ninety) 9️⃣."
  },
  {
    "kanji": "十",
    "pic": "🔟",
    "on": [
      "ジュウ",
      "ジッ"
    ],
    "kun": [
      "とお",
      "と"
    ],
    "en": [
      "ten"
    ],
    "es": [
      "diez"
    ],
    "onEx": {
      "jp": "十時に会いましょう。",
      "word": "十時",
      "read": "じゅうじ",
      "en": "Let's meet at ten o'clock.",
      "es": "Encontrémonos a las diez.",
      "ruby": {
        "会": "あ"
      }
    },
    "kunEx": {
      "jp": "りんごが十ありますよ。",
      "word": "十",
      "read": "とお",
      "en": "There are ten apples.",
      "es": "Hay diez manzanas."
    },
    "etym": "A pictograph of a needle or crossed lines — a full count marking the number ten.",
    "rel": [
      "千",
      "百",
      "古"
    ],
    "strokes": 2,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Just a cross of two strokes. 十字 = a cross shape; 十分 (じゅうぶん) means 'enough'.",
    "spot": "On 十 in words like 十分 (enough) 🔟."
  },
  {
    "kanji": "百",
    "pic": "💯",
    "on": [
      "ヒャク"
    ],
    "kun": [],
    "en": [
      "hundred"
    ],
    "es": [
      "cien"
    ],
    "onEx": {
      "jp": "この本は百円です。",
      "word": "百円",
      "read": "ひゃくえん",
      "en": "This book costs one hundred yen.",
      "es": "Este libro cuesta cien yenes.",
      "ruby": {
        "本": "ほん"
      }
    },
    "kunEx": {
      "jp": "百年前の写真を見ました。",
      "word": "百年",
      "read": "ひゃくねん",
      "en": "I saw a photo from a hundred years ago.",
      "es": "Vi una foto de hace cien años.",
      "ruby": {
        "前": "まえ",
        "写真": "しゃしん",
        "見": "み"
      }
    },
    "etym": "One 一 stroke over 白 (white) — a large round number reaching one hundred.",
    "rel": [
      "白",
      "千",
      "万"
    ],
    "strokes": 6,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "百 has no common kun reading. 百科事典 = an encyclopedia; 八百屋 (やおや) is a greengrocer.",
    "spot": "On 百 in prices like 三百円 (300 yen) 💯."
  },
  {
    "kanji": "千",
    "pic": "🔢",
    "on": [
      "セン"
    ],
    "kun": [
      "ち"
    ],
    "en": [
      "thousand"
    ],
    "es": [
      "mil"
    ],
    "onEx": {
      "jp": "この時計は五千円です。",
      "word": "五千",
      "read": "ごせん",
      "en": "This watch is five thousand yen.",
      "es": "Este reloj cuesta cinco mil yenes.",
      "ruby": {
        "時計": "とけい"
      }
    },
    "kunEx": {
      "jp": "千葉に住んでいます。",
      "word": "千葉",
      "read": "ちば",
      "en": "I live in Chiba.",
      "es": "Vivo en Chiba.",
      "ruby": {
        "住": "す"
      }
    },
    "etym": "A person 人 crossed by one 一 stroke — a count sweeping up to one thousand.",
    "rel": [
      "十",
      "百",
      "万"
    ],
    "strokes": 3,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "The kun reading ち survives mostly in names like 千葉 and 千代. 千円札 = a 1000-yen bill.",
    "spot": "On 千 in amounts like 三千円 (3000 yen) 🔢."
  },
  {
    "kanji": "万",
    "pic": "🔟",
    "on": [
      "マン",
      "バン"
    ],
    "kun": [],
    "en": [
      "ten thousand",
      "myriad"
    ],
    "es": [
      "diez mil",
      "miríada"
    ],
    "onEx": {
      "jp": "この車は百万円です。",
      "word": "百万",
      "read": "ひゃくまん",
      "en": "This car costs one million yen.",
      "es": "Este coche cuesta un millón de yenes.",
      "ruby": {
        "車": "くるま"
      }
    },
    "kunEx": {
      "jp": "万年筆で手紙を書きます。",
      "word": "万年筆",
      "read": "まんねんひつ",
      "en": "I write letters with a fountain pen.",
      "es": "Escribo cartas con una pluma estilográfica.",
      "ruby": {
        "手紙": "てがみ",
        "書": "か"
      }
    },
    "etym": "Once a pictograph of a scorpion, borrowed for its sound to mean an uncountably large number.",
    "rel": [
      "千",
      "百",
      "方"
    ],
    "strokes": 3,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "万 reads バン in 万歳 (banzai). 一万円 = a 10,000-yen note; 万一 means 'just in case'.",
    "spot": "On 万 in big amounts like 一万円 (10,000 yen) 🔟."
  },
  {
    "kanji": "時",
    "pic": "🕐",
    "on": [
      "ジ"
    ],
    "kun": [
      "とき"
    ],
    "en": [
      "time",
      "hour"
    ],
    "es": [
      "tiempo",
      "hora"
    ],
    "onEx": {
      "jp": "今、何時ですか。",
      "word": "何時",
      "read": "なんじ",
      "en": "What time is it now?",
      "es": "¿Qué hora es ahora?",
      "ruby": {
        "今": "いま"
      }
    },
    "kunEx": {
      "jp": "子供の時、京都にいました。",
      "word": "時",
      "read": "とき",
      "en": "When I was a child, I lived in Kyoto.",
      "es": "Cuando era niño, vivía en Kioto.",
      "ruby": {
        "子供": "こども",
        "京都": "きょうと"
      }
    },
    "etym": "Sun 日 beside 寺 (temple) as a phonetic — the sun's position that tells the hour.",
    "rel": [
      "日",
      "寺",
      "間"
    ],
    "strokes": 10,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "時間 = time/duration; 時々 (ときどき) means 'sometimes'. Every clock hour uses 〜時.",
    "spot": "On 時 in the clock, like 三時 (3 o'clock) 🕐."
  },
  {
    "kanji": "分",
    "pic": "⏱️",
    "on": [
      "ブン",
      "フン"
    ],
    "kun": [
      "わける",
      "わかる"
    ],
    "en": [
      "minute",
      "part",
      "understand"
    ],
    "es": [
      "minuto",
      "parte",
      "entender"
    ],
    "onEx": {
      "jp": "五分待ってください。",
      "word": "五分",
      "read": "ごふん",
      "en": "Please wait five minutes.",
      "es": "Por favor, espera cinco minutos.",
      "ruby": {
        "待": "ま"
      }
    },
    "kunEx": {
      "jp": "この言葉が分かりますか。",
      "word": "分かります",
      "read": "わかります",
      "en": "Do you understand this word?",
      "es": "¿Entiendes esta palabra?",
      "ruby": {
        "言葉": "ことば"
      }
    },
    "etym": "A sword 刀 dividing 八 something in two — to split, hence a 'part' and a 'minute'.",
    "rel": [
      "刀",
      "半",
      "切"
    ],
    "strokes": 4,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "The counter shifts sound: 一分 (いっぷん), 三分 (さんぷん). 自分 = oneself; 気分 = mood.",
    "spot": "On 分 in clock minutes like 十分 (じっぷん, 10 min) ⏱️."
  },
  {
    "kanji": "半",
    "pic": "🌗",
    "on": [
      "ハン"
    ],
    "kun": [
      "なかば"
    ],
    "en": [
      "half",
      "middle"
    ],
    "es": [
      "mitad",
      "medio"
    ],
    "onEx": {
      "jp": "今、二時半です。",
      "word": "二時半",
      "read": "にじはん",
      "en": "It's now half past two.",
      "es": "Ahora son las dos y media.",
      "ruby": {
        "今": "いま"
      }
    },
    "kunEx": {
      "jp": "九月の半ばに旅行します。",
      "word": "半ば",
      "read": "なかば",
      "en": "I'll travel in the middle of September.",
      "es": "Viajaré a mediados de septiembre.",
      "ruby": {
        "九月": "くがつ",
        "旅行": "りょこう"
      }
    },
    "etym": "An ox 牛 split by 八 down the middle — a thing divided into halves.",
    "rel": [
      "分",
      "牛",
      "中"
    ],
    "strokes": 5,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "半 pairs with 時 to tell the half-hour: 三時半 = 3:30. 半分 = a half; 半年 = half a year.",
    "spot": "On 半 in times like 六時半 (6:30) 🌗."
  },
  {
    "kanji": "火",
    "pic": "🔥",
    "on": [
      "カ"
    ],
    "kun": [
      "ひ"
    ],
    "en": [
      "fire"
    ],
    "es": [
      "fuego"
    ],
    "onEx": {
      "jp": "火曜日に会いましょう。",
      "word": "火曜日",
      "read": "かようび",
      "en": "Let's meet on Tuesday.",
      "es": "Encontrémonos el martes.",
      "ruby": {
        "会": "あ"
      }
    },
    "kunEx": {
      "jp": "火に気をつけてください。",
      "word": "火",
      "read": "ひ",
      "en": "Please be careful with the fire.",
      "es": "Por favor, ten cuidado con el fuego.",
      "ruby": {
        "気": "き"
      }
    },
    "etym": "A pictograph of flames rising from a burning fire.",
    "rel": [
      "水",
      "日",
      "山"
    ],
    "strokes": 4,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "火曜日 = Tuesday (the 'fire day'). 花火 (はなび) means 'fireworks'; 火山 = a volcano.",
    "spot": "On 火 in 火曜日 (Tuesday) 🔥."
  },
  {
    "kanji": "天",
    "pic": "☀️",
    "on": [
      "テン"
    ],
    "kun": [
      "あま",
      "あめ"
    ],
    "en": [
      "heaven",
      "sky"
    ],
    "es": [
      "cielo",
      "paraíso"
    ],
    "onEx": {
      "jp": "今日は天気がいいです。",
      "word": "天気",
      "read": "てんき",
      "en": "The weather is nice today.",
      "es": "Hoy hace buen tiempo.",
      "ruby": {
        "今日": "きょう"
      }
    },
    "kunEx": {
      "jp": "天の川がきれいですね。",
      "word": "天の川",
      "read": "あまのがわ",
      "en": "The Milky Way is beautiful, isn't it?",
      "es": "La Vía Láctea es hermosa, ¿verdad?"
    },
    "etym": "A person 大 with one 一 stroke above the head — the vast sky and heaven overhead.",
    "rel": [
      "大",
      "気",
      "雨"
    ],
    "strokes": 4,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "天気 = weather; 天ぷら (tempura) borrows the sound. 天の川 is the Milky Way.",
    "spot": "On 天 in 天気 (weather) ☀️."
  },
  {
    "kanji": "気",
    "pic": "🌬️",
    "on": [
      "キ",
      "ケ"
    ],
    "kun": [],
    "en": [
      "spirit",
      "energy",
      "mind",
      "air"
    ],
    "es": [
      "espíritu",
      "energía",
      "ánimo",
      "aire"
    ],
    "onEx": {
      "jp": "今日はとても元気です。",
      "word": "元気",
      "read": "げんき",
      "en": "Today I feel great.",
      "es": "Hoy me siento muy bien.",
      "ruby": {
        "今日": "きょう"
      }
    },
    "kunEx": {
      "jp": "今日はいい天気ですね。",
      "word": "天気",
      "read": "てんき",
      "en": "The weather is nice today, isn't it?",
      "es": "Hoy hace buen tiempo, ¿verdad?",
      "ruby": {
        "今日": "きょう"
      }
    },
    "etym": "Originally steam or vapor rising from cooking rice — the invisible energy of breath and air.",
    "rel": [
      "元",
      "天",
      "休"
    ],
    "strokes": 6,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "元気 = healthy/lively; 天気 = weather; 電気 = electricity. Its kun readings are rare.",
    "spot": "On 気 in words about mood and energy like 元気 (lively) 🌬️."
  },
  {
    "kanji": "父",
    "pic": "👨",
    "on": [
      "フ"
    ],
    "kun": [
      "ちち"
    ],
    "en": [
      "father"
    ],
    "es": [
      "padre"
    ],
    "onEx": {
      "jp": "祖父は元気です。",
      "word": "祖父",
      "read": "そふ",
      "en": "My grandfather is healthy.",
      "es": "Mi abuelo está sano.",
      "ruby": {
        "元気": "げんき"
      }
    },
    "kunEx": {
      "jp": "父は会社に行きました。",
      "word": "父",
      "read": "ちち",
      "en": "My father went to the company.",
      "es": "Mi padre fue a la empresa.",
      "ruby": {
        "会社": "かいしゃ",
        "行": "い"
      }
    },
    "etym": "A hand holding a stick or axe — the figure of the working father who leads the household.",
    "rel": [
      "母",
      "親",
      "男"
    ],
    "strokes": 4,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "お父さん (otōsan) is an irregular reading for one's own dad. 祖父 = grandfather.",
    "spot": "On 父 whenever family and fathers appear, as in お父さん (dad) 👨."
  },
  {
    "kanji": "母",
    "pic": "👩",
    "on": [
      "ボ"
    ],
    "kun": [
      "はは"
    ],
    "en": [
      "mother"
    ],
    "es": [
      "madre"
    ],
    "onEx": {
      "jp": "祖母は先生でした。",
      "word": "祖母",
      "read": "そぼ",
      "en": "My grandmother was a teacher.",
      "es": "Mi abuela era maestra.",
      "ruby": {
        "先生": "せんせい"
      }
    },
    "kunEx": {
      "jp": "母は台所にいます。",
      "word": "母",
      "read": "はは",
      "en": "My mother is in the kitchen.",
      "es": "Mi madre está en la cocina.",
      "ruby": {
        "台所": "だいどころ"
      }
    },
    "etym": "A picture of a woman with two dots for breasts — the nurturing mother.",
    "rel": [
      "父",
      "親",
      "女"
    ],
    "strokes": 5,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "お母さん (okāsan) is an irregular reading for one's own mom. 祖母 = grandmother.",
    "spot": "On 母 in family words like お母さん (mom) 👩."
  },
  {
    "kanji": "友",
    "pic": "🤝",
    "on": [
      "ユウ"
    ],
    "kun": [
      "とも"
    ],
    "en": [
      "friend"
    ],
    "es": [
      "amigo"
    ],
    "onEx": {
      "jp": "彼とは友情が深いです。",
      "word": "友情",
      "read": "ゆうじょう",
      "en": "My friendship with him is deep.",
      "es": "Mi amistad con él es profunda.",
      "ruby": {
        "彼": "かれ",
        "深": "ふか"
      }
    },
    "kunEx": {
      "jp": "友だちと公園で遊びます。",
      "word": "友だち",
      "read": "ともだち",
      "en": "I play in the park with my friends.",
      "es": "Juego en el parque con mis amigos.",
      "ruby": {
        "公園": "こうえん",
        "遊": "あそ"
      }
    },
    "etym": "Two hands reaching the same way — people helping each other, a bond of friends.",
    "rel": [
      "左",
      "右",
      "有"
    ],
    "strokes": 4,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "友だち = friend; 友情 = friendship; 親友 = best friend.",
    "spot": "On 友 in words about companionship like 友だち (friend) 🤝."
  },
  {
    "kanji": "先",
    "pic": "👆",
    "on": [
      "セン"
    ],
    "kun": [
      "さき"
    ],
    "en": [
      "ahead",
      "previous",
      "tip",
      "future"
    ],
    "es": [
      "adelante",
      "anterior",
      "punta",
      "futuro"
    ],
    "onEx": {
      "jp": "先生に質問します。",
      "word": "先生",
      "read": "せんせい",
      "en": "I ask the teacher a question.",
      "es": "Le hago una pregunta al profesor.",
      "ruby": {
        "質問": "しつもん"
      }
    },
    "kunEx": {
      "jp": "お先にどうぞ。",
      "word": "先",
      "read": "さき",
      "en": "Please go ahead of me.",
      "es": "Adelante, usted primero."
    },
    "etym": "A foot stepping out in front of a person — going ahead, moving forward first.",
    "rel": [
      "生",
      "足",
      "洗"
    ],
    "strokes": 6,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "先生 = teacher; 先週 = last week; 先月 = last month.",
    "spot": "On 先 in time and order words like 先週 (last week) 👆."
  },
  {
    "kanji": "名",
    "pic": "📛",
    "on": [
      "メイ",
      "ミョウ"
    ],
    "kun": [
      "な"
    ],
    "en": [
      "name",
      "fame",
      "reputation"
    ],
    "es": [
      "nombre",
      "fama",
      "reputación"
    ],
    "onEx": {
      "jp": "あれは有名な店です。",
      "word": "有名",
      "read": "ゆうめい",
      "en": "That is a famous shop.",
      "es": "Esa es una tienda famosa.",
      "ruby": {
        "店": "みせ"
      }
    },
    "kunEx": {
      "jp": "ここに名前を書いてください。",
      "word": "名前",
      "read": "なまえ",
      "en": "Please write your name here.",
      "es": "Por favor, escriba su nombre aquí.",
      "ruby": {
        "書": "か"
      }
    },
    "etym": "Evening (夕) plus mouth (口) — in the dark you must say your name aloud to be known.",
    "rel": [
      "夕",
      "口",
      "前"
    ],
    "strokes": 6,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "名前 = name; 有名 = famous; 名人 = expert/master.",
    "spot": "On 名 in words about names and fame like 名前 (name) 📛."
  },
  {
    "kanji": "校",
    "pic": "🏫",
    "on": [
      "コウ"
    ],
    "kun": [],
    "en": [
      "school",
      "proofreading"
    ],
    "es": [
      "escuela",
      "corrección"
    ],
    "onEx": {
      "jp": "毎日、学校へ行きます。",
      "word": "学校",
      "read": "がっこう",
      "en": "I go to school every day.",
      "es": "Voy a la escuela todos los días.",
      "ruby": {
        "毎日": "まいにち",
        "行": "い"
      }
    },
    "kunEx": {
      "jp": "校長先生が話します。",
      "word": "校長",
      "read": "こうちょう",
      "en": "The principal speaks.",
      "es": "El director habla.",
      "ruby": {
        "先生": "せんせい",
        "話": "はな"
      }
    },
    "etym": "Tree (木) plus crossing (交) — the timber frame of a building where students gather: a school.",
    "rel": [
      "学",
      "木",
      "交"
    ],
    "strokes": 10,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "学校 = school; 校長 = principal; 高校 = high school. Kun readings are rare.",
    "spot": "On 校 in school words like 学校 (school) 🏫."
  },
  {
    "kanji": "文",
    "pic": "📝",
    "on": [
      "ブン",
      "モン"
    ],
    "kun": [
      "ふみ"
    ],
    "en": [
      "writing",
      "sentence",
      "literature",
      "text"
    ],
    "es": [
      "escritura",
      "oración",
      "literatura",
      "texto"
    ],
    "onEx": {
      "jp": "日本語で作文を書きます。",
      "word": "作文",
      "read": "さくぶん",
      "en": "I write a composition in Japanese.",
      "es": "Escribo una redacción en japonés.",
      "ruby": {
        "日本語": "にほんご",
        "書": "か"
      }
    },
    "kunEx": {
      "jp": "古い文を読みました。",
      "word": "文",
      "read": "ふみ",
      "en": "I read an old letter.",
      "es": "Leí una carta antigua.",
      "ruby": {
        "古": "ふる",
        "読": "よ"
      }
    },
    "etym": "A picture of a person with a decorated chest — crossing lines that became patterns, letters, and writing.",
    "rel": [
      "字",
      "作",
      "学"
    ],
    "strokes": 4,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "作文 = composition; 文化 = culture; 文章 = a piece of writing.",
    "spot": "On 文 in writing words like 作文 (composition) 📝."
  },
  {
    "kanji": "字",
    "pic": "🔠",
    "on": [
      "ジ"
    ],
    "kun": [
      "あざ"
    ],
    "en": [
      "character",
      "letter",
      "symbol"
    ],
    "es": [
      "carácter",
      "letra",
      "símbolo"
    ],
    "onEx": {
      "jp": "漢字を勉強します。",
      "word": "漢字",
      "read": "かんじ",
      "en": "I study kanji.",
      "es": "Estudio kanji.",
      "ruby": {
        "勉強": "べんきょう"
      }
    },
    "kunEx": {
      "jp": "数字を大きく書きます。",
      "word": "数字",
      "read": "すうじ",
      "en": "I write the numbers large.",
      "es": "Escribo los números en grande.",
      "ruby": {
        "大": "おお",
        "書": "か"
      }
    },
    "etym": "Roof (宀) over a child (子) — characters born and raised at home, multiplying like offspring.",
    "rel": [
      "子",
      "学",
      "文"
    ],
    "strokes": 6,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "漢字 = kanji; 数字 = numeral; 文字 = letter/character. Kun reading あざ appears in place names.",
    "spot": "On 字 in words about written characters like 漢字 (kanji) 🔠."
  },
  {
    "kanji": "語",
    "pic": "🗣️",
    "on": [
      "ゴ"
    ],
    "kun": [
      "かた"
    ],
    "en": [
      "language",
      "word",
      "to tell"
    ],
    "es": [
      "idioma",
      "palabra",
      "contar"
    ],
    "onEx": {
      "jp": "私は日本語を勉強します。",
      "word": "日本語",
      "read": "にほんご",
      "en": "I study Japanese.",
      "es": "Estudio japonés.",
      "ruby": {
        "私": "わたし",
        "勉強": "べんきょう"
      }
    },
    "kunEx": {
      "jp": "祖母が昔の物語を語ります。",
      "word": "語ります",
      "read": "かたります",
      "en": "My grandmother tells an old story.",
      "es": "Mi abuela cuenta una vieja historia.",
      "ruby": {
        "祖母": "そぼ",
        "昔": "むかし",
        "物語": "ものがたり"
      }
    },
    "etym": "言 (words) plus 吾 (I/me) — the words I speak, hence language.",
    "rel": [
      "言",
      "話",
      "読"
    ],
    "strokes": 14,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "日本語 (Japanese) is one of the first words learners write.",
    "spot": "On 語 in words like 英語 (English) 🗣️."
  },
  {
    "kanji": "話",
    "pic": "💬",
    "on": [
      "ワ"
    ],
    "kun": [
      "はな",
      "はなし"
    ],
    "en": [
      "talk",
      "speak",
      "story"
    ],
    "es": [
      "hablar",
      "conversar",
      "historia"
    ],
    "onEx": {
      "jp": "友達と会話を楽しみます。",
      "word": "会話",
      "read": "かいわ",
      "en": "I enjoy conversation with friends.",
      "es": "Disfruto de la conversación con amigos.",
      "ruby": {
        "友達": "ともだち",
        "楽": "たの"
      }
    },
    "kunEx": {
      "jp": "先生とゆっくり話します。",
      "word": "話します",
      "read": "はなします",
      "en": "I speak slowly with the teacher.",
      "es": "Hablo despacio con el profesor.",
      "ruby": {
        "先生": "せんせい"
      }
    },
    "etym": "言 (words) plus 舌 (tongue) — words on the tongue, meaning to talk.",
    "rel": [
      "言",
      "語",
      "聞"
    ],
    "strokes": 13,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "話します means 'to speak'; 話 alone can mean 'a story.'",
    "spot": "On 話 in words like 電話 (telephone) 💬."
  },
  {
    "kanji": "読",
    "pic": "📖",
    "on": [
      "ドク"
    ],
    "kun": [
      "よ"
    ],
    "en": [
      "read"
    ],
    "es": [
      "leer"
    ],
    "onEx": {
      "jp": "週末に読書をします。",
      "word": "読書",
      "read": "どくしょ",
      "en": "I read books on the weekend.",
      "es": "Leo libros el fin de semana.",
      "ruby": {
        "週末": "しゅうまつ"
      }
    },
    "kunEx": {
      "jp": "毎晩、本を読みます。",
      "word": "読みます",
      "read": "よみます",
      "en": "I read a book every night.",
      "es": "Leo un libro cada noche.",
      "ruby": {
        "毎晩": "まいばん",
        "本": "ほん"
      }
    },
    "etym": "言 (words) plus 賣 (sell/announce) — voicing words aloud, hence to read.",
    "rel": [
      "言",
      "書",
      "語"
    ],
    "strokes": 14,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "読書 (reading) pairs 読 with 書 (write).",
    "spot": "On 読 in words like 音読 (reading aloud) 📖."
  },
  {
    "kanji": "書",
    "pic": "✍️",
    "on": [
      "ショ"
    ],
    "kun": [
      "か"
    ],
    "en": [
      "write"
    ],
    "es": [
      "escribir"
    ],
    "onEx": {
      "jp": "図書館で本を借ります。",
      "word": "図書館",
      "read": "としょかん",
      "en": "I borrow books at the library.",
      "es": "Tomo prestados libros en la biblioteca.",
      "ruby": {
        "本": "ほん",
        "借": "か"
      }
    },
    "kunEx": {
      "jp": "手紙を丁寧に書きます。",
      "word": "書きます",
      "read": "かきます",
      "en": "I write the letter carefully.",
      "es": "Escribo la carta con cuidado.",
      "ruby": {
        "手紙": "てがみ",
        "丁寧": "ていねい"
      }
    },
    "etym": "A hand holding a brush (聿) over 曰 (to say) — writing down speech.",
    "rel": [
      "読",
      "画",
      "者"
    ],
    "strokes": 10,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "図書館 (library) literally means 'book hall.'",
    "spot": "On 書 in words like 辞書 (dictionary) ✍️."
  },
  {
    "kanji": "聞",
    "pic": "👂",
    "on": [
      "ブン"
    ],
    "kun": [
      "き"
    ],
    "en": [
      "hear",
      "listen",
      "ask"
    ],
    "es": [
      "oír",
      "escuchar",
      "preguntar"
    ],
    "onEx": {
      "jp": "毎朝、新聞を読みます。",
      "word": "新聞",
      "read": "しんぶん",
      "en": "I read the newspaper every morning.",
      "es": "Leo el periódico cada mañana.",
      "ruby": {
        "毎朝": "まいあさ",
        "読": "よ"
      }
    },
    "kunEx": {
      "jp": "好きな音楽を聞きます。",
      "word": "聞きます",
      "read": "ききます",
      "en": "I listen to music I like.",
      "es": "Escucho la música que me gusta.",
      "ruby": {
        "好": "す",
        "音楽": "おんがく"
      }
    },
    "etym": "An ear (耳) inside a gate (門) — listening at the door, hence to hear.",
    "rel": [
      "耳",
      "門",
      "聴"
    ],
    "strokes": 14,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "聞く means both 'to hear' and 'to ask.'",
    "spot": "On 聞 in words like 新聞 (newspaper) 👂."
  },
  {
    "kanji": "見",
    "pic": "👀",
    "on": [
      "ケン"
    ],
    "kun": [
      "み"
    ],
    "en": [
      "see",
      "look",
      "view"
    ],
    "es": [
      "ver",
      "mirar",
      "opinión"
    ],
    "onEx": {
      "jp": "会議で意見を言います。",
      "word": "意見",
      "read": "いけん",
      "en": "I give my opinion at the meeting.",
      "es": "Doy mi opinión en la reunión.",
      "ruby": {
        "会議": "かいぎ",
        "言": "い"
      }
    },
    "kunEx": {
      "jp": "窓から海を見ます。",
      "word": "見ます",
      "read": "みます",
      "en": "I look at the sea from the window.",
      "es": "Miro el mar desde la ventana.",
      "ruby": {
        "窓": "まど",
        "海": "うみ"
      }
    },
    "etym": "An eye (目) on top of legs (儿) — a person looking, hence to see.",
    "rel": [
      "目",
      "貝",
      "親"
    ],
    "strokes": 7,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "見ます is 'to see'; 意見 means 'opinion.'",
    "spot": "On 見 in words like 見学 (field study) 👀."
  },
  {
    "kanji": "行",
    "pic": "🚶",
    "on": [
      "コウ",
      "ギョウ"
    ],
    "kun": [
      "い",
      "おこな"
    ],
    "en": [
      "go",
      "carry out",
      "line"
    ],
    "es": [
      "ir",
      "realizar",
      "línea"
    ],
    "onEx": {
      "jp": "来月、家族と旅行します。",
      "word": "旅行",
      "read": "りょこう",
      "en": "Next month I travel with my family.",
      "es": "El próximo mes viajo con mi familia.",
      "ruby": {
        "来月": "らいげつ",
        "家族": "かぞく"
      }
    },
    "kunEx": {
      "jp": "明日、学校に行きます。",
      "word": "行きます",
      "read": "いきます",
      "en": "I go to school tomorrow.",
      "es": "Voy a la escuela mañana.",
      "ruby": {
        "明日": "あした",
        "学校": "がっこう"
      }
    },
    "etym": "A pictograph of a crossroads — a place where people go and move.",
    "rel": [
      "来",
      "歩",
      "道"
    ],
    "strokes": 6,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "行 reads コウ in 旅行 but ギョウ in 行事 (event).",
    "spot": "On 行 in words like 銀行 (bank) 🚶."
  },
  {
    "kanji": "来",
    "pic": "🔜",
    "on": [
      "ライ"
    ],
    "kun": [
      "く",
      "き",
      "こ"
    ],
    "en": [
      "come",
      "next",
      "since"
    ],
    "es": [
      "venir",
      "próximo",
      "desde"
    ],
    "onEx": {
      "jp": "来週、テストがあります。",
      "word": "来週",
      "read": "らいしゅう",
      "en": "There is a test next week.",
      "es": "Hay un examen la próxima semana."
    },
    "kunEx": {
      "jp": "友達が家に来ます。",
      "word": "来ます",
      "read": "きます",
      "en": "My friend comes to my house.",
      "es": "Mi amigo viene a mi casa.",
      "ruby": {
        "友達": "ともだち",
        "家": "いえ"
      }
    },
    "etym": "Originally a pictograph of a ripe wheat plant, later borrowed to mean 'come.'",
    "rel": [
      "行",
      "米",
      "週"
    ],
    "strokes": 7,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "来ます is irregular — its stem reading changes to き, く, and こ.",
    "spot": "On 来 in words like 未来 (future) 🔜."
  },
  {
    "kanji": "食",
    "pic": "🍚",
    "on": [
      "ショク"
    ],
    "kun": [
      "た",
      "く"
    ],
    "en": [
      "eat",
      "food"
    ],
    "es": [
      "comer",
      "comida"
    ],
    "onEx": {
      "jp": "家族と食事をします。",
      "word": "食事",
      "read": "しょくじ",
      "en": "I have a meal with my family.",
      "es": "Como con mi familia.",
      "ruby": {
        "家族": "かぞく"
      }
    },
    "kunEx": {
      "jp": "朝ごはんを食べます。",
      "word": "食べます",
      "read": "たべます",
      "en": "I eat breakfast.",
      "es": "Como el desayuno.",
      "ruby": {
        "朝": "あさ"
      }
    },
    "etym": "A lid over a vessel of food (皀) — a container of a meal, hence to eat.",
    "rel": [
      "飲",
      "飯",
      "館"
    ],
    "strokes": 9,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "食事 (a meal) combines 食 (eat) with 事 (matter/thing).",
    "spot": "On 食 in words like 食堂 (cafeteria) 🍚."
  },
  {
    "kanji": "飲",
    "pic": "🍵",
    "on": [
      "イン"
    ],
    "kun": [
      "のむ"
    ],
    "en": [
      "drink",
      "swallow"
    ],
    "es": [
      "beber",
      "tragar"
    ],
    "onEx": {
      "jp": "飲料水を買います。",
      "word": "飲料",
      "read": "いんりょう",
      "en": "I buy drinking water.",
      "es": "Compro agua potable.",
      "ruby": {
        "水": "すい",
        "買": "か"
      }
    },
    "kunEx": {
      "jp": "毎朝、水を飲みます。",
      "word": "飲みます",
      "read": "のみます",
      "en": "I drink water every morning.",
      "es": "Bebo agua cada mañana.",
      "ruby": {
        "毎朝": "まいあさ",
        "水": "みず"
      }
    },
    "etym": "Combines the 'eat/food' radical with a figure gaping to swallow — taking liquid into the body.",
    "rel": [
      "食",
      "水",
      "茶"
    ],
    "strokes": 12,
    "grade": 3,
    "jlpt": "N5",
    "trivia": "飲み物 (nomimono) means 'a drink' or 'beverage'.",
    "spot": "On 飲 in 飲食店 (restaurant) and 飲み会 (drinking party) 🍶."
  },
  {
    "kanji": "買",
    "pic": "🛒",
    "on": [
      "バイ"
    ],
    "kun": [
      "かう"
    ],
    "en": [
      "buy",
      "purchase"
    ],
    "es": [
      "comprar",
      "adquirir"
    ],
    "onEx": {
      "jp": "土地の売買をします。",
      "word": "売買",
      "read": "ばいばい",
      "en": "We trade in land.",
      "es": "Comerciamos con terrenos.",
      "ruby": {
        "土地": "とち"
      }
    },
    "kunEx": {
      "jp": "店でパンを買います。",
      "word": "買います",
      "read": "かいます",
      "en": "I buy bread at the shop.",
      "es": "Compro pan en la tienda.",
      "ruby": {
        "店": "みせ"
      }
    },
    "etym": "A net (罒) over a shell (貝), the old money — casting a net to gather goods with cash.",
    "rel": [
      "売",
      "貝",
      "店"
    ],
    "strokes": 12,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "The bottom part 貝 (shell) was ancient currency, so it appears in many money words.",
    "spot": "On 買 in 買い物 (kaimono, shopping) 🛍️."
  },
  {
    "kanji": "出",
    "pic": "🚪",
    "on": [
      "シュツ"
    ],
    "kun": [
      "でる",
      "だす"
    ],
    "en": [
      "exit",
      "leave",
      "put out"
    ],
    "es": [
      "salir",
      "sacar",
      "dejar"
    ],
    "onEx": {
      "jp": "駅の出口はどこですか。",
      "word": "出口",
      "read": "でぐち",
      "en": "Where is the station exit?",
      "es": "¿Dónde está la salida de la estación?",
      "ruby": {
        "駅": "えき"
      }
    },
    "kunEx": {
      "jp": "七時に家を出ます。",
      "word": "出ます",
      "read": "でます",
      "en": "I leave home at seven.",
      "es": "Salgo de casa a las siete.",
      "ruby": {
        "七時": "しちじ",
        "家": "いえ"
      }
    },
    "etym": "A pictograph of a foot stepping out beyond a boundary — going forth.",
    "rel": [
      "入",
      "口",
      "山"
    ],
    "strokes": 5,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "出 pairs with 入 to write 出入口 (deiriguchi), a way in and out.",
    "spot": "On 出 in 出発 (departure) and 外出 (going out) 🚶."
  },
  {
    "kanji": "入",
    "pic": "🚪",
    "on": [
      "ニュウ"
    ],
    "kun": [
      "はいる",
      "いれる"
    ],
    "en": [
      "enter",
      "insert",
      "put in"
    ],
    "es": [
      "entrar",
      "meter",
      "insertar"
    ],
    "onEx": {
      "jp": "入学のお祝いをします。",
      "word": "入学",
      "read": "にゅうがく",
      "en": "We celebrate starting school.",
      "es": "Celebramos el ingreso a la escuela.",
      "ruby": {
        "祝": "いわ"
      }
    },
    "kunEx": {
      "jp": "部屋に入ります。",
      "word": "入ります",
      "read": "はいります",
      "en": "I enter the room.",
      "es": "Entro en la habitación.",
      "ruby": {
        "部屋": "へや"
      }
    },
    "etym": "A pictograph of an inward-pointing shape — a wedge or roots pushing in.",
    "rel": [
      "出",
      "人",
      "口"
    ],
    "strokes": 2,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "Only two strokes, but note it differs from 人 (person) in how the strokes cross.",
    "spot": "On 入 in 入口 (entrance) and 入場 (admission) 🎟️."
  },
  {
    "kanji": "立",
    "pic": "🧍",
    "on": [
      "リツ"
    ],
    "kun": [
      "たつ"
    ],
    "en": [
      "stand",
      "rise",
      "set up"
    ],
    "es": [
      "ponerse de pie",
      "levantarse",
      "erigir"
    ],
    "onEx": {
      "jp": "国立の大学に通います。",
      "word": "国立",
      "read": "こくりつ",
      "en": "I attend a national university.",
      "es": "Asisto a una universidad nacional.",
      "ruby": {
        "大学": "だいがく",
        "通": "かよ"
      }
    },
    "kunEx": {
      "jp": "みんな立ちます。",
      "word": "立ちます",
      "read": "たちます",
      "en": "Everyone stands up.",
      "es": "Todos se ponen de pie."
    },
    "etym": "A pictograph of a person standing firmly on the ground.",
    "rel": [
      "位",
      "音",
      "国"
    ],
    "strokes": 5,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "国立 (national) and 私立 (shiritsu, private) describe who runs a school.",
    "spot": "On 立 in 立場 (standpoint) and 独立 (independence) 🧍."
  },
  {
    "kanji": "休",
    "pic": "😴",
    "on": [
      "キュウ"
    ],
    "kun": [
      "やすむ"
    ],
    "en": [
      "rest",
      "take a break",
      "holiday"
    ],
    "es": [
      "descansar",
      "tomar un descanso",
      "vacaciones"
    ],
    "onEx": {
      "jp": "日曜は休日です。",
      "word": "休日",
      "read": "きゅうじつ",
      "en": "Sunday is a day off.",
      "es": "El domingo es día de descanso.",
      "ruby": {
        "日曜": "にちよう"
      }
    },
    "kunEx": {
      "jp": "今日は仕事を休みます。",
      "word": "休みます",
      "read": "やすみます",
      "en": "I'm taking the day off work today.",
      "es": "Hoy descanso del trabajo.",
      "ruby": {
        "今日": "きょう",
        "仕事": "しごと"
      }
    },
    "etym": "A person (亻) leaning against a tree (木) — resting in the shade.",
    "rel": [
      "体",
      "木",
      "人"
    ],
    "strokes": 6,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "夏休み (natsuyasumi) is summer vacation.",
    "spot": "On 休 in 休憩 (break) and 連休 (long weekend) 😴."
  },
  {
    "kanji": "会",
    "pic": "🤝",
    "on": [
      "カイ"
    ],
    "kun": [
      "あう"
    ],
    "en": [
      "meet",
      "association",
      "society"
    ],
    "es": [
      "encontrarse",
      "reunión",
      "asociación"
    ],
    "onEx": {
      "jp": "父は会社で働きます。",
      "word": "会社",
      "read": "かいしゃ",
      "en": "My father works at a company.",
      "es": "Mi padre trabaja en una empresa.",
      "ruby": {
        "父": "ちち",
        "働": "はたら"
      }
    },
    "kunEx": {
      "jp": "友達に会います。",
      "word": "会います",
      "read": "あいます",
      "en": "I meet my friend.",
      "es": "Me encuentro con mi amigo.",
      "ruby": {
        "友達": "ともだち"
      }
    },
    "etym": "A lid coming together over contents below — things gathering, coming together to meet.",
    "rel": [
      "社",
      "合",
      "話"
    ],
    "strokes": 6,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "会議 (kaigi) is a meeting; 会話 (kaiwa) is conversation.",
    "spot": "On 会 in 会社 (company) and 大会 (tournament) 🤝."
  },
  {
    "kanji": "高",
    "pic": "🗼",
    "on": [
      "コウ"
    ],
    "kun": [
      "たかい"
    ],
    "en": [
      "tall",
      "high",
      "expensive"
    ],
    "es": [
      "alto",
      "elevado",
      "caro"
    ],
    "onEx": {
      "jp": "兄は高校の学生です。",
      "word": "高校",
      "read": "こうこう",
      "en": "My older brother is a high school student.",
      "es": "Mi hermano mayor es estudiante de secundaria.",
      "ruby": {
        "兄": "あに",
        "学生": "がくせい"
      }
    },
    "kunEx": {
      "jp": "この時計は高いです。",
      "word": "高い",
      "read": "たかい",
      "en": "This watch is expensive.",
      "es": "Este reloj es caro.",
      "ruby": {
        "時計": "とけい"
      }
    },
    "etym": "A pictograph of a tall watchtower or gate — height and elevation.",
    "rel": [
      "安",
      "校",
      "市"
    ],
    "strokes": 10,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "高い means both 'tall/high' and 'expensive' depending on context.",
    "spot": "On 高 in 最高 (the best) and 高速 (high speed) 🗼."
  },
  {
    "kanji": "安",
    "pic": "💰",
    "on": [
      "アン"
    ],
    "kun": [
      "やすい"
    ],
    "en": [
      "cheap",
      "peaceful",
      "safe"
    ],
    "es": [
      "barato",
      "tranquilo",
      "seguro"
    ],
    "onEx": {
      "jp": "どうぞご安心ください。",
      "word": "安心",
      "read": "あんしん",
      "en": "Please rest assured.",
      "es": "Por favor, quédese tranquilo."
    },
    "kunEx": {
      "jp": "この店は安いです。",
      "word": "安い",
      "read": "やすい",
      "en": "This shop is cheap.",
      "es": "Esta tienda es barata.",
      "ruby": {
        "店": "みせ"
      }
    },
    "etym": "A woman (女) safe under a roof (宀) — a calm, settled home.",
    "rel": [
      "高",
      "女",
      "家"
    ],
    "strokes": 6,
    "grade": 3,
    "jlpt": "N5",
    "trivia": "安い means 'cheap', but 安 also carries the sense of 'peace' as in 安全 (safety).",
    "spot": "On 安 in 安全 (safety) and 不安 (anxiety) 💰."
  },
  {
    "kanji": "新",
    "pic": "🆕",
    "on": [
      "シン"
    ],
    "kun": [
      "あたら"
    ],
    "en": [
      "new"
    ],
    "es": [
      "nuevo"
    ],
    "onEx": {
      "jp": "毎朝、新聞を読みます。",
      "word": "新聞",
      "read": "しんぶん",
      "en": "I read the newspaper every morning.",
      "es": "Leo el periódico cada mañana.",
      "ruby": {
        "毎朝": "まいあさ",
        "読": "よ"
      }
    },
    "kunEx": {
      "jp": "新しい車を買いました。",
      "word": "新しい",
      "read": "あたらしい",
      "en": "I bought a new car.",
      "es": "Compré un coche nuevo.",
      "ruby": {
        "車": "くるま",
        "買": "か"
      }
    },
    "etym": "An axe cutting fresh wood from a standing tree — timber newly hewn.",
    "rel": [
      "古",
      "聞",
      "親"
    ],
    "strokes": 13,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "新聞 = newspaper, literally 'new-hear'. The opposite of 古.",
    "spot": "On 新 in 新幹線 (bullet train) and 新しい (new) 🆕."
  },
  {
    "kanji": "古",
    "pic": "🏺",
    "on": [
      "コ"
    ],
    "kun": [
      "ふる"
    ],
    "en": [
      "old"
    ],
    "es": [
      "viejo"
    ],
    "onEx": {
      "jp": "中古の車を買いました。",
      "word": "中古",
      "read": "ちゅうこ",
      "en": "I bought a used car.",
      "es": "Compré un coche usado.",
      "ruby": {
        "車": "くるま",
        "買": "か"
      }
    },
    "kunEx": {
      "jp": "この古い時計は父のです。",
      "word": "古い",
      "read": "ふるい",
      "en": "This old clock is my father's.",
      "es": "Este reloj viejo es de mi padre.",
      "ruby": {
        "時計": "とけい",
        "父": "ちち"
      }
    },
    "etym": "Ten (十) generations of mouths (口) passing down what is old and time-worn.",
    "rel": [
      "新",
      "口",
      "故"
    ],
    "strokes": 5,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "中古 = second-hand ('middle-old'). The opposite of 新.",
    "spot": "On 古 in 古い (old) and 中古 (used) 🏺."
  },
  {
    "kanji": "長",
    "pic": "📏",
    "on": [
      "チョウ"
    ],
    "kun": [
      "なが"
    ],
    "en": [
      "long",
      "leader"
    ],
    "es": [
      "largo",
      "jefe"
    ],
    "onEx": {
      "jp": "校長先生が話します。",
      "word": "校長",
      "read": "こうちょう",
      "en": "The principal is speaking.",
      "es": "El director está hablando.",
      "ruby": {
        "先生": "せんせい",
        "話": "はな"
      }
    },
    "kunEx": {
      "jp": "この川はとても長いです。",
      "word": "長い",
      "read": "ながい",
      "en": "This river is very long.",
      "es": "Este río es muy largo.",
      "ruby": {
        "川": "かわ"
      }
    },
    "etym": "A pictograph of long, flowing hair on an elder — length and, by extension, a senior leader.",
    "rel": [
      "校",
      "町",
      "毛"
    ],
    "strokes": 8,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "校長 = school principal ('school-chief'). Same kanji means both 'long' and 'boss'.",
    "spot": "On 長 in 長い (long) and 社長 (company president) 📏."
  },
  {
    "kanji": "多",
    "pic": "🔢",
    "on": [
      "タ"
    ],
    "kun": [
      "おお"
    ],
    "en": [
      "many",
      "much"
    ],
    "es": [
      "muchos",
      "mucho"
    ],
    "onEx": {
      "jp": "多分、雨が降ります。",
      "word": "多分",
      "read": "たぶん",
      "en": "It will probably rain.",
      "es": "Probablemente lloverá.",
      "ruby": {
        "雨": "あめ",
        "降": "ふ"
      }
    },
    "kunEx": {
      "jp": "この町は店が多いです。",
      "word": "多い",
      "read": "おおい",
      "en": "This town has many shops.",
      "es": "Este pueblo tiene muchas tiendas.",
      "ruby": {
        "町": "まち",
        "店": "みせ"
      }
    },
    "etym": "Two evenings (夕) stacked up — night after night after night, so very many.",
    "rel": [
      "少",
      "夕",
      "名"
    ],
    "strokes": 6,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "多分 = probably ('much-part'). The opposite of 少.",
    "spot": "On 多 in 多い (many) and 多数 (majority) 🔢."
  },
  {
    "kanji": "少",
    "pic": "🤏",
    "on": [
      "ショウ"
    ],
    "kun": [
      "すく",
      "すこ"
    ],
    "en": [
      "few",
      "little"
    ],
    "es": [
      "poco",
      "pocos"
    ],
    "onEx": {
      "jp": "少年はサッカーが好きです。",
      "word": "少年",
      "read": "しょうねん",
      "en": "The boy likes soccer.",
      "es": "Al chico le gusta el fútbol.",
      "ruby": {
        "好": "す"
      }
    },
    "kunEx": {
      "jp": "お金が少ないです。",
      "word": "少ない",
      "read": "すくない",
      "en": "I have little money.",
      "es": "Tengo poco dinero.",
      "ruby": {
        "金": "かね"
      }
    },
    "etym": "Small (小) with one more stroke shaved off — even smaller, so few.",
    "rel": [
      "多",
      "小",
      "省"
    ],
    "strokes": 4,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "少年 = boy ('few-years', i.e. young). The opposite of 多.",
    "spot": "On 少 in 少ない (few) and 少し (a little) 🤏."
  },
  {
    "kanji": "毎",
    "pic": "🔁",
    "on": [
      "マイ"
    ],
    "kun": [],
    "en": [
      "every",
      "each"
    ],
    "es": [
      "cada",
      "todos"
    ],
    "onEx": {
      "jp": "毎日、日本語を勉強します。",
      "word": "毎日",
      "read": "まいにち",
      "en": "I study Japanese every day.",
      "es": "Estudio japonés todos los días.",
      "ruby": {
        "日本語": "にほんご",
        "勉強": "べんきょう"
      }
    },
    "kunEx": {
      "jp": "毎朝コーヒーを飲みます。",
      "word": "毎朝",
      "read": "まいあさ",
      "en": "I drink coffee every morning.",
      "es": "Bebo café cada mañana.",
      "ruby": {
        "飲": "の"
      }
    },
    "etym": "A mother (母) crowned with a hairpin — repeated generation after generation, hence 'every'.",
    "rel": [
      "週",
      "日",
      "母"
    ],
    "strokes": 6,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "毎日 = every day. Almost always paired: 毎週, 毎月, 毎年.",
    "spot": "On 毎 in 毎日 (every day) and 毎回 (every time) 🔁."
  },
  {
    "kanji": "週",
    "pic": "📅",
    "on": [
      "シュウ"
    ],
    "kun": [],
    "en": [
      "week"
    ],
    "es": [
      "semana"
    ],
    "onEx": {
      "jp": "今週はとても忙しいです。",
      "word": "今週",
      "read": "こんしゅう",
      "en": "This week is very busy.",
      "es": "Esta semana estoy muy ocupado.",
      "ruby": {
        "忙": "いそが"
      }
    },
    "kunEx": {
      "jp": "来週、京都へ行きます。",
      "word": "来週",
      "read": "らいしゅう",
      "en": "Next week I'm going to Kyoto.",
      "es": "La próxima semana voy a Kioto.",
      "ruby": {
        "来": "らい",
        "京都": "きょうと",
        "行": "い"
      }
    },
    "etym": "The 'go' radical (辶) around a full cycle (周) — one lap of days, a week.",
    "rel": [
      "毎",
      "月",
      "先"
    ],
    "strokes": 11,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "今週 = this week, 来週 = next week, 先週 = last week.",
    "spot": "On 週 in 週末 (weekend) and 毎週 (every week) 📅."
  },
  {
    "kanji": "今",
    "pic": "⌚",
    "on": [
      "コン",
      "キン"
    ],
    "kun": [
      "いま"
    ],
    "en": [
      "now"
    ],
    "es": [
      "ahora"
    ],
    "onEx": {
      "jp": "今日はいい天気です。",
      "word": "今日",
      "read": "きょう",
      "en": "Today the weather is nice.",
      "es": "Hoy hace buen tiempo.",
      "ruby": {
        "天気": "てんき"
      }
    },
    "kunEx": {
      "jp": "今、駅にいます。",
      "word": "今",
      "read": "いま",
      "en": "I'm at the station now.",
      "es": "Ahora estoy en la estación.",
      "ruby": {
        "駅": "えき"
      }
    },
    "etym": "A lid drawn over the present moment — the 'now' held in hand.",
    "rel": [
      "週",
      "日",
      "会"
    ],
    "strokes": 4,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "今日 (きょう) is irregular: 'now-day' = today. Also 今年 (ことし) = this year.",
    "spot": "On 今 in 今 (now) and 今日 (today) ⌚."
  },
  {
    "kanji": "何",
    "pic": "❓",
    "on": [
      "カ"
    ],
    "kun": [
      "なに",
      "なん"
    ],
    "en": [
      "what",
      "how many"
    ],
    "es": [
      "qué",
      "cuántos"
    ],
    "onEx": {
      "jp": "今、何時ですか。",
      "word": "何時",
      "read": "なんじ",
      "en": "What time is it now?",
      "es": "¿Qué hora es ahora?",
      "ruby": {
        "今": "いま"
      }
    },
    "kunEx": {
      "jp": "これは何ですか。",
      "word": "何",
      "read": "なに",
      "en": "What is this?",
      "es": "¿Qué es esto?"
    },
    "etym": "A person (亻) shouldering a load and being asked 'carrying what?' — hence 'what'.",
    "rel": [
      "今",
      "時",
      "可"
    ],
    "strokes": 7,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "Reads なに alone but shifts to なん before counters: 何時 (what time), 何人 (how many people).",
    "spot": "On 何 in 何 (what) and 何時 (what time) ❓."
  },
  {
    "kanji": "国",
    "pic": "🌏",
    "on": [
      "コク"
    ],
    "kun": [
      "くに"
    ],
    "en": [
      "country",
      "nation"
    ],
    "es": [
      "país",
      "nación"
    ],
    "onEx": {
      "jp": "中国はとても広いです。",
      "word": "中国",
      "read": "ちゅうごく",
      "en": "China is very large.",
      "es": "China es muy grande.",
      "ruby": {
        "広": "ひろ"
      }
    },
    "kunEx": {
      "jp": "どこの国から来ましたか。",
      "word": "国",
      "read": "くに",
      "en": "What country did you come from?",
      "es": "¿De qué país vienes?",
      "ruby": {
        "来": "き"
      }
    },
    "etym": "A jewel (王) enclosed by a border (囗) — a nation defined by its boundaries.",
    "rel": [
      "王",
      "囲",
      "園"
    ],
    "strokes": 8,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "中国 = China. The outer box 囗 means 'enclosure.'",
    "spot": "On 国 in words like 外国 (foreign country) 🌏."
  },
  {
    "kanji": "足",
    "pic": "🦶",
    "on": [
      "ソク"
    ],
    "kun": [
      "あし",
      "た"
    ],
    "en": [
      "foot",
      "leg",
      "be enough"
    ],
    "es": [
      "pie",
      "pierna",
      "ser suficiente"
    ],
    "onEx": {
      "jp": "遠足はとても楽しかったです。",
      "word": "遠足",
      "read": "えんそく",
      "en": "The field trip was a lot of fun.",
      "es": "La excursión fue muy divertida.",
      "ruby": {
        "楽": "たの"
      }
    },
    "kunEx": {
      "jp": "右の足が痛いです。",
      "word": "足",
      "read": "あし",
      "en": "My right foot hurts.",
      "es": "Me duele el pie derecho.",
      "ruby": {
        "右": "みぎ",
        "痛": "いた"
      }
    },
    "etym": "A pictograph of a knee and foot — the leg that carries you.",
    "rel": [
      "走",
      "路",
      "促"
    ],
    "strokes": 7,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "遠足 = field trip. 足りる means 'to be enough.'",
    "spot": "On 足 in words like 満足 (satisfaction) 🦶."
  },
  {
    "kanji": "目",
    "pic": "👁️",
    "on": [
      "モク"
    ],
    "kun": [
      "め"
    ],
    "en": [
      "eye",
      "look"
    ],
    "es": [
      "ojo",
      "mirada"
    ],
    "onEx": {
      "jp": "旅行の目的は何ですか。",
      "word": "目的",
      "read": "もくてき",
      "en": "What is the purpose of the trip?",
      "es": "¿Cuál es el objetivo del viaje?",
      "ruby": {
        "旅行": "りょこう",
        "何": "なに"
      }
    },
    "kunEx": {
      "jp": "目がとても疲れました。",
      "word": "目",
      "read": "め",
      "en": "My eyes got very tired.",
      "es": "Mis ojos se cansaron mucho.",
      "ruby": {
        "疲": "つか"
      }
    },
    "etym": "A pictograph of an eye, turned upright — the pupil in its frame.",
    "rel": [
      "見",
      "相",
      "眠"
    ],
    "strokes": 5,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "目的 = purpose/goal. Turned sideways it looks like an eye 👁️.",
    "spot": "On 目 in words like 目次 (table of contents) 👁️."
  },
  {
    "kanji": "耳",
    "pic": "👂",
    "on": [
      "ジ"
    ],
    "kun": [
      "みみ"
    ],
    "en": [
      "ear"
    ],
    "es": [
      "oído"
    ],
    "onEx": {
      "jp": "耳鼻科へ行きました。",
      "word": "耳鼻科",
      "read": "じびか",
      "en": "I went to the ear-nose-throat clinic.",
      "es": "Fui al otorrinolaringólogo.",
      "ruby": {
        "行": "い"
      }
    },
    "kunEx": {
      "jp": "耳が少し痛いです。",
      "word": "耳",
      "read": "みみ",
      "en": "My ear hurts a little.",
      "es": "Me duele un poco el oído.",
      "ruby": {
        "少": "すこ",
        "痛": "いた"
      }
    },
    "etym": "A pictograph of an ear with its lobe — the shape of hearing.",
    "rel": [
      "取",
      "聞",
      "職"
    ],
    "strokes": 6,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "耳鼻科 = ENT clinic. 耳 is the left half of 聞 (to hear).",
    "spot": "On 耳 in words like 中耳炎 (middle-ear infection) 👂."
  },
  {
    "kanji": "右",
    "pic": "➡️",
    "on": [
      "ウ",
      "ユウ"
    ],
    "kun": [
      "みぎ"
    ],
    "en": [
      "right"
    ],
    "es": [
      "derecha"
    ],
    "onEx": {
      "jp": "左右をよく見てください。",
      "word": "左右",
      "read": "さゆう",
      "en": "Please look carefully both ways.",
      "es": "Por favor mira bien a ambos lados.",
      "ruby": {
        "見": "み"
      }
    },
    "kunEx": {
      "jp": "次の角を右に曲がります。",
      "word": "右",
      "read": "みぎ",
      "en": "Turn right at the next corner.",
      "es": "Gira a la derecha en la próxima esquina.",
      "ruby": {
        "次": "つぎ",
        "角": "かど",
        "曲": "ま"
      }
    },
    "etym": "A hand (ナ) over a mouth (口) — the hand used for eating, the right hand.",
    "rel": [
      "左",
      "石",
      "有"
    ],
    "strokes": 5,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "左右 (さゆう) = left and right. Note it starts with a slanted stroke.",
    "spot": "On 右 in words like 右折 (right turn) ➡️."
  },
  {
    "kanji": "左",
    "pic": "⬅️",
    "on": [
      "サ"
    ],
    "kun": [
      "ひだり"
    ],
    "en": [
      "left"
    ],
    "es": [
      "izquierda"
    ],
    "onEx": {
      "jp": "左右をよく確認しましょう。",
      "word": "左右",
      "read": "さゆう",
      "en": "Let's check both sides carefully.",
      "es": "Verifiquemos bien ambos lados.",
      "ruby": {
        "確認": "かくにん"
      }
    },
    "kunEx": {
      "jp": "左の手を上げてください。",
      "word": "左",
      "read": "ひだり",
      "en": "Please raise your left hand.",
      "es": "Por favor levanta la mano izquierda.",
      "ruby": {
        "手": "て",
        "上": "あ"
      }
    },
    "etym": "A hand (ナ) over a carpenter's square (工) — the hand that steadies the work, the left.",
    "rel": [
      "右",
      "工",
      "差"
    ],
    "strokes": 5,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "左右 = left and right. 左 and 右 differ in their lower halves (工 vs 口).",
    "spot": "On 左 in words like 左折 (left turn) ⬅️."
  },
  {
    "kanji": "東",
    "pic": "🌅",
    "on": [
      "トウ"
    ],
    "kun": [
      "ひがし"
    ],
    "en": [
      "east"
    ],
    "es": [
      "este"
    ],
    "onEx": {
      "jp": "来週、東京へ行きます。",
      "word": "東京",
      "read": "とうきょう",
      "en": "Next week I'm going to Tokyo.",
      "es": "La próxima semana voy a Tokio.",
      "ruby": {
        "来週": "らいしゅう",
        "行": "い"
      }
    },
    "kunEx": {
      "jp": "太陽は東から昇ります。",
      "word": "東",
      "read": "ひがし",
      "en": "The sun rises in the east.",
      "es": "El sol sale por el este.",
      "ruby": {
        "太陽": "たいよう",
        "昇": "のぼ"
      }
    },
    "etym": "The sun (日) rising behind a tree (木) — the direction of dawn.",
    "rel": [
      "西",
      "京",
      "北"
    ],
    "strokes": 8,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "東京 = Tokyo, literally 'eastern capital.' The sun hides in a tree.",
    "spot": "On 東 in words like 東口 (east exit) 🌅."
  },
  {
    "kanji": "西",
    "pic": "🌇",
    "on": [
      "セイ",
      "サイ"
    ],
    "kun": [
      "にし"
    ],
    "en": [
      "west"
    ],
    "es": [
      "oeste"
    ],
    "onEx": {
      "jp": "西洋の文化が好きです。",
      "word": "西洋",
      "read": "せいよう",
      "en": "I like Western culture.",
      "es": "Me gusta la cultura occidental.",
      "ruby": {
        "文化": "ぶんか",
        "好": "す"
      }
    },
    "kunEx": {
      "jp": "風が西から吹いています。",
      "word": "西",
      "read": "にし",
      "en": "The wind is blowing from the west.",
      "es": "El viento sopla desde el oeste.",
      "ruby": {
        "風": "かぜ",
        "吹": "ふ"
      }
    },
    "etym": "A bird settling into its nest at sunset — the direction where the sun sets.",
    "rel": [
      "東",
      "南",
      "要"
    ],
    "strokes": 6,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "西洋 (せいよう) = the West. 関西 (Kansai) uses this kanji.",
    "spot": "On 西 in words like 西口 (west exit) 🌇."
  },
  {
    "kanji": "南",
    "pic": "🧭",
    "on": [
      "ナン"
    ],
    "kun": [
      "みなみ"
    ],
    "en": [
      "south"
    ],
    "es": [
      "sur"
    ],
    "onEx": {
      "jp": "南極はとても寒いです。",
      "word": "南極",
      "read": "なんきょく",
      "en": "The South Pole is very cold.",
      "es": "El Polo Sur es muy frío.",
      "ruby": {
        "極": "きょく",
        "寒": "さむ"
      }
    },
    "kunEx": {
      "jp": "部屋は南を向いています。",
      "word": "南",
      "read": "みなみ",
      "en": "The room faces south.",
      "es": "La habitación da al sur.",
      "ruby": {
        "部屋": "へや",
        "向": "む"
      }
    },
    "etym": "A warm plant sheltered in a frame — the sunny southern side.",
    "rel": [
      "北",
      "東",
      "西"
    ],
    "strokes": 9,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "南極 = South Pole. 南 pairs with 北 (north) as opposites.",
    "spot": "On 南 in words like 南口 (south exit) 🧭."
  },
  {
    "kanji": "北",
    "pic": "🧭",
    "on": [
      "ホク"
    ],
    "kun": [
      "きた"
    ],
    "en": [
      "north"
    ],
    "es": [
      "norte"
    ],
    "onEx": {
      "jp": "北海道は寒いです。",
      "word": "北海道",
      "read": "ほっかいどう",
      "en": "Hokkaido is cold.",
      "es": "Hokkaidō es frío.",
      "ruby": {
        "寒": "さむ"
      }
    },
    "kunEx": {
      "jp": "北の空を見ました。",
      "word": "北",
      "read": "きた",
      "en": "I looked at the northern sky.",
      "es": "Miré el cielo del norte.",
      "ruby": {
        "空": "そら",
        "見": "み"
      }
    },
    "etym": "Two people back-to-back — one faces the cold north.",
    "rel": [
      "海",
      "道",
      "南"
    ],
    "strokes": 5,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "北海道 (Hokkaido) literally means 'north sea road'.",
    "spot": "On 北 in 北海道 (Hokkaido) 🧭."
  },
  {
    "kanji": "外",
    "pic": "🚪",
    "on": [
      "ガイ",
      "ゲ"
    ],
    "kun": [
      "そと",
      "ほか"
    ],
    "en": [
      "outside",
      "foreign"
    ],
    "es": [
      "fuera",
      "extranjero"
    ],
    "onEx": {
      "jp": "外国へ行きたいです。",
      "word": "外国",
      "read": "がいこく",
      "en": "I want to go abroad.",
      "es": "Quiero ir al extranjero.",
      "ruby": {
        "行": "い"
      }
    },
    "kunEx": {
      "jp": "外で遊びましょう。",
      "word": "外",
      "read": "そと",
      "en": "Let's play outside.",
      "es": "Juguemos afuera.",
      "ruby": {
        "遊": "あそ"
      }
    },
    "etym": "Evening plus divination — fortunes told outside at dusk.",
    "rel": [
      "国",
      "名",
      "多"
    ],
    "strokes": 5,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "外国人 (がいこくじん) means 'foreigner'.",
    "spot": "On 外 in 外国 (foreign country) 🚪."
  },
  {
    "kanji": "前",
    "pic": "⏪",
    "on": [
      "ゼン"
    ],
    "kun": [
      "まえ"
    ],
    "en": [
      "before",
      "front"
    ],
    "es": [
      "antes",
      "frente"
    ],
    "onEx": {
      "jp": "午前に会議があります。",
      "word": "午前",
      "read": "ごぜん",
      "en": "There is a meeting in the morning.",
      "es": "Hay una reunión por la mañana.",
      "ruby": {
        "会議": "かいぎ"
      }
    },
    "kunEx": {
      "jp": "駅の前で待ちます。",
      "word": "前",
      "read": "まえ",
      "en": "I'll wait in front of the station.",
      "es": "Esperaré frente a la estación.",
      "ruby": {
        "駅": "えき",
        "待": "ま"
      }
    },
    "etym": "A boat moving forward — the sense of going ahead.",
    "rel": [
      "後",
      "午",
      "名"
    ],
    "strokes": 9,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "午前 = A.M. (morning), 午後 = P.M.",
    "spot": "On 前 in 午前 (morning / A.M.) ⏪."
  },
  {
    "kanji": "後",
    "pic": "⏩",
    "on": [
      "ゴ",
      "コウ"
    ],
    "kun": [
      "あと",
      "うしろ",
      "のち"
    ],
    "en": [
      "after",
      "behind"
    ],
    "es": [
      "después",
      "detrás"
    ],
    "onEx": {
      "jp": "午後に出かけます。",
      "word": "午後",
      "read": "ごご",
      "en": "I'll go out in the afternoon.",
      "es": "Saldré por la tarde.",
      "ruby": {
        "出": "で"
      }
    },
    "kunEx": {
      "jp": "後ろを見てください。",
      "word": "後ろ",
      "read": "うしろ",
      "en": "Please look behind you.",
      "es": "Por favor mira atrás.",
      "ruby": {
        "見": "み"
      }
    },
    "etym": "A short step with a thread — lagging behind, coming after.",
    "rel": [
      "前",
      "午",
      "去"
    ],
    "strokes": 9,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "午後 = P.M. (afternoon); 後ろ = behind.",
    "spot": "On 後 in 午後 (afternoon / P.M.) ⏩."
  },
  {
    "kanji": "車",
    "pic": "🚗",
    "on": [
      "シャ"
    ],
    "kun": [
      "くるま"
    ],
    "en": [
      "car",
      "wheel"
    ],
    "es": [
      "coche",
      "rueda"
    ],
    "onEx": {
      "jp": "電車で学校へ行きます。",
      "word": "電車",
      "read": "でんしゃ",
      "en": "I go to school by train.",
      "es": "Voy a la escuela en tren.",
      "ruby": {
        "学校": "がっこう",
        "行": "い"
      }
    },
    "kunEx": {
      "jp": "新しい車を買いました。",
      "word": "車",
      "read": "くるま",
      "en": "I bought a new car.",
      "es": "Compré un coche nuevo.",
      "ruby": {
        "新": "あたら",
        "買": "か"
      }
    },
    "etym": "A pictograph of a cart seen from above — axle and wheels.",
    "rel": [
      "電",
      "道",
      "前"
    ],
    "strokes": 7,
    "grade": 1,
    "jlpt": "N5",
    "trivia": "電車 (train) literally means 'electric wheel'.",
    "spot": "On 車 in 電車 (train) 🚗."
  },
  {
    "kanji": "電",
    "pic": "⚡",
    "on": [
      "デン"
    ],
    "kun": [],
    "en": [
      "electricity"
    ],
    "es": [
      "electricidad"
    ],
    "onEx": {
      "jp": "電気を消してください。",
      "word": "電気",
      "read": "でんき",
      "en": "Please turn off the light.",
      "es": "Por favor apaga la luz.",
      "ruby": {
        "消": "け"
      }
    },
    "kunEx": {
      "jp": "毎日、電車に乗ります。",
      "word": "電車",
      "read": "でんしゃ",
      "en": "I ride the train every day.",
      "es": "Tomo el tren todos los días.",
      "ruby": {
        "毎日": "まいにち",
        "乗": "の"
      }
    },
    "etym": "Rain above and lightning below — power from the storm.",
    "rel": [
      "車",
      "気",
      "雨"
    ],
    "strokes": 13,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "電 contains 雨 (rain) on top — lightning from the sky.",
    "spot": "On 電 in 電気 (electricity / lights) ⚡."
  },
  {
    "kanji": "道",
    "pic": "🛣️",
    "on": [
      "ドウ"
    ],
    "kun": [
      "みち"
    ],
    "en": [
      "road",
      "way"
    ],
    "es": [
      "camino",
      "vía"
    ],
    "onEx": {
      "jp": "道路が込んでいます。",
      "word": "道路",
      "read": "どうろ",
      "en": "The road is crowded.",
      "es": "La carretera está congestionada.",
      "ruby": {
        "込": "こ"
      }
    },
    "kunEx": {
      "jp": "この道をまっすぐ行きます。",
      "word": "道",
      "read": "みち",
      "en": "Go straight along this road.",
      "es": "Sigue recto por este camino.",
      "ruby": {
        "行": "い"
      }
    },
    "etym": "A head moving along a path — the way one travels.",
    "rel": [
      "北",
      "車",
      "前"
    ],
    "strokes": 12,
    "grade": 2,
    "jlpt": "N5",
    "trivia": "道 also means 'the Way' as in 武道 (martial arts).",
    "spot": "On 道 in 道路 (road / route) 🛣️."
  }
];
