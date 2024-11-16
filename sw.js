self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('ktbl-cache')
        .then(cache => {
          return cache.addAll([
            '/',
            '/index.html',
            '/assets/css/style.css',
            '/assets/js/bokeh_plot_1.js',
            '/assets/js/bokeh_plot_2.js',
            '/assets/img/start.png',
            '/assets/img/stop.png',
            '/assets/img/download.png',
            '/assets/img/upload.png',
            '/favicon.png',
            'icon.png',
            'manifest.json',

          ]);
        })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          return response || fetch(event.request);
        })
    );
  });
  
  self.addEventListener('activate', event => {
    event.waitUntil(
      caches.keys()
        .then(cacheNames => {
          return Promise.all(
            cacheNames.filter(cacheName => cacheName !== 'ktbl-cache')
              .map(cacheName => caches.delete(cacheName))
          );
        })
    );
  });