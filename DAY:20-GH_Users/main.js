
const userName = document.querySelector(".input");

function view(data){
  console.log(data);
  const html = `<div class= "container">
    <img src="${data.avatar_url}"></img>
    <h1>${data.name}</h1>
     <p>${data.bio.trim()|| "Atleat Update your Bio."}</p>*/
    <button type="button" onclick="text()">Followers</button>
    <button type="button" onclick="alert(${data.following})">Following</button>
    </div>`

    const dataWrapper = document.querySelector(".dataWrapper");
    dataWrapper.innerHTML = html ;

}

function handelKey(event){
  if(event.keyCode === 13) {
    const {value} = userName ;

    const xhr = new XMLHttpRequest() ;

    xhr.addEventListener('load', () =>view(JSON.parse(xhr.response)));

    xhr.open('GET',`https://api.github.com/users/${value}`);

    xhr.send();
  }
}

userName.addEventListener('keyup',handelKey);
