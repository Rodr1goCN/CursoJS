/*
 type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
};
*/

type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto: () => string;
};

export class Pessoa implements TipoNome, TipoNomeCompleto, TipoSobrenome {
  // Sempre que usar type se usa o implements no lugar de extends
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  public nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Rodrigo', 'Costa');
console.log(pessoa.nomeCompleto());
