import { Product } from './product';

const createSut = (name: string, price: number, brand: string): Product => {
  return new Product(name, price, brand);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should have properties name, price and brand', () => {
    // System under test
    const sut = createSut('Camiseta', 40, 'Levis');
    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut.price).toBeCloseTo(39.999);
    expect(sut).toHaveProperty('brand', 'Levis');
  });
});
