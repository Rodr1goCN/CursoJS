// & -> igual 'E'

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // & -> tem a combinação dos três tipos

/* type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD; */

const pessoa: Pessoa = {
  nome: 'Rodrigo',
  sobrenome: 'Costa',
  idade: 38,
};
console.log(pessoa);
export { pessoa };
