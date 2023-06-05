const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

a1.forEach(function (valor, indice, array) {
    console.log(valor, indice, array)
})
console.log('############')



let total = 0;
a1.forEach(valor => {
    total += valor;
});
console.log(total) // faz a soma de todos os números dentro do array