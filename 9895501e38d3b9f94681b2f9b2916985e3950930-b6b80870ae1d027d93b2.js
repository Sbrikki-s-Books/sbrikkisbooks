(self.webpackChunksbrikkisbooks=self.webpackChunksbrikkisbooks||[]).push([[956,256],{8938:function(e,t,n){var r;n(5743),"undefined"!=typeof self&&self,e.exports=(r=n(7294),function(){var e={7403:function(e,t,n){"use strict";n.d(t,{default:function(){return T}});var r=n(4087),o=n.n(r),a=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},i=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},s=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},u="TYPE_CHARACTER",c="REMOVE_CHARACTER",l="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",f="PAUSE_FOR",d="CALL_FUNCTION",v="ADD_HTML_TAG_ELEMENT",h="CHANGE_DELETE_SPEED",y="CHANGE_DELAY",m="CHANGE_CURSOR",b="PASTE_STRING",g="HTML_TAG";function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T=function(){function e(t,n){var _=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),O(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),O(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),O(this,"setupWrapperElement",(function(){_.state.elements.container&&(_.state.elements.wrapper.className=_.options.wrapperClassName,_.state.elements.cursor.className=_.options.cursorClassName,_.state.elements.cursor.innerHTML=_.options.cursor,_.state.elements.container.innerHTML="",_.state.elements.container.appendChild(_.state.elements.wrapper),_.state.elements.container.appendChild(_.state.elements.cursor))})),O(this,"start",(function(){return _.state.eventLoopPaused=!1,_.runEventLoop(),_})),O(this,"pause",(function(){return _.state.eventLoopPaused=!0,_})),O(this,"stop",(function(){return _.state.eventLoop&&((0,r.cancel)(_.state.eventLoop),_.state.eventLoop=null),_})),O(this,"pauseFor",(function(e){return _.addEventToQueue(f,{ms:e}),_})),O(this,"typeOutAllStrings",(function(){return"string"==typeof _.options.strings?(_.typeString(_.options.strings).pauseFor(_.options.pauseFor),_):(_.options.strings.forEach((function(e){_.typeString(e).pauseFor(_.options.pauseFor).deleteAll(_.options.deleteSpeed)})),_)})),O(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(a(e))return _.typeOutHTMLString(e,t);if(e){var n=(_.options||{}).stringSplitter,r="function"==typeof n?n(e):e.split("");_.typeCharacters(r,t)}return _})),O(this,"pasteString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return a(e)?_.typeOutHTMLString(e,t,!0):(e&&_.addEventToQueue(b,{character:e,node:t}),_)})),O(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=i(e);if(r.length>0)for(var o=0;o<r.length;o++){var a=r[o],s=a.innerHTML;a&&3!==a.nodeType?(a.innerHTML="",_.addEventToQueue(v,{node:a,parentNode:t}),n?_.pasteString(s,a):_.typeString(s,a)):a.textContent&&(n?_.pasteString(a.textContent,t):_.typeString(a.textContent,t))}return _})),O(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return _.addEventToQueue(l,{speed:e}),_})),O(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return _.addEventToQueue(h,{speed:e}),_})),O(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return _.addEventToQueue(y,{delay:e}),_})),O(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return _.addEventToQueue(m,{cursor:e}),_})),O(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)_.addEventToQueue(c);return _})),O(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return _.addEventToQueue(d,{cb:e,thisArg:t}),_})),O(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){_.addEventToQueue(u,{character:e,node:t})})),_})),O(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){_.addEventToQueue(c)})),_})),O(this,"addEventToQueue",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return _.addEventToStateProperty(e,t,n,"eventQueue")})),O(this,"addReverseCalledEvent",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return _.options.loop?_.addEventToStateProperty(e,t,n,"reverseCalledEvents"):_})),O(this,"addEventToStateProperty",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,o={eventName:e,eventArgs:t||{}};return _.state[r]=n?[o].concat(w(_.state[r])):[].concat(w(_.state[r]),[o]),_})),O(this,"runEventLoop",(function(){_.state.lastFrameTime||(_.state.lastFrameTime=Date.now());var e=Date.now(),t=e-_.state.lastFrameTime;if(!_.state.eventQueue.length){if(!_.options.loop)return;_.state.eventQueue=w(_.state.calledEvents),_.state.calledEvents=[],_.options=E({},_.state.initialOptions)}if(_.state.eventLoop=o()(_.runEventLoop),!_.state.eventLoopPaused){if(_.state.pauseUntil){if(e<_.state.pauseUntil)return;_.state.pauseUntil=null}var n,r=w(_.state.eventQueue),a=r.shift();if(!(t<=(n=a.eventName===p||a.eventName===c?"natural"===_.options.deleteSpeed?s(40,80):_.options.deleteSpeed:"natural"===_.options.delay?s(120,160):_.options.delay))){var i=a.eventName,x=a.eventArgs;switch(_.logInDevMode({currentEvent:a,state:_.state,delay:n}),i){case b:case u:var j=x.character,O=x.node,T=document.createTextNode(j),S=T;_.options.onCreateTextNode&&"function"==typeof _.options.onCreateTextNode&&(S=_.options.onCreateTextNode(j,T)),S&&(O?O.appendChild(S):_.state.elements.wrapper.appendChild(S)),_.state.visibleNodes=[].concat(w(_.state.visibleNodes),[{type:"TEXT_NODE",character:j,node:S}]);break;case c:r.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case f:var A=a.eventArgs.ms;_.state.pauseUntil=Date.now()+parseInt(A);break;case d:var k=a.eventArgs,N=k.cb,C=k.thisArg;N.call(C,{elements:_.state.elements});break;case v:var P=a.eventArgs,D=P.node,L=P.parentNode;L?L.appendChild(D):_.state.elements.wrapper.appendChild(D),_.state.visibleNodes=[].concat(w(_.state.visibleNodes),[{type:g,node:D,parentNode:L||_.state.elements.wrapper}]);break;case l:var M=_.state.visibleNodes,R=x.speed,F=[];R&&F.push({eventName:h,eventArgs:{speed:R,temp:!0}});for(var I=0,z=M.length;I<z;I++)F.push({eventName:p,eventArgs:{removingCharacterNode:!1}});R&&F.push({eventName:h,eventArgs:{speed:_.options.deleteSpeed,temp:!0}}),r.unshift.apply(r,F);break;case p:var Q=a.eventArgs.removingCharacterNode;if(_.state.visibleNodes.length){var B=_.state.visibleNodes.pop(),H=B.type,U=B.node,W=B.character;_.options.onRemoveNode&&"function"==typeof _.options.onRemoveNode&&_.options.onRemoveNode({node:U,character:W}),U&&U.parentNode.removeChild(U),H===g&&Q&&r.unshift({eventName:p,eventArgs:{}})}break;case h:_.options.deleteSpeed=a.eventArgs.speed;break;case y:_.options.delay=a.eventArgs.delay;break;case m:_.options.cursor=a.eventArgs.cursor,_.state.elements.cursor.innerHTML=a.eventArgs.cursor}_.options.loop&&(a.eventName===p||a.eventArgs&&a.eventArgs.temp||(_.state.calledEvents=[].concat(w(_.state.calledEvents),[a]))),_.state.eventQueue=r,_.state.lastFrameTime=e}}})),t)if("string"==typeof t){var x=document.querySelector(t);if(!x)throw new Error("Could not find container element");this.state.elements.container=x}else this.state.elements.container=t;n&&(this.options=E(E({},this.options),n)),this.state.initialOptions=E({},this.options),this.init()}var t;return(t=[{key:"init",value:function(){var e,t;this.setupWrapperElement(),this.addEventToQueue(m,{cursor:this.options.cursor},!0),this.addEventToQueue(l,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(e=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(t=document.createElement("style")).appendChild(document.createTextNode(e)),document.head.appendChild(t),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&j(e.prototype,t),e}()},8552:function(e,t,n){var r=n(852)(n(5639),"DataView");e.exports=r},1989:function(e,t,n){var r=n(1789),o=n(401),a=n(7667),i=n(1327),s=n(1866);function u(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=s,e.exports=u},8407:function(e,t,n){var r=n(7040),o=n(4125),a=n(2117),i=n(7518),s=n(4705);function u(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=s,e.exports=u},7071:function(e,t,n){var r=n(852)(n(5639),"Map");e.exports=r},3369:function(e,t,n){var r=n(4785),o=n(1285),a=n(6e3),i=n(9916),s=n(5265);function u(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=s,e.exports=u},3818:function(e,t,n){var r=n(852)(n(5639),"Promise");e.exports=r},8525:function(e,t,n){var r=n(852)(n(5639),"Set");e.exports=r},8668:function(e,t,n){var r=n(3369),o=n(619),a=n(2385);function i(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new r;++t<n;)this.add(e[t])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,e.exports=i},6384:function(e,t,n){var r=n(8407),o=n(7465),a=n(3779),i=n(7599),s=n(4758),u=n(4309);function c(e){var t=this.__data__=new r(e);this.size=t.size}c.prototype.clear=o,c.prototype.delete=a,c.prototype.get=i,c.prototype.has=s,c.prototype.set=u,e.exports=c},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},1149:function(e,t,n){var r=n(5639).Uint8Array;e.exports=r},577:function(e,t,n){var r=n(852)(n(5639),"WeakMap");e.exports=r},4963:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,a=[];++n<r;){var i=e[n];t(i,n,e)&&(a[o++]=i)}return a}},4636:function(e,t,n){var r=n(2545),o=n(5694),a=n(1469),i=n(4144),s=n(5776),u=n(6719),c=Object.prototype.hasOwnProperty;e.exports=function(e,t){var n=a(e),l=!n&&o(e),p=!n&&!l&&i(e),f=!n&&!l&&!p&&u(e),d=n||l||p||f,v=d?r(e.length,String):[],h=v.length;for(var y in e)!t&&!c.call(e,y)||d&&("length"==y||p&&("offset"==y||"parent"==y)||f&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||s(y,h))||v.push(y);return v}},2488:function(e){e.exports=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}},2908:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}},8470:function(e,t,n){var r=n(7813);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},8866:function(e,t,n){var r=n(2488),o=n(1469);e.exports=function(e,t,n){var a=t(e);return o(e)?a:r(a,n(e))}},4239:function(e,t,n){var r=n(2705),o=n(9607),a=n(2333),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},9454:function(e,t,n){var r=n(4239),o=n(7005);e.exports=function(e){return o(e)&&"[object Arguments]"==r(e)}},939:function(e,t,n){var r=n(2492),o=n(7005);e.exports=function e(t,n,a,i,s){return t===n||(null==t||null==n||!o(t)&&!o(n)?t!=t&&n!=n:r(t,n,a,i,e,s))}},2492:function(e,t,n){var r=n(6384),o=n(7114),a=n(8351),i=n(6096),s=n(4160),u=n(1469),c=n(4144),l=n(6719),p="[object Arguments]",f="[object Array]",d="[object Object]",v=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,h,y,m){var b=u(e),g=u(t),_=b?f:s(e),E=g?f:s(t),w=(_=_==p?d:_)==d,x=(E=E==p?d:E)==d,j=_==E;if(j&&c(e)){if(!c(t))return!1;b=!0,w=!1}if(j&&!w)return m||(m=new r),b||l(e)?o(e,t,n,h,y,m):a(e,t,_,n,h,y,m);if(!(1&n)){var O=w&&v.call(e,"__wrapped__"),T=x&&v.call(t,"__wrapped__");if(O||T){var S=O?e.value():e,A=T?t.value():t;return m||(m=new r),y(S,A,n,h,m)}}return!!j&&(m||(m=new r),i(e,t,n,h,y,m))}},8458:function(e,t,n){var r=n(3560),o=n(5346),a=n(3218),i=n(346),s=/^\[object .+?Constructor\]$/,u=Function.prototype,c=Object.prototype,l=u.toString,p=c.hasOwnProperty,f=RegExp("^"+l.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(r(e)?f:s).test(i(e))}},8749:function(e,t,n){var r=n(4239),o=n(1780),a=n(7005),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,e.exports=function(e){return a(e)&&o(e.length)&&!!i[r(e)]}},280:function(e,t,n){var r=n(5726),o=n(6916),a=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return o(e);var t=[];for(var n in Object(e))a.call(e,n)&&"constructor"!=n&&t.push(n);return t}},2545:function(e){e.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}},1717:function(e){e.exports=function(e){return function(t){return e(t)}}},4757:function(e){e.exports=function(e,t){return e.has(t)}},4429:function(e,t,n){var r=n(5639)["__core-js_shared__"];e.exports=r},7114:function(e,t,n){var r=n(8668),o=n(2908),a=n(4757);e.exports=function(e,t,n,i,s,u){var c=1&n,l=e.length,p=t.length;if(l!=p&&!(c&&p>l))return!1;var f=u.get(e),d=u.get(t);if(f&&d)return f==t&&d==e;var v=-1,h=!0,y=2&n?new r:void 0;for(u.set(e,t),u.set(t,e);++v<l;){var m=e[v],b=t[v];if(i)var g=c?i(b,m,v,t,e,u):i(m,b,v,e,t,u);if(void 0!==g){if(g)continue;h=!1;break}if(y){if(!o(t,(function(e,t){if(!a(y,t)&&(m===e||s(m,e,n,i,u)))return y.push(t)}))){h=!1;break}}else if(m!==b&&!s(m,b,n,i,u)){h=!1;break}}return u.delete(e),u.delete(t),h}},8351:function(e,t,n){var r=n(2705),o=n(1149),a=n(7813),i=n(7114),s=n(8776),u=n(1814),c=r?r.prototype:void 0,l=c?c.valueOf:void 0;e.exports=function(e,t,n,r,c,p,f){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!p(new o(e),new o(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var d=s;case"[object Set]":var v=1&r;if(d||(d=u),e.size!=t.size&&!v)return!1;var h=f.get(e);if(h)return h==t;r|=2,f.set(e,t);var y=i(d(e),d(t),r,c,p,f);return f.delete(e),y;case"[object Symbol]":if(l)return l.call(e)==l.call(t)}return!1}},6096:function(e,t,n){var r=n(8234),o=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,a,i,s){var u=1&n,c=r(e),l=c.length;if(l!=r(t).length&&!u)return!1;for(var p=l;p--;){var f=c[p];if(!(u?f in t:o.call(t,f)))return!1}var d=s.get(e),v=s.get(t);if(d&&v)return d==t&&v==e;var h=!0;s.set(e,t),s.set(t,e);for(var y=u;++p<l;){var m=e[f=c[p]],b=t[f];if(a)var g=u?a(b,m,f,t,e,s):a(m,b,f,e,t,s);if(!(void 0===g?m===b||i(m,b,n,a,s):g)){h=!1;break}y||(y="constructor"==f)}if(h&&!y){var _=e.constructor,E=t.constructor;_==E||!("constructor"in e)||!("constructor"in t)||"function"==typeof _&&_ instanceof _&&"function"==typeof E&&E instanceof E||(h=!1)}return s.delete(e),s.delete(t),h}},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},8234:function(e,t,n){var r=n(8866),o=n(9551),a=n(3674);e.exports=function(e){return r(e,a,o)}},5050:function(e,t,n){var r=n(7019);e.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},852:function(e,t,n){var r=n(8458),o=n(7801);e.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0}},9607:function(e,t,n){var r=n(2705),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var o=i.call(e);return r&&(t?e[s]=n:delete e[s]),o}},9551:function(e,t,n){var r=n(4963),o=n(479),a=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,s=i?function(e){return null==e?[]:(e=Object(e),r(i(e),(function(t){return a.call(e,t)})))}:o;e.exports=s},4160:function(e,t,n){var r=n(8552),o=n(7071),a=n(3818),i=n(8525),s=n(577),u=n(4239),c=n(346),l="[object Map]",p="[object Promise]",f="[object Set]",d="[object WeakMap]",v="[object DataView]",h=c(r),y=c(o),m=c(a),b=c(i),g=c(s),_=u;(r&&_(new r(new ArrayBuffer(1)))!=v||o&&_(new o)!=l||a&&_(a.resolve())!=p||i&&_(new i)!=f||s&&_(new s)!=d)&&(_=function(e){var t=u(e),n="[object Object]"==t?e.constructor:void 0,r=n?c(n):"";if(r)switch(r){case h:return v;case y:return l;case m:return p;case b:return f;case g:return d}return t}),e.exports=_},7801:function(e){e.exports=function(e,t){return null==e?void 0:e[t]}},1789:function(e,t,n){var r=n(4536);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},401:function(e){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},7667:function(e,t,n){var r=n(4536),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(t,e)?t[e]:void 0}},1327:function(e,t,n){var r=n(4536),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:o.call(t,e)}},1866:function(e,t,n){var r=n(4536);e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?"__lodash_hash_undefined__":t,this}},5776:function(e){var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,n){var r=typeof e;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&t.test(e))&&e>-1&&e%1==0&&e<n}},7019:function(e){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},5346:function(e,t,n){var r,o=n(4429),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!a&&a in e}},5726:function(e){var t=Object.prototype;e.exports=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||t)}},7040:function(e){e.exports=function(){this.__data__=[],this.size=0}},4125:function(e,t,n){var r=n(8470),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0||(n==t.length-1?t.pop():o.call(t,n,1),--this.size,0))}},2117:function(e,t,n){var r=n(8470);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},7518:function(e,t,n){var r=n(8470);e.exports=function(e){return r(this.__data__,e)>-1}},4705:function(e,t,n){var r=n(8470);e.exports=function(e,t){var n=this.__data__,o=r(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}},4785:function(e,t,n){var r=n(1989),o=n(8407),a=n(7071);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},1285:function(e,t,n){var r=n(5050);e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},6e3:function(e,t,n){var r=n(5050);e.exports=function(e){return r(this,e).get(e)}},9916:function(e,t,n){var r=n(5050);e.exports=function(e){return r(this,e).has(e)}},5265:function(e,t,n){var r=n(5050);e.exports=function(e,t){var n=r(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}},8776:function(e){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}},4536:function(e,t,n){var r=n(852)(Object,"create");e.exports=r},6916:function(e,t,n){var r=n(5569)(Object.keys,Object);e.exports=r},1167:function(e,t,n){e=n.nmd(e);var r=n(1957),o=t&&!t.nodeType&&t,a=o&&e&&!e.nodeType&&e,i=a&&a.exports===o&&r.process,s=function(){try{return a&&a.require&&a.require("util").types||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=s},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5569:function(e){e.exports=function(e,t){return function(n){return e(t(n))}}},5639:function(e,t,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},619:function(e){e.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},2385:function(e){e.exports=function(e){return this.__data__.has(e)}},1814:function(e){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}},7465:function(e,t,n){var r=n(8407);e.exports=function(){this.__data__=new r,this.size=0}},3779:function(e){e.exports=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}},7599:function(e){e.exports=function(e){return this.__data__.get(e)}},4758:function(e){e.exports=function(e){return this.__data__.has(e)}},4309:function(e,t,n){var r=n(8407),o=n(7071),a=n(3369);e.exports=function(e,t){var n=this.__data__;if(n instanceof r){var i=n.__data__;if(!o||i.length<199)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new a(i)}return n.set(e,t),this.size=n.size,this}},346:function(e){var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},7813:function(e){e.exports=function(e,t){return e===t||e!=e&&t!=t}},5694:function(e,t,n){var r=n(9454),o=n(7005),a=Object.prototype,i=a.hasOwnProperty,s=a.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(e){return o(e)&&i.call(e,"callee")&&!s.call(e,"callee")};e.exports=u},1469:function(e){var t=Array.isArray;e.exports=t},8612:function(e,t,n){var r=n(3560),o=n(1780);e.exports=function(e){return null!=e&&o(e.length)&&!r(e)}},4144:function(e,t,n){e=n.nmd(e);var r=n(5639),o=n(5062),a=t&&!t.nodeType&&t,i=a&&e&&!e.nodeType&&e,s=i&&i.exports===a?r.Buffer:void 0,u=(s?s.isBuffer:void 0)||o;e.exports=u},8446:function(e,t,n){var r=n(939);e.exports=function(e,t){return r(e,t)}},3560:function(e,t,n){var r=n(4239),o=n(3218);e.exports=function(e){if(!o(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},1780:function(e){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},6719:function(e,t,n){var r=n(8749),o=n(1717),a=n(1167),i=a&&a.isTypedArray,s=i?o(i):r;e.exports=s},3674:function(e,t,n){var r=n(4636),o=n(280),a=n(8612);e.exports=function(e){return a(e)?r(e):o(e)}},479:function(e){e.exports=function(){return[]}},5062:function(e){e.exports=function(){return!1}},75:function(e){(function(){var t,n,r,o,a,i;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-a)/1e6},n=process.hrtime,o=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),i=1e9*process.uptime(),a=o-i):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4087:function(e,t,n){for(var r=n(75),o="undefined"==typeof window?n.g:window,a=["moz","webkit"],i="AnimationFrame",s=o["request"+i],u=o["cancel"+i]||o["cancelRequest"+i],c=0;!s&&c<a.length;c++)s=o[a[c]+"Request"+i],u=o[a[c]+"Cancel"+i]||o[a[c]+"CancelRequest"+i];if(!s||!u){var l=0,p=0,f=[];s=function(e){if(0===f.length){var t=r(),n=Math.max(0,16.666666666666668-(t-l));l=n+t,setTimeout((function(){var e=f.slice(0);f.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return f.push({handle:++p,callback:e,cancelled:!1}),p},u=function(e){for(var t=0;t<f.length;t++)f[t].handle===e&&(f[t].cancelled=!0)}}e.exports=function(e){return s.call(o,e)},e.exports.cancel=function(){u.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=s,e.cancelAnimationFrame=u}},9297:function(e){"use strict";e.exports=r}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e};var o={};return function(){"use strict";n.d(o,{default:function(){return y}});var e=n(9297),t=n.n(e),r=(n(5697),n(7403)),a=n(8446),i=n.n(a);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(h,e);var n,o,a,s=(o=h,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(o);if(a){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function h(){var e;u(this,h);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(f(e=s.call.apply(s,[this].concat(n))),"state",{instance:null}),e}return(n=[{key:"componentDidMount",value:function(){var e=this,t=new r.default(this.typewriter,this.props.options);this.setState({instance:t},(function(){var n=e.props.onInit;n&&n(t)}))}},{key:"componentDidUpdate",value:function(e){i()(this.props.options,e.options)||this.setState({instance:new r.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var e=this,n=this.props.component;return t().createElement(n,{ref:function(t){return e.typewriter=t},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&c(h.prototype,n),h}(e.Component);h.defaultProps={component:"div"};var y=h}(),o.default}())},5837:function(e,t,n){n(2109)({global:!0},{globalThis:n(7854)})},5743:function(e,t,n){n(5837)},4494:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(7294),o=n.p+"static/gigi-6cdf0e9e23437b32faedfd4470e36fa2.webp",a=n(1082),i=n(6811),s=["Le domeniche d'Agosto quanta neve che cadrà","Il mio petto da cuscino per la vita ti farà","Miele, sei bella da morire, mi hai fatto innamorare","Quanti amori nascono così!","Bésame, siente còmo suena el corazon","E quella notte nel fuoco il mio cuore con lei si bruciò","Mai non mollare mai"],u=function(){var e=(0,r.useState)(0),t=e[0],n=e[1];return(0,r.useEffect)((function(){var e=s.length,t=0+Math.random()*(e-0);n((function(e){return parseInt(e+t)}))}),[]),r.createElement(a.Z,null,r.createElement(i.Z,{title:"Not Found",description:"Sorry, I can't find your page"}),r.createElement("div",{className:"_404-module--page404---oDh3"},r.createElement("img",{src:o,alt:"Gigi",className:"_404-module--gigi--UIf97"}),r.createElement("div",{className:"_404-module--text--UiUnb"},r.createElement("h2",null,"404"),r.createElement("h2",null,"Sorry mbare, I can't find the page you asked"),r.createElement("h3",null,'"',s[t],'"'))))}},8802:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(7294),o=n.p+"static/readingSbrikki-8a8c4a623c48c5ae31beeec7dcedbc72.gif";var a=function(){return r.createElement("img",{src:o,alt:"Sbrikki's Books Reading...",className:"bookAnimation-module--gif--HkGaS"})},i=n(8938),s=n.n(i),u=function(){return r.createElement(s(),{options:{strings:["We read...","We drink...","We do stuff...","We have fun!"],autoStart:!0,loop:!0,deleteSpeed:50}})},c=function(){return r.createElement("div",{className:"text-module--text--76iLQ"},r.createElement("h2",null,"Welcome to Sbrikki's Books"),r.createElement("h3",null,"Join us in this Book Club for nights full of reading"),r.createElement("h3",null,r.createElement(u,null)))},l=function(){return r.createElement("div",{className:"hero-module--hero--6D8n+",id:"/"},r.createElement(c,null),r.createElement(a,null))},p=n(643),f=n(4494),d="bookClub-module--word--DIeoh";var v=function(){return r.createElement("div",{className:"bookClub-module--wrap--YiHDH"},r.createElement("div",{className:"bookClub-module--sbrikki--QEzeL"},r.createElement("div",null),r.createElement("p",null,"Sbrikki's Books is "),r.createElement("div",null)),r.createElement("div",{className:"bookClub-module--container--h8baH"},r.createElement("div",{className:d},"Funny"),r.createElement("div",{className:d},"Awesome"),r.createElement("div",{className:d},"Stunning"),r.createElement("div",{className:d},"Crunchy")))},h=n(1082),y=n(6811),m=function(e){return r.createElement("div",null,r.createElement("input",{type:"text",className:"home-module--hiddenInput--2BQIM",onKeyPress:function(t){return function(t){console.log(t),"g"===t.key&&e.setShowGigi(!e.showGigi)}(t)}}))},b=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];return r.createElement(h.Z,null,r.createElement(y.Z,{title:"Home",description:"Sbrikki's Books - A Book Club for everyone"}),r.createElement("div",{className:"home-module--home--FKT+1"},r.createElement("div",{className:"home-module--head--8dO4o"},r.createElement("h1",null,r.createElement("strong",null,"Sbrikki's Books")," - Book Club")),t?r.createElement(f.default,null):r.createElement(l,null),r.createElement("div",{className:"home-module--description--Z7j3O"},r.createElement("p",null,r.createElement("strong",null,"Sbrikki's Books ")," is an apolitical book club for",r.createElement("strong",null," everyone "),".",r.createElement("br",null),"The main aim is the growth of",r.createElement("strong",null," every member "),"from a cultural point of view. We also drink.")),r.createElement(p.Z,null),r.createElement(m,{showGigi:t,setShowGigi:n}),r.createElement(v,null),r.createElement(p.Z,null)))}}}]);
//# sourceMappingURL=9895501e38d3b9f94681b2f9b2916985e3950930-b6b80870ae1d027d93b2.js.map