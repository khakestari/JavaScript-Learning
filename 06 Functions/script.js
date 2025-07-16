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

newPassport(jonas);

checkIn(flight, jonas);

// js is pass by value language althogh it seems to pass by refrence sometimes
