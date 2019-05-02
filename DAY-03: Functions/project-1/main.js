// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Add an additional argument to the function that takes the conversion rate of human to dog years.

function calculateDogAge(age, conversion) {
    age = conversion / 7;
    console.log(`Your doggie is ${age} years old in dog years!`);
}
console.log(calculateDogAge(10, 10));

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amount) {
    let max_age = 65;
    amount += 365* (max_age - age) * amount;
    console.log(`You will need ${amount} to last you until the ripe old age of ${age}`);
}
console.log(calculateSupply(5, 2000.300));

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celcius = 0;
var fahrenheit = 0;
function celsiusToFahrenheit(temp) {
    celcius += (temp - 32) / 1.8;
    console.log(`${celcius}°C is ${fahrenheit}°F`);
}
celsiusToFahrenheit(35);
function fahrenheitToCelsius(temp) {
    fahrenheit += (celcius * 1.8) + 32;
    console.log(`${fahrenheit}°F is ${celcius}°C`);
}
fahrenheitToCelsius(35);


//1. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
    if (age > 18) {
    return true;
    } else {
    // ...
    return confirm('Did parents allow you?');
    }
}
  // Will the function work differently if else is removed?
  
function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Did parents allow you?');
}
// Is there any difference in the behavior of these two variants?
ans:-
//Both will work same in 1st one when age is less than 18 else statement will execute, 
//and in 2nd one when condition goes false then function will return some containing value.
  
  
// 2. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Do you have your parents permission to access this page?');
    }
}
// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
// Using a question mark operator ?

let checkAge = (age) => (age > 18) ? (`true`) : confirm('Do you have your parents permission to access this page?');
checkAge(10);

// // Using OR ||

function checkAge(age) {
    return age > 18 || confirm('Do you have your parents permission to access this page?');
}

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
   
function pow(x,n)
{
let result=1;
for(let i=0;i<n;i++) {
    result*= x;
    }
return result;
}

//{ Enter a string and the program counts the number of vowels in the text.For added complexity have it report a sum of each vowel found.}

var enterString = prompt('Enter the string');
function counts(vowels) {
    let numOfVowels = 0;
    for(var i=0; i<=enterString.length; i++) {
    console.log(enterString[i]);
        if (enterString[i] == 'a' || enterString[i] == 'e' || enterString[i] == 'i' || enterString[i] == 'o' || enterString[i] == 'u') {
            numOfVowels++;
        }
        else if (enterString[i] == 'A' || enterString[i] == 'E' || enterString[i] == 'I' || enterString[i] == 'O' || enterString[i] == 'U') {
            numOfVowels++;
        }
    }
    console.log("number of vowels : " + numOfVowels);
}
counts();


// Checks if the string entered by the user is a palindrome. That is that it reads the same forwards as backwards like “racecar”

function checkPalindrom(string) {
    str2 = string.toLowerCase().split('').reverse().join('');
    if(str2 === ""){
        console.error("enter the string");
    }else if(str2 == string.toLowerCase()){
        console.log(string + '   ' +' is   palindrom');
    }
}
console.log(checkPalindrom('racecar'));




// Counts the number of individual words in a string. For added complexity read these strings in from a text file and generate a summary.

var enterString = prompt('enter anything which is string');
var wordCount =  enterString.split('');
console.log(wordCount.length);


// Show the following output using one loop.
// 1, 2, 3, 4, 5
// 6, 7, 8, 9, 10

var sum1 = '';
var sum2 = '';
for(var i=1; i<=10 ;i++){
if(sum1.length <= 8){
    if(sum1.length == 0) { sum1 = sum1 + i }
    else sum1 = sum1 + ',' + i ;
} else {
    if(sum2.length == 0) { sum2 = sum2 + i }
    else sum2 = sum2 + ',' + i ;
    }
}
console.log(sum1 + '\n' + sum2);


// Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and 
//computing the product of 1,…,n.

var number = Number(prompt('Enter any number'));
var sum = 0 , product = 1;
function computingSum(number){
    for(var i=0;i<=number ; i++){
        sum += i;
    }
    return sum;
}
function computingProduct(number){
    for(var i=1;i<=number ; i++){
        product = product * i;
    }
    return product;
}
function computing(compute) {
if (compute === computingSum()){
    return computingSum();
}else if (compute===computingProduct()){
    return computingProduct();
}
}
alert(computing(computingSum(number)));
alert(computing(computingProduct(number)));

// Write a function that returns the largest element in a list.

let list = [10, 48, 78, 100, 5780];
function findLargest(number) {
    let largestNumber = 0;
    for(let v of list) {
        if (v > largestNumber) {
            largestNumber = v;
        }
    }
return largestNumber;
}

// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

let inputNum = Number(prompt('Enter any number'));
function checkNum(number) {
    return ( number * (number + 1) ) / 2;
}
console.log(checkNum(inputNum));

// Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

let inputNum = Number(prompt('Enter a valid number'));
var sum = 0; 
function checkNum(inputNum) {

    for(let i = 0; i <= inputNum; i++) {
        if ( i % 5 === 0 || i % 7 === 0 ) {
            sum = sum + i;
        }
    }
    return sum;
}
alert(checkNum(inputNum));

// Write a program that takes a number under (25) and prints the multiplication table for the number.

var inputNum = Number(prompt('Enter the number'));
function printTable(num) {
    if (num > 25) {
        console.log(`Please input number under 25`);
    }else if(num<=25){
    for (let i = 1; i <= 10; i++) {
        console.log(num * i);
        }
    }   
}
printTable(inputNum);

