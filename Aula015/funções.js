//function saudar(nome){  
    
    //return `Bom dia ${nome}`
//}

//saudar('Rodrigo');
//saudar('Maria');
//saudar('Vrilipe');

//const variavel = saudar('Rodrigo');
//console.log(variavel);

function somar(x, y){ // podemos declara um valor de x = 1 , y = 1 (se não tiver um valor no console.log(somar()) sera adicionado o valor de x e y )
    const resultado = x + y;
    return resultado
} // tudo que estiver dentro da função esta protegido, não podemos 'pegar' nada de dentro da função

console.log(somar('Rodrigo', ' Costa')); //se for string, sempre dê um espaço antes de escrever a segunda palavra

const raiz = function (num){
    return num ** 0.5;
}; //somente adiciona ; na função se ela começar por uma variável

console.log(raiz(100))

const raizes = num => num ** 0.5; // arrow function: novo modo de usar a function
console.log(raizes(16))
