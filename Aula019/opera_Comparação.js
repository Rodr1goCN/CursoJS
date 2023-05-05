/* Operadores de Comparação
** > maior que
** >= maior que ou igual a
** < menor que
** <= menor que ou igual a
** == igualdade (checa valor) ** não é recomendável usa-lo
** === igualdade estrita (checa valor e tipo)
** != diferente (checa valor) ** não é recomendável usa-lo
** !== diferente estrito (checa valor e tipo)
*/

//console.log(20 > 19) //retorna uma valor boolean (true ou false)

//console.log(20 >= 20) 

const num1 = 15; //number
const num2 = '15'; //string
const comparacao = num1 == num2; // quando se usa o sinal de igualdade (==) mesmo se um numero for string, o resultado mostrara com true // O CORRETO é usar o sinal de (===) que mostrara o resultado false
console.log(comparacao);

