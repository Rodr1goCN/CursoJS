export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProduto(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

const produto1 = new Produto('Camiseta', 49.99);
const produto2 = new Produto('Bermuda', 39.99);
const produto3 = new Produto('Calça Jeans', 309.99);
const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto1, produto2, produto3);
console.log(carrinhoDeCompras.valorTotal().toFixed(2));
console.log(carrinhoDeCompras.quantidadeProduto());
