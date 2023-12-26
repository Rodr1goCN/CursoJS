import { DefaultDiscount } from './shopping-cart/default-discount';
import { ECommerceShoppingCart } from './shopping-cart/e-commerce-shopping-cart';
import { NewDiscount } from './shopping-cart/new-discount';

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discount = new DefaultDiscount();
shoppingCart.discount = new NewDiscount();
shoppingCart.addProduct({ name: 'Camiseta 1', price: 49.99 });
shoppingCart.addProduct({ name: 'Camiseta 2', price: 59.99 });
shoppingCart.addProduct({ name: 'Camiseta 2', price: 59.99 });

console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount().toFixed(2));
