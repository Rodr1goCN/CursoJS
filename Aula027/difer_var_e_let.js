/* let nome = 'rodrigo';
var nom2 = 'rodrigo';

//let nome = 'rodrigo'; //não podemos redeclarar duas vezes o nome, com o VAR é possível
var nom2 = 'rodrigo';

//Let tem escopo de bloco {... bloco}
//Var tem escopo de função

const verdadeira = true;
if (verdadeira){
    let nome = 'Costa'; // apesar de mesmo nome na variável o valor é diferente
    //console.log(nome, nom2);
    if (verdadeira){
        let nome = 'Rodrigo da Costa';
        console.log(nome, nom2);
    }
} */
const verdadeira = true;

function falaOi(){
    var sobrenome = 'Costa';
    if (verdadeira){
        let nome = 'Rodrigo';
    }
    console.log(sobrenome,nome)
}

falaOi()