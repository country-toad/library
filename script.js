class Book {
  constructor(
    title = "Unknown",
    author = "Unknown",
    pages = 0,
    isRead = false
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.toggleReadStatus = function () {
      this.isRead = !this.isRead;
    };
  }
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
    bookDiv.dataset.id = i;
    libraryDiv.appendChild(bookDiv);

    const bookTitle = document.createElement("p");
    bookTitle.classList.add("book-info");
    bookTitle.textContent = "Title: " + book.title;
    bookDiv.appendChild(bookTitle);

    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("book-info");
    bookAuthor.textContent = "Author: " + book.author;
    bookDiv.appendChild(bookAuthor);

    const bookPages = document.createElement("p");
    bookPages.classList.add("book-info");
    bookPages.textContent = "Pages: " + book.pages;
    bookDiv.appendChild(bookPages);

    const bookIsRead = document.createElement("input");
    bookIsRead.type = "checkbox";
    bookIsRead.checked = book.isRead;
    bookIsRead.id = "book-" + i;
    bookDiv.appendChild(bookIsRead);
    const isReadLabel = document.createElement("label");
    isReadLabel.htmlFor = "book-" + i;
    bookIsRead.addEventListener("click", function () {
      myLibrary[this.parentElement.dataset.id].toggleReadStatus();
    });
    bookDiv.appendChild(isReadLabel);

    const deleteBookBtn = document.createElement("button");
    deleteBookBtn.type = "button";
    deleteBookBtn.textContent = "🗑️ Delete Book";
    deleteBookBtn.classList.add("delete-book");
    deleteBookBtn.addEventListener("click", function () {
      myLibrary.splice(this.parentElement.dataset.id, 1);
      listLibraryBooks();
    });
    bookDiv.appendChild(deleteBookBtn);
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

overlayElement.addEventListener("dblclick", disableOverlay);
closeFormButton.addEventListener("click", disableOverlay);
openFormButton.addEventListener("click", enableOverlay);
// Stops double-clicks on the input form from disabling overlay.
document
  .querySelector("form")
  .addEventListener("dblclick", (e) => e.stopPropagation());
