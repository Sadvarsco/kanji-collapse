/*
 * KANJI COLLAPSE — kawaii kanji matching game.
 *
 * Loop:
 *   - Pick a KANJI brick first (others are grayed until you do).
 *   - Pick its matching readings/meaning. Each pick glides down into the
 *     "review tray" and lines up so you can read the whole word together.
 *   - When the set is complete it lifts away one brick at a time with an
 *     ascending xylophone run, and the word joins your COLLECTION — a card
 *     with example sentences (on-yomi AND kun-yomi usage), expandable to
 *     show etymology and related kanji.
 *
 * Difficulty:
 *   easy   — fully guided. After the kanji you must find the on-yomi, then
 *            kun-yomi, then English, one step at a time (everything else is
 *            grayed). Wrong picks just mark that brick; after 3 wrongs OR
 *            30s stuck on a step, the game auto-hints (free, but forfeits
 *            the first-try star).
 *   normal — a wrong pick marks that brick (no reset); once you match a
 *            category, the rest of that category grays out.
 *   hard   — reset on wrong, no gray-out guidance, no hint button, AND
 *            bricks may show any of a kanji's readings/meanings (月 as ガツ
 *            or "month").
 *
 * Learning:
 *   Each kanji has an SRS score (see srs.js). First-try-clean clears bump it
 *   up; wrong picks bump it down. Weak words appear more often. The manual
 *   hint costs 5 points; both manual and auto hints forfeit the first-try
 *   star for that word.
 */

/* ------------------------------------------------------------------ *
 * Config
 * ------------------------------------------------------------------ */

const TYPES = {
  kanji: { label: "Kanji",    cls: "t-kanji" },
  on:    { label: "On-yomi",  cls: "t-on" },
  kun:   { label: "Kun-yomi", cls: "t-kun" },
  en:    { label: "English",  cls: "t-en" }
};

// Plain-language descriptions shown on hover in the "Now matching" panel.
const TYPE_HELP = {
  kanji: "The character itself",
  on:    "On-yomi — the Chinese-derived reading",
  kun:   "Kun-yomi — the native Japanese reading",
  en:    "The meaning in your language"
};

/* ------------------------------------------------------------------ *
 * Language of the "meaning" brick.
 *   en / es — the meaning brick shows English or Spanish.
 *   ja      — 日本語 (immersion): NO meaning brick at all; example
 *             sentences drop their translation too. Just kanji + readings.
 * The internal brick TYPE stays "en" (its color); only the value/label change.
 * ------------------------------------------------------------------ */
const MEANING_LANGS = {
  en: { key: "en", label: "English" },
  es: { key: "es", label: "Español" },
  ja: { key: null, label: "日本語" }
};
function langConf() { return MEANING_LANGS[settings.lang] || MEANING_LANGS.en; }
function hasMeaning() { return langConf().key !== null; }
function meaningKey() { return langConf().key || "en"; }

// Push the current language into the shared TYPES/TYPE_HELP so bricks, the
// "Now matching" list, and aria labels all read in the chosen language.
function applyLang() {
  const label = langConf().label;
  TYPES.en.label = hasMeaning() ? label : "Meaning";
  TYPE_HELP.en = "Meaning (" + label + ")";
}

// Board columns are responsive: a wide grid on desktop, a taller/narrower
// (portrait) grid on phones so each brick — and its kana — is big enough to read.
const COLS_DESKTOP = 8;
const COLS_MOBILE = 4;
const MOBILE_MAX = 600;
function pickCols() {
  return (typeof window !== "undefined" && window.innerWidth <= MOBILE_MAX)
    ? COLS_MOBILE : COLS_DESKTOP;
}
const CLEAR_POINTS = 20;
const FIRST_TRY_BONUS = 15;
const HINT_COST = 5;
const PENALTY = { easy: 5, normal: 10, hard: 18 };
// Guided easy-mode sequence. In 日本語 mode there's no meaning brick.
function stepOrder() { return hasMeaning() ? ["on", "kun", "en"] : ["on", "kun"]; }
const AUTO_HINT_WRONGS = 3;
// var (not const) so tests can shorten the watchdog via window.AUTO_HINT_MS
var AUTO_HINT_MS = 30000;
const LIFT_STAGGER = 190; // ms between bricks lifting away

const SETTINGS_KEY = "kc.settings.v1";
const ONBOARD_KEY = "kc.onboard.v1";

/* ------------------------------------------------------------------ *
 * State
 * ------------------------------------------------------------------ */

const state = {
  tiles: [],           // { id, groupId, type, value, kanji, col, row, el, tstate, wrong }
  rows: 0,
  cols: 8,
  mode: "normal",
  activeGroup: null,
  staged: [],          // tiles picked for the current set, in pick order
  hadWrong: false,     // a wrong pick happened during the current set
  hintUsed: false,     // a hint was used during the current set
  step: null,          // easy mode: which type the player must find next
  wrongStreak: 0,      // easy mode: wrongs since the last right answer
  collection: [],      // entries cleared this session (newest first)
  tainted: new Set(),  // kanji missed at least once this board (no first-try star)
  totalWrong: 0,       // wrong picks this board (drives the "want it easier?" nudge)
  offeredEasier: false,// have we shown the difficulty nudge this board?
  score: 0,
  groupsTotal: 0,
  groupsCleared: 0,
  busy: false
};

const settings = {
  mode: "normal",
  size: 8,
  lang: "en",          // meaning-brick language: en | es | ja (ja = no meaning)
  sound: true,
  furigana: true,
  labels: { kanji: true, on: true, kun: true, en: true }
};

let boardEl, shelfEl, els;
let stepTimerId = null;

/* ------------------------------------------------------------------ *
 * Small helpers
 * ------------------------------------------------------------------ */

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function entryOf(kanji) { return KANJI.find((e) => e.kanji === kanji); }

// Readings/meanings are arrays; easy/normal use the primary [0], hard mode
// may surface any of them (multiple on-yomi, kun-yomi, meanings).
function pickFace(list, hard) {
  if (!Array.isArray(list)) list = list ? [list] : [];
  if (list.length === 0) return "";
  return hard ? list[Math.floor(Math.random() * list.length)] : list[0];
}

// "ジョ・ニョ" -> "ジョ・ニョ (jo・nyo)" — each reading gets its phonetic
// (romaji) in italics, so a non-Japanese reader can pronounce it.
function withRomaji(list) {
  const kana = list.join("・");
  const rom = list.map((r) => phonetic(r)).join("・");
  return kana + ' <i class="rom">(' + rom + ")</i>";
}

