function nonsense(string){
  var blab = function(){
  alert(string);
  };
 alert(blab());
} 
// nonsense("shubh is here!");

// 1. 

function nonsense(string){
  var blab = function(){
  alert(string);
  };
 setTimeout(blab,2000);
} 
nonsense("shubh is here!");

//2. 

function nonsense(string){
  var blab = function(){
  return string;
  };
  var blabLater = blab();
  var blabAgainLater = blabLater;
  console.log(blabLater);
  // blabLater();
  // blabAgainLater();
  console.log(blabAgainLater);
} 
nonsense("shubh is here!")
nonsense("I'm here!")


/**
 *  Write a function with a closure. The first
 *  function should only take one argument, 
 * someone's first name, and the inner function 
 * should take one more argument, someone's last 
 * name. The inner function should console.log both
 *  the first name and the last name.
 */
var lastNameTrier = function(firstName){
  var innerFunction = function(lastName) { 
   return firstName + lastName;
  };
  return innerFunction ;
}
var firstNameFarmer = lastNameTrier('Farmer');
firstNameFarmer('Brown');
//Farmer + Brown 

/**
 *  Create a `storyWriter` function that returns an object with 
 * two methods. One method, `addWords` adds a word to your story
 *  and returns the story while the other one, `erase`, resets 
 * the story back to an empty string. Here is an implementation:
 */

var FarmLoveStory = function storyWriter() {
	var story = '';
	return {
		addwords: function(string) {
      story += string; 
      // console.log(story);
			return story;
		},
		erase: function() {
      story = '';
      // console.log(story);
		}
  } 
}
var result = FarmLoveStory();
result.addwords('Hello you the best thing to happen');
result.erase();