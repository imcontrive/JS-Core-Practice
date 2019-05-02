function forEach(array,callback){
  // setTimeout(array.forEach(elem => callback(elem)),2000);
  array.forEach(elem => callback(elem));
}
function print(elem){
	setTimeout( () => console.log(elem),2000);
}
console.log("Hello World!")
forEach([1,2,3,4,5],print);
