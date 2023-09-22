const { texto, arquivos, html } = require('./base_aula1');

console.log(html)
console.log(html.match(/<.+>.+<\/.+>/g)); // .+ Qualquer caracter exceto uma quebra de linha (GREEDY)
console.log(html.match(/<.+?>.+?<\/.+?>/g)); // .+ Qualquer caracter exceto uma quebra de linha (NON-GREEDY)