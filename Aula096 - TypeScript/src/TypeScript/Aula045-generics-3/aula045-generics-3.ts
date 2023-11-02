interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}
type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno: PessoaProtocolo<string, number> = {
  nome: 'Rodrigo',
  sobrenome: 'Costa',
  idade: 38,
};
const aluno2: PessoaProtocolo<number, number> = {
  // Definido o T como number
  nome: 123,
  sobrenome: 456,
  idade: 38,
};
const aluno3: PessoaProtocolo2 = {
  // Se não definir o tipo, pegará da interface ou type
  nome: 'Rodrigo',
  sobrenome: 'Costa',
  idade: 38,
};

console.log(aluno, aluno2, aluno3);
