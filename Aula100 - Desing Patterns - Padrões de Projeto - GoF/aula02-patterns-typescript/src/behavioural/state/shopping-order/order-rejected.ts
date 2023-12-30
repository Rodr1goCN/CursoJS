import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderRejected';
  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }
  approvePaymente(): void {
    console.log('Não posso aprovar o pagamento pois o pedido foi recusado.');
  }
  rejectPaymente(): void {
    console.log('Não posso recusar o pagamento pois o pedido foi recusado.');
  }
  waitPaymente(): void {
    console.log('Não posso mover para pendente pois o pedido foi recusado.');
  }
  shipOrder(): void {
    console.log('Não posso enviar um pedido com o pagamento recusado.');
  }
}
