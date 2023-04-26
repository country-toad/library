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

function listLibraryBooks() {
  const libraryDiv = document.querySelector(".library");
  const bookDiv = document.createElement("div");
  bookDiv.className = "bookcontainer";
  for (book in myLibrary) {
    console.log(myLibrary[book]);
    libraryDiv.appendChild(bookDiv);
  }
}

addBooktoLibrary("book1", "author", "20", true);
addBooktoLibrary("book2", "author", "30", false);
listLibraryBooks();
