const { texto } = require('./base_aula1');
const regExp1 = /João|Pedro|Maria/ig;

/* console.log(texto.match(regExp1));
console.log();
console.log(texto.replace(/João|pedro/ig,'Rodrigo'));// Podemos também usar expressões regulares junto com o replace('','') para isso replace(/feijão/, 'arroz')
console.log();
console.log();
console.log(texto.replace(/(João|pedro)/ig,'"$1"'));// Também podemos adicionar em um GRUPO um parênteses usando o $1, também funciona com tags de html <b></b> */
console.log(texto.replace(/(João|pedro|maria)/ig, function(input){
    return '########## ' + input.toUpperCase() + ' ##########'; // Deixa os nomes João e Pedro em maiúsculas
}));


