'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "ddfa6d0ac6158de5c9892bc2d75ffba8",
"/main.dart.js": "89cf456e56161658a340c95ec3453ccc",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "a9fef833e0513f6bafcff83bce66b2b2",
"/assets/LICENSE": "dc87a9176523e52aaed45080c597d4e3",
"/assets/AssetManifest.json": "349b2c7798f7943e44b764e9724b3768",
"/assets/FontManifest.json": "acdb0ad2055798e716c21491add1bacc",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/images/osu-logo-square.jpg": "4357e3b85bd5576489d9983ad4061e62",
"/assets/assets/images/OSU-logo.jpg": "8e18cfc1658c5ef574001f5d33286288",
"/assets/assets/fonts/RobotoCondensed-Bold.ttf": "141d6bca9dd80c70f193e15e44e196e9",
"/assets/assets/fonts/RobotoCondensed-Light.ttf": "a60a2f5cb89d9def151ac47b377a1f09",
"/assets/assets/fonts/RobotoCondensed-Italic.ttf": "198e3f07ee8b96ece655b7c4b4b3ce24",
"/assets/assets/fonts/Raleway-Regular.ttf": "84abe14c9756256a4b91300ba3e4ec62",
"/assets/assets/fonts/Raleway-Black.ttf": "3469d4a9bf3b8f9db8f3e5c69e3fce8e",
"/assets/assets/fonts/RobotoCondensed-Regular.ttf": "9c6aac5ea7419fbe344b1e8f6cc10dac",
"/assets/assets/fonts/Raleway-Bold.ttf": "2f99a85426a45e0c7f8707aae53af803"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
