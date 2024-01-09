import { AlcoholicDrinks } from './alcoholic-drinks';
import { Cigarette } from './cigarette';
import { Food } from './food';

export interface TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number;
  calculateTaxesForCigarette(cigarette: Cigarette): number;
  calculateTaxesForAlcoholicDrinks(alcoholicDrink: AlcoholicDrinks): number;
}
