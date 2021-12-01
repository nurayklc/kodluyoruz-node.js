/* console.log("1. Görev")
console.log("2. Görev")
console.log("3. Görev") 

const func = () => {
    console.log("1. Fonksiyon tamamlandı.")
}

const funcTest = () => {
    console.log("2. Fonksiyon tamamlandı.")
}

funcTest()
func()

const func = () => {
    console.log("1. Fonksiyon tamamlandı.")
    funcTest()
}

const funcTest = () => {
    console.log("2. Fonksiyon tamamlandı.")
    funcExample()
}

const funcExample = () => {
    console.log("3. Fonksiyon tamamlandı.")
}

func()
*/

const func = () => {
  console.log("1. Fonksiyon tamamlandı.");
  funcExample();
};

const funcTest = () => {
  console.log("2. Fonksiyon tamamlandı.");
};

const funcExample = () => {
  console.log("3. Fonksiyon tamamlandı.");
  funcTest();
};

func();

// Javascript her zaman senkron çalışır ve single thread mantığıyla çalışır.

let number = 5;
console.log("1. veri", number);

/* setTimeout(() => {
  number += 5;
  console.log("2. veri", number);
}, 2000); */

number += 5;
console.log("3. veri", number);

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

const addBook = (newBook, callback) => {
  books.push(newBook);
  callback();
};

addBook(
  { bookName: "Sahip Olmak ya da Olmamak", author: "Eric From" },
  listBooks
);
