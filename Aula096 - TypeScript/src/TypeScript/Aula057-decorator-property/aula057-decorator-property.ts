function decorador(classProtype: any, nome: string | symbol): any {
  let valorPropriedade: any;
  return {
    get: () => valorPropriedade,
    set: (valor: any) => {
      if (typeof valor === 'string') {
        valorPropriedade = valor.split('').reverse().join(''); // transforma a leitura de tras para frente
        return;
      }
      valorPropriedade = valor;
    },
  };
}

export class UmaPessoa {
  @decorador // só afeta o nome
  nome: string;
  @decorador // agora afeta o sobrenome
  sobrenome: string;
  @decorador // em number não funciona
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(msg: string): string {
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
