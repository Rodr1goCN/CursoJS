//IEEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

// console.log(100 / 0); isso vai gerar um número infinito, portanto ele é um número

//console.log(num1.toString() + num2) // converte um número para 'string' e toda string concatena com um número

//num1 = num1.toString // desse jeito ele converte definitivamente o num1 para string

//console.log(typeof num1) // mostra se o elemento é número ou string

//console.log(num1.toString(2)) // adicionando o número dois dentro do .toString(2), mostra a representação binária do número em questão

//console.log(num1.toFixed(2)) // deixa o número somente com duas casa decimais

//console.log(Number.isInteger(num1)) //verifica se o número dentro do num1 é um número inteiro ou não (se for = true e se for um número 10.51 = false)

//let temp = num1 * 'ola'
//console.log(Number.isNaN(temp)) // verifica se um número é um NaN (Not a Number), se for positivo = true / se não for = false

num1 += num2; //soma 0.8
num1 += num2; //soma 0.9
num1 += num2; //soma:1.00 // num1 = num1 + num2

console.log(num1.toFixed(2)); // se adicionarmos .toFixed(2), ele se torna 1.00 mas não fica um número inteiro
console.log(Number.isInteger(num1)); // pode verificar usando o .isInteger
num1 = Number(num1.toFixed(2)); //desse jeito ele vira um número inteiro
console.log(num1);
console.log(Number.isInteger(num1));