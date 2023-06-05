//                 -5       -4       -3         -2          -1
//                  0        1        2          3           4
const nomes = ['Rodrigo', 'Maria', 'Joana', 'Fernando', 'Fernanda'];
//nomes.splice(índice atual, delete, elemento1, elemento2, elemento3 ...);
//simular o pop
const removido = nomes.splice(0,1); //saída: 'Fernada' removida
nomes.splice(nomes.length, 0, 'Luiz')//simula o push(), adicionando um item no final
const adicionando = nomes.splice(0,0,'Costa') //adicionou no índice 0 o item 'Costa'
console.log(nomes.slice(), removido, adicionando);