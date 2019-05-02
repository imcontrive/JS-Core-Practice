const ul = document.querySelector('.books');
const inputText = document.querySelector('.book-input');
function revisedRandId() {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(2, 10);
}

let mainBooks = [
  {
    name: 'Don Quixote by Miguel de Cervantes',
    id: revisedRandId(),
    isReading: false,
  },
  {
    name: 'In Search of Lost Time by Marcel Proust',
    id: revisedRandId(),
    isReading: false,
  },
  {name: 'Ulysses by James Joyce', id: revisedRandId(), isReading: false},
  {name: 'The Great Gatsby', id: revisedRandId(), isReading: false},
  {name: 'Moby Dick', id: revisedRandId(), isReading: false},
];
var handler = {
  set: function(obj, key, value) {
    console.log(obj, key, value);
    obj[key] = value;
    displayBooks(ul, books);
    return true;
  },
};
let books = new Proxy(mainBooks, handler);

function displayBooks(parentElm, data = []) {
  parentElm.innerHTML = data
    .map(
      book =>
        `<li data-id=${book.id}><input data-id=${
          book.id
        } class="check" type="checkbox" ${book.isReading ? 'checked' : ''} />${
          book.name
        }<span data-id=${book.id} class="delete">x</span></li>`,
    )
    .join('');
}

displayBooks(ul, books);

function addBook(e) {
  if (e.keyCode !== 13) return;
  const book = {name: inputText.value, id: revisedRandId(), isReading: false};
  books.push(book);
}
function toggleCheck(e) {
  if (e.target.className !== 'check') return;
  const id = e.target.dataset.id;
  const index = books.findIndex(book => book.id === id);
  books[index] = {...books[index], isReading: !books[index].isReading};
}

// delete pseudocode
// If user click on span with class of delete
ul.addEventListener('click', deleteBook);
function deleteBook(e) {
  if (e.target.classList.contains('delete')) {
    const bookId = e.target.dataset.id;
    // console.log('in delete', bookId);
    const index = books.findIndex(book => book.id === bookId);
    books.splice(index, 1);
  }
}

inputText.addEventListener('keyup', addBook);
ul.addEventListener('click', toggleCheck);