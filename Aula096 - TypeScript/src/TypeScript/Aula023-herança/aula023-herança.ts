export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomecompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomecompleto(): string {
    return 'Isso vem do aluno: ' + this.nome + ' ' + this.sobrenome;
  }
}
export class Cliente extends Pessoa {
  getNomecompleto(): string {
    return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const aluno = new Aluno('Rodrigo', 'Costa', 38, '000.000.000-11');
const pessoa = new Pessoa('Rodrigo', 'Costa', 38, '000.000.000-11');
const cliente = new Cliente('Rodrigo', 'Costa', 38, '000.000.000-11');

console.log(pessoa.getNomecompleto());
console.log(aluno.getNomecompleto());
console.log(cliente.getNomecompleto());
