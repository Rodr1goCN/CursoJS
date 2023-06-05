//Retorne a soma do dobro de todos os pares
// filtrar pares
//Dobrar os valores
//Reduzir (somar tudo)
const numeros = [1, 7, 8, 5, 4, 2, 10, 6, 11, 20];

const numerosPares = numeros.filter(valor =>
    valor % 2 === 0
).map(valor => valor * 2 //dobra o valor dos pares
).reduce((ac, valor) => ac + valor); // soma os valores que foram dobrados //mantém os () dos parâmetros (ac, valor)

console.log(numerosPares) 