/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
const Pokelovers = 'Pokelovers-site-v1';
const assets = [
  '/',
  'index.html',
  'main.js',
  'data.js',
  'data/pokemon/pokemon.js',
  'img/logo.png'
]

// eslint-disable-next-line arrow-parens
self.addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(Pokelovers).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    }),
  );
});
