const CACHE_NAME = 'su-tour-cache-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './packages.html',
    './rentals.html',
    './css/style.css',
    './js/script.js',
    './manifest.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
