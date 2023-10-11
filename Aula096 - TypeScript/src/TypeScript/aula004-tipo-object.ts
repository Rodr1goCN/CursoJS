const objetoA: {
  readonly chaveA: string; // trava o valor da chave, não podendo muda-la
  chaveB: string;
  chaveC: string; // Temos que definir um tipo para a chave para mudar o valor
  chaveD: string;
  [key: string]: unknown; // Também funciona
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
  chaveC: 'Valor C',
  chaveD: 'valor D',
};

// objetoA.chaveA = 'Outro valor'; // Não podemos mudar o valor de uma chave quando esta definida como -> readonly
objetoA.chaveC = 'Nova chave'; // Não conseguimos mudar o valor de uma chave se ela não existir
objetoA.chaveD = 'Nova chave'; // Não conseguimos mudar o valor de uma chave se ela não existir
