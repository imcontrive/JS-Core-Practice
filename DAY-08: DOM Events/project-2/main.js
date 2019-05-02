function myFunction() {
  var formate = "#******";
  var arr = ["a","b","c","d","e","f","1","2","3","4","5","6","7","8","9"];
  arr.forEach(v => {
    formate = formate.replace("*", arr[Math.floor(Math.random()* arr.length)])
  });
  var container = document.querySelector('.container');
  container.style.backgroundColor = formate;
}
document.addEventListener('click',myFunction);
myFunction();