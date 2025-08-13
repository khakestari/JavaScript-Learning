'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
    // numPassengers = numPassengers || 1;
    const booking = {
        flightNum: flightNum,
        numPassengers: numPassengers,
        price: price
    }
    console.log(booking);
    bookings.push(booking);
}

// createBooking('LH123', '2')


const flight = 'LH234'
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 236789034509
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999'
    passenger.name = 'Mr. ' + passenger.name;
    if (passenger.passport === 236789034509) {
        alert('check in')
    }
    else {
        alert('wrong passport')
    }
}

// checkIn(flight, jonas);  

// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000000)
}

// newPassport(jonas);

// checkIn(flight, jonas);

// js is pass by value language althogh it seems to pass by refrence sometimes

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
    console.log(`transformed: ${fn(str)}`);
}

// transformer('js is the best', oneWord)

const high5 = function () {
    console.log('👋');
}

// document.body.addEventListener('click', high5)

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey')

// greeterHey('saber')
// greet('hello')('richard')

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('hi')('M')

const luftansa = {
    airline: 'Luft',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline}`);
        this.bookings.push({ flight: `${this.iataCode}`, name })
    }
}

// luftansa.book(239, 'Khan')
// console.log(luftansa.bookings);
const eurowings = {
    airline: 'euro',
    iataCode: 'EW',
    bookings: [],

}

const book = luftansa.book;

// book.call(eurowings, 23, 'Sarah')
// book.call(luftansa, 23, 'Sarah')

// bind method

const bookEW = book.bind(eurowings);

// bookEW(23, 'steven')

const bookEW23 = book.bind(eurowings, 23);

// bookEW23('jonas')

//with Event Listeners
luftansa.planes = 300;
luftansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', luftansa.buyPlane.bind(luftansa))

// patial application

const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23)


const addTaxRate = rate => value => value + value * rate;
const addVAT2 = addTaxRate(0.23)
// console.log(addVAT2(23));


const poll = {
    question: "what?",
    options: ['0: JS', '1: Python', '2: CPP', '3: JAVA'],
    answers: new Array(4).fill(0),
}


const registerNewAnswer = function () {
    const answer = Number(prompt(`${this.question} \n0: ${this.options.join('\n')}\n(Write option number)`));
    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
}

const displayResults = function (type = 'array') {
    if (type === 'array') {
        console.log(this.answers);
    }
    else if (type === 'string') {
        console.log(`poll results are $`);
    }
}

const pollRun = registerNewAnswer.bind(poll)
const pollAns = displayResults.bind(poll)
document.querySelector('.poll').addEventListener('click', pollRun)

const runOnce = function () {
    console.log('this will never run again');
}

// runOnce();

// IIFE
// (function (params) {
//     console.log('this will never run again');
// })();

// (() => console.log('this will never run again'))();


const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}
// closure example
const booker = secureBooking();
// booker();
// console.dir(booker)

let f;
const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    }
}
const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    }
}
// g();
// f();
// h();
// f();
// console.dir(f)

// example 2

const boardPassengers = function (n, wait) {
    const perGroup = n / 3;
    setTimeout(() => {
        console.log(`we are now boarding all ${n} passengers`);
        console.log(`there are 3 groups each with ${perGroup} passengers`);
    }, wait * 1000);
    console.log(`will start boarding in ${wait} seconds`);
}
const perGroup = 1000;
// boardPassengers(180, 3)
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.body.addEventListener('click', function () {
        header.style.color = 'blue';
    })
})()