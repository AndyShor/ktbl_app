const CACHE_NAME = 'ktbl-tracker-v2';
const urlsToCache = [
  './',
  './index.html',
  './assets/css/style.css',
  './assets/js/bokeh_plot_1.js',
  './assets/js/bokeh_plot_2.js',
  './favicon.png',
  './icon.png',
  './manifest.json',
  'https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js',
  'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js',
  'https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js',
  'https://cdn.bokeh.org/bokeh/release/bokeh-api-2.3.3.min.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  'https://fonts.googleapis.com/icon?family=Material+Icons'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.log('Cache addAll error:', err);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(err => {
          console.log('Fetch error:', err);
        });
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
