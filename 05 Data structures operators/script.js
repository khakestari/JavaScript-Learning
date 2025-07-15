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
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:10', address }) {
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`here is delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
  openingHours,
};

// console.log(restaurant.openingHours?.mon?.open);
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  // console.log(open);
}

// methods
// console.log(restaurant.ordertest?.(0, 1) ?? 'there isn\'t');

// loop over object keys

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }
// for (const day of Object.values(openingHours)) {
//   console.log(day);
// }
// for (const [key, { open, close }] of Object.entries(openingHours)) {
//   console.log(key, open, close);
// }
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
// const guests = restaurant.numGuests || 10;
// console.log(guests);
// // nulish: null and undefined (Not 0 or '')
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// logical assignment Operators

const rest1 = {
  name: 'Capri',
  // numGuests: 20
  numGuests: 0
}
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi'
}

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// OR Assignment
// rest1.numGuests ||= 10
// rest2.numGuests ||= 10

rest1.numGuests ??= 10
rest2.numGuests ??= 10


// AND assignment

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= 10;
rest2.owner &&= 10;
// console.log(rest1);
// console.log(rest2);

// looping arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);
// for (const [i, el] of menu.entries()) console.log(`${i + 1} ${el}`);

/// object literals

///

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

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game['players'];
const [gk, ...fieldPlayers] = players1[0]
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
const { odds: { team1, x: draw, team2 } } = game;
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
}

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');

// team1 < team2 && console.log('team 1 is more likly to win');
// team1 > team2 && console.log('team 2 is more likly to win');

// challenge #2

// for (const [num, player] of game.scored.entries())
// console.log(`Goal ${num + 1}: ${player}`);

let avgOdds = 0;
for (const odd of Object.values(game.odds)) {
  avgOdds += odd;
}
// console.log(avgOdds / 3);

const oddsObj = Object.entries(game.odds);
// console.log(oddsObj);
for (const [team, odd] of oddsObj) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  // console.log(`Odd of ${teamStr} ${odd}`);
  // let teamName = odd[0] === 'team1' ?
  // console.log(`${oddsObj[odd[0]]}`);
  // console.log(`odd ${Object.values(game.odds[`${odd}`] ?? 'team1'])}`);
}

const ordersSet = new Set(['pasta', 'pizza', 'pizza', 'rissotto', 'pasta', 'pizza']);

// console.log(ordersSet.size);
// console.log(ordersSet.has('pizza'));
// console.log(ordersSet.has('bread'));
ordersSet.add('Garlic bread');
ordersSet.add('Garlic bread');
ordersSet.delete('pizza');
// ordersSet.clear();
// console.log(ordersSet);

for (const order of ordersSet) console.log(order);
// example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']

const staffunique = [...new Set(staff)];
// console.log(staffunique);
// console.log(new Set(staff).size);

const commonfoods = italianFoods.intersection(mexicanFoods);
// console.log([...commonfoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
// console.log(italianMexicanFusion);

const diffElements = italianFoods.difference(mexicanFoods);
// console.log(diffElements);

const uniqueitalianandmexican = italianFoods.symmetricDifference(mexicanFoods);
// console.log(uniqueitalianandmexican);

// console.log(italianFoods.isDisjointFrom(mexicanFoods));

const rest = new Map();
rest.set('name', 'classico Italiano');
rest.set(1, 'Firenze, italy');
rest.set(2, 'Lisbon, Portugal');

rest.set('categories', ['italian', 'pizzeria']).set('open', 11).set(true, 'we are open');
// console.log(rest);
// console.log(rest.get(true));


const question = new Map([
  ['question', 'what is best lang?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'JS'],
  ['correct Ans', 3],
  [true, 'Correct'],
  [false, 'try again!'],
]);

// console.log(question);

for (const [key, value] of question) {
  if (typeof (key) === 'number')
    console.log(value);
}

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

let events = [...new Set(gameEvents.values())]
// console.log(events);

gameEvents.delete('64');

// console.log(90 / gameEvents.size);

// for (const [key, value] of gameEvents) {
//   console.log(key <= 45 ? `[First Half] ${key}: ${value}` : `[Second Half] ${key}: ${value}`);
// }


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
    console.log(`${output.padEnd(20)} ${'✅'.repeat(i + 1)}`);
  }
});

const flightRows = flights.split('+');

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flights of flightRows) {
  const [type, from, to, time] = flights.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}

