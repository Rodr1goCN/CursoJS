/* let x = 10; //eslint-disable-line
x = 0b1010;
const y = 10; // O 10 não pode ser mudado

let a: 100 = 100; // Igual ao const, não pode ser mudado
a = 120; // O 'a' não pode ser atribuído ao 120

const pessoa = {
  nome: 'Rodrigo' as const,
  sobrenome: 'costa',
};
pessoa.nome = 'Rodrigo2'; // se o tipo tiver atribuído como constante, não pode ser mudado */

function escolhaCor(cor: 'Azul' | 'Verde' | 'Preto'): string {
  return cor;
}
console.log(escolhaCor('Azul'));
// Module mode
export default 1;