function jishoURL(k) { return "https://jisho.org/search/" + encodeURIComponent(k + " #kanji"); }
function wiktURL(k) { return "https://en.wiktionary.org/wiki/" + encodeURIComponent(k) + "#Japanese"; }

function wallMatches(groupId) {
  return state.tiles.filter(
    (t) => t.groupId === groupId && t.type !== "kanji" && t.tstate === "wall"
  );
}
function allMatches(groupId) {
  return state.tiles.filter(
    (t) => t.groupId === groupId && t.type !== "kanji" && t.tstate !== "cleared"
  );
}

/* ------------------------------------------------------------------ *
 * Settings persistence
 * ------------------------------------------------------------------ */

function loadSettings() {
  try {
    const s = JSON.parse(localStorage.getItem(SETTINGS_KEY));
    if (s) {
      settings.mode = s.mode || settings.mode;
      settings.size = s.size || settings.size;
      if (MEANING_LANGS[s.lang]) settings.lang = s.lang;
      settings.sound = s.sound !== undefined ? s.sound : settings.sound;
      settings.furigana = s.furigana !== undefined ? s.furigana : settings.furigana;
      if (s.labels) Object.assign(settings.labels, s.labels);
    }
  } catch (e) {}
}
function saveSettings() {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); } catch (e) {}
}

function applyLabelClasses() {
  ["kanji", "on", "kun", "en"].forEach((t) => {
    document.body.classList.toggle("hide-lbl-" + t, !settings.labels[t]);
  });
}

/* ------------------------------------------------------------------ *
 * Build & lay out the wall
 * ------------------------------------------------------------------ */

function buildTiles(count, hard) {
  // Avoid characters shown in recent rounds (esp. well-known / high-SRS ones).
  const chosen = SRS.sample(KANJI, count, { recent: SRS.recentSet() });
  SRS.noteShown(chosen.map((e) => e.kanji));

  // 日本語 mode drops the meaning brick entirely.
  const faceTypes = hasMeaning() ? ["kanji", "on", "kun", "en"] : ["kanji", "on", "kun"];
  const tiles = [];
  let id = 0;
  chosen.forEach((entry, groupId) => {
    faceTypes.forEach((type) => {
      let value;
      if (type === "kanji") value = entry.kanji;
      else if (type === "en") value = pickFace(entry[meaningKey()], hard); // localized meaning
      else value = pickFace(entry[type], hard);
      // Hard mode: on-yomi shown in hiragana so it can't be distinguished from
      // kun-yomi by script (the color coding is removed too — see CSS).
      if (type === "on" && hard) value = kataToHira(value);
      if (!value) return;
      tiles.push({
        id: id++, groupId, type, value,
        kanji: entry.kanji, col: 0, row: 0, el: null,
        tstate: "wall", wrong: false
      });
    });
  });
  return { tiles, groupsTotal: chosen.length };
}

function layout(tiles) {
  const rows = Math.ceil(tiles.length / state.cols);
  shuffle(tiles).forEach((tile, i) => {
    const fromBottom = Math.floor(i / state.cols);
    tile.col = i % state.cols;
    tile.row = rows - 1 - fromBottom;
  });
  return rows;
}

// Shrink a face's font until the text genuinely fits its brick — length
// thresholds don't cut it because wide glyphs (w, m) overflow early.
function fitFace(face) {
  const box = face.parentElement;
  if (!box) return;
  face.style.fontSize = "";
  const max = box.clientWidth - 8;
  if (max <= 0) return;
  let size = parseFloat(getComputedStyle(face).fontSize);
  let guard = 14;
  while (face.scrollWidth > max && size > 7 && guard--) {
    size *= 0.88;
    face.style.fontSize = size.toFixed(1) + "px";
  }
}

function fitAllFaces() {
  state.tiles.forEach((t) => {
    if (t.el && t.tstate !== "cleared") fitFace(t.el.querySelector(".face"));
  });
}

function makeTileEl(tile) {
  const el = document.createElement("button");
  el.type = "button";
  el.className = "tile " + TYPES[tile.type].cls;
  el.setAttribute("aria-label", TYPES[tile.type].label + ": " + tile.value);

  const brick = document.createElement("span");
  brick.className = "brick";

  // Easy mode shows a meaning-image behind the kanji (CSS gates visibility).
  if (tile.type === "kanji") {
    const entry = entryOf(tile.kanji);
    if (entry && entry.pic) {
      const pic = document.createElement("span");
      pic.className = "pic";
      pic.setAttribute("aria-hidden", "true");
      pic.textContent = entry.pic;
      brick.appendChild(pic);
    }
  }

  const face = document.createElement("span");
  face.className = "face";
  face.textContent = tile.value;

  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = TYPES[tile.type].label;

  brick.appendChild(face);
  brick.appendChild(tag);
  el.appendChild(brick);
  el.addEventListener("click", () => onTileClick(tile));
  tile.el = el;
  return el;
}

function positionTile(tile) {
  if (tile.tstate !== "wall") return;
  const el = tile.el;
  el.style.transform = "";
  el.style.left = (tile.col * 100 / state.cols) + "%";
  el.style.top = (tile.row * 100 / state.rows) + "%";
  el.style.width = (100 / state.cols) + "%";
  el.style.height = (100 / state.rows) + "%";
}

function render() {
  boardEl.style.setProperty("--rows", state.rows);
  boardEl.style.setProperty("--cols", state.cols);
  boardEl.innerHTML = "";
  shelfEl.innerHTML = "";
  state.tiles.forEach((tile) => {
    boardEl.appendChild(makeTileEl(tile));
    positionTile(tile);
  });
  requestAnimationFrame(fitAllFaces);
}

/* ------------------------------------------------------------------ *
 * FLIP reparenting (board <-> review tray)
 * ------------------------------------------------------------------ */

function reparentFLIP(el, newParent, mutate) {
  const first = el.getBoundingClientRect();
  mutate();
  newParent.appendChild(el);
  const last = el.getBoundingClientRect();
  const dx = first.left - last.left;
  const dy = first.top - last.top;
  const sx = last.width ? first.width / last.width : 1;
  const sy = last.height ? first.height / last.height : 1;
  el.style.transition = "none";
  el.style.transformOrigin = "top left";
  el.style.transform = "translate(" + dx + "px," + dy + "px) scale(" + sx + "," + sy + ")";
  void el.offsetWidth; // reflow
  el.style.transition = "transform .38s cubic-bezier(.2,.85,.3,1)";
  el.style.transform = "";
}

