//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
function findLongestWord(words) {
 var sorted =  words.sort((a, b) => b.length > a.length);
 console.log(sorted)
}  
console.log(findLongestWord(words)); 
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.
var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumArray(numbers1) {
  var sum = numbers1.reduce((total, num) => {
      return total += num;
  })
  console.log(sum);
}
console.log(sumArray(numbers1)); //87

var calcAvg = (numbers1)/(numbers1.length-1);
console.log(calcAvg);

//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(numbers2) {
  var sum = 0, avr = 0;
  for(let i in numbers2) {
      sum += numbers2[i];
      avr = sum / numbers2.length;
  }
  console.log(avr);
} 
console.log(averageNumbers(numbers2));



//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
  ];
function averageWordLength(words2) {
  var count = 0;
  var sum = 0;
  var avr = 0;
  for(let i in words2) {
      count++;
      sum += words2[i].length;
      avr = sum / words2.length;
  }
  console.log(avr);
}
console.log(averageWordLength(words2));

