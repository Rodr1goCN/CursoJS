//função construtora -> objetos
//função fábrica -> objetos
//Construtora -> Pessoa (new)

function Pessoa(nome,sobrenome){
    //atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function(){

    };

    //atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function(){
        console.log(this.nome + ': sou um método');
    }
}



const p1 = new Pessoa('Rodrigo', 'Costa'); //obrigatório usar o new e o Pessoa (P = maiúsculo)
const p2 = new Pessoa('Maria', 'Silva');//new -> cria um objeto vazio, faz o this apontar para este objeto vazio e retorna para a variável

p1.metodo();