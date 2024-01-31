'use strict';

// Scoping Practice

/*function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName} ${lastName} are ${age} years old `;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1999) {
      var millenial = true;
      const str = 'Oh you are a millenial, ' + firstName;
      console.log(str);

      //   function add(a, b) {
      //     return a + b;
      //   }
    }
    console.log(millenial);
    // add(2, 3);
  }
  if (firstName === 'Ceyhun') {
    var lastName = 'Ergün';
  }
  printAge();

  return age;
}

const firstName = 'Ceyhun';
calcAge(1999);

// Hoisting and TDZ

// variables
console.log(me); // undefined
console.log(job); // error => cannot access 'job' before initialization
console.log(year); // error => cannot access 'year' before initialization
var me = 'Jonas';
let job = 'Developer';
const year = 1999;

// functions
console.log(addDecl(2, 4)); //6
console.log(addExpr(2, 4)); // error => cannot access 'addExpr' before initialization
console.log(addArrow(2, 4)); // error => addArrow is not a function
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example
console.log(numProducts); //undefined
if (!numProducts) deleteShoppingCart(); // undefined => false

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // true
console.log(z === window.z); // true

// This Keyword 

const ceyhun = {
  name: 'ceyhun',
  lastname: 'ergün',
  birthYear: 1999,
  calcAge: function () {
    this.age = 2024 - this.birthYear;
    console.log(this.age);
    return this.age;
  },
};

console.log(this);

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAge(1999);

const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAgeArrow(1999);

const jonas = {
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
};
jonas.calcAge();

const mathilda = {
  year: 2017,
};
mathilda.calcAge = jonas.calcAge;
mathilda.calcAge();

const f = jonas.calcAge;
f();

var firstName = 'Mathilda';

const jonas = {
  firstName: 'Jonas',
  year: 1999,
  calcAge: function () {
    console.log(this); // undefined
    console.log(2024 - this.year);

    // Solution 1

    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1999);
    // };

    // Solution 2

    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1999);
    };

    isMillenial();
  },
  greet: () => console.log('Hey ' + this.firstName),
};
jonas.calcAge();

// Arguments Keyword

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 3);

var addArrow = (a, b) => a + b;
addArrow(2, 5);

//Primitives and Objects

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
me.age = 39;
console.log('Me', me);
console.log('Friend', friend);

// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davies';
console.log(lastName, oldLastName); // Davies, Williams

// Reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davies';
console.log('Before Mariage: ', jessica);
console.log('After Mariage: ', marriedJessica);

// marriedJessica = {};

//Copying Objects
*/

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bon'],
};

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = 'Davies';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before Mariage: ', jessica);
console.log('After Mariage: ', jessicaCopy);
