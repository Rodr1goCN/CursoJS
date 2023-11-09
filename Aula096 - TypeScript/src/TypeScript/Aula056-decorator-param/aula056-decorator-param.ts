function decoradorMSG(classProtype: any, nomeMetodo: string | symbol, index: number): any {
  console.log(classProtype);
  console.log(nomeMetodo);
  console.log(index);
  return 'algo';
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(@decoradorMSG msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Rodrigo', 'Costa', 38);
const metodo = pessoa.metodo('OPA, sou uma mensagem');
console.log(metodo);
