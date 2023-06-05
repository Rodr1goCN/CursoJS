//Reduce => reduz o array para um único elemento

//Some todos os números (reduce)
//Retorne um array com os pares (filter)
//Retorne um array com o dobro dos valores (map)

const numeros = [1, 7, 8, 5, 4, 2, 10, 6, 11, 20];

const total = numeros.reduce(function(acumulador, valor, indice, array){
    
    if(valor % 2 !== 0) acumulador.push(valor) //para verificar os pares === 0 e ímpares !== 0
    return acumulador;
}, []);

console.log(total);
console.log('###########');




const total2 = numeros.reduce(function(acumulador, valor, indice, array){
    
    acumulador.push(valor * 2) //Multiplicar o array * 2
    return acumulador;
}, []);

console.log(total2);
console.log('###########')





const total3 = numeros.reduce(function(acumulador, valor, indice, array){
    
    acumulador += valor //Valor total do array
    return acumulador;
});
console.log(total3);
console.log('###########');





const total4 = numeros.reduce(function(acumulador, valor, indice, array){
    if (valor % 2 === 0){ // Soma somente os pares e se quiser os ímpares !==
        acumulador += valor;
    }
    return acumulador;
}, 0);//se for somar os pares, tem que colocar o zero
console.log(total4);
console.log('###########');





//Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Rodrigo', idade: 38},
    {nome: 'Luiz', idade: 15},
    {nome: 'Roberta', idade: 22},
    {nome: 'Maria', idade: 40},
    {nome: 'Rosana', idade: 68},
    {nome: 'André', idade: 50}
    ];

const maisVelha = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha)