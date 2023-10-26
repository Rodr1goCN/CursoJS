export class Carro {
  private readonly motor = new Motor();

  desligar(): void {
    this.motor.desligar();
  }
  ligar(): void {
    this.motor.ligar();
  }
  acelerar(): void {
    this.motor.acelerar();
  }
  parar(): void {
    this.motor.parar();
  }
}

export class Motor {
  ligar(): void {
    // Método
    console.log('Motor esta ligado');
  }
  acelerar(): void {
    // Método
    console.log('Motor esta acelerando');
  }
  parar(): void {
    // Método
    console.log('Motor esta parado');
  }
  desligar(): void {
    // Método
    console.log('Motor esta desligado');
  }
}

const carro = new Carro();
carro.acelerar();
carro.ligar();
carro.parar();
carro.desligar();
