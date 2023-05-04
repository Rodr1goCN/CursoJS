/* 
** Primitivos (imutáveis) - string, number, boolean, undefined, null (bigInt, symbol) // imutáveis = não podemos mudar nada deles // Valores copiados
**
** let a = "A";
** let b = a; // cópia de a
**
** a = 'outra coisa';
** console.log(a,b); //resultado => outra coisa A
**
**
**
**
**
** Referência (mutável) - array, objetc, function // Passados por referência
** 
** let a = [1,2,3];
** let b = a;
**
** console.log(a,b); //resultado => [1,2,3] [1,2,3]
**
** a.push(4); // acrescenta o número 4 no final da array, ficando: [1,2,3,4]
** console.log(a,b); //resultado => [1,2,3,4] [1,2,3,4] // quando muda o 'a' o 'b' fica igual o 'a'
**
** b.pop(); //remove a ultima letra, número ou palavra de dentro da array
** console.log(a,b) // resultado => [1,2,3] [1,2,3]
**
**
** let a = [1,2,3];
** let b = [...a] // faz com que o valor de 'a' seja copiado para b
** let c = b
**
** a.push('Rodrigo')
** console.log(c) // resultado => [1,2,3]
**console.log(a,b,c) // resultado => [ 1, 2, 3, 'Rodrigo' ] [ 1, 2, 3 ] [ 1, 2, 3 ]
**
*/


const a = {
    nome: 'Rodrigo',
    sobrenome: 'Costa'
};

const b = a;
a.nome = 'João'; // faz com que mude o nome para João mas se adicionarmos o no const b = {...a} o nome não será mudado
console.log(b)
console.log(a)