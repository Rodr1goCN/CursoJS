//return
//retorna um valor
//retorna a função
function soma(a,b){
    return a + b;
}

console.log(soma(5,9))





/* document.addEventListener('click', function(){ // o fundo da página fica verde ao clicar
    document.body.style.background = 'green';
}) */





function criaPessoa(nome,sobrenome){
    return{nome,sobrenome}
}
const p1 = criaPessoa('rodrigo', 'costa');
const p2 = {
    nome: 'rodrigo',
    sobrenome: 'costa'
}
console.log(p1, p2)





function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}
const fala = falaFrase('olá');
const resto = fala('mundo!')
console.log(resto) 





//onde aplica a função acima
function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    }
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));