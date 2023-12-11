export interface MealBuilderProtocol {
  makeMeal(): this;
  makeBeverage(): this;
  makeDessert(): this; // caso não precisa-se poderia retirar alguns itens
}
