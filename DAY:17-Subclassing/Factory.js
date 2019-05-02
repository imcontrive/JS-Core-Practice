// Factory pattern 

function userCreator(name, score){
  const user = Object.create(userMethods);
  user.name = name ;
  user.score= score ;
  return user;
}
var userMethods = {
  sayName :function() {
     this.name ;
  },
  incrementScore: function(){
    this.score++ ;
  }
}
var ankit = userCreator("ankit",95);
// {name: "ankit", score: 95}



// FOR PAIDUSER

function paidUserCreator(name,score,balance){
  const paidUser = Object.create(paidUserMethods);
  paidUser.name = name ;
  paidUser.score= score ;
  paidUser.balance = balance ;
  return paidUser;
}
var paidUserMethods = {
  incrementBalance: function(){
    this.balance++ ;
  }
}
Object.setPrototypeOf(paidUserMethods,userMethods);
var shashi = paidUserCreator("shashi",29 ,20000)

// shashi
// {name: "shashi", score: 29, balance: 20000}