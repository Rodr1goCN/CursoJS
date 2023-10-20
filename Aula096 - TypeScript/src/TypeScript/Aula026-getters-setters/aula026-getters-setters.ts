/* export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private cpf: string,
  ) {}

  getNome(): string {
    return this.nome;
  }

  /* getSobrenome(): string {
    return this.sobrenome;
  } */
/*
  getCpf(): string {
    return this.cpf.replace(/\D/g, ''); // Retira os pontos do cpf
  }

  setCpf(valor: string): void {
    // muda o valor do cpf
    this.cpf = valor;
  }
} */

/* const pessoa = new Pessoa('Rodrigo', 'Costa', 38, '123.456.789-11');
pessoa.setCpf('123.456.789-99');
console.log(pessoa.getNome(), pessoa.getCpf()); */

export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string, // quando se trabalha com getters e setters, geralmente se usa o um underline no atributo que esta sustentando o valor
  ) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    // não pode usar type annotation no setters
    // muda o valor do cpf
    console.log('SETTER NA ÁREA');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('GETTER NA ÁREA');
    return this._cpf.replace(/\D/g, ''); // Retira os pontos do cpf
  }
}

const pessoa = new Pessoa('Rodrigo', 'Costa', 38, '123.456.789-11');
pessoa.cpf = '123.456.789-99';
console.log(pessoa.cpf);
