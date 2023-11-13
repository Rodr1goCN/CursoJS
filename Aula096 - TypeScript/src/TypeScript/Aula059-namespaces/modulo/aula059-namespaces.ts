/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
  export const nomeDoNamespace = 'Rodrigo';
  // export para usar o PessoaDoNamespace fora do escopo
  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }
  const pessoa = new PessoaDoNamespace('Rodrigo');
  console.log(pessoa);

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Nome do outro namespace';
  }
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Rodrigo');
console.log(pessoaDoNamespace);

console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);

console.log(MeuNamespace.nomeDoNamespace);

const constDoNamespace = 'Valor da const do namespace';
