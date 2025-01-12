const CACHE_NAME = 'suchtpraev-v1';
const ASSETS_TO_CACHE = [
  'index.html',
  'manifest.json',
  'assets/css/style.css',
  'assets/js/app.js',
  // ... alle weiteren Dateien/Bilder, die offline funktionieren sollen
];

// Installations-Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Aktivierungs-Event (ältere Caches aufräumen)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// Fetch-Event (Anfragen abfangen und ggf. aus dem Cache bedienen)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Aus Cache
      }
      return fetch(event.request); // Aus dem Netz
    })
  );
});
