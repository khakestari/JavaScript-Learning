// importing module
// import { addToCart,totalPrice as price,tq} from './shoppingCart.js'; './shoppingCart.js';

// addToCart('bread',3);
// console.log(price,tq);

console.log(`importing Module`);

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('milk',3);

// console.log(ShoppingCart.totalPrice);

// import add,{ addToCart,totalPrice as price,tq} from './shoppingCart.js';

// console.log(price);

import add, { cart } from "./shoppingCart.js";
add("pizza", 2);
// add('bread',5)
// add('apples',4)

// console.log(cart);
// async function x(params) {

// }
// this will block the execution of module
// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');

// const data = await res.json();
// console.log(data);
// console.log('smthing to test');

const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await res.json();
  return { title: data.at(-1).title, txt: data.at(-1).body };
};

// const lastPost = getLastPost();
// console.log(lastPost);
// not very clean
// lastPost.then(last=>console.log(last));

// const lastPost2 = await getLastPost()
// console.log(lastPost2);
const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantitiy) {
    cart.push({ product, quantitiy });
    console.log(`${quantitiy} ${product} added to cart`);
  };
  const orderStock = function (product, quantitiy) {
    cart.push({ product, quantitiy });
    console.log(`${quantitiy} ${product} order from supplier`);
  };
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
shoppingCart2.addToCart("apples", 4);
shoppingCart2.addToCart("pizzas", 2);

// console.log(shoppingCart2);
// console.log(shoppingCart2.shippingCost);

// export
// export.addToCart = function(product,quantitiy){
//     cart.push({product,quantitiy});
//     console.log(`${quantitiy} ${product} added to cart`);
// }

// import
// const {addToCart} = require('./shoppingCart.js');

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es";

const state = {
  cart: [
    { product: "bread", quantitiy: 5 },
    { product: "pizza", quantitiy: 3 },
  ],
  user: {
    loggedIn: true,
  },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = "Hey";
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const jonas = new Person("Jonas");
console.log(cart.find((el) => el.quantitiy >= 2));
Promise.resolve("TEST").then((x) => console.log(x));

import "core-js/stable";

// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// polifilling async functions
import "regenerator-runtime/runtime";
