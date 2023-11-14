type CartItem = { name: string; price: number; brand: string };
type OrderStatus = 'open' | 'Closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    // Só estamos usando o Number() por causa do .toFixed(), sem ele da erro, pois o toFixed transforma em string
    // Também podemos usar o + (ex: +this._items...)
    return Number(this._items.reduce((total, next) => total + next.price, 0).toFixed(2));
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    this._orderStatus = 'Closed';
    this.sendMessage(`Seu pedido foi recebido com o total de ${this.total()}`);
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mesagem enviada:', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  clear(): void {
    this._items.length = 0;
    console.log('Carrinho de compras foi zerado.');
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camiseta', price: 49.99, brand: 'Levis' });
shoppingCart.addItem({ name: 'Short', price: 39.99, brand: 'Pakalolo' });
shoppingCart.addItem({ name: 'Calça', price: 149.99, brand: 'Gucci' });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
