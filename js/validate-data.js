/*
 * validate-data.js — sanity checks for data.js.
 * Run with:  node js/validate-data.js
 *
 * Ensures no two kanji share a brick face (any string in on/kun/en/es must be
 * unique across the whole file), plus a few structural checks. The game never
 * loads this file; it's a dev-time guard.
 */
const fs = require("fs");
const path = require("path");

const src = fs.readFileSync(path.join(__dirname, "data.js"), "utf8");
// data.js defines a top-level `const KANJI = [...]`; evaluate and read it back.
const KANJI = eval(src + "\n; KANJI;");

let problems = 0;

// Faces that can appear together must be globally unique. on+kun always show;
// en (English mode) and es (Spanish mode) are alternates — they may overlap
// with EACH OTHER (e.g. 円 is "yen" in both), but each must be unique among
// {on ∪ kun ∪ that-language}. So we validate two face sets separately.
function checkSet(label, fields) {
  const seen = new Map(); // face -> "kanji.field"
  KANJI.forEach((e) => {
    fields.forEach((f) => (e[f] || []).forEach((v) => {
      if (seen.has(v)) {
        console.error(`[${label}] DUPLICATE FACE "${v}"  ${seen.get(v)}  <->  ${e.kanji}.${f}`);
        problems++;
      } else {
        seen.set(v, `${e.kanji}.${f}`);
      }
    }));
  });
  return seen.size;
}

const REQUIRED = ["kanji", "on", "kun", "en", "es", "onEx", "kunEx", "etym", "rel", "strokes"];

KANJI.forEach((e) => {
  REQUIRED.forEach((f) => {
    if (e[f] === undefined) { console.error(`MISSING FIELD ${e.kanji}.${f}`); problems++; }
  });
  if (e.es && e.en && e.es.length !== e.en.length) {
    console.error(`en/es length mismatch on ${e.kanji}: en=${e.en.length} es=${e.es.length}`);
    problems++;
  }
});

const nEn = checkSet("English mode", ["on", "kun", "en"]);
const nEs = checkSet("Spanish mode", ["on", "kun", "es"]);
const seen = { size: nEn + " (en) / " + nEs + " (es)" };

// duplicate kanji characters?
const chars = KANJI.map((e) => e.kanji);
chars.forEach((c, i) => {
  if (chars.indexOf(c) !== i) { console.error(`DUPLICATE KANJI ${c}`); problems++; }
});

console.log(`\n${KANJI.length} kanji, ${seen.size} distinct faces checked.`);
if (problems === 0) {
  console.log("✅ ALL GOOD — every brick face is unique.");
  process.exit(0);
} else {
  console.error(`❌ ${problems} problem(s) found.`);
  process.exit(1);
}
