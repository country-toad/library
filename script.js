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
addBooktoLibrary("book2", "fig", "30", false);
addBooktoLibrary("book1", "ray", "20", true);
addBooktoLibrary("book2", "fig", "30", false);
addBooktoLibrary("book1", "ray", "20", true);
addBooktoLibrary("book2", "fig", "30", false);
addBooktoLibrary("book1", "ray", "20", true);
addBooktoLibrary("book2", "fig", "30", false);
addBooktoLibrary("book1", "ray", "20", true);
addBooktoLibrary("book2", "fig", "30", false);
addBooktoLibrary("book1", "ray", "20", true);
addBooktoLibrary("book2", "fig", "30", false);
listLibraryBooks();
