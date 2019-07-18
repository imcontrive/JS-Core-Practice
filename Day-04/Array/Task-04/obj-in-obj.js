let myPenguin = {
  character : 'Whiteblack' , 
  origin : 'Whiteblack the Penguin Sees the World' , 
  author : ' 	H. A. Rey and Margret Rey',
  notes : "Children' book about a travelling penguin"
}
console.log(`Hello, I'm a penguin and my name is ${myPenguin.character}`);

// 1. Add a new property to your penguin called outfit and set it equal to another object with the following properties: hat, 
//shirt, pants, and shoes -- each property should have a string as its value! (I suggest you give it a baseball cap, Hawaiian 
//shirt, cargo shorts, and flip-flops, because wouldn't that be ridiculous?)


myPenguin.outfit = {
  hat : "baseball cap",
  shirt : "Hawaiian shirt",
  pants : "cargo shorts",
  shoes : "flip-flops"
}

// 2. Create a new variable called penguinHatType and set it equal to the value of the hat in your penguin's outfit! 
//Then print your new variable to the console.

let penguinHatType = myPenguin.outfit.hat ;
console.log(penguinHatType);

// 3. Without modifying any of your previous code, write one new line of code to add an accessory property to your penguin's 
//outfit and set it equal to the string "pocket watch" -- because penguins are classy like that!

myPenguin.outfit.accessory = "pocket watch";

// 4. Write one more line of code to change the hat in your penguin's outfit to "top hat" and override the previous value. 
//(Again, because penguins are classy!) 

penguinHatType =  "top hat";
console.log( penguinHatType);
// 5. This penguin is a freelancer who always works from home, so it doesn't actually need to wear any pants! 
//Let's delete the pants property from this penguin's outfit property. (Hint: see this page on the delete operator for examples.)

delete myPenguin.outfit.pants;
console.log(myPenguin.outfit.pants);

// 6. Write a for ... in loop to print the value of each piece of clothing in your penguin's outfit so you can see a list of clothing items in the console. (Hint: This is the same as step 31 from above, only now we're accessing values from a nested object!)

for (let i in myPenguin.outfit) {
  console.log(myPenguin.outfit["i"] = myPenguin.outfit[i]);
}

console.log(myPenguin.outfit);
/*  Exercise 5**********************************/
// For these last few challenges, I'll create three penguins for you to work with. Copy-paste this code snippet to the end 
//of your code:
var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  }
};
// 1.Create a new variable named penguins and set it equal to an array that lists these three penguins! 
//(Hint: remember you can put variable names inside an array, not just hard-coded values! And remember that variable names 
//don't have quotes around them.)

var penguins = [gunter , raman, fred];

// 2. Access the first penguin in the list and print it to the console using console.log() -- notice that you can see all the properties and methods of that object listed in the console! (Hint: remember that array indexes start counting at 0, not 1!)

console.log(penguins[0]);


// 3.Create a new variable called secondPenguin and set it equal to the second penguin in your penguins array.

var secondPenguin = penguins[1];

// 4 Print to the console the name of the last penguin in the list.

console.log(penguins[2]);

// 5. Remember the penguin you created earlier, with the variable name of myPenguin? Add that penguin to 
//the end of the penguins array!

penguins.push(myPenguin);
console.log(pengiuns);

// 6. Print the length of the penguins array to the console.
console.log(penguins.length);


// 7. Write one more line of code to change the first penguin's canFly property to the value true 
//(overriding its existing value).

penguins[0].canFly = true;
console.log( penguins[0].canFly );

// 8.Call the sayHello method of the first penguin in your penguins array!

console.log( penguins[0].sayHello() );
// 9.Write a for loop to iterate through every penguin in the array and print the value of each penguin's name property to the console.

for (let i in penguins) {
  console.log( penguins[i].character );
}


// 10.Write a for loop to call the sayHello method of every penguin in the array!
for (var i in penguins) {
  console.log( penguins[i].sayHello() );
}


// 11.Write a for loop to iterate through every penguin in the array, and add a new property to each penguin 
//called numberOfFeet with the value 2
for (var i in penguins) {
  console.log(penguins[i].numberOfFeet = 2);
}

// 12.Write another for loop to iterate through every penguin in the array, and for each penguin that can fly, 
//print to the console a message containing the penguin's name and " can fly!" -- for example, "Gunter can fly!" 
//or "Ramón can fly!" (Don't do anything for the penguins that cannot fly.)


for(let i in penguins){
  if(pengiuns[i].canfly = true){
    console.log(penguins[i].character + ' ' + 'can fly');
  }else {
    console.log(penguins[i].character + ' ' + "Don't do anything for the penguins that cannot fly.");
  }
}

