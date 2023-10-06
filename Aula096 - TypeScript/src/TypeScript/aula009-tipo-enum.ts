enum Cores {
  VERMEHLO, // 0 // Podemos também definir outra ordem, ficanod: VERMELHO = 2 (OU QUALQUER OUTRO NÚMERO)
  AZUL = 100, // 1
  AMARELO, //2
}

enum Cores {
  PRETO = 'ROSA', // Se definir uma string, obrigatoriamente o de baixo tem que ser definido um number ou outra string
  VERDE = 7,
  ROXO,
}

/* console.log(Cores);
console.log(Cores.AZUL);
console.log(Cores[1]); // Mudando o número, também tem que mudar aqui */

function escolhaCor(cor: keyof typeof Cores): void {
  console.log(Cores[cor]);
}

escolhaCor('AMARELO');
