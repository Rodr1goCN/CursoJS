import { AlcoholicDrinks } from './alcoholic-drinks';
import { BrazilTaxVisitor } from './brazil-tax-visitor';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { USTaxVisitor } from './us-tax-visitor';

const food = new Food(30);
const cigarette = new Cigarette(7.99);
const alcoholicDrinks = new AlcoholicDrinks(10);

const brazilTaxVisitor = new BrazilTaxVisitor();
const usTaxVisitor = new USTaxVisitor();

const cart = [food, alcoholicDrinks, cigarette];
const total = cart.reduce((sum, item) => item.getPrice() + sum, 0);
const totalWithTaxesBrazil = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum,
  0,
);
const totalWithTaxesUS = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(usTaxVisitor) + sum,
  0,
);

console.log('Total sem impostos: ', total);
console.log('Total + taxas pt-BR: ', totalWithTaxesBrazil);
console.log('Total + taxas US: ', totalWithTaxesUS);
