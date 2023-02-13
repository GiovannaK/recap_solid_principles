import { FiftyPercentDiscount, NoDiscount } from './ocp/classes/Discount';
import { ShoppingCart } from './ocp/ShoppingCart';

const fifityPercentDiscount = new FiftyPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
shoppingCart.addItem({ name: 'Caneca', price: 20.9 });
shoppingCart.addItem({ name: 'Camisa', price: 40.89 });
shoppingCart.addItem({ name: 'Casaco', price: 200 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log('DISCOUNT', shoppingCart.totalWithDiscount());
console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
