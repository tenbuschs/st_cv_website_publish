'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "548fa806337dd3ddc9eb6c9bbd264c20",
"assets/AssetManifest.bin.json": "12a58a1b87fb70d4c5e3c0ce95eaa834",
"assets/assets/buddy_01.JPG": "d23fc20db890bc8d11cbe16340a8910d",
"assets/assets/buddy_02.jpg": "7cd9381bc09fdff28a86125d5b059084",
"assets/assets/contact.vcf": "a7ae4ca33aaf392436531fd199fdb97c",
"assets/assets/dalhaus_01.JPG": "f26c619f762f1a6704c5a7cea3580cda",
"assets/assets/dalhaus_02.jpg": "4f5a30984d39a92a833f67f051697d9b",
"assets/assets/dalhaus_03.JPG": "ad478e3a286f5b45b9f3588caa75ba5f",
"assets/assets/dillon_01.jpg": "e9c63762134a985f28283671d22856b9",
"assets/assets/dillon_02.jpg": "027cffada987361986076827f4c7961c",
"assets/assets/dillon_03.jpg": "017fe134e51fcf5c7414478f931819a3",
"assets/assets/dillon_04.jpg": "9f9b7936be1d433402c918e2897cd0ae",
"assets/assets/education.jpeg": "5098091a7a85789dc77abb7df31a7667",
"assets/assets/experience.jpg": "e5942300324aaf434b38c107a4b152cb",
"assets/assets/fiverr.png": "718e386fd7409caac2711135a7e5043f",
"assets/assets/fms.jpg": "27051676a703e4e580c28dceb9bd79c0",
"assets/assets/fwfp_01.jpg": "430ee19276cb5cde9405ba6e19dbaaa0",
"assets/assets/fwfp_02.jpg": "daecde883a1c62d4fd67d190ff712c04",
"assets/assets/fwfp_03.jpg": "f05e13d525cb3dbcfa86a5a1d9123920",
"assets/assets/gis_01.jpg": "854b4d5e08cb95158438b93eedeb6140",
"assets/assets/gis_02.jpg": "30e6f5a7b5ad3afea11a22dc63c3431b",
"assets/assets/gis_03.jpg": "0a29c1539b06e49af279367913f67cd4",
"assets/assets/gis_blog_01.png": "94ecd4b4426fc7e23f2b8f88c3a40533",
"assets/assets/gis_blog_02.jpg": "82ffb169c239b35c50cb12c0a3fe3d44",
"assets/assets/gold_award_01.jpg": "dded1786be613d183469fa7e24474188",
"assets/assets/gold_award_02.jpg": "cbb2784832e7ff739630e75702f2195d",
"assets/assets/gold_award_03.jpg": "fb21a160029de619364addb4c7912ce0",
"assets/assets/krone_01.jpg": "9651f3c84a9ce86a6800b3ad8ce522e3",
"assets/assets/krone_02.jpg": "ba90fe789a636cfd4316cb23a3bb106a",
"assets/assets/krone_03.jpg": "af59b4f9125533f3a842430887a6c02b",
"assets/assets/krone_04.jpg": "af7c9280b384d64f77a766ea24ea4304",
"assets/assets/krone_05.jpg": "b5e6ac9a489e0734d7e3459d7172e430",
"assets/assets/latvia_01.jpg": "fb8cf718fee97bf14373250343062e91",
"assets/assets/latvia_02.jpg": "9a590f90038bd959f1b6400d55adc3db",
"assets/assets/latvia_03.jpg": "d6b294e0af972d8153797bfa8226b0d5",
"assets/assets/latvia_04.jpg": "5deccc8f2e9f5a213147cfad844bf2b8",
"assets/assets/latvia_05.jpg": "4b44e82a715ba2af35554e64a5cc6864",
"assets/assets/msf_harvest_01.jpg": "877cdc9cb7849bd13c15d0d7612437cb",
"assets/assets/msf_harvest_02.jpg": "2d555eae3b41c277372bc4aec8e54d69",
"assets/assets/msf_harvest_03.jpg": "b46ab06df5207a257e74b147914c44a3",
"assets/assets/msf_harvest_04.jpg": "4f4be6cb4c8530a4a94657e7d023ed18",
"assets/assets/msf_seeding_01.jpg": "2b2a9fb23455bfd843b805f5846db3d6",
"assets/assets/msf_seeding_02.jpg": "ad6b938a8ab60f5394c800ae5dfc572c",
"assets/assets/msf_seeding_03.jpg": "c4055ade7813d8b6af79c16b525dd1a1",
"assets/assets/msf_seeding_04.jpg": "01db993f1f5fcd45a0370f8ecbe7393c",
"assets/assets/portfolio.jpg": "08497e73fc065ec9bcbd423123b34da6",
"assets/assets/profile.jpg": "92cb0c1c3ec75a194c860773e0c54ab7",
"assets/assets/saudhof_01.jpg": "16cfc51613a65c37eeb19bc247680344",
"assets/assets/saudhof_02.jpg": "e2c54056d98f0de261331654b4f32fc0",
"assets/assets/saudhof_03.jpg": "ad85893600b941dd3fb96ea1c2db21b0",
"assets/assets/schuetz_01.jpg": "207d06c61c22127f6a1c6ab45b9dbbb7",
"assets/assets/schuetz_02.jpg": "9a0edf6a8525948b656305091dc762e3",
"assets/assets/schuetz_03.jpg": "6d11e55152b48d50578bfc2382265351",
"assets/assets/thw_01.jpg": "50c29ff258412cff4ed705646cb48611",
"assets/assets/thw_02.jpg": "cd07edaec4f33ec568a8309e55810957",
"assets/assets/thw_03.jpg": "8e468d98f28ebe0313a8ea78636da1b5",
"assets/assets/thw_04.jpg": "c247276f05b5c1f646fbe49c89638803",
"assets/assets/thw_05.jpg": "f43f0cba946ef85482cbf97a69ee13a9",
"assets/assets/volunteering.jpg": "d2e3cefdaf88bf1517b67fa3609cbf2e",
"assets/assets/youtube.jpg": "89e6bc69066216f3a2eb5d282b4cb509",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "cd7e2462eef0af2d5e813ed97813ad9b",
"assets/NOTICES": "260e400e2a6cf49290ff12971b8344c7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2815e4bacf0bd26b5a69696abd793f70",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.svg": "ae95cd99eea9740e09520672638a4aaa",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "20ea4b5f2d162f12beabbae9ca52d137",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d6d382b312700889932cb1a7af53d67c",
"/": "d6d382b312700889932cb1a7af53d67c",
"main.dart.js": "7ff3de8728bbbec451e89e82dfdbf0ff",
"manifest.json": "a90fc70bfa7a0df7682282375162141a",
"version.json": "00a09cf571afbe8210e7561c3a8a443f",
"web_assets/CV_Simon-Tenbusch_2026.pdf": "81d37f1695d6f7b55fa23e6996978c99",
"web_assets/gis_blog.pdf": "8c2a68b974ad164db0965d08ffd078b8",
"web_assets/gis_report.pdf": "22a7026c938a45d0ed56bb6c72698e32"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
