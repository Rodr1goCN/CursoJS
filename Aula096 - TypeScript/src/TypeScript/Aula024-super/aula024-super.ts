export class Pessoa {
  // Super classe
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
  // Sub classe
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string, // Se retirar o public da sala, tera que por em cima do constructor (sala: string), pois vai dar erro no this.sala = sala;
  ) {
    super(nome, sobrenome, idade, cpf);
    this.sala = sala;
  }
  getNomecompleto(): string {
    console.log('Fazendo algo antes');
    const result = super.getNomecompleto(); // O super se refere a super classe que no caso é a pessoa
    return result + ' COMO É QUEÉ';
  }
}
export class Cliente extends Pessoa {
  // Sub classe
  getNomecompleto(): string {
    return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const aluno = new Aluno('Rodrigo', 'Costa', 38, '000.000.000-11', '002');
const pessoa = new Pessoa('Rodrigo', 'Costa', 38, '000.000.000-11');
const cliente = new Cliente('Rodrigo', 'Costa', 38, '000.000.000-11');

console.log(pessoa.getNomecompleto());
console.log(aluno.getNomecompleto());
console.log(cliente.getNomecompleto());
console.log(aluno);
