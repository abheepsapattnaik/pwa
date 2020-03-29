self.addEventListener('install', function (event) {
  console.log('[Service worker] Installing SW ', event);
});

self.addEventListener('activate', function (event) {
  console.log('[Service worker] Activating SW ', event);
  return self.clients.claim();
});