const numero = 10;

//se isso (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
//se não faça isso {o código}

if (numero >= 0 && numero <= 5) {
    console.log('O número esta entre 0 e 5.');
} else {
    console.log('O número NÃO esta entre 0 e 5.');
}




if (numero >= 0 && numero <= 5) {
    console.log('O número esta entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número esta entre 6 e 8.');
} else if (numero >= 9 && numero <= 11) {
    console.log('O número esta entre 9 e 11.');
} else {
    console.log('O número não esta entre 0 e 11.');
}