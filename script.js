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

let myLibrary = [];

function addBooktoLibrary(title, author, pages, isRead) {
  const currentBook = new Book(title, author, pages, isRead);
  myLibrary.push(currentBook);
}
// Loops through library arr and displays the values of each book
function listLibraryBooks() {
  // If library element exists, remove it
  if (document.querySelector(".library") !== null) {
    document.querySelector(".library").remove();
  }
  const libraryDiv = document.createElement("div");
  libraryDiv.classList.add("library");
  const containerDiv = document.querySelector(".container");
  containerDiv.appendChild(libraryDiv);

  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book-container");
    libraryDiv.appendChild(bookDiv);

    const bookTitle = document.createElement("div");
    bookTitle.textContent = book.title;
    bookDiv.appendChild(bookTitle);

    const bookAuthor = document.createElement("div");
    bookAuthor.textContent = book.author;
    bookDiv.appendChild(bookAuthor);

    const bookPages = document.createElement("div");
    bookPages.textContent = book.pages;
    bookDiv.appendChild(bookPages);

    const bookIsRead = document.createElement("div");
    bookIsRead.textContent = book.isRead;
    bookDiv.appendChild(bookIsRead);
  });
}

addBooktoLibrary("book1", "ray", "20", true);

const addBookButton = document.querySelector(".bookbtn");
addBookButton.addEventListener("click", (e) => {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const isread = document.querySelector("#isread");
  addBooktoLibrary(title.value, author.value, pages.value, isread.checked);
  e.preventDefault(); // Prevents button from trying to send form to a server
  listLibraryBooks();
});

listLibraryBooks();

overlayElement = document.querySelector(".overlay");

function enableOverlay() {
  overlayElement.style.display = "flex";
}

function disableOverlay() {
  overlayElement.style.display = "none";
}

overlayElement.addEventListener("dblclick", disableOverlay);
const formElement = document.querySelector("form");
formElement.addEventListener("dblclick", (e) => e.stopPropagation()); // Stops double-clicks on the input form from disabling overlay.

const newBookElement = document.querySelector(".new-book-btn");
newBookElement.addEventListener("click", enableOverlay);
