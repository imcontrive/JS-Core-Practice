//function for digital clock

function startTime() {
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
m = checkTime(m);
s = checkTime(s);
document.getElementById('txt').innerHTML =
h + ":" + m + ":" + s;
var t = setTimeout(startTime, 500);
}
startTime();

function checkTime(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}

//  CODE FOR COPY TO CLIPBOARD 

let _dataString;

const copiedText= document.querySelector('.ansText p').innerHTML;
const copiedText2 = document.querySelector('.ansText span').innerHTML;

// console.log(copiedText);
const dataText =  copiedText.concat(copiedText2);
console.log( dataText);
function copyHandler(e){
  e.preventDefault();
  e.clipboardData.setData("text/plain", _dataString);
}

function copyToClipboard(allText) {
  _dataString =allText;
  document.addEventListener("copy", copyHandler);
  document.execCommand("copy");
  document.removeEventListener("copy", copyHandler);
}
