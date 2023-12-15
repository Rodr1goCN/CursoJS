// Component do diagrama
export abstract class ProductComponent {
  abstract getPrice(): number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  add(product: ProductComponent): void {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(product: ProductComponent): void {}
}

// Leaf do diagrama
export class ProductLeaf extends ProductComponent {
  constructor(
    public name: string,
    public price: number,
  ) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

// Composite do diagrama
export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

// Client
const camiseta = new ProductLeaf('Camiseta', 29.55);
const smartphone = new ProductLeaf('Xiaomi', 1_029.27);
const bicicleta = new ProductLeaf('Aro 29', 529.93);
const productBox = new ProductComposite();
productBox.add(camiseta, smartphone, bicicleta);
console.log(productBox);
console.log(productBox.getPrice());

console.log();
const tablet = new ProductLeaf('Tablet', 2_000.88);
const kindle = new ProductLeaf('Kindle', 350.55);
const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);
console.log(anotherProductBox);
console.log(anotherProductBox.getPrice().toFixed(2));
