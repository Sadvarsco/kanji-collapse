/*
 * Kanji Collapse service worker — makes the game installable & offline.
 *
 * Strategy:
 *   - Precache the app shell on install (works offline from first launch).
 *   - Same-origin GET: network-first (so a fresh deploy is picked up online),
 *     falling back to cache when offline; every good response refreshes cache.
 *   - Cross-origin (Google Fonts): cache-first so fonts work offline after the
 *     first visit.
 * Bump CACHE when the shell changes to retire old caches.
 */
const CACHE = "kc-v1";
const CORE = [
  "./",
  "index.html",
  "css/style.css",
  "js/data.js",
  "js/romaji.js",
  "js/srs.js",
  "js/audio.js",
  "js/game.js",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon-180.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;

  if (sameOrigin) {
    // network-first: fresh when online, cached when offline
    e.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => caches.match(req).then((hit) => hit || caches.match("index.html")))
    );
  } else {
    // cross-origin (fonts, etc.): cache-first
    e.respondWith(
      caches.match(req).then((hit) =>
        hit ||
        fetch(req).then((res) => {
          if (res && (res.ok || res.type === "opaque")) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        }).catch(() => hit)
      )
    );
  }
});
