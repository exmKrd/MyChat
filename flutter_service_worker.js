'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0c06e77b822a0ffd31a5737a220b3676",
"version.json": "f18e390d5c3bcef9e0eda94bf4e6bd3f",
"index.html": "5063bdff001519025b5f6629fbfafd20",
"/": "5063bdff001519025b5f6629fbfafd20",
"main.dart.js": "db2d7d28befaa95c98e6ce7315404cda",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"README.md": "b5a2a1fd5b9e57505bfc7072ef31700a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4b3e57efc9377f92fb68e3b41cfd00da",
".git/config": "11ae8c83c4aa03010d69c353cbb33058",
".git/objects/95/3c43d94bb810ed814de7bb02ea2a889e39f8fe": "831b9bf30231c1639a177626e8d7f04f",
".git/objects/92/a894229217ede9ad6eaccd96498e9ee085db17": "64524dbfd1bc02569c31192cdb3ad39c",
".git/objects/0c/3e05195bec912d226099b5ab51d74d1c661400": "21a7cd6f9db69860175434d8e6c98d6d",
".git/objects/3e/f344924dacbc1bd6e8500ece4a3d3831416d4b": "3135eb7f2dd948a5bcb2a0b49d562912",
".git/objects/50/d55954569144f8c85967a10fd2d26da1afad20": "4ffe4174a7d85b99ddd9a31e258c2d38",
".git/objects/6f/b8d5f8b762f8a51e9c14780ae7b0d1fd53a254": "6fa8de0c7ced7dd9a0fd7606cc9b6c86",
".git/objects/03/76c46e580677d8c0a8fa24c278444b28e71b44": "4cebd2c416e07d116456250ab77da5c2",
".git/objects/04/dc5df169699c4b4a27209ef3e861f2a03816a5": "8f495bba8791c78c9033f7d2e8fd5157",
".git/objects/6a/b7c6bbcbddca55572145c26989e9d8fd51d59b": "92408172db2b23a5dcfff721e2a27f42",
".git/objects/69/8601b30e9479a7ac572ec64c225a1dfdcf9fa5": "ff7f74e2a2c40902860353acba4e8e00",
".git/objects/51/71c17ac0aa6e148005d9de95700b29492e9c01": "3d3cd75b96c3962a9b251366d2a60342",
".git/objects/3d/eb0d5620fd08a1323cc11962069893cd34603e": "8af5dbdf9775a2aa2e9c6139855d2bb4",
".git/objects/3d/386aa646b219dcdc6bd623de8b7c965c933519": "feb4d32213874f3c157fec1a6a8806cc",
".git/objects/3d/21a608ac9b7c2ebd029577be3778054d22a3b2": "ea7286738bafa3077c6ad32d1d391667",
".git/objects/58/51c03bd5ff49241c6e7a03bd59e0d2e8e6634d": "5d4d09c235c664fc435fd47bf723f62f",
".git/objects/58/02498226afdea04f40d3f00f0dc99158d8d2a3": "071c3c8f789045675f2ebfb202ac63e2",
".git/objects/0b/cf0f0091a5e04bf2a1c76a51f4f7f8231d60b1": "e5470a043f87a52c7c732479c4b62a36",
".git/objects/0b/6dd90c48c02ca1c36e65e6f6a27833ef51a424": "df824238f2e221632bdb5fe390fc6dda",
".git/objects/93/c585d5664b98cda47b411167b899339ccaee43": "9d9aa4da8afd8fa6161a6e8fc6db5fed",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/da52a07fa7b3ee83bea96cb6edc3890aeb5cc2": "c7c2711edebf75c5d9d2a083b05f8d32",
".git/objects/60/677d0d2e6ffed6c96b4a9ad5d29a2862e04e1a": "15490e04c0c41f1a5fc33680ba650825",
".git/objects/9d/bc8209e0ff2eda40058f783c7e16311b4e7c0f": "b289ac8abc3a597c7212c41bd5c94116",
".git/objects/02/499e94cd6147952b0ca9043e0d23f9feb80e1a": "eaa80ef010e5f4812eb99bde3fcac98c",
".git/objects/02/30b0ece6dd5907647e6d773ad32bbc8ac3979f": "e49802bec71199fdeca663e0c3db7e06",
".git/objects/a4/43aea5ce85196e59dbf6a3efc91add757cc682": "15b5692d89e4d934cf8009a3aa6b5036",
".git/objects/a3/e1e81fe046327f166d69075334f671470f372f": "fd060d1a1a2a39299cfedaeded20169e",
".git/objects/b2/03718a7e912fc61bcba662366cb1b16c2a5b65": "65a381e6134558cb661f6fee905d63d9",
".git/objects/b2/c09ab634197461f0bd89302d8fcf08ff28f14c": "1bae0d67abcf9f56fbc731e3fac38a76",
".git/objects/b2/eaf21bbc7eeb0fd1f9922ea34d511bf945e2ca": "c9f6856c9b5e61b3523425f5e7c50607",
".git/objects/be/543d4ffae2b216bbf4b128c6b20e4b765af4f8": "3bcfa4a2558ed8f6daf36132ade0c77f",
".git/objects/b3/6f7d4e4a24c254ad98e74a14c7c2ca1d7fc9ed": "05a1544d353421b1373c924d7b67c850",
".git/objects/a5/f76218aac278978ca4a91040b28abedd07700f": "667b0763f29efa4d83c1e05980f385d1",
".git/objects/d6/a5a12afa546fc6e6c1bcba639b067f7dbb0774": "92546bdced300534c5ca64c87626cf0c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/d09f8fd3feddfd7c5aef6e21082e446b7ee2d7": "9e481a4d3f60188228cd05b8d38e98f9",
".git/objects/f4/defa5513b93f8f3ef62a141e63d7c05961c93c": "81b02682ddf479881fd0358f00029b1a",
".git/objects/f3/0ef0bcdb0dc863b956feedff7f9640c768c00e": "7635af210ab900d2f781fccf8cae9ccc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/7a9802e778f859475c0744ba8e42d0cb0ba893": "359dd7fedc068f0205fd81b8703523a7",
".git/objects/eb/93e7c79b5c89352e658d8b67153141b8441b39": "034d0d9188f517ea9fef3824c6c0c4d1",
".git/objects/c9/69624f7379d55ed116cac7dca54996bf544c46": "c83a934466200a58823885579694a5d2",
".git/objects/c9/f58dec2254cf21a89f528d97c78c4eaf4c88f6": "9e3bb4b0f81f56f9fef63a0fa11e6209",
".git/objects/c9/dd29df5ae0ed6d064055acb0a34a714305695e": "b5f47aacb7e4c6fa8ff38e346544b9ea",
".git/objects/c9/0196bc0df41d07292e51413425fe700ac02c84": "d2608cdc230bf8af94b6e0a8118041c8",
".git/objects/fd/d0407e6feb7b3fd4e7b2fa26101e242576edf8": "7f8678dda60ad4b1ebaca1786fc4231f",
".git/objects/fd/b9b24d49814494e2115862bc72aa191dd0897f": "c1ae50d481b4d07b9a07cd277c76d406",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/d7a9b2255cc22244e2187c74af87dce2ba8e0a": "f7b4279a5f5aec26ce45bf966938b018",
".git/objects/f5/bc58596f3410374cfd1b0e81b8e59cd832af6e": "74b9c09a951e565f9f2090822d07f6d5",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f5/0a7e37c75f4e4ccb58aa320829b728a05e3e54": "63f8215a9d261cda64c12448e84bf9ef",
".git/objects/cf/dc623bd52fcc1e8617dc6153e362b60b224291": "4d9244ec352fe53aa89482e6398be241",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/28592e12cae9dace4ec06353e555d809974776": "ca8e4f8c449b67e0a940fe4d200894dd",
".git/objects/11/54cce83839f91e4a63804274503b961d9c0780": "8691dad21f2f8e9167a112c6ded93875",
".git/objects/7d/62fa8a4420ec13af843bd6ecd8a1fc7644923b": "3edfa65f0aaea7ae3b5efc39ca80efd1",
".git/objects/7d/a3b0027813f76733e6688f779e4ce25c1cd0d8": "3f362a9750ca831bc4591758f85300ca",
".git/objects/7d/debbd431c94c129e6fd5277718262027dad5ad": "ea676ce89a19645ced540174bd3257c9",
".git/objects/16/9f0fd9299b8c21d45b0d3b932d19cfcd578072": "65b186e1ff5d036d4e54aed9d52e4d51",
".git/objects/42/a47f944c973aae4b0e0cac7a9971032c818ac7": "7e02a4fc8c889a7845def78875a6bb1f",
".git/objects/42/c416f02952bacf23cce387bfbbc73fd4deb5ea": "1799759f472e3c5fe9b551388ca4eee0",
".git/objects/42/1e128aa793d56099a0e113ed5b1dd2b6ca70b0": "0048d91ce54ac58e6289a5a50520f8ed",
".git/objects/89/dae1d67435f178123802a0d7ee6c58af93083a": "44a6a4263572c9e09776ca76e6849333",
".git/objects/45/b758818c16ea3210ce2393ec7f63ff0088c5dc": "3ed25d75e1c79ee03341ef9d747e0556",
".git/objects/1f/3c892bbe0029bd5573b07f625de4033dd2cf00": "b0f41d60181e712cfac5a387d51bf0ef",
".git/objects/73/d6f46c24fd64f4f526def2caca0a373a5edde8": "07f3ed31116647a8cf737850815275c9",
".git/objects/80/0a6129604a902ff98a5cf43666724aded2d0d7": "d738e86b9eff40fb650a75a3c684f3b4",
".git/objects/74/a262240fdd3e243676a9f6c9726f08dce41680": "675b8db6644b2f4893f5f4b3a4a0a447",
".git/objects/1a/3f9a7bb75ead65dfc71eaea6249d3db4f38f24": "3db24df7654a4df3d7effdcfbf5cc7e7",
".git/objects/17/c8f34e4d741675a0865689207d2118d89317d0": "f95eefc7d658d10aeaf02a8211eaef19",
".git/objects/17/5893a3564239068b5c106447f3957f7f271a05": "21e34894503990ed64e65cfe17333729",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/19381bf17a7c7960479f2ff2f8e6f05057eb14": "51a6636a4d3ccca15dbdafcce360770d",
".git/objects/7e/85389318813c6a1605635a06dd087d94a404c2": "6be71258984a7eefece4a14651692784",
".git/objects/19/a58a73532b7024c166ad32d67197845c92e408": "0a7f9c1d14faeb4740d8db1101e4cee7",
".git/objects/4c/70ed406fddc459e38d10f3aec6ffdc8a4d6f2f": "531f212dd8b66181f9fb02b2bdc844f9",
".git/objects/81/03b514d702708c6a79618003e73751028a0579": "7d997cf098c901ee4bd890b5ba14b7f0",
".git/objects/81/6de416e14b0f71be4a1c3a2fa80ca8470be450": "fb4cb32bc4db8cdcc4c381f0dcbbd96a",
".git/objects/72/7e814096d166182b9be2b7cbbf12c98ba8985c": "6e232627b3a7a1e080fd670212624008",
".git/objects/43/79229788b043f23f28493f6ba2d46b10bcf7d2": "2d48281de5af6bf9f6d3e4ada4219607",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/dfb60b325a2c853e8c8b8e9b08dfbf8747e0ab": "08ac80275d465cbb928d22ffead4fede",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5d/7e2f034ae9ac3fcef9d8a063c550fa1d1a4ff2": "4d7a5e0e7c48431cbf5406972cb86782",
".git/objects/31/fc096ee30ec228dbce8b57ac7c64bca081e2e2": "f8392da4a14dea03b27bdedf98b01e84",
".git/objects/91/15f3094293c9e9e1c6da93fd992f1efc71d67e": "16da7235c37a3e203c148e47450932df",
".git/objects/96/339a40787f8fcc46e6af953ff4fde7b1daa087": "b687b5cfc27283f22e2a1fe61b4defde",
".git/objects/3a/1004bd736de3fc081a670cdbea99f4b044b0bf": "75b0b875c6017c3d738e188c5c6d165c",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/54/7185e8e8d961a3875d9f486e67624c97d1d0d9": "f8f1a0ebea3a6c0716aa8042bf888af3",
".git/objects/30/823a9b6481a3972624ad1dfcc0f52d9d0abf91": "2614dadd9e2d746c1735b805f44d7d90",
".git/objects/55/55e1c256697c0b7af838dd966f6c3c3f552bb6": "92c316aef8dc49351e59bf1c9e567682",
".git/objects/97/278b53172a274bf46dd382c163621dfd2a63d1": "f7767ab58256ee75b88762621473b7e9",
".git/objects/90/cd91a56840674ae0623283d5763e29852c179b": "be4dfc8caed18fcb4fdf7f594eef9629",
".git/objects/90/8cdf9d0e9565a733a5a38adfc8687365586b9e": "ac0e0f9a5ec6159e2bd9671727040e2e",
".git/objects/bf/2ca4cbecaf70140183c27f18ba14df63eddfd4": "0e1328ba8d496931acaf067105f827bd",
".git/objects/d3/65ce018cc8a9b47c67583b768c6f470b6a4152": "71fb3e93e0bad13ed71da6ac3ec2cc0d",
".git/objects/d3/b1d2821df05468563fc8e79ac927d0fc2bae1d": "ae750285c0dffdc2c6e35e6f6d688667",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/5159af784275bab48c07082b63f9aeceacf7a5": "6ff9289a45907704b287e4a90e0eb1ce",
".git/objects/b1/c283e47be06f6ab8bb98ddef36458f1fa50d96": "f7dda3ad7a5e435027a6a3de80122cbf",
".git/objects/b1/a79ca0d9efb1653f68bba0896ac862917e3553": "5ceaa11e1cb45165d527d97bf4bc1551",
".git/objects/dc/40277067435e2d8010190bd45671639dcbfd2e": "764b5e95912757b997426910ee302755",
".git/objects/b6/6a5cd1b8cf37ebb251ff55333a491e8b638364": "6686d20e521deab6694a941ceb19ed9b",
".git/objects/aa/51063b526833031387b77f3c23314e41666500": "055f844327dfbb616e7c438a9d4a2c3d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/f9f73c865d56687018b1ab3d6057e86b0e4556": "344afb3aea9a46d28525209379150d0a",
".git/objects/ea/0a6cabbd528ec8f4b1de72e032e5980475cc46": "74c542e131d646b6d78e019021ec1a11",
".git/objects/cd/4f97f37b3fe0a0cde67031169177cfbd79481f": "912558e3a00730f8871d3284faeada2c",
".git/objects/cc/9928bac9bd9bdd959db68837fc73173e75ac5e": "dfad70ac6427a1ff77a329ba0af73bf8",
".git/objects/f9/79e8bed55a6eda4f7dba98eeb4ce6297f4f837": "3c223dd20ff3268fb1efd92228a9dd73",
".git/objects/f7/248f839f0b393f38b59c915a696618868534a8": "a650b4d1344708271962d8f072d51f6c",
".git/objects/fa/930a810e4585a0f65bd0aeaad3352290299b0f": "d44bbe1ad7194b11c631fc9e67aa7ef4",
".git/objects/e9/049da964c06bb02626e61acd3b758ffa7f76f6": "d89e31642561bf8ec87b8c3f10ee6218",
".git/objects/cb/19e8c1289ed32ffb2b8836b67ad3d9db2c4c1a": "c9f32c34730116380a3f5d283a1b5ce6",
".git/objects/f8/3335a76a28237a1c42e7472ceba6d9e8d755a9": "af3b69bd10381f4cfc29c35e97949f67",
".git/objects/79/a36b5f62cd23a290ff6ee78d905eaf4e9222fa": "99338355b730cf9caeb0c51841e16d8f",
".git/objects/2d/4623da23bfef3f19095f601e597ec5c9015157": "cbf22db650eb9d80f8bf38446a090ec7",
".git/objects/83/326c28dee16f5fa70810828cf2578da22e775f": "d1368658dd5e291115eceaf0d95dbc93",
".git/objects/83/fccb56816ae09bf86a5d408030dc0117823363": "c025a4822cf4f3e71c14d4e1b9554c3a",
".git/objects/83/95ceba4c1a97d1fbfcc9c97d6ac199e74f00f3": "e44774169f555468f8e45804901be91b",
".git/objects/1b/6205d5859cdfb8a1f25d921c03ea03c92c46d8": "9a7b1e60e403540f7b406bc6fae8d7b0",
".git/objects/77/ca8617db4042d2c99e5a2cef6a88c9149b1a4c": "d99e45508e6f2f5329c15b66e739a8ab",
".git/objects/48/fa69fe9bc8f03cfb01f76a12124f89428c9927": "52721cda327568e6b7ecd8123b826fb8",
".git/objects/48/1f02e5cb0f2ed33e1724b96c3d1da368a0e362": "b4d64975d1a0040cc962e5db667cfc4f",
".git/objects/48/2de298ec92db581dbee776d8add1b5fe728cec": "f8201d7a3137f5b2973b5def0c9877d9",
".git/objects/84/5827c151ba02bc34f05bebba31d56aa6c484e6": "d87f5b14d1cd74ce030a7657c02fc1c7",
".git/objects/4f/9d5e934f83d2a969505ccf04797c402dd4776e": "639d21d0c2544e9ecef608db972502ec",
".git/objects/85/067164b32c9d8cd32d3aaa7adbd23f07067564": "f5a53c412306bc33cb6ebdcf20f05f72",
".git/objects/1d/e5056abee9a6f7e6980327a3fc865fd696f4ea": "8810832c87833e7b7aa2855111a17ec5",
".git/objects/82/055b849c023871d3ad55d7334a22852e7ed0fc": "c733476a7107b66031f19f13e2fe71c6",
".git/objects/82/1d4e8e0b6a27771909c8088b1fcd40d69332ee": "5235bf0a0670eefc51f3c97d1f1e904e",
".git/objects/2b/9a1dc2e05db0cdcf2cbc01c5a59a30f48cacc6": "2e0311062fb9ed5fc7556ca14c10a946",
".git/objects/2b/9eb242c85fba0ea4653a1d69359a5fa5874de1": "a32c1fb49abd4d8956da59f4a9708ed2",
".git/objects/47/b30a54d874dd192dfd3c48f7ef69b42c0123b3": "d400185c78d0cf6ee117834fc2f68ff3",
".git/objects/78/6c0f5684b9ca9873c82b082b9f3ede6558733c": "4d930c3335dd96f7846459d19739a48b",
".git/objects/7a/2374ab656bbf7ec509c85026b706920ba73b2b": "57fda77f01f20481020d53f08f10a600",
".git/objects/14/17bfec2af42b551ced1638022d39023ea140d5": "e1916844cc6124493becd52459e06fe4",
".git/objects/8e/ed0e33ade90ca4027b038aea5a3cf2fe8ba6fc": "896cd79c4f51aa7eabe96ffa8413c878",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/objects/25/049ffc8029d40ef8eebc39253692d013b56cf3": "0fecd0a2d61844ffbecbf024a1277ff6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f0c689e594ff874ddbda66860d7b1d0a",
".git/logs/refs/heads/main": "6824f5a76064295fb014375e9cfe3ad3",
".git/logs/refs/remotes/origin/main": "a200b337e21ccba87f8d9f6bcd754a69",
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
".git/refs/heads/main": "290e24f6ef8511b1ae8596395f0c4840",
".git/refs/remotes/origin/main": "290e24f6ef8511b1ae8596395f0c4840",
".git/index": "98eb1b8e21e0069a0428dbdb426d89cb",
".git/COMMIT_EDITMSG": "6c8986903c7d74235d5d284032821e7a",
"assets/AssetManifest.json": "18e2a20b055a63a01074aa33f6207635",
"assets/NOTICES": "5664fd235c6caf79143f007fff4172ee",
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
