const {Pessoa} = require('./mod1');

const p1 = new Pessoa('Rodrigo')
console.log(p1);

/* 
const falaNome = require('./mod1').falaNome; //require = funciona igual o import



###################



const mod1 = require(./mod1)
const falaNome = mod1.falaNome;
console.log(falaNome()) 
// também vai funcionar do mesmo jeito mostrando só o nome e sobrenome



###################



const { nome, sobrenome, falaNome } = require('./mod1')
console.log(falaNome())

*/