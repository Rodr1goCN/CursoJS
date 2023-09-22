const { texto, arquivos } = require('./base_aula1');

// Quantificadores

/*   * (opcionais) 0 ou n vezes (parecido com o +, porém não faz buscas com uma sequência de letras maiúsculas) {0,}

//   + (obrigatório) 1 ou n vezes (procura por mais letras. ex(/Ro+drigo+) vai procurar se há mais o's dentro do texto ) {1,}

//   ? (opcionais) 0 ou 1  vez {0, 1}

//   \ (caractere de escape)

//   {n,m} mínimo e máximo // {10,} no mínimo 10 // {,10} de 0 a 10 // {5,10} mínimo 5 e máximo 10 // {1} específico, somente uma vez
*/   


console.log(texto);

const regExp1 = /Jo+ão+/gi

console.log(texto.match(regExp1));

const regExp2 = /\.((jp|JP)(e|E)*(g|G))/g // ? (pode ou não aparecer a letra 'e', sempre vai ser a letra a esquerda a ser pesquisada)

for (const arquivo of arquivos){
    const valido = arquivo.match(regExp2)

   // if(!valido) continue;

    console.log(arquivo, valido);
}