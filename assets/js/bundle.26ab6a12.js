!function(e){function r(r){for(var n,o,a=r[0],i=r[1],c=r[2],l=0,d=[];l<a.length;l++)o=a[l],A[o]&&d.push(A[o][0]),A[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(C&&C(r);d.length;)d.shift()();return N.push.apply(N,c||[]),t()}function t(){for(var e,r=0;r<N.length;r++){for(var t=N[r],n=!0,o=1;o<t.length;o++){var a=t[o];0!==A[a]&&(n=!1)}n&&(N.splice(r--,1),e=Z(Z.s=t[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,r){if(!g[e]||!E[e])return;for(var t in E[e]=!1,r)Object.prototype.hasOwnProperty.call(r,t)&&(m[t]=r[t]);0==--_&&0===b&&P()}(e,r),n&&n(e,r)};var o,a=!0,i="26ab6a12359f608ba0d3",c=1e4,l={},d=[],u=[];function f(e){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._acceptedDependencies[e[n]]=t||function(){};else r._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._declinedDependencies[e[t]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=r._disposeHandlers.indexOf(e);t>=0&&r._disposeHandlers.splice(t,1)},check:M,apply:T,status:function(e){if(!e)return p;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){var r=s.indexOf(e);r>=0&&s.splice(r,1)},data:l[e]};return o=void 0,r}var s=[],p="idle";function v(e){p=e;for(var r=0;r<s.length;r++)s[r].call(null,e)}var h,m,y,_=0,b=0,w={},E={},g={};function O(e){return+e+""===e?+e:e}function M(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return a=e,v("check"),(r=c,r=r||1e4,new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var n=new XMLHttpRequest,o=Z.p+""+i+".hot-update.json";n.open("GET",o,!0),n.timeout=r,n.send(null)}catch(e){return t(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)t(new Error("Manifest request to "+o+" failed."));else{try{var r=JSON.parse(n.responseText)}catch(e){return void t(e)}e(r)}}})).then(function(e){if(!e)return v("idle"),null;E={},w={},g=e.c,y=e.h,v("prepare");var r=new Promise(function(e,r){h={resolve:e,reject:r}});for(var t in m={},A)j(t);return"prepare"===p&&0===b&&0===_&&P(),r});var r}function j(e){g[e]?(E[e]=!0,_++,function(e){var r=document.createElement("script");r.charset="utf-8",r.src=Z.p+""+e+"."+i+".hot-update.js",document.head.appendChild(r)}(e)):w[e]=!0}function P(){v("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then(function(){return T(a)}).then(function(r){e.resolve(r)},function(r){e.reject(r)});else{var r=[];for(var t in m)Object.prototype.hasOwnProperty.call(m,t)&&r.push(O(t));e.resolve(r)}}function T(r){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var t,n,o,a,c;function u(e){for(var r=[e],t={},n=r.slice().map(function(e){return{chain:[e],id:e}});n.length>0;){var o=n.pop(),i=o.id,c=o.chain;if((a=D[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var l=0;l<a.parents.length;l++){var d=a.parents[l],u=D[d];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([d]),moduleId:i,parentId:d};-1===r.indexOf(d)&&(u.hot._acceptedDependencies[i]?(t[d]||(t[d]=[]),f(t[d],[i])):(delete t[d],r.push(d),n.push({chain:c.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:t}}function f(e,r){for(var t=0;t<r.length;t++){var n=r[t];-1===e.indexOf(n)&&e.push(n)}}r=r||{};var s={},h=[],_={},b=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var w in m)if(Object.prototype.hasOwnProperty.call(m,w)){var E;c=O(w);var M=!1,j=!1,P=!1,T="";switch((E=m[w]?u(c):{type:"disposed",moduleId:w}).chain&&(T="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":r.onDeclined&&r.onDeclined(E),r.ignoreDeclined||(M=new Error("Aborted because of self decline: "+E.moduleId+T));break;case"declined":r.onDeclined&&r.onDeclined(E),r.ignoreDeclined||(M=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+T));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(E),r.ignoreUnaccepted||(M=new Error("Aborted because "+c+" is not accepted"+T));break;case"accepted":r.onAccepted&&r.onAccepted(E),j=!0;break;case"disposed":r.onDisposed&&r.onDisposed(E),P=!0;break;default:throw new Error("Unexception type "+E.type)}if(M)return v("abort"),Promise.reject(M);if(j)for(c in _[c]=m[c],f(h,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,c)&&(s[c]||(s[c]=[]),f(s[c],E.outdatedDependencies[c]));P&&(f(h,[E.moduleId]),_[c]=b)}var N,H=[];for(n=0;n<h.length;n++)c=h[n],D[c]&&D[c].hot._selfAccepted&&H.push({module:c,errorHandler:D[c].hot._selfAccepted});v("dispose"),Object.keys(g).forEach(function(e){!1===g[e]&&function(e){delete A[e]}(e)});for(var I,x,C=h.slice();C.length>0;)if(c=C.pop(),a=D[c]){var k={},S=a.hot._disposeHandlers;for(o=0;o<S.length;o++)(t=S[o])(k);for(l[c]=k,a.hot.active=!1,delete D[c],delete s[c],o=0;o<a.children.length;o++){var R=D[a.children[o]];R&&((N=R.parents.indexOf(c))>=0&&R.parents.splice(N,1))}}for(c in s)if(Object.prototype.hasOwnProperty.call(s,c)&&(a=D[c]))for(x=s[c],o=0;o<x.length;o++)I=x[o],(N=a.children.indexOf(I))>=0&&a.children.splice(N,1);for(c in v("apply"),i=y,_)Object.prototype.hasOwnProperty.call(_,c)&&(e[c]=_[c]);var L=null;for(c in s)if(Object.prototype.hasOwnProperty.call(s,c)&&(a=D[c])){x=s[c];var B=[];for(n=0;n<x.length;n++)if(I=x[n],t=a.hot._acceptedDependencies[I]){if(-1!==B.indexOf(t))continue;B.push(t)}for(n=0;n<B.length;n++){t=B[n];try{t(x)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:c,dependencyId:x[n],error:e}),r.ignoreErrored||L||(L=e)}}}for(n=0;n<H.length;n++){var U=H[n];c=U.module,d=[c];try{Z(c)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(t){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:t,originalError:e}),r.ignoreErrored||L||(L=t),L||(L=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:c,error:e}),r.ignoreErrored||L||(L=e)}}return L?(v("fail"),Promise.reject(L)):(v("idle"),new Promise(function(e){e(h)}))}var D={},A={0:0},N=[];function Z(r){if(D[r])return D[r].exports;var t=D[r]={i:r,l:!1,exports:{},hot:f(r),parents:(u=d,d=[],u),children:[]};return e[r].call(t.exports,t,t.exports,function(e){var r=D[e];if(!r)return Z;var t=function(t){return r.hot.active?(D[t]?-1===D[t].parents.indexOf(e)&&D[t].parents.push(e):(d=[e],o=t),-1===r.children.indexOf(t)&&r.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),d=[]),Z(t)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return Z[e]},set:function(r){Z[e]=r}}};for(var a in Z)Object.prototype.hasOwnProperty.call(Z,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(t,a,n(a));return t.e=function(e){return"ready"===p&&v("prepare"),b++,Z.e(e).then(r,function(e){throw r(),e});function r(){b--,"prepare"===p&&(w[e]||j(e),0===b&&0===_&&P())}},t.t=function(e,r){return 1&r&&(e=t(e)),Z.t(e,-2&r)},t}(r)),t.l=!0,t.exports}Z.m=e,Z.c=D,Z.d=function(e,r,t){Z.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},Z.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},Z.t=function(e,r){if(1&r&&(e=Z(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(Z.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)Z.d(t,n,function(r){return e[r]}.bind(null,n));return t},Z.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return Z.d(r,"a",r),r},Z.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},Z.p="",Z.h=function(){return i};var H=window.webpackJsonp=window.webpackJsonp||[],I=H.push.bind(H);H.push=r,H=H.slice();for(var x=0;x<H.length;x++)r(H[x]);var C=I;N.push([142,1]),t()}({139:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.SELECT_CARRIER="SELECT_CARRIER"},142:function(e,r,t){t(143),e.exports=t(345)},345:function(e,r,t){"use strict";var n=i(t(12)),o=i(t(138)),a=i(t(350));function i(e){return e&&e.__esModule?e:{default:e}}o.default.render(n.default.createElement(a.default,null),document.getElementById("app"))},350:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=c(t(12)),o=t(98),a=c(t(355)),i=c(t(364));function c(e){return e&&e.__esModule?e:{default:e}}t(367);r.default=function(){return n.default.createElement(o.Provider,{store:i.default},n.default.createElement(a.default,null))}},355:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=d(t(10)),o=d(t(12)),a=t(98),i=t(356),c=d(t(357)),l=d(t(359));function d(e){return e&&e.__esModule?e:{default:e}}function u(e){var r,t=e.selected,n=e.selectCarrier,a={flights:[{id:123,direction:{from:"Moscow",to:"Berlin"},arrival:"2016-06-08T19:52:27.979Z",departure:"2016-06-08T17:51:20.979Z",carrier:"S7"},{id:193,direction:{from:"Moscow",to:"New York"},arrival:"2016-06-08T21:52:27.979Z",departure:"2016-06-08T17:51:20.979Z",carrier:"Aeroflot"},{id:133,direction:{from:"Moscow",to:"Samara"},arrival:"2016-09-08T13:52:27.979Z",departure:"2016-08-08T17:51:20.979Z",carrier:"KLM"},{id:126,direction:{from:"Moscow",to:"London"},arrival:"2016-08-10T13:52:27.979Z",departure:"2016-08-09T17:51:20.979Z",carrier:"S7"},{id:1543,direction:{from:"Moscow",to:"Berlin"},arrival:"2016-06-08T13:52:27.979Z",departure:"2016-06-08T17:51:20.979Z",carrier:"Aeroflot"},{id:1213,direction:{from:"Moscow",to:"Berlin"},arrival:"2016-06-08T13:52:27.979Z",departure:"2016-06-08T17:51:20.979Z",carrier:"Aeroflot"},{id:1523,direction:{from:"Moscow",to:"Berlin"},arrival:"2016-06-08T13:52:27.979Z",departure:"2016-06-08T17:51:20.979Z",carrier:"KLM"},{id:1283,direction:{from:"Moscow",to:"Berlin"},arrival:"2016-06-08T13:52:27.979Z",departure:"2016-06-08T17:51:20.979Z",carrier:"Aeroflot"},{id:12310,direction:{from:"Moscow",to:"Berlin"},arrival:"2016-06-08T13:52:27.979Z",departure:"2016-06-08T17:51:20.979Z",carrier:"Aeroflot"},{id:19923,direction:{from:"Moscow",to:"Berlin"},arrival:"2016-06-11T13:52:27.979Z",departure:"2016-06-10T17:51:20.979Z",carrier:"KLM"},{id:2542,direction:{from:"Madrid",to:"Paris"},arrival:"2016-06-16T13:52:27.979Z",departure:"2016-06-17T17:51:20.979Z",carrier:"S7"}]},i=a.flights.map(function(e){return e.carrier}),d=(r={},i.forEach(function(e){r[e]=!0}),Object.keys(r)),u=a.flights;return"all"!==t&&(u=u.filter(function(e){return e.carrier===t})),o.default.createElement("div",{className:"flights-widget"},o.default.createElement(c.default,{selectCarrier:n,carriers:d}),o.default.createElement(l.default,{flights:u}))}t(363);u.propTypes={selected:n.default.string,selectCarrier:n.default.func},r.default=(0,a.connect)(function(e){return{selected:e.widget.selected}},function(e){return{selectCarrier:function(r){return e((0,i.selectCarrier)(r.target.value))}}})(u)},356:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.selectCarrier=void 0;var n=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}(t(139));r.selectCarrier=function(e){return{type:n.SELECT_CARRIER,payload:e}}},357:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=a(t(10)),o=a(t(12));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var r=e.carriers,t=e.selectCarrier,n=r.map(function(e,r){return o.default.createElement("option",{value:e,key:r},e)});return o.default.createElement("select",{className:"carriers-select",onChange:t},o.default.createElement("option",{value:"all"},"All carriers"),n)}t(358),i.propTypes={carriers:n.default.array,selectCarrier:n.default.func},r.default=i},358:function(e,r,t){},359:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=i(t(10)),o=i(t(12)),a=i(t(360));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){var r=e.flights.map(function(e,r){return o.default.createElement(a.default,{key:r,flight:e})});return o.default.createElement("div",{className:"cards"},r)}t(362),c.propTypes={flights:n.default.array},r.default=c},360:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=a(t(10)),o=a(t(12));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var r=e.flight;return o.default.createElement("div",{className:"card"},o.default.createElement("div",{className:"direction"},o.default.createElement("div",{className:"from"},o.default.createElement("div",{className:"title"},"From"),o.default.createElement("div",{className:"city"},r.direction.from)),o.default.createElement("div",{className:"to"},o.default.createElement("div",{className:"title"},"To"),o.default.createElement("div",{className:"city"},r.direction.to))),o.default.createElement("div",{className:"time-block"},o.default.createElement("div",{className:"departure"},o.default.createElement("div",{className:"title"},"Departure"),o.default.createElement("div",{className:"time"},c(new Date(r.departure)))),o.default.createElement("div",{className:"arrival"},o.default.createElement("div",{className:"title"},"Arrival"),o.default.createElement("div",{className:"time"},c(new Date(r.arrival))))),o.default.createElement("div",{className:"carrier-name"},r.carrier))}function c(e){var r=e.getDate(),t=e.getFullYear(),n=e.getHours(),o=e.getMinutes(),a=e.getMonth()+1;return r+"."+(a=a<10&&"0"+a)+"."+t+", "+n+":"+o}t(361),i.propTypes={flight:n.default.object},r.default=i},361:function(e,r,t){},362:function(e,r,t){},363:function(e,r,t){},364:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n,o=t(69),a=t(365),i=(n=a)&&n.__esModule?n:{default:n};var c=(0,o.combineReducers)({widget:i.default}),l=(0,o.createStore)(c);r.default=l},365:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n,o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}(t(139)),i=t(366),c=(n=i)&&n.__esModule?n:{default:n};r.default=(0,c.default)({selected:"all"},function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}({},a.SELECT_CARRIER,function(e,r){var t=r.payload;return o({},e,{selected:t})}))},366:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments[1],o=r[n.type];return o?o(t,n):t}}},367:function(e,r,t){}});
//# sourceMappingURL=bundle.26ab6a12.js.map