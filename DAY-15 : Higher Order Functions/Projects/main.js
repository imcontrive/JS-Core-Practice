// Challenge 1
function addTwo(num) {
  return num +2 ;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word.concat("s");
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  var arr = [];
  for(i=0; i < array.length; i++){
    // console.log(array[i]);
  arr.push(callback(array[i])); 
  }
  return arr;
}
function addTwo(n){
return n + 2;
}
console.log(map([1, 2, 3], addTwo));

// Challenge 4

function forEach(array, callback) {
  var arr = [];
  for(i=0; i < array.length; i++){
    // console.log(array[i]);
  arr.push(callback(array[i])); 
  }
}
console.log(forEach([1, 2, 3], addTwo));
// undefined
//undefined

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function clg(num){
  console.log(num*2);
}
function mapWith(array, callback) {
	array.forEach(elem => callback(elem));
}
mapWith([1, 2, 3], clg);

//Extension 2

function add(a, b) {
  return a + b;
}

function reduce(array, callback, initialValue) {
	return array.reduce((acc, value) => acc + value);
}

console.log(reduce([4, 1, 3], add, 0));
//Extension 3

function intersection(...arrays) { 
  return arrays.reduce((arr1, arr2) => arr1.filter(x => arr2.indexOf(x) != -1)); 
}
console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));

// should log: [5, 15]

//Extension 4
function union(...arrays) { 
  return arrays.reduce((arr1, arr2) => arr1.concat(arr2.filter(item => arr1.indexOf(item) === -1))); 
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));

// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function matchObj(str) {
  return str.toUpperCase();
}

function objOfMatches(array1, array2, callback) {
	return array1.reduce((acc, initVal, index) => {
    if(array2[index] === callback(initVal)) {
      acc[initVal] = array2[index];
    }
    console.log(`acc = ${acc}, initial value = ${initVal}, index = ${index}`);
    return acc;
  }, {});
}
console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6

function multiMap(arrVals, arrCallbacks) {
  return arrVals.reduce((acc, index) => {
    acc[index] = arrCallbacks.reduce((arr, func) => {
      arr.push(func(index));
      return arr;
    }, []);
    return acc;
  }, {});
}
console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
