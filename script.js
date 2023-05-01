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
  const libraryDiv = document.querySelector(".library");
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

    listedLibrary.push(myLibrary[book]);
  });
  myLibrary = [];
}

addBooktoLibrary("book1", "ray", "20", true);

const addBookButton = document.querySelector(".addbook");
addBookButton.addEventListener("click", function () {
  const title = "title";
  const author = "beans";
  const pages = "69";
  const read = true;
  addBooktoLibrary(title, author, pages, read);
  listLibraryBooks();
});

listLibraryBooks();
