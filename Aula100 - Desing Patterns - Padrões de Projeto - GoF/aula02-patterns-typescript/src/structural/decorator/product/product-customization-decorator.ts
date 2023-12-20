import { ProductDecorator } from './product-decorator';

export class ProductCustomizationDecorator extends ProductDecorator {
  getName(): string {
    return this.product.getName() + '(Customizada)';
  }

  getPrice(): number {
    const originalPrice = this.product.getPrice();
    const updatedPrice = originalPrice + 50;
    return Number(updatedPrice.toFixed(2));
  }
}
