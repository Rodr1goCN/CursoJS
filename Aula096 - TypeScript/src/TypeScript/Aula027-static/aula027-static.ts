export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}
  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, 0, '000.000.000-55');
  }
  static falaOi(): void {
    console.log('oi');
  }
}

const pessoa1 = new Pessoa('Rodrigo', 'Costa', 38, '123.456.789-11');
const pessoa2 = Pessoa.criaPessoa('Rosana', 'Costa');
console.log(pessoa1);
console.log(pessoa2);
Pessoa.falaOi();
pessoa1.metodoNormal();
