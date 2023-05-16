const pessoa = {
nome: 'Rodrigo',
sobrenome: 'costa',
idade: '37',
endereco: {
    rua: 'Itacolomi',
    numero: '0'
}
};

//Atribuição via desestruturação
const {nome = '', } = pessoa; //podemos definir outro nome dentro do objeto. ex: nome = 'André'


const {nome: teste = 'André', sobrenome, idade, endereco: {rua: r = 12346, numero}} = pessoa
console.log(teste, sobrenome, idade, r, numero)

//para funcionar o nome: teste = 'André' precisa por {} e fica assim: nome: {teste = 'André'}

const {nomes, ...resto} = pessoa;
console.log(resto)
