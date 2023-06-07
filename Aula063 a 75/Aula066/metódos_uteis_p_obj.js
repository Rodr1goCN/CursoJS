/* 
// Object.values
// Object.entries
// Object.assign(des, any)
// Object.getOwnPropertyDescriptor(o, 'prop')
// ...(spread)
 

// Até esse momento já vimos:
// Object.keys (retorna as chaves)
// Object.freeze (congela o objeto)
// Object.defineProperties (define várias propriedades)
// Object.definePropertiy (define uma propriedade)
*/

// ...spread
const produto = { nome: 'Caneca', preco: 2 };
const outroProduto = {...produto, material: 'Madeira (carvalho)'}; //usando o spread o produto fica com valor dele e o outroProduto fica com outro valor definido

outroProduto.nome = 'Janela';
outroProduto.preco = 500;

console.log(produto);
console.log(outroProduto);
console.log('############');





//Object.assign(des, any)
const produto2 = { nome: 'Caneca', preco: 2 };
const outroProduto2 = Object.assign({}, produto2,{material: 'Lasca de carvalho'});

outroProduto2.nome = 'Janela';
outroProduto2.preco = 800;

console.log(produto2);
console.log(outroProduto2);
console.log('############');






//Object.getOwnPropertyDescriptor(o, 'prop')
const produto3 = { nome: 'Caneca', preco: 2 };
Object.defineProperty(produto3, 'nome', {
    writable: false,
    configurable: false,
    value: 'Bola'
})
console.log(Object.getOwnPropertyDescriptor(produto3, 'nome')) // mostra as chaves igual ao definePropertiy
console.log('############');






// Object.Entries
const produto4 = { nome: 'Caneca', preco: 2 , material: 'Porcelana'};

for (let [chave, valor] of Object.entries(produto4)){ //mostra os elementos separados do objeto
    console.log(chave, valor) //usando chaves [] na variável, retira o array e as ''
}