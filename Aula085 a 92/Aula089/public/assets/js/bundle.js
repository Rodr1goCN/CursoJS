(()=>{"use strict";var n={122:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(537),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: blanchedalmond;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.container {\n    max-width: 700px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    margin: 30px auto;\n    padding: 12px;\n    box-shadow: 1px 1px 3px 1px #00000032;\n    text-align: center;\n}\n\nh1{\n    font-size: 2rem;\n}\n\n.resultado{\n    display: inline-block;\n    margin: 0 auto;\n    font-size: 3rem;\n    color: red;\n    font-weight: bolder;\n    background-color: rgba(0, 0, 0, 0.148);\n    border: 1px rgba(0, 0, 0, 0.415) solid;\n    letter-spacing: 1.5px;\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,gCAAgC;IAChC,4DAA4D;AAChE;;AAEA;IACI,gBAAgB;IAChB,oCAAoC;IACpC,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;IACb,qCAAqC;IACrC,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,cAAc;IACd,eAAe;IACf,UAAU;IACV,mBAAmB;IACnB,sCAAsC;IACtC,sCAAsC;IACtC,qBAAqB;AACzB",sourcesContent:["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: blanchedalmond;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.container {\r\n    max-width: 700px;\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 10px;\r\n    margin: 30px auto;\r\n    padding: 12px;\r\n    box-shadow: 1px 1px 3px 1px #00000032;\r\n    text-align: center;\r\n}\r\n\r\nh1{\r\n    font-size: 2rem;\r\n}\r\n\r\n.resultado{\r\n    display: inline-block;\r\n    margin: 0 auto;\r\n    font-size: 3rem;\r\n    color: red;\r\n    font-weight: bolder;\r\n    background-color: rgba(0, 0, 0, 0.148);\r\n    border: 1px rgba(0, 0, 0, 0.415) solid;\r\n    letter-spacing: 1.5px;\r\n}"],sourceRoot:""}]);const c=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},537:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(o," */");return[r].concat([i]).join("\n")}return[r].join("\n")}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var u=n[c],s=t.base?u[0]+t.base:u[0],l=i[s]||0,f="".concat(s," ").concat(l);i[s]=l+1;var p=e(f),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)r[p].references++,r[p].updater(d);else{var v=o(d,t);t.byIndex=c,r.splice(c,0,{identifier:f,updater:v,references:1})}a.push(f)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var u=t(n,o),s=0;s<i.length;s++){var l=e(i[s]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=u}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{function n(r){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(r)}function r(r,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,(void 0,i=function(r,e){if("object"!==n(r)||null===r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var o=t.call(r,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var t=function(){function n(r){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),this.cpfVerdadeiro=r,this.cpfEnviado=r.replace(/\D+/g,"")}var e,t,o;return e=n,o=[{key:"criaDigito",value:function(n){var r=Array.from(n),e=r.length+1,t=11-r.reduce((function(n,r){return n+=e*Number(r),e--,n}),0)%11;return t>9?"0":String(t)}}],(t=[{key:"valida",value:function(){if(void 0===this.cpfEnviado)return!1;if(11!==this.cpfEnviado.length)return!1;if(this.isSequencia())return!1;var r=this.cpfEnviado.slice(0,-2),e=n.criaDigito(r);return r+e+n.criaDigito(r+e)===this.cpfEnviado}},{key:"isSequencia",value:function(){return this.cpfEnviado[0].repeat(this.cpfEnviado.length)===this.cpfEnviado}},{key:"toString",value:function(){return this.cpfVerdadeiro.replace()}}])&&r(e.prototype,t),o&&r(e,o),Object.defineProperty(e,"prototype",{writable:!1}),n}();function o(n){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},o(n)}function i(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,(void 0,i=function(n,r){if("object"!==o(n)||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var t=e.call(n,"string");if("object"!==o(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(t.key),"symbol"===o(i)?i:String(i)),t)}var i}var a,c=function(){function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n)}var r,e;return r=n,e=[{key:"rand",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.floor(Math.random()*(r-n)+n))}},{key:"formatando",value:function(n){return n.slice(0,3)+"."+n.slice(3,6)+"."+n.slice(6,9)+"-"+n.slice(9,11)}},{key:"geraNovoCPF",value:function(){var n=this.rand(),r=t.criaDigito(n),e=n+r+t.criaDigito(n+r);return this.formatando(e)}}],e&&i(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),n}(),u=e(379),s=e.n(u),l=e(795),f=e.n(l),p=e(569),d=e.n(p),v=e(565),m=e.n(v),A=e(216),b=e.n(A),y=e(589),g=e.n(y),h=e(122),C={};C.styleTagTransform=g(),C.setAttributes=m(),C.insert=d().bind(null,"head"),C.domAPI=f(),C.insertStyleElement=b(),s()(h.Z,C),h.Z&&h.Z.locals&&h.Z.locals,a=new c,document.querySelector(".resultado").innerHTML=a.geraNovoCPF()})()})();
//# sourceMappingURL=bundle.js.map