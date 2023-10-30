// Declaration Merging em interfaces
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}
interface Pessoa {
  idade?: number; // Com o ponto de interrogação fica opcional usar ou não em const pessoas
}
interface Pessoa {
  readonly enderecos: string[]; // Readonly em enderecos (pode adicionar mais coisas) e o readonly na string (não consegue usar o push)
}

const pessoas: Pessoa = {
  nome: 'Rodrigo',
  sobrenome: 'Costa',
  enderecos: ['Av. Brasil'],
};

pessoas.enderecos.push('Rua Itacolomi');
console.log(pessoas);
