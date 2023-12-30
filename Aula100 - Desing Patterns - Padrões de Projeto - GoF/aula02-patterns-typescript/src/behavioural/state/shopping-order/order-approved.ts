import { OrderPending } from './order-pending';
import { OrderRejected } from './order-rejected';
import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderApproved implements ShoppingOrderState {
  private name = 'OrderApproved';
  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }
  approvePaymente(): void {
    console.log('O pedido já esta no estado pagamento aprovado.');
  }
  rejectPaymente(): void {
    this.order.setState(new OrderRejected(this.order));
  }
  waitPaymente(): void {
    this.order.setState(new OrderPending(this.order));
  }
  shipOrder(): void {
    console.log('Enviando o pedido para o cliente.');
  }
}
