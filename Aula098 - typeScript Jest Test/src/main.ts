/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

Classes de baixo nível são classes que executam tarefas (os detalhes).
Classes de alto nível são classes qeu gerenciam as classes de baixo nível.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency(.)spec';
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
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/messaging-protocol';

/* eslint-disable-next-line */
const fiftyPercentDiscount = new FiftyPercentDiscount();

/* eslint-disable-next-line */
const tenPercentDiscount = new TenPercentDiscount();

/* eslint-disable-next-line */
const fifteenPercentDiscount = new FifteenPercentDiscount();

/* eslint-disable-next-line */
const twentyPercentDiscount = new TwentyPercentDiscount();

/* eslint-disable-next-line */
const thirtyPercentDiscount = new ThirtyPercentDiscount();

/* eslint-disable-next-line */
const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(twentyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

/* eslint-disable-next-line */
const individualCustomer = new IndividualCustomer('Rodrigo', 'Costa', '111.111.111-11');

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {
    console.log('A mensagem foi enviada pelo MOCK');
  }
}

/* eslint-disable-next-line */
const messagingMock = new MessagingMock();

const enterpriseCustomer = new EnterpriseCustomer('Loja Costa', '11.111.111/0001-11');
const order = new Order(shoppingCart, messaging, persistency, enterpriseCustomer);

shoppingCart.addItem(new Product('Camiseta', 49.99, 'Levis'));
shoppingCart.addItem(new Product('Short', 39.99, 'Pakalolo'));
shoppingCart.addItem(new Product('Calça', 149.99, 'Gucci'));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
