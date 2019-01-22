
//importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');
importScripts('/pwa-belajar/workbox-sw-rel.3.5.0.js');
console.log('this is my custom service worker');

workbox.precaching.precacheAndRoute([
  {
    "url": "css/app.css",
    "revision": "fd2e1d3c4c8d43da10afe67a7d69fbd1"
  },
  {
    "url": "index.html",
    "revision": "7c6ef8a01ce3eeda19935a595eeeb9c1"
  },
  {
    "url": "js/app.js",
    "revision": "03bde26b6af07cd6bb0378ec0a50e410"
  }
]);

workbox.routing.registerRoute(
  new RegExp('https://jsonplaceholder.typicode.com/users'),
  workbox.strategies.cacheFirst()
);
