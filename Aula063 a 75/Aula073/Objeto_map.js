const pessoas = [
    {id: 3, nome: 'Rodrigo'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'João'},
];

/* const novasPessoas ={}
for (const pessoa of pessoas){
   const { id } = pessoa;
   novasPessoas[id] = {...pessoa}
} */


const novasPessoas = new Map()
for (const pessoa of pessoas){
   const { id } = pessoa;
   novasPessoas.set(id, {...pessoa})
}

for (const [identifier, {id, nome}] of novasPessoas){//pegar o identificador, id e o nome (id e o nome pode ser {} ou não)
    console.log(identifier, {id, nome})
}

for (const pessoas of novasPessoas.keys()){ // só pega as chaves
    console.log(pessoas)
}
for (const pessoas of novasPessoas.values()){ // pega o array semelhante
    console.log(pessoas)
}

novasPessoas.delete(2)//deleta o id numero 2

console.log(novasPessoas)