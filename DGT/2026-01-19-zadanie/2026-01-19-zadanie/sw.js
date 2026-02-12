// sw.js — školský štandard (PWA + offline)
// install → activate → fetch
// DNEŠNÝ CIEĽ: aby fungovalo fetch rozhodovanie + offline fallback.

const CACHE_VERSION = "v1.0.0";
const STATIC_CACHE  = `static-${CACHE_VERSION}`;
const OFFLINE_URL   = "./offline.html";

const PRECACHE_ASSETS = [
  "./",
  "./index.html",
  "./main.py",
  "./sw.js",
  OFFLINE_URL,
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(STATIC_CACHE);
    await cache.addAll(PRECACHE_ASSETS);
    // Voliteľne (na budúci týždeň): self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter(k => k.startsWith("static-") && k !== STATIC_CACHE)
        .map(k => caches.delete(k))
    );
    // Voliteľne (na budúci týždeň): await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Pre jednoduchosť riešime len GET
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Pomocná detekcia HTML (niekedy request nie je "navigate" napr. pri reloadoch/redirectoch)
  const accept = req.headers.get("accept") || "";
  const isHTML = req.mode === "navigate" || accept.includes("text/html");

  // 1) HTML (navigácie/stránky): network-first + offline fallback
  if (isHTML) {
    event.respondWith((async () => {
      const cache = await caches.open(STATIC_CACHE);

      try {
        const resp = await fetch(req);
        // Ulož kópiu aktuálnej stránky do cache (pod rovnakým request key)
        cache.put(req, resp.clone());
        return resp;
      } catch (e) {
        // Keď sme offline: skús najprv cachovanú verziu tej istej stránky
        const cachedPage = await cache.match(req);
        if (cachedPage) return cachedPage;

        // Potom všeobecný offline fallback
        return (await cache.match(OFFLINE_URL)) || new Response("Offline", { status: 503 });
      }
    })());
    return;
  }

  // 2) ASSETY (CSS/JS/obrázky/py): cache-first (iba rovnaký origin)
  if (url.origin === self.location.origin) {
    event.respondWith((async () => {
      const cache = await caches.open(STATIC_CACHE);
      const cached = await cache.match(req);
      if (cached) return cached;

      try {
        const resp = await fetch(req);
        cache.put(req, resp.clone());
        return resp;
      } catch (e) {
        return new Response("Resource unavailable offline.", { status: 503 });
      }
    })());
    return;
  }

  // 3) Iné originy (CDN/API): bez zásahu
});