@decorator // Decoradores são funções especiais que podem ser usadas para modificar ou estender classes, métodos e propriedades
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {}
}
// construtor de classe
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.cor = this.inverte(args[0]);
      this.nome = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

const animal = new Animal('Azul', 'Gato');
console.log(animal);
