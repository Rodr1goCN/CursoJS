import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();

const seller1 = new Seller();

seller1.addProduct({ id: '1', name: 'Camiseta', price: 49.95 });
seller1.addProduct({ id: '2', name: 'Short', price: 39.95 });

const seller2 = new Seller();

seller2.addProduct({ id: '3', name: 'Carro', price: 49999.95 });
seller2.addProduct({ id: '4', name: 'Caneta - Azul', price: 5.95 });

mediator.addSeller(seller1, seller2);

mediator.showProducts();

const buyer = new Buyer(mediator);
buyer.viewProduct();
buyer.buy('2');
buyer.buy('3');
buyer.viewProduct();
