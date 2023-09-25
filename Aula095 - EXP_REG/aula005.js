const { alfabeto } = require('./base_aula');

// [abc] busca por um conjunto e se tiver um [abcj] ira separar o j
// [^abc] (NEGAÇÃO) mostra todos os caracteres do conjunto menos o abc
// [0-9] SEMPRE DO MENOR PARA O MAIOR // também podemos agrupar outros (podendo separar por vírgula ou não) [0-9a-zA-Z]
// [\u00A0-\u00BF] Busca por caracteres especiais (Lista de caracteres unicode wikipedia)


console.log(alfabeto);
/* console.log(alfabeto.match(/[abcj]+/g));
console.log(alfabeto.match(/[^abc789]/g)); */
console.log(alfabeto.match(/[0-9, a-z, A-Z]+/g));
console.log(alfabeto.match(/[^0-9, a-z, A-Z]+/g)); //NEGAÇÃO
console.log(alfabeto.match(/[0-9a-zA-Zçã]+/g)); 
console.log(alfabeto.match(/[\u00A0-\u00BF]/g)); 
console.log(alfabeto.match(/[\wãç]+/g)); //Shorthand do: [0-9a-zA-Z] Letras acentuadas ele não busca
console.log(alfabeto.match(/[\W]+/g)); //Tudo que não for letras ou números ele mostrara (letras acentuadas mostra)