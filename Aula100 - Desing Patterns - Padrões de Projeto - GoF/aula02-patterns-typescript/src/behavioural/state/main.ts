import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder();
order.waitPayment();
order.shipOrder();
order.rejectPayment(); // Não altera mais o estado daqui para baixo
order.approvePayment();
order.waitPayment();
order.shipOrder();
