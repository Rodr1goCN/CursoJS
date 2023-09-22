const { html } = require('./base_aula');

console.log(html)
console.log(html.match(/<.+>.+<\/.+>/g)); // .+ Qualquer caracter exceto uma quebra de linha (GREEDY)
console.log(html.match(/<.+?>.+?<\/.+?>/g)); // .+ Qualquer caracter exceto uma quebra de linha (NON-GREEDY)