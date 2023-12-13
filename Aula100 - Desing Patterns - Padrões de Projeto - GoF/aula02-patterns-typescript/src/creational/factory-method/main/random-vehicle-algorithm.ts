import { BikeFactory } from '../factories/bike-factory';
import { CarFactory } from '../factories/car-factory';
import { randomNumbers } from '../utils/random-number';
import { Vehicle } from '../vehicle/vehicle';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bikeFactory = new BikeFactory();
  const car1 = carFactory.getVehicle('Fusca Azul');
  const car2 = carFactory.getVehicle('Golf Tunado');
  const bike = bikeFactory.getVehicle('Bicicleta Preta');
  const cars = [car1, car2, bike];
  return cars[randomNumbers(cars.length)];
}
