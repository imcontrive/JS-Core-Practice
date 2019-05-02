
 //Select the section with an id of container without using querySelector.

 var container = document.getElementById('container');

 //Select the section with an id of container using querySelector.
 
 var newContainer = document.querySelector('#container')
 
 //Select all of the list items with a class of "second".
 
 var  allListOfSecondClass= document.body.getElementsByClassName('second');
 
 //Select a list item with a class of third, but only the list item inside of the ol tag.
 var third = document.querySelector('ol').children[2];

 //Give the section with an id of container the text "Hello!".

//var container = document.getElementById('container');
//container.innerText = "Hello";

//Add the class main to the div with a class of footer.
var addClass = document.body.children[3].className += " main";

//Remove the class main on the div with a class of footer.
var remClass = document.body.children[3].classList.remove('main');

//Create a new li element.

var newElements = document.body.appendChild(document.createElement('li'))

//Give the li the text "four".

var addText = document.body.children[5].innerText = "four";


//Append the li to the ul element.

document.querySelector('ul').appendChild(document.body.children[4]);

//Loop over all of the list inside the ol tag and give them a background color of "green".

var list = document.querySelectorAll('ol')
list.map((val) => val.style.background = "green")

//Remove the div with a class of footer.

document.body.removeChild(document.body.children[2]);