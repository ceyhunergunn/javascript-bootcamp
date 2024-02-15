'use strict';
/* 

////////////////////////
//Constructor Functions and The New Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //     console.log(2024 - this.birthYear);
  //   };
};

// 1. new {} is created
// 2. function is called, this={}
// 3. {} linked to prototype
// 4. function automatically return {}

const ceyhun = new Person('Ceyhun', 1999);
const mathilda = new Person('Mathilda', 1992);
const jack = new Person('Jack', 1992);
const jay = 'Jay';

// console.log(ceyhun);
// console.log(mathilda);
// console.log(jack);

// console.log(ceyhun instanceof Person);
// console.log(jay instanceof Person);

////////////////////////
//Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

ceyhun.calcAge();

console.log(ceyhun.__proto__);
console.log(ceyhun.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(ceyhun));
console.log(Person.prototype.isPrototypeOf(Person));

//prototypeOfLinkedObjects

Person.prototype.species = 'Homo Spiens';
console.log(ceyhun.species);

console.log(ceyhun.hasOwnProperty('firstName'));
console.log(ceyhun.hasOwnProperty('species'));

////////////////////////
//Prototypal Inheritance On Built-In Objects

console.log(ceyhun);
console.log(ceyhun.__proto__);
//Object.prototype (top of prototype chain)
console.log(ceyhun.__proto__.__proto__);
console.log(ceyhun.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [2, 3, 4, 5, 6, 12, 3, 41, 2, 3, 46, 5, 6]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);

1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const BMW = new Car('German', 120);
const Mercedes = new Car('German', 95);

////////////////////////
//ES6 Classes

//class expression
// const PersonCl = class {}

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }
  greet() {
    console.log('Hey ' + this.fullName);
  }
  get age() {
    return 2024 - this.birthYear;
  }
  // set a property that already exist
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }

  //Static Methods
  static hey() {
    console.log('Hey There!');
  }
}

const jessica = new PersonCl('Jessica Davis', 1999);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log('Hey' + this.firstName);
// };
jessica.greet();
PersonCl.hey();

// 1. classes are NOT HOISTED
// 2. classes are first class citizens
// 3. classes are executed in strict mode

// const walter = new PersonCl('Walter', 1965);

////////////////////////
//Setters and Getters

const account = {
  owner: 'Jonas',
  movements: [100, 200, 120],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;

console.log(account.movements);

////////////////////////
//Static Methods
PersonCl.hey = function () {
  console.log('Hey There!');
  console.log(this);
};

PersonCl.hey();
jessica.hey();

////////////////////////
//Object.Create

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.birthYear = birthYear;
    this.firstName = firstName;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 1999;
console.log(steven);
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1999);
console.log(sarah);

///////////////////////////////////////
// Coding Challenge #2

1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h


class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  //   set speed(speed) {
  //     this._speed = speed;
  //   }
  //   get speed() {
  //     return this._speed;
  //   }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

///////////////////////////////////////
// Inheritance Between 'Classes': Constructor Functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking Prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course} `);
};

const mike = new Student('Mike', 2005, 'Computer Science');
mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

///////////////////////////////////////
// Coding Challenge #3

1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//linking
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course} `);
  }
  calcAge() {
    console.log(
      `I'm ${2024 - this.birthYear} years old, but as a student I fell like ${
        2024 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Marhta Jones', 2004, 'CS');
martha.introduce();
martha.calcAge();

///////////////////////////////////////
// Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

//////////////////////////////////////
// Another Class Example

class Account {
  constructor(owner, curency, pin) {
    this.owner = owner;
    this.curency = curency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for openning an Account, ${owner}`);
  }

  //Public Interface
  deposit(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved!');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.movements.push(250);
// acc1.movements.push(-140);

console.log(acc1);

console.log(acc1.pin);

//////////////////////////////////////
// Encapsulation: Protected Properties and Methods
class Account {
  constructor(owner, curency, pin) {
    this.owner = owner;
    this.curency = curency;
    this._pin = pin;
    //protected property
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for openning an Account, ${owner}`);
  }

  //Public Interface
  getMovements() {
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved!');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
// acc1._movements.push(250);
// acc1._movements.push(-140);

//////////////////////////////////////
// Encapsulation: Private Class Fields and Methods

// 1) public fields
// 2) private fields
// 3) public methods
// 4) private methods
class Account {
  // 1)public fields (instances)
  locale = navigator.language;

  // 2)private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, curency, pin) {
    this.owner = owner;
    this.curency = curency;
    this.#pin = pin;

    console.log(`Thanks for openning an Account, ${owner}`);
  }
  // 3)public methods

  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved!');
    }
  }

  static helper() {
    console.log('Helper');
  }
  // 4) private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);

Account.helper();

//////////////////////////////////////
// Chaining Methods
class Account {
  // 1)public fields (instances)
  locale = navigator.language;

  // 2)private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, curency, pin) {
    this.owner = owner;
    this.curency = curency;
    this.#pin = pin;

    console.log(`Thanks for openning an Account, ${owner}`);
  }
  // 3)public methods

  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved!');
    }
    return this;
  }

  static helper() {
    console.log('Helper');
  }
  // 4) private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);

Account.helper();

//chaining
acc1.deposit(300).deposit(500).withdraw(34).requestLoan(2333);
console.log(acc1.getMovements());
///////////////////////////////////////
// Coding Challenge #4

1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, charge);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();
