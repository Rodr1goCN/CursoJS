/* import { CarFactory } from './factories/car-factory';

// Sempre que usar a palavra new você estara atrelado a esta palavra (se mudar algo quebra o código)
// const fusca = Car('Fusca');

// Desse jeito impede que o new fique atrelado a palavra
const carFactory = new CarFactory();
const fusca = carFactory.getVehicle('Fusca');
fusca.pickUp('Maria');
fusca.stop();
 */

import { CarFactory } from './factories/car-factory';
import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-number';

const carFactory = new CarFactory();
const customerNames = ['Rodrigo', 'Elena', 'João', 'Fernanda'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  console.log(vehicle);
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `NOVO CARRO - ${randomNumbers(100)}`);
  newCar.stop();
  console.log('---');
}
