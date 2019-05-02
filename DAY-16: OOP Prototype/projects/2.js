// Define a constructor function called Person which takes three arguments
//(name, yearOfBirth, job) Initiate the properties

function Person(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}
// Define a function name calculateAge which returns the age of the person

Person.prototype.calculateAge = function() {
  let date = new Date();
  let year = date.getFullYear();
  return year -= this.yearOfBirth;
}

// Use constructor function to make three objects with different values for example ('John', 1990, 'teacher')

var Ankit = new Person('Ankit', 2010, 'Web Developer');

var Shubh= new Person('Shubh', 2018, 'Developer');

var Shashi = new Persone('Shashi', 1990, 'Web Developer');

// call the calculateAge function on each object

console.log(`${Ankit.name} is ${Ankit.calculateAge()} years old and he is a ${Ankit.job}`);
console.log(`${Shubh.name} is ${Shubh.calculateAge()} years old and he is a ${Shubh.job}`);
console.log(`${Shashi.name} is ${Shashi.calculateAge()} years old and she is a ${Shashi.job}`);