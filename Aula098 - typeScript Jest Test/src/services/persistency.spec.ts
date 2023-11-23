import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should return undefined', () => {
    // System Under Test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });
});

describe('Persistency', () => {
  it('Should call console.log once', () => {
    // System Under Test
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
  it('Should call console.log once "Pedido salvo com sucesso"', () => {
    // System Under Test
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso');
  });
});

// Teste do JEST
// Para executar o teste, tem que possuir o IT() ou o TEST()

/* describe('TESTANDO ALGUMA COISA', () => {
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
 */
