(()=>{"use strict";var n={309:(n,e,r)=>{r.d(e,{Z:()=>f});var t=r(81),a=r.n(t),o=r(645),i=r.n(o),c=r(667),s=r.n(c),l=new URL(r(690),r.b),d=new URL(r(122),r.b),p=i()(a()),u=s()(l),m=s()(d);p.push([n.id,'@font-face {\r\n    font-family: "Amatic SC";\r\n    src: url('+u+") format('truetype')\r\n}\r\n\r\n\r\nbody {\r\n    margin: 0;\r\n    font-family: \"Amatic SC\";\r\n    font-weight: lighter;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\nimg {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\n\r\n.container1 {\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)),url("+m+');\r\n    background-size: max(1400px, 100vw);\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-repeat: no-repeat;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.divider {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 5px;\r\n    width: 100%;\r\n    font-size: 8px;\r\n}\r\n\r\n.divider-line {\r\n    width: 40%;\r\n    border-bottom: 0.5px solid white;\r\n    \r\n}\r\n\r\n.pizza-text {\r\n    color: white;\r\n    text-align: center;\r\n    font-family: "Amatic SC";\r\n}\r\n\r\n.animated-text {\r\n    font-size: calc(36px + 2vw);\r\n}\r\n\r\np {\r\n    font-size: 24px;\r\n}\r\n\r\n\r\n.animated-text:after {\r\n\tcontent: "";\r\n\tanimation: spin 10s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n    0% { content:"ITALIAN"; opacity: 1;}\r\n    17% { opacity: 0.1;}\r\n    33% { content:"PIZZA"; opacity: 1;}\r\n    50% { opacity: 0.1;}\r\n    66% { content:"AUTHENTIC"; opacity: 1;}\r\n    83% { opacity: 0.1;}\r\n    100% { content:"ITALIAN"; opacity: 1;}\r\n  }',""]);const f=p},195:(n,e,r)=>{r.d(e,{Z:()=>u});var t=r(81),a=r.n(t),o=r(645),i=r.n(o),c=r(667),s=r.n(c),l=new URL(r(745),r.b),d=i()(a()),p=s()(l);d.push([n.id,".menu-container {\r\n    width: 80%;\r\n    height: 80%;\r\n    background-color: white;\r\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n    margin-top: 100px;\r\n}\r\n\r\n.menu-background {\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)),url("+p+");\r\n    background-size: max(1400px, 100vw);\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    z-index: -1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#content {\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\n",""]);const u=d},145:(n,e,r)=>{r.d(e,{Z:()=>f});var t=r(81),a=r.n(t),o=r(645),i=r.n(o),c=r(667),s=r.n(c),l=new URL(r(690),r.b),d=new URL(r(702),r.b),p=i()(a()),u=s()(l),m=s()(d);p.push([n.id,'@font-face {\r\n    font-family: "Amatic SC";\r\n    src: url('+u+") format('truetype')\r\n}\r\n\r\n.navbar {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    height: 15%;\r\n    width: 80%;\r\n    position: fixed;\r\n    color: white;\r\n    border-radius: 5px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.navbar-right {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    gap: 2vw;\r\n    align-items: center;\r\n    width: 50%;\r\n    font-size: calc(12px + 1vw);\r\n}\r\n\r\n.navbar-left {\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.logo {\r\n    background-image: url("+m+");\r\n    background-size: 50px;\r\n    width: 60px;\r\n    height: 60px;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.links {\r\n    -webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none; /* Safari */\r\n     -khtml-user-select: none; /* Konqueror HTML */\r\n       -moz-user-select: none; /* Old versions of Firefox */\r\n        -ms-user-select: none; /* Internet Explorer/Edge */\r\n            user-select: none; /* Non-prefixed version, currently\r\n                                  supported by Chrome, Edge, Opera and Firefox */\r\n}\r\n\r\n.links:hover {\r\n    transform: scale(1.2);\r\n}",""]);const f=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var u=r(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=a(m,t);t.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,a){var o=t(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=r(o[i]);e[c].references--}for(var s=t(n,a),l=0;l<o.length;l++){var d=r(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},690:(n,e,r)=>{n.exports=r.p+"fd9971162ff94dc53856.ttf"},122:(n,e,r)=>{n.exports=r.p+"a7f06a366509ee575001.jpg"},702:(n,e,r)=>{n.exports=r.p+"d7953ee7571dc4e78b02.png"},745:(n,e,r)=>{n.exports=r.p+"8ffc8053963b68842f8b.jpg"}},e={};function r(t){var a=e[t];if(void 0!==a)return a.exports;var o=e[t]={id:t,exports:{}};return n[t](o,o.exports,r),o.exports}r.m=n,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{const n=function(){const n=document.createElement("div");n.className="container1",content.appendChild(n);const e=document.createElement("div");e.className="pizza-text";const r=document.createElement("p"),t=document.createElement("p"),a=document.createElement("p");r.className="animated-text",t.textContent="NEW YORK'S AWARD-WINNING",a.textContent="WOOD-FIRED NAPOLITAN PIZZA";const o=document.createElement("div"),i=document.createElement("span"),c=document.createElement("span"),s=document.createElement("span");c.className="fa fa-star",i.className="divider-line",s.className="divider-line",o.className="divider",o.appendChild(i),o.appendChild(c),o.appendChild(s),e.appendChild(r),e.appendChild(t),e.appendChild(a),e.appendChild(o),n.appendChild(e)};var e=r(379),t=r.n(e),a=r(795),o=r.n(a),i=r(569),c=r.n(i),s=r(565),l=r.n(s),d=r(216),p=r.n(d),u=r(589),m=r.n(u),f=r(309),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var v=r(145),g={};g.styleTagTransform=m(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=p(),t()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;const b=function(){const n=document.querySelector("#content");for(;n.firstChild;)n.removeChild(n.lastChild);x()},x=function(){const e=document.createElement("div"),r=document.createElement("div"),t=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div");o.textContent="Home",i.textContent="Menu",c.textContent="Contact",o.className="links",i.className="links",c.className="links",o.addEventListener("click",(()=>{b(),n()})),i.addEventListener("click",(()=>{b(),function(){const n=document.createElement("div");n.className="menu-container";const e=document.createElement("div");e.className="menu-background";const r=document.querySelector("#content");e.appendChild(n),r.appendChild(e)}()})),e.className="navbar",a.className="logo",r.className="navbar-left",t.className="navbar-right",r.appendChild(a),t.appendChild(o),t.appendChild(i),t.appendChild(c),e.appendChild(r),e.appendChild(t),document.querySelector("#content").appendChild(e)};var y=r(195),w={};w.styleTagTransform=m(),w.setAttributes=l(),w.insert=c().bind(null,"head"),w.domAPI=o(),w.insertStyleElement=p(),t()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals,x(),n()})()})();