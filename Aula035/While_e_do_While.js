/* 
let nome = 'Rodrigo';

let i = 0

while(i < nome.length){
    console.log(nome[i]);
    i++
}

console.log('Seu nome aí rapa') 
*/





/*
function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r); //Math.floor = retorna um número inteiro 
}

let rand = random(1, 50);
console.log(rand); 
*/




// Faz com que seja procurado pelo numero 10 e quando achar, o loop para
function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r); //Math.floor = retorna um número inteiro 
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10){
    rand = random(min, max);
    console.log(rand);
}

console.log('######')

// o DO WHILE sempre executa primeiro e depois checa a condição
do{ 
    console.log(rand)
}    while(rand !== 10);




const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

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