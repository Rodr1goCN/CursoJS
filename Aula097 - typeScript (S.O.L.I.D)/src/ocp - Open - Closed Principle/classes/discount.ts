export abstract class Discount {
  abstract calculate(value: number): number;
}

export class TenPercentDiscount extends Discount {
  private readonly discount = 0.1;
  calculate(price: number): number {
    return price - price * this.discount;
  }
}
export class FifteenPercentDiscount extends Discount {
  private readonly discount = 0.15;
  calculate(price: number): number {
    return price - price * this.discount;
  }
}
export class TwentyPercentDiscount extends Discount {
  private readonly discount = 0.2;
  calculate(price: number): number {
    return price - price * this.discount;
  }
}
export class ThirtyPercentDiscount extends Discount {
  private readonly discount = 0.3;
  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  private readonly discount = 0.5;
  calculate(price: number): number {
    return price - price * this.discount;
  }
}
export class NoDiscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}
