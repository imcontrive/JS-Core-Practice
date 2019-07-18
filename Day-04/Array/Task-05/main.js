// * Converts a number a string.

// 1.Function Decleration
function convertToString(n) {
  return String(n);
}

// 2.Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// 3.// Arrow Function
let convertToString = n => String(n);
let convertToString = n => {
  return String(n);
};

// 4.Arrow Function without curly braces
let convertToString = n => String(n);

//Ques-2: Adds one to a given number.

// 1.Function Decleration
function addOne(n){
  return n += 1;
}
console.log(addOne(100));

// 2.Function Expression
let add1 = function(n) {
  return n++;
}; 

// 3. Arrow Function
let add1 = n => {
  return n++ ;
};

// 4.Arrow Function without curly braces

let add1 = n => n++;

//Ques-3 :  Subtracts one from a given number.

// 1.Function Decleration

function substractOne(n){
  return n -= 1;
}
console.log(substractOne(100));

// 2.Function Expression
let substract1 = function(n) {
  return n-1;
}; 

// 3. Arrow Function
let substract1 = n => {
  return n-1 ;
};

// 4.Arrow Function without curly braces

let substract1 = n => n-1;

//Ques-4 : Adds two numbers.

// 1.Function Decleration

function addTwoNumbers(x,y){
  return x + y;
}
console.log(addTwoNumbers(10, 13));

// 2.Function Expression
 let addTwoNumbers = function(x , y) {
  return x + y;
 };

// 3. Arrow Function

var addTwoNumbers = (x, y) => {
 return x + y;
};
addTwoNumbers(2, 3);
// 4.Arrow Function without curly braces
var addTwoNumbers = (x, y) => x + y;
addTwoNumbers(2, 3);

//Ques-5 :Subtracts the second number from the first.

// 1.Function Decleration

function substractTwoNumbers(x,y){
  return x - y;
}
console.log(substractTwoNumbers(10, 13));

// 2.Function Expression
 let substractTwoNumbers = function(x , y) {
  return x - y;
 };

// 3. Arrow Function

var substractTwoNumbers = (x, y) => {
 return x - y;
};
substractTwoNumbers(2, 3);
// 4.Arrow Function without curly braces
var addTwoNumbers = (x, y) => x - y;
substractTwoNumbers(2, 3);

//Ques-6 :Multiplies the second number from the first.

// 1.Function Decleration

function multiplyTwoNumbers(x,y){
  return x * y;
}
console.log(multiplyTwoNumbers(10, 13));

// 2.Function Expression
 let multiplyTwoNumbers = function(x , y) {
  return x * y;
 };

// 3. Arrow Function

var multiplyTwoNumbers = (x, y) => {
 return x * y;
};
multiplyTwoNumbers(2, 3);

// 4.Arrow Function without curly braces

var addTwoNumbers = (x, y) => x * y;
multiplyTwoNumbers(2, 3);

//Ques-7 : Divides the first number by the second

// 1.Function Decleration
function devideTwoNumbers(x,y){
  return x / y;
}
console.log(devideTwoNumbers(91, 13));

// 2.Function Expression
 let devideTwoNumbers = function(x , y) {
  return x / y;
 };

// 3. Arrow Function

var multiplyTwoNumbers = (x, y) => {
 return x / y;
};
devideTwoNumbers(6, 3);
// 4.Arrow Function without curly braces
var addTwoNumbers = (x, y) => x / y;
devideTwoNumbers(6, 3);


//Ques-8 : Multiplies a number by itself.
// 1.Function Decleration
function multiplyByItself(x){
  return x**2;
}
console.log(multiplyByItself(7));

// 2.Function Expression
 let multiplyByItself = function(x) {
  return x**2;
 };

// 3. Arrow Function

var multiplyByItself = (x) => {
 return x**2;
};
multiplyByItself(6);
// 4.Arrow Function without curly braces
var  multiplyByItself = (x, y) => x**2 ;
multiplyByItself(6, 3);


//Ques-9 :  Performs a mathematical operation on two numbers.
// 1.Function Decleration

function operation(inputOperator, num1, num2) {
  var result;
  if (inputOperator == "add") {
     let add = num1 + num2;
     result = `${num1} + ${num2} = ${add}`;
     console.log(result);
  } else if (inputOperator == "substract") {
     let subtract = num1 - num2;
     result = `${num1} - ${num2} = ${subtract}`;
     console.log(result);
  } else if (inputOperator == "multiply") {
     let multiply = num1 * num2;
     result = `${num1} * ${num2} = ${multiply}`;
     console.log(result);
  } else if (inputOperator == "divide") {
     let divide = num1 / num2;
     result = `${num1} / ${num2} = ${divide}`;
     console.log(result);
  }
}

//Ques-10 : Returns true if `num1` is greater than `num2`.

let isGreater = (num1, num2) => num1 > num2 ? console.log(`true`) : console.log(`false`);

//Ques-11 : Returns true if `num1` is less than `num2`.

let isLess = (num1, num2) => num1 < num2 ? console.log(`true`) : console.log(`false`);


//Ques-12 : Returns true if `num1` is less than `num2`.

let isEqual = (num1, num2) => num1 === num2 ? console.log(`true ` + ' ' + ' the numbers are equal') : console.log(`num1 and num2 are not equal`);

//Ques-13 :* Returns the smallest value of two numbers.

let smallestValue = (x, y) => Math.min(x, y);

//Ques-14 :* Returns the largest value of two numbers.

let largestValue = (x,y) => Math.max(x,y);

//Ques-15 : Returns true if `n` is even.

let isEven = (n) => (n % 2 === 0) ? console.log(`true ` + ' ' + `${n}` + 'is even') : console.log(`false`);

//Ques-16 : Returns true if `n` is odd.

let  isOdd = (n) => (n % 2 != 0) ? console.log(`true ` + ' ' + `${n}` + 'is odd') : console.log(`false`);

//Ques-17 : Returns a letter grade.

// 1.Function Decleration

function grade(score, total) {
  var percentage = (score * 100) / total;
  if (percentage >= 90 && percentage <= 100) {
      console.log("A");
  } else if (percentage >= 80 && percentage <= 89) {
      console.log("B");
  } else if (percentage >= 70 && percentage <= 79) {
      console.log("C");
  } else if (percentage >= 60 && percentage <= 69) {
      console.log("D");
  } else {
      console.log("F");
  }
}




/*Ques 18:
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
 
 var restaurant = {
   reviews : 0
 }
 if(reviews.restaurant == true){
   reviews.restaurant += 1;
 }else {
  reviews.restaurant = 1;
 }


 /* Ques 19:
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

let spaceIntoString = (word1, word2) => word1.concat(' ', word2);


/*Ques 20:
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

let circle = {
  circumference: (radius) => 2 * Math.PI * radius,
  area: (radius) => Math.PI * (radius ** 2)
}

console.log(circle.circumference(2));
console.log(circle.area(4));