const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1 + a2; //se concatenar desse jeito a saída vai ser assim: 1, 2, 34, 5, 6
console.log(a3)

//para resolver o problema, se usa:
const a4 = a1.concat(a2, [7, 8, 9], 'Rodrigo');
console.log(a4)

//ou podemos fazer assim, utilizando o spread operator:
const a5 = [...a1,'Costa' ,...a2, 'Rodrigo', ...[7, 8, 9]];// se usar o array desse jeito dentro do spread operator [7, 8, 9] a saída ira conter os parenteses, para resolver usa-se os tres pontos antes, ficando: ...[7, 8, 9] 
console.log(a5)