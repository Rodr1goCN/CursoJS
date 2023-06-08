//new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    //__proto__: object.prototype
};

const objB = {
    chaveB: 'B'
    //__proto__: objA
};

const objC = new Object();
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA); //objeto B é visível dentro do __proto__ A
Object.setPrototypeOf(objC, objB) //objeto C é visivel dentro do __proto__ B e dentro do __proto__ A

console.log(objC.chaveA)
console.log('#############')





function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}
Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('camiseta', 50);
const p2 = {
    nome: 'Caneca',
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype) //faz com que o desconto e aumento funcione no p2
p2.desconto(20)
//p2.aumento(13.64)
console.log(p2)



const p3 = Object.create(Produto.prototype, { //opcional
    tamanho: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 38
    },
    tamanho2: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 42
    },
});






