const myLibrary = []
const bookShelf = document.getElementById('book-shelf');
const addBookButton = document.getElementById('add-book-button');
const addBookModal = document.getElementById('add-book-modal');
const closeSpan = document.getElementsByClassName('close')[0];
const addBookSubmit = document.getElementById('add-book-submit');
// document.getElementById('form-div').style.display = 'none';

function Book(title, author, length, read) {
    this.title = title
    this.author = author
    this.length = length
    this.read = read
    this.info = function() {
        let finished;
        if (read) {
            finished = 'read'
        }
        else {
            finished = 'not read yet'
        }
        return `${this.title} by ${this.author}, ${this.length} pages, ${finished}`
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    myLibrary.forEach(book => {
        displayBook(book);
    })
}

function displayBook(book) {
    const bookDisplay = document.createElement('div');
    bookDisplay.setAttribute('class', 'card');
    bookDisplay.setAttribute('id', myLibrary.indexOf(book));
    const finished = document.createElement('input');
    finished.setAttribute('type', 'checkbox');
    finished.style.display = 'inline';
    finished.addEventListener('click', function(evt) {
        markRead(myLibrary.indexOf(book))
    })

    finished.checked = book.read;

    bookDisplay.innerHTML = 
        `<h3>${book.title}</h3>
        <p>by ${book.author} - ${book.length} pages</p>
        Read? `

    bookDisplay.appendChild(finished);
    
    
    const deleteButton = document.createElement('button');
    deleteButton.style.float = 'right';
    deleteButton.innerText = 'Remove';
    deleteButton.addEventListener('click', function(evt) {
        const bookId = evt.target.parentNode.id;
        removeBook(bookId);
    })
    bookDisplay.prepend(deleteButton);

    bookShelf.appendChild(bookDisplay);
}

function removeBook(bookId) {
    const bookToDelete = document.getElementById(bookId);
    bookToDelete.style.display = 'none';
    
    setTimeout(() => {
        if (confirm('Book removed. Press "Cancel" to undo')) {
            bookToDelete.remove();
        }
        bookToDelete.style.display = 'block';
    }, 0);
}

function markRead(bookId) {
    const targetBook = myLibrary[bookId];
    console.log('line 81', targetBook.read);
    if (targetBook.read == true) {
        targetBook.read = false;
    } else {
        targetBook.read = true;
    }
}

addBookButton.addEventListener('click', function(evt) {
    addBookModal.style.display = 'block';
})

window.onclick = function(evt) {
    if (evt.target == addBookModal) {
        addBookModal.style.display = 'none';
    }
}

addBookSubmit.addEventListener('click', function(evt) {
    addBookModal.style.display = 'none';
    createBookFromInput();
})


const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', false);
const prideAndPrejudice = new Book('Pride and Prejudice', 'Jane Austen', '186', true);
const wheresWaldo = new Book("Where's Waldo", 'Sir Arthur Conan Doyle', '5', false);

addBookToLibrary(theHobbit);
addBookToLibrary(prideAndPrejudice);
addBookToLibrary(wheresWaldo);
console.log(theHobbit.info());

displayLibrary();


function createBookFromInput() {
    console.log(document.getElementById('finished').value);
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('author').value;
    let length = document.getElementById('book-length').value;
    let read;
    if (document.getElementById('finished').checked) {
        read = true;
    }
    const newBook = new Book(title, author, length, read);
    addBookToLibrary(newBook);
    displayBook(newBook);
}
