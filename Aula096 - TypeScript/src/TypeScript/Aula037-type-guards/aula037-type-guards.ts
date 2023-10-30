// Faz a soma quando for number e também faz a soma quando não foram number
export function add(a: unknown, b: unknown): string | number {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(add(3, 9));
console.log(add('a', 7));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

function mostrarNome(obj: PessoaOuAnimal): void {
  //if ('nome' in obj) console.log(obj.nome); // também funciona com o instanceof
  //if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log('Isso é um animal de cor', obj.cor);
      return;
  }
}

mostrarNome(new Aluno('Rodrigo'));
mostrarNome({ tipo: 'animal', cor: 'azul' });
