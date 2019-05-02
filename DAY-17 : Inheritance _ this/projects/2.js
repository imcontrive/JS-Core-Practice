// The Cat

// Create an object that represents a cat. It should have properties for tiredness, hunger, lonliness and happiness
// Write methods that increase and decrease those properties.
// Write a method that prints out the cat's status in each area. (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
// Make the functions take arguments that increase or decrease arbitrary amounts


function CreateCat(name, tiredness, hunger, lonliness, happiness) {
  var cat = Object.create(catStatus);
  cat.name = name;
  cat.tired = tiredness;
  cat.hunger = hunger;
  cat.alone = lonliness;
  cat.happy = happiness;
  return cat;
}

let catStatus = {
  increaseProp: function(state, number) {
   switch(state) {
    case 'tired': this.tired += number;
    break;
    case 'hunger': this.hunger += number;
    break;
    case 'alone': this.alone += number;
    break;
    case 'happy': this.happy += number;
   }
   for(const key in this) {
    if (this[key] > 10) this[key] = 10;
   }
  },
  decreaseProp: function(state, number) {
    switch(state) {
      case 'tired': this.tired -= number;
      break;
      case 'hunger': this.hunger -= number;
      break;
      case 'alone': this.alone -= number;
      break;
      case 'happy': this.happy -= number;
    }
    for(const key in this) {
      if (this[key] < 0) this[key] = 0;
    }
  },
  checkStatus: function(number) {
    if (number == 0) {
      return `not`;
    } else if (number > 0 && number <= 3) {
      return `less`;
    } else if (number > 3 && number <= 6) {
      return `moderator`;
    } else if (number > 6 && number <= 9) {
      return `VERY`;
    } else if (number == 10) {
      return `extremely`;
    }
  },
  printStatus: function() {
    console.log(`${this.name} is ${this.checkStatus(this.tired)} tired`);
    console.log(`${this.name} is ${this.checkStatus(this.hunger)} hungry`);
    console.log(`${this.name} is ${this.checkStatus(this.alone)} alone`);
    console.log(`${this.name} is ${this.checkStatus(this.happy)} happy`);
  }
}


// 2nd
// An object-oriented book-list!

// Create a class BookList
// Create another class called Book

// BookLists should have the following properties:
  // 1. Number of books marked as read
  // 2. Number of books marked not read yet
  // 3. A reference to the next book to read (book object)
  // 4. A reference to the current book being read (book object)
  // 5. A reference to the last book read (book object)
  // 6. An array of all the Books

// Each Book should have several properties:
  // Title
  // Genre
  // Author
  // Read (true or false)
  // Read date, can be blank, otherwise needs to be a JS Date() object


// Every Booklist should have a few methods:
// .add(book)
  // should add a book to the books list.

// .finishCurrentBook()
  // should mark the book that is currently being read as "read"
  // Give it a read date of new Date(Date.now())
  // Change the last book read to be the book that just got finished
  // Change the current book to be the next book to be read
  // Change the next book to be read property to be the first unread book you find in the list of books


  class Booklist {
    constructor() {
      this.bookArray = [];
      this.read_count = 0;
      this.not_read = 0;
      this.next_book;
      this.current_book = 0;
      this.last_book = 0;
    }
    add(book) {
      this.bookArray.push(book);
      this.updateStatus();
    }
    updateStatus() {
      this.next_book = this.nextUnreadBook();
      this.read_count = 0;
      (this.bookArray).forEach((v, i) => {
        if (v.readState) this.read_count++;
      });
      this.not_read = this.bookArray.length - this.read_count;
    }
  
    finishCurrentBook() {
      if(!this.next_book) {
        console.log("BookList is Empty Add more Books to Read");
        return;
      }
      this.bookArray[this.current_book].readState = true;
      this.bookArray[this.current_book].readDate = new Date(Date.now());
      this.last_book = this.current_book;
      this.current_book = this.next_book;
      this.next_book = this.nextUnreadBook();
      this.updateStatus();
    }
    nextUnreadBook() {
      var index;
      for (let i = 0; i < this.bookArray.length; i++) {
        if (this.bookArray[i].readState == false && i != this.current_book) {
          index = i;
          break;
        }
      }
      return index;
    }
  
  }
  // Create another class called Book
  class Book {
    constructor(title, author, genre) {
      this.title = title;
      this.author = author;
      this.genre = genre;
      this.readState = false;
      this.readDate;
    }
  }
  let library = new Booklist();
  let book1 = new Book("Learn JAVA", "JTC", "SOM");
  library.add(book1);
  let book22 = new Book("learn HTML", "W3school", "ALT");
  library.add(book2);
  let book3 = new Book("SCSS", "TRICKS", "w3resources");
  library.add(book3);
