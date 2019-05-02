// pseudoclassical Pattern



var UserCreator = function(name ,score){
  this.name = name ;
  this.score = score;
}

UserCreator.prototype.sayName = function(name) {
  return `I am ${this.name}` ;
}
UserCreator.prototype.increment = function(score) {
  return this.score++ ;
}

// var shubh = new UserCreator("shubham",98);


PaidUserCreator.prototype = Object.create(UserCreator.prototype);

function PaidUserCreator(name,score,balance){
  UserCreator.call(this,name,score);
  this.balance = balance ;
  
}
PaidUserCreator.prototype.incrementBalance = function(balance){
  return this.balance++;
}

// Object.setPrototypeOf(PaidUserCreator.prototype , UserCreator.prototype);
var shubh =new PaidUserCreator("shubham", 33, 33333)

