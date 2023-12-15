const AppCache = [
    '/',
    'app.js',
    'index.html',
    'styles.css'
]

self.addEventListener('install', (e)=>{
    

    const cache = caches.open('vers1').then( cache => {
        cache.addAll( AppCache)
    })

    e.waitUntil( cache);
})



self.addEventListener('activate', ()=>{
    console.log('SW: Activado');
})

self.addEventListener('fetch', evento => {
    const respuestaCache = caches.match( evento.request).then( res => {
        if (res ) {
            return res;
        } else {
            
            return fetch(evento.request).then( respuesta => {
                return respuesta;
            })
        }
    })
    evento.respondWith( respuestaCache  )
})

    
        


/*


const CACHE_NAME = 'diario-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/Css/Styles.css',
    '/Js/app.js',
    '/Img'
    
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});*/