import { ShoppingCart } from './shopping-cart';
import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number, brand: string) => {
  class CartItemMock implements CartItem {
    constructor(
      public name: string,
      public price: number,
      public brand: string,
    ) {}
  }
  return new CartItemMock(name, price, brand);
};

const createSutWithProducts = () => {
  // System Under Test
  const { sut, discountMock } = createSut();
  const cartITem1 = createCartItem('Camiseta', 30, 'Nike');
  const cartITem2 = createCartItem('Caneca', 15, 'Short');
  sut.addItem(cartITem1);
  sut.addItem(cartITem2);
  return { sut, discountMock };
};

describe('shoppingCart', () => {
  it('should be an empty cart when no product is added', () => {
    // System Under Test
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have two cart items', () => {
    // System Under Test
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('should test total and totalWithDiscount', () => {
    // System Under Test
    const { sut } = createSutWithProducts();
    expect(sut.total()).toBe(45);
    expect(sut.totalWithDiscount()).toBe(45);
  });

  it('should add products and clear cart', () => {
    // System Under Test
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should remove products', () => {
    // System Under Test
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
    sut.removeItem(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should call discount.calculate() once when totalWithDiscount is called', () => {
    // System Under Test
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should call discount.calculate(price) with totalPrice when totalWithDiscount is called', () => {
    // System Under Test
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledWith(sut.total());
  });
});

// Mock - Objeto que finje que é uma dependência
