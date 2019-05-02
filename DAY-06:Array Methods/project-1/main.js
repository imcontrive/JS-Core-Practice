var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];

/***
 * Find largest number in numbers
 */
function findLargest(numbers) {
  var sortNum = numbers.sort(function(a, b){return b-a});
  return sortNum[0];
}
findLargest([1,12,4,18,9,7,11,3,101,5,6]); //101
/***
 * Find largest number in numbers
 */
function findLargest(str) {
  var sortStr = str.sort(function(str1, str2){return str2.length - str1.length});
  // console.log(sortStr);
  return sortStr[0];
}
findLargest(['this','is','a','collection','of','words']); //collection

/**
 * find all the even numbers
 */
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var evenNum = numbers.filter(function(numbers){
  return (numbers % 2 === 0);
});
console.log(evenNum);
console.log(evenNum.sort(function(a ,b){return a-b}));

/***
 * Find all the odd numbers
 */
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var oddNum = numbers.filter(function(numbers){
  return (numbers % 2 !== 0);
});
console.log(oddNum);
console.log(oddNum.sort(function(a ,b){return a-b}));

// Find all the words that includes 'is' use string method 'contains'

var strings = ['this','is','a','collection','of','words'];
var contain = strings.filter(function(strings){
  return (strings.includes('is'));
});
console.log(contain);

// Find all the words that includes 'is' use string method 'indexOf'

var strings = ['this','is','a','collection','of','words'];
 function findIndex(strings){
 return  strings.indexOf('is');
 }
 console.log(strings.indexOf('is'));


// Check if all the numbers in numbers array are divisible by three use array method (every)
var numbers = [1,12,4,18,9,7,11,3,101,5,6];

function checkThree(numbers) {
  return (numbers % 3 === 0);
}
console.log(numbers.every(checkThree)); //false

//  Sort Array from smallest to largest

function smallestToLargest(numbers) {
  var sortNum = numbers.sort(function(a, b){return a-b });
  return sortNum ;
}
smallestToLargest([1,12,4,18,9,7,11,3,101,5,6]);


// Remove the last word in strings
var strings = ['this','is','a','collection','of','words'];
  strings.pop();
  console.log(strings);

// Add a new word in the array

var strings = ['this','is','a','collection','of','words'];
strings.push('shubh');
console.log(strings); //["this", "is", "a", "collection", "of", "words", "shubh"]


// Remove the first word in the array
var strings = ['this','is','a','collection','of','words'];
  strings.shift();
  console.log(strings);
  //["is", "a", "collection", "of", "words"]


// Place a new word at the start of the array use (upshift)
var strings = ['this','is','a','collection','of','words'];
strings.unshift('altCampus');
console.log(strings); //["altCampus", "this", "is", "a", "collection", "of", "words"]

// Make a subset of numbers array [18,9,7,11]
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var subArray = numbers.splice(3,4);
console.log(subArray); // [18, 9, 7, 11]

// Make a subset of strings array ['a','collection']
var strings = ['this','is','a','collection','of','words'];
var subArray = strings.splice(2,2);
console.log(subArray); // ["a", "collection"]


// Replace 12 & 18 with 1221 and 1881

var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var newNum = numbers.toString();
newNum = newNum.replace(12,1221);
newNum = newNum.replace(18,1881);
newNum = Number(newNum)
 console.log(newNum); 
 //----->>>>>>>> alternate 
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 12) {
        numbers[i] = 1221;
    } else if (numbers[i] == 18) {
        numbers[i] = 1881;
    }
}
console.log(numbers);


// Replace words with string in strings array
var strings = ['this','is','a','collection','of','words'];
for (let i = 0; i < strings.length; i++) {
  if (strings[i] == 'words') {
    strings[i] = 'string'
  }
}
console.log(strings);

// Customers Array
var customers = [
  { firstname : 'Joe', lastname : 'Blogs'},
  { firstname : 'John', lastname : 'Smith'},
  { firstname : 'Dave', lastname : 'Jones'},
  { firstname : 'Jack', lastname : 'White'}
];
// Find all customers whose firstname starts with 'J'
customers.forEach(item => {
  if((item['firstname'][0] === "J" || item['firstname'][0] === "j")){
   console.log(item);
  }
});
// Create new array with firstname and lastname

let newArray = customers.map(v => `${v.firstname} ${v.lastname}`);
console.log(newArray);

// Sort the array created above alphabetically

let sortArray = newArray.sort();
console.log(sortArray);
//["Dave Jones", "Jack White", "Joe Blogs", "John Smith"]
