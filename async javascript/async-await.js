// Paralel işlemlerde Promise yapısı kullanılır
function getData(data) {
  return new Promise((resolve, reject) => {
    console.log("Veriler alınmaya çalışılıyor...");
    if (data) {
      resolve("Veriler alındı.");
    } else {
      reject("Veriler alınamadı.");
    }
  });
}

function cleanData(receivedData) {
  return new Promise((resolve, reject) => {
    console.log("Veriler düzenleniyor...");
    if (receivedData) {
      resolve("Veriler düzenlendi.");
    } else {
      reject("Veriler düzenlenemedi.");
    }
  });
}
/* 
getData(false)
  .then((result) => {
    console.log(result);
    return cleanData(true);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
 */

// Async Await yapısı genellikle sıralı işlemlerde kullanılır
async function processData() {
  try {
    const receivedData = await getData(true);
    console.log(receivedData);
    const cleanedData = await cleanData(false);
    console.log(cleanedData);
  } catch (error) {
    console.log(error);
  }
}

processData();

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

const addBook = (newBook) => {
  let promise = new Promise((resolve, reject) => {
    books.push(newBook);
    if (books) {
      resolve(books);
    } else {
      reject("HATA OLUSTU");
    }
  });
  return promise;
};

async function showBooks() {
  try {
    await addBook({
      bookName: "Sahip Olmak ya da Olmamak",
      author: "Eric From",
    });
    listBooks();
  } catch (error) {
    console.log(error);
  }
}

showBooks();
