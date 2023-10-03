/* eslint-disable */
// Tipos básicos (aqui ocorre inferência de tipos)
const nome: string = 'Rodrigo'; // Qualquer tipo de strings: ''  ""  ``
const idade: number = 38; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7474
const adulto: boolean = true; // True ou false
const simbolo: symbol = Symbol('qualquer-symbol'); // symbol
const big: bigint = 10n; // Bigint

// Arrays

let arrayNumbers: Array<number> = [1, 2, 3];
let arrayNumbers2: number[] = [1, 2, 3];
let arrayStrings: Array<string> = ['a', 'b', 'b'];
let arrayStrings2: string[] = ['a', 'b', 'b'];

// Objetos

let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 38,
  nome: "rodrigo",
  adulto: true
};

console.log(pessoa.idade);

// Funções

function soma(x: number, y: number) {
  return x + y;
}

const result = soma(2,2);

const soma2: (x: number, y:number) => number = (x,y) => x + y
