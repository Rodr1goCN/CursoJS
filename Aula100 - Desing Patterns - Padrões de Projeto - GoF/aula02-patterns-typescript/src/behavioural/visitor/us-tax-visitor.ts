import { AlcoholicDrinks } from './alcoholic-drinks';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { TaxVisitorProtocol } from './tax-visitor-protocol';

export class USTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.1;
  }

  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() + cigarette.getPrice() * 0.2;
  }

  calculateTaxesForAlcoholicDrinks(alcoholicDrink: AlcoholicDrinks): number {
    return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 0.3;
  }
}
