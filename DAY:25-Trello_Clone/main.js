const root = document.getElementById('root');

//board 
class Board {
  constructor(name){
    this.name = name,
  this.arrOfLists = []
}

//display
  display(elm) {
    elm.innerHTML = null;
    elm.innerHTML = `<h2>${this.name}</h2>`;
    let boardDiv = document.createElement("DIV");
    boardDiv.setAttribute("class","board");
    this.arrOfLists.forEach(list => {
      list.display(boardDiv);
    })

    elm.appendChild(boardDiv);
    let addList = document.createElement('DIV');
    let addListBtn = document.createElement('BUTTON');
    addListBtn.textContent = "+ADD anather LIST";
    addListBtn.addEventListener('click',() => this.replaceAddList(addList));
    addList.appendChild(addListBtn);
    boardDiv.appendChild(addList)

  }

  replaceAddList = (parent) =>{
    let Input = document.createElement('INPUT');
    let Btn = document.createElement('BUTTON')
    Btn.textContent="ADD LIST";
    Btn.addEventListener("click",() =>{
      if(!Input.value) return;
      this.createChild(Input.value)
      this.display(root);
;
    })
    parent.innerHTML = null;
    parent.appendChild(Input);
    parent.appendChild(Btn);

    

  }

  // add list
  createChild = (name) =>{
    const list = new List(name,this);
    this.arrOfLists.push(list);
  }

}

  //update


//list 
class List {
  constructor(name,Board_parent){
    this.name = name,
    this.arrOfCards = [],
    this.parentBoard = Board_parent
  }


  //display
  display(elm) {
    console.log("list disp check")
    let ListDiv = document.createElement("UL");
    ListDiv.innerHTML = `<h4>${this.name}</h4>`;
    ListDiv.setAttribute("class","List");
    this.arrOfCards.forEach(card => {
      card.display(ListDiv);
    })

    elm.appendChild(ListDiv);
    let addCard = document.createElement('DIV');
    let addCardBtn = document.createElement('BUTTON');
    addCardBtn.textContent = "+ADD anather Card";
    addCardBtn.addEventListener('click',() => this.replaceAddCard(addCard));
    addCard.appendChild(addCardBtn);
    ListDiv.appendChild(addCard)

  }
  // add a card
  replaceAddCard = (parent) =>{
    let Input = document.createElement('INPUT');
    let Btn = document.createElement('BUTTON')
    Btn.textContent="ADD Card";
    Btn.addEventListener("click",() =>{
      if(!Input.value) return;
      this.createChild(Input.value)
      this.parentBoard.display(root);
    })
    parent.innerHTML = null;
    parent.appendChild(Input);
    parent.appendChild(Btn);

    

  }

  createChild = (value) =>{
    const card = new Card(value,this,this.parentBoard);
    this.arrOfCards.push(card);
  }

  //delete
  deleteCard = (id) =>{
    let indexofCard = this.arrOfCards.reduce((acc,v,i) =>(v.id == id) ? i :acc ,-1)
    if(indexofCard != -1){
      console.log(indexofCard)
      this.arrOfCards.splice(indexofCard,1)
      this.parentBoard.display(root);
    } 
  } 
}
  //update
  


//cards
class Card {
  constructor(value,List_parent,Board_parent){
    this.value = value,
    this.parentBoard = Board_parent,
    this.parentList = List_parent,
    this.id = Date.now();
  }
  
  //display
  display(elm) {
    let cardLi = document.createElement("LI");
    cardLi.innerHTML = `<p>${this.value}</p>`;
    cardLi.setAttribute("class","card");
    var editBtn = document.createElement('BUTTON');
    editBtn.textContent = 'edit';
    var delBtn = document.createElement('BUTTON');
    delBtn.textContent = 'del'

    editBtn.addEventListener('click', () =>{
      cardLi.innerHTML=null;
      const Input = document.createElement('INPUT');
      Input.value = this.value;
     const Btn = document.createElement('BUTTON')
    Btn.textContent="change value";
    Btn.addEventListener("click",() =>{
      if(!Input.value) return;
      this.value = Input.value;
      this.parentBoard.display(root);

    })
    cardLi.appendChild(Input);
    cardLi.appendChild(Btn);
    })
    delBtn.addEventListener('click', () =>{
      console.log(this,this.parentList)
      let idTodel = this.id;
      this.parentList.deleteCard(idTodel);
    })
    cardLi.appendChild(editBtn)
    cardLi.appendChild(delBtn)




    elm.appendChild(cardLi);
  }
}

  //update
  //delete
  


  const Board1 = new  Board('BOARD 1 IS HERE')
  // const Board2 = new  Board('BOARD 2 IS HERE');
  Board1.display(root);
  