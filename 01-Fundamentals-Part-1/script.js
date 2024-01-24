/* let js = "amaizing";

 if (js === "amaizing") {
   alert("JS is FUN");
 }
 console.log(31 + 61 + 52);

 ******** VALUES AND VARIABLES ******** 

 console.log("Jonas");
 console.log(23);
 console.log(30 + 27 + 4);

 let firstName = "Jonas";
 let first = "Matilda";
 let firstNamePerson = "Ruby";
 let first_name_person = "Ceyhun";

 console.log(firstName);
 console.log(first);
 console.log(firstNamePerson);
 console.log(first_name_person);

 let PI = 3.1415;

 More understandable
 let myFirstJob = "Programmer";
 let myCurrentJob = "Teacher";

 Less understandable

 let job1 = "Programmer";
 let job2 = "Teacher";

******** DATA TYPES ******** 

let age = 23; //number
let firstName = "Jonas"; //string
let javascriptIsFun = true; //boolen
let year; //undefined

console.log(typeof javascriptIsFun);
console.log(typeof age);
console.log(typeof firstName);
console.log(typeof year);

// Changed type
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

//Changed type
year = 2024;
console.log(typeof year);


******** LET, CONST AND VAR ******** 

let age = 30;
age = 31;

const birthYear = 1999;

var job = "Programmer";
job = "Teacher";

deneme = 12;
console.log(deneme);

******** BASIC OPERATORS ******** 

//Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageSarah / 2, 2 ** 3);

const firstName = "Jonas";
const lastName = "Smith";
console.log(firstName + " " + lastName);

// Assingment Operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

//Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 17);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

******** OPERATOR PRECEDENCE ******** 

console.log(25 - 10 - 5);

let x, y;
x = y = 20 - 5 - 8;
console.log(x, y);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
const avegareAge = ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah, avegareAge);

******** CHALLENGE 1 ******** 

const massMark = 78;
const heightMark = 1.69;
const massJohn = 1.95;
const heightJohn = 92;
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

******** STRINGS AND TEMPLATE LITERALS ********

const firstName = "Ceyhun";
const job = "Developer";
const birthYear = 1999;
const year = 2024;

const ceyhun =
  "I'm " + firstName + ", a " + year - birthYear + " years old " + job;

console.log(ceyhun);

const ceyhunNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;

console.log(
  "String with \n\
multiple \n\
lines"
);
console.log(
  `String with 
multiple 
lines`
); 
******** TAKING DECISIONS - IF / ELSE STATEMENTS ******** 

const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license 🚗");
} else {
  console.log(`${18 - age} years left.`);
}

let century;
const birthYear = 1999;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

******** CHALLENGE 2 ********

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

******** TYPE CONVERSIOUN AND COERCION ******** 

// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(String(23));

//type coersion
console.log("I'm " + 23 + " years old.");
console.log("23" - "10" - 3); // 10
console.log("23" * "2"); // 46

let n = "1" + 1;
n = n - 1;
console.log(n); // 10

******** TRUTHY AND FALSY VALUES ******** 

// 5 falsy values (0, '', undefined, null, NaN)

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean(null)); // false
console.log(Boolean({})); // true
console.log(Boolean("")); // true

// const money = 0; // false
const money = 100; // true

if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!");
}

// let height; // false
let height = 123; // false

if (height) {
  console.log("YAY! Height is defined.");
} else {
  console.log("Height is UNDEFINED");
}

******** EQUALITY OPERATORS ( == VS. === ) ********

const age = "18";
if (age === 18) console.log("You just became an adult!(strict)");
if (age == 18) console.log("You just became an adult!(loose)");

// 18 === 18 -> true
// 18 === 19 -> false
// 18 == '18' -> true

const favourite = prompt("What is your favourite number?");
console.log(favourite);
console.log(typeof favourite); // string

if (focus == 23) {
  // '23' == 23 => true
  // '23' === 23 => false
  console.log("Cool! 23 is amazing number!");
}

******** BOOLEN LOGIC ********

// A = true && B = true // true
// A = false || B = false // false
// A = false // !A = true
// B = true // !B = false

******** LOGICAL OPERATORS ********

const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision); // false
console.log(hasDriverLicense || hasGoodVision); // true
console.log(!hasDriverLicense || hasGoodVision); // false

const shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = true;

console.log(hasDriverLicense || hasGoodVision || isTired); // true
console.log(hasDriverLicense && hasGoodVision && isTired); // false

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

******** CHALLENGE 3 ********

let scoreDolphins = (96 + 108 + 89) / 3

let scoreKoalas = (88 + 91 + 110) / 3

if (scoreDolphins>scoreKoalas){
    console.log("Dolphins win the trophy")
} else if (scoreKoalas>scoreDolphins){
    console.log("Koalas win the trophy")
} else {
    console.log("Both win the trophy")
}

******** THE SWITCH STATEMENT ******** 

const day = "monday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday": // day === "tuesday"
    console.log("Do something");
    break;
  default:
    console.log("Invalid day");
    break;
}

******** STATEMENTS AND EXPRESSIONS ******** 
if-else / switch => statements

console.log(`I'm ${2037 - 1999} years old!`); => expressions

******** TERNARY OPERATOR ********

const age = 19;
console.log(age >= 18 ? "Old" : "Young"); 

******** CHALLENGE 4 ********

const bill = 275;
let tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/
