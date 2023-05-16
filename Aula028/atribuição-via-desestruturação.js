/* let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a,b,c) */



const numeros = [ 123, 234, 345, 456, 567, 678, 789, 891, 912];
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero, terceiroNumero);
console.log(resto);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const [um, , tres, , cinco] = num
console.log(um, tres, cinco)

const array = [
 //     0         1         2       -  índice 1
 //  0  1  2   0  1  2   0  1  2    -  índice 2
    [1, 2, 3],[4, 5, 6],[7, 8, 9]
];

console.log(array[1][0]) //no bloco índice 1 e dentro deste índice, busco o número 4 pelo índice 0

// jeito difícil
const [,,[,oito]] = array;
console.log(oito)


const [lista1, lista2, lista3] = array;
console.log(lista2[0])