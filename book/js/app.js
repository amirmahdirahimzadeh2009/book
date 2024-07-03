let bookLists = [];
const form = document.querySelector(".form");
const deleteBook = document.querySelector("#delete-book");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const bookName = document.getElementById("bookName").value;
  const writer = document.getElementById("writer").value;
  const price = document.getElementById("price").value;
  const genre = document.getElementById("genre").value;
  const book = {
    bookName: bookName,
    writer: writer,
    price: price,
    genre: genre,
  };
  console.log(book);
  bookLists.push(book);
  displayBooks(bookLists);
  form.reset();
});
