import { Bike } from '../vehicle/bike';
import { Vehicle } from '../vehicle/vehicle';
import { VehicleFactory } from './vehicle-factory';

export class BikeFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Bike(vehicleName);
  }
}
