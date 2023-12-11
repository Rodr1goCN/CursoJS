import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export class MealBox implements MealCompositeProtocol {
  toFixed(): number {
    throw new Error('Method not implemented.');
  }
  private readonly _children: MealCompositeProtocol[] = [];
  getPrice(): number {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0); // Soma o preço de todos produto que tem dentro da box
  }

  add(...meal: MealCompositeProtocol[]): void {
    meal.forEach((item) => this._children.push(item));
  }
}
