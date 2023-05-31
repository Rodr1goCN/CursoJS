//                 0         1        2
const nomes = ['Rodrigo', 'Maria', 'Joana'];
nomes[1]= 'Joana';
delete nomes[2]; //apagar 1 dos nomes
console.log(nomes);


console.log('#########')
//valor por referência
const nomes2 = ['João', 'Maria', 'Joana', 'Roberto'];
const novo = [...nomes2]; //exibe todos os ítens dentro da array, mesmo tendo o novo.pop()

novo.pop(); //deleta o último ítem de dentro da array
console.log(nomes2);



console.log('#########');


const nomes3 = ['João', 'Maria', 'Joana', 'Roberto'];
const removido = nomes3.pop(); 
const primeiro = nomes3.shift();//Shift() desloca a Maria para o índice 0, retirando o João
const adicionar = nomes3.push('Costa')//adiciona no final da array um ítem
const adicionarComeco = nomes3.unshift('Silva')//adiciona no começo da array um ítem
console.log(nomes3, primeiro, removido);




console.log('#########');


//                 0       1        2         3          4         5
const nomes4 = ['João', 'Maria', 'Joana', 'Roberto', 'Wallace', 'Silva'];
const novo1 = nomes4.slice(1, 4);//também podemos usar o (1,-1) que remove as duas pontas
console.log(novo1);




console.log('#########');



const nomes5 = ['Rodrigo da Costa Nascimento'];
const separar = nomes5[0].split(' '); //split é usado somente em strings mas podemos usar no array o método [0] para acessar o primeiro(único) elemento do array
console.log(separar);



console.log('#########');



const nomes6 = ['Rodrigo', 'da', 'Costa', 'Nascimento'];
const juntar = nomes6.join(' ')//pega um array e junta para uma string
console.log(juntar)