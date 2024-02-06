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
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} deposit</div>
    <div class="movements__value">${mov}€</div>
  </div>;`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  acc.balance = balance;
  labelBalance.textContent = acc.balance + ' EUR';
};
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = incomes + '€';

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = Math.abs(out) + '€';

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = interest + '€';
};
const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
};

//Event Handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent =
      'Welcome Back, ' + currentAccount.owner.split(' ')[0];
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();
    //Update UI
    updateUI(currentAccount);
  }
});
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = '';
  inputTransferTo.value = '';
  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance > amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    //Doing the Transfer
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);
    //Update UI
    updateUI(currentAccount);
  }
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*
/////////////////////////////////////////////////
//Simple Arrays Methods
let arr = ['a', 'b', 'c', 'd', 'e'];
///////////////////////////////////////
// Slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(1, -2));
console.log(arr.slice());

///////////////////////////////////////
//Splice
arr.splice(-1);
console.log(arr);
console.log(arr.splice(2));
console.log(arr.splice(1, 2));

///////////////////////////////////////
//Reverse
let arr2 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr2.reverse());

///////////////////////////////////////
//Concat
let arr3 = ['g', 'h', 'i', 'j', 'k'];
console.log(arr2.concat(arr3));

///////////////////////////////////////
//Join
console.log(arr.join(" - "))

/////////////////////////////////////////////////
//The New At Method

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

///////////////////////////////////////
//Getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log('jonas'.at(-1));

/////////////////////////////////////////////////
//Looping Arrays: Foreach

const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements2.entries()) {
  if (movement > 0) console.log(`Movement ${i + 1}: You deposited ${movement}`);
  else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
}
console.log('--------FOREACH---------');
movements2.forEach(function (mov, i, arr) {
  if (mov > 0) console.log(`Movement ${i + 1}: You deposited ${mov}`);
  else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
});

/////////////////////////////////////////////////
//Foreach with maps and sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound Sterling'],
]);

///////////////////////////////////////
//Map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

///////////////////////////////////////
//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

///////////////////////////////////////
// Coding Challenge #1

Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]


/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/////////////////////////////////////////////////
//MAP, FILTER AND REDUCE
//MAP

const eurToUsd = 1.1;

const movementUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
const movementUSDArrow = movements.map(mov => mov * eurToUsd);
console.log(movementUSD);
console.log(movementUSDArrow);

const movementUSDfor = [];
for (const mov of movements) {
  movementUSDfor.push(mov * eurToUsd);
}
console.log(movementUSDfor);

const movementDesc = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementDesc);

///////////////////////////////////////
//Filter
const deposits = movements.filter(mov => mov > 0);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

///////////////////////////////////////
//Reduce
const balance = movements.reduce((acc, curr) => acc + curr, 0);
console.log(balance);

let balance2 = 0;

for (const mov of movements) balance2 += mov;
console.log(balance2);

///////////////////////////////////////
//Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);


///////////////////////////////////////
// Coding Challenge #2

Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]


const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

///////////////////////////////////////
//The Magic of Chaining Methods

const eurToUsd = 1.1;
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositUSD);

///////////////////////////////////////
// Coding Challenge #3
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

///////////////////////////////////////
// The find Method
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/
