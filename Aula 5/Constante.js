/* 
**Não podemos criar CONSTANTES com palavras reservadas
**CONSTANTES precisam ter nomes significativos
**Não pode começar o nome de uma CONSTANTE com um número 
**Não pode ter espaços ou traços
**Utilizamos o camelCase - Ex.: nomeCliente - nomeClientePago
**Javascrit diferencia maiuscula e minúscula. Ex.: nomeCliente =/= nomecliente
**Não podemos modificar o valor de uma CONSTANTE
**Não usar o VAR, utilizar o CONST
*/


/*
Não podemos fazer isso com CONST:
const nome = 'Rodrigo';
nome = 'Costa' */

/* 
**Operadores aritiméticos: soma(+) divisão(/) subtração(-) e multiplicação(*)
*/

//dentro de aspas = string = texto | quando não usa aspas = Number = número
const primeiroNumero = 15;
const segundoNumero = 20;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 7;
console.log(resultadoDuplicado);

/*
**const primeiroNumero = '15'; //com aspas
**const segundoNumero = 20;
**console.log(primeiroNumero + segundoNumero); // vai concatenar o 15 + 20 se tornando 1520
*/