/* type CoresObj = {
  vermelho: string;
  verde: string;
  azul: string;
}; */ // se usarmos o typeof em function, não precisa definir como string

type CoresObj = typeof coresObj; // <-- Se fizermos isso, não precisamos definir em function o typeof
type CoresChave = keyof CoresObj; // Funciona dinamicamente, não precisando adicionar as cores em function

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  preto: 'black',
  amarelo: 'amareulon',
};

function traduzirCor(cor: CoresChave, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('amarelo', coresObj));
