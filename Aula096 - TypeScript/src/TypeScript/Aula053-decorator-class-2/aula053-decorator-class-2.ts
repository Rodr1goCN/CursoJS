// construtor de classe
function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Sou o decorador e recebi', target);
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

@inverteNomeECor // Decoradores são funções especiais que podem ser usadas para modificar ou estender classes, métodos e propriedades
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {
    console.log('sou a classe');
  }
}

/* const animal = new Animal('Azul', 'Gato');
  console.log(animal); */
