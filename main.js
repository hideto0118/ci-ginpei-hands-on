!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/hannya-ci-ginpei-hands-on",n(n.s=7)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,c=0,u=[],f=n(4);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(b(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(b(r.parts[s],t));i[r.id]={id:r.id,refs:1,parts:a}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function h(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertAt.before,n);n.insertBefore(t,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function y(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return m(t,e.attrs),h(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var s=c++;n=l||(l=y(t)),r=L.bind(null,n,s,!1),o=L.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}e&&p(d(e,t),t);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete i[a.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function L(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"body {\n  margin: 0;\n}\n\n#root {\n  height: 100vh;\n  width: 100vw;\n}\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,'.HannyaRoller-space {\n  --rotation-progress: 0; /* set in style attr */\n\n  background-color: black;\n  color: white;\n  height: 100vh;\n  overflow: hidden;\n  width: 100vw;\n}\n.HannyaRoller-roller {\n  --font-size: 0; /* set in style attr */\n  --letters-in-line: 0; /* set in style attr */\n  --lines: 0; /* set in style attr */\n  --perspective: 100vw;\n  --rotate-x: 0deg;\n  --surface-height: 0; /* set in style attr */\n\n  animation: HannyaRoller-rollerInitialRotate 3s cubic-bezier(0.23, 1, 0.32, 1);\n  background-color: #0006;\n  font-size: var(--font-size);\n  height: 100%;\n  position: relative;\n  transform: perspective(var(--perspective));\n  transform-style: preserve-3d;\n  width: 100%;\n}\n.HannyaRoller-line {\n  --line-index: 0; /* set in style attr */\n  --line-progress: calc(var(--line-index) / var(--lines));\n  --line-rotation-progress: calc(var(--rotation-progress) - var(--line-progress));\n\n  left: calc(50% - 0.5em);\n  position: absolute;\n  top: calc(50% - (var(--surface-height) / 2));\n  transform:\n    rotateY(calc(var(--line-rotation-progress) * 360deg))\n    translateZ(calc(var(--perspective) * 0.4));\n}\n.HannyaRoller-letter {\n  font-family: a-otf-midashi-mi-ma31-pr6n, "Yu Mincho", sans-serif;\n  font-weight: bold;\n  line-height: 1em;\n  padding-bottom: calc((var(--surface-height) - 1em) / (var(--letters-in-line) - 1) - 1em);\n  text-align: center;\n  width: 1em;\n}\n\n@keyframes HannyaRoller-rollerInitialRotate {\n  0% { transform: perspective(var(--perspective)) rotateY(-720deg); }\n  100% { transform: perspective(var(--perspective)) rotateY(0deg); }\n}\n',""])},function(e,t,n){"use strict";n.r(t);n(2);n(5);var r="\n観自在菩薩行深般若波羅蜜多時。照見五蘊皆空。度一切苦厄。\n舎利子。色不異空。空不異色。色即是空。空即是色。受想行識亦復如是。\n舎利子。是諸法空相。不生不滅。不垢不浄。不増不減。\n是故空中。無色無受想行識。無眼耳鼻舌身意。無色声香味触法。無眼界。乃至無意識界。無無明。亦無無明尽。乃至無老死。亦無老死尽。無苦集滅道。\n無智亦無得。以無所得故。菩提薩埵。依般若波羅蜜多故。心無罣礙。無罣礙故。無有恐怖。遠離一切顛倒夢想。究竟涅槃。\n三世諸仏。依般若波羅蜜多故。得阿耨多羅三藐三菩提。\n故知。般若波羅蜜多。是大神呪。是大明呪。是無上呪。是無等等呪。能除一切苦。真実不虚故。説般若波羅蜜多呪。\n即説呪曰。羯諦羯諦波羅羯諦波羅僧羯諦菩提薩婆訶。般若心経\n".replace(/。/g,"　").replace(/\n/g,"");const o=new class{constructor({el:e,text:t}){this._el=e,this._text=t,this._buildElements()}start(){this._el.appendChild(this.elSpace),this.updateLayout(),this._startAnimation()}updateLayout(){const{length:e}=this._text,t=this._el.clientWidth,n=this._el.clientHeight,r=this._findBestLayout(e,t,n);this._render(r)}destroy(){this._el.removeChild(this.elSpace),this.destroyAnimation()}_buildElements(){this.elSpace=document.createElement("div"),this.elSpace.classList.add("HannyaRoller-space"),this.elRoller=document.createElement("div"),this.elRoller.classList.add("HannyaRoller-roller"),this.elSpace.appendChild(this.elRoller),this.elLetterList=[...this._text].map(e=>{const t=document.createElement("div");return t.classList.add("HannyaRoller-letter"),t.textContent=e,t})}_findBestLayout(e,t,n){const r=t*Math.PI,o=.55*n,i={fontSize:10,nLettersInLine:0,nLines:0,surfaceHeight:o};for(let n=t;n>0;n-=1){const t=Math.floor(o/n),s=Math.ceil(e/t)+1;if(s*n<r/2){i.fontSize=n,i.nLettersInLine=t,i.nLines=s;break}}return i}_render({fontSize:e,nLettersInLine:t,nLines:n,surfaceHeight:r}){this.elRoller.style.setProperty("--surface-height",`${r}px`),this.elRoller.style.setProperty("--font-size",`${e}px`),this.elRoller.style.setProperty("--letters-in-line",`${t}`),this.elRoller.style.setProperty("--lines",`${n}`),this.elRoller.innerHTML="";const o=new Array(n).fill(0).map((e,t)=>{const n=document.createElement("div");return n.classList.add("HannyaRoller-line"),n.style.setProperty("--line-index",`${t}`),this.elRoller.appendChild(n),n});this.elLetterList.forEach((e,n)=>{const r=Math.floor(n/t);o[r].appendChild(e)})}_startAnimation(){const e=Date.now();this.destroyAnimation=function(e,t){const n=1e3/e;let r=0,o=0;const i=()=>{const e=Date.now();e-o>n&&(t(),o=e),r=window.requestAnimationFrame(()=>i())};return i(),()=>window.cancelAnimationFrame(r)}(60,()=>{const t=(Date.now()-e)%3e4/3e4-.1,n=t-Math.floor(t);this.elSpace.style.setProperty("--rotation-progress",`${n}`)})}}({el:document.querySelector("#root"),text:r});o.start(),window.addEventListener("resize",function(e){let t=0;return(...n)=>{cancelAnimationFrame(t),t=requestAnimationFrame(()=>{e(...n)})}}(()=>o.updateLayout()))}]);
//# sourceMappingURL=main.js.map