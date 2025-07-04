'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:10', address }) {
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/////////////////////////////
// Destructuring Objects

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// const { name: rname, openingHours: oh, categories: tags } = restaurant;
// console.log(rname, openingHours, categories);

// const { menu = [], starterMenu: starter = [] } = restaurant;;

// console.log(menu, starter);
// mutating
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// nested objects

// const { fri: { open, close } } = openingHours;
// console.log(open, close);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2
// });

// restaurant.orderDelivery({
//   address: 'Via del sole, 21',
//   starterIndex: 1
// })

// // spread operator ...
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci']
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join two arrays
// const menuu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menuu);

// // 
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// example
// const ingrideients = [prompt('Let\'s make past! ingridient 1?'),
// prompt('Let\'s make past! ingridient 2?'),
// prompt('Let\'s make past! ingridient 3?')]

// restaurant.orderPasta(...ingrideients);

// objects
// const newRestaurant = { ...restaurant, foundIn: '2003', founder: 'Your father' }

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'New name';

// 1) destructuring
// rest pattern
// Spread, because on Right side of =
// const arr2 = [1, 2, ...[3, 4]];

// Rest, because on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , rissoto, ...otherfood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, rissoto, otherfood);

//objects 
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(sat, weekDays);

// 2) functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++)
//     sum += numbers[i]

//   console.log(...numbers);
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// short circuiting
// use any data type, return Any data type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;

// const guest2 = restaurant.numGuests || 10;
// // &&
// console.log('----AND----');
// console.log(0 && 'Jonas');
// console.log(2 && 'Jonas');

// console.log('Hello' && 23 && null && 'Jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mush', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mush', 'spinach');
//example 
// restaurant.orderPizza('Mushrooms', 'onion', 'olives')
// console.log(165);

// nulish
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
// nulish: null and undefined (Not 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

/////////////////////////////
// Destructuring Arrays

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;

// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // switching

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// [main, secondary] = [secondary, main]
// console.log(main, secondary);


// const [starter, mainCourse] = restaurant.order(2, 0);
// // nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

