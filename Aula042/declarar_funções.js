//Declaração de função (function hoisting)
falaOi() //Pode chamar antes de fazer a função quanto depois que irá funcionar
function falaOi() {
    console.log('oi');
}

//First-Class objects (Objetos de primeira classe)
//Function expression

const souUmDado = function (){
    console.log('sou um dado');
};

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo')
    funcao();
}
executaFuncao(souUmDado) //executou a função acima ('sou um dado')

//arrow function
const funcaoArrow = () =>{
    console.log('sou uma arrow function')
}

//Dentro de um objeto
const objt = {
    falar: function(){
        console.log('estou falando...');
    }
}
objt.falar()
/* 
Podemos usar desta maneira também

const objt = {
    falar(){
        console.log('estou falando...');
    }
}
objt.falar()
 */