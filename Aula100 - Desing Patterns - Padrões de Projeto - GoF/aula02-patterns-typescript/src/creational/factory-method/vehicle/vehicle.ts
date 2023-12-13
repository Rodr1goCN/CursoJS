// Métodos que precisam ter dentro do vehicle e bike
export interface Vehicle {
  pickUp(customerName: string): void;
  stop(): void;
}
