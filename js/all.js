"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _createForOfIteratorHelper(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){a=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _regeneratorRuntime(){_regeneratorRuntime=function(){return a};var s,a={},e=Object.prototype,u=e.hasOwnProperty,l=Object.defineProperty||function(e,t,n){e[t]=n.value},t="function"==typeof Symbol?Symbol:{},r=t.iterator||"@@iterator",n=t.asyncIterator||"@@asyncIterator",o=t.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(s){i=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var o,i,a,c,t=t&&t.prototype instanceof g?t:g,t=Object.create(t.prototype),r=new E(r||[]);return l(t,"_invoke",{value:(o=e,i=n,a=r,c=f,function(e,t){if(c===h)throw new Error("Generator is already running");if(c===y){if("throw"===e)throw t;return{value:s,done:!0}}for(a.method=e,a.arg=t;;){var n=a.delegate;if(n){var r=function e(t,n){var r=n.method,o=t.iterator[r];if(o===s)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=s,e(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=p(o,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;o=o.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=s),n.delegate=null,d):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}(n,a);if(r){if(r===d)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===f)throw c=y,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=h;r=p(o,i,a);if("normal"===r.type){if(c=a.done?y:m,r.arg===d)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(c=y,a.method="throw",a.arg=r.arg)}})}),t}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}a.wrap=c;var f="suspendedStart",m="suspendedYield",h="executing",y="completed",d={};function g(){}function v(){}function k(){}var b={};i(b,r,function(){return this});t=Object.getPrototypeOf,t=t&&t(t(P([])));t&&t!==e&&u.call(t,r)&&(b=t);var w=k.prototype=g.prototype=Object.create(b);function _(e){["next","throw","return"].forEach(function(t){i(e,t,function(e){return this._invoke(t,e)})})}function x(a,c){var t;l(this,"_invoke",{value:function(n,r){function e(){return new c(function(e,t){!function t(e,n,r,o){e=p(a[e],a,n);if("throw"!==e.type){var i=e.arg;return(n=i.value)&&"object"==_typeof(n)&&u.call(n,"__await")?c.resolve(n.__await).then(function(e){t("next",e,r,o)},function(e){t("throw",e,r,o)}):c.resolve(n).then(function(e){i.value=e,r(i)},function(e){return t("throw",e,r,o)})}o(e.arg)}(n,r,e,t)})}return t=t?t.then(e,e):e()}})}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function P(t){if(t||""===t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,e=function e(){for(;++n<t.length;)if(u.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=s,e.done=!0,e};return e.next=e}}throw new TypeError(_typeof(t)+" is not iterable")}return l(w,"constructor",{value:v.prototype=k,configurable:!0}),l(k,"constructor",{value:v,configurable:!0}),v.displayName=i(k,o,"GeneratorFunction"),a.isGeneratorFunction=function(e){e="function"==typeof e&&e.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,i(e,o,"GeneratorFunction")),e.prototype=Object.create(w),e},a.awrap=function(e){return{__await:e}},_(x.prototype),i(x.prototype,n,function(){return this}),a.AsyncIterator=x,a.async=function(e,t,n,r,o){void 0===o&&(o=Promise);var i=new x(c(e,t,n,r),o);return a.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},_(w),i(w,o,"Generator"),i(w,r,function(){return this}),i(w,"toString",function(){return"[object Generator]"}),a.keys=function(e){var t,n=Object(e),r=[];for(t in n)r.push(t);return r.reverse(),function e(){for(;r.length;){var t=r.pop();if(t in n)return e.value=t,e.done=!1,e}return e.done=!0,e}},a.values=P,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&u.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=s)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function e(e,t){return i.type="throw",i.arg=n,r.next=e,t&&(r.method="next",r.arg=s),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var o=this.tryEntries[t],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&u.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}var i=(o=o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc?null:o)?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r,o=n.completion;return"throw"===o.type&&(r=o.arg,L(n)),r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:P(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=s),d}},a}function asyncGeneratorStep(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function _asyncToGenerator(c){return function(){var e=this,a=arguments;return new Promise(function(t,n){var r=c.apply(e,a);function o(e){asyncGeneratorStep(r,t,n,o,i,"next",e)}function i(e){asyncGeneratorStep(r,t,n,o,i,"throw",e)}o(void 0)})}}var slide_hero=new Swiper(".slide-hero",{effect:"fade",pagination:{el:".slide-hero .main-area .area-explore .swiper-pagination"}}),cardPokemon=document.querySelectorAll(".js-open-details-pokemon"),btnCloseModal=document.querySelector(".js-close-modal-details-pokemon"),countPokemons=document.getElementById("js-count-pokemons");cardPokemon.forEach(function(e){e.addEventListener("click",openDetailsPokemon)}),btnCloseModal&&btnCloseModal.addEventListener("click",closeDetailsPokemon);var btnDropdownSelect=document.querySelector(".js-open-select-custom");btnDropdownSelect.addEventListener("click",function(){btnDropdownSelect.parentElement.classList.toggle("active")});var areaPokemons=document.getElementById("js-list-pokemons");function openDetailsPokemon(){document.documentElement.classList.add("open-modal")}function closeDetailsPokemon(){document.documentElement.classList.remove("open-modal")}function setInnerText(e,t){document.getElementById(e).innerText=t}function setInnerHTML(e,t){document.getElementById(e).innerHTML=t}function concatInnerHTML(e,t){document.getElementById(e).innerHTML+=t}function getAxios(e){return _getAxios.apply(this,arguments)}function _getAxios(){return(_getAxios=_asyncToGenerator(_regeneratorRuntime().mark(function e(t){var n;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get(t);case 2:return n=e.sent,n=n.data,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function getPokemonsTotalCount(e){return _getPokemonsTotalCount.apply(this,arguments)}function _getPokemonsTotalCount(){return(_getPokemonsTotalCount=_asyncToGenerator(_regeneratorRuntime().mark(function e(t){var n;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,getAxios(t);case 2:n=e.sent,setInnerText("js-count-pokemons",n.count);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function buildPokemonCard(e){return'<button class="card-pokemon '.concat(e.types[0].type.name,' js-open-details-pokemon">\n    <div class="image">\n      <img src="').concat(e.sprites.other.dream_world.front_default,'" class="thumb-img">\n    </div>\n    <div class="info">\n      <div class="text">\n        <span>#').concat(String(e.id).padStart(3,"0"),"</span>\n        <h3>").concat(e.name,'</h2>\n      </div>\n      <div class="icon">\n        <img src="img/icon-types/').concat(e.types[0].type.name,'.svg">\n      </div>\n    </div>\n  </button>')}var button=document.getElementById("js-btn-load-more"),offsetCount=9;function loadMore(e){listingPokemons("https://pokeapi.co/api/v2/pokemon?limit=9&offset=".concat(offsetCount)),offsetCount+=9}function listingPokemons(e){return _listingPokemons.apply(this,arguments)}function _listingPokemons(){return(_listingPokemons=_asyncToGenerator(_regeneratorRuntime().mark(function e(t){var n,r,o;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,getAxios(t);case 2:n=e.sent,r=n.results,document.getElementById("js-list-pokemons").innerHTML="",n=_createForOfIteratorHelper(r),e.prev=7,n.s();case 9:if((r=n.n()).done){e.next=18;break}return o=r.value,e.next=13,getAxios(o.url);case 13:o=e.sent,concatInnerHTML("js-list-pokemons",buildPokemonCard(o));case 16:e.next=9;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(7),n.e(e.t0);case 23:return e.prev=23,n.f(),e.finish(23);case 26:case"end":return e.stop()}},e,null,[[7,20,23,26]])}))).apply(this,arguments)}function listingPokemonsByType(e){return _listingPokemonsByType.apply(this,arguments)}function _listingPokemonsByType(){return(_listingPokemonsByType=_asyncToGenerator(_regeneratorRuntime().mark(function e(t){var n,r,o;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,getAxios("https://pokeapi.co/api/v2/type/".concat(t));case 2:n=e.sent,setInnerText("js-count-pokemons",(r=n.pokemon).length),document.getElementById("js-list-pokemons").innerHTML="",n=_createForOfIteratorHelper(r),e.prev=8,n.s();case 10:if((r=n.n()).done){e.next=19;break}return o=r.value.pokemon,e.next=14,getAxios(o.url);case 14:o=e.sent,concatInnerHTML("js-list-pokemons",buildPokemonCard(o));case 17:e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(8),n.e(e.t0);case 24:return e.prev=24,n.f(),e.finish(24);case 27:case"end":return e.stop()}},e,null,[[8,21,24,27]])}))).apply(this,arguments)}function buildTypeFilterButton(e){var t=e.name,n=e.id,e=document.createElement("li"),t='<button class="type-filter '.concat(t,'" code-type="').concat(n,'">\n        <div class="icon">\n        <img src="img/icon-types/').concat(t,'.svg" alt="">\n        </div>\n        <span>').concat(t,"</span>\n    </button>");return e.innerHTML=t,e.addEventListener("click",function(){console.log("clicouuuu"),listingPokemonsByType(n)}),e}function getTypeIdWithRegex(e){e=e.match(/\/(\d+)\/$/);if(e)return e[1]}function listingTypes(){return _listingTypes.apply(this,arguments)}function _listingTypes(){return(_listingTypes=_asyncToGenerator(_regeneratorRuntime().mark(function e(){var t,n,r,o,i,a,c,s,u,l;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,getAxios("https://pokeapi.co/api/v2/type");case 2:t=e.sent,t=t.results,n=document.getElementById("js-type-area"),r=document.getElementById("js-type-area-mobile"),o=_createForOfIteratorHelper(t);try{for(o.s();!(i=o.n()).done;)"unknown"!==(a=i.value).name&&"shadow"!==a.name&&(c=getTypeIdWithRegex(a.url),s={name:a.name,id:c},u=buildTypeFilterButton(s),l=buildTypeFilterButton(s),n.appendChild(u),r.appendChild(l))}catch(e){o.e(e)}finally{o.f()}case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function searchPokemonByNameOrId(e){return _searchPokemonByNameOrId.apply(this,arguments)}function _searchPokemonByNameOrId(){return(_searchPokemonByNameOrId=_asyncToGenerator(_regeneratorRuntime().mark(function e(t){var n;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return document.getElementById("js-list-pokemons").innerHTML="",e.prev=2,e.next=5,getAxios("https://pokeapi.co/api/v2/pokemon/".concat(t));case 5:n=e.sent,setInnerText("js-count-pokemons",1),concatInnerHTML("js-list-pokemons",buildPokemonCard(n)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),setInnerText("js-count-pokemons",0),button.style.display="none";case 15:case"end":return e.stop()}},e,null,[[2,11]])}))).apply(this,arguments)}function handleSearchSubmit(){var n=document.getElementById("js-input-search");n.addEventListener("keypress",function(e){var t=String(n.value).toLocaleLowerCase().trim();"Enter"===e.key&&(""===t?(listingPokemons("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0"),getPokemonsTotalCount("https://pokeapi.co/api/v2/pokemon")):searchPokemonByNameOrId(t))})}button.addEventListener("click",loadMore),getPokemonsTotalCount("https://pokeapi.co/api/v2/pokemon"),listingTypes(),listingPokemons("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0"),handleSearchSubmit();