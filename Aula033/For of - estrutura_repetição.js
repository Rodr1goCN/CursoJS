//            12345678....
const nome = 'Rodrigo da Costa';

for (let i = 0; i < nome.length; i++){
    console.log(nome[i])
}


for (let i in nome){            //faz a mesma coisa que o (let i = 0; i...)
    console.log(nome[i]);
}

for (let valor of nome){
    console.log(valor)
}


// for clássico - Geralmente com iteráveis (array ou strings)
// for in - Retorna o índice ou chave (array, strings ou objetos)
// for of - Retorna o valor em si (iteráveis, arrays ou strings)
