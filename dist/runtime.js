!function(){"use strict";function n(n){return String(n).replace(/"/g,"&quot;")}function t(n){return"[object Array]"===l(n)}function e(n){return"[object Date]"===l(n)}function r(n){return"[object RegExp]"===l(n)}function o(n){return"[object Error]"===l(n)}function i(n){return"[object Symbol]"===l(n)}function c(n){return"[object String]"===l(n)}function u(n){return"[object Number]"===l(n)}function f(n){return"[object Boolean]"===l(n)}function a(n,t){return $.call(n,t)}function l(n){return z.call(n)}function s(n){if(n.name)return n.name;var t=String(n).match(/^function\s*([\w$]+)/);return t?t[1]:void 0}function p(n,t){if(n.indexOf)return n.indexOf(t);for(var e=0,r=n.length;e<r;e++)if(n[e]===t)return e;return-1}function d(n){if(!_)return!1;try{_.call(n);try{I.call(n)}catch(n){return!0}return n instanceof Map}catch(n){}return!1}function h(n){if(!I)return!1;try{I.call(n);try{_.call(n)}catch(n){return!0}return n instanceof Set}catch(n){}return!1}function m(n){return!(!n||"object"!=typeof n)&&("undefined"!=typeof HTMLElement&&n instanceof HTMLElement||"string"==typeof n.nodeName&&"function"==typeof n.getAttribute)}function y(n){return"'"+n.replace(/(['\\])/g,"\\$1").replace(/[\x00-\x1f]/g,w)+"'"}function w(n){var t=n.charCodeAt(0),e={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return e?"\\"+e:"\\x"+(t<16?"0":"")+t.toString(16)}function g(n){return"Object("+n+")"}function v(n,t,e){return n+" ("+t+") {"+e.join(", ")+"}"}function b(n,e){var r=t(n),o=[];if(r){o.length=n.length;for(var i=0;i<n.length;i++)o[i]=a(n,i)?e(n[i],n):""}for(var c in n)a(n,c)&&(r&&String(Number(c))===c&&c<n.length||(/[^\w$]/.test(c)?o.push(e(c,n)+": "+e(n[c],n)):o.push(c+": "+e(n[c],n))));return o}function j(n,t){return t={exports:{}},n(t,t.exports),t.exports}function S(n,t){return 1===arguments.length?function(t){return S(n,t)}:t.indexOf(n,t.length-n.length)>-1}function x(n,t){Z.postMessage({flems:X,name:n,content:t},"*")}function E(n){X=n.id;var t=n.state,e=t.files.filter(function(n){return V(n.name)})[0],r=document.title;document.documentElement.innerHTML=e?e.content:"",document.title||(document.title=r);var o=Array.prototype.slice.call(document.getElementsByTagName("script")),i=o.filter(function(n){return!n.src}).map(function(n){return{name:".html",content:n.textContent,el:n}}).concat(t.files.filter(function(n){return W(n.name)})),c=t.links.filter(function(n){return"js"===n.type}).concat(o.filter(function(n){return n.src}).map(function(n){return{url:n.src,type:"js",el:n}}));t.links.filter(function(n){return"css"===n.type&&!n.content}).forEach(M),t.files.filter(function(n){return Q(n.name)}).concat(t.links.filter(function(n){return"css"===n.type&&n.content})).forEach(P),Promise.all(c.map(k)).then(function(n){var t=n.filter(function(n){return n});t.length>0?O("Error loading:\n\t"+t.join("\n\t"),"error",{stack:""}):(x("loaded"),i.forEach(flemsLoadScript))})}function A(n,t){return function(){(n||en).apply(console,arguments),O([].slice.apply(arguments).map(function(n){return"string"==typeof n?n:H(n).replace(/\\n/g,"\n")}),t,new Error,1)}}function O(n,t,e,r){void 0===r&&(r=0);var o=e.stack.split("\n").map(C).filter(function(n){return n}).slice(r),i=-1;o.forEach(function(n,t){-1===i&&n.function.indexOf("flemsLoadScript")>-1&&(i=t)}),x("console",{file:e.currentScript,content:Array.isArray(n)?n:[n],stack:i>-1?o.slice(0,i):o,type:t,date:new Date})}function C(n){var t=(" "+n.trim()).match(on)||[],e=t[0],r=t[1],o=t[2],i=t[3],c=t[4],u=nn[o];return e&&{function:r.trim().replace(/^(global code|at) ?/,""),select:u?u.url||u.name:o,file:u?u.name:o,line:parseInt(i,10),column:parseInt(c,10)}}function M(n){document.head.appendChild(T("link",{rel:"stylesheet",type:"text/css",href:n.url}))}function P(n){document.head.appendChild(T("style",{id:n.name,textContent:n.content}))}function k(n){return new Promise(function(t,e){if(n.content)return flemsLoadScript(n),t();var r=T("script",{charset:"utf-8",onload:function(){return t()},onerror:function(e){return t([n.url,e])},async:n.el&&n.el.async,defer:n.el&&n.el.defer,src:n.url});n.el?n.el.parentNode.replaceChild(r,n.el):document.body.appendChild(r)})}function flemsLoadScript(n){var t=URL.createObjectURL(new Blob([n.content],{type:"application/js"}));nn[t]=n;var e=T("script",{src:t,charset:"utf-8",async:!1,defer:!1,onerror:function(n){return O(String(n),"error",n)}});Y=n,n.el?n.el.parentNode.replaceChild(e,n.el):document.body.appendChild(e)}function T(n,t){var e=document.createElement(n);for(var r in t)e[r]=t[r];return e}var L="function"==typeof Map&&Map.prototype,N=Object.getOwnPropertyDescriptor&&L?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,_=L&&N&&"function"==typeof N.get?N.get:null,U=L&&Map.prototype.forEach,B="function"==typeof Set&&Set.prototype,F=Object.getOwnPropertyDescriptor&&B?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,I=B&&F&&"function"==typeof F.get?F.get:null,D=B&&Set.prototype.forEach,R=Boolean.prototype.valueOf,z=Object.prototype.toString,H=function a(l,w,j,S){function x(n,t){return t&&(S=S.slice()).push(t),a(n,w,j+1,S)}if(void 0===l)return"undefined";if(null===l)return"null";if("boolean"==typeof l)return l?"true":"false";if("string"==typeof l)return y(l);if("number"==typeof l)return 0===l?1/0/l>0?"0":"-0":String(l);w||(w={});var E=void 0===w.depth?5:w.depth;if(void 0===j&&(j=0),j>=E&&E>0&&"object"==typeof l)return"[Object]";if(void 0===S)S=[];else if(p(S,l)>=0)return"[Circular]";if("function"==typeof l){var A=s(l);return"[Function"+(A?": "+A:"")+"]"}if(i(l)){var O=Symbol.prototype.toString.call(l);return"object"==typeof l?g(O):O}if(m(l)){for(var C="<"+String(l.nodeName).toLowerCase(),M=l.attributes||[],P=0;P<M.length;P++)C+=" "+M[P].name+'="'+n(M[P].value)+'"';return C+=">",l.childNodes&&l.childNodes.length&&(C+="..."),C+="</"+String(l.nodeName).toLowerCase()+">"}if(t(l))return 0===l.length?"[]":"[ "+b(l,x).join(", ")+" ]";if(o(l))return 0===(k=b(l,x)).length?"["+String(l)+"]":"{ ["+String(l)+"] "+k.join(", ")+" }";if("object"==typeof l&&"function"==typeof l.inspect)return l.inspect();if(d(l)){k=[];return U.call(l,function(n,t){k.push(x(t,l)+" => "+x(n,l))}),v("Map",_.call(l),k)}if(h(l)){var k=[];return D.call(l,function(n){k.push(x(n,l))}),v("Set",I.call(l),k)}if(u(l))return g(Number(l));if(f(l))return g(R.call(l));if(c(l))return g(x(String(l)));if(!e(l)&&!r(l)){var T=b(l,x);return 0===T.length?"{}":"{ "+T.join(", ")+" }"}return String(l)},$=Object.prototype.hasOwnProperty||function(n){return n in this},q="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},G=(j(function(n){var t=function(n){function e(n,t){return function e(u){var s;try{if(!t||null==u||"object"!=typeof u&&"function"!=typeof u||"function"!=typeof(s=u.then))l(function(){t||0!==n.length||console.error("Possible unhandled promise rejection:",u);for(var r=0;r<n.length;r++)n[r](u);i.length=0,c.length=0,a.state=t,a.retry=function(){e(u)}});else{if(u===o)throw new TypeError("Promise can't be resolved w/ itself");r(s.bind(u))}}catch(n){f(n)}}}function r(n){function t(n){return function(t){e++>0||n(t)}}var e=0,r=t(f);try{n(t(u),r)}catch(n){r(n)}}if(!(this instanceof t))throw new Error("Promise must be called with `new`");if("function"!=typeof n)throw new TypeError("executor must be a function");var o=this,i=[],c=[],u=e(i,!0),f=e(c,!1),a=o._instance={resolvers:i,rejectors:c},l="function"==typeof setImmediate?setImmediate:setTimeout;r(n)};t.prototype.then=function(n,e){function r(n,t,e,r){t.push(function(t){if("function"!=typeof n)e(t);else try{o(n(t))}catch(n){i&&i(n)}}),"function"==typeof c.retry&&r===c.state&&c.retry()}var o,i,c=this._instance,u=new t(function(n,t){o=n,i=t});return r(n,c.resolvers,o,!0),r(e,c.rejectors,i,!1),u},t.prototype.catch=function(n){return this.then(null,n)},t.resolve=function(n){return n instanceof t?n:new t(function(t){t(n)})},t.reject=function(n){return new t(function(t,e){e(n)})},t.all=function(n){return new t(function(t,e){var r=n.length,o=0,i=[];if(0===n.length)t([]);else for(var c=0;c<n.length;c++)!function(c){function u(n){o++,i[c]=n,o===r&&t(i)}null==n[c]||"object"!=typeof n[c]&&"function"!=typeof n[c]||"function"!=typeof n[c].then?u(n[c]):n[c].then(u,e)}(c)})},t.race=function(n){return new t(function(t,e){for(var r=0;r<n.length;r++)n[r].then(t,e)})},"undefined"!=typeof window?(void 0===window.Promise&&(window.Promise=t),n.exports=window.Promise):void 0!==q?(void 0===q.Promise&&(q.Promise=t),n.exports=q.Promise):n.exports=t}),j(function(n){var t=function(){function n(n,t){if(!o[n]){o[n]={};for(var e=0;e<n.length;e++)o[n][n.charAt(e)]=e}return o[n][t]}var t=String.fromCharCode,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",o={},i={compressToBase64:function(n){if(null==n)return"";var t=i._compress(n,6,function(n){return e.charAt(n)});switch(t.length%4){default:case 0:return t;case 1:return t+"===";case 2:return t+"==";case 3:return t+"="}},decompressFromBase64:function(t){return null==t?"":""==t?null:i._decompress(t.length,32,function(r){return n(e,t.charAt(r))})},compressToUTF16:function(n){return null==n?"":i._compress(n,15,function(n){return t(n+32)})+" "},decompressFromUTF16:function(n){return null==n?"":""==n?null:i._decompress(n.length,16384,function(t){return n.charCodeAt(t)-32})},compressToUint8Array:function(n){for(var t=i.compress(n),e=new Uint8Array(2*t.length),r=0,o=t.length;r<o;r++){var c=t.charCodeAt(r);e[2*r]=c>>>8,e[2*r+1]=c%256}return e},decompressFromUint8Array:function(n){if(null===n||void 0===n)return i.decompress(n);for(var e=new Array(n.length/2),r=0,o=e.length;r<o;r++)e[r]=256*n[2*r]+n[2*r+1];var c=[];return e.forEach(function(n){c.push(t(n))}),i.decompress(c.join(""))},compressToEncodedURIComponent:function(n){return null==n?"":i._compress(n,6,function(n){return r.charAt(n)})},decompressFromEncodedURIComponent:function(t){return null==t?"":""==t?null:(t=t.replace(/ /g,"+"),i._decompress(t.length,32,function(e){return n(r,t.charAt(e))}))},compress:function(n){return i._compress(n,16,function(n){return t(n)})},_compress:function(n,t,e){if(null==n)return"";var r,o,i,c={},u={},f="",a="",l="",s=2,p=3,d=2,h=[],m=0,y=0;for(i=0;i<n.length;i+=1)if(f=n.charAt(i),Object.prototype.hasOwnProperty.call(c,f)||(c[f]=p++,u[f]=!0),a=l+f,Object.prototype.hasOwnProperty.call(c,a))l=a;else{if(Object.prototype.hasOwnProperty.call(u,l)){if(l.charCodeAt(0)<256){for(r=0;r<d;r++)m<<=1,y==t-1?(y=0,h.push(e(m)),m=0):y++;for(o=l.charCodeAt(0),r=0;r<8;r++)m=m<<1|1&o,y==t-1?(y=0,h.push(e(m)),m=0):y++,o>>=1}else{for(o=1,r=0;r<d;r++)m=m<<1|o,y==t-1?(y=0,h.push(e(m)),m=0):y++,o=0;for(o=l.charCodeAt(0),r=0;r<16;r++)m=m<<1|1&o,y==t-1?(y=0,h.push(e(m)),m=0):y++,o>>=1}0==--s&&(s=Math.pow(2,d),d++),delete u[l]}else for(o=c[l],r=0;r<d;r++)m=m<<1|1&o,y==t-1?(y=0,h.push(e(m)),m=0):y++,o>>=1;0==--s&&(s=Math.pow(2,d),d++),c[a]=p++,l=String(f)}if(""!==l){if(Object.prototype.hasOwnProperty.call(u,l)){if(l.charCodeAt(0)<256){for(r=0;r<d;r++)m<<=1,y==t-1?(y=0,h.push(e(m)),m=0):y++;for(o=l.charCodeAt(0),r=0;r<8;r++)m=m<<1|1&o,y==t-1?(y=0,h.push(e(m)),m=0):y++,o>>=1}else{for(o=1,r=0;r<d;r++)m=m<<1|o,y==t-1?(y=0,h.push(e(m)),m=0):y++,o=0;for(o=l.charCodeAt(0),r=0;r<16;r++)m=m<<1|1&o,y==t-1?(y=0,h.push(e(m)),m=0):y++,o>>=1}0==--s&&(s=Math.pow(2,d),d++),delete u[l]}else for(o=c[l],r=0;r<d;r++)m=m<<1|1&o,y==t-1?(y=0,h.push(e(m)),m=0):y++,o>>=1;0==--s&&(s=Math.pow(2,d),d++)}for(o=2,r=0;r<d;r++)m=m<<1|1&o,y==t-1?(y=0,h.push(e(m)),m=0):y++,o>>=1;for(;;){if(m<<=1,y==t-1){h.push(e(m));break}y++}return h.join("")},decompress:function(n){return null==n?"":""==n?null:i._decompress(n.length,32768,function(t){return n.charCodeAt(t)})},_decompress:function(n,e,r){var o,i,c,u,f,a,l,s=[],p=4,d=4,h=3,m="",y=[],w={val:r(0),position:e,index:1};for(o=0;o<3;o+=1)s[o]=o;for(c=0,f=Math.pow(2,2),a=1;a!=f;)u=w.val&w.position,w.position>>=1,0==w.position&&(w.position=e,w.val=r(w.index++)),c|=(u>0?1:0)*a,a<<=1;switch(c){case 0:for(c=0,f=Math.pow(2,8),a=1;a!=f;)u=w.val&w.position,w.position>>=1,0==w.position&&(w.position=e,w.val=r(w.index++)),c|=(u>0?1:0)*a,a<<=1;l=t(c);break;case 1:for(c=0,f=Math.pow(2,16),a=1;a!=f;)u=w.val&w.position,w.position>>=1,0==w.position&&(w.position=e,w.val=r(w.index++)),c|=(u>0?1:0)*a,a<<=1;l=t(c);break;case 2:return""}for(s[3]=l,i=l,y.push(l);;){if(w.index>n)return"";for(c=0,f=Math.pow(2,h),a=1;a!=f;)u=w.val&w.position,w.position>>=1,0==w.position&&(w.position=e,w.val=r(w.index++)),c|=(u>0?1:0)*a,a<<=1;switch(l=c){case 0:for(c=0,f=Math.pow(2,8),a=1;a!=f;)u=w.val&w.position,w.position>>=1,0==w.position&&(w.position=e,w.val=r(w.index++)),c|=(u>0?1:0)*a,a<<=1;s[d++]=t(c),l=d-1,p--;break;case 1:for(c=0,f=Math.pow(2,16),a=1;a!=f;)u=w.val&w.position,w.position>>=1,0==w.position&&(w.position=e,w.val=r(w.index++)),c|=(u>0?1:0)*a,a<<=1;s[d++]=t(c),l=d-1,p--;break;case 2:return y.join("")}if(0==p&&(p=Math.pow(2,h),h++),s[l])m=s[l];else{if(l!==d)return null;m=i+i.charAt(0)}y.push(m),s[d++]=i+m.charAt(0),i=m,0==--p&&(p=Math.pow(2,h),h++)}}};return i}();null!=n&&(n.exports=t)}),S(".js")),J=S(".ts"),K=S(".ls"),Q=S(".css"),V=S(".html"),W=function(n){return G(n)||J(n)||K(n)},X=window.name,Y={},Z=window.parent,nn={};delete window.parent,delete window.frameElement,document.write=function(n){document.body.innerHTML+=n},Error.stackTraceLimit=1/0;var tn=["log","error","trace","warn","info","time","timeEnd"],en=window.console.log;tn.forEach(function(n){var t=window.console[n];window.console[n]=A(t,n)});var rn=A(null,"print");window.p=function(n){return rn.apply(null,arguments),n},window.onerror=function(n,t,e,r,o){(o=o||{message:n,stack:"at "+(t||Y.name||"unknown")+":"+e+":"+r}).currentScript=Y.name,O(o.message||String(o),"error",o)},window.addEventListener("resize",function(){return x("resize")}),window.addEventListener("message",function(n){var t=n.data;if("init"===t.name)E(t.content);else if("css"===t.name){var e=document.getElementById(t.content.name);e?e.textContent=t.content.content:location.reload()}else if("eval"===t.name)try{O(window.eval(t.content)||"undefined","log",{stack:""})}catch(n){O(String(n),"error",{stack:""})}});var on=/(.*)[ @(](.*):([\d]*):([\d]*)/i}();
