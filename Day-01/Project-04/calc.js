function myFunction() {
  var x,y,z,operator;
  var x=prompt("Enter the first number");
  var y=prompt("Enter the second number");
  operator=prompt("Enter the Operator");
  if(operator==="+") {
     z=Number(x)+Number(y);
    
  }
  else if(operator==="-") {
     z=Number(x)-Number(y);
    
  }
  else if(operator==="*") {
     z=Number(x)*Number(y);
    
  }
  else if(operator==="/") {
     z=Number(x)/Number(y);
   
  }
  else if(operator==="NaN") {
    z=prompt("plz enter a valid operator");
    
  }
  return z;
}
alert(myFunction());

