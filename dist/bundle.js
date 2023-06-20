(()=>{"use strict";var e={123:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Item=void 0;const n=r(720);t.Item=class{constructor(e,t,r,o=1){this.id=(0,n.v4)(),this.name=e,this.price=t,this.description=r,this.quantity=o}getId(){return this.id}getName(){return this.name}getPrice(){return this.price}getDescription(){return this.description}getQuantity(){return this.quantity}setQuantity(e){this.quantity=e}}},274:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Shop=void 0;const n=r(123);t.Shop=class{constructor(){this.items=[],this.initializeItems()}getItems(){return this.items}initializeItems(){const e=new n.Item("Banana Peel",15,"Slippery! Look out!"),t=new n.Item("Bullet Bill",25,"Like being on autopilot, except on a dangerous giant bullet!"),r=new n.Item("Star Power",35,"Literally just a cheat code, just don't go falling off the map");this.items.push(e,t,r)}}},536:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.User=void 0;const n=r(720);t.User=class{constructor(e,t){this.id=(0,n.v4)(),this.name=e,this.age=t,this.cart=[]}getId(){return this.id}getName(){return this.name}getAge(){return this.age}getCart(){return this.cart}addToCart(e){this.cart.push(e)}removeFromCart(e){this.cart=this.cart.filter((t=>t.getId()!==e.getId()))}removeQuantityFromCart(e,t){const r=this.cart.find((t=>t.getId()===e.getId()));r&&(r.getQuantity()<=t?this.removeFromCart(r):r.setQuantity(r.getQuantity()-t))}cartTotal(){return this.cart.reduce(((e,t)=>e+t.getPrice()),0)}printCart(){console.log("Cart Contents:");for(const e of this.cart)console.log(`- ${e.getName()}: $${e.getPrice()}`)}}},720:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NIL",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"v1",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"v3",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"v4",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"v5",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"version",{enumerable:!0,get:function(){return l.default}});var n=c(r(518)),o=c(r(749)),u=c(r(469)),a=c(r(918)),i=c(r(438)),l=c(r(595)),d=c(r(485)),s=c(r(4)),f=c(r(857));function c(e){return e&&e.__esModule?e:{default:e}}},169:(e,t)=>{function r(e){return 14+(e+64>>>9<<4)+1}function n(e,t){const r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function o(e,t,r,o,u,a){return n((i=n(n(t,e),n(o,a)))<<(l=u)|i>>>32-l,r);var i,l}function u(e,t,r,n,u,a,i){return o(t&r|~t&n,e,t,u,a,i)}function a(e,t,r,n,u,a,i){return o(t&n|r&~n,e,t,u,a,i)}function i(e,t,r,n,u,a,i){return o(t^r^n,e,t,u,a,i)}function l(e,t,r,n,u,a,i){return o(r^(t|~n),e,t,u,a,i)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){if("string"==typeof e){const t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(let r=0;r<t.length;++r)e[r]=t.charCodeAt(r)}return function(e){const t=[],r=32*e.length,n="0123456789abcdef";for(let o=0;o<r;o+=8){const r=e[o>>5]>>>o%32&255,u=parseInt(n.charAt(r>>>4&15)+n.charAt(15&r),16);t.push(u)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[r(t)-1]=t;let o=1732584193,d=-271733879,s=-1732584194,f=271733878;for(let t=0;t<e.length;t+=16){const r=o,c=d,p=s,v=f;o=u(o,d,s,f,e[t],7,-680876936),f=u(f,o,d,s,e[t+1],12,-389564586),s=u(s,f,o,d,e[t+2],17,606105819),d=u(d,s,f,o,e[t+3],22,-1044525330),o=u(o,d,s,f,e[t+4],7,-176418897),f=u(f,o,d,s,e[t+5],12,1200080426),s=u(s,f,o,d,e[t+6],17,-1473231341),d=u(d,s,f,o,e[t+7],22,-45705983),o=u(o,d,s,f,e[t+8],7,1770035416),f=u(f,o,d,s,e[t+9],12,-1958414417),s=u(s,f,o,d,e[t+10],17,-42063),d=u(d,s,f,o,e[t+11],22,-1990404162),o=u(o,d,s,f,e[t+12],7,1804603682),f=u(f,o,d,s,e[t+13],12,-40341101),s=u(s,f,o,d,e[t+14],17,-1502002290),d=u(d,s,f,o,e[t+15],22,1236535329),o=a(o,d,s,f,e[t+1],5,-165796510),f=a(f,o,d,s,e[t+6],9,-1069501632),s=a(s,f,o,d,e[t+11],14,643717713),d=a(d,s,f,o,e[t],20,-373897302),o=a(o,d,s,f,e[t+5],5,-701558691),f=a(f,o,d,s,e[t+10],9,38016083),s=a(s,f,o,d,e[t+15],14,-660478335),d=a(d,s,f,o,e[t+4],20,-405537848),o=a(o,d,s,f,e[t+9],5,568446438),f=a(f,o,d,s,e[t+14],9,-1019803690),s=a(s,f,o,d,e[t+3],14,-187363961),d=a(d,s,f,o,e[t+8],20,1163531501),o=a(o,d,s,f,e[t+13],5,-1444681467),f=a(f,o,d,s,e[t+2],9,-51403784),s=a(s,f,o,d,e[t+7],14,1735328473),d=a(d,s,f,o,e[t+12],20,-1926607734),o=i(o,d,s,f,e[t+5],4,-378558),f=i(f,o,d,s,e[t+8],11,-2022574463),s=i(s,f,o,d,e[t+11],16,1839030562),d=i(d,s,f,o,e[t+14],23,-35309556),o=i(o,d,s,f,e[t+1],4,-1530992060),f=i(f,o,d,s,e[t+4],11,1272893353),s=i(s,f,o,d,e[t+7],16,-155497632),d=i(d,s,f,o,e[t+10],23,-1094730640),o=i(o,d,s,f,e[t+13],4,681279174),f=i(f,o,d,s,e[t],11,-358537222),s=i(s,f,o,d,e[t+3],16,-722521979),d=i(d,s,f,o,e[t+6],23,76029189),o=i(o,d,s,f,e[t+9],4,-640364487),f=i(f,o,d,s,e[t+12],11,-421815835),s=i(s,f,o,d,e[t+15],16,530742520),d=i(d,s,f,o,e[t+2],23,-995338651),o=l(o,d,s,f,e[t],6,-198630844),f=l(f,o,d,s,e[t+7],10,1126891415),s=l(s,f,o,d,e[t+14],15,-1416354905),d=l(d,s,f,o,e[t+5],21,-57434055),o=l(o,d,s,f,e[t+12],6,1700485571),f=l(f,o,d,s,e[t+3],10,-1894986606),s=l(s,f,o,d,e[t+10],15,-1051523),d=l(d,s,f,o,e[t+1],21,-2054922799),o=l(o,d,s,f,e[t+8],6,1873313359),f=l(f,o,d,s,e[t+15],10,-30611744),s=l(s,f,o,d,e[t+6],15,-1560198380),d=l(d,s,f,o,e[t+13],21,1309151649),o=l(o,d,s,f,e[t+4],6,-145523070),f=l(f,o,d,s,e[t+11],10,-1120210379),s=l(s,f,o,d,e[t+2],15,718787259),d=l(d,s,f,o,e[t+9],21,-343485551),o=n(o,r),d=n(d,c),s=n(s,p),f=n(f,v)}return[o,d,s,f]}(function(e){if(0===e.length)return[];const t=8*e.length,n=new Uint32Array(r(t));for(let r=0;r<t;r+=8)n[r>>5]|=(255&e[r/8])<<r%32;return n}(e),8*e.length))}},332:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};t.default=r},438:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default="00000000-0000-0000-0000-000000000000"},857:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r(485))&&n.__esModule?n:{default:n};t.default=function(e){if(!(0,o.default)(e))throw TypeError("Invalid UUID");let t;const r=new Uint8Array(16);return r[0]=(t=parseInt(e.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=255&t,r[4]=(t=parseInt(e.slice(9,13),16))>>>8,r[5]=255&t,r[6]=(t=parseInt(e.slice(14,18),16))>>>8,r[7]=255&t,r[8]=(t=parseInt(e.slice(19,23),16))>>>8,r[9]=255&t,r[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=255&t,r}},353:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i},948:(e,t)=>{let r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!r&&(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(n)};const n=new Uint8Array(16)},686:(e,t)=>{function r(e,t,r,n){switch(e){case 0:return t&r^~t&n;case 1:case 3:return t^r^n;case 2:return t&r^t&n^r&n}}function n(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){const t=[1518500249,1859775393,2400959708,3395469782],o=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){const t=unescape(encodeURIComponent(e));e=[];for(let r=0;r<t.length;++r)e.push(t.charCodeAt(r))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);const u=e.length/4+2,a=Math.ceil(u/16),i=new Array(a);for(let t=0;t<a;++t){const r=new Uint32Array(16);for(let n=0;n<16;++n)r[n]=e[64*t+4*n]<<24|e[64*t+4*n+1]<<16|e[64*t+4*n+2]<<8|e[64*t+4*n+3];i[t]=r}i[a-1][14]=8*(e.length-1)/Math.pow(2,32),i[a-1][14]=Math.floor(i[a-1][14]),i[a-1][15]=8*(e.length-1)&4294967295;for(let e=0;e<a;++e){const u=new Uint32Array(80);for(let t=0;t<16;++t)u[t]=i[e][t];for(let e=16;e<80;++e)u[e]=n(u[e-3]^u[e-8]^u[e-14]^u[e-16],1);let a=o[0],l=o[1],d=o[2],s=o[3],f=o[4];for(let e=0;e<80;++e){const o=Math.floor(e/20),i=n(a,5)+r(o,l,d,s)+f+t[o]+u[e]>>>0;f=s,s=d,d=n(l,30)>>>0,l=a,a=i}o[0]=o[0]+a>>>0,o[1]=o[1]+l>>>0,o[2]=o[2]+d>>>0,o[3]=o[3]+s>>>0,o[4]=o[4]+f>>>0}return[o[0]>>24&255,o[0]>>16&255,o[0]>>8&255,255&o[0],o[1]>>24&255,o[1]>>16&255,o[1]>>8&255,255&o[1],o[2]>>24&255,o[2]>>16&255,o[2]>>8&255,255&o[2],o[3]>>24&255,o[3]>>16&255,o[3]>>8&255,255&o[3],o[4]>>24&255,o[4]>>16&255,o[4]>>8&255,255&o[4]]}},4:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.unsafeStringify=a;var n,o=(n=r(485))&&n.__esModule?n:{default:n};const u=[];for(let e=0;e<256;++e)u.push((e+256).toString(16).slice(1));function a(e,t=0){return(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase()}t.default=function(e,t=0){const r=a(e,t);if(!(0,o.default)(r))throw TypeError("Stringified UUID is invalid");return r}},518:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r(948))&&n.__esModule?n:{default:n},u=r(4);let a,i,l=0,d=0;t.default=function(e,t,r){let n=t&&r||0;const s=t||new Array(16);let f=(e=e||{}).node||a,c=void 0!==e.clockseq?e.clockseq:i;if(null==f||null==c){const t=e.random||(e.rng||o.default)();null==f&&(f=a=[1|t[0],t[1],t[2],t[3],t[4],t[5]]),null==c&&(c=i=16383&(t[6]<<8|t[7]))}let p=void 0!==e.msecs?e.msecs:Date.now(),v=void 0!==e.nsecs?e.nsecs:d+1;const y=p-l+(v-d)/1e4;if(y<0&&void 0===e.clockseq&&(c=c+1&16383),(y<0||p>l)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=p,d=v,i=c,p+=122192928e5;const h=(1e4*(268435455&p)+v)%4294967296;s[n++]=h>>>24&255,s[n++]=h>>>16&255,s[n++]=h>>>8&255,s[n++]=255&h;const g=p/4294967296*1e4&268435455;s[n++]=g>>>8&255,s[n++]=255&g,s[n++]=g>>>24&15|16,s[n++]=g>>>16&255,s[n++]=c>>>8|128,s[n++]=255&c;for(let e=0;e<6;++e)s[n+e]=f[e];return t||(0,u.unsafeStringify)(s)}},749:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(31)),o=u(r(169));function u(e){return e&&e.__esModule?e:{default:e}}var a=(0,n.default)("v3",48,o.default);t.default=a},31:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.URL=t.DNS=void 0,t.default=function(e,t,r){function n(e,n,a,i){var l;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));const t=[];for(let r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t}(e)),"string"==typeof n&&(n=(0,u.default)(n)),16!==(null===(l=n)||void 0===l?void 0:l.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let d=new Uint8Array(16+e.length);if(d.set(n),d.set(e,n.length),d=r(d),d[6]=15&d[6]|t,d[8]=63&d[8]|128,a){i=i||0;for(let e=0;e<16;++e)a[i+e]=d[e];return a}return(0,o.unsafeStringify)(d)}try{n.name=e}catch(e){}return n.DNS=a,n.URL=i,n};var n,o=r(4),u=(n=r(857))&&n.__esModule?n:{default:n};const a="6ba7b810-9dad-11d1-80b4-00c04fd430c8";t.DNS=a;const i="6ba7b811-9dad-11d1-80b4-00c04fd430c8";t.URL=i},469:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(332)),o=a(r(948)),u=r(4);function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,r){if(n.default.randomUUID&&!t&&!e)return n.default.randomUUID();const a=(e=e||{}).random||(e.rng||o.default)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=a[e];return t}return(0,u.unsafeStringify)(a)}},918:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(31)),o=u(r(686));function u(e){return e&&e.__esModule?e:{default:e}}var a=(0,n.default)("v5",80,o.default);t.default=a},485:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r(353))&&n.__esModule?n:{default:n};t.default=function(e){return"string"==typeof e&&o.default.test(e)}},595:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r(485))&&n.__esModule?n:{default:n};t.default=function(e){if(!(0,o.default)(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n](u,u.exports,r),u.exports}(()=>{const e=r(536),t=new(r(274).Shop),n=new e.User("Mason Sinner",22),o=t.getItems()[0];n.addToCart(o),n.printCart(),n.removeFromCart(o),n.removeQuantityFromCart(o,3),n.printCart();const u=n.cartTotal();console.log("Cart Total:",u)})()})();
//# sourceMappingURL=bundle.js.map