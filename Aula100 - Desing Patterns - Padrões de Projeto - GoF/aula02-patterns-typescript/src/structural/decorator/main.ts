import { ProductCustomizationDecorator } from './product/product-customization-decorator';
import { ProductDecorator } from './product/product-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { Tshirt } from './product/t-shirt';

const tshirt = new Tshirt();
const decoratorTShirt = new ProductDecorator(tshirt);
const decoratorStampTShirt = new ProductStampDecorator(tshirt);
const tShirtStampTwoSides = new ProductStampDecorator(decoratorStampTShirt);

const customizedTshirt = new ProductCustomizationDecorator(tshirt);

console.log(tshirt.getPrice(), tshirt.getName());
console.log(decoratorTShirt.getPrice(), tshirt.getName());
// Não é o mesmo objeto do (tshirt.getPrice()) mas o comportamento é o mesmo

console.log(decoratorStampTShirt.getPrice(), decoratorStampTShirt.getName());
// Igual aos outros, porem com o acréscimo de 10 reais ao valor original

console.log(tShirtStampTwoSides.getPrice(), tShirtStampTwoSides.getName());
// Foi decorado duas vezes, com acréscimo de 20 reais ao valor original

console.log(customizedTshirt.getPrice(), customizedTshirt.getName());
