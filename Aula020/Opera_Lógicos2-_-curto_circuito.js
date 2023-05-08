/* 
** && > false && true > se tiver um falso sempre retonara false
** || > true || false > retorna o valor mesmo verdadeiro
** 
** valores avaliados em FALSE
** 0
** '' "" ``
** null / undefined
** NaN
** 
*/

console.log('Rodrigo Costa' && 0 && 'Maria'); // se o javascript encontrar uma expressão que avalia em falso, sempre retorna o valor falso
console.log('Rodrigo Costa' && true && 'Maria'); // se não encontrar nada falso, faz a checagem e sempre retorna ultima
console.log('Rodrigo Costa' && true && '');



//Operador &&
function falaOi(){
    return 'oi';
}

let vaiExecutar = '2' //se for verdadeiro, executa o oi e se for falso = msg de false

console.log(vaiExecutar && falaOi());




//Operador ||
const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);


const a = 0;
const b = null;
const c = 'false'; // pegadinha > false dentro de uma string é verdadeiro
const d = false;
const e = NaN;

console.log(a || b || c || d || e);