function stageTile(tile) {
  tile.tstate = "staged";
  state.staged.push(tile);
  reparentFLIP(tile.el, shelfEl, () => {
    tile.el.classList.add("shelved");
    tile.el.classList.remove("hint-pulse");
    tile.el.style.left = tile.el.style.top = "";
    tile.el.style.width = tile.el.style.height = "";
  });
  fitFace(tile.el.querySelector(".face")); // tray bricks are smaller
}

function unstageAll() {
  // Return every staged tile to its (still-empty) wall cell.
  state.staged.forEach((tile) => {
    reparentFLIP(tile.el, boardEl, () => {
      tile.el.classList.remove("shelved");
      tile.tstate = "wall";
      tile.el.style.left = (tile.col * 100 / state.cols) + "%";
      tile.el.style.top = (tile.row * 100 / state.rows) + "%";
      tile.el.style.width = (100 / state.cols) + "%";
      tile.el.style.height = (100 / state.rows) + "%";
    });
    fitFace(tile.el.querySelector(".face"));
  });
  state.staged = [];
}

/* ------------------------------------------------------------------ *
 * Easy-mode guided steps: on-yomi -> kun-yomi -> English, with an
 * automatic hint after 3 wrongs or 30 seconds without a right answer.
 * ------------------------------------------------------------------ */

function clearStepTimer() {
  if (stepTimerId) { clearTimeout(stepTimerId); stepTimerId = null; }
}

function armStepTimer() {
  clearStepTimer();
  if (state.mode === "easy" && state.step && state.activeGroup !== null) {
    stepTimerId = setTimeout(autoHint, AUTO_HINT_MS);
  }
}

// Advance to the next type the player must find (or null when done).
function setNextStep() {
  const rem = wallMatches(state.activeGroup);
  state.step = stepOrder().find((t) => rem.some((m) => m.type === t)) || null;
  state.wrongStreak = 0;
  armStepTimer();
  applyEasyHint();
}

// Free hint the game gives on its own — pulses the right brick. No point
// cost, but it forfeits the first-try star (you were shown the answer).
function autoHint() {
  clearStepTimer();
  if (state.busy || state.activeGroup === null) return;
  const rem = wallMatches(state.activeGroup).filter(
    (t) => !t.wrong && (state.mode !== "easy" || t.type === state.step)
  );
  if (!rem.length) return;
  const target = rem[0];
  state.hintUsed = true;
  state.wrongStreak = 0;
  KanjiAudio.hint();
  target.el.classList.remove("hint-pulse");
  void target.el.offsetWidth;
  target.el.classList.add("hint-pulse");
  setTimeout(() => target.el && target.el.classList.remove("hint-pulse"), 2200);
  flashHint("Here's a little help! ✨ (no first-try ⭐)");
  armStepTimer();
}

/* ------------------------------------------------------------------ *
 * Easy-mode ambient nudge: the correct brick for the current step gives a
 * very subtle periodic wiggle. The stronger you know a kanji (higher SRS),
 * the fainter the wiggle — weak kanji shake a little more. It's a passive
 * guide, NOT a hint: it never forfeits the first-try star.
 * ------------------------------------------------------------------ */

function clearEasyHint() {
  state.tiles.forEach((t) => { if (t.el) t.el.classList.remove("easy-hint"); });
}

function applyEasyHint() {
  clearEasyHint();
  if (state.mode !== "easy" || state.activeGroup === null || !state.step) return;
  const target = wallMatches(state.activeGroup).find(
    (t) => t.type === state.step && !t.wrong
  );
  if (!target || !target.el) return;
  // SRS 0..MAX -> amplitude ~2.6px (unknown) down to ~0.5px (mastered).
  const score = SRS.get(target.kanji);
  const amp = Math.max(0.5, 2.6 - score * (2.1 / SRS.MAX));
  target.el.style.setProperty("--shk", amp.toFixed(2) + "px");
  target.el.classList.add("easy-hint");
}

/* ------------------------------------------------------------------ *
 * Click handling
 * ------------------------------------------------------------------ */

// Wall tiles still belonging to a group — INCLUDING the kanji. In hard mode
// the kanji is collected like any other tile, so completion is "none left".
function wallGroupCount(groupId) {
  return state.tiles.filter((t) => t.groupId === groupId && t.tstate === "wall").length;
}

function onTileClick(tile) {
  if (state.busy) return;

  // Clicking a brick already in the review tray cancels the current word,
  // sending everything back so you can start a different kanji.
  if (tile.tstate === "staged") {
    KanjiAudio.click();
    endSet();
    flashHint("Cleared — pick a kanji to start again. 🔄");
    return;
  }

  if (tile.tstate !== "wall" || tile.wrong) return;

  const anyOrder = state.mode === "hard"; // hard: pick tiles in any order

  // Nothing selected yet — this tile starts the word.
  if (state.activeGroup === null) {
    if (!anyOrder && tile.type !== "kanji") {
      flashHint("Pick a Kanji brick first! 🐾");
      return;
    }
    beginSet(tile);
    return;
  }

  // A word is in progress.
  if (tile.groupId === state.activeGroup) {
    KanjiAudio.click();
    stageTile(tile);
    if (wallGroupCount(state.activeGroup) === 0) {
      updateGrayout();
      updateTarget();
      completeSet();
      return;
    }
    if (state.mode === "easy") setNextStep();
    updateGrayout();
    updateTarget();
    return;
  }

  handleWrong(tile);
}

// Start a word from `tile` (a kanji in easy/normal; ANY tile in hard).
function beginSet(tile) {
  state.activeGroup = tile.groupId;
  state.hadWrong = false;
  state.hintUsed = false;
  state.staged = [];
  KanjiAudio.click();
  stageTile(tile);
  if (wallGroupCount(state.activeGroup) === 0) { // lone tile clears on its own
    updateGrayout();
    updateTarget();
    completeSet();
    return;
  }
  if (state.mode === "easy") setNextStep();
  updateGrayout();
  updateTarget();
}

