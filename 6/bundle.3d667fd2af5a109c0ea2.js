(()=>{var e={362:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var i=n(354),a=n.n(i),s=n(314),r=n.n(s)()(a());r.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=r},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,a,s){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(r[c]=!0)}for(var d=0;d<e.length;d++){var f=[].concat(e[d]);i&&r[f[0]]||(void 0!==s&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=s),n&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=n):f[2]=n),a&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=a):f[4]="".concat(a)),t.push(f))}},t}},354:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),s="/*# ".concat(a," */");return[t].concat([s]).join("\n")}return[t].join("\n")}},353:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",a="minute",s="hour",r="day",o="week",c="month",d="quarter",f="year",l="date",p="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},m=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},v={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+m(i,2,"0")+":"+m(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(i,c),s=n-a<0,r=t.clone().add(i+(s?-1:1),c);return+(-(i+(n-a)/(s?a-r:r-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:f,w:o,d:r,D:l,h:s,m:a,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",_={};_[y]=h;var g="$isDayjsObject",$=function(e){return e instanceof j||!(!e||!e[g])},w=function e(t,n,i){var a;if(!t)return y;if("string"==typeof t){var s=t.toLowerCase();_[s]&&(a=s),n&&(_[s]=n,a=s);var r=t.split("-");if(!a&&r.length>1)return e(r[0])}else{var o=t.name;_[o]=t,a=o}return!i&&a&&(y=a),a||!i&&y},T=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new j(n)},M=v;M.l=w,M.i=$,M.w=function(e,t){return T(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var j=function(){function h(e){this.$L=w(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[g]=!0}var m=h.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(u);if(i){var a=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(t)}(e),this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return M},m.isValid=function(){return!(this.$d.toString()===p)},m.isSame=function(e,t){var n=T(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return T(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<T(e)},m.$g=function(e,t,n){return M.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var n=this,d=!!M.u(t)||t,p=M.p(e),u=function(e,t){var i=M.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return d?i:i.endOf(r)},b=function(e,t){return M.w(n.toDate()[e].apply(n.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case f:return d?u(1,0):u(31,11);case c:return d?u(1,m):u(0,m+1);case o:var _=this.$locale().weekStart||0,g=(h<_?h+7:h)-_;return u(d?v-g:v+(6-g),m);case r:case l:return b(y+"Hours",0);case s:return b(y+"Minutes",1);case a:return b(y+"Seconds",2);case i:return b(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var o,d=M.p(e),p="set"+(this.$u?"UTC":""),u=(o={},o[r]=p+"Date",o[l]=p+"Date",o[c]=p+"Month",o[f]=p+"FullYear",o[s]=p+"Hours",o[a]=p+"Minutes",o[i]=p+"Seconds",o[n]=p+"Milliseconds",o)[d],b=d===r?this.$D+(t-this.$W):t;if(d===c||d===f){var h=this.clone().set(l,1);h.$d[u](b),h.init(),this.$d=h.set(l,Math.min(this.$D,h.daysInMonth())).$d}else u&&this.$d[u](b);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[M.p(e)]()},m.add=function(n,d){var l,p=this;n=Number(n);var u=M.p(d),b=function(e){var t=T(p);return M.w(t.date(t.date()+Math.round(e*n)),p)};if(u===c)return this.set(c,this.$M+n);if(u===f)return this.set(f,this.$y+n);if(u===r)return b(1);if(u===o)return b(7);var h=(l={},l[a]=e,l[s]=t,l[i]=1e3,l)[u]||1,m=this.$d.getTime()+n*h;return M.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=e||"YYYY-MM-DDTHH:mm:ssZ",a=M.z(this),s=this.$H,r=this.$m,o=this.$M,c=n.weekdays,d=n.months,f=n.meridiem,l=function(e,n,a,s){return e&&(e[n]||e(t,i))||a[n].slice(0,s)},u=function(e){return M.s(s%12||12,e,"0")},h=f||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(b,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return M.s(t.$y,4,"0");case"M":return o+1;case"MM":return M.s(o+1,2,"0");case"MMM":return l(n.monthsShort,o,d,3);case"MMMM":return l(d,o);case"D":return t.$D;case"DD":return M.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return l(n.weekdaysMin,t.$W,c,2);case"ddd":return l(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(s);case"HH":return M.s(s,2,"0");case"h":return u(1);case"hh":return u(2);case"a":return h(s,r,!0);case"A":return h(s,r,!1);case"m":return String(r);case"mm":return M.s(r,2,"0");case"s":return String(t.$s);case"ss":return M.s(t.$s,2,"0");case"SSS":return M.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,l,p){var u,b=this,h=M.p(l),m=T(n),v=(m.utcOffset()-this.utcOffset())*e,y=this-m,_=function(){return M.m(b,m)};switch(h){case f:u=_()/12;break;case c:u=_();break;case d:u=_()/3;break;case o:u=(y-v)/6048e5;break;case r:u=(y-v)/864e5;break;case s:u=y/t;break;case a:u=y/e;break;case i:u=y/1e3;break;default:u=y}return p?u:M.a(u)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return _[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=w(e,t,!0);return i&&(n.$L=i),n},m.clone=function(){return M.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),C=j.prototype;return T.prototype=C,[["$ms",n],["$s",i],["$m",a],["$H",s],["$W",r],["$M",c],["$y",f],["$D",l]].forEach((function(e){C[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),T.extend=function(e,t){return e.$i||(e(t,j,T),e.$i=!0),T},T.locale=w,T.isDayjs=$,T.unix=function(e){return T(1e3*e)},T.en=_[y],T.Ls=_,T.p={},T}()},72:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var s={},r=[],o=0;o<e.length;o++){var c=e[o],d=i.base?c[0]+i.base:c[0],f=s[d]||0,l="".concat(d," ").concat(f);s[d]=f+1;var p=n(l),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var b=a(u,i);i.byIndex=o,t.splice(o,0,{identifier:l,updater:b,references:1})}r.push(l)}return r}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var s=i(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<s.length;r++){var o=n(s[r]);t[o].references--}for(var c=i(e,a),d=0;d<s.length;d++){var f=n(s[d]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}s=c}}},659:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},540:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,a&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var s=t[i]={id:i,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(72),t=n.n(e),i=n(825),a=n.n(i),s=n(659),r=n.n(s),o=n(56),c=n.n(o),d=n(540),f=n.n(d),l=n(113),p=n.n(l),u=n(362),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=r().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=f(),t()(u.A,b),u.A&&u.A.locals&&u.A.locals;const h="shake";class m{#e=null;constructor(){if(new.target===m)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(h),setTimeout((()=>{this.element.classList.remove(h),e?.()}),600)}}function v(e,t,n="beforeend"){if(!(e instanceof m))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function y(e,t){if(!(e instanceof m&&t instanceof m))throw new Error("Can replace only components");const n=e.element,i=t.element,a=i.parentElement;if(null===a)throw new Error("Parent element doesn't exist");a.replaceChild(n,i)}const _=e=>"Escape"===e.key,g=e=>e[0].toUpperCase()+e.slice(1),$=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;var w=n(353),T=n.n(w);const M=["day","event","time","price","offers"],j=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],C=e=>e?T()(e).format("HH : mm"):"",k=e=>e?T()(e).format("DD/MM/YY HH:mm"):"",A="everything",D="future",F="present",x="past",E={[A]:e=>e,[D]:e=>e.filter((e=>(e=>T()(e.dateFrom).isAfter(T()()))(e))),[F]:e=>e.filter((e=>(e=>T()(e.dateFrom).isBefore(T()())&&T()(e.dateTo).isAfter(T()()))(e))),[x]:e=>e.filter((e=>(e=>T()(e.dateTo).isBefore(T()()))(e)))};class Z extends m{#t=null;#n=null;#i=null;#a=null;#s=null;constructor({point:e,allOffers:t,pointDestination:n,allDestinations:i,onFormSubmit:a}){super(),this.#t=e,this.#n=t,this.#i=n,this.#a=i,this.#s=a,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#r)}get template(){return((e,t,n=null,i)=>{const{basePrice:a,dateFrom:s,dateTo:r,type:o}=e,c=(e=>`\n  <div class="event__type-wrapper">\n    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n      <span class="visually-hidden">Choose event type</span>\n      <img class="event__type-icon" width="17" height="17" src="img/icons/${e}.png" alt="Event type icon">\n    </label>\n    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n    <div class="event__type-list">\n      <fieldset class="event__type-group">\n        <legend class="visually-hidden">Event type</legend>\n        ${j.map((e=>(e=>`\n  <div class="event__type-item">\n    <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}">\n    <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">${g(e)}</label>\n  </div>\n`)(e))).join("")}\n      </fieldset>\n    </div>\n  </div>\n`)(o),d=(e=>`\n  <datalist id="destination-list-1">\n    ${e.map((e=>(e=>`\n  <option value="${e.name}"></option>\n`)(e))).join("")}\n  </datalist>\n`)(i),f=(e=>{if(!e)return"";const{description:t,pictures:n}=e;return`\n    <section class="event__section  event__section--destination">\n      <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n      <p class="event__destination-description">\n        ${t}\n      </p>\n\n      <div class="event__photos-container">\n        <div class="event__photos-tape">\n          ${n.map((e=>`\n            <img class="event__photo" src="${e.src}" alt="${e.description}">\n          `)).join("")}\n        </div>\n      </div>\n\n    </section>\n  `})(n),l=(({offers:e})=>`\n  <section class="event__section  event__section--offers">\n    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n      <div class="event__available-offers">\n        ${e.map((e=>(({id:e,title:t,price:n})=>`\n  <div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e}-1" type="checkbox" name="event-offer-${e}">\n    <label class="event__offer-label" for="event-offer-${e}-1">\n      <span class="event__offer-title">${t}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${n}</span>\n    </label>\n  </div>\n`)(e))).join("")}\n      </div>\n  </section>\n`)(t);return`\n    <li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n\n            ${c}\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${g(o)}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination"\n            value="${n?n.name:""}" list="destination-list-1">\n\n            ${d}\n\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${k(s)}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${k(r)}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${a}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Delete</button>\n          <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>\n        </header>\n\n          ${l}\n\n          ${f}\n\n      </form>\n    </li>\n  `})(this.#t,this.#n,this.#i,this.#a)}#r=e=>{e.preventDefault(),this.#s()}}class S extends m{#o=[];constructor({filters:e}){super(),this.#o=e}get template(){return`\n  <form class="trip-filters" action="#" method="get">\n    ${this.#o.map((e=>(e=>{const{type:t,count:n}=e;return`\n    <div class="trip-filters__filter">\n      <input id="filter-${t}"\n        class="trip-filters__filter-input visually-hidden"\n        type="radio"\n        name="trip-filter"\n        value="${t}"\n        ${"everything"===t?"checked":""}\n        ${0===n?"disabled":""}\n      />\n        <label class="trip-filters__filter-label" for="filter-${t}" >\n          ${t}\n          (${n})\n        </label>\n    </div>\n  `})(e))).join("")}\n    <button class="visually-hidden" type="submit">\n      Accept filter\n    </button>\n  </form>\n`}}class O extends m{#t=null;#c=null;#d=null;#f=null;constructor({point:e,offers:t,destination:n,onEditClick:i}){super(),this.#t=e,this.#c=t,this.#d=n,this.#f=i,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#l)}get template(){return((e,t,n)=>{const{basePrice:i,dateFrom:a,dateTo:s,isFavorite:r,type:o}=e,c=(e=>e?T()(e).format("D MMMM"):"")(a),d=C(((e,t)=>{const n=T()(e);return T()(t).diff(n)})(a,s)),f=(e=>e.map((({title:e,price:t})=>`\n    <li class="event__offer">\n      <span class="event__offer-title">${e}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${t}</span>\n    </li>\n  `)).join(""))(t);return`\n    <li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="2019-03-18">${c}</time>\n\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${o}.png" alt="Event type icon">\n        </div>\n\n        <h3 class="event__title">${o} ${n.name}</h3>\n\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="2019-03-18T10:30">${C(a)}</time>\n            &mdash;\n            <time class="event__end-time" datetime="2019-03-18T11:00">${C(s)}</time>\n          </p>\n          <p class="event__duration">${d}</p>\n        </div>\n\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${i}</span>\n        </p>\n\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${f}\n        </ul>\n\n        <button class="event__favorite-btn ${r?"event__favorite-btn--active":""} " type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n\n      </div>\n    </li>\n  `})(this.#t,this.#c,this.#d)}#l=e=>{e.preventDefault(),this.#f()}}class P extends m{get template(){return'\n  <ul class="trip-events__list"></ul>\n'}}class B extends m{get template(){return`\n  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    ${M.map((e=>(e=>`\n  <div class="trip-sort__item  trip-sort__item--${e}">\n    <input id="sort-${e}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${e}">\n    <label class="trip-sort__btn" for="sort-${e}">${e}</label>\n  </div>\n`)(e))).join("")}\n  </form>\n`}}class H extends m{get template(){return'\n  <p class="trip-events__msg">\n    Click New Event to create your first point\n  </p>\n'}}const L=[{id:"16b7a5f0-de3e-47c3-8ffd-2e2fc91884ac",basePrice:8579,dateFrom:"2024-01-24T06:37:09.899Z",dateTo:"2024-01-24T13:03:09.899Z",destination:"039f3178-3015-46b2-a395-fa26efb2015c",isFavorite:!0,offers:[],type:"sightseeing"},{id:"82106653-195a-43a0-bb35-f12a0827de54",basePrice:1294,dateFrom:"2024-02-25T18:41:09.899Z",dateTo:"2024-02-27T09:05:09.899Z",destination:"3a3146cf-f88f-4d1e-8bed-7eb6cef145c8",isFavorite:!0,offers:["dec3c29a-c5ad-4388-b49c-c1f1455f0d03","2019ab0e-4e4e-4252-b9c0-d3a9f4db2923","b2006f18-828a-47e7-8b36-48560d825b83"],type:"bus"},{id:"e6c95ce7-801e-4a53-be7b-19d39cf3344b",basePrice:1619,dateFrom:"2024-03-28T15:57:09.899Z",dateTo:"2024-03-29T03:09:09.899Z",destination:"e2ddfcc3-a9b8-4db6-a811-a3828d2a829c",isFavorite:!0,offers:["71ae9618-d5a0-4d77-9d13-7f26805e176c"],type:"drive"},{id:"09ca028c-11dd-468f-a0fe-7a1fecf19f5e",basePrice:6096,dateFrom:"2024-04-30T12:44:09.899Z",dateTo:"2024-05-01T12:11:09.899Z",destination:"7aa8ddd3-9ebe-45cf-8456-5377802ac252",isFavorite:!1,offers:["b8529b05-414e-414f-98c4-fc46a0a36ef8","ac05e5bb-729e-41c4-b1cf-71087cd46806"],type:"flight"},{id:"3685074d-c267-43ac-a583-dff65c26a883",basePrice:3295,dateFrom:"2024-06-03T06:31:09.899Z",dateTo:"2024-06-04T03:00:09.899Z",destination:"363aa35f-8cee-48da-9ff8-6d0d6c54d9b0",isFavorite:!0,offers:["fc347484-63f4-4b73-9dcd-805ad2192d1e","f2c35098-c7cc-4870-81f8-24bbcbbd2eec","0c3d09c7-3750-4ae0-89f0-b405e76ad1ed"],type:"train"},{id:"d1ff4489-5616-4b36-af1d-464a44a323e1",basePrice:3850,dateFrom:"2024-07-04T13:18:09.899Z",dateTo:"2024-07-06T11:45:09.899Z",destination:"5052c42d-c848-4f5a-bc0e-1c7a9159b55b",isFavorite:!0,offers:[],type:"drive"},{id:"560dcd83-2eaf-4cfa-b797-faf67786f572",basePrice:9841,dateFrom:"2024-08-07T20:59:09.899Z",dateTo:"2024-08-08T03:18:09.899Z",destination:"363aa35f-8cee-48da-9ff8-6d0d6c54d9b0",isFavorite:!1,offers:[],type:"sightseeing"},{id:"9f9fa5af-26a6-40c7-9e3c-3bde16da2c73",basePrice:5566,dateFrom:"2024-09-08T14:35:09.899Z",dateTo:"2024-09-09T18:25:09.899Z",destination:"238dfde9-12df-43f3-ae52-52145715e238",isFavorite:!1,offers:["c2eae7b6-f4af-4a00-a4fe-f8a34e275ed3","b8529b05-414e-414f-98c4-fc46a0a36ef8","ac05e5bb-729e-41c4-b1cf-71087cd46806"],type:"flight"},{id:"84007401-b1aa-4e7f-97b2-b6fdb98068ff",basePrice:3925,dateFrom:"2024-10-10T07:54:09.899Z",dateTo:"2024-10-11T03:40:09.899Z",destination:"3a3146cf-f88f-4d1e-8bed-7eb6cef145c8",isFavorite:!1,offers:["954cc84d-7283-482a-8b23-67924764294f","9e299604-2f87-45dc-95e9-1edbfd566ab1","82528155-38b1-42dd-ba2d-93f78fec7c89"],type:"taxi"},{id:"18c874c3-b4ec-4c61-a44f-bb9521d58909",basePrice:9639,dateFrom:"2024-11-11T21:56:09.899Z",dateTo:"2024-11-13T18:38:09.899Z",destination:"e2ddfcc3-a9b8-4db6-a811-a3828d2a829c",isFavorite:!1,offers:["2019ab0e-4e4e-4252-b9c0-d3a9f4db2923","b2006f18-828a-47e7-8b36-48560d825b83"],type:"bus"},{id:"4ce49a17-6509-46ed-8f1f-62a12685db94",basePrice:6519,dateFrom:"2024-11-14T18:03:09.899Z",dateTo:"2024-11-16T14:40:09.899Z",destination:"5052c42d-c848-4f5a-bc0e-1c7a9159b55b",isFavorite:!0,offers:["71ae9618-d5a0-4d77-9d13-7f26805e176c"],type:"drive"},{id:"eedd664c-f3cb-46b3-96dc-4077df870d07",basePrice:2504,dateFrom:"2024-11-18T10:17:09.899Z",dateTo:"2024-11-20T01:42:09.899Z",destination:"d01a72e9-087f-4837-a146-ba6a1709ac22",isFavorite:!0,offers:["207e3e47-7a57-4a7d-905b-5d560ec30d59"],type:"restaurant"},{id:"7e69c996-3f30-4b34-ae0d-72894203d1ff",basePrice:2636,dateFrom:"2024-11-21T13:41:09.899Z",dateTo:"2024-11-22T19:07:09.899Z",destination:"579b75cd-c26b-43eb-a3f9-d153690db8b9",isFavorite:!0,offers:["fb921a7a-4c6b-4aa2-9059-77b60e347ece","71ae9618-d5a0-4d77-9d13-7f26805e176c"],type:"drive"},{id:"2087c1dc-b518-41bd-b729-2e57cc60833c",basePrice:7577,dateFrom:"2024-11-24T03:58:09.899Z",dateTo:"2024-11-24T18:52:09.899Z",destination:"579b75cd-c26b-43eb-a3f9-d153690db8b9",isFavorite:!0,offers:["954cc84d-7283-482a-8b23-67924764294f","9e299604-2f87-45dc-95e9-1edbfd566ab1","82528155-38b1-42dd-ba2d-93f78fec7c89"],type:"taxi"},{id:"f1ae8ed9-84f3-4085-a922-30c906cb7da7",basePrice:9617,dateFrom:"2024-11-26T07:48:09.899Z",dateTo:"2024-11-27T17:42:09.899Z",destination:"363aa35f-8cee-48da-9ff8-6d0d6c54d9b0",isFavorite:!0,offers:["fb921a7a-4c6b-4aa2-9059-77b60e347ece","71ae9618-d5a0-4d77-9d13-7f26805e176c"],type:"drive"},{id:"52d2fd02-a9ad-4aa0-a20b-ecabd4089858",basePrice:2211,dateFrom:"2024-11-28T01:29:09.899Z",dateTo:"2024-11-29T02:17:09.899Z",destination:"238dfde9-12df-43f3-ae52-52145715e238",isFavorite:!1,offers:["b8529b05-414e-414f-98c4-fc46a0a36ef8","ac05e5bb-729e-41c4-b1cf-71087cd46806"],type:"flight"},{id:"bd32f554-52e3-4fdd-b412-5244be467192",basePrice:5769,dateFrom:"2024-11-29T10:56:09.899Z",dateTo:"2024-12-01T07:00:09.899Z",destination:"5052c42d-c848-4f5a-bc0e-1c7a9159b55b",isFavorite:!0,offers:["9f523857-6d81-489c-8ec3-41dc9c67c01d","0416f625-1e61-4088-a7ea-b2f1f6769268","954cc84d-7283-482a-8b23-67924764294f","9e299604-2f87-45dc-95e9-1edbfd566ab1","82528155-38b1-42dd-ba2d-93f78fec7c89"],type:"taxi"},{id:"01d169f0-aa1e-4895-a1a3-2bcab76e6d92",basePrice:8717,dateFrom:"2024-12-01T20:10:09.899Z",dateTo:"2024-12-02T18:58:09.899Z",destination:"039f3178-3015-46b2-a395-fa26efb2015c",isFavorite:!1,offers:["b2006f18-828a-47e7-8b36-48560d825b83"],type:"bus"},{id:"9be203e8-ee2e-4a79-b12e-d8aeee2bf682",basePrice:7400,dateFrom:"2024-12-04T07:15:09.899Z",dateTo:"2024-12-04T21:29:09.899Z",destination:"d01a72e9-087f-4837-a146-ba6a1709ac22",isFavorite:!0,offers:["e71488f0-af79-4c1d-b864-cf07ce0d9ee4","52ceefd8-2c4f-4620-9465-44ced8a5693c","fbd3d2b4-1cf5-4b47-b210-c0e11f6f5b0b","f30d0ade-6e37-4627-88e6-c6819e1730a6"],type:"check-in"},{id:"03df7454-514a-4f7d-b57e-f9f3598f5686",basePrice:7898,dateFrom:"2024-12-05T11:49:09.899Z",dateTo:"2024-12-06T05:52:09.899Z",destination:"7aa8ddd3-9ebe-45cf-8456-5377802ac252",isFavorite:!1,offers:[],type:"flight"},{id:"8981a39f-8470-45d1-8ae7-6d8f2fd07663",basePrice:4863,dateFrom:"2024-12-06T15:34:09.899Z",dateTo:"2024-12-07T01:25:09.899Z",destination:"e2ddfcc3-a9b8-4db6-a811-a3828d2a829c",isFavorite:!0,offers:["fc347484-63f4-4b73-9dcd-805ad2192d1e","f2c35098-c7cc-4870-81f8-24bbcbbd2eec","0c3d09c7-3750-4ae0-89f0-b405e76ad1ed"],type:"train"},{id:"6ba5ed45-fded-4d7b-8e42-6dd69a8db188",basePrice:4723,dateFrom:"2024-12-09T01:48:09.899Z",dateTo:"2024-12-10T07:43:09.899Z",destination:"e2ddfcc3-a9b8-4db6-a811-a3828d2a829c",isFavorite:!1,offers:["fe102690-c3f7-4620-9eed-1be6e5515bb1","98dc10ed-69b8-4829-811e-b8c89f220e90","4859058d-caa6-4747-be06-c31841f6f8dd","1807bf59-1021-41a2-a409-155962017348","56b06cbf-bbef-45cc-bedf-04175e6e0d8f"],type:"ship"},{id:"5a0d0a2c-4649-4a8d-9bc0-f23f0f15b157",basePrice:5216,dateFrom:"2024-12-11T15:29:09.899Z",dateTo:"2024-12-12T23:28:09.899Z",destination:"039f3178-3015-46b2-a395-fa26efb2015c",isFavorite:!1,offers:["954cc84d-7283-482a-8b23-67924764294f","9e299604-2f87-45dc-95e9-1edbfd566ab1","82528155-38b1-42dd-ba2d-93f78fec7c89"],type:"taxi"},{id:"c531b83e-cd4a-45a4-9a98-28dbdec65f01",basePrice:8413,dateFrom:"2024-12-14T16:23:09.899Z",dateTo:"2024-12-16T05:52:09.899Z",destination:"7aa8ddd3-9ebe-45cf-8456-5377802ac252",isFavorite:!1,offers:["71ae9618-d5a0-4d77-9d13-7f26805e176c"],type:"drive"},{id:"7e3a3885-f25c-49c8-b408-cb8fe8f46ac3",basePrice:6061,dateFrom:"2024-12-17T03:51:09.899Z",dateTo:"2024-12-18T04:57:09.899Z",destination:"d01a72e9-087f-4837-a146-ba6a1709ac22",isFavorite:!1,offers:["b2006f18-828a-47e7-8b36-48560d825b83"],type:"bus"}],I=()=>{return(e=L)[$(0,e.length-1)];var e},N=[{id:"e2ddfcc3-a9b8-4db6-a811-a3828d2a829c",description:"Nagasaki - with crowded streets",name:"Nagasaki",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/19.jpg",description:"Nagasaki with an embankment of a mighty river as a centre of attraction"}]},{id:"3a3146cf-f88f-4d1e-8bed-7eb6cef145c8",description:"Munich - full of of cozy canteens where you can try the best coffee in the Middle East",name:"Munich",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/8.jpg",description:"Munich with an embankment of a mighty river as a centre of attraction"},{src:"https://24.objects.htmlacademy.pro/static/destinations/15.jpg",description:"Munich in a middle of Europe"},{src:"https://24.objects.htmlacademy.pro/static/destinations/12.jpg",description:"Munich for those who value comfort and coziness"}]},{id:"039f3178-3015-46b2-a395-fa26efb2015c",description:"Chamonix - in a middle of Europe",name:"Chamonix",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/2.jpg",description:"Chamonix is a beautiful city"},{src:"https://24.objects.htmlacademy.pro/static/destinations/4.jpg",description:"Chamonix a perfect place to stay with a family"},{src:"https://24.objects.htmlacademy.pro/static/destinations/4.jpg",description:"Chamonix famous for its crowded street markets with the best street food in Asia"},{src:"https://24.objects.htmlacademy.pro/static/destinations/19.jpg",description:"Chamonix is a beautiful city"}]},{id:"5052c42d-c848-4f5a-bc0e-1c7a9159b55b",description:"Rome - with crowded streets",name:"Rome",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/13.jpg",description:"Rome middle-eastern paradise"},{src:"https://24.objects.htmlacademy.pro/static/destinations/14.jpg",description:"Rome famous for its crowded street markets with the best street food in Asia"},{src:"https://24.objects.htmlacademy.pro/static/destinations/10.jpg",description:"Rome a perfect place to stay with a family"}]},{id:"579b75cd-c26b-43eb-a3f9-d153690db8b9",description:"Moscow - with an embankment of a mighty river as a centre of attraction",name:"Moscow",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/5.jpg",description:"Moscow with an embankment of a mighty river as a centre of attraction"},{src:"https://24.objects.htmlacademy.pro/static/destinations/3.jpg",description:"Moscow for those who value comfort and coziness"},{src:"https://24.objects.htmlacademy.pro/static/destinations/6.jpg",description:"Moscow a true asian pearl"},{src:"https://24.objects.htmlacademy.pro/static/destinations/9.jpg",description:"Moscow with crowded streets"}]},{id:"7aa8ddd3-9ebe-45cf-8456-5377802ac252",description:"Den Haag - with a beautiful old town",name:"Den Haag",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/20.jpg",description:"Den Haag famous for its crowded street markets with the best street food in Asia"},{src:"https://24.objects.htmlacademy.pro/static/destinations/8.jpg",description:"Den Haag famous for its crowded street markets with the best street food in Asia"},{src:"https://24.objects.htmlacademy.pro/static/destinations/11.jpg",description:"Den Haag a true asian pearl"},{src:"https://24.objects.htmlacademy.pro/static/destinations/3.jpg",description:"Den Haag famous for its crowded street markets with the best street food in Asia"}]},{id:"238dfde9-12df-43f3-ae52-52145715e238",description:"Oslo - middle-eastern paradise",name:"Oslo",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/1.jpg",description:"Oslo full of of cozy canteens where you can try the best coffee in the Middle East"}]},{id:"d01a72e9-087f-4837-a146-ba6a1709ac22",description:"Kioto - with crowded streets",name:"Kioto",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/5.jpg",description:"Kioto a perfect place to stay with a family"}]},{id:"363aa35f-8cee-48da-9ff8-6d0d6c54d9b0",description:"Naples - full of of cozy canteens where you can try the best coffee in the Middle East",name:"Naples",pictures:[]},{id:"2b3688ec-3660-4739-bbdb-3702d407af3b",description:"Vien - middle-eastern paradise",name:"Vien",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/7.jpg",description:"Vien with crowded streets"},{src:"https://24.objects.htmlacademy.pro/static/destinations/17.jpg",description:"Vien with an embankment of a mighty river as a centre of attraction"},{src:"https://24.objects.htmlacademy.pro/static/destinations/8.jpg",description:"Vien is a beautiful city"},{src:"https://24.objects.htmlacademy.pro/static/destinations/4.jpg",description:"Vien a true asian pearl"},{src:"https://24.objects.htmlacademy.pro/static/destinations/5.jpg",description:"Vien famous for its crowded street markets with the best street food in Asia"}]}],U=[{type:"taxi",offers:[{id:"9f523857-6d81-489c-8ec3-41dc9c67c01d",title:"Upgrade to a business class",price:48},{id:"0416f625-1e61-4088-a7ea-b2f1f6769268",title:"Choose the radio station",price:141},{id:"954cc84d-7283-482a-8b23-67924764294f",title:"Choose temperature",price:114},{id:"9e299604-2f87-45dc-95e9-1edbfd566ab1",title:"Drive quickly, I'm in a hurry",price:40},{id:"82528155-38b1-42dd-ba2d-93f78fec7c89",title:"Drive slowly",price:101}]},{type:"bus",offers:[{id:"dec3c29a-c5ad-4388-b49c-c1f1455f0d03",title:"Infotainment system",price:177},{id:"2019ab0e-4e4e-4252-b9c0-d3a9f4db2923",title:"Order meal",price:98},{id:"b2006f18-828a-47e7-8b36-48560d825b83",title:"Choose seats",price:71}]},{type:"train",offers:[{id:"fc347484-63f4-4b73-9dcd-805ad2192d1e",title:"Book a taxi at the arrival point",price:157},{id:"f2c35098-c7cc-4870-81f8-24bbcbbd2eec",title:"Order a breakfast",price:30},{id:"0c3d09c7-3750-4ae0-89f0-b405e76ad1ed",title:"Wake up at a certain time",price:44}]},{type:"flight",offers:[{id:"0c90d2ee-7a8d-470c-b943-b6153691e094",title:"Choose meal",price:143},{id:"17e7c2c1-414f-478d-b17f-e68b7dacc5c1",title:"Choose seats",price:173},{id:"0962c668-3b9a-4049-a126-fd8a93bd6189",title:"Upgrade to comfort class",price:165},{id:"c2eae7b6-f4af-4a00-a4fe-f8a34e275ed3",title:"Upgrade to business class",price:95},{id:"b8529b05-414e-414f-98c4-fc46a0a36ef8",title:"Add luggage",price:40},{id:"ac05e5bb-729e-41c4-b1cf-71087cd46806",title:"Business lounge",price:80}]},{type:"check-in",offers:[{id:"3d0379ee-a805-48e6-b0ab-0608913e4a33",title:"Choose the time of check-in",price:166},{id:"e71488f0-af79-4c1d-b864-cf07ce0d9ee4",title:"Choose the time of check-out",price:32},{id:"52ceefd8-2c4f-4620-9465-44ced8a5693c",title:"Add breakfast",price:126},{id:"fbd3d2b4-1cf5-4b47-b210-c0e11f6f5b0b",title:"Laundry",price:131},{id:"f30d0ade-6e37-4627-88e6-c6819e1730a6",title:"Order a meal from the restaurant",price:67}]},{type:"sightseeing",offers:[]},{type:"ship",offers:[{id:"0cd342e2-e7d3-4159-90b4-6add030218bb",title:"Choose meal",price:118},{id:"fe102690-c3f7-4620-9eed-1be6e5515bb1",title:"Choose seats",price:184},{id:"98dc10ed-69b8-4829-811e-b8c89f220e90",title:"Upgrade to comfort class",price:45},{id:"4859058d-caa6-4747-be06-c31841f6f8dd",title:"Upgrade to business class",price:127},{id:"1807bf59-1021-41a2-a409-155962017348",title:"Add luggage",price:94},{id:"56b06cbf-bbef-45cc-bedf-04175e6e0d8f",title:"Business lounge",price:195}]},{type:"drive",offers:[{id:"fb921a7a-4c6b-4aa2-9059-77b60e347ece",title:"With automatic transmission",price:114},{id:"71ae9618-d5a0-4d77-9d13-7f26805e176c",title:"With air conditioning",price:114}]},{type:"restaurant",offers:[{id:"fd9560db-ab39-43d7-bbdd-d369a311eac9",title:"Choose live music",price:74},{id:"207e3e47-7a57-4a7d-905b-5d560ec30d59",title:"Choose VIP area",price:171}]}],Y=document.querySelector(".trip-events"),W=document.querySelector(".trip-controls__filters"),V=new class{#p=Array.from({length:$(0,L.length-1)},I);get points(){return this.#p}},z=new class{#u=N;get destinations(){return this.#u}getDestinationById(e){return this.#u.find((t=>t.id===e))}},R=new class{#c=U;get offers(){return this.#c}getOffersByType(e){return this.#c.find((t=>t.type===e))}getOffersById(e,t){return this.getOffersByType(e).offers.filter((e=>t.find((t=>e.id===t))))}},q=new class{#b=null;#h=null;#m=null;#v=null;#y=null;#p=null;#_=new P;constructor({pointsContainer:e,filtersContainer:t,pointsModel:n,destinationsModel:i,offersModel:a}){this.#b=e,this.#h=t,this.#m=n,this.#y=i,this.#v=a}#g({point:e,offers:t,destination:n}){const i=e=>{_&&(e.preventDefault(),r(),document.removeEventListener("keydown",i))},a=new O({point:e,offers:t,destination:n,onEditClick:()=>{y(s,a),document.addEventListener("keydown",i)}}),s=new Z({point:e,allOffers:this.#v.getOffersByType(e.type),pointDestination:this.#y.getDestinationById(e.destination),allDestinations:this.#y.destinations,onFormSubmit:()=>{r(),document.removeEventListener("keydown",i)}});function r(){y(a,s)}v(a,this.#_.element)}#$(){const e=(t=this.#p,Object.entries(E).map((([e,n])=>({type:e,count:n(t).length}))));var t;v(new S({filters:e}),this.#h),v(new B,this.#b),v(this.#_,this.#b),0!==this.#p.length?this.#p.forEach((e=>{this.#g({point:e,offers:[...this.#v.getOffersById(e.type,e.offers)],destination:this.#y.getDestinationById(e.destination)})})):v(new H,this.#b)}init(){this.#p=[...this.#m.points],this.#$()}}({pointsContainer:Y,filtersContainer:W,pointsModel:V,destinationsModel:z,offersModel:R});q.init()})()})();
//# sourceMappingURL=bundle.3d667fd2af5a109c0ea2.js.map