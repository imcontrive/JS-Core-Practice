const text = document.querySelector('.todo-text');
const list = document.querySelector('.todo-list');
const listItem = [] ;

/**AddFunction() for AddList */

function addList(){

    const obj = {
        name :"" ,
        completed : false 
    }
    if (text.value) {
    obj.name = text.value;
    listItem.push(obj);
    console.log(listItem);
    }
}
console.log(listItem);

//Display function
function displayTodo(){
    list.innerHTML ="";
    listItem.forEach((elem, i) => {
        var li = document.createElement('li');
        var checkBox = document.createElement('input');
        li.innerText = elem.name;
        li.setAttribute('data-id', i);
        list.appendChild(li);
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('data-id', i);

        if(elem.completed === true){
            checkBox.setAttribute('checked', '');
            li.setAttribute('class' ,'marked')
        }
        checkBox.style.height = "20px";
        checkBox.style.width = "20px";
        checkBox.style.outline = "none";
        li.prepend(checkBox);
        checkBox.onclick = function(e) {
            listItem[e.target.dataset.id ].completed = !listItem[e.target.dataset.id ].completed;
            displayTodo();    
            }


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
        text.value = "";   
    }

text.addEventListener("keydown", eventListener);
function eventListener(e) {
    if (e.code == "Enter") {
        addList();
        displayTodo();
    }
}