function handleWrong(tile) {
  KanjiAudio.wrong();
  const kanji = state.tiles.find((t) => t.groupId === state.activeGroup).kanji;
  // One SRS penalty + taint per word per board (so a hard-mode reset can't
  // later masquerade as a clean first-try clear).
  if (!state.tainted.has(kanji)) SRS.bump(kanji, -1);
  state.tainted.add(kanji);
  state.hadWrong = true;
  state.totalWrong++;

  // shake feedback
  tile.el.classList.remove("shake");
  void tile.el.offsetWidth;
  tile.el.classList.add("shake");
  setTimeout(() => tile.el && tile.el.classList.remove("shake"), 400);

  if (state.mode !== "hard") {
    // Easy/Normal: don't reset — mark this wrong brick out for the set.
    tile.wrong = true;
    tile.el.classList.add("wrong");
    state.score = Math.max(0, state.score - PENALTY[state.mode]);
    flashHint("Not a match — try another. 💦");
    updateHUD();
    if (state.mode === "easy" && ++state.wrongStreak >= AUTO_HINT_WRONGS) {
      autoHint();
    }
  } else {
    state.score = Math.max(0, state.score - PENALTY.hard);
    flashHint("Oops! Selection reset (−" + PENALTY.hard + ").");
    endSet(); // returns staged tiles, clears state
  }

  maybeOfferEasier();
}

// After a lot of misses, gently offer an easier setup (once per board).
const WRONG_NUDGE_AT = 6;
function maybeOfferEasier() {
  if (state.offeredEasier || state.totalWrong < WRONG_NUDGE_AT) return;
  const canEasier = state.mode !== "easy";
  const canFewer = settings.size > 6;
  if (!canEasier && !canFewer) return;
  state.offeredEasier = true;
  showNudge(canEasier, canFewer);
}

/* ------------------------------------------------------------------ *
 * Hint
 * ------------------------------------------------------------------ */

function useHint() {
  if (state.busy) return;
  let target = null;
  if (state.activeGroup === null) {
    // Point at a kanji worth starting with (weakest SRS first).
    const kanjis = state.tiles.filter((t) => t.tstate === "wall" && t.type === "kanji");
    if (!kanjis.length) return;
    kanjis.sort((a, b) => SRS.get(a.kanji) - SRS.get(b.kanji));
    target = kanjis[0];
  } else {
    const rem = wallMatches(state.activeGroup).filter(
      (t) => !t.wrong && (state.mode !== "easy" || t.type === state.step)
    );
    if (!rem.length) return;
    target = rem[Math.floor(Math.random() * rem.length)];
  }
  state.score = Math.max(0, state.score - HINT_COST);
  state.hintUsed = true; // forfeits the first-try star for this set
  state.wrongStreak = 0;
  armStepTimer(); // reset the easy-mode watchdog after a manual hint
  KanjiAudio.hint();
  target.el.classList.remove("hint-pulse");
  void target.el.offsetWidth;
  target.el.classList.add("hint-pulse");
  setTimeout(() => target.el && target.el.classList.remove("hint-pulse"), 2200);
  flashHint("Hint! −" + HINT_COST + " (no first-try ⭐ this word)");
  updateHUD();
}

/* ------------------------------------------------------------------ *
 * Completing / ending a set
 * ------------------------------------------------------------------ */

function completeSet() {
  clearStepTimer();
  state.busy = true;
  const group = state.staged.slice();
  const kanji = group[0].kanji;
  // Tainted (ever missed) or hinted words never count as a first-try clear.
  const clean = !state.hintUsed && !state.tainted.has(kanji);

  let gained = group.length * CLEAR_POINTS;
  if (clean) {
    gained += FIRST_TRY_BONUS;
    SRS.bump(kanji, +1); // clean first-try clear = you know it a bit better
  }
  state.score += gained;
  state.groupsCleared++;
  flashHint("✓ " + kanji + "  +" + gained + (clean ? "  ⭐first try!" : ""));

  // Each brick lifts in turn with an ascending xylophone ding
  // (ding·ding·ding·ding…), then a final chord caps it off as they vanish.
  group.forEach((tile, i) => {
    setTimeout(() => {
      if (!tile.el) return;
      tile.el.style.transition = "transform .5s cubic-bezier(.3,1.4,.5,1), opacity .5s ease";
      tile.el.style.transform = "translateY(-165%) scale(.62)";
      tile.el.style.opacity = "0";
      KanjiAudio.ding(i);
    }, i * LIFT_STAGGER);
  });
  const chordAt = (group.length - 1) * LIFT_STAGGER + 300; // a beat after the last ding
  setTimeout(() => KanjiAudio.chord(), chordAt);

  const done = chordAt + 520;
  setTimeout(() => {
    group.forEach((tile) => {
      tile.tstate = "cleared";
      if (tile.el) tile.el.remove();
    });
    state.tiles = state.tiles.filter((t) => t.tstate !== "cleared");
    addToCollection(kanji);
    resetSetState();
    applyGravity();
    state.tiles.forEach(positionTile);
    state.busy = false;
    updateGrayout();
    updateTarget();
    updateHUD();
    renderProgress();
    if (state.tiles.length === 0) win();
  }, done);
}

// End a set WITHOUT clearing (used on wrong-reset in normal/hard).
function endSet() {
  unstageAll();
  resetSetState();
  updateGrayout();
  updateTarget();
}

function resetSetState() {
  clearStepTimer();
  clearEasyHint();
  state.activeGroup = null;
  state.staged = [];
  state.hadWrong = false;
  state.hintUsed = false;
  state.step = null;
  state.wrongStreak = 0;
  // clear any easy-mode "wrong" marks so those bricks work again next set
  state.tiles.forEach((t) => {
    if (t.wrong) { t.wrong = false; t.el && t.el.classList.remove("wrong"); }
  });
}

/* ------------------------------------------------------------------ *
 * Gravity
 * ------------------------------------------------------------------ */

function applyGravity() {
  for (let c = 0; c < state.cols; c++) {
    const colTiles = state.tiles.filter((t) => t.col === c).sort((a, b) => a.row - b.row);
    let row = state.rows - 1;
    for (let i = colTiles.length - 1; i >= 0; i--) colTiles[i].row = row--;
  }
  const used = [];
  for (let c = 0; c < state.cols; c++) if (state.tiles.some((t) => t.col === c)) used.push(c);
  const remap = {};
  used.forEach((c, i) => (remap[c] = i));
  state.tiles.forEach((t) => (t.col = remap[t.col]));
}

