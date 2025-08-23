'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}€</div>
    </div>
    `

    containerMovements.insertAdjacentHTML('afterbegin', html)
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`
};
// calcDisplayBalance(account1.movements)

const calcDisplaySummery = function (acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${incomes}€`;
  const outcomes = acc.movements.filter(mov => mov < 0).reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  const interest = acc.movements.filter(mov => mov > 0).map(deposit => deposit * acc.interestRate / 100).filter(int => int >= 1).reduce((acc, inter) => acc + inter, 0);
  labelSumInterest.textContent = `${interest}€`
}
// calcDisplaySummery(account1.movements);
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(word => word[0]).join('');
  })
}
createUsernames(accounts)
// console.log(accounts);

const upadteUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummery(acc);
}

// event handlers

let currentAccount;
console.log(accounts);
btnLogin.addEventListener('click', function (event) {
  // prevent form from submiting
  event.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;
    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    upadteUI(currentAccount);
  }
})
btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';
  if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    upadteUI(currentAccount)
  }
});

btnLoan.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(deposit => deposit >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    upadteUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  // const userPin 
  if (currentAccount.username === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    accounts.splice(indexedDB, 1);
    containerApp.style.opacity = 0;
    // console.log(index);
  }
  inputCloseUsername.value = '';
  inputClosePin.value = '';
})

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted)
  sorted = !sorted;
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(-2));
// console.log(arr.splice(-1));
// console.log(arr);

const arr2 = ['j', 'i', 'h', 'g', 'f']
// console.log(arr2.reverse());
// console.log(arr2);
const letters = arr.concat(arr2)
// console.log(letters);

// console.log(letters.join(' - '));

const arrr = [23, 11, 64];

// console.log(arrr.at(-1));
// console.log('jonas'.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  // console.log(`${movement} number ${i + 1}`);
}

for (const movement of movements) {
  // console.log(movement);
}


// break and continue doesn't work in forEach
movements.forEach(function (movement, i, array) {
  // console.log(`${movement}${i}${array}`);
});


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  // console.log(value);

});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])

currenciesUnique.forEach(function (value, key, map) {
  // console.log(value);

});

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

// console.log(deposits);
const withdrawls = movements.filter(mov => mov < 0);

const balance = movements.reduce((acc, cur,) => acc + cur, 0);
// console.log(balance);

//maximum value

const max = movements.reduce((acc, cur) => cur > acc ? cur : acc, movements[0]);
// console.log(max);

const totalUSDollar =
  movements.filter(mov => mov > 0).
    map(mov => mov * 1.1).
    // map((mov, i, arr) => {
    //   console.log(arr);
    //   return mov * 1.1
    // }).
    reduce((acc, cur) => acc + cur, 0);
// console.log(totalUSDollar);

const firstWithdrawl = movements.find((mov) => mov < 0);

// console.log(firstWithdrawl);

const user = accounts.find(acc => acc.owner === "Jessica Davis")

// console.log(user);

// console.log(movements);
const laswithrawl = movements.findLast(mov => mov < 0);
// console.log(laswithrawl);

const lLMIndex = movements.findLastIndex(mov => Math.abs(mov) > 1000);
// console.log(lLMIndex);
// console.log(`${movements.length - lLMIndex}`);

// equality
// console.log(movements.includes(-130));

// condition
// console.log(movements.some(mov => mov > 0));

// every - if every element passes the test
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

arr = [[1, 2, 3], [4, 5, 6], 7, 8];
let deepArr = [[1, 2, 3], [4, [5, 6]], 7, 8];

// console.log(deepArr.flat(3));

const overalBalance = accounts.map(acc => acc.movements).flat().reduce((acc, curr) => acc + curr, 0)
// console.log(overalBalance);

// flatmap
const overalBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, curr) => acc + curr, 0)

const owners = ['j', 'z', 'a', 'm']
// console.log(owners.sort()); // mutat original

// console.log(movements);
// console.log(movements.sort()); // convert everything in string and sort 

// return <0, A, B
// return >0 B, A
// console.log(movements.sort((a, b) => a - b)); // ascending

// console.log(movements);
const groupedMovements = Object.groupBy(movements, movement => movement > 0 ? 'deposits' : 'withrawls')
// console.log(groupedMovements);

const numMov = Object.groupBy(accounts, account => {
  const movmentCount = account.movements.length;
  if (movmentCount >= 8)
    return 'very active'
  if (movmentCount >= 4)
    return 'active'
  if (movmentCount >= 1)
    return 'moderate'
  return 'inActive'

})

// console.log(numMov);

const groupedByType = Object.groupBy(accounts, account => account.type)
// console.log(groupedByType);

const x = new Array(7);
// x.fill(1);
x.fill(1, 3, 5)
// console.log(x);

const y = Array.from({ length: 7 }, () => 1)
// console.log(y);

const z = Array.from({ length: 100 }, (_, i) => Math.trunc(Math.random() * 6 + 1))
// console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2);
});

// console.log(movements.slice().reverse());
// console.log(movements.toReversed());
// console.log(movements.toSorted());
// console.log(movements.toSpliced());
// movements[1] = 2000;
const newMovments = movements.with(1, 2000)
// console.log(newMovments);
// console.log(movements);


// practice
const bankDepositSum = accounts.flatMap(account => account.movements).filter(mov => mov > 0).reduce((acc, cur) => acc + cur, 0)
// console.log(bankDepositSum);

// const numDeposits1000 = accounts.flatMap(account => account.movements).filter(mov => mov >= 1000).length;
const numDeposits1000 = accounts.flatMap(account => account.movements).reduce((count, cur) => cur >= 1000 ? ++count : count, 0)
// console.log(numDeposits1000);

const sums = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
  // cur > 0 ? (sums.deposits += cur) : (sums.withdrawls += cur);
  sums[cur > 0 ? 'deposits' : 'withdrawls'] += cur;
  return sums;
}, { deposits: 0, withdrawls: 0 });
// console.log(sums);

const convertTitleCase = function (title) {
  const capitalize = (word) => word[0].toUpperCase() + word.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title.toLowerCase().split(' ').map(word => exceptions.includes(word) ? word : capitalize(word)).join(' ');
  return capitalize(titleCase);
}

// console.log(convertTitleCase('this is a nice title'));

