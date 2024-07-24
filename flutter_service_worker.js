'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4c5605d09b2d7bd599869ec2180058dd",
"version.json": "f18e390d5c3bcef9e0eda94bf4e6bd3f",
"index.html": "14c2613159767e4eb7a924ab75dc51c8",
"/": "14c2613159767e4eb7a924ab75dc51c8",
"main.dart.js": "80abd07ffdd4ab69d044f450dad5ae97",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"README.md": "b5a2a1fd5b9e57505bfc7072ef31700a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".github/workflows/static.yml": "6dece455dc91e6f867499fabc7ac5be9",
"manifest.json": "4b3e57efc9377f92fb68e3b41cfd00da",
".git/ORIG_HEAD": "6cafbe2f689e54e3922d07899562ec83",
".git/config": "bcc9fb460dc8872f1db3712f691e1776",
".git/objects/59/25e526d38431024de8c7bfa386ad57f53bc561": "6653c93bf65c7857e8e7eb8bfa1b7c86",
".git/objects/0c/1e4486dff424ef5fcead1fdd0c824ec81a5874": "e472eccef64b827d2ffe53cdd5d26fc1",
".git/objects/0c/09b3440e72d01be64e3af47c4bd28dcd2e3f21": "5291eb6c942ba544f6e136e438dd2717",
".git/objects/68/f3834b828950ff38ea1e1a735a74ce7df40bcf": "9577823beeac0c07c832fc610e137268",
".git/objects/57/cac29f13589bef9696e0834b032035c4204793": "07848d5f2c88ac81a4437015c7c81a61",
".git/objects/03/e6cd0e4c8cc66e718e19275b9a01aba3e31cc7": "452928692a2d59c26b50b961f15180d7",
".git/objects/9b/be03f70eb8961c671df688d4fa077d3237644b": "cb6b5b78b162f4a4abb1a71b3d74d297",
".git/objects/9b/c5b6c15a8237330e687ed4e0e06d8561d70065": "2e43379d1a0efaed98252aa2d903c1ed",
".git/objects/56/570125b4cc11dd63255ebd8215b13493a2a177": "5e83ba762c5b1472197b7cafd11f59c4",
".git/objects/51/8cc87890d3976fa9fffff57b3bc8e131ddeceb": "8eaee418de59566996aac2989dacf580",
".git/objects/3d/21a608ac9b7c2ebd029577be3778054d22a3b2": "ea7286738bafa3077c6ad32d1d391667",
".git/objects/93/c585d5664b98cda47b411167b899339ccaee43": "9d9aa4da8afd8fa6161a6e8fc6db5fed",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/60/16bfbeaf45d75a9292babc198af06a76115986": "15d148414292a6c1b5572eb0fd6e1073",
".git/objects/5a/a4468af62ec41f654f2d797299a9fab7bd7ad4": "408ee125544bfddb434420287b55fc6c",
".git/objects/5f/a9265231a7a8765b5b839ad7ad8ba5099384ab": "d728b67c22754ee66aa6b4eaf6d8e926",
".git/objects/9c/f19d2b7a86b203fcb977e102ef60745b0ef905": "a2065f91b46cb15907a1d544af09a8bf",
".git/objects/9c/0ec684d6b11a284ce8218dccd5fa2bf3f9f3d0": "2ce9686a9746ba4461653ba8130cef2a",
".git/objects/a4/7c23d9efd22638cf034949dabcca9fd045986f": "af7aa5fa503ee5115a4097be096d66b8",
".git/objects/b5/7b67c48b0b9147bf58b73782211f6dd234f53a": "ee7e1b4259b95d9c3db063031905ed55",
".git/objects/b2/6bf99de2af9d62c4b4657be944c161c192f2db": "42236a2ad1de439a82ddbcee1eb3b7de",
".git/objects/bb/d7d32e9b56f50beb589903e2f7bf4131c412ef": "b2aaedd9df976e868790ec4b8d2c1b3d",
".git/objects/b3/bc5844a78d43ff1d287647885d82afb5472234": "5e0b9ce3b68036205cab2fe5f1b92eaf",
".git/objects/b4/e466c9dea47aca9b8678ad9d8cacf0efd65abb": "1ae14e00678f8aca58c2c363a9770a90",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/7aa6999575f91c14392d8c502f898131979d9f": "3b60806bc0443819f58a0751b7b43877",
".git/objects/bc/224581a74ef0c9ecbf108f7913e44fd29b9c11": "53f5b53e912998afe8e2b3ce85f91012",
".git/objects/d8/d09f8fd3feddfd7c5aef6e21082e446b7ee2d7": "9e481a4d3f60188228cd05b8d38e98f9",
".git/objects/ab/daba874287ea2186cdef13d042e09938b686e8": "a5af5c7be9d801882670fa22715d92a3",
".git/objects/e5/c0428a1a3f508488c5717ea8585bb07904a199": "1cb15978e30de94e3c691a5e9c4f3772",
".git/objects/f3/0ef0bcdb0dc863b956feedff7f9640c768c00e": "7635af210ab900d2f781fccf8cae9ccc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/9fbc2ce61a1725b785065cabb1f99ff5c5df8e": "814ecef8bfbf2b4ad4133fd2de5fb0c8",
".git/objects/ee/71b2d476f162eaebd5f5d3a38d9968a2062587": "5b629c3a1de4629ac935e623c510f415",
".git/objects/ee/ae2c25b14e5f4a046ee48851cee10b70ce9c8b": "035726690a323cb016c0121c0fc21193",
".git/objects/fd/21b8522e969053a4fc8108ceb1221679702a46": "8e2b7fab3b510e4e2605bd80c58e47f4",
".git/objects/fd/b9b24d49814494e2115862bc72aa191dd0897f": "c1ae50d481b4d07b9a07cd277c76d406",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c8e1064a8679fe58449db1d5e277affa2bd758": "8f362c2aee067d00f736499399832722",
".git/objects/f2/d7a9b2255cc22244e2187c74af87dce2ba8e0a": "f7b4279a5f5aec26ce45bf966938b018",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/c1/8006c043c648e58486e714897767cbd90174b0": "74f18e09086b0948a1b1c87196686d3a",
".git/objects/ec/da56e5742d79abc9d1770b638e50db2f0c3d4d": "d6d3dff137bb9c7bad7b0e82e38188da",
".git/objects/4e/f67dac0a2362d6cd44f39a566f172c1229e455": "776681a2237be52b9c2b5fcf0b0fc451",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/08d4545eb6b80484cdb711c1882260a0b1eeac": "0b8e1af0ca63649c753d26c37ab19fbb",
".git/objects/pack/pack-6da43276b81eb14a0cc0d5131894b42b8f7b660b.idx": "9dbe633b4e9ae1fb73aeaf3b0d276f5d",
".git/objects/pack/pack-0387c95712fd9e8300fa0ea5e88571328f4569b3.idx": "4dc7953b2065304119beac5ad5a70dad",
".git/objects/pack/pack-6da43276b81eb14a0cc0d5131894b42b8f7b660b.pack": "ac679cee0af54d0fa9f6daa7ccab8bb0",
".git/objects/pack/pack-0387c95712fd9e8300fa0ea5e88571328f4569b3.pack": "96ef0c696f40e304d152d407b79c3e7f",
".git/objects/11/54cce83839f91e4a63804274503b961d9c0780": "8691dad21f2f8e9167a112c6ded93875",
".git/objects/16/19ab72bc154cd8b04c8160a280bba9281fbc8d": "98e41239e4e852b0534e1e6b406adf9c",
".git/objects/16/e5dd63b99e47d193aec828145cc511f1429e7d": "2b7d98768cff18195360ca47b5a83f2a",
".git/objects/42/a47f944c973aae4b0e0cac7a9971032c818ac7": "7e02a4fc8c889a7845def78875a6bb1f",
".git/objects/42/c416f02952bacf23cce387bfbbc73fd4deb5ea": "1799759f472e3c5fe9b551388ca4eee0",
".git/objects/89/186ccf39655b6975e9ba33ff5592f3af27747b": "4d061f2f97d067a121453ef7e680e506",
".git/objects/89/dae1d67435f178123802a0d7ee6c58af93083a": "44a6a4263572c9e09776ca76e6849333",
".git/objects/89/2ee9355dcda2043801f91c767ea365f8d27922": "305c52210d4c36d9587b6e37a64029fb",
".git/objects/45/54e545bf76da6a261c49b69afc8771e5c25320": "c71e4187b277796b6c7a696f80cc2a1b",
".git/objects/87/2e4d87295b07c805188116c4a4f855ad22cd07": "c7b79b84296e7da3627dba663a6b8e26",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/98a0a221ef904af338f0bd8bbd987dd506e6e0": "787448b037cd50d5185b1d1ea3b72293",
".git/objects/7e/19381bf17a7c7960479f2ff2f8e6f05057eb14": "51a6636a4d3ccca15dbdafcce360770d",
".git/objects/4c/cbf086a837946cd95da808b9db2bbbb26aef26": "422c6a13013b237e4695b29f8b9a5061",
".git/objects/86/7a70cb157839c6fe6ae54f3292c0226900423b": "f10a15888d9aa3462fe588c99bbafc40",
".git/objects/72/b3ad80d5e80cf8a9072710646117503712b9cb": "5625a3e463eea5acec025072266287b8",
".git/objects/44/4ef52ca11dc70b47fea5a58ea9807226c2b736": "776fb1430da8ac56995b6d078e461ebc",
".git/objects/2a/a47d1b11e320b05f50e518fe0928308f9e8ce0": "74a747f09d247d75660846c170560632",
".git/objects/43/653526732c675dd15af2a9aa3ca34c1e4b5c12": "e9b59ae0d403b2b1da33e0fe97e0edb9",
".git/objects/88/e3cee0117388630fd03c26fa1ba8d19025b378": "d3bc44b848d9c6934b8b9160542298b1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/41d0a4576a512be2f4a07522dd6772432c8a84": "de50dfa8530f8410b4d7c44a09446f83",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5d/7e2f034ae9ac3fcef9d8a063c550fa1d1a4ff2": "4d7a5e0e7c48431cbf5406972cb86782",
".git/objects/5d/5aed9b60fb603c6b03ba3167c625a36249674d": "199b8126ac4636cd7075dc7c1560927e",
".git/objects/96/86c8b6d49633240d270f7508a10a65651d7e50": "b174edb716ba8bdf05d3245bf72818d0",
".git/objects/96/0d601ecdf63d0e225af5b4c8b59d8ae088830c": "25c4c9ac6a6f9eab9269ab056643b872",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/54/d6a01a5c6efd0d3e37114445dc300ad26683b0": "9989d0f3d028cdbc5a80354f8ec83b33",
".git/objects/53/5404ee1810c45d9c4592ac3985d33218ea39a7": "4548c23f3a86f40d00691b570f8eea13",
".git/objects/6d/449d84332f0f6acf606a0c19e728bb20076295": "791229778a5a9de5565eaa268dbde1f7",
".git/objects/6c/76c0805ba3fffcfdae3476e65bd9377892a19d": "a4f6b22ac2807a61a75ccd6725c8613c",
".git/objects/55/55e1c256697c0b7af838dd966f6c3c3f552bb6": "92c316aef8dc49351e59bf1c9e567682",
".git/objects/0a/b9a25573f88cd3d00b3d12ab0c048ed30d7d0f": "3f0386a8d542d4c4eabf52eece6004e0",
".git/objects/bf/34f58efec18c1a6de5218c03e0b79cb347fbcc": "6af87cc19ff2f6440bb2a0f2c61bf144",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/69569770ddd9b867bb4a81fdfd25b90591e729": "74dd65987ef3e035266ccf228d06b93f",
".git/objects/a7/e978e656826c47cd1b84fc74e5c08c4ff50644": "dfe8ed503e4db5dff8a36ac94b9b9e89",
".git/objects/b1/0dd66e78a1ecf70bd37463136b053202ef0de5": "c12e6011a7bc5f39ab65a787cec3e42e",
".git/objects/b1/c283e47be06f6ab8bb98ddef36458f1fa50d96": "f7dda3ad7a5e435027a6a3de80122cbf",
".git/objects/dd/5f9f2da40dfcbe954057eccbd1f5f391c756fd": "b98d6586e7cfda93087ee522231b475d",
".git/objects/dc/7809d10bd8d6475f05d3bcd6e1f6c9259563cd": "1f6fd2df1f2208d01a83163c900e4606",
".git/objects/b6/6a5cd1b8cf37ebb251ff55333a491e8b638364": "6686d20e521deab6694a941ceb19ed9b",
".git/objects/a9/83196228ccf70816d110a0c1a1af1963b03cc9": "83114bfa5f729e2d4cfa562fd58187fb",
".git/objects/a9/99bbba8cc401bfad43090169b9d75b6ce40560": "61134ff64a5c8d37c8cc112e53c02c4c",
".git/objects/aa/1576dda6f4ad8de6f9b8784a679326fa6dd658": "9791beaa2dc9e16eb1b6944056072ef9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/90b2a31aebee50287012e2858187ecf5dfe4d3": "c1a8f13efbbd4bc2150a5cf557fe656d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/ae712dd34c0d7d0d6fcee0797728ccc9bb048c": "7bbde4ac674741333259fd6102fe9896",
".git/objects/ef/e59ba096a573301a101f6d2643e8fa26737a43": "34627007cab7bc39c7962814e61c856a",
".git/objects/c4/c9eda35aa7207ad4bd3ca3b87ae18028f85662": "a180f57650c1fdc5d7dfca2804f53b3d",
".git/objects/ea/0a6cabbd528ec8f4b1de72e032e5980475cc46": "74c542e131d646b6d78e019021ec1a11",
".git/objects/ea/6f9ad340258ec76768e488aa065dde30ed6460": "b72c6461c7b4dfb4660612661be491e7",
".git/objects/ea/42930dde1fe1cf46df8012c1184fcdf6345b44": "e2656955efbbe5fc6c147a6ae47e049a",
".git/objects/e1/66503463f9ccefed4ac27b4099fc6ad56542eb": "633cf5e8937f18975ada9eae4859d220",
".git/objects/cd/8442f7bc0cdbf222883a474cdcc79fe6defc04": "3a77e418881aaa2673071ece2036a52c",
".git/objects/cd/996361cb52d634b76557a7ab7724696f3ee167": "d1aa04300d08e22a093ad54c4d9ace8c",
".git/objects/cc/7e87d239b0d75cb3b5ea1ef9c2da344b22748b": "507c081dbf10bbb7c8de663b3bc3b409",
".git/objects/cc/24c103de1a02d7f714f358d3734b72626296bc": "1697582f3a51325081fa43bc86900ba7",
".git/objects/f9/79e8bed55a6eda4f7dba98eeb4ce6297f4f837": "3c223dd20ff3268fb1efd92228a9dd73",
".git/objects/f7/248f839f0b393f38b59c915a696618868534a8": "a650b4d1344708271962d8f072d51f6c",
".git/objects/fa/a5d8416f1343f21d88bc41174e94c776220dee": "aca2aac8168854060458a100d991395b",
".git/objects/fa/9cc48d3c710243e22b6712d0c2309ead83fdda": "cf5594a47fe643aee3949f05d902dc9d",
".git/objects/fa/eacfc4c1667624cf6e0e0bc8d9d3dc1f4a3a3e": "5d949054f39397ed8f1269934418d42a",
".git/objects/c5/83a180e5cd0d9f61c98ce91884edac63074e6a": "b895e110049586a887a5daa8b70c3282",
".git/objects/f6/f7fc2763f7b5a29e13b2de046f2e8f818c1dfc": "e4f87a735f8cfe2414094e242e7466f3",
".git/objects/f1/cd8f59f0bc086e24f7ce737134047a519e4604": "46e7f7ddba38a8a97bfbe66ccc2ab582",
".git/objects/e7/2cd9f2413786d82822ebdea463d2c3d49d514d": "fe770f949f51ee7e5df80e335e8dc5e4",
".git/objects/46/6a2260832b7aadac7a90a556ad82e9a8b523b1": "9282557108da5558ccd4befee5fa1f05",
".git/objects/46/6d2f0f8fd15e4e28d6f8b875d8b28733718779": "3cd42da77708cb582fbc7d75139322ac",
".git/objects/2c/91cf4a566d29288f223ef945a772778a01a94f": "3abcb660903570ac1a63c2ee209f1084",
".git/objects/2d/4623da23bfef3f19095f601e597ec5c9015157": "cbf22db650eb9d80f8bf38446a090ec7",
".git/objects/41/47719810b53e58ab63dfe9e8ccf1324265c461": "b7b16dd0b85c1e651404befdd7afcffa",
".git/objects/41/18a1c6042e571a8f5bd24ddea2da3e8aef11aa": "cb9ae1402c2431dad88966aa21d4ddeb",
".git/objects/83/95ceba4c1a97d1fbfcc9c97d6ac199e74f00f3": "e44774169f555468f8e45804901be91b",
".git/objects/77/ca8617db4042d2c99e5a2cef6a88c9149b1a4c": "d99e45508e6f2f5329c15b66e739a8ab",
".git/objects/70/16bd6d30384bedd05df7f84dfddecbc9fe494f": "d1b6f2696bce4fceebc23d0b8117c72d",
".git/objects/84/6c6b5f3b870324959591e28bbbb66a8764e1d6": "88b1f6d9fa12c3d5602db5d0d75ad17a",
".git/objects/8d/50345cd00027538abe03f5214c972c7b303859": "be15908db4682f0d246f7f1f99d55d12",
".git/objects/85/a271ca8c85af7eacbdd7cac8f36ca92e1862c3": "af2b33c98ea3602c421ddad09483d052",
".git/objects/1d/05b274560df358acf2a4f4a379c703c1613263": "bf299d9e16cddf1cf20390b80e0d3ee1",
".git/objects/1d/745398bab840eefe24c67cc30fd7824bfce13f": "aa9d40ea42041db5c68b4658234f6bac",
".git/objects/71/f1e507af7e11bf8e095d0a4c3c367606edf0f3": "ca38acf024917ab82594d169b0faa655",
".git/objects/82/055b849c023871d3ad55d7334a22852e7ed0fc": "c733476a7107b66031f19f13e2fe71c6",
".git/objects/40/49ad81a2c6f813c67c5f892d0f042b11825639": "8ed3760865fd0dafcf1a6d1a1e658a5c",
".git/objects/2e/877d309238c503583e4aed1a2331305b79fa14": "3ece4d8b9cde64c1182197ad77502981",
".git/objects/2b/9a1dc2e05db0cdcf2cbc01c5a59a30f48cacc6": "2e0311062fb9ed5fc7556ca14c10a946",
".git/objects/47/fecc3870eeb40acee56f1641f9e233fd28f628": "02a372cf2ab07957a6d05810d7478da8",
".git/objects/13/43b4d5313bc843247c5e3c6cad8887277e78b6": "bf94962da45a572a29a500464c244e48",
".git/objects/7a/08d8c00d3b2e5dc3ab754c2d57948f07558b60": "00247a9b25ce50b99d436ff83bd1b857",
".git/objects/7a/b31634b1efb41bb31f175bd92cf9e094e0022f": "fe9404fa6535a0d03cd4cd053a162938",
".git/objects/14/17bfec2af42b551ced1638022d39023ea140d5": "e1916844cc6124493becd52459e06fe4",
".git/objects/14/db558164a191aa82d0412125fb0d9a47da250f": "e72047b6f4cfd0cd637ed9a26f051a3d",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/objects/22/f9884e2e7ed60ee6eae0488c5a0d0cc15763d7": "5a810bb86aa7e4889d2a27a5b00ae1f2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b9a7e6e0e0c13d35c67f0bd1d96a2213",
".git/logs/refs/heads/temp-branch": "e0b5379e18d3fcd74297a6799016a413",
".git/logs/refs/heads/main": "f171c5b6b7985732831b6788dc6c8ce4",
".git/logs/refs/remotes/origin/main": "98e472ee33ea16ba5aabe24c187eba8e",
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
".git/refs/heads/temp-branch": "dbdd3377d00b715d54fb359af77de74e",
".git/refs/heads/main": "5406ed3cb039b9cc6d53c38242148c5a",
".git/refs/remotes/origin/main": "5406ed3cb039b9cc6d53c38242148c5a",
".git/index": "7f112bbe2b0ef0fc75eecf6792f4695a",
".git/COMMIT_EDITMSG": "6c8986903c7d74235d5d284032821e7a",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "18e2a20b055a63a01074aa33f6207635",
"assets/NOTICES": "35f4a0ed9f8b531dd3af8928d408da0d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "136b16b42cb653fe3984168ee06239d9",
"assets/packages/giphy_picker/assets/PoweredBy_200px-Black_HorizText.png": "439da1ed3ca70fb090eb98698485c21e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d6bf67772d0bdb4fd71b33b9c898e417",
"assets/fonts/MaterialIcons-Regular.otf": "2dd7274ec4a245fea0450a2bb600f174",
"assets/assets/images/pdp.jpeg": "a05f5348f620b1faf457b9f1eda653d0",
"assets/assets/images/logo2.jpg": "0d7dc61685663feceb9f01b368fbdaea",
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
