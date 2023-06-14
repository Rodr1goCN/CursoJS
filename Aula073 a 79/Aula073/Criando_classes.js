class Pessoa {//classe criada
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    //métodos
    falar() {
        console.log(`${this.nome} está falando!`);
    }
    comer() {
        console.log(`${this.nome} está comendo!`);
    }
    beber() {
        console.log(`${this.nome} está bebendo!`);
    }

}

function Pessoa2(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando!`);
}

const p1 = new Pessoa('Rodrigo', 'Costa')
const p2 = new Pessoa('Maria', 'Costa')
const p3 = new Pessoa('João', 'Costa')
const p4 = new Pessoa('Helena', 'Costa')
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
const p5 = new Pessoa2('Rodrigo', 'Costa');
console.log(p5);