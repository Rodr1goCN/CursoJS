// g - global (encontra todas as ocorrências)
// i - insensitive (não tem diferença entre letras (pode ser maiúscula ou minúscula))
// () - Podemos separar por grupos
// | - Ou
//   $1    $2    $3 
// (...) (...) (...) - também podemos representar os GRUPOS por $1 $2 $3 e se tiver parênteses dentro de parentes a ordem vai ser mantida por parênteses. 
//ex: (...$1 ($2 ($3) ) ) 

const { texto } = require('./base_aula');

const regExp1 = /(Pedro, |Maria, |joão, )(sempre o admirava por sua generosidade e empatia)/i;
const encontrado = regExp1.exec(texto)

// Faz a busca para ver se há a palavra João ou joão no texto.
console.log(regExp1.test(texto));
console.log();
// Podemos usar o (texto)[0] - verifica se existe a palavra joão ou João e a retorna
// Podemos usar o (texto).index -  mostra em qual index a palavra desejada esta 
console.log(encontrado.index);
console.log();
 console.log(encontrado[0]);
console.log(encontrado[1]);
console.log(encontrado[2]);

// Podemos adicionar um if (encontrado){} para caso a palavra não existir no texto e não mostrar o erro de null
if (encontrado) {
    console.log(encontrado[0]);
    console.log(encontrado[1]);
    console.log(encontrado[2]);
}