import {
  Discount,
  FifteenPercentDiscount,
  TenPercentDiscount,
  ThirtyPercentDiscount,
  TwentyPercentDiscount,
  FiftyPercentDiscount,
  NoDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should have no discount', () => {
    // System under test
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('Should have 15% discount on price', () => {
    // System under test
    const sut = createSut(FifteenPercentDiscount);
    expect(sut.calculate(100)).toBeCloseTo(85);
  });

  it('Should have 10% discount on price', () => {
    // System under test
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(100)).toBeCloseTo(90);
  });

  it('Should have 30% discount on price', () => {
    // System under test
    const sut = createSut(ThirtyPercentDiscount);
    expect(sut.calculate(100)).toBeCloseTo(70);
  });

  it('Should have 20% discount on price', () => {
    // System under test
    const sut = createSut(TwentyPercentDiscount);
    expect(sut.calculate(100)).toBeCloseTo(80);
  });

  it('Should have 50% discount on price', () => {
    // System under test
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(100)).toBeCloseTo(50);
  });
});