/* ------------------------------------------------------------------ *
 * Gray-out guidance
 * ------------------------------------------------------------------ */

function updateGrayout() {
  const guide = state.mode !== "hard"; // hard mode = no visual guidance
  // Normal mode: once a category is matched (say, the kun-yomi), every
  // other brick of that category grays out too — the hunt narrows.
  const gotTypes = new Set(
    state.mode === "normal"
      ? state.staged.filter((t) => t.type !== "kanji").map((t) => t.type)
      : []
  );
  state.tiles.forEach((tile) => {
    if (tile.tstate !== "wall" || !tile.el) return;
    let disabled = false;
    if (guide) {
      if (state.activeGroup === null) {
        disabled = tile.type !== "kanji";
      } else if (state.mode === "easy") {
        // Guided: only bricks of the current step type are live.
        disabled = tile.type !== state.step;
      } else {
        disabled = tile.type === "kanji" || gotTypes.has(tile.type);
      }
    }
    if (tile.wrong) disabled = true;
    tile.el.classList.toggle("disabled", disabled);
  });
}

/* ------------------------------------------------------------------ *
 * Collection — cleared words stay around as review cards
 * ------------------------------------------------------------------ */

function addToCollection(kanji) {
  if (!state.collection.includes(kanji)) state.collection.unshift(kanji);
  renderCollection();
}

// Sentence HTML: insert the reading after the example word, highlight every
// occurrence of the kanji character, then add furigana (<ruby>) over the
// OTHER kanji words in the sentence. The matched word's parenthesized
// reading is left untouched; the furigana toggle only hides/shows the <rt>.
function exampleHTML(entry, ex, typeCls, typeLabel) {
  if (!ex) return "";
  const withReading = ex.jp.replace(ex.word, ex.word + "（" + ex.read + "）");
  let highlighted = withReading.split(entry.kanji).join('<span class="hl">' + entry.kanji + "</span>");
  if (ex.ruby) {
    Object.keys(ex.ruby).forEach((w) => {
      highlighted = highlighted.split(w).join("<ruby>" + w + "<rt>" + ex.ruby[w] + "</rt></ruby>");
    });
  }
  // In 日本語 mode we show the sentence with no translation (immersion).
  const tr = hasMeaning() ? (ex[meaningKey()] || ex.en) : "";
  return '<div class="wc-ex">' +
    '<span class="dot ' + typeCls + '" title="' + typeLabel + '"></span>' +
    '<span class="wc-jp jp">' + highlighted + "</span>" +
    (tr ? '<span class="wc-en">' + tr + "</span>" : "") +
    "</div>";
}

function renderCollection() {
  if (state.collection.length === 0) {
    els.collection.innerHTML = '<p class="muted">Cleared words gather here so you can review them. 🍡</p>';
    return;
  }
  els.collection.innerHTML = state.collection.map((k) => {
    const e = entryOf(k);
    if (!e) return "";
    const rel = (e.rel || []).map((r) =>
      '<a class="rel-chip jp" href="' + jishoURL(r) + '" target="_blank" rel="noopener">' + r + "</a>"
    ).join("");
    return '<div class="wordcard">' +
      '<div class="wc-head">' +
        '<span class="wc-k jp">' + e.kanji + "</span>" +
        '<span class="wc-readings">' +
          '<span class="wc-r r-on jp">' + withRomaji(e.on) + "</span>" +
          '<span class="wc-r r-kun jp">' + withRomaji(e.kun) + "</span>" +
          (hasMeaning() ? '<span class="wc-r r-en">' + e[meaningKey()].join(", ") + "</span>" : "") +
        "</span>" +
      "</div>" +
      exampleHTML(e, e.onEx, "t-on", "On-yomi usage") +
      exampleHTML(e, e.kunEx, "t-kun", "Kun-yomi usage") +
      '<details class="wc-more">' +
        "<summary>history &amp; connections</summary>" +
        '<p class="wc-etym">' + e.etym + "</p>" +
        '<div class="wc-spot"><span class="muted">👀 where you’ll see it:</span> ' + e.spot + "</div>" +
        '<div class="wc-rel"><span class="muted">related:</span>' + rel + "</div>" +
        '<div class="wc-links">' +
          '<a href="' + jishoURL(e.kanji) + '" target="_blank" rel="noopener">📖 Jisho</a>' +
          '<a href="' + wiktURL(e.kanji) + '" target="_blank" rel="noopener">📜 Wiktionary</a>' +
        "</div>" +
      "</details>" +
    "</div>";
  }).join("");
}

/* ------------------------------------------------------------------ *
 * HUD / target / progress
 * ------------------------------------------------------------------ */

function updateHUD() {
  els.score.textContent = state.score;
  els.left.textContent = (state.groupsTotal - state.groupsCleared) + " / " + state.groupsTotal;
  els.modeLabel.textContent = state.mode.charAt(0).toUpperCase() + state.mode.slice(1);
}

function updateTarget() {
  const panel = els.target;
  if (state.activeGroup === null) {
    panel.innerHTML = '<p class="target-empty">Tap a <b>Kanji</b> brick to start a word. 🐱</p>';
    return;
  }
  // Every tile carries its kanji, so this works even in hard mode where the
  // first pick might be a reading rather than the kanji itself.
  const ch = state.staged[0].kanji;
  const stagedIds = new Set(state.staged.map((t) => t.id));
  const rows = allMatches(state.activeGroup).map((m) => {
    const got = stagedIds.has(m.id);
    const now = state.mode === "easy" && !got && m.type === state.step;
    return '<li class="' + (got ? "got" : "") + (now ? " now" : "") +
        '" title="' + TYPE_HELP[m.type] + '">' +
      '<span class="dot ' + TYPES[m.type].cls + '"></span>' +
      '<span class="ttype">' + TYPES[m.type].label +
        '<span class="ttip">' + TYPE_HELP[m.type] + "</span></span>" +
      '<span class="tval jp">' + (got ? m.value : "❓") + "</span></li>";
  }).join("");
  panel.innerHTML =
    '<div class="target-kanji jp">' + ch + "</div>" +
    '<ul class="target-list">' + rows + "</ul>" +
    '<div class="target-links">' +
      '<a href="' + jishoURL(ch) + '" target="_blank" rel="noopener">📖 Jisho</a>' +
      '<a href="' + wiktURL(ch) + '" target="_blank" rel="noopener">📜 Wiktionary</a>' +
    "</div>";
}

