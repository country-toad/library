function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function getInfo() {
    let pageString = "Not read yet";
    if (isRead) {
      pageString = "Read";
    }
    return `${title}, ${pages} pages, ${pageString}`;
  };
}

/*  Variables  */
let myLibrary = [];
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const isread = document.querySelector("#isread");
const addBookButton = document.querySelector(".bookbtn");
const openFormButton = document.querySelector(".open-form");
const closeFormButton = document.querySelector(".close-form");
const overlayElement = document.querySelector(".overlay");
const titleError = document.querySelector("#title + span.error");
const authorError = document.querySelector("#author + span.error");
const pagesError = document.querySelector("#pages + span.error");
const containerDiv = document.querySelector(".container");

addBooktoLibrary("a", "b", 12, true);
listLibraryBooks();

/*  Functions  */
function addBooktoLibrary(title, author, pages, isRead) {
  const currentBook = new Book(title, author, pages, isRead);
  myLibrary.push(currentBook);
}
// Loops through library arr and displays the values of each book
function listLibraryBooks() {
  // If library element exists, remove it
  if (document.querySelector(".library") !== null) {
    // updateBookValues();
    document.querySelector(".library").remove();
  }
  const libraryDiv = document.createElement("div");
  libraryDiv.classList.add("library");
  containerDiv.appendChild(libraryDiv);

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book-container");
    libraryDiv.appendChild(bookDiv);

    const bookTitle = document.createElement("p");
    bookTitle.textContent = "Title: " + book.title;
    bookDiv.appendChild(bookTitle);

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = "Author: " + book.author;
    bookDiv.appendChild(bookAuthor);

    const bookPages = document.createElement("p");
    bookPages.textContent = "Pages: " + book.pages;
    bookDiv.appendChild(bookPages);

    const bookIsRead = document.createElement("input");
    bookIsRead.type = "checkbox";
    bookIsRead.checked = book.isRead;
    bookIsRead.id = "book-" + i;
    bookDiv.appendChild(bookIsRead);
    const isReadLabel = document.createElement("label");
    isReadLabel.htmlFor = "book-" + i;
    bookDiv.appendChild(isReadLabel);
  }
}

addBookButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevents button from trying to send form to a server
  if (inputIsValid()) {
    addBooktoLibrary(title.value, author.value, pages.value, isread.checked);
    listLibraryBooks();
    resetForm();
    disableOverlay();
  }
});

function inputIsValid() {
  if (title.validity.valid && author.validity.valid && pages.validity.valid) {
    return true;
  } else {
    showError();
  }
}

function showError() {
  resetErrors();
  if (title.validity.valueMissing) {
    titleError.textContent = "Please enter a value.";
  }
  if (author.validity.valueMissing) {
    authorError.textContent = "Please enter a value.";
  }
  if (pages.validity.valueMissing) {
    pagesError.textContent = "Please enter a value.";
  }
}

function resetForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  isread.checked = false;
  resetErrors();
}

function resetErrors() {
  titleError.textContent = "";
  authorError.textContent = "";
  pagesError.textContent = "";
}

function enableOverlay() {
  overlayElement.style.display = "flex";
}

function disableOverlay() {
  overlayElement.style.display = "none";
}

// function updateBookValues() {
//   for (let i = 0; i < myLibrary.length; i++) {
//     const currentDOMBook = document.querySelector("#book-" + i);
//     myLibrary[i].isRead = currentDOMBook.checked;
//   }
// }

overlayElement.addEventListener("dblclick", disableOverlay);
closeFormButton.addEventListener("click", disableOverlay);
openFormButton.addEventListener("click", enableOverlay);
// Stops double-clicks on the input form from disabling overlay.
document
  .querySelector("form")
  .addEventListener("dblclick", (e) => e.stopPropagation());
