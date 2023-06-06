//defineProperty - defineProperties

//define Property:
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;


    Object.defineProperty(this, 'estoque', {
        enumerable: true, //um atributo que determina se a propriedade definida será enumerável ou não. Uma propriedade enumerável é aquela que pode ser percorrida em um loop for...in ou retornada ao chamar Object.keys().
        value: estoque,
        writable: false, //se vai ser possível alterar o estoque
        configurable: false //pode reconfigurar // reconfigurable como falso não pode apagar a chave e editar
    });
}

const p1 = new Produto('Camiseta', 30, 3);
delete p1.estoque; // com o writable no true é possível fazer a alterção na quantidade de estoque
console.log(p1);
console.log(Object.keys(p1)) //mostra as chaves (nome, preço e o estoque)
console.log('#############')





//define Properties
function Produtos(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: false
    });
    Object.defineProperties(this, { //as definições são por chave, ficando mais fácil de configurar cada elemento
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: false
        }
    })
}

const p2 = new Produtos('Camiseta', 30, 3);

console.log(p2);
console.log(Object.keys(p2))