function renderProgress() {
  const inPlay = new Set(state.tiles.map((t) => t.kanji));
  // Label each row in the chosen language; 日本語 mode shows a reading instead.
  const rowLabel = (e) => hasMeaning() ? e[meaningKey()][0] : (e.kun[0] || e.on[0]);
  const rows = KANJI
    .map((e) => ({ k: e.kanji, en: rowLabel(e), s: SRS.get(e.kanji), live: inPlay.has(e.kanji) }))
    .filter((r) => r.s > 0 || r.live)
    .sort((a, b) => b.s - a.s || a.k.localeCompare(b.k));

  if (rows.length === 0) {
    els.progress.innerHTML = '<p class="muted">Clear some words to build your progress. 🌱</p>';
    return;
  }
  els.progress.innerHTML = rows.map((r) => {
    let stars = "";
    for (let i = 0; i < SRS.MAX; i++) stars += i < r.s ? "★" : "☆";
    return '<div class="prow' + (r.live ? " live" : "") + '">' +
      '<span class="pk jp">' + r.k + "</span>" +
      '<span class="pen">' + r.en + "</span>" +
      '<span class="pstars">' + stars + "</span></div>";
  }).join("");
}

let hintTimer;
function flashHint(msg) {
  els.hint.textContent = msg;
  els.hint.classList.add("show");
  clearTimeout(hintTimer);
  hintTimer = setTimeout(() => els.hint.classList.remove("show"), 1900);
}

/* ------------------------------------------------------------------ *
 * Win + new game
 * ------------------------------------------------------------------ */

function win() {
  KanjiAudio.win(); // random station-departure jingle 🚃
  boardEl.innerHTML =
    '<div class="win">' +
    '<div class="win-cat">🚃🐱</div>' +
    "<h2>Wall cleared!</h2>" +
    "<p>Score <b>" + state.score + "</b></p>" +
    '<p class="muted">departure jingle playing…</p>' +
    "</div>";

  // One-tap ways into the next game.
  const MODES = ["easy", "normal", "hard"];
  const SIZES = [6, 8, 12, 16];
  const actions = document.createElement("div");
  actions.className = "win-actions";
  const mk = (label, fn) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "primary win-btn";
    b.textContent = label;
    b.addEventListener("click", fn);
    actions.appendChild(b);
  };
  mk("▶ Play again", () => newGame());
  const mi = MODES.indexOf(settings.mode);
  if (mi >= 0 && mi < MODES.length - 1) {
    const next = MODES[mi + 1];
    mk("⬆ Try " + next, () => {
      settings.mode = next; saveSettings(); syncControls(); newGame();
    });
  }
  const si = SIZES.indexOf(settings.size);
  if (si >= 0 && si < SIZES.length - 1) {
    const next = SIZES[si + 1];
    mk("➕ " + next + " kanji", () => {
      settings.size = next; saveSettings(); syncControls(); newGame();
    });
  }
  boardEl.querySelector(".win").appendChild(actions);
  updateTarget();
}

function newGame() {
  state.mode = settings.mode;
  document.body.classList.toggle("show-pics", state.mode !== "hard");
  document.body.classList.toggle("mode-hard", state.mode === "hard");
  els.hintBtn.style.display = state.mode === "hard" ? "none" : "";
  state.score = 0;
  state.groupsCleared = 0;
  state.busy = false;
  state.tainted = new Set();
  state.totalWrong = 0;
  state.offeredEasier = false;
  hideNudge();
  resetSetState();

  const built = buildTiles(settings.size, state.mode === "hard");
  state.tiles = built.tiles;
  state.groupsTotal = built.groupsTotal;
  state.cols = pickCols();
  state.rows = layout(state.tiles);

  render();
  updateGrayout();
  updateTarget();
  updateHUD();
  renderProgress();
  renderCollection();
}

/* ------------------------------------------------------------------ *
 * Settings UI wiring
 * ------------------------------------------------------------------ */

function syncControls() {
  applyLang();
  els.mode.value = settings.mode;
  els.lang.value = settings.lang;
  els.size.value = String(settings.size);
  els.sound.checked = settings.sound;
  els.furigana.checked = settings.furigana;
  document.body.classList.toggle("no-furigana", !settings.furigana);
  document.body.classList.toggle("lang-ja", settings.lang === "ja");
  if (els.lblEnText) els.lblEnText.textContent = langConf().label;
  ["kanji", "on", "kun", "en"].forEach((t) => {
    els["lbl_" + t].checked = settings.labels[t];
  });
  els.lblAll.checked = Object.values(settings.labels).every(Boolean);
  KanjiAudio.setMuted(!settings.sound);
  applyLabelClasses();
}

function wireControls() {
  els.mode.addEventListener("change", () => {
    settings.mode = els.mode.value; saveSettings(); newGame();
  });
  els.lang.addEventListener("change", () => {
    settings.lang = els.lang.value; saveSettings(); syncControls(); newGame();
  });
  els.size.addEventListener("change", () => {
    settings.size = parseInt(els.size.value, 10); saveSettings(); newGame();
  });
  els.sound.addEventListener("change", () => {
    settings.sound = els.sound.checked; KanjiAudio.setMuted(!settings.sound); saveSettings();
  });
  els.furigana.addEventListener("change", () => {
    settings.furigana = els.furigana.checked;
    document.body.classList.toggle("no-furigana", !settings.furigana);
    saveSettings();
  });
  els.lblAll.addEventListener("change", () => {
    const on = els.lblAll.checked;
    ["kanji", "on", "kun", "en"].forEach((t) => { settings.labels[t] = on; });
    syncControls(); saveSettings();
  });
  ["kanji", "on", "kun", "en"].forEach((t) => {
    els["lbl_" + t].addEventListener("change", () => {
      settings.labels[t] = els["lbl_" + t].checked;
      els.lblAll.checked = Object.values(settings.labels).every(Boolean);
      applyLabelClasses(); saveSettings();
    });
  });
  els.newGame.addEventListener("click", newGame);
  els.hintBtn.addEventListener("click", useHint);
  els.reset.addEventListener("click", () => {
    SRS.reset(); renderProgress(); flashHint("Progress reset. 🌸");
  });
}

/* ------------------------------------------------------------------ *
 * Settings drawer (the ⚙ cog)
 * ------------------------------------------------------------------ */

