(()=>{var e={353:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,i="millisecond",n="second",a="minute",s="hour",r="day",c="week",d="month",o="quarter",f="year",l="date",p="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],i=e%100;return"["+e+(t[(i-20)%10]||t[i]||t[0])+"]"}},m=function(e,t,i){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(i)+e},v={s:m,z:function(e){var t=-e.utcOffset(),i=Math.abs(t),n=Math.floor(i/60),a=i%60;return(t<=0?"+":"-")+m(n,2,"0")+":"+m(a,2,"0")},m:function e(t,i){if(t.date()<i.date())return-e(i,t);var n=12*(i.year()-t.year())+(i.month()-t.month()),a=t.clone().add(n,d),s=i-a<0,r=t.clone().add(n+(s?-1:1),d);return+(-(n+(i-a)/(s?a-r:r-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:f,w:c,d:r,D:l,h:s,m:a,s:n,ms:i,Q:o}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",_={};_[y]=h;var g="$isDayjsObject",$=function(e){return e instanceof j||!(!e||!e[g])},T=function e(t,i,n){var a;if(!t)return y;if("string"==typeof t){var s=t.toLowerCase();_[s]&&(a=s),i&&(_[s]=i,a=s);var r=t.split("-");if(!a&&r.length>1)return e(r[0])}else{var c=t.name;_[c]=t,a=c}return!n&&a&&(y=a),a||!n&&y},w=function(e,t){if($(e))return e.clone();var i="object"==typeof t?t:{};return i.date=e,i.args=arguments,new j(i)},M=v;M.l=T,M.i=$,M.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var j=function(){function h(e){this.$L=T(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[g]=!0}var m=h.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,i=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(b);if(n){var a=n[2]-1||0,s=(n[7]||"0").substring(0,3);return i?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(t)}(e),this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return M},m.isValid=function(){return!(this.$d.toString()===p)},m.isSame=function(e,t){var i=w(e);return this.startOf(t)<=i&&i<=this.endOf(t)},m.isAfter=function(e,t){return w(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<w(e)},m.$g=function(e,t,i){return M.u(e)?this[t]:this.set(i,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var i=this,o=!!M.u(t)||t,p=M.p(e),b=function(e,t){var n=M.w(i.$u?Date.UTC(i.$y,t,e):new Date(i.$y,t,e),i);return o?n:n.endOf(r)},u=function(e,t){return M.w(i.toDate()[e].apply(i.toDate("s"),(o?[0,0,0,0]:[23,59,59,999]).slice(t)),i)},h=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case f:return o?b(1,0):b(31,11);case d:return o?b(1,m):b(0,m+1);case c:var _=this.$locale().weekStart||0,g=(h<_?h+7:h)-_;return b(o?v-g:v+(6-g),m);case r:case l:return u(y+"Hours",0);case s:return u(y+"Minutes",1);case a:return u(y+"Seconds",2);case n:return u(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var c,o=M.p(e),p="set"+(this.$u?"UTC":""),b=(c={},c[r]=p+"Date",c[l]=p+"Date",c[d]=p+"Month",c[f]=p+"FullYear",c[s]=p+"Hours",c[a]=p+"Minutes",c[n]=p+"Seconds",c[i]=p+"Milliseconds",c)[o],u=o===r?this.$D+(t-this.$W):t;if(o===d||o===f){var h=this.clone().set(l,1);h.$d[b](u),h.init(),this.$d=h.set(l,Math.min(this.$D,h.daysInMonth())).$d}else b&&this.$d[b](u);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[M.p(e)]()},m.add=function(i,o){var l,p=this;i=Number(i);var b=M.p(o),u=function(e){var t=w(p);return M.w(t.date(t.date()+Math.round(e*i)),p)};if(b===d)return this.set(d,this.$M+i);if(b===f)return this.set(f,this.$y+i);if(b===r)return u(1);if(b===c)return u(7);var h=(l={},l[a]=e,l[s]=t,l[n]=1e3,l)[b]||1,m=this.$d.getTime()+i*h;return M.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,i=this.$locale();if(!this.isValid())return i.invalidDate||p;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=M.z(this),s=this.$H,r=this.$m,c=this.$M,d=i.weekdays,o=i.months,f=i.meridiem,l=function(e,i,a,s){return e&&(e[i]||e(t,n))||a[i].slice(0,s)},b=function(e){return M.s(s%12||12,e,"0")},h=f||function(e,t,i){var n=e<12?"AM":"PM";return i?n.toLowerCase():n};return n.replace(u,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return M.s(t.$y,4,"0");case"M":return c+1;case"MM":return M.s(c+1,2,"0");case"MMM":return l(i.monthsShort,c,o,3);case"MMMM":return l(o,c);case"D":return t.$D;case"DD":return M.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return l(i.weekdaysMin,t.$W,d,2);case"ddd":return l(i.weekdaysShort,t.$W,d,3);case"dddd":return d[t.$W];case"H":return String(s);case"HH":return M.s(s,2,"0");case"h":return b(1);case"hh":return b(2);case"a":return h(s,r,!0);case"A":return h(s,r,!1);case"m":return String(r);case"mm":return M.s(r,2,"0");case"s":return String(t.$s);case"ss":return M.s(t.$s,2,"0");case"SSS":return M.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(i,l,p){var b,u=this,h=M.p(l),m=w(i),v=(m.utcOffset()-this.utcOffset())*e,y=this-m,_=function(){return M.m(u,m)};switch(h){case f:b=_()/12;break;case d:b=_();break;case o:b=_()/3;break;case c:b=(y-v)/6048e5;break;case r:b=(y-v)/864e5;break;case s:b=y/t;break;case a:b=y/e;break;case n:b=y/1e3;break;default:b=y}return p?b:M.a(b)},m.daysInMonth=function(){return this.endOf(d).$D},m.$locale=function(){return _[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var i=this.clone(),n=T(e,t,!0);return n&&(i.$L=n),i},m.clone=function(){return M.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),D=j.prototype;return w.prototype=D,[["$ms",i],["$s",n],["$m",a],["$H",s],["$W",r],["$M",d],["$y",f],["$D",l]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,j,w),e.$i=!0),w},w.locale=T,w.isDayjs=$,w.unix=function(e){return w(1e3*e)},w.en=_[y],w.Ls=_,w.p={},w}()}},t={};function i(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,i),s.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,i="beforeend"){t.insertAdjacentElement(i,e.getElement())}var n=i(353),a=i.n(n);const s=["everything","future","present","past"],r=["day","event","time","price","offers"],c=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],d={id:"",basePrice:0,dateFrom:"",dateTo:"",destination:"",isFavorite:!1,offers:[""],type:"flight"},o=e=>e[0].toUpperCase()+e.slice(1),f=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,l=e=>e?a()(e).format("HH : mm"):"",p=e=>e?a()(e).format("DD/MM/YY HH:mm"):"";class b{constructor({point:e,allOffers:t,pointDestination:i,allDestinations:n}){this.point=e,this.allOffers=t,this.pointDestination=i,this.allDestinations=n}getTemplate(){return((e,t,i=null,n)=>{const{basePrice:a,dateFrom:s,dateTo:r,type:d}=e,f=(e=>`\n  <div class="event__type-wrapper">\n    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n      <span class="visually-hidden">Choose event type</span>\n      <img class="event__type-icon" width="17" height="17" src="img/icons/${e}.png" alt="Event type icon">\n    </label>\n    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n    <div class="event__type-list">\n      <fieldset class="event__type-group">\n        <legend class="visually-hidden">Event type</legend>\n        ${c.map((e=>(e=>`\n  <div class="event__type-item">\n    <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}">\n    <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">${o(e)}</label>\n  </div>\n`)(e))).join("")}\n      </fieldset>\n    </div>\n  </div>\n`)(d),l=(e=>`\n  <datalist id="destination-list-1">\n    ${e.map((e=>(e=>`\n  <option value="${e.name}"></option>\n`)(e))).join("")}\n  </datalist>\n`)(n),b=(e=>{if(!e)return"";const{description:t,pictures:i}=e;return`\n    <section class="event__section  event__section--destination">\n      <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n      <p class="event__destination-description">\n        ${t}\n      </p>\n\n      <div class="event__photos-container">\n        <div class="event__photos-tape">\n          ${i.map((e=>`\n            <img class="event__photo" src="${e.src}" alt="${e.description}">\n          `)).join("")}\n        </div>\n      </div>\n\n    </section>\n  `})(i),u=(({offers:e})=>`\n  <section class="event__section  event__section--offers">\n    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n      <div class="event__available-offers">\n        ${e.map((e=>(({id:e,title:t,price:i})=>`\n  <div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e}-1" type="checkbox" name="event-offer-${e}">\n    <label class="event__offer-label" for="event-offer-${e}-1">\n      <span class="event__offer-title">${t}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${i}</span>\n    </label>\n  </div>\n`)(e))).join("")}\n      </div>\n  </section>\n`)(t);return`\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n\n          ${f}\n\n        <div class="event__field-group  event__field-group--destination">\n          <label class="event__label  event__type-output" for="event-destination-1">\n            ${o(d)}\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination"\n          value="${i?i.name:""}" list="destination-list-1">\n\n          ${l}\n\n        </div>\n\n        <div class="event__field-group  event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-1">From</label>\n          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${p(s)}">\n          &mdash;\n          <label class="visually-hidden" for="event-end-time-1">To</label>\n          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${p(r)}">\n        </div>\n\n        <div class="event__field-group  event__field-group--price">\n          <label class="event__label" for="event-price-1">\n            <span class="visually-hidden">Price</span>\n            &euro;\n          </label>\n          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${a}">\n        </div>\n\n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">Delete</button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </header>\n\n        ${u}\n\n        ${b}\n\n    </form>\n  `})(this.point,this.allOffers,this.pointDestination,this.allDestinations)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class u{getTemplate(){return`\n    <form class="trip-filters" action="#" method="get">\n      ${s.map((e=>(e=>`\n  <div class="trip-filters__filter">\n    <input id="filter-${e}" class="trip-filters__filter-input visually-hidden" type="radio" name="trip-filter" value="${e}" />\n      <label class="trip-filters__filter-label" for="filter-${e}" >\n        ${e}\n      </label>\n  </div>\n`)(e))).join("")}\n      <button class="visually-hidden" type="submit">\n        Accept filter\n      </button>\n    </form>\n`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class h{constructor(e){this.point=e}getTemplate(){return(({point:e,offers:t,destination:i})=>{const{basePrice:n,dateFrom:s,dateTo:r,isFavorite:c,type:d}=e,o=(e=>e?a()(e).format("D MMMM"):"")(s),f=l(((e,t)=>{const i=a()(e);return a()(t).diff(i)})(s,r)),p=function(e){return e.map((({title:e,price:t})=>`\n    <li class="event__offer">\n      <span class="event__offer-title">${e}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${t}</span>\n    </li>\n  `)).join("")}(t);return`\n    <li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="2019-03-18">${o}</time>\n\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${d}.png" alt="Event type icon">\n        </div>\n\n        <h3 class="event__title">${d} ${i.name}</h3>\n\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="2019-03-18T10:30">${l(s)}</time>\n            &mdash;\n            <time class="event__end-time" datetime="2019-03-18T11:00">${l(r)}</time>\n          </p>\n          <p class="event__duration">${f}</p>\n        </div>\n\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${n}</span>\n        </p>\n\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${p}\n        </ul>\n\n        <button class="event__favorite-btn ${c?"event__favorite-btn--active":""} " type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n\n      </div>\n    </li>\n  `})(this.point)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class m{getTemplate(){return'\n  <ul class="trip-events__list"></ul>\n'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class v{getTemplate(){return`\n  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    ${r.map((e=>(e=>`\n  <div class="trip-sort__item  trip-sort__item--${e}">\n    <input id="sort-${e}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${e}">\n    <label class="trip-sort__btn" for="sort-${e}">${e}</label>\n  </div>\n`)(e))).join("")}\n  </form>\n`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const y=[{id:"16b7a5f0-de3e-47c3-8ffd-2e2fc91884ac",basePrice:8579,dateFrom:"2024-10-24T06:37:09.899Z",dateTo:"2024-10-24T13:03:09.899Z",destination:"039f3178-3015-46b2-a395-fa26efb2015c",isFavorite:!0,offers:[],type:"sightseeing"},{id:"82106653-195a-43a0-bb35-f12a0827de54",basePrice:1294,dateFrom:"2024-10-25T18:41:09.899Z",dateTo:"2024-10-27T09:05:09.899Z",destination:"3a3146cf-f88f-4d1e-8bed-7eb6cef145c8",isFavorite:!0,offers:["dec3c29a-c5ad-4388-b49c-c1f1455f0d03","2019ab0e-4e4e-4252-b9c0-d3a9f4db2923","b2006f18-828a-47e7-8b36-48560d825b83"],type:"bus"},{id:"e6c95ce7-801e-4a53-be7b-19d39cf3344b",basePrice:1619,dateFrom:"2024-10-28T15:57:09.899Z",dateTo:"2024-10-29T03:09:09.899Z",destination:"e2ddfcc3-a9b8-4db6-a811-a3828d2a829c",isFavorite:!0,offers:["71ae9618-d5a0-4d77-9d13-7f26805e176c"],type:"drive"},{id:"09ca028c-11dd-468f-a0fe-7a1fecf19f5e",basePrice:6096,dateFrom:"2024-10-30T12:44:09.899Z",dateTo:"2024-11-01T12:11:09.899Z",destination:"7aa8ddd3-9ebe-45cf-8456-5377802ac252",isFavorite:!1,offers:["b8529b05-414e-414f-98c4-fc46a0a36ef8","ac05e5bb-729e-41c4-b1cf-71087cd46806"],type:"flight"},{id:"3685074d-c267-43ac-a583-dff65c26a883",basePrice:3295,dateFrom:"2024-11-03T06:31:09.899Z",dateTo:"2024-11-04T03:00:09.899Z",destination:"363aa35f-8cee-48da-9ff8-6d0d6c54d9b0",isFavorite:!0,offers:["fc347484-63f4-4b73-9dcd-805ad2192d1e","f2c35098-c7cc-4870-81f8-24bbcbbd2eec","0c3d09c7-3750-4ae0-89f0-b405e76ad1ed"],type:"train"},{id:"d1ff4489-5616-4b36-af1d-464a44a323e1",basePrice:3850,dateFrom:"2024-11-04T13:18:09.899Z",dateTo:"2024-11-06T11:45:09.899Z",destination:"5052c42d-c848-4f5a-bc0e-1c7a9159b55b",isFavorite:!0,offers:[],type:"drive"},{id:"560dcd83-2eaf-4cfa-b797-faf67786f572",basePrice:9841,dateFrom:"2024-11-07T20:59:09.899Z",dateTo:"2024-11-08T03:18:09.899Z",destination:"363aa35f-8cee-48da-9ff8-6d0d6c54d9b0",isFavorite:!1,offers:[],type:"sightseeing"},{id:"9f9fa5af-26a6-40c7-9e3c-3bde16da2c73",basePrice:5566,dateFrom:"2024-11-08T14:35:09.899Z",dateTo:"2024-11-09T18:25:09.899Z",destination:"238dfde9-12df-43f3-ae52-52145715e238",isFavorite:!1,offers:["c2eae7b6-f4af-4a00-a4fe-f8a34e275ed3","b8529b05-414e-414f-98c4-fc46a0a36ef8","ac05e5bb-729e-41c4-b1cf-71087cd46806"],type:"flight"},{id:"84007401-b1aa-4e7f-97b2-b6fdb98068ff",basePrice:3925,dateFrom:"2024-11-10T07:54:09.899Z",dateTo:"2024-11-11T03:40:09.899Z",destination:"3a3146cf-f88f-4d1e-8bed-7eb6cef145c8",isFavorite:!1,offers:["954cc84d-7283-482a-8b23-67924764294f","9e299604-2f87-45dc-95e9-1edbfd566ab1","82528155-38b1-42dd-ba2d-93f78fec7c89"],type:"taxi"},{id:"18c874c3-b4ec-4c61-a44f-bb9521d58909",basePrice:9639,dateFrom:"2024-11-11T21:56:09.899Z",dateTo:"2024-11-13T18:38:09.899Z",destination:"e2ddfcc3-a9b8-4db6-a811-a3828d2a829c",isFavorite:!1,offers:["2019ab0e-4e4e-4252-b9c0-d3a9f4db2923","b2006f18-828a-47e7-8b36-48560d825b83"],type:"bus"},{id:"4ce49a17-6509-46ed-8f1f-62a12685db94",basePrice:6519,dateFrom:"2024-11-14T18:03:09.899Z",dateTo:"2024-11-16T14:40:09.899Z",destination:"5052c42d-c848-4f5a-bc0e-1c7a9159b55b",isFavorite:!0,offers:["71ae9618-d5a0-4d77-9d13-7f26805e176c"],type:"drive"},{id:"eedd664c-f3cb-46b3-96dc-4077df870d07",basePrice:2504,dateFrom:"2024-11-18T10:17:09.899Z",dateTo:"2024-11-20T01:42:09.899Z",destination:"d01a72e9-087f-4837-a146-ba6a1709ac22",isFavorite:!0,offers:["207e3e47-7a57-4a7d-905b-5d560ec30d59"],type:"restaurant"},{id:"7e69c996-3f30-4b34-ae0d-72894203d1ff",basePrice:2636,dateFrom:"2024-11-21T13:41:09.899Z",dateTo:"2024-11-22T19:07:09.899Z",destination:"579b75cd-c26b-43eb-a3f9-d153690db8b9",isFavorite:!0,offers:["fb921a7a-4c6b-4aa2-9059-77b60e347ece","71ae9618-d5a0-4d77-9d13-7f26805e176c"],type:"drive"},{id:"2087c1dc-b518-41bd-b729-2e57cc60833c",basePrice:7577,dateFrom:"2024-11-24T03:58:09.899Z",dateTo:"2024-11-24T18:52:09.899Z",destination:"579b75cd-c26b-43eb-a3f9-d153690db8b9",isFavorite:!0,offers:["954cc84d-7283-482a-8b23-67924764294f","9e299604-2f87-45dc-95e9-1edbfd566ab1","82528155-38b1-42dd-ba2d-93f78fec7c89"],type:"taxi"},{id:"f1ae8ed9-84f3-4085-a922-30c906cb7da7",basePrice:9617,dateFrom:"2024-11-26T07:48:09.899Z",dateTo:"2024-11-27T17:42:09.899Z",destination:"363aa35f-8cee-48da-9ff8-6d0d6c54d9b0",isFavorite:!0,offers:["fb921a7a-4c6b-4aa2-9059-77b60e347ece","71ae9618-d5a0-4d77-9d13-7f26805e176c"],type:"drive"},{id:"52d2fd02-a9ad-4aa0-a20b-ecabd4089858",basePrice:2211,dateFrom:"2024-11-28T01:29:09.899Z",dateTo:"2024-11-29T02:17:09.899Z",destination:"238dfde9-12df-43f3-ae52-52145715e238",isFavorite:!1,offers:["b8529b05-414e-414f-98c4-fc46a0a36ef8","ac05e5bb-729e-41c4-b1cf-71087cd46806"],type:"flight"},{id:"bd32f554-52e3-4fdd-b412-5244be467192",basePrice:5769,dateFrom:"2024-11-29T10:56:09.899Z",dateTo:"2024-12-01T07:00:09.899Z",destination:"5052c42d-c848-4f5a-bc0e-1c7a9159b55b",isFavorite:!0,offers:["9f523857-6d81-489c-8ec3-41dc9c67c01d","0416f625-1e61-4088-a7ea-b2f1f6769268","954cc84d-7283-482a-8b23-67924764294f","9e299604-2f87-45dc-95e9-1edbfd566ab1","82528155-38b1-42dd-ba2d-93f78fec7c89"],type:"taxi"},{id:"01d169f0-aa1e-4895-a1a3-2bcab76e6d92",basePrice:8717,dateFrom:"2024-12-01T20:10:09.899Z",dateTo:"2024-12-02T18:58:09.899Z",destination:"039f3178-3015-46b2-a395-fa26efb2015c",isFavorite:!1,offers:["b2006f18-828a-47e7-8b36-48560d825b83"],type:"bus"},{id:"9be203e8-ee2e-4a79-b12e-d8aeee2bf682",basePrice:7400,dateFrom:"2024-12-04T07:15:09.899Z",dateTo:"2024-12-04T21:29:09.899Z",destination:"d01a72e9-087f-4837-a146-ba6a1709ac22",isFavorite:!0,offers:["e71488f0-af79-4c1d-b864-cf07ce0d9ee4","52ceefd8-2c4f-4620-9465-44ced8a5693c","fbd3d2b4-1cf5-4b47-b210-c0e11f6f5b0b","f30d0ade-6e37-4627-88e6-c6819e1730a6"],type:"check-in"},{id:"03df7454-514a-4f7d-b57e-f9f3598f5686",basePrice:7898,dateFrom:"2024-12-05T11:49:09.899Z",dateTo:"2024-12-06T05:52:09.899Z",destination:"7aa8ddd3-9ebe-45cf-8456-5377802ac252",isFavorite:!1,offers:[],type:"flight"},{id:"8981a39f-8470-45d1-8ae7-6d8f2fd07663",basePrice:4863,dateFrom:"2024-12-06T15:34:09.899Z",dateTo:"2024-12-07T01:25:09.899Z",destination:"e2ddfcc3-a9b8-4db6-a811-a3828d2a829c",isFavorite:!0,offers:["fc347484-63f4-4b73-9dcd-805ad2192d1e","f2c35098-c7cc-4870-81f8-24bbcbbd2eec","0c3d09c7-3750-4ae0-89f0-b405e76ad1ed"],type:"train"},{id:"6ba5ed45-fded-4d7b-8e42-6dd69a8db188",basePrice:4723,dateFrom:"2024-12-09T01:48:09.899Z",dateTo:"2024-12-10T07:43:09.899Z",destination:"e2ddfcc3-a9b8-4db6-a811-a3828d2a829c",isFavorite:!1,offers:["fe102690-c3f7-4620-9eed-1be6e5515bb1","98dc10ed-69b8-4829-811e-b8c89f220e90","4859058d-caa6-4747-be06-c31841f6f8dd","1807bf59-1021-41a2-a409-155962017348","56b06cbf-bbef-45cc-bedf-04175e6e0d8f"],type:"ship"},{id:"5a0d0a2c-4649-4a8d-9bc0-f23f0f15b157",basePrice:5216,dateFrom:"2024-12-11T15:29:09.899Z",dateTo:"2024-12-12T23:28:09.899Z",destination:"039f3178-3015-46b2-a395-fa26efb2015c",isFavorite:!1,offers:["954cc84d-7283-482a-8b23-67924764294f","9e299604-2f87-45dc-95e9-1edbfd566ab1","82528155-38b1-42dd-ba2d-93f78fec7c89"],type:"taxi"},{id:"c531b83e-cd4a-45a4-9a98-28dbdec65f01",basePrice:8413,dateFrom:"2024-12-14T16:23:09.899Z",dateTo:"2024-12-16T05:52:09.899Z",destination:"7aa8ddd3-9ebe-45cf-8456-5377802ac252",isFavorite:!1,offers:["71ae9618-d5a0-4d77-9d13-7f26805e176c"],type:"drive"},{id:"7e3a3885-f25c-49c8-b408-cb8fe8f46ac3",basePrice:6061,dateFrom:"2024-12-17T03:51:09.899Z",dateTo:"2024-12-18T04:57:09.899Z",destination:"d01a72e9-087f-4837-a146-ba6a1709ac22",isFavorite:!1,offers:["b2006f18-828a-47e7-8b36-48560d825b83"],type:"bus"}],_=()=>{return(e=y)[f(0,e.length-1)];var e},g=[{id:"e2ddfcc3-a9b8-4db6-a811-a3828d2a829c",description:"Nagasaki - with crowded streets",name:"Nagasaki",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/19.jpg",description:"Nagasaki with an embankment of a mighty river as a centre of attraction"}]},{id:"3a3146cf-f88f-4d1e-8bed-7eb6cef145c8",description:"Munich - full of of cozy canteens where you can try the best coffee in the Middle East",name:"Munich",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/8.jpg",description:"Munich with an embankment of a mighty river as a centre of attraction"},{src:"https://24.objects.htmlacademy.pro/static/destinations/15.jpg",description:"Munich in a middle of Europe"},{src:"https://24.objects.htmlacademy.pro/static/destinations/12.jpg",description:"Munich for those who value comfort and coziness"}]},{id:"039f3178-3015-46b2-a395-fa26efb2015c",description:"Chamonix - in a middle of Europe",name:"Chamonix",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/2.jpg",description:"Chamonix is a beautiful city"},{src:"https://24.objects.htmlacademy.pro/static/destinations/4.jpg",description:"Chamonix a perfect place to stay with a family"},{src:"https://24.objects.htmlacademy.pro/static/destinations/4.jpg",description:"Chamonix famous for its crowded street markets with the best street food in Asia"},{src:"https://24.objects.htmlacademy.pro/static/destinations/19.jpg",description:"Chamonix is a beautiful city"}]},{id:"5052c42d-c848-4f5a-bc0e-1c7a9159b55b",description:"Rome - with crowded streets",name:"Rome",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/13.jpg",description:"Rome middle-eastern paradise"},{src:"https://24.objects.htmlacademy.pro/static/destinations/14.jpg",description:"Rome famous for its crowded street markets with the best street food in Asia"},{src:"https://24.objects.htmlacademy.pro/static/destinations/10.jpg",description:"Rome a perfect place to stay with a family"}]},{id:"579b75cd-c26b-43eb-a3f9-d153690db8b9",description:"Moscow - with an embankment of a mighty river as a centre of attraction",name:"Moscow",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/5.jpg",description:"Moscow with an embankment of a mighty river as a centre of attraction"},{src:"https://24.objects.htmlacademy.pro/static/destinations/3.jpg",description:"Moscow for those who value comfort and coziness"},{src:"https://24.objects.htmlacademy.pro/static/destinations/6.jpg",description:"Moscow a true asian pearl"},{src:"https://24.objects.htmlacademy.pro/static/destinations/9.jpg",description:"Moscow with crowded streets"}]},{id:"7aa8ddd3-9ebe-45cf-8456-5377802ac252",description:"Den Haag - with a beautiful old town",name:"Den Haag",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/20.jpg",description:"Den Haag famous for its crowded street markets with the best street food in Asia"},{src:"https://24.objects.htmlacademy.pro/static/destinations/8.jpg",description:"Den Haag famous for its crowded street markets with the best street food in Asia"},{src:"https://24.objects.htmlacademy.pro/static/destinations/11.jpg",description:"Den Haag a true asian pearl"},{src:"https://24.objects.htmlacademy.pro/static/destinations/3.jpg",description:"Den Haag famous for its crowded street markets with the best street food in Asia"}]},{id:"238dfde9-12df-43f3-ae52-52145715e238",description:"Oslo - middle-eastern paradise",name:"Oslo",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/1.jpg",description:"Oslo full of of cozy canteens where you can try the best coffee in the Middle East"}]},{id:"d01a72e9-087f-4837-a146-ba6a1709ac22",description:"Kioto - with crowded streets",name:"Kioto",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/5.jpg",description:"Kioto a perfect place to stay with a family"}]},{id:"363aa35f-8cee-48da-9ff8-6d0d6c54d9b0",description:"Naples - full of of cozy canteens where you can try the best coffee in the Middle East",name:"Naples",pictures:[]},{id:"2b3688ec-3660-4739-bbdb-3702d407af3b",description:"Vien - middle-eastern paradise",name:"Vien",pictures:[{src:"https://24.objects.htmlacademy.pro/static/destinations/7.jpg",description:"Vien with crowded streets"},{src:"https://24.objects.htmlacademy.pro/static/destinations/17.jpg",description:"Vien with an embankment of a mighty river as a centre of attraction"},{src:"https://24.objects.htmlacademy.pro/static/destinations/8.jpg",description:"Vien is a beautiful city"},{src:"https://24.objects.htmlacademy.pro/static/destinations/4.jpg",description:"Vien a true asian pearl"},{src:"https://24.objects.htmlacademy.pro/static/destinations/5.jpg",description:"Vien famous for its crowded street markets with the best street food in Asia"}]}],$=[{type:"taxi",offers:[{id:"9f523857-6d81-489c-8ec3-41dc9c67c01d",title:"Upgrade to a business class",price:48},{id:"0416f625-1e61-4088-a7ea-b2f1f6769268",title:"Choose the radio station",price:141},{id:"954cc84d-7283-482a-8b23-67924764294f",title:"Choose temperature",price:114},{id:"9e299604-2f87-45dc-95e9-1edbfd566ab1",title:"Drive quickly, I'm in a hurry",price:40},{id:"82528155-38b1-42dd-ba2d-93f78fec7c89",title:"Drive slowly",price:101}]},{type:"bus",offers:[{id:"dec3c29a-c5ad-4388-b49c-c1f1455f0d03",title:"Infotainment system",price:177},{id:"2019ab0e-4e4e-4252-b9c0-d3a9f4db2923",title:"Order meal",price:98},{id:"b2006f18-828a-47e7-8b36-48560d825b83",title:"Choose seats",price:71}]},{type:"train",offers:[{id:"fc347484-63f4-4b73-9dcd-805ad2192d1e",title:"Book a taxi at the arrival point",price:157},{id:"f2c35098-c7cc-4870-81f8-24bbcbbd2eec",title:"Order a breakfast",price:30},{id:"0c3d09c7-3750-4ae0-89f0-b405e76ad1ed",title:"Wake up at a certain time",price:44}]},{type:"flight",offers:[{id:"0c90d2ee-7a8d-470c-b943-b6153691e094",title:"Choose meal",price:143},{id:"17e7c2c1-414f-478d-b17f-e68b7dacc5c1",title:"Choose seats",price:173},{id:"0962c668-3b9a-4049-a126-fd8a93bd6189",title:"Upgrade to comfort class",price:165},{id:"c2eae7b6-f4af-4a00-a4fe-f8a34e275ed3",title:"Upgrade to business class",price:95},{id:"b8529b05-414e-414f-98c4-fc46a0a36ef8",title:"Add luggage",price:40},{id:"ac05e5bb-729e-41c4-b1cf-71087cd46806",title:"Business lounge",price:80}]},{type:"check-in",offers:[{id:"3d0379ee-a805-48e6-b0ab-0608913e4a33",title:"Choose the time of check-in",price:166},{id:"e71488f0-af79-4c1d-b864-cf07ce0d9ee4",title:"Choose the time of check-out",price:32},{id:"52ceefd8-2c4f-4620-9465-44ced8a5693c",title:"Add breakfast",price:126},{id:"fbd3d2b4-1cf5-4b47-b210-c0e11f6f5b0b",title:"Laundry",price:131},{id:"f30d0ade-6e37-4627-88e6-c6819e1730a6",title:"Order a meal from the restaurant",price:67}]},{type:"sightseeing",offers:[]},{type:"ship",offers:[{id:"0cd342e2-e7d3-4159-90b4-6add030218bb",title:"Choose meal",price:118},{id:"fe102690-c3f7-4620-9eed-1be6e5515bb1",title:"Choose seats",price:184},{id:"98dc10ed-69b8-4829-811e-b8c89f220e90",title:"Upgrade to comfort class",price:45},{id:"4859058d-caa6-4747-be06-c31841f6f8dd",title:"Upgrade to business class",price:127},{id:"1807bf59-1021-41a2-a409-155962017348",title:"Add luggage",price:94},{id:"56b06cbf-bbef-45cc-bedf-04175e6e0d8f",title:"Business lounge",price:195}]},{type:"drive",offers:[{id:"fb921a7a-4c6b-4aa2-9059-77b60e347ece",title:"With automatic transmission",price:114},{id:"71ae9618-d5a0-4d77-9d13-7f26805e176c",title:"With air conditioning",price:114}]},{type:"restaurant",offers:[{id:"fd9560db-ab39-43d7-bbdd-d369a311eac9",title:"Choose live music",price:74},{id:"207e3e47-7a57-4a7d-905b-5d560ec30d59",title:"Choose VIP area",price:171}]}],T=document.querySelector(".trip-events"),w=document.querySelector(".trip-controls__filters"),M=new class{#e=Array.from({length:f(1,y.length-1)},_);getPoints(){return this.#e}},j=new class{#t=g;getDestinations(){return this.#t}getDestinationById(e){return this.getDestinations().find((t=>t.id===e))}},D=new class{#i=$;getOffers(){return this.#i}getOffersByType(e){return this.getOffers().find((t=>t.type===e))}getOffersById(e,t){return this.getOffersByType(e).offers.filter((e=>t.find((t=>e.id===t))))}},F=new class{pointsListElement=new m;constructor({pointsContainer:e,filtersContainer:t,pointsModel:i,destinationsModel:n,offersModel:a}){this.pointsContainer=e,this.filtersContainer=t,this.pointsModel=i,this.destinationsModel=n,this.offersModel=a}init(){t(new u,this.filtersContainer),t(new v,this.pointsContainer),this.points=[...this.pointsModel.getPoints()],t(new b({point:d,allOffers:this.offersModel.getOffersByType(d.type),pointDestination:this.destinationsModel.getDestinationById(d.destination),allDestinations:this.destinationsModel.getDestinations()}),this.pointsContainer),t(this.pointsListElement,this.pointsContainer),this.points.forEach((e=>{t(new h({point:e,offers:[...this.offersModel.getOffersById(e.type,e.offers)],destination:this.destinationsModel.getDestinationById(e.destination)}),this.pointsListElement.getElement())}))}}({pointsContainer:T,filtersContainer:w,pointsModel:M,destinationsModel:j,offersModel:D});F.init()})()})();
//# sourceMappingURL=bundle.ae09e4cc5d9efc7eebff.js.map