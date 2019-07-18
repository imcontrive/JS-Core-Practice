// Array inside Object
let myPenguin = {
  character : 'Whiteblack' , 
  origin : 'Whiteblack the Penguin Sees the World' , 
  author : ' 	H. A. Rey and Margret Rey',
  notes : "Children' book about a travelling penguin"
}
console.log(`Hello, I'm a penguin and my name is ${myPenguin.character}`);

//1. add a new property to your pengiun called favouriteFoods and set it equal to an array containing a list of three Strings

myPenguin.favouriteFoods = ['momos', 'aloo-Tikki', 'burger'];
console.log(myPenguin);

//2.. Access your penguin's second favorite food and print it to the console using console.log()

console.log(myPenguin.favouriteFoods[1]);

//3. Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.

var firstFavFoods= myPenguin.favouriteFoods[0];
console.log(firstFavFoods);

//4. Add another food to the end of the list.

myPenguin.favouriteFoods.push('pizza');
console.log(myPenguin.favouriteFoods);


// 5. Print the length of your penguin's favoriteFoods array to the console with console.log()

console.log(myPenguin.favouriteFoods.length);

//6.Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to "pineapples" (overwriting the previous value).

myPenguin.favouriteFoods[3] = 'pineapples';
console.log(myPenguin.favouriteFoods);

//7. Create a new variable named lastFavFood that will always point to the last element of your penguin's favoriteFoods array, 
//no matter how many items are in the list. (Hint: this is essentially the same problem as step 18 from above.)

var lastFavFoods = myPenguin.favouriteFoods[myPenguin.favouriteFoods.length - 1];

/*8. Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console. 
(Hint: This loop will look exactly the same as the one you wrote for step 16 above, except now you're accessing the array as a 
property of an object.)*/

for( var i=0 ; i < myPenguin.favouriteFoods.length ; i++){
   console.log(myPenguin.favouriteFoods[i]);
}




