import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocatioData } from './delivery-types';

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly dataState: DeliveryLocatioData) {}

  deliver(name: string, number: string): void {
    console.log('Entrega para %s', name);
    console.log('Em', this.dataState.street, this.dataState.city);
    console.log('Número', number);
    console.log('###');
  }
}
