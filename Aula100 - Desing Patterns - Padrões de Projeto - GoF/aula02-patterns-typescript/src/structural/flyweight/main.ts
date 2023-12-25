import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Rodrigo', '30B', 'Av. dos Mares', 'RJ');
deliveryContext(factory, 'Maria', '30B', 'Av. dos Mares', 'RJ');
deliveryContext(factory, 'Joana', '502', 'Av. B', 'SP');
deliveryContext(factory, 'Eliana', '1', 'Av. do @', 'AM');

console.log();
console.log(factory.getLocation());
