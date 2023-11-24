import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should return undefined', () => {
    // System Under Test
    const sut = createSut();
    expect(sut.sendMessage('teste')).toBeUndefined();
  });
  it('Should call console.log once', () => {
    // System Under Test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
  it('Should call console.log once "Mesagem enviada:" and msg', () => {
    // System Under Test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith('Mesagem enviada:', 'teste');
  });
});
