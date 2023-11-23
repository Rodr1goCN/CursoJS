import { PersistencyProtocol } from '../classes/interfaces/persistency-protocol';

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }
}

// Teste do JEST
// Para executar o teste, tem que possuir o IT() ou o TEST()

describe('TESTANDO ALGUMA COISA', () => {
  it('Descrição do teste (IT)', () => {
    const number = 1;
    expect(number).not.toBe(1);
  });
});

describe('TESTANDO OUTRA COISA', () => {
  test('Descrição do teste (TEST)', () => {
    const nome = 'Rodrigo';
    expect(nome).not.toBe(1); // se colocar o not, le-se: espero que o (nome) não seja (1)
  });
});
