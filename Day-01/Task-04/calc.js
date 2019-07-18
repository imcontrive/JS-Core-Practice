function myFunction() {
  var x,y,z,operator;

   x = prompt("Plz Enter the first number");

   y = prompt("Plz Enter the second number");

  operator = prompt("Enter the Operator");

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

