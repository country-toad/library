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
let listedLibrary = [];

function addBooktoLibrary(title, author, pages, isRead) {
  const currentBook = new Book(title, author, pages, isRead);
  myLibrary.push(currentBook);
}

function listLibraryBooks() {
  if (document.querySelector(".library") !== null) {
    document.querySelector(".library").remove();
  }
  const libraryDiv = document.createElement("div");
  libraryDiv.classList.add("library");
  const containerDiv = document.querySelector(".container");
  containerDiv.appendChild(libraryDiv);

  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("bookcontainer");
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
  e.preventDefault();
  listLibraryBooks();
});

listLibraryBooks();
