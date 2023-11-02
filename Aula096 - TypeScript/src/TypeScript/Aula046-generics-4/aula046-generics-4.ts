// K extends keyof O -> K é no máximo uma key de O
type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChaveFn: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'preto',
  vacinas: ['Vacina 1', 'Vacina 2'],
  idade: 5,
};

const vacinas = obterChaveFn(animal, 'vacinas');
const cor = obterChaveFn(animal, 'cor');

console.log(vacinas, cor, obterChaveFn(animal, 'idade'));
