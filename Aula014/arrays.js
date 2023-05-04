// índice :         0         1        2         
const alunos = ['Rodrigo', 'Maria', 'João']; //para criar uma array utiliza-se [ ] // pode por numeros, booleans, null
//const alunos = ['Rodrigo', 'Maria', 'João', 1, true, null];

//console.log(alunos[2]); //se quisermos pegar somente um item dentro do array, basta usar o número correspondente [0];

//alunos[0] = 'Costa'; //faz com que o numero zero dentro da array seja mudado para Costa
//alunos[3] = 'Joaquina'; //se não existir um elemento dentro da array, ela será criada

//alunos[alunos.length]; = 'Eduarda' //Com isso aumenta o número de nomes dentro da array
//alunos[alunos.length]; = 'Fábio'
//alunos[alunos.length]; = 'Joana'

//alunos.push('Costa');
//alunos.push('Rodrigo'); //adiciona um elemento no final da array

//alunos.unshift('Luíza');
//alunos.unshift('Fábio'); //adiciona um elemento no começo da array / sempre o ultimo .unshift vai ser o primeiro dentro da array

//const removido = alunos.pop(); //remove o ultimo elemento dentro da array
//const removido = alunos.shift(); //remove o primeiro elemento dentro da array, com isso muda o índice, a maria vira [0]
//console.log(removido);

//delete alunos[1] // deleta um elemento dentro da array, mas deixa esse espaço vazio

//console.log(alunos[10]) //busca um elemento dentro da array, se não existir esse elemento, ele retorna "UNDEFINED"

//alunos.push('Costa');
//alunos.push('Rodrigo'); 

//console.log(alunos.slice(0,-2)); // slice 'fatia' o elemento dentro da array e retorna somente o que foi pedido // somente valores negativos fica de tras para frente // e se adicionarmos desse jeito (0, -1) sera eliminado o(s) ultimo(s)

console.log(typeof alunos); // ira retornar um objeto
console.log(alunos instanceof Array) // se for true a instância é um array e se for false não é um array