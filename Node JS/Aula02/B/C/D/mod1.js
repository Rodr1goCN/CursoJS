module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    latir() {
        console.log(`O(a) ${this.nome} está fazendo miau miau`);
    }

}


