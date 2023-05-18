const pessoas = {
    nome: 'Rodrigo',
    sobrenome: 'costa',
    idade: '38'
}

/*         JEITO ANTIGO
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}
 */

/* 
for (let i in frutas){ // for in - lê os índeces ou chaves do objeto
    console.log(frutas )
}
 */

console.log(pessoas.nome);
console.log(pessoas['nome']); // esses dois jeitos irá chamar o nome

for(let chave in pessoas){
    console.log(chave, pessoas[chave])

}