function openDrawer() {
  els.drawer.hidden = false;
  els.scrim.hidden = false;
  els.menuBtn.setAttribute("aria-expanded", "true");
}
function closeDrawer() {
  els.drawer.hidden = true;
  els.scrim.hidden = true;
  els.menuBtn.setAttribute("aria-expanded", "false");
}

// On phones, collapse Mode / Language / Kanji-of-the-Day / How-to-play into the
// ☰ menu drawer, leaving just a compact New wall + the menu button in the top
// bar. On desktop they live in the top bar. Moving nodes preserves listeners.
function placeControls() {
  const mobile = window.innerWidth <= MOBILE_MAX;
  if (mobile) {
    [els.modeField, els.langField, els.kotdBtn, els.howtoBtn].forEach((el) => {
      if (el && el.parentElement !== els.menuExtra) els.menuExtra.appendChild(el);
    });
    // New wall joins the HUD row so New wall + score + puzzle + hint fit on one line.
    if (els.newGame && els.hud && els.newGame.parentElement !== els.hud) {
      els.hud.insertBefore(els.newGame, els.hud.firstChild);
    }
  } else if (els.modeField.parentElement !== els.topbar || els.newGame.parentElement !== els.topbar) {
    // restore the full desktop order in the top bar (append moves in place)
    [els.modeField, els.langField, els.newGame, els.kotdBtn, els.howtoBtn]
      .forEach((el) => { if (el) els.topbar.appendChild(el); });
  }
}

/* ------------------------------------------------------------------ *
 * "Want it easier?" nudge (after lots of wrong picks)
 * ------------------------------------------------------------------ */

const EASIER = { hard: "normal", normal: "easy" };
const SIZE_STEPS = [6, 8, 12, 16];

function showNudge(canEasier, canFewer) {
  let btns = "";
  if (canEasier) btns += '<button id="nudgeEasier" class="primary">😌 Easier difficulty</button>';
  if (canFewer)  btns += '<button id="nudgeFewer" class="primary">🔢 Fewer kanji</button>';
  btns += '<button id="nudgeNo" class="ghost">I\'m good 💪</button>';
  els.nudge.innerHTML =
    '<span class="nudge-cat">🐈</span>' +
    '<p>I noticed a few misses in a row — want to make it comfier?</p>' +
    '<div class="nudge-btns">' + btns + "</div>";
  els.nudge.hidden = false;

  const e = document.getElementById("nudgeEasier");
  if (e) e.onclick = () => { settings.mode = EASIER[settings.mode] || settings.mode; saveSettings(); syncControls(); newGame(); };
  const f = document.getElementById("nudgeFewer");
  if (f) f.onclick = () => {
    const i = SIZE_STEPS.indexOf(settings.size);
    if (i > 0) settings.size = SIZE_STEPS[i - 1];
    saveSettings(); syncControls(); newGame();
  };
  document.getElementById("nudgeNo").onclick = hideNudge;
}
function hideNudge() { if (els && els.nudge) els.nudge.hidden = true; }

/* ------------------------------------------------------------------ *
 * First-timer onboarding — pick a skill level (which sets difficulty +
 * kanji count) and a meaning language, all with kawaii emote icons.
 * ------------------------------------------------------------------ */

// Only new visitors see it: no onboard flag AND no saved settings yet.
function needsOnboarding() {
  try {
    return !localStorage.getItem(ONBOARD_KEY) && !localStorage.getItem(SETTINGS_KEY);
  } catch (e) { return false; }
}

function openOnboard() {
  const modal = els.onboard;
  if (!modal) return;
  modal.hidden = false;

  let pick = { mode: "normal", size: 12 }; // sensible default = Medium
  let lang = settings.lang;

  const levels = modal.querySelectorAll(".ob-level");
  const langs = modal.querySelectorAll(".ob-lang");

  function selLevel(btn) {
    levels.forEach((b) => b.classList.toggle("sel", b === btn));
    pick = { mode: btn.dataset.mode, size: parseInt(btn.dataset.size, 10) };
  }
  function selLang(btn) {
    langs.forEach((b) => b.classList.toggle("sel", b === btn));
    lang = btn.dataset.lang;
  }

  levels.forEach((b) => {
    b.onclick = () => selLevel(b);
    if (b.dataset.mode === "normal" && b.dataset.size === "12") selLevel(b);
  });
  langs.forEach((b) => {
    b.onclick = () => selLang(b);
    if (b.dataset.lang === lang) selLang(b);
  });

  els.obStart.onclick = () => {
    settings.mode = pick.mode;
    settings.size = pick.size;
    settings.lang = lang;
    saveSettings();
    try { localStorage.setItem(ONBOARD_KEY, "1"); } catch (e) {}
    modal.hidden = true;
    syncControls();
    newGame();
  };
}

/* ------------------------------------------------------------------ *
 * Kanji of the Day 🐱 — a fun kawaii trivia popup
 * ------------------------------------------------------------------ */

const KOTD_KEY = "kc.kotd.day";
const CATS = ["🐱", "🐈", "😺", "😸", "🐾", "🍡", "🌸"];

function dayNumber(d) {
  const start = new Date(d.getFullYear(), 0, 0);
  return Math.floor((d - start) / 86400000);
}
function dailyEntry() {
  // Stable for the whole day, varies day to day.
  return KANJI[dayNumber(new Date()) % KANJI.length];
}

function kotdHTML(e) {
  const cat = CATS[Math.floor(Math.random() * CATS.length)];
  return (
    '<button class="kotd-x" id="kotdClose" aria-label="Close">✕</button>' +
    '<div class="kotd-head"><span class="kotd-paw">🐾</span>' +
      "Kanji of the Day <span class=\"kotd-paw\">" + cat + "</span></div>" +
    '<div class="kotd-hero">' +
      '<span class="kotd-pic" aria-hidden="true">' + (e.pic || "🐾") + "</span>" +
      '<span class="kotd-k jp">' + e.kanji + "</span>" +
    "</div>" +
    (hasMeaning() ? '<div class="kotd-mean">' + e[meaningKey()].join(", ") + "</div>" : "") +
    '<div class="kotd-reads">' +
      '<span class="wc-r r-on jp">On · ' + withRomaji(e.on) + "</span>" +
      '<span class="wc-r r-kun jp">Kun · ' + withRomaji(e.kun) + "</span>" +
    "</div>" +
    '<div class="kotd-stats">' +
      '<span>✍️ ' + e.strokes + " strokes</span>" +
      "<span>🎒 Grade " + (e.grade || 1) + "</span>" +
      "<span>📗 JLPT " + (e.jlpt || "N5") + "</span>" +
    "</div>" +
    '<div class="kotd-sec"><b>📜 History</b><p>' + e.etym + "</p></div>" +
    '<div class="kotd-sec"><b>📝 In a sentence</b>' +
      exampleHTML(e, e.onEx, "t-on", "On-yomi usage") +
      exampleHTML(e, e.kunEx, "t-kun", "Kun-yomi usage") +
    "</div>" +
    '<div class="kotd-sec kotd-fun"><b>✨ Did you know?</b><p>' + e.trivia + "</p>" +
      '<p class="kotd-spot">👀 ' + e.spot + "</p></div>" +
    '<div class="kotd-btns">' +
      '<button id="kotdShuffle" class="ghost">🎲 Another!</button>' +
      '<button id="kotdOk" class="primary">Let\'s play 🐾</button>' +
    "</div>"
  );
}

