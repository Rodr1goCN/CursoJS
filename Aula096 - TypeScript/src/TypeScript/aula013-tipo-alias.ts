type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corpreferida?: string; // Opcional
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelho' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Rodrigo',
  salario: 200_000, // 200.000,00 (python também funciona esse modelo: 200_000)
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corpreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Azul'));
console.log(pessoa);
