const objetoA: {
  readonly chaveA: string; // trava o valor da chave, não podendo muda-la
  chaveB: string;
  chaveC: string; // Temos que definir um tipo para a chave para mudar o valor
  [key: string]: unknown; // Também funciona
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

objetoA.chaveA = 'Outro valor';
objetoA.chaveC = 'Nova chave'; // Não conseguimos mudar o valor de uma chave se ela não existir
objetoA.chaveD = 'Nova chave'; // Não conseguimos mudar o valor de uma chave se ela não existir
