const fs = require("fs");

// Dosya Okuma
fs.readFile("./password.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
  console.log("Dosya Okundu");
});

// Dosya Yazma
fs.writeFile("example.txt", "Hello Node.js", "utf-8", (err) => {
  if (err) console.log(err);
  console.log("Dosya oluşturuldu.");
});

// Gönderilen data string tipinde olmalıdır.
fs.writeFile("example.json", '{"name": "Arin","age":"6"}', "utf-8", (err) => {
  if (err) console.log(err);
  console.log("JSON dosyası oluşturuldu.");
});

// Veri Ekleme
fs.appendFile("example.txt", "\nKodluyoruz 2021", "utf-8", (err) => {
  if (err) console.log(err);
  console.log("Yeni veri dosyaya eklendi.");
});

// Dosya Silme
fs.unlink("example.json", (err) => {
  if (err) console.log(err);
  console.log("Dosya silindi.");
});

// Klasörleri Oluşturma
fs.mkdir("uploads/img", { recursive: true }, (err) => {
  if (err) console.log(err);
  console.log("Klasörler oluşturuldu.");
});

// Klasörleri Silmek
fs.rmdir("uploads", { recursive: true }, (err) => {
  if (err) console.log(err);
  console.log("Klasörler silindi.");
});
