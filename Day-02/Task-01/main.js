// Get two values from the user ‘password’ and ‘confirm password’  using the prompt box and display a message “Password validated” if both the values match else display the message “Password do not match”

var password = prompt('Enter your password');
var confirmPassword = prompt('confirm password');
if (password === confirmPassword) {
    alert("Password Matched");
} else {
    alert("Plz Enter a valid Password");
}

( alert(1) || 2 || alert(3) );
// 1 and 2

// Create a function which takes two input and (a,b) and display the sum, sub, multiplication, devision of those two numbers.

function operation(x, y) {
    console.log(x + y);
    console.log(x - y);
    console.log(x * y);
    console.log(x / y);
}
operation(7, 9);

// Function to display a number if user enters negative number

function displayNum(num) {
  if (num < 0) {
      console.log(num);
  } else {
      console.log('Please enter negative number');
  }
}
displayNum(-1);

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
let sum = 0;
for (var i = 1; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum = sum + i;
    }
}
console.log(sum);

// If user enters positive number, that number won't be displayed

let displayNumber = prompt('Enter the number');
function displayNum(num) {
    if (num < 0) {
       return num;
    } else {
      return "None";
    }
}
var alertNum = displayNum(displayNumber);
alert(alertNum);

// Funnction to check whether an integer entered by the user is odd or even.

let inputNum = prompt('Enter the number');
function displayNum(num) {
    if (num % 2 == 0) {
       return even;
    } else {
        return  odd;
    }
}
var alertNum = displayNum(inputNum);
alert(alertNum);

//vowels

var inputChar = prompt("Enter Character");
function checkChar(char) {
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
      return char + ' is vowel';
    } else if(char == "A" || char == "E" || char == "I" || char == "O" || char == "U"){
      return char + ' is  vowel';
    } else {
      return char + 'is consonant';
    }
}
var printChar = checkChar(inputChar);
alert(printChar);

// Function to Find the Largest Number Among Three Numbers

function largestNumber(x, y, z) {
  if (x > y && x > z) {
      return x;
  } else if (y > x && y > z) {
      return y;
  } else {
      return z;
  }
}
largestNumber(1, 2, 3);

// // You are given a variable, . Your task is to print:
// // - ONE, if num is equal to 1.
// // - TWO, if num is equal to 2.
// // - THREE, if num is equal to 3.
// // - FOUR, if num is equal to 4 .
// // - FIVE, if num is equal to 5.
// // - SIX, if num is equal to 6.
// // - SEVEN, if num is equal to 7.
// // - EIGHT, if num is equal to 8.
// // - NINE, if num is equal to 9.
// // - PLEASE TRY AGAIN, if  is none of the above.

function myFunction(count) {
  switch(count) {
      case 1:
          console.log("ONE");
          break;
      case 2:
          console.log("TWO");
          break;
      case 3: 
          console.log("THREE");
          break;
      case 4:
          console.log("FOUR");
          break;
      case 5:
          console.log("FIVE");
          break;
      case 6:
          console.log("SIX");
          break;
      case 7:
          console.log("SEVEN");
          break;
      case 8:
          console.log("EIGHT");
          break;
      case 9:
          console.log("NINE");
      default:
          console.log("PLEASE TRY AGAIN");
  }
}
myFunction(10); 

//Marks grading system

let marks = 90;

if (marks > 90) {
    console.log(`AA`);
} else if (marks > 80 && marks <= 90) {
    console.log(`AB`);
} else if (marks > 70 && marks <= 80) {
    console.log(`BB`);
} else if (marks > 60 && marks <= 70) {
    console.log(`BC`);
} else if (marks > 50 && marks <= 60) {
    console.log(`CC`);
} else if (marks > 40 && marks <= 50) {
    console.log(`CD`);
} else if (marks > 30 && marks <= 40) {
    console.log(`DD`);
} else {
    console.log(`FF`);
}

// Function to generate Multiplication Table of a given number (use alert for number input)

let inputNum = prompt('Enter the number');
for (let i = 1; i <= 10; i++) {
    console.log(inputNum * i);
}

// Function to calculate the Factorial of a Number

let num = prompt('Enter the number');
function factorial(num) {
    let total = 1;
    for (let i = 1; i <= num; i++) {
        total = total * i;
    }
	alert('factorial of ' +num + ' = ' + total);
}
factorial(num);

//  Solve: 225 % 6 = ?

let x = 225;
let y = 6;
let z = 225 % 6;
console.log(z); 

// Take two numbers and what to do with that number from user.
// Define an object with these function (add, sub, multiply, divide). Perform the operation

var operation = {
  add: function(a, b) {
      return a + b;
  },
  substract: function(a, b) {
      return a - b;
  },
  multiply: function(a, b) {
      return a * b;
  },
  divide: function(a, b) {
      return a / b;
  }
}

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

  let x = 0 , y = 0 , z ;
    for(var i = 0;i<10; i++){
      z= x + y;
      x = y;
      y = z;
    console.log(z);
    }

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

let x = 0;
let y = 1;
let z ;
let sum = 0;
while (y < 4000000) {
    z= x + y;
    x = y;
    y = z;
    if (y % 2 == 0) {
      sum += y;
    }
  }
  console.log(sum);

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.
function helloWorld(lang) {
  switch(lang) {
    case "es" :
      console.log('Saluton mondo');
      break;

    case "de" : 
    console.log('Hallo Welt');
    break;

    default : 
      console.log('hello world');
  }
}
// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
function greaterNum(x , y) {
  enterString
  if(Number(x) < Number(y)) {
    console.log("greater number is  :  " + Number(y));
  }else {
    console.log("greater number is  :  " + Number(x));
  }
}

// Write a function named assignGrade that:
  function assignGrade(score){
  if(score > 95){
    return 'A';
  }
  else if(score > 85){
    return 'B';
  }
  else if(score > 75){
    return 'C';
  }
  else if(score > 65){
    return 'D';
  }else if(score < 45){
    return 'F';
  }
  console.log(assignGrade(score));
}

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for(var i=0; i<=20; i++){
  if(i%2===0){
    console.log(i + ' is even');
  }
  else {
    console.log(i + ' is odd');
  }
}

//Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

let multiplier= 9;
for(i=0; i<=10; i++){
  let result=multiplier * i;
  console.log(multiplier + ' * ' + i + ' = ' + result);
}

// Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for(var i = 1; i<=10; i++) {
  for(var j= 1; j<=10 ;j++){
    let result=j * i;
    console.log(i + ' * ' + j + ' = ' + result);
  }
}

