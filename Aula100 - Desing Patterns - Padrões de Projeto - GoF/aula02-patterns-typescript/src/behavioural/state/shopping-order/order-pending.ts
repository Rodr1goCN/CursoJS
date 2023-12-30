import { OrderApproved } from './order-approved';
import { OrderRejected } from './order-rejected';
import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderPending implements ShoppingOrderState {
  private name = 'OrderPending';
  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }
  approvePaymente(): void {
    return this.order.setState(new OrderApproved(this.order));
  }
  rejectPaymente(): void {
    return this.order.setState(new OrderRejected(this.order));
  }
  waitPaymente(): void {
    console.log('O pedido já esta no estado pagamento pendente.');
  }
  shipOrder(): void {
    console.log('Pagamento pendente.');
  }
}
