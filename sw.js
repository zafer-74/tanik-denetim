/* Tanık Denetim – çevrimdışı çalışma. Yeni sürüm yüklerken SURUM değerini artırın. */
const SURUM = "tanik-v15";
const CEKIRDEK = ["./", "./index.html", "./manifest.webmanifest", "./exceljs.min.js", "./jszip.min.js", "./icon-180.png", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(SURUM).then(c => c.addAll(CEKIRDEK)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== SURUM).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Sayfa: önce ağ (güncel sürüm), bağlantı yoksa önbellek
  if (req.mode === "navigate" || (url.origin === location.origin && url.pathname.endsWith("/index.html"))) {
    e.respondWith(
      fetch(req).then(r => { const c = r.clone(); caches.open(SURUM).then(ca => ca.put("./index.html", c)); return r; })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }
  // Google yazı tipleri: önbellekten ver, arkada yenile
  if (url.host === "fonts.googleapis.com" || url.host === "fonts.gstatic.com") {
    e.respondWith(caches.open(SURUM).then(ca => ca.match(req).then(hit => {
      const net = fetch(req).then(r => { ca.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    })));
    return;
  }
  // Diğer dosyalar: önce önbellek
  if (url.origin === location.origin) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { const c = r.clone(); caches.open(SURUM).then(ca => ca.put(req, c)); return r; })));
  }
});
