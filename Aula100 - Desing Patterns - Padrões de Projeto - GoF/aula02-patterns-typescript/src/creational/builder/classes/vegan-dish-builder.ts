import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Beverage, Dessert, Rice } from './meals';

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 29.99);
    const beans = new Beans('Feijão', 7.99);
    this._meal.add(rice, beans);
    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage('Skol', 5.99);
    this._meal.add(beverage);
    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert('doce de leite', 3.99);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return +this._meal.getPrice().toFixed(2); // (+) serve para transformar em number e fazer funcionar o .toFixed()
  }
}
