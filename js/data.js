/*
 * KANJI DATA — JLPT N5 starter set.
 *
 * Each entry drives the game AND the collection cards:
 *   kanji : the character itself
 *   pic   : a meaning-image (emoji) shown behind the kanji in easy mode
 *   on    : On-yomi readings (Chinese-derived), katakana. [0] is primary.
 *   kun   : Kun-yomi readings (native Japanese), hiragana. [0] is primary.
 *   en    : English meanings. [0] is primary.
 *   es    : Spanish meanings. [0] is primary. (parallels `en`)
 *   onEx  : an example using an ON reading  { jp, word, read, en, es }
 *   kunEx : an example using a KUN reading  { jp, word, read, en, es }
 *           each example may carry ruby: { word: reading } — furigana for
 *           the OTHER kanji words in the sentence (the matched word keeps
 *           its parenthesized reading untouched). `en`/`es` are the sentence
 *           translation; the game shows whichever matches the chosen language.
 *   etym  : a short history / etymology blurb
 *   rel   : related kanji worth exploring next
 *   strokes/grade/jlpt : stats for the Kanji-of-the-Day popup
 *   trivia: a fun fact  |  spot: where you'll see it in the wild
 *
 * Easy/Normal boards use only the primary ([0]) reading of each list.
 * Hard boards may show ANY reading/meaning from the lists.
 *
 * LANGUAGE: the "meaning" brick shows en or es depending on the chosen
 * language. In 日本語 (Japanese) mode there is NO meaning brick at all.
 *
 * IMPORTANT: keep every string in on/kun/en/es unique across the whole file —
 * no two kanji may share a brick face. (validate-data.js checks this.)
 */
