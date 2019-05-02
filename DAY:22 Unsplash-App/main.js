const displayDiv = document.querySelector(".searchbyKeyword");

const galleryContainer = document.querySelector(".Gallery-container");

const searchInput = document.getElementById('search-input');
const searchTerm = searchInput.value;

if(navigator.onLine !== true){
  // document.write("Loading.....");
  internetError();
}

function display(obj){
  let html = '';
  obj.map(v => {
    console.log(v);
    html +=`<div class="contentBox">
    <div class="gallery-img">
      <img class="img-responsive" width="400px" height ="400px" src="${v.urls.small}" alt=""></div>
      
      <h1 class="headingText"></h1>
  </div>
  </div>`
  });
  galleryContainer.innerHTML = html ;
}
// <span class="img-items like"><i class="fas fa-heart"></i>${v.likes}</span>

//internetError function()

function internetError(){
	root.innerHTML = 
		`<h2 class="error">No internet connection.....</h2>
		`;
}

function dataFetch(){
	if(navigator.onLine === true){
		fetch("https://api.unsplash.com/photos/?client_id=f8947ccb82e9a297560983ee3aafebf79b44b1d24b63f8afe440fdf65f62f5f5").then(res => res.json()).then(data => display(data));
	} else {
		internetError();
	}
}
dataFetch();

// function for keyword search to display img

function displayByKeyword(array){
  console.log(displayDiv)

  const imgHTML = array.map(val => (
    `<div class="searchBox">
        <div class="search-img">
          <img class="img-responsive" width="400px" height ="400px" src="${val.urls.small}" alt="">
        </div>
          <h1 class="headingText"></h1>
      </div>
    </div>`
  )).join('');

  console.log(imgHTML)

  displayDiv.innerHTML = imgHTML;
}
function searchByKeyword(e) {
  if (e.keyCode == 13) {
    // console.log(searchTerm);
    fetch("https://api.unsplash.com/photos/?page=10&query=cat&client_id=f8947ccb82e9a297560983ee3aafebf79b44b1d24b63f8afe440fdf65f62f5f5").then(res => res.json()).then(data => displayByKeyword(data));
  }  
}
searchTerm.value = " ";
searchInput.addEventListener("keypress", searchByKeyword);

