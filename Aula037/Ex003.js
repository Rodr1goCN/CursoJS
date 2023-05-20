let numAleatorio = Math.floor(Math.random() * 100);

function recebeNumero(numeros) {
    if (numeros % 3 === 0 && numeros % 5 === 0) {
        return `FizzBuzz (${numAleatorio})`
    } else if (numeros % 5 === 0) {
        return `Buzz (${numAleatorio})`;
    } else if (numeros % 3 === 0) {
        return `Fizz (${numAleatorio})`
    } else if (typeof numAleatorio !== 'number') {
        return numAleatorio
    }else{
       return `O número ${numAleatorio} não é divisível nem por 3 e nem por 5`
    }

}
console.log(recebeNumero(numAleatorio))

/* for (let i = 0; i <= 100; i++){
    console.log(recebeNumero(i))
}
 */