function openKOTD(entry) {
  els.kotdBody.innerHTML = kotdHTML(entry);
  els.kotd.hidden = false;
  document.getElementById("kotdClose").onclick = closeKOTD;
  document.getElementById("kotdOk").onclick = closeKOTD;
  document.getElementById("kotdShuffle").onclick = () => {
    const others = KANJI.filter((k) => k.kanji !== entry.kanji);
    openKOTD(others[Math.floor(Math.random() * others.length)]);
  };
}
function closeKOTD() { els.kotd.hidden = true; }

// Show the daily card automatically the first time you visit each day.
function maybeShowDailyKOTD() {
  const today = new Date().toDateString();
  let last = null;
  try { last = localStorage.getItem(KOTD_KEY); } catch (e) {}
  if (last !== today) {
    try { localStorage.setItem(KOTD_KEY, today); } catch (e) {}
    setTimeout(() => openKOTD(dailyEntry()), 650);
  }
}

/* ------------------------------------------------------------------ *
 * Boot
 * ------------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  boardEl = document.getElementById("board");
  shelfEl = document.getElementById("shelf");
  els = {
    score: document.getElementById("score"),
    left: document.getElementById("left"),
    modeLabel: document.getElementById("modeLabel"),
    target: document.getElementById("target"),
    hint: document.getElementById("hint"),
    progress: document.getElementById("progress"),
    collection: document.getElementById("collection"),
    mode: document.getElementById("mode"),
    lang: document.getElementById("lang"),
    modeField: document.getElementById("modeField"),
    langField: document.getElementById("langField"),
    topbar: document.getElementById("topbar"),
    menuExtra: document.getElementById("menuExtra"),
    hud: document.getElementById("hud"),
    size: document.getElementById("size"),
    sound: document.getElementById("sound"),
    furigana: document.getElementById("furigana"),
    lblAll: document.getElementById("lbl-all"),
    lbl_kanji: document.getElementById("lbl-kanji"),
    lbl_on: document.getElementById("lbl-on"),
    lbl_kun: document.getElementById("lbl-kun"),
    lbl_en: document.getElementById("lbl-en"),
    lblEnText: document.getElementById("lblEnText"),
    newGame: document.getElementById("newGame"),
    hintBtn: document.getElementById("hintBtn"),
    reset: document.getElementById("reset"),
    nudge: document.getElementById("nudge"),
    menuBtn: document.getElementById("menuBtn"),
    menuClose: document.getElementById("menuClose"),
    drawer: document.getElementById("settingsDrawer"),
    scrim: document.getElementById("settingsScrim"),
    kotd: document.getElementById("kotd"),
    kotdBody: document.getElementById("kotdBody"),
    kotdBtn: document.getElementById("kotdBtn"),
    howtoBtn: document.getElementById("howtoBtn"),
    howto: document.getElementById("howto"),
    howtoClose: document.getElementById("howtoClose"),
    howtoOk: document.getElementById("howtoOk"),
    onboard: document.getElementById("onboard"),
    obStart: document.getElementById("obStart"),
    obHowto: document.getElementById("obHowto")
  };

  loadSettings();
  syncControls();
  wireControls();
  newGame();

  // Settings drawer (⚙ cog top-right).
  els.menuBtn.addEventListener("click", openDrawer);
  els.menuClose.addEventListener("click", closeDrawer);
  els.scrim.addEventListener("click", closeDrawer);

  // Kanji of the Day: button opens it anytime; auto-show once per day.
  els.kotdBtn.addEventListener("click", () => openKOTD(dailyEntry()));
  els.kotd.addEventListener("click", (ev) => { if (ev.target === els.kotd) closeKOTD(); });

  // How to play: top-bar button opens the popup; the first-time menu links here.
  const openHowto = () => { els.howto.hidden = false; };
  const closeHowto = () => { els.howto.hidden = true; };
  els.howtoBtn.addEventListener("click", openHowto);
  els.howtoClose.addEventListener("click", closeHowto);
  els.howtoOk.addEventListener("click", closeHowto);
  els.howto.addEventListener("click", (ev) => { if (ev.target === els.howto) closeHowto(); });
  if (els.obHowto) els.obHowto.addEventListener("click", openHowto);

  // Put the controls where they belong for this viewport (top bar vs ☰ menu).
  placeControls();

  // First-time visitors get the skill/language picker instead of the daily
  // card (and we mark today so the daily card doesn't also pop up at once).
  if (needsOnboarding()) {
    openOnboard();
    try { localStorage.setItem(KOTD_KEY, new Date().toDateString()); } catch (e) {}
  } else {
    maybeShowDailyKOTD();
  }

  // Escape closes whichever overlay is open.
  document.addEventListener("keydown", (ev) => {
    if (ev.key !== "Escape") return;
    if (!els.drawer.hidden) closeDrawer();
    else if (!els.howto.hidden) els.howto.hidden = true;
    else if (!els.kotd.hidden) closeKOTD();
  });

  // Refit brick text when the board changes size. If the viewport crosses the
  // phone/desktop breakpoint (changing the column count) while the board is
  // idle, re-flow the wall into the new portrait/landscape grid.
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      placeControls();
      const nc = pickCols();
      if (nc !== state.cols && !state.busy && state.activeGroup === null && state.tiles.length) {
        state.cols = nc;
        state.rows = layout(state.tiles);
        render();
        updateGrayout();
        updateTarget();
      }
      fitAllFaces();
    }, 160);
  });
});
