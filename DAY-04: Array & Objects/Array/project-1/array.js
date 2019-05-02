//1. Create an array named colors that contains five different names of colors as strings

var colors = ['pink', 'red', 'black' , 'yellow' ,'coral'];

//2. Access the first color in the array and print it to the console using console.log()

console.log(colors[0]);

//3.Now do the same with the third color in the list. (Remember that array indexes start at 0, not at 1!)

console.log(colors[2]);


//4.Write one line of code that changes the value of the last color in the list to "ultraviolet" (overwriting the previous value).

color[4]="ultravoilet";
console.log(colors[4]);


//5. Create a new variable called fourthColor and set it equal to the fourth color in the list.

let fourthColor= colors[3];
console.log(fourthColor);

//6.Add another color to the end of the list.

colors.push("green");
console.log(colors);

//7.Add another color to the beginning of the list.

colors.unshift("blue");
console.log(colors);


//8. Print the length of the array to the console with console.log()
console.log(colors.lenth);

//9.Remove the last color from the end of list, and then print the length of the array to the console one more time.

colors.pop();
console.log(colors.lenth);

//10.Write a for loop to iterate through every color in the array and print each color's value to the console.

for(let i=0; i<=colors.length; i++){
console.log(colors[i]);
}

//11.Copying from that loop you just wrote, modify it to print every color's value and every color's index in this format: 3, purple or 0, blue etc.


for(let i=0; i<=colors.length; i++){
    console.log(`${i}, ${colors[i]}`);
}


//12.Create a variable named lastColor that will always point to the last element 
//of the colors array, no matter how many colors are in the list. (Hint: make use of the array's length property for this!)

let lastColor = colors[color.lenth-1];
console.log(lastColor);