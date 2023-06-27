(()=>{"use strict";var n,r,e,t,o,a,i,c,s,u,d,p,A,l,f,m,h,g,C,b,x,v,y={122:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(537),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: blanchedalmond;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.container {\n    max-width: 700px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    margin: 30px auto;\n    padding: 12px;\n    box-shadow: 1px 1px 3px 1px #00000032;\n}\n\nh1 {\n    font-size: 2rem;\n}\n\n.resultado {\n    display: inline-block;\n    margin: 0 auto;\n    font-size: 3rem;\n    color: red;\n    font-weight: bolder;\n    background-color: rgba(0, 0, 0, 0.148);\n    border: 1px rgba(0, 0, 0, 0.415) solid;\n    letter-spacing: 1.5px;\n    padding: 8px;\n}\n\np{\n    font-size: 18px;\n}\n\ninput[type='checkbox'] {\n    width: 18px;\n    height: 18px;\n}\n\n.simb {\n    margin-bottom: 5px;\n}\n\nbutton {\n    display: block;\n    margin-top: 10px;\n    font-size: 18px;\n    padding: 3px;\n    cursor: pointer;\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,gCAAgC;IAChC,4DAA4D;AAChE;;AAEA;IACI,gBAAgB;IAChB,oCAAoC;IACpC,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;IACb,qCAAqC;AACzC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,cAAc;IACd,eAAe;IACf,UAAU;IACV,mBAAmB;IACnB,sCAAsC;IACtC,sCAAsC;IACtC,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,YAAY;IACZ,eAAe;AACnB",sourcesContent:["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: blanchedalmond;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.container {\r\n    max-width: 700px;\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 10px;\r\n    margin: 30px auto;\r\n    padding: 12px;\r\n    box-shadow: 1px 1px 3px 1px #00000032;\r\n}\r\n\r\nh1 {\r\n    font-size: 2rem;\r\n}\r\n\r\n.resultado {\r\n    display: inline-block;\r\n    margin: 0 auto;\r\n    font-size: 3rem;\r\n    color: red;\r\n    font-weight: bolder;\r\n    background-color: rgba(0, 0, 0, 0.148);\r\n    border: 1px rgba(0, 0, 0, 0.415) solid;\r\n    letter-spacing: 1.5px;\r\n    padding: 8px;\r\n}\r\n\r\np{\r\n    font-size: 18px;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n    width: 18px;\r\n    height: 18px;\r\n}\r\n\r\n.simb {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    margin-top: 10px;\r\n    font-size: 18px;\r\n    padding: 3px;\r\n    cursor: pointer;\r\n}"],sourceRoot:""}]);const c=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},537:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=t.base?s[0]+t.base:s[0],d=a[u]||0,p="".concat(u," ").concat(d);a[u]=d+1;var A=e(p),l={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==A)r[A].references++,r[A].updater(l);else{var f=o(l,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);r[c].references--}for(var s=t(n,o),u=0;u<a.length;u++){var d=e(a[u]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},I={};function B(n){var r=I[n];if(void 0!==r)return r.exports;var e=I[n]={id:n,exports:{}};return y[n](e,e.exports,B),e.exports}B.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return B.d(r,{a:r}),r},B.d=(n,r)=>{for(var e in r)B.o(r,e)&&!B.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},B.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),B.nc=void 0,n=function(n,r){return Math.floor(Math.random()*(r-n)+n)},r=document.querySelector(".resultado"),e=document.querySelector(".qtd-num"),t=document.querySelector(".chk-maiusculas"),o=document.querySelector(".chk-minusculas"),a=document.querySelector(".chk-numeros"),i=document.querySelector(".chk-simbolos"),c=document.querySelector(".gerar-senha"),s=B(379),u=B.n(s),d=B(795),p=B.n(d),A=B(569),l=B.n(A),f=B(565),m=B.n(f),h=B(216),g=B.n(h),C=B(589),b=B.n(C),x=B(122),(v={}).styleTagTransform=b(),v.setAttributes=m(),v.insert=l().bind(null,"head"),v.domAPI=p(),v.insertStyleElement=g(),u()(x.Z,v),x.Z&&x.Z.locals&&x.Z.locals,c.addEventListener("click",(function(){r.innerHTML=function(r,e,t,o,a){var i=[];r=Number(r);for(var c=0;c<r;c++)e&&i.push(String.fromCharCode(n(65,91))),t&&i.push(String.fromCharCode(n(97,123))),o&&i.push(String.fromCharCode(n(48,58))),a&&i.push(String.fromCharCode(n(33,48)));return i.sort((function(){return.5-Math.random()})),i.join("").slice(0,r).match(/.{1,10}/g).join("<br>")}(e.value,t.checked,o.checked,a.checked,i.checked)||"Selecione alguma opção"}))})();
//# sourceMappingURL=bundle.js.map