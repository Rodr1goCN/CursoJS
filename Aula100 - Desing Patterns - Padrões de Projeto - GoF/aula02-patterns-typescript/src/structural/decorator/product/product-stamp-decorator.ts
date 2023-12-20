import { ProductDecorator } from './product-decorator';

export class ProductStampDecorator extends ProductDecorator {
  getPrice(): number {
    const originalPrice = this.product.getPrice();
    const updatedPrice = originalPrice + 10;
    return Number(updatedPrice.toFixed(2));
  }

  getName(): string {
    return this.product.getName() + '(Estampada)';
  }
}
