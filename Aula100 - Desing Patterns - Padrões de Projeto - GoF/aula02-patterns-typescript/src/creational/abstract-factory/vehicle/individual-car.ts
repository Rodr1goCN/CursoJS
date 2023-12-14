import { Customer } from '../customer/customer';
import { VehicleProtocol } from './vehicles-interface';

export class IndividualCar implements VehicleProtocol {
  constructor(
    public name: string,
    private readonly customer: Customer,
  ) {}

  pickUp(): void {
    console.log(
      `${this.name} esta buscando ${this.customer.name} (INDIVIDUAL)`,
    );
  }
}
