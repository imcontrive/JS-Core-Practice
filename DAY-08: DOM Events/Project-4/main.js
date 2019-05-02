const text = document.querySelector('.todo-text');
const list = document.querySelector('.todo-list');
// add 

// let listItem = JSON.parse(localStorage.getItem('todos')) || [];
let listItem = [] ;
function addList() {
    let Obj = {
        name : "",
        completed : false 
    }
    Obj.name = text.value;
    listItem.push(Obj);
    // localStorage.setItem('todos', JSON.stringify(listItem));
}

/// Display List
function displayTodo(){
    // if (text.value) {
        list.innerHTML ="";
        listItem.forEach((elem, i) => {
            var li = document.createElement('li');
            var checkBox = document.createElement('input');
          li.innerText = elem.name;
          li.setAttribute('data-id', i);
          list.appendChild(li);
          checkBox.setAttribute('type', 'checkbox');
          checkBox.setAttribute('data-id', i);
          checkBox.setAttribute('checked', '');
          if(elem.checked === true){
              li.setAttribute('class' ,'marked')
          }
          checkBox.style.height = "20px";
          checkBox.style.width = "20px";
          checkBox.style.outline = "none";
          li.prepend(checkBox);
          checkBox.checked = false;

          // Delete button

          var deleteBtn = document.createElement('button');
          deleteBtn.innerText = "X";
          deleteBtn.setAttribute('data-id', i);
          li.appendChild(deleteBtn);
          deleteBtn.onclick = function(e) {
              console.log('hello',e)
              listItem.splice(e.target.dataset.id ,1);
              displayTodo();    
              }
          })    
        // })
        text.value = "";
    // }
}
//  Press Enter to Save Texts In Lists
function eventListener(e) {
    if (e.code == "Enter") {
        addList();
        displayTodo();
    }
}
displayTodo();
text.addEventListener("keydown", eventListener);

// Function for MVC Feature's
