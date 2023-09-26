const {html2} = require('./base_aula');

// $1 $2 $3 <- Retrovisores
// * -> Pode ou não ter caractares

console.log(html2);
console.log(html2.match(/\<.+?>.+?<\/.+?>/g));
console.log(html2.match(/\<[a-z]+>.+<\/.+>/gi));
console.log(html2.match(/\<\w+>.+<\/.+>/gi)); // Engloba todas as letras maiúsculas e minúsculas, números e underline
console.log(html2.match(/<(\w+)>.+?<\/\1>/g)); // Se tiver outras tags html iguais, ele separa por vírgula 
console.log(html2.match(/<(\w+).*?>.+?<\/\1>/g)); 
console.log(html2.match(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/g)); // Funciona quando se tem quebra de linha
console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)<\/\2>/g, '$1 HAHAHAH $3 HAHAHAHA'));