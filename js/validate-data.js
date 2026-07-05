/*
 * validate-data.js — sanity checks for data.js.
 * Run with:  node js/validate-data.js
 *
 * Structural guards only. Brick faces do NOT need to be globally unique anymore
 * (impossible at ~100 kanji — many share readings); the game enforces
 * uniqueness PER BOARD at build time (see buildTiles/pickUniqueFace in game.js).
 * We still report the worst global collisions as a heads-up. The game never
 * loads this file; it's a dev-time guard.
 */
const fs = require("fs");
const path = require("path");

const src = fs.readFileSync(path.join(__dirname, "data.js"), "utf8");
// data.js defines a top-level `const KANJI = [...]`; evaluate and read it back.
const KANJI = eval(src + "\n; KANJI;");

let problems = 0;

const REQUIRED = ["kanji", "pic", "on", "kun", "en", "es", "onEx", "kunEx", "etym", "rel", "strokes", "grade", "jlpt", "trivia", "spot"];

KANJI.forEach((e) => {
  REQUIRED.forEach((f) => {
    if (e[f] === undefined) { console.error(`MISSING FIELD ${e.kanji}.${f}`); problems++; }
  });
  // on/kun may be empty (some kanji lack a common one); meaning langs required.
  ["on", "kun", "en", "es", "fr"].forEach((f) => {
    if (!Array.isArray(e[f])) { console.error(`${e.kanji}.${f} must be an array`); problems++; }
  });
  ["en", "es", "fr"].forEach((f) => {
    if (!e[f] || e[f].length === 0) { console.error(`${e.kanji}.${f} must be a non-empty array`); problems++; }
  });
  ["es", "fr"].forEach((lang) => {
    if (e[lang] && e.en && e[lang].length !== e.en.length) {
      console.error(`en/${lang} length mismatch on ${e.kanji}: en=${e.en.length} ${lang}=${e[lang].length}`);
      problems++;
    }
  });
  // Each example's `word` must appear verbatim in its `jp` sentence (else the
  // game can't insert the （reading）), must contain the kanji, and every ruby
  // key must appear in the sentence too (else the furigana silently no-ops).
  [["onEx", e.onEx], ["kunEx", e.kunEx]].forEach(([f, ex]) => {
    if (!ex) return;
    ["jp", "word", "read", "en", "es", "fr"].forEach((k) => {
      if (!ex[k]) { console.error(`${e.kanji}.${f}: missing "${k}"`); problems++; }
    });
    if (ex.jp && ex.word && !ex.jp.includes(ex.word)) {
      console.error(`${e.kanji}.${f}: word "${ex.word}" not in sentence "${ex.jp}" (reading would be dropped)`);
      problems++;
    }
    if (ex.word && !ex.word.includes(e.kanji)) {
      console.error(`${e.kanji}.${f}: word "${ex.word}" does not contain the kanji ${e.kanji}`);
      problems++;
    }
    if (ex.ruby) Object.keys(ex.ruby).forEach((w) => {
      if (!ex.jp.includes(w)) { console.error(`${e.kanji}.${f}: ruby word "${w}" not in sentence (no-op)`); problems++; }
    });
  });
});

// duplicate kanji characters?
const chars = KANJI.map((e) => e.kanji);
chars.forEach((c, i) => {
  if (chars.indexOf(c) !== i) { console.error(`DUPLICATE KANJI ${c}`); problems++; }
});

// Heads-up: which readings are shared by the most kanji (a board can still be
// built as long as no single face is on >(pool - boardSize) kanji).
const faceOwners = {};
KANJI.forEach((e) => ["on", "kun"].forEach((f) => (e[f] || []).forEach((v) => {
  (faceOwners[v] = faceOwners[v] || new Set()).add(e.kanji);
})));
const worst = Object.entries(faceOwners).map(([v, s]) => [v, s.size]).filter(([, n]) => n >= 4).sort((a, b) => b[1] - a[1]);
if (worst.length) console.log("Most-shared readings (fine — enforced per board):", worst.slice(0, 8).map(([v, n]) => `${v}×${n}`).join(", "));

console.log(`\n${KANJI.length} kanji checked.`);
if (problems === 0) {
  console.log("✅ ALL GOOD — structure valid.");
  process.exit(0);
} else {
  console.error(`❌ ${problems} problem(s) found.`);
  process.exit(1);
}
