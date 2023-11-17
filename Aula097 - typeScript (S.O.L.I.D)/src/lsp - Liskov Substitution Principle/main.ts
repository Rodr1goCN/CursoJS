/*
LSP - Liskov Substitution Principle (Princípio de Substituição de Liskov)
 Se Φ(x) é uma propriedade demonstrável dos objetos x de tipo T. então Φ(y) deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

 Mais simples: subtipos precisam ser substituíveis por seus tipos de base.

 Mais simples ainda: se meu programa espera um animal, algo do tipo cachorro (que herda de animal) deve servir como qualquer outro animal.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import {
  FiftyPercentDiscount,
  TenPercentDiscount,
  TwentyPercentDiscount,
  ThirtyPercentDiscount,
  FifteenPercentDiscount,
  NoDiscount,
} from './classes/discount';

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const fiftyPercentDiscount = new FiftyPercentDiscount();

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const tenPercentDiscount = new TenPercentDiscount();

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const fifteenPercentDiscount = new FifteenPercentDiscount();

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const twentyPercentDiscount = new TwentyPercentDiscount();

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const thirtyPercentDiscount = new ThirtyPercentDiscount();

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(twentyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.99, 'Levis'));
shoppingCart.addItem(new Product('Short', 39.99, 'Pakalolo'));
shoppingCart.addItem(new Product('Calça', 149.99, 'Gucci'));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
