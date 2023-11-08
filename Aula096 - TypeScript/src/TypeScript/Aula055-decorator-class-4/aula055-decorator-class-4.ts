interface Constructor {
  new (...args: any[]): any;
}

function inverteNomeECor(param1: string, param2: string) {
  return function (target: Constructor) {
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
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

function outroDecorador(param1: string) {
  return function outroDecorador(target: Constructor) {
    console.log('Sou outro decorador ' + param1);
    return target;
  };
}

@outroDecorador('O parâmetro do outro decorador')
@inverteNomeECor('Qualquer texto', 'valor2')
// Decoradores são funções especiais que podem ser usadas para modificar ou estender classes, métodos e propriedades
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {
    console.log('sou a classe');
  }
}

const animal = new Animal('Azul', 'Gato');
console.log(animal);
