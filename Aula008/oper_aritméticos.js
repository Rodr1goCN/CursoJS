/* 
** Operadores Aritiméticos
**     + ADIÇÃO / CONCATENÇÃO
**     - SUBTRAÇÃO 
**     / DIVISÃO
**     * MULTIPLICAÇÃO
**    ** POTENCIAÇÃO (NO CASO DA FUNÇAÕ ABAIXO 5^19)
**     % RESTO DA DIVISÃO
*/

/* 
** ORDEM DE PRECEDENCIA
**    ()           - primeiro parênteses                                      |
**    **           - segundo potência                                         |
**   * / %         - terceiro multiplicação - divisão - resto da divisão      |
**   + -           - quarto adição e diminuição                              \/
*/


const num1 = 5;
const num2 = 19;
console.log(num1 % num2);


let contador = 1
contador++ //Quer dizer que: ela pega o valor dela e adiciona mais 1
console.log(contador)

/* 
** Se colocarmos o ++ antes do contador (++contador), sera contado antes o número.
** Ex.: let contador = 1
**      console.log(++contador)
**      resultado sera 2   /// Se colocarmos depois do contador (contador++)  
** 
** Ex.: let contador = 1
**      console.log(contador++)  
**      resultado sera 1 /// pois vai ser calculado depois
**      console.log(contador)
**      resultado sera 2 /// o 1 foi somado depois
*/

let num3 = 10;
console.log(--num3);

/* 
** Se usarmos o operador de decremento (--) sera subtraído um valor 
** Ex.: let num3 = 10;
**      console.log(--num3);
**      resultado será 9
*/

/* OPERADORES DE ATRIBUIÇÃO 
 */

let num4 = 0;
num4 += 2; // num4 = num4 + 2
num4 += 2; // num4 = num4 + 2 = total 4
console.log(num4)

/* 
** podemos usar também outros operadores de multiplicação (*) subtrição (-) e divisão (/)
** também como os operadores de potenciação (**) e o resto da divisão (%)
*/

const num5 = 15;
const num6 = '5'; //quando se usa multiplicação no JavaScript mesmo tendo uma string, ele tenta resolver mas se usar o sinal de adição (+) ele ira concatenar o 15 com 5 ficando 155
console.log(num5 * num6)

/* 
** const num5 = 15;
** const num6 = parseInt ('5');
** console.log(num5 + num6); /// agora ele vai somar, pois o parseInt transformou o '5' string para number mas se usar 5.2 ele ignora o .2 pois o parseInt só pega o número inteiro
** parseFloat('5.2') já ira somar a casa decimal
** Number('5.2) funciona como o parseInt e parseFloat
*/