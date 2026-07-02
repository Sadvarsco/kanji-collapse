/*
 * SRS — a tiny Anki-style "how well do you know this word" tracker.
 *
 * Each kanji carries a score (0..MAX). Getting a set right on the first try
 * bumps it up; a wrong pick bumps it down. The score feeds weighted sampling
 * so weak words show up more often and strong ones show up rarely — but every
 * word keeps a small weight, so nothing ever disappears entirely.
 *
 * Scores persist per-browser in localStorage.
 */
const SRS = (function () {
  const KEY = "kc.srs.v1";
  const RECENT_KEY = "kc.recent.v1";
  const MAX = 5;
  // How many just-shown kanji stay on "cooldown" (heavily down-weighted so
  // they're unlikely to reappear in the very next few rounds). Sized so a
  // full board-plus can pass before a kanji is likely to return.
  const RECENT_MAX = 18;
  // Multiplier applied to a kanji still on cooldown. Tiny, but never 0, so a
  // small pool can't deadlock — repeats become rare, not impossible.
  const RECENT_PENALTY = 0.06;

  function load(key) {
    try { return JSON.parse(localStorage.getItem(key)); }
    catch (e) { return null; }
  }
  function save(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }

  const scores = load(KEY) || {};
  let recent = load(RECENT_KEY) || []; // most-recently-shown first

  function clamp(n) { return Math.max(0, Math.min(MAX, n)); }

  return {
    MAX,
    get(kanji) { return scores[kanji] || 0; },
    bump(kanji, delta) {
      scores[kanji] = clamp((scores[kanji] || 0) + delta);
      save(KEY, scores);
    },
    reset() {
      Object.keys(scores).forEach((k) => delete scores[k]);
      recent = [];
      save(KEY, scores);
      save(RECENT_KEY, recent);
    },

    // Base weight: higher score -> much lower weight (squared so well-known
    // kanji surface far less often), but always >= 1 so nothing vanishes.
    weight(kanji) {
      const base = (MAX - this.get(kanji)) + 1; // 1..MAX+1
      return base * base;
    },

    // Remember the kanji a board just used, so the next boards avoid them.
    noteShown(kanjis) {
      // newest first; drop any earlier copies, then cap the cooldown list.
      const set = new Set(kanjis);
      recent = kanjis.concat(recent.filter((k) => !set.has(k))).slice(0, RECENT_MAX);
      save(RECENT_KEY, recent);
    },
    recentSet() { return new Set(recent); },

    // Weighted sample of `n` distinct entries (by entry.kanji) without
    // replacement. Kanji in `recent` are strongly down-weighted so successive
    // rounds don't keep serving the same characters.
    sample(entries, n, opts) {
      opts = opts || {};
      const recentSet = opts.recent instanceof Set ? opts.recent : new Set();
      const pool = entries.slice();
      const chosen = [];
      n = Math.min(n, pool.length);
      for (let i = 0; i < n; i++) {
        const weights = pool.map((e) => {
          let w = this.weight(e.kanji);
          if (recentSet.has(e.kanji)) w *= RECENT_PENALTY;
          return w;
        });
        const total = weights.reduce((a, b) => a + b, 0);
        let r = Math.random() * total;
        let idx = 0;
        for (; idx < pool.length; idx++) {
          r -= weights[idx];
          if (r <= 0) break;
        }
        idx = Math.min(idx, pool.length - 1);
        chosen.push(pool[idx]);
        pool.splice(idx, 1);
      }
      return chosen;
    }
  };
})();
