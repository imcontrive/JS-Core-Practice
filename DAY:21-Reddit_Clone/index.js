
const dataWrapper = document.querySelector(".dataWrapper");

function display(obj){
  // console.log(obj.data);
  console.log(obj.data.children);
  let html = '';
  obj.data.children.map(v => {
    console.log(v);
    html +=`<div class="contentBox">
    <h1 class="headingText">${v.data.title}</h1>
    <p class="contentPara">
    ${truncateString(v.data.selftext, 300)}
    </p>
  </div>`
  });
  dataWrapper.innerHTML = html ;
  // <small class="smallpara">${v.data.selftext}</small>${v.data.selftext}
}

// CREATE INSTANCE function 

function dataFetch(){
  let xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => display(JSON.parse(xhr.response)));
  xhr.open('GET',`https://www.reddit.com/r/javascript/.json`);
  xhr.send();
}
dataFetch();

// Truncate String Function
function truncateString(myString, limit) {
  const shortened = myString.indexOf(' ', limit);
  if (shortened == -1) return myString;
  return myString.substring(0, shortened);
}
