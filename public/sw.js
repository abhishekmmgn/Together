if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let c={};const d=e=>s(e,t),f={module:{uri:t},exports:c,require:d};a[t]=Promise.all(i.map((e=>f[e]||d(e)))).then((e=>(n(...e),c)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"71c8771e0498c869df82d9e8cf727ef7"},{url:"/_next/static/A6FdOGSsnZIwHHxrKAHUg/_buildManifest.js",revision:"ea16ad30db5aa1d5a2d8af91e2917c6c"},{url:"/_next/static/A6FdOGSsnZIwHHxrKAHUg/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1409-3a29aec8b5292070.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/1817-559e987993683273.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/2472-3ba87007900b911e.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/3585-08c66a9efc3cb153.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/3627521c-041e823e4225cae0.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/4269-13a97aaeb69c8ef5.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/4871-e156738234728d23.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/5868-d997d779a4eb9bdd.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/8111-7be0b66cb7cf52da.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/8296-6566fdf187e3dd3b.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/8320-d82b1ef2e5c7a758.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/8326-9c0e17a59d6b3739.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/8390-601a43795d29d6bc.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/9081a741-bd3b045c025807ee.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/9350-2fde8a6b9a33ec9b.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/explore/layout-b105643356ee6ede.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/explore/loading-91ef254115a60011.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/explore/page-0ab0aee5ee7a4ff9.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/layout-e45bb6e5b68d9e5d.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/loading-e522946a4fc78d8e.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/messages/layout-1a5c6d61af8f505c.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/messages/loading-516e41914ac5e110.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/messages/page-0b5f414c108e5b6b.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/notifications/layout-d088c52326a38b8b.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/notifications/loading-e778445079832e26.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/notifications/page-0302257f110b1171.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/page-8ebf431f74cd1ffe.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/posts/%5Bid%5D/loading-13edcbb80b08b4de.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/posts/%5Bid%5D/not-found-1b2d84c862981436.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/posts/%5Bid%5D/page-2966d327aa90d7f8.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/profile/%5Bid%5D/loading-03cb74d2905b8ace.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/profile/%5Bid%5D/not-found-9944c39cb0a0cf3d.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/profile/%5Bid%5D/page-b42cd86f8bb27fd2.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/profile/friends/page-c4ab06f9ef011d63.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/profile/layout-b90cd6fdab946625.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/profile/loading-e95aa4ba744b3d17.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/profile/page-12069e21e092ae3f.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/settings/layout-e0afc239f131300b.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/settings/loading-15ed86841642152a.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/(layout-one)/settings/page-983c7249c13461d4.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/auth/forgot-password/page-e68f45addb0abc8d.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/auth/layout-2db877a836a7cae6.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/auth/login/page-21d6c4874c6d73ed.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/auth/register/page-38bbf8a06d4a04e2.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/auth/reset-password/page-273d34a3102deacd.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/auth/verify-mail/page-9efbcf3406e457d8.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/layout-108cf271758fb15a.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/app/not-found-b1c6dfe95bb6eb57.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/ec3863c0-0365115e64094e33.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/fd9d1056-3dda61024244be97.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/framework-964c2d6016b0d731.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/main-576fc37fdef05cd2.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/main-app-6bfbd1ac459f82c2.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/pages/_app-649ff3ad97b7cfcd.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/pages/_error-1a9fa3ac20787313.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-2ef94f54fa16fe80.js",revision:"A6FdOGSsnZIwHHxrKAHUg"},{url:"/_next/static/css/952574238b589cee.css",revision:"952574238b589cee"},{url:"/_next/static/media/02205c9944024f15-s.p.woff2",revision:"4cf1e387b8e1c64a73ef01c8d1e14681"},{url:"/_next/static/media/03b685511c0eaac3-s.woff2",revision:"46fec8ec22bfe84a9182cfecb0fe3fb6"},{url:"/_next/static/media/04fe87c30c4f76ea-s.woff2",revision:"472e8a7f3368235d9d26d7d10f094ff2"},{url:"/_next/static/media/0e4fe491bf84089c-s.p.woff2",revision:"5e22a46c04d947a36ea0cad07afcc9e1"},{url:"/_next/static/media/101c7b68f2d8b610-s.woff2",revision:"b5808b612c74810455a8c3b0575bf540"},{url:"/_next/static/media/13259ce60de2aa3e-s.woff2",revision:"66caa42ed220265325791d00e7d7ff1a"},{url:"/_next/static/media/1c57ca6f5208a29b-s.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/1e8103c5d17beb1d-s.woff2",revision:"6e5e6b35f2164d0e19ba31634d926ae5"},{url:"/_next/static/media/28be9e914c3ffaae-s.woff2",revision:"e319fa836ec1f43fc99375a33269e8bf"},{url:"/_next/static/media/3511fdf6750b518d-s.woff2",revision:"e85775fd86060618bd4125d14654c36e"},{url:"/_next/static/media/388fb79562c9fc54-s.woff2",revision:"dfa0053f38ab06be437d92f8069afda0"},{url:"/_next/static/media/3a04115668d8070d-s.p.woff2",revision:"d83f1599340e8afa7a36461059a80b81"},{url:"/_next/static/media/3a18fc8da1cdcd01-s.p.woff2",revision:"90550970095780af2d9df97c732853ec"},{url:"/_next/static/media/3d8af05b1dbb5df8-s.woff2",revision:"94a5fb88423f24f3981739bfbf345680"},{url:"/_next/static/media/3dbd163d3bb09d47-s.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/42d52f46a26971a3-s.woff2",revision:"b44d0dd122f9146504d444f290252d88"},{url:"/_next/static/media/44c3f6d12248be7f-s.woff2",revision:"705e5297b1a92dac3b13b2705b7156a7"},{url:"/_next/static/media/4a8324e71b197806-s.woff2",revision:"5fba57b10417c946c556545c9f348bbd"},{url:"/_next/static/media/4e4687409e533403-s.woff2",revision:"abe484542dba51a64b06c1cdd375bce3"},{url:"/_next/static/media/5263bc4b08c2f55c-s.woff2",revision:"2a38c372be842877b9dd592a89deb47f"},{url:"/_next/static/media/5647e4c23315a2d2-s.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/5f4dfe83faee04f1-s.woff2",revision:"ad8708422596f2adbe1a8c9a549ac04a"},{url:"/_next/static/media/5f90c536ae85dd38-s.woff2",revision:"4c086308102c21db827d4e8663d5e1bd"},{url:"/_next/static/media/627622453ef56b0d-s.p.woff2",revision:"e7df3d0942815909add8f9d0c40d00d9"},{url:"/_next/static/media/67e05ba3467b9f4d-s.woff2",revision:"bfa12833132b2af60583a7a0563e6fb1"},{url:"/_next/static/media/699512af39861afa-s.p.woff2",revision:"d998caa1048cad4c89e26a9d3fcab2ee"},{url:"/_next/static/media/71ba03c5176fbd9c-s.woff2",revision:"2effa1fe2d0dff3e7b8c35ee120e0d05"},{url:"/_next/static/media/79015435f1a55eef-s.woff2",revision:"5872822e91402734b90122bafed6b689"},{url:"/_next/static/media/7add1b04a8dbb074-s.woff2",revision:"df7736c7a2ac71c200c1a3cda683e4df"},{url:"/_next/static/media/7be645d133f3ee22-s.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b-s.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/7d8c9b0ca4a64a5a-s.p.woff2",revision:"0772a436bbaaaf4381e9d87bab168217"},{url:"/_next/static/media/7e624512c3433db5-s.woff2",revision:"8a48965cead2d8be7f1d9f3a7b25a799"},{url:"/_next/static/media/83e4d81063b4b659-s.woff2",revision:"bd30db6b297b76f3a3a76f8d8ec5aac9"},{url:"/_next/static/media/8fb72f69fba4e3d2-s.woff2",revision:"7a2e2eae214e49b4333030f789100720"},{url:"/_next/static/media/912a9cfe43c928d9-s.woff2",revision:"376ffe2ca0b038d08d5e582ec13a310f"},{url:"/_next/static/media/91a88e0c5dd21dfa-s.woff2",revision:"9663a3dcc4d93b27554c25c2c537a6f0"},{url:"/_next/static/media/934c4b7cb736f2a3-s.p.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/96827bb3668ab7bf-s.woff2",revision:"9ec13a3824c59f854db9168aebae0ac0"},{url:"/_next/static/media/9714907d9a8e12c0-s.woff2",revision:"88275a7d603aecfc05a798dda62ca58c"},{url:"/_next/static/media/9b67ab375515cd6f-s.woff2",revision:"0ded8b4ff2f6a2b1f0a8420b92a6b969"},{url:"/_next/static/media/9cf7d128be063d32-s.woff2",revision:"bcc892f3fa0e651a3a2795103f72d85b"},{url:"/_next/static/media/a3c201c07e8eb753-s.woff2",revision:"fb08c969e6d9dd50cfd2645eb60ac166"},{url:"/_next/static/media/a50efca067c45ff7-s.woff2",revision:"0ea6e3886fc7639170a8e69463f4113e"},{url:"/_next/static/media/a5b77b63ef20339c-s.woff2",revision:"96e992d510ed36aa573ab75df8698b42"},{url:"/_next/static/media/a6d330d7873e7320-s.woff2",revision:"f7ec4e2d6c9f82076c56a871d1d23a2d"},{url:"/_next/static/media/af961b7eb9a15f7e-s.woff2",revision:"2bbd1a9c77461a3bfbff4c9b3a43a89e"},{url:"/_next/static/media/b6db722c6886c2cd-s.woff2",revision:"1019108d9fe09d5ae4b3affb185f8656"},{url:"/_next/static/media/baf12dd90520ae41-s.woff2",revision:"8096f9b1a15c26638179b6c9499ff260"},{url:"/_next/static/media/bbdb6f0234009aba-s.woff2",revision:"5756151c819325914806c6be65088b13"},{url:"/_next/static/media/bd976642b4f7fd99-s.woff2",revision:"cc0ffafe16e997fe75c32c5c6837e781"},{url:"/_next/static/media/c0058a8df935bb33-s.woff2",revision:"815d6a78ad78085bd8593051c2631f4a"},{url:"/_next/static/media/cff529cd86cc0276-s.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"},{url:"/_next/static/media/d117eea74e01de14-s.woff2",revision:"4d1e5298f2c7e19ba39a6ac8d88e91bd"},{url:"/_next/static/media/d55edb6f37902ebf-s.p.woff2",revision:"a8675d6cd41bfd6a669b798ab0fc1ad6"},{url:"/_next/static/media/d8fdc95d5a4284b0-s.woff2",revision:"004ef2f1025475b1723e39d7a0529d7a"},{url:"/_next/static/media/daa8cca6b52a70fa-s.woff2",revision:"a2b76a053c0543aa04722f43c5852599"},{url:"/_next/static/media/dbe242b5c3b9d8cb-s.woff2",revision:"29445a64b7a514e94024e97416f26ecd"},{url:"/_next/static/media/de9eb3a9f0fa9e10-s.woff2",revision:"7155c037c22abdc74e4e6be351c0593c"},{url:"/_next/static/media/dfa8b99978df7bbc-s.woff2",revision:"7a500aa24dccfcf0cc60f781072614f5"},{url:"/_next/static/media/e195dd2ded485df3-s.woff2",revision:"920bd6d4ea896998f763e38d705bedb7"},{url:"/_next/static/media/e25729ca87cc7df9-s.woff2",revision:"9a74bbc5f0d651f8f5b6df4fb3c5c755"},{url:"/_next/static/media/e35c7314ac518ddc-s.woff2",revision:"ea21fa4f9e2ee9025409672d7750c45b"},{url:"/_next/static/media/e58e9ffb3994cb41-s.woff2",revision:"7f046d1fb2f0ae910ce0347969c80d15"},{url:"/_next/static/media/e861f746f27197e8-s.woff2",revision:"1f25aeb74bc794fddc4bf6b63c638ee2"},{url:"/_next/static/media/eb52b768f62eeeb4-s.woff2",revision:"90687dc5a4b6b6271c9f1c1d4986ca10"},{url:"/_next/static/media/ee65d20c5e82dfb1-s.p.woff2",revision:"87c4581addbd8808a3ada2357d63bf70"},{url:"/_next/static/media/ee7e17a7bdd8636b-s.woff2",revision:"47403e44df9ec7ef982ce9249b195f64"},{url:"/_next/static/media/f06116e890b3dadb-s.woff2",revision:"2855f7c90916c37fe4e6bd36205a26a8"},{url:"/_next/static/media/f943c040d756634c-s.woff2",revision:"2bed017a1773f7b80aa4f408df360776"},{url:"/_next/static/media/user.d82add74.png",revision:"e2883991cd1c8e54134d357d33798dbf"},{url:"/android-chrome-192x192.png",revision:"61797ba2a6f2a4618cde672b5e08bbe8"},{url:"/appIcon.svg",revision:"0fd660eeb02cbc8495ce0baf40bdc972"},{url:"/apple-touch-icon.png",revision:"08a6c5662fbe9672b0244e8888314579"},{url:"/favicon-16x16.png",revision:"76a9838a1ae8dd36cb1fa2ee9db2e0b8"},{url:"/favicon-32x32.png",revision:"f565b97aa48d8cbfbbb3e468593c793a"},{url:"/manifest.json",revision:"d848be4518fd7507368cfba8e940e0b6"},{url:"/person.png",revision:"3598c53ec904bef99f0f70c9d102e7f1"},{url:"/safari-pinned-tab.svg",revision:"84e0d3dc34c3d5152f0153382665e4f7"},{url:"/user.png",revision:"e2883991cd1c8e54134d357d33798dbf"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
