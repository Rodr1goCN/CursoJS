(()=>{"use strict";var n,r,e,t,o,a,i,s,c,p,u,d,l,A,f={122:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(537),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: blanchedalmond;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.container {\n    max-width: 700px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 10px;\n    margin: 30px auto;\n    padding: 12px;\n    box-shadow: 1px 1px 3px 1px #00000032;\n}\n\n.relogio{\n    margin: 10px;\n    font-size: 50px;\n}\n\n.iniciar, .pausar, .zerar{\n    padding: 3px;\n}\n\n.pausado{\n    color: red;\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,gCAAgC;IAChC,4DAA4D;AAChE;;AAEA;IACI,gBAAgB;IAChB,oCAAoC;IACpC,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;IACb,qCAAqC;AACzC;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;AACd",sourcesContent:["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: blanchedalmond;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.container {\r\n    max-width: 700px;\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 10px;\r\n    margin: 30px auto;\r\n    padding: 12px;\r\n    box-shadow: 1px 1px 3px 1px #00000032;\r\n}\r\n\r\n.relogio{\r\n    margin: 10px;\r\n    font-size: 50px;\r\n}\r\n\r\n.iniciar, .pausar, .zerar{\r\n    padding: 3px;\r\n}\r\n\r\n.pausado{\r\n    color: red;\r\n}"],sourceRoot:""}]);const s=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<n.length;p++){var u=[].concat(n[p]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},537:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],p=t.base?c[0]+t.base:c[0],u=a[p]||0,d="".concat(p," ").concat(u);a[p]=u+1;var l=e(d),A={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)r[l].references++,r[l].updater(A);else{var f=o(A,t);t.byIndex=s,r.splice(s,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var c=t(n,o),p=0;p<a.length;p++){var u=e(a[p]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},m={};function v(n){var r=m[n];if(void 0!==r)return r.exports;var e=m[n]={id:n,exports:{}};return f[n](e,e.exports,v),e.exports}v.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return v.d(r,{a:r}),r},v.d=(n,r)=>{for(var e in r)v.o(r,e)&&!v.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},v.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),v.nc=void 0,n=v(379),r=v.n(n),e=v(795),t=v.n(e),o=v(569),a=v.n(o),i=v(565),s=v.n(i),c=v(216),p=v.n(c),u=v(589),d=v.n(u),l=v(122),(A={}).styleTagTransform=d(),A.setAttributes=s(),A.insert=a().bind(null,"head"),A.domAPI=t(),A.insertStyleElement=p(),r()(l.Z,A),l.Z&&l.Z.locals&&l.Z.locals})();
//# sourceMappingURL=bundle.js.map