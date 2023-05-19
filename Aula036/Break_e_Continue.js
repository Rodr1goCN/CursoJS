const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/* for (let numero of numeros){

    if(numero === 3){
        console.log('Pulei o número 3')
        continue; // serve para pular um determinado número
    }
    if (numero === 5){
        console.log('Pulei o número 5')
        continue;
    }

    if (numero ===7){
        break; // serve para parar e um determinado número (se parar no 5, ele mostrara o número 4)
    }

    console.log(numero)
}
 */





// funciona também usando o WHILE e DO WHILE

let i = 0;
while(i < numeros.length){
    let numero = numeros[i];

    if(numero === 3){
        console.log('Pulei o número 3')
        i++;
        continue; // serve para pular um determinado número
    }
    if (numero === 5){
        console.log('Pulei o número 5')
        i++;
        continue;
    }

    if (numero ===7){
        i++;
        break; // serve para parar e um determinado número (se parar no 5, ele mostrara o número 4)
    }

    console.log(numero)

   i++;
}