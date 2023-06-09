//produto -> aumento, desconto
//Camiseta = cor, Caneca = plástico, Casaco = jeans
function Produto(nome, preco, cor, material) {
    this.nome = nome;
    this.preco = preco;


}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
}

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco, cor); //linkou com Produto acima
    this.cor = cor //Se linkarmos o this.cor no Produto, fica fora de ordem se aplicarmos outros elementos lá
}
Camiseta.prototype = Object.create(Produto.prototype);//linkou com o aumento e desconto
Camiseta.prototype.constructor = Camiseta; //faz com o que dentro de prototype (no console) o constructor fica com o nome Camiseta

Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco, material);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;



/* Produto.prototype = Object.create(Produto.prototype)
Produto.prototype.constructor = Produto */

const caneca = new Caneca('Caneca', 30, 'Plástico', 10)
const produto = new Produto('Genérica', 55, 'Preta');
const camiseta = new Camiseta('T-Shirt', 20, 'Branca');
//camiseta.desconto(10)
console.log(camiseta);
console.log(produto);
console.log(caneca)