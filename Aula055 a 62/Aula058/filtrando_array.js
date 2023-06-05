//Filter, map, reduce
//Filter => Sempre retorna um array, com a mesma quantidade de elementos ou menos

//Retorne os números maiores que 10
const numeros = [1, 7, 8, 5, 4, 2, 10, 6, 11, 20]

function callbackFilter(valor, indice, array) {//valor = os números do array
    return valor >= 10; //o jeito curto do IF + ELSE (SOMENTE VALORES BOOLEAN)
}

const numerosFiltrados = numeros.filter(callbackFilter)



const numerosFiltrados2 = numeros.filter(valor=>  valor >= 10) //jeito curto com arrow function embutido


const numerosFiltrados3 = numeros.filter((valor, indice, array) => {
    console.log(valor, indice)
    return valor > 10
})

console.log(numerosFiltrados2)


console.log('############')





//Retorna as pessoas que tem nome com 5 letras ou mais
//Retorna as pessoas com mais de 50 anos
//Retorna as pessas cujo o nome termina com a letra a

const pessoas = [
{nome: 'Rodrigo', idade: 38},
{nome: 'Luiz', idade: 15},
{nome: 'Roberta', idade: 22},
{nome: 'Maria', idade: 40},
{nome: 'Rosana', idade: 68}
];

const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length > 5); //length funciona em string e arrays

const pessoasComMaisCinquentaAnos = pessoas.filter(age => age.idade > 50);

const nomeTerminaComA = pessoas.filter(letraA => letraA.nome.endsWith('a')) //endsWith() pega a final da letra terminada
console.log(nomeTerminaComA)