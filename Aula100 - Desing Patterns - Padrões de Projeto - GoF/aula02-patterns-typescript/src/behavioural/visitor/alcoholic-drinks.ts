import { TaxVisitorProtocol } from './tax-visitor-protocol';
import { VisitableProduct } from './visitable-product';

export class AlcoholicDrinks extends VisitableProduct {
  constructor(protected price: number) {
    super('AlcoholicDrinks', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return +visitor.calculateTaxesForAlcoholicDrinks(this).toFixed(2);
  }
}
