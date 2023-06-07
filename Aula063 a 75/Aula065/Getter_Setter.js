function Produtos(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque; //é importante criar uma variável para não ocorrer um loop no setter
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: false, //configurável
        get: function () { //GETTER: obter valor
            return estoque;
        },

        set: function (valor) { //SETTER: configurar o valor
            if (typeof valor !== 'number') {
                console.log('Não é um número')
                return;
            }
            estoquePrivado = valor;
        }
    });
}

const p2 = new Produtos('Camiseta', 30, 4);

console.log(p2);
console.log(p2.estoque);
console.log('#############');






function criaProduto(){
    return {
        get nome(){
            return nome
        },
        set nome(valor){
            valor = valor.replace('coisa', 'filme') //troca a palavra coisa por qualquer palavra ou número ou deixar vazio usando ''
            nome = valor
        }
    };
}

const p3 = criaProduto('camiseta');
p3.nome = 'Qualquer coisa';
console.log(p3.nome)