const KANJI = [
  {
    kanji: "日", pic: "☀️",
    on: ["ニチ", "ジツ"], kun: ["ひ", "か"], en: ["sun", "day"], es: ["sol", "día"],
    onEx:  { jp: "日曜日は休みです。", word: "日曜日", read: "にちようび", en: "Sunday is a day off.", es: "El domingo es día de descanso.", ruby: { "休": "やす" } },
    kunEx: { jp: "日の出がきれいです。", word: "日の出", read: "ひので", en: "The sunrise is beautiful.", es: "El amanecer es hermoso." },
    etym: "A pictograph of the sun — originally a circle with a dot in the center that squared off over centuries of writing.",
    rel: ["月", "本", "明"],
    strokes: 4, grade: 1, jlpt: "N5",
    trivia: "Also the ‘nichi’ in 日本 (Nihon): Japan’s own name means ‘sun-origin’ — the Land of the Rising Sun!",
    spot: "On every calendar, and the red circle on the flag 🇯🇵 is this very sun."
  },
  {
    kanji: "人", pic: "🧍",
    on: ["ジン", "ニン"], kun: ["ひと"], en: ["person"], es: ["persona"],
    onEx:  { jp: "日本人の友だちがいます。", word: "日本人", read: "にほんじん", en: "I have a Japanese friend.", es: "Tengo un amigo japonés.", ruby: { "友": "とも" } },
    kunEx: { jp: "あの人は先生です。", word: "人", read: "ひと", en: "That person is a teacher.", es: "Esa persona es profesor.", ruby: { "先生": "せんせい" } },
    etym: "A pictograph of a person seen from the side, mid-stride — just the legs and leaning body remain.",
    rel: ["大", "女", "男"],
    strokes: 2, grade: 1, jlpt: "N5",
    trivia: "Only two strokes! Used to count people: 一人 (one person), 二人 (two people).",
    spot: "On restroom signs and 求人 (help-wanted) ads."
  },
  {
    kanji: "大", pic: "🐘",
    on: ["ダイ", "タイ"], kun: ["おお"], en: ["big", "great"], es: ["grande", "gran"],
    onEx:  { jp: "大学で日本語を勉強します。", word: "大学", read: "だいがく", en: "I study Japanese at university.", es: "Estudio japonés en la universidad.", ruby: { "日本語": "にほんご", "勉強": "べんきょう" } },
    kunEx: { jp: "大きい犬がいます。", word: "大きい", read: "おおきい", en: "There is a big dog.", es: "Hay un perro grande.", ruby: { "犬": "いぬ" } },
    etym: "A person standing with arms and legs stretched wide — as big as a body can make itself.",
    rel: ["人", "小", "太"],
    strokes: 3, grade: 1, jlpt: "N5",
    trivia: "Add one dot and it becomes 犬 (dog) or 太 (fat) — a tiny stroke changes everything!",
    spot: "On sizes — 大 means ‘large’ (big ramen bowl 🍜)."
  },
  {
    kanji: "学", pic: "🎒",
    on: ["ガク"], kun: ["まなぶ"], en: ["learn"], es: ["aprender"],
    onEx:  { jp: "学校へ行きます。", word: "学校", read: "がっこう", en: "I go to school.", es: "Voy a la escuela.", ruby: { "行": "い" } },
    kunEx: { jp: "日本語を学ぶのは楽しい。", word: "学ぶ", read: "まなぶ", en: "Learning Japanese is fun.", es: "Aprender japonés es divertido.", ruby: { "日本語": "にほんご", "楽": "たの" } },
    etym: "A child (子) under a roof, with hands passing knowledge down from above — a schoolhouse in one character.",
    rel: ["子", "校", "字"],
    strokes: 8, grade: 1, jlpt: "N5",
    trivia: "It hides 子 (child) at the bottom — fitting for a character that means ‘to learn’.",
    spot: "On every 学校 (school) and 大学 (university)."
  },
  {
    kanji: "水", pic: "💧",
    on: ["スイ"], kun: ["みず"], en: ["water"], es: ["agua"],
    onEx:  { jp: "水曜日に会いましょう。", word: "水曜日", read: "すいようび", en: "Let's meet on Wednesday.", es: "Quedemos el miércoles.", ruby: { "会": "あ" } },
    kunEx: { jp: "冷たい水を飲みます。", word: "水", read: "みず", en: "I drink cold water.", es: "Bebo agua fría.", ruby: { "冷": "つめ", "飲": "の" } },
    etym: "A pictograph of a flowing stream — a central current with drops splashing off both sides.",
    rel: ["川", "海", "氷"],
    strokes: 4, grade: 1, jlpt: "N5",
    trivia: "The ‘sui’ in 水曜日 = Wednesday, literally ‘water day’.",
    spot: "On taps, bottles, and pools 🏊."
  },
  {
    kanji: "木", pic: "🌳",
    on: ["モク", "ボク"], kun: ["き"], en: ["tree", "wood"], es: ["árbol", "madera"],
    onEx:  { jp: "木曜日はいそがしいです。", word: "木曜日", read: "もくようび", en: "Thursday is busy.", es: "El jueves es ajetreado." },
    kunEx: { jp: "大きい木の下で休みます。", word: "木", read: "き", en: "I rest under a big tree.", es: "Descanso bajo un árbol grande.", ruby: { "大": "おお", "下": "した", "休": "やす" } },
    etym: "A pictograph of a tree: trunk in the middle, branches above, roots spreading below.",
    rel: ["本", "林", "森"],
    strokes: 4, grade: 1, jlpt: "N5",
    trivia: "Stack three (森) = forest; two (林) = grove. A whole woodland from one tree!",
    spot: "木曜日 = Thursday, and on wooden signboards 🌳."
  },
  {
    kanji: "山", pic: "🗻",
    on: ["サン"], kun: ["やま"], en: ["mountain"], es: ["montaña"],
    onEx:  { jp: "富士山にのぼりたいです。", word: "富士山", read: "ふじさん", en: "I want to climb Mt. Fuji.", es: "Quiero subir al monte Fuji." },
    kunEx: { jp: "山の上はさむいです。", word: "山", read: "やま", en: "It's cold on top of the mountain.", es: "Hace frío en la cima de la montaña.", ruby: { "上": "うえ" } },
    etym: "Three peaks rising from a baseline — one of the clearest surviving pictographs.",
    rel: ["川", "岩", "島"],
    strokes: 3, grade: 1, jlpt: "N5",
    trivia: "Mt. Fuji is 富士山 (Fuji-san). Also a super-common surname: 山田 (Yamada).",
    spot: "On maps, shrines, and hiking trails ⛰️."
  },
  {
    kanji: "川", pic: "🏞️",
    on: ["セン"], kun: ["かわ"], en: ["river"], es: ["río"],
    onEx:  { jp: "河川のちずを見ます。", word: "河川", read: "かせん", en: "I look at a map of the rivers.", es: "Miro un mapa de los ríos.", ruby: { "見": "み" } },
    kunEx: { jp: "川でおよぎます。", word: "川", read: "かわ", en: "I swim in the river.", es: "Nado en el río." },
    etym: "Three flowing lines — water running between two banks.",
    rel: ["山", "水", "州"],
    strokes: 3, grade: 1, jlpt: "N5",
    trivia: "Three flowing lines = a river. Lives in surnames like 石川 and 川口.",
    spot: "On bridges and place names all over Japan."
  },
  {
    kanji: "月", pic: "🌙",
    on: ["ゲツ", "ガツ"], kun: ["つき"], en: ["moon", "month"], es: ["luna", "mes"],
    onEx:  { jp: "一月はとてもさむいです。", word: "一月", read: "いちがつ", en: "January is very cold.", es: "Enero es muy frío." },
    kunEx: { jp: "今夜は月がきれいですね。", word: "月", read: "つき", en: "The moon is beautiful tonight, isn't it.", es: "La luna está hermosa esta noche, ¿verdad?", ruby: { "今夜": "こんや" } },
    etym: "A crescent moon with a shadow line inside. Because months follow the moon, it also means “month.”",
    rel: ["日", "明", "曜"],
    strokes: 4, grade: 1, jlpt: "N5",
    trivia: "Doubles as ‘month’ (一月 = January) and hides inside 明 (bright = sun+moon).",
    spot: "月曜日 = Monday 🌙."
  },
  {
    kanji: "金", pic: "💰",
    on: ["キン", "コン"], kun: ["かね"], en: ["gold", "money"], es: ["oro", "dinero"],
    onEx:  { jp: "金曜日が好きです。", word: "金曜日", read: "きんようび", en: "I like Fridays.", es: "Me gustan los viernes.", ruby: { "好": "す" } },
    kunEx: { jp: "お金がたりません。", word: "お金", read: "おかね", en: "I don't have enough money.", es: "No tengo suficiente dinero." },
    etym: "Nuggets of metal buried under the earth, capped by a roof — treasure in the ground.",
    rel: ["土", "銀", "鉄"],
    strokes: 8, grade: 1, jlpt: "N5",
    trivia: "Means gold AND money. 金曜日 = Friday — payday energy 💰.",
    spot: "On price tags, medals 🥇, and the element gold."
  },
  {
    kanji: "土", pic: "🌱",
    on: ["ド", "ト"], kun: ["つち"], en: ["soil", "earth"], es: ["tierra", "suelo"],
    onEx:  { jp: "土曜日に出かけます。", word: "土曜日", read: "どようび", en: "I go out on Saturday.", es: "Salgo el sábado.", ruby: { "出": "で" } },
    kunEx: { jp: "土にたねをまきます。", word: "土", read: "つち", en: "I sow seeds in the soil.", es: "Siembro semillas en la tierra." },
    etym: "A mound of earth sitting on the ground line — a little pile of soil.",
    rel: ["金", "地", "場"],
    strokes: 3, grade: 1, jlpt: "N5",
    trivia: "One stroke away from 士 (samurai/scholar). 土曜日 = Saturday.",
    spot: "In gardening 🌱 and pottery studios."
  },
  {
    kanji: "子", pic: "👶",
    on: ["シ", "ス"], kun: ["こ"], en: ["child"], es: ["niño"],
    onEx:  { jp: "女子チームがかちました。", word: "女子", read: "じょし", en: "The girls' team won.", es: "El equipo femenino ganó." },
    kunEx: { jp: "子どもがあそんでいます。", word: "子ども", read: "こども", en: "The children are playing.", es: "Los niños están jugando." },
    etym: "A swaddled baby with outstretched arms and a big head — the legs are wrapped up.",
    rel: ["学", "女", "好"],
    strokes: 3, grade: 1, jlpt: "N5",
    trivia: "A little swaddled baby. The ‘-ko’ ending in classic girls’ names like 花子 (Hanako).",
    spot: "On 子ども (children) signs everywhere 👶."
  },
  {
    kanji: "女", pic: "👧",
    on: ["ジョ", "ニョ"], kun: ["おんな"], en: ["woman"], es: ["mujer"],
    onEx:  { jp: "この店は女性に人気です。", word: "女性", read: "じょせい", en: "This shop is popular with women.", es: "Esta tienda es popular entre las mujeres.", ruby: { "店": "みせ", "人気": "にんき" } },
    kunEx: { jp: "女の人がうたっています。", word: "女", read: "おんな", en: "A woman is singing.", es: "Una mujer está cantando.", ruby: { "人": "ひと" } },
    etym: "A pictograph of a kneeling figure with folded arms — the ancient posture of a seated woman.",
    rel: ["男", "子", "好"],
    strokes: 3, grade: 1, jlpt: "N5",
    trivia: "Put a child (子) beside it and you get 好 — ‘to like / love’ 💕.",
    spot: "On restroom doors 🚺."
  },
  {
    kanji: "男", pic: "👦",
    on: ["ダン", "ナン"], kun: ["おとこ"], en: ["man", "male"], es: ["hombre", "varón"],
    onEx:  { jp: "男性用のトイレはあちらです。", word: "男性", read: "だんせい", en: "The men's restroom is over there.", es: "El baño de hombres está por allá.", ruby: { "用": "よう" } },
    kunEx: { jp: "男の子がはしっています。", word: "男", read: "おとこ", en: "A boy is running.", es: "Un niño está corriendo.", ruby: { "子": "こ" } },
    etym: "Strength (力) applied in the rice field (田) — the one doing heavy field work.",
    rel: ["女", "田", "力"],
    strokes: 7, grade: 1, jlpt: "N5",
    trivia: "Rice field (田) + strength (力) = the one who works the field.",
    spot: "On restroom doors 🚹."
  },
  {
    kanji: "本", pic: "📕",
    on: ["ホン"], kun: ["もと"], en: ["book", "origin"], es: ["libro", "origen"],
    onEx:  { jp: "としょかんで本を読みます。", word: "本", read: "ほん", en: "I read a book at the library.", es: "Leo un libro en la biblioteca.", ruby: { "読": "よ" } },
    kunEx: { jp: "木の本で待っています。", word: "本", read: "もと", en: "I'm waiting at the foot of the tree.", es: "Espero al pie del árbol.", ruby: { "木": "き", "待": "ま" } },
    etym: "A tree (木) with a stroke marking its base — the root, the origin. Books came later, as “the source” of knowledge.",
    rel: ["木", "日", "体"],
    strokes: 5, grade: 1, jlpt: "N5",
    trivia: "A tree with a line at its root = ‘origin’. Also the counter for long thin things (本 of pens, bottles).",
    spot: "On books 📕 and in 日本 (Japan) itself."
  },
  {
    kanji: "上", pic: "🎈",
    on: ["ジョウ"], kun: ["うえ", "あがる"], en: ["up", "above"], es: ["arriba", "encima"],
    onEx:  { jp: "屋上から海が見えます。", word: "屋上", read: "おくじょう", en: "You can see the ocean from the rooftop.", es: "Se ve el mar desde la azotea.", ruby: { "海": "うみ", "見": "み" } },
    kunEx: { jp: "つくえの上にねこがいます。", word: "上", read: "うえ", en: "There's a cat on the desk.", es: "Hay un gato sobre el escritorio." },
    etym: "A short stroke above a baseline — literally the idea of “above.” Its twin, 下, points below.",
    rel: ["下", "中", "山"],
    strokes: 3, grade: 1, jlpt: "N5",
    trivia: "Its mirror-twin 下 means ‘down’. Also means ‘to board / go up’.",
    spot: "On elevators ⬆️ and up-escalators."
  },
  {
    kanji: "下", pic: "⬇️",
    on: ["ゲ"], kun: ["した", "さがる"], en: ["down", "below"], es: ["abajo", "debajo"],
    onEx:  { jp: "次の駅で下車します。", word: "下車", read: "げしゃ", en: "I get off at the next station.", es: "Me bajo en la próxima estación.", ruby: { "次": "つぎ", "駅": "えき" } },
    kunEx: { jp: "いすの下に本があります。", word: "下", read: "した", en: "There is a book under the chair.", es: "Hay un libro debajo de la silla.", ruby: { "本": "ほん" } },
    etym: "The mirror-image of 上 — a short stroke hanging below the baseline: the idea of “below.”",
    rel: ["上", "中", "小"],
    strokes: 3, grade: 1, jlpt: "N5",
    trivia: "Its twin 上 means ‘up’. As a verb 下がる means ‘to go down / drop’.",
    spot: "On elevators ⬇️ and down-escalators."
  },
  {
    kanji: "中", pic: "🎯",
    on: ["チュウ"], kun: ["なか"], en: ["middle", "inside"], es: ["centro", "dentro"],
    onEx:  { jp: "中学で英語を習います。", word: "中学", read: "ちゅうがく", en: "I learn English in middle school.", es: "Aprendo inglés en la secundaria.", ruby: { "英語": "えいご", "習": "なら" } },
    kunEx: { jp: "はこの中にねこがいます。", word: "中", read: "なか", en: "There is a cat inside the box.", es: "Hay un gato dentro de la caja." },
    etym: "A line piercing straight through the center of a box — dead center, the middle.",
    rel: ["上", "下", "口"],
    strokes: 4, grade: 1, jlpt: "N5",
    trivia: "中学 = middle school. 中 also names China: 中国 (Chūgoku), ‘the Middle Kingdom’.",
    spot: "On 中 (medium) sizes and 中央 (center) signs."
  },
  {
    kanji: "小", pic: "🐜",
    on: ["ショウ"], kun: ["ちいさい"], en: ["small", "little"], es: ["pequeño", "chico"],
    onEx:  { jp: "小学校に通っています。", word: "小学校", read: "しょうがっこう", en: "I attend elementary school.", es: "Voy a la escuela primaria.", ruby: { "通": "かよ" } },
    kunEx: { jp: "小さいねこがすきです。", word: "小さい", read: "ちいさい", en: "I like small cats.", es: "Me gustan los gatos pequeños." },
    etym: "Three tiny strokes — a little something split into even smaller bits.",
    rel: ["大", "中", "少"],
    strokes: 3, grade: 1, jlpt: "N5",
    trivia: "The opposite of 大 (big). 小学校 = elementary school (‘little-learn-school’).",
    spot: "On 小 (small) sizes 🍵."
  },
  {
    kanji: "口", pic: "👄",
    on: ["コウ"], kun: ["くち"], en: ["mouth"], es: ["boca"],
    onEx:  { jp: "この町は人口が多いです。", word: "人口", read: "じんこう", en: "This town has a large population.", es: "Este pueblo tiene una población grande.", ruby: { "町": "まち", "多": "おお" } },
    kunEx: { jp: "口を大きく開けてください。", word: "口", read: "くち", en: "Please open your mouth wide.", es: "Abre bien la boca, por favor.", ruby: { "大": "おお", "開": "あ" } },
    etym: "A pictograph of an open mouth — a simple square opening.",
    rel: ["人", "目", "中"],
    strokes: 3, grade: 1, jlpt: "N5",
    trivia: "人口 (jinkō) = ‘people-mouths’ = population. Also 入口 (entrance) and 出口 (exit).",
    spot: "On 入口 (entrance) and 出口 (exit) signs 🚪."
  },
  {
    kanji: "手", pic: "✋",
    on: ["シュ"], kun: ["て"], en: ["hand"], es: ["mano"],
    onEx:  { jp: "歌手になりたいです。", word: "歌手", read: "かしゅ", en: "I want to be a singer.", es: "Quiero ser cantante.", ruby: { "歌": "うた" } },
    kunEx: { jp: "手をあらいましょう。", word: "手", read: "て", en: "Let's wash our hands.", es: "Lavémonos las manos." },
    etym: "A pictograph of a hand — five fingers fanning out from the wrist.",
    rel: ["足", "口", "目"],
    strokes: 4, grade: 1, jlpt: "N5",
    trivia: "歌手 (kashu) = ‘song-hand’ = singer. 上手 = skilled, 下手 = unskilled.",
    spot: "In 切手 (postage stamp), literally ‘cut-hand’ 📮."
  },
  {
    kanji: "田", pic: "🌾",
    on: ["デン"], kun: ["た"], en: ["rice field", "paddy"], es: ["arrozal", "campo de arroz"],
    onEx:  { jp: "水田が広がっています。", word: "水田", read: "すいでん", en: "The rice paddies stretch out.", es: "Los arrozales se extienden.", ruby: { "広": "ひろ" } },
    kunEx: { jp: "田んぼで働きます。", word: "田", read: "た", en: "I work in the rice field.", es: "Trabajo en el arrozal.", ruby: { "働": "はたら" } },
    etym: "A rice paddy seen from above — a plot divided into four sections by its footpaths.",
    rel: ["男", "力", "町"],
    strokes: 5, grade: 1, jlpt: "N5",
    trivia: "Field (田) + strength (力) = 男 (man). Common in surnames: 田中 (Tanaka), 山田 (Yamada).",
    spot: "In surnames and across the countryside 🌾."
  },
  {
    kanji: "力", pic: "💪",
    on: ["リョク", "リキ"], kun: ["ちから"], en: ["power", "strength"], es: ["fuerza", "poder"],
    onEx:  { jp: "毎日、体力をつけます。", word: "体力", read: "たいりょく", en: "I build up my stamina every day.", es: "Gano resistencia cada día.", ruby: { "毎日": "まいにち" } },
    kunEx: { jp: "みんなで力を合わせましょう。", word: "力", read: "ちから", en: "Let's join our strength together.", es: "Unamos nuestras fuerzas.", ruby: { "合": "あ" } },
    etym: "A pictograph of a straining arm or a plow — the muscle of hard work.",
    rel: ["男", "田", "動"],
    strokes: 2, grade: 1, jlpt: "N5",
    trivia: "Just two strokes. 体力 (tairyoku) = physical strength; 電力 = electric power.",
    spot: "On 力 in words like 努力 (effort) 💪."
  },
  {
    kanji: "円", pic: "💴",
    on: ["エン"], kun: ["まるい"], en: ["yen", "round"], es: ["yen", "redondo"],
    onEx:  { jp: "この本は千円です。", word: "千円", read: "せんえん", en: "This book is 1000 yen.", es: "Este libro cuesta mil yenes.", ruby: { "本": "ほん" } },
    kunEx: { jp: "円いテーブルを買いました。", word: "円い", read: "まるい", en: "I bought a round table.", es: "Compré una mesa redonda.", ruby: { "買": "か" } },
    etym: "Once written 圓 — an enclosure that simplified to the rounded 円. It means ‘circle’ and names the yen.",
    rel: ["金", "本", "国"],
    strokes: 4, grade: 1, jlpt: "N5",
    trivia: "円 is the yen (¥) — and literally means ‘round’, like the old round coins.",
    spot: "On every price tag in Japan 💴."
  },
  {
    kanji: "年", pic: "📅",
    on: ["ネン"], kun: ["とし"], en: ["year"], es: ["año"],
    onEx:  { jp: "来年、日本へ行きます。", word: "来年", read: "らいねん", en: "I'll go to Japan next year.", es: "El próximo año iré a Japón.", ruby: { "日本": "にほん", "行": "い" } },
    kunEx: { jp: "父は年を取りました。", word: "年", read: "とし", en: "My father has grown older.", es: "Mi padre ha envejecido.", ruby: { "父": "ちち", "取": "と" } },
    etym: "Once a person carrying a bundle of harvested grain — one harvest marks one year.",
    rel: ["月", "日", "毎"],
    strokes: 6, grade: 1, jlpt: "N5",
    trivia: "来年 = next year, 去年 = last year, 今年 (kotoshi) = this year.",
    spot: "On calendars and New Year cards 🎍."
  },
  {
    kanji: "生", pic: "🌱",
    on: ["セイ"], kun: ["いきる", "なま"], en: ["life", "birth"], es: ["vida", "nacer"],
    onEx:  { jp: "先生はとてもやさしいです。", word: "先生", read: "せんせい", en: "The teacher is very kind.", es: "El profesor es muy amable." },
    kunEx: { jp: "強く生きたいです。", word: "生きる", read: "いきる", en: "I want to live strongly.", es: "Quiero vivir con fuerza.", ruby: { "強": "つよ" } },
    etym: "A young plant pushing up through the soil — the image of life sprouting.",
    rel: ["学", "本", "先"],
    strokes: 5, grade: 1, jlpt: "N5",
    trivia: "生 has tons of readings. 学生 = student, 先生 = teacher, 生ビール = draft (‘raw’) beer 🍺.",
    spot: "On 先生 (teacher) and 学生 (student)."
  },
  {
    kanji: "白", pic: "🤍",
    on: ["ハク", "ビャク"], kun: ["しろ"], en: ["white"], es: ["blanco"],
    onEx:  { jp: "白紙にかきます。", word: "白紙", read: "はくし", en: "I write on blank paper.", es: "Escribo en papel en blanco.", ruby: { "紙": "かみ" } },
    kunEx: { jp: "白いねこがすきです。", word: "白い", read: "しろい", en: "I like white cats.", es: "Me gustan los gatos blancos." },
    etym: "A pictograph often linked to an acorn or a candle flame — the pale, bright color white.",
    rel: ["黒", "百", "日"],
    strokes: 5, grade: 1, jlpt: "N5",
    trivia: "面白い (omoshiroi), literally ‘face-white’, means ‘interesting / funny’!",
    spot: "On 白 (white) and in 白鳥 (swan) 🦢."
  },
  {
    kanji: "空", pic: "☁️",
    on: ["クウ"], kun: ["そら", "あく"], en: ["sky", "empty"], es: ["cielo", "vacío"],
    onEx:  { jp: "明日、空港へ行きます。", word: "空港", read: "くうこう", en: "I'm going to the airport tomorrow.", es: "Mañana voy al aeropuerto.", ruby: { "明日": "あした", "行": "い" } },
    kunEx: { jp: "空が青いです。", word: "空", read: "そら", en: "The sky is blue.", es: "El cielo está azul.", ruby: { "青": "あお" } },
    etym: "A hole (穴) shaped by craft — an open, empty space; by extension, the empty sky.",
    rel: ["天", "雨", "青"],
    strokes: 8, grade: 1, jlpt: "N5",
    trivia: "空 means both ‘sky’ and ‘empty’. 空港 (airport) = ‘empty-harbor’; 空手 (karate) = ‘empty hand’.",
    spot: "At the 空港 (airport) ✈️."
  },
  {
    kanji: "雨", pic: "☔",
    on: ["ウ"], kun: ["あめ"], en: ["rain"], es: ["lluvia"],
    onEx:  { jp: "雨天でも行きます。", word: "雨天", read: "うてん", en: "I'll go even in rainy weather.", es: "Iré aunque llueva.", ruby: { "行": "い" } },
    kunEx: { jp: "そとは雨がふっています。", word: "雨", read: "あめ", en: "It is raining outside.", es: "Está lloviendo afuera." },
    etym: "Raindrops falling from a cloud under the sky — four drops inside a frame.",
    rel: ["水", "空", "雪"],
    strokes: 8, grade: 1, jlpt: "N5",
    trivia: "The ‘rain’ radical tops weather kanji: 雪 (snow), 雲 (cloud), 電 (lightning/electricity).",
    spot: "In weather forecasts ☔ and 梅雨 (rainy season) news."
  },
  {
    kanji: "花", pic: "🌸",
    on: ["カ"], kun: ["はな"], en: ["flower"], es: ["flor"],
    onEx:  { jp: "開花が楽しみです。", word: "開花", read: "かいか", en: "I look forward to the blossoming.", es: "Espero con ilusión la floración.", ruby: { "開": "ひら", "楽": "たの" } },
    kunEx: { jp: "きれいな花ですね。", word: "花", read: "はな", en: "What a pretty flower.", es: "Qué flor tan bonita." },
    etym: "Grass (艹) over 化 (change) — the part of a plant that transforms into bloom.",
    rel: ["草", "木", "華"],
    strokes: 7, grade: 1, jlpt: "N5",
    trivia: "花見 (hanami) = flower-viewing, Japan’s cherry-blossom picnic 🌸.",
    spot: "At 花見 (cherry-blossom viewing) and flower shops."
  }
];
