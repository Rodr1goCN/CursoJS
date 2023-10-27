/*
 type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
};
*/
// Interface não se usa o sinal de igual // Interface e Type são parecidos
interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}
// Funciona igual ao type

export class Pessoa implements TipoPessoa {
  // Sempre que usar type se usa o implements no lugar de extends
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  public nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoaObj: TipoPessoa2 = {
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
  nome: 'EITA!!!',
  sobrenome: 'Agora esta funcinando os dois',
};
const pessoa = new Pessoa('Rodrigo', 'Costa');
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
