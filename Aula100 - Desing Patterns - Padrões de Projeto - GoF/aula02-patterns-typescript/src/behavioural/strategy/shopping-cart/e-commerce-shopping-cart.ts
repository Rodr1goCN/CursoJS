import { ECommerceProductProtocol } from './e-commerce-product-protocol';

export class ECommerceShoppingCart {
  private products: ECommerceProductProtocol[] = [];
  private _discountStrategy: DiscountStratagy = new DiscountStratagy();

  addProduct(...product: ECommerceProductProtocol[]): void {
    product.forEach((product) => this.products.push(product));
  }

  getProducts(): ECommerceProductProtocol[] {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  getTotalWithDiscount(): number {
    return this._discountStrategy.getDiscount(this);
  }

  set discount(discount: DiscountStratagy) {
    this._discountStrategy = discount;
  }
}

export class DiscountStratagy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    return cart.getTotal();
  }
}
