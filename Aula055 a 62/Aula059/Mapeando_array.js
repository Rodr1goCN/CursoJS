//Map => sempre vai ter o tamanho do array original
//(valor, indice, array)
const numeros = [1, 7, 8, 5, 4, 2, 10, 6, 11, 20];
const numerosEmDobro = numeros.map(valor => valor * 2); //dobra o valor do array

console.log(numerosEmDobro)
console.log('###########')

//para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave 'nome' do objeto
//Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Rodrigo', idade: 38},
    {nome: 'Luiz', idade: 15},
    {nome: 'Roberta', idade: 22},
    {nome: 'Maria', idade: 40},
    {nome: 'Rosana', idade: 68},
    {nome: 'André', idade: 50}
    ];

    const nomes = pessoas.map(objeto => objeto.nome)
    
    console.log(nomes)
    console.log('###########')





    const idades = pessoas.map(objeto => objeto.idade)
    console.log(idades)
    console.log('###########')





    const pessoasComID = pessoas.map((objeto, index) => {
        return {...objeto, id: index + 1 }//com o spread o (objeto pessoa) não modifica o id
    })
    //console.log(pessoasComID)
    console.log(pessoas)