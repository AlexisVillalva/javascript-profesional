// service worker es lo que nos permite guardar datos de la aplicacion
// en el cache del dispositivo para utilizarlo sin conexion
// podemos verlo como algo que esta entre la aplicacion y el internet.
// service worker es el intermediario que permite verificar si es realmente necesario conectarnos
// a internet para realizar la peticion

/*
sw recibe diferentes metodos que permiten manejarlo:
* install
* activate
* push
* fetch
*/

const VERSION = 'v1';

self.addEventListener('install', (event) => {
  event.waitUntil(precache());
});

self.addEventListener('fetch', (event) => {
  // obtener la peticion
  const request = event.request;

  // trabajar solo con peticiones get
  if (request.method !== 'GET') {
    return;
  }

  // buscar respuesta en cache antes de pasar a internet
  event.respondWith(cachedResponse(request));

  // actualizar el cache para actualizar las versiones de nuestros archivos, asi el usuario no se quedara con un archivo viejo
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    //     "/",
    //     "/index.html",
    //     "/assets/index.js",
    //     "/assets/MediaPlayer.js",
    //     "/assets/plugins/AutoPlay.js",
    //     "/assets/plugins/AutoPause.js",
    //     "/assets/index.css",
    //     "/assets/BigBuckBunny.mp4",
  ]);
}

async function cachedResponse(request) {
  // abre el cache
  const cache = await caches.open(VERSION);
  // checar si en el cache ya existe la contestacion a nuestra peticion
  // le preguntamos al cache si ya tiene una copia del request que estamos utilizando
  const response = await cache.match(request);
  // si el response es undifined, entonces tenemos que hacer la peticion como se haria normalmente, a internet.
  return response || fetch(request);
}

async function updateCache(request) {
  // abre el cache
  const cache = await caches.open(VERSION);

  const response = await fetch(request);
  // a;adir nuevo contenido al cache
  // con la llave request, guardaremos la response en el cache
  return response.status === 200
    ? cache.put(request, response)
    : new Promise((resolve, reject) => resolve('Resolved'));
}
