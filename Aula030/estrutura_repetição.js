/* console.log('linha 0');
console.log('linha 1');
console.log('linha 2');
console.log('linha 3');
console.log('linha 4');
console.log('linha 5');
console.log('linha 6');
 */


//i = index
for (let i = 0; i <= 10; i++ ){ // se quiser pular de 10 em 10 ou outros números, só adicionar no lugar do (i++) o (i += 10) (outro valor)
    console.log(`Linha ${i}`);
}

// se quiser descrementar for (let i = 100; i >= 0; i -= 10 ){}

for (let i = 0; i <= 10; i++){
const par = i % 2 === 0 ? 'par' : 'ímpar';
console.log(i, par)
} // verificar se é par ou não

const frutas = ['maçã', 'pêra', 'uva']

for (let i = 0; i < frutas.length; i++){
    console.log(`Índice ${i}`, frutas[i])
}