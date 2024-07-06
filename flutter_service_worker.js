'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1c73af6afedbff48b80217a779384c83",
"version.json": "f18e390d5c3bcef9e0eda94bf4e6bd3f",
"index.html": "5063bdff001519025b5f6629fbfafd20",
"/": "5063bdff001519025b5f6629fbfafd20",
"main.dart.js": "8e5aa6021641a10841703b21fb18139c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"README.md": "b5a2a1fd5b9e57505bfc7072ef31700a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4b3e57efc9377f92fb68e3b41cfd00da",
".git/config": "11ae8c83c4aa03010d69c353cbb33058",
".git/objects/3e/f344924dacbc1bd6e8500ece4a3d3831416d4b": "3135eb7f2dd948a5bcb2a0b49d562912",
".git/objects/03/76c46e580677d8c0a8fa24c278444b28e71b44": "4cebd2c416e07d116456250ab77da5c2",
".git/objects/3d/21a608ac9b7c2ebd029577be3778054d22a3b2": "ea7286738bafa3077c6ad32d1d391667",
".git/objects/93/c585d5664b98cda47b411167b899339ccaee43": "9d9aa4da8afd8fa6161a6e8fc6db5fed",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/02/499e94cd6147952b0ca9043e0d23f9feb80e1a": "eaa80ef010e5f4812eb99bde3fcac98c",
".git/objects/a5/f76218aac278978ca4a91040b28abedd07700f": "667b0763f29efa4d83c1e05980f385d1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/d09f8fd3feddfd7c5aef6e21082e446b7ee2d7": "9e481a4d3f60188228cd05b8d38e98f9",
".git/objects/f3/0ef0bcdb0dc863b956feedff7f9640c768c00e": "7635af210ab900d2f781fccf8cae9ccc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/69624f7379d55ed116cac7dca54996bf544c46": "c83a934466200a58823885579694a5d2",
".git/objects/c9/0196bc0df41d07292e51413425fe700ac02c84": "d2608cdc230bf8af94b6e0a8118041c8",
".git/objects/fd/d0407e6feb7b3fd4e7b2fa26101e242576edf8": "7f8678dda60ad4b1ebaca1786fc4231f",
".git/objects/fd/b9b24d49814494e2115862bc72aa191dd0897f": "c1ae50d481b4d07b9a07cd277c76d406",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/d7a9b2255cc22244e2187c74af87dce2ba8e0a": "f7b4279a5f5aec26ce45bf966938b018",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/11/54cce83839f91e4a63804274503b961d9c0780": "8691dad21f2f8e9167a112c6ded93875",
".git/objects/7d/debbd431c94c129e6fd5277718262027dad5ad": "ea676ce89a19645ced540174bd3257c9",
".git/objects/42/a47f944c973aae4b0e0cac7a9971032c818ac7": "7e02a4fc8c889a7845def78875a6bb1f",
".git/objects/42/c416f02952bacf23cce387bfbbc73fd4deb5ea": "1799759f472e3c5fe9b551388ca4eee0",
".git/objects/42/1e128aa793d56099a0e113ed5b1dd2b6ca70b0": "0048d91ce54ac58e6289a5a50520f8ed",
".git/objects/89/dae1d67435f178123802a0d7ee6c58af93083a": "44a6a4263572c9e09776ca76e6849333",
".git/objects/74/a262240fdd3e243676a9f6c9726f08dce41680": "675b8db6644b2f4893f5f4b3a4a0a447",
".git/objects/17/c8f34e4d741675a0865689207d2118d89317d0": "f95eefc7d658d10aeaf02a8211eaef19",
".git/objects/17/5893a3564239068b5c106447f3957f7f271a05": "21e34894503990ed64e65cfe17333729",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/19381bf17a7c7960479f2ff2f8e6f05057eb14": "51a6636a4d3ccca15dbdafcce360770d",
".git/objects/19/a58a73532b7024c166ad32d67197845c92e408": "0a7f9c1d14faeb4740d8db1101e4cee7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5d/7e2f034ae9ac3fcef9d8a063c550fa1d1a4ff2": "4d7a5e0e7c48431cbf5406972cb86782",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/30/823a9b6481a3972624ad1dfcc0f52d9d0abf91": "2614dadd9e2d746c1735b805f44d7d90",
".git/objects/55/55e1c256697c0b7af838dd966f6c3c3f552bb6": "92c316aef8dc49351e59bf1c9e567682",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/c283e47be06f6ab8bb98ddef36458f1fa50d96": "f7dda3ad7a5e435027a6a3de80122cbf",
".git/objects/b6/6a5cd1b8cf37ebb251ff55333a491e8b638364": "6686d20e521deab6694a941ceb19ed9b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/f9f73c865d56687018b1ab3d6057e86b0e4556": "344afb3aea9a46d28525209379150d0a",
".git/objects/ea/0a6cabbd528ec8f4b1de72e032e5980475cc46": "74c542e131d646b6d78e019021ec1a11",
".git/objects/cc/9928bac9bd9bdd959db68837fc73173e75ac5e": "dfad70ac6427a1ff77a329ba0af73bf8",
".git/objects/f9/79e8bed55a6eda4f7dba98eeb4ce6297f4f837": "3c223dd20ff3268fb1efd92228a9dd73",
".git/objects/f7/248f839f0b393f38b59c915a696618868534a8": "a650b4d1344708271962d8f072d51f6c",
".git/objects/e9/049da964c06bb02626e61acd3b758ffa7f76f6": "d89e31642561bf8ec87b8c3f10ee6218",
".git/objects/2d/4623da23bfef3f19095f601e597ec5c9015157": "cbf22db650eb9d80f8bf38446a090ec7",
".git/objects/83/fccb56816ae09bf86a5d408030dc0117823363": "c025a4822cf4f3e71c14d4e1b9554c3a",
".git/objects/83/95ceba4c1a97d1fbfcc9c97d6ac199e74f00f3": "e44774169f555468f8e45804901be91b",
".git/objects/77/ca8617db4042d2c99e5a2cef6a88c9149b1a4c": "d99e45508e6f2f5329c15b66e739a8ab",
".git/objects/48/1f02e5cb0f2ed33e1724b96c3d1da368a0e362": "b4d64975d1a0040cc962e5db667cfc4f",
".git/objects/4f/9d5e934f83d2a969505ccf04797c402dd4776e": "639d21d0c2544e9ecef608db972502ec",
".git/objects/85/067164b32c9d8cd32d3aaa7adbd23f07067564": "f5a53c412306bc33cb6ebdcf20f05f72",
".git/objects/1d/e5056abee9a6f7e6980327a3fc865fd696f4ea": "8810832c87833e7b7aa2855111a17ec5",
".git/objects/82/055b849c023871d3ad55d7334a22852e7ed0fc": "c733476a7107b66031f19f13e2fe71c6",
".git/objects/2b/9a1dc2e05db0cdcf2cbc01c5a59a30f48cacc6": "2e0311062fb9ed5fc7556ca14c10a946",
".git/objects/7a/2374ab656bbf7ec509c85026b706920ba73b2b": "57fda77f01f20481020d53f08f10a600",
".git/objects/14/17bfec2af42b551ced1638022d39023ea140d5": "e1916844cc6124493becd52459e06fe4",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5eb57915bcf66ef457318e991cd30419",
".git/logs/refs/heads/main": "6d4d59f1fa97c74ac56a42f1c9d2ffda",
".git/logs/refs/remotes/origin/main": "1b8c00793441c2bb44b16107d80fec5b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "134bca427f08858c5869a21181c7be6b",
".git/refs/remotes/origin/main": "134bca427f08858c5869a21181c7be6b",
".git/index": "dd4bbbcde3e808383a462fab6d1b6442",
".git/COMMIT_EDITMSG": "6c8986903c7d74235d5d284032821e7a",
"assets/AssetManifest.json": "18e2a20b055a63a01074aa33f6207635",
"assets/NOTICES": "9ea5da5d472863d5d2bcf17b5dd2eee6",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "136b16b42cb653fe3984168ee06239d9",
"assets/packages/giphy_picker/assets/PoweredBy_200px-Black_HorizText.png": "439da1ed3ca70fb090eb98698485c21e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d6bf67772d0bdb4fd71b33b9c898e417",
"assets/fonts/MaterialIcons-Regular.otf": "1f9daada89f28f03e7409f4ee4aaa3bc",
"assets/assets/images/pdp.jpeg": "a05f5348f620b1faf457b9f1eda653d0",
"assets/assets/images/logo.png": "c1f155b9cd619fecdf8605108470e5ea",
"assets/assets/images/logo2.png": "cdb647f1a319e24c2602cc40335a720a",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "ab140650f4d351b74f4e6bca3e8dd0e0",
"canvaskit/canvaskit.js.symbols": "07c19b69fa5f53224712e8471c00344d",
"canvaskit/skwasm.wasm": "7fe5c39ff8466de52fbb0c66473abbe3",
"canvaskit/chromium/canvaskit.js.symbols": "100d192729121969872b80009e47a5b7",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "f9074e52c7e9c770f1130c6ed9e2677f",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "f312edac4fb4c74852dc1a4f069ab100",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
