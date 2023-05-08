/* 
** Operadores Lógicos
** && > AND > E > Todas as expressões precisam ser verdadeiras para retornar true
** || > OR > OU > Se algumas forem falsas e uma verdadeira, sempre ira retornar true
** ! > NOT > NÃO > !true = false e !false = true // !!true = true e !!false = false
*/

const expressaoAnd = true && true && true;
const expressaoOr = true || false; 


console.log(expressaoOr);

const usuario = "rodrigo";
const senha = '123456';

const vaiLogar = usuario === 'Rodrigo' && senha === '123456';

console.log(vaiLogar);

