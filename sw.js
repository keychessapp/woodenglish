const C='speak1000-v1',F=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'];
addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>skipWaiting())));
addEventListener('fetch',e=>{if(e.request.url.endsWith('.mp3'))return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
