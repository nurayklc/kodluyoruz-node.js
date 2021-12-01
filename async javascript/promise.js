/* const promise = new Promise((resolve, reject) => {
  resolve("Veriler alındı")
  reject("Error");
});

//console.log(promise)

promise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
 */

const books = [
  { bookName: "Suç ve Ceza", author: "Dostoyevski" },
  { bookName: "Kavgam", author: "Adolf Hitler" },
  { bookName: "Bir İdam Mahkumunun Son Günü", author: "Victpr Hugo" },
];

const listBooks = () => {
  books.map((element) => {
    console.log(element.bookName);
  });
};

//listBooks()

const addBook = (newBook) => {
  let promise = new Promise((resolve, reject) => {
    books.push(newBook);
    //resolve(books);
    reject("HATA OLUSTU")
  });
  return promise
};

addBook({ bookName: "Sahip Olmak ya da Olmamak", author: "Eric From" }).then(() => {
    console.log("YENI LISTE")
    listBooks()
}).catch(error => {
    console.log(error)
})
