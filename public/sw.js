if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let f={};const n=e=>s(e,t),d={module:{uri:t},exports:f,require:n};a[t]=Promise.all(i.map((e=>d[e]||n(e)))).then((e=>(c(...e),f)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"336a84560d26ac4caf112ec757aa71f7"},{url:"/_next/static/FIXToZz4PXfYS4o6QYuwP/_buildManifest.js",revision:"b222cbf4d8e1f47e27a8925222733e53"},{url:"/_next/static/FIXToZz4PXfYS4o6QYuwP/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1094-2df6dfc1a6829418.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/1336-e418008be88c6bbe.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/1566-e8998029cae64ea1.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/1625-fd24316e95fdaf31.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/1896-d7ed7bec015930fa.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/1955-fbb84240a4942576.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/231-247947c95d1376a8.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/2894-8b179c67936ee79f.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/3627521c-beb1683b72c8978e.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/446-f1b0dfe2ad22b8a3.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/448-faff5d836d583096.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/5154-a4da189e07dc06c5.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/7023-3b43c72d121dddb0.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/8205-f4e6ad82beceaa31.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/8726-bb213253ce4c6104.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/9081a741-1ab48e3100799d3e.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/9689-58bdced7a14805a7.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/(main)/explore/page-588d14933f98fa85.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/(main)/layout-a9343fc616a70b62.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/(main)/messages/page-c5edfd1aa2db96d0.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/(main)/notifications/page-8993cdc4cca2e76c.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/(main)/page-333262e2ca2efc3c.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/(main)/post/%5Bid%5D/not-found-71b0bde42b197ba6.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/(main)/post/%5Bid%5D/page-0cf0e2ef429f7619.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/(main)/profile/%5Bid%5D/loading-f2a658a5bd7efa58.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/(main)/profile/%5Bid%5D/not-found-091699a8b85fb65b.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/(main)/profile/%5Bid%5D/page-582369934b93f83e.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/(main)/profile/friends/page-8fcb65973976d34a.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/(main)/profile/page-4d6d6035479d4f6b.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/(main)/settings/page-0dc391fae4922bcb.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/_not-found/page-d4bace7624a85a69.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/auth/forgot-password/page-fdaf66ab3f3ae464.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/auth/layout-641d9c0d3e0e3f6a.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/auth/login/page-0e2798daabc7878d.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/auth/register/page-bc9bafbb97e372a9.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/auth/reset-password/page-9c844670459dff07.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/auth/verify-mail/loading-4aabce369a1d8dd7.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/auth/verify-mail/page-414424aedc94d616.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/error-0eeb72c32785a2bb.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/layout-32f7a4c77fbe1b83.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/app/not-found-54194e624e5937ce.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/ec3863c0-0cae01d2607dd5ea.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/fd9d1056-02096163aa602bda.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/framework-a63c59c368572696.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/main-89df2f6ae49d95c2.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/main-app-351829a0b89878d4.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/pages/_app-00b74eae5e8dab51.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/pages/_error-c72a1f77a3c0be1b.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-0710d6d7f1f28dbd.js",revision:"FIXToZz4PXfYS4o6QYuwP"},{url:"/_next/static/css/04cd596e62685919.css",revision:"04cd596e62685919"},{url:"/_next/static/css/308040f8c1fb0c47.css",revision:"308040f8c1fb0c47"},{url:"/_next/static/media/01b6d16db7cbd96b-s.woff2",revision:"aa5a44ef72b927d17eac76def8c255cf"},{url:"/_next/static/media/025c5221126e4e89-s.woff2",revision:"1d266eb6756cae89abcd598d56bb063e"},{url:"/_next/static/media/02edef4d0edfad6d-s.p.woff2",revision:"7a1a8ba6e24fecc400574e8ffe354665"},{url:"/_next/static/media/045832894acda0e9-s.p.woff2",revision:"200c41f352c466e1c2b117656a0256e8"},{url:"/_next/static/media/0881a2b922b3331e-s.woff2",revision:"a0891d7e3512851a00017bc6aa93a49a"},{url:"/_next/static/media/0e5e1c6a8db9e432-s.woff2",revision:"f201ef2b6f1307dd8b1ec0c0deffceea"},{url:"/_next/static/media/120a5a1920781bd0-s.p.woff2",revision:"8c4b05d4371467ba1d0bc60839c6dcb9"},{url:"/_next/static/media/1cf6c90a0415e133-s.woff2",revision:"e98fb57ebb002bb56a14b13cc7fa1899"},{url:"/_next/static/media/211d5dc59e75af68-s.woff2",revision:"2f3f435b8af588295edcfef8c1ef6f07"},{url:"/_next/static/media/2744aa005c8cf586-s.p.woff2",revision:"105daacb4bc4cf86575fb3136360ff4d"},{url:"/_next/static/media/27971e35634b7c88-s.woff2",revision:"4264bad61333859477947703b15aadfd"},{url:"/_next/static/media/279b47070a5d5877-s.woff2",revision:"f604c827dc8754b14422f431013955eb"},{url:"/_next/static/media/28aa5118b38b86e4-s.woff2",revision:"db5317b009a0dedd66dab31d7889b5f3"},{url:"/_next/static/media/2f66f084fba01545-s.woff2",revision:"8e0642a7dd6dfe9491afa20e4a470655"},{url:"/_next/static/media/31a961c285846cb0-s.woff2",revision:"dec886e2a77a7e9a04c098f19e20e1ee"},{url:"/_next/static/media/418bb9d724f84584-s.woff2",revision:"cc9da36658c97547be935851d9d315a8"},{url:"/_next/static/media/439bcc6e47398ced-s.woff2",revision:"1118ce1dcfb040ff5aa8a34f7a4fde2e"},{url:"/_next/static/media/46b92c15a48f3318-s.p.woff2",revision:"e6a3e7c444a2fdaef711876a4ce39596"},{url:"/_next/static/media/470a067cc6557a8c-s.woff2",revision:"3770df42d862e4dd073cc0e529daef2b"},{url:"/_next/static/media/483de911b1a0d258-s.woff2",revision:"28502b06e67112e0bf77a784aee917d0"},{url:"/_next/static/media/539b2ecbf014924b-s.woff2",revision:"e5b46e787824355760aa312fc91f6a91"},{url:"/_next/static/media/5693677ef07d9b51-s.woff2",revision:"96b57d1ae0a86dcf7913589b27426343"},{url:"/_next/static/media/6194a65a1b989dc8-s.woff2",revision:"12f0db351de86c05551dfe886ab6ab55"},{url:"/_next/static/media/64a0050f3edb816f-s.woff2",revision:"df005a0e020d87277b01c8fc575f35d5"},{url:"/_next/static/media/674abd25bb7be96f-s.woff2",revision:"92e5e17ec75636ec7ab5c46a00a54342"},{url:"/_next/static/media/69eca568ddda66f3-s.woff2",revision:"274de48d6ba9190c6be659d8006169ee"},{url:"/_next/static/media/6a5d8dc148518b96-s.woff2",revision:"b8cd9bd4d2a44124d4f5a74f79bdc1d2"},{url:"/_next/static/media/6ebb97b5c9fa4e03-s.p.woff2",revision:"39aff03d2a35b1c80f210051f35d4b2b"},{url:"/_next/static/media/7a7012758df5a81e-s.woff2",revision:"26024640d95a44fd98f614d6f4372e4b"},{url:"/_next/static/media/7c16c8204ab29534-s.woff2",revision:"eac32b711872911e7e7c107eb7a7901a"},{url:"/_next/static/media/7c7db451c1a82f61-s.p.woff2",revision:"b5cdc415502634db78d05d91c1bf0551"},{url:"/_next/static/media/7d1684f14ddac155-s.woff2",revision:"604411f91e27fd9740f3c4482aef4d58"},{url:"/_next/static/media/7f5a4bbe7ec7be95-s.p.woff2",revision:"f44317e60bd99ef9140e4156d3ee26db"},{url:"/_next/static/media/7f9c2bb12d05b4c1-s.woff2",revision:"d11830f32f3b43ac4e4116cc6904a152"},{url:"/_next/static/media/80b1a0e600ca6d83-s.woff2",revision:"584ea11fad4f10a879c8530e7575cbbf"},{url:"/_next/static/media/82233a533941ac93-s.woff2",revision:"ac7d441c7fe6e91a0dce7510d3b3d38e"},{url:"/_next/static/media/8720059dfa14a1fe-s.woff2",revision:"1254e937b1635a843bc7bdee51de2aeb"},{url:"/_next/static/media/8fa52275b6c22437-s.woff2",revision:"066052f914495367d40b72599bd54598"},{url:"/_next/static/media/906678b269849541-s.woff2",revision:"21c838ead8641ef57bc94d27efcd257e"},{url:"/_next/static/media/98a28a5430a3cf7f-s.woff2",revision:"7dada9344a370f25dc1d3b7030da67b6"},{url:"/_next/static/media/994367e55fdd7fef-s.woff2",revision:"a2b09664c5faadff15e596aa57e8e5c7"},{url:"/_next/static/media/994bf73bb06543dc-s.woff2",revision:"0ed4fab7b6a3e3c06f70de37b3eb5f47"},{url:"/_next/static/media/9d97415e38cab482-s.woff2",revision:"7f62fad6ca9505fd98371aa39273f8b1"},{url:"/_next/static/media/a1ab1338b04b4a15-s.woff2",revision:"95b874303c176df8093f9a5b0e8f3b55"},{url:"/_next/static/media/a2701823eb5c1d0d-s.woff2",revision:"6155a73b3117295396264e8c1e1ed5b6"},{url:"/_next/static/media/a4e8963e7141b0f0-s.woff2",revision:"85486111ec13b11774a7ec6d9755dffc"},{url:"/_next/static/media/ac0efabfe978b0ad-s.woff2",revision:"ed31e4b8cd1d209be2e50af162f26e00"},{url:"/_next/static/media/b5c08a795ae281ca-s.woff2",revision:"5a3ac9809e02d838b15b80e557435268"},{url:"/_next/static/media/b9472d49e3bc18c3-s.woff2",revision:"8d5ccaf24e104a69a676ef5f4f2e95f2"},{url:"/_next/static/media/bb6334b8f5a99b5e-s.woff2",revision:"4603ddb13e6738af220fb5cf1fecbc0b"},{url:"/_next/static/media/c898cbfd2f789a8c-s.woff2",revision:"5dcd52bbafd405373cb80552de5f5a96"},{url:"/_next/static/media/c954d99df1178b91-s.woff2",revision:"3ac9ee74ef624c84c5c683d755388c2f"},{url:"/_next/static/media/cd31bf4b34f8dfb3-s.woff2",revision:"1a0c60b7297c849ea95c06380a4c0961"},{url:"/_next/static/media/d0f96be320385a33-s.woff2",revision:"1a238bfef8b13573198b56363c3bbbb7"},{url:"/_next/static/media/d536eaaa8eee0a4d-s.woff2",revision:"f6985e8df207520f323f4903eeded235"},{url:"/_next/static/media/d67e8433214df714-s.woff2",revision:"0cc84b2ade79f1fcfe2f0b694c51bea1"},{url:"/_next/static/media/d9e386ae70efc2f0-s.woff2",revision:"5e62d0433ab4fb48f80f72b6a41f07c2"},{url:"/_next/static/media/da897b99eb1fe4a1-s.p.woff2",revision:"4903a00d1c555c0846799302c673d6a1"},{url:"/_next/static/media/dad619d2ef97f73d-s.woff2",revision:"db80d4b05ac2ac1427700bfa7644ac3c"},{url:"/_next/static/media/df2942b6de9d14b5-s.woff2",revision:"47e8ccc33b3dcfbe6d31914569515bf4"},{url:"/_next/static/media/e0e418e0c2fc8a84-s.woff2",revision:"11f4301b1b916899d6e7a6d607d863fb"},{url:"/_next/static/media/e20104a0d8d1561a-s.woff2",revision:"a2ce453bb67bc63312a2edf26ac45579"},{url:"/_next/static/media/e22508e41752d816-s.woff2",revision:"73749e5f35230a9dd88b489e914fd4cd"},{url:"/_next/static/media/e4f65e35dde2bee1-s.woff2",revision:"d3d2e988fd01f6b60121adc2cba7c541"},{url:"/_next/static/media/e7814bd1d06a39b6-s.woff2",revision:"ee93adb9ee2b722659c8ca1e26db0418"},{url:"/_next/static/media/ecf49d904668b268-s.woff2",revision:"9f2ae2ca944b5bd6c3d59b01f78ec5ff"},{url:"/_next/static/media/ed37791012a28541-s.woff2",revision:"3b2d3bfbb80e64ae4ed37c15667e1736"},{url:"/_next/static/media/f1df6186c8d69644-s.woff2",revision:"307c90aaa7d9c628155ee8cb913b8382"},{url:"/_next/static/media/f6311e3ddd23a6b5-s.p.woff2",revision:"fc4fb69407384e2e6db68368d386b70f"},{url:"/_next/static/media/f756da832d8c34d4-s.woff2",revision:"ef6b28a1181a73b788c8669d6ad9adc8"},{url:"/_next/static/media/user.d82add74.png",revision:"e2883991cd1c8e54134d357d33798dbf"},{url:"/android-chrome-192x192.png",revision:"61797ba2a6f2a4618cde672b5e08bbe8"},{url:"/appIcon.svg",revision:"0fd660eeb02cbc8495ce0baf40bdc972"},{url:"/apple-touch-icon.png",revision:"08a6c5662fbe9672b0244e8888314579"},{url:"/favicon-16x16.png",revision:"76a9838a1ae8dd36cb1fa2ee9db2e0b8"},{url:"/favicon-32x32.png",revision:"f565b97aa48d8cbfbbb3e468593c793a"},{url:"/manifest.json",revision:"f10b823143e23546a88b87d5ee8e9655"},{url:"/person.png",revision:"3598c53ec904bef99f0f70c9d102e7f1"},{url:"/safari-pinned-tab.svg",revision:"84e0d3dc34c3d5152f0153382665e4f7"},{url:"/user.png",revision:"e2883991cd1c8e54134d357d33798dbf"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
