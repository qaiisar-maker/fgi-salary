// FGI Salary System — Service Worker (v18, 100% offline, no CDN)
const CACHE = 'fgi-salary-v18.2';
const ASSETS = ['./','./index.html','./manifest.json',
  './lib/jspdf.umd.min.js','./lib/jspdf.plugin.autotable.min.js','./lib/html2canvas.min.js','./lib/pdf.min.js','./lib/pdf.worker.min.js',
  './fonts/fonts.css','./fonts/nunito-latin-400-normal.woff2','./fonts/nunito-latin-600-normal.woff2',
  './fonts/nunito-latin-700-normal.woff2','./fonts/nunito-latin-800-normal.woff2',
  './fonts/playfair-display-latin-700-normal.woff2','./fonts/playfair-display-latin-900-normal.woff2',
  './icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-192.png','./icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png','./icons/favicon-32.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  if(req.mode==='navigate'){e.respondWith(fetch(req).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put('./index.html',c));return r;}).catch(()=>caches.match('./index.html')));return;}
  e.respondWith(caches.match(req).then(h=>h||fetch(req).then(r=>{if(r&&r.status===200&&new URL(req.url).origin===location.origin){const c=r.clone();caches.open(CACHE).then(x=>x.put(req,c));}return r;}).catch(()=>new Response('Offline',{status:503}))));
});
