
const dataWrapper = document.querySelector(".dataWrapper");

function display(obj){
  // console.log(obj.data);
  console.log(obj.data.children);
  let html = '';
  obj.data.children.map(v => {
    console.log(v);
    html += `<div class="post-container">
    <div class="post">
      <div class="votes">
        <i class="fas fa-long-arrow-alt-up text-center"></i>
        <span class="vote-count text-center">${v.data.ups}</span>
        <i class="fas fa-long-arrow-alt-down text-center"></i>
      </div>
      <div class="post-content">
        <div>
          <span class=posted-by></span>
          <h1 class="headingText">${v.data.title}</h1>
          <p class="title">
          ${truncateString(v.data.selftext, 300)}</p>
          <a href="#"></a>
        </div>
        <div class="post-action">
          <i class="fas fa-comment-alt">${v.data.num_comments + `comments`}</i>
          <span class="comment-number"></span>
          <span><i class="fas fa-share"></i>Share</span>
          <span><i class="fas fa-bookmark"></i>Save</span>
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>
    </div>
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
