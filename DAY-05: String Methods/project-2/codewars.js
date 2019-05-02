function makePairs(str) {
  var newStr = str.split('');
  console.log(newStr);
  for(var i = 0; i  <= str.length-1 ; i++){
    if(str.length % 2 === 0){
          str[0] += str[i];
        console.log(str[0]);
    } else {
       newStr.push("_");
      }
  }
  return str[0];
}