/*
Interface Segregation Principle (Princípio da Segregação de Interface) - os clientes não devem ser forçados a depender de interfaces, types ou membros abstratos que não utilizam.
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
