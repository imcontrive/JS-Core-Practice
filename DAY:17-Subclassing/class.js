//CLASSES

class UserCreator {
  constructor(name ,score){
    this.name = name ;
    this.score = score ;
  }
  sayName() {
    this.name ;
  }
  incrementScore(){
    this.score++ ;
  }
}
let user1 = new UserCreator("shubham",200);

class PaidUserCreator extends UserCreator {
  constructor(name, score, balence){
    super(name,score,balance)
    this.balance = balance ; 
  }
  increaseBalence(){
    this.balance++;
  }
}

var user4 = new PaidUserCreator("sunny",2368,70908)