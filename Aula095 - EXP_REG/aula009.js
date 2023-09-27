const { lookahead } = require('./base_aula');

console.log(lookahead);
console.log(lookahead.match(/.+[^in]active/gim)); //mostra só os active // [^in] não mostra o in

// Positive lookahead (?=) (frases que tem active) // 
console.log(lookahead.match(/.+(?=[^in]active)/gim)); // retorna a palavra 'active'
console.log(lookahead.match(/.+(?=\s+inactive)/gim)); // retorna a palavra 'inactive' (\s retira os espaços do final ABCDF)

// Negative lookahead (?!) (frases que NÃO tem active)
console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

// Negative lookahead (?!) (frases que NÃO tem inactive)
console.log(lookahead.match(/^(?!.+inactive).+$/gim));

// Positive lookbehind (frases que começam com ONLINE)
console.log(lookahead.match(/(?<=ONLINE\s+).*/gim));

// Negative lookbehind (frases que começam com OFFLINE)
console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim)); // (leia-se: quero encontrar tudo que esta na linha, só que a frase não deve ter o ONLINE )

const cpf = `
551.484.786-12
792.235.864-78
111.111.111-11
783.236.759-98
` 
// Retorna somente o 3 cpf sem ser o (111.111.111-11)
console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}\-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm)); 