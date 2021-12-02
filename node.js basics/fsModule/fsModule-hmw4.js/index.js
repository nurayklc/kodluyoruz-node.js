const fs = require("fs");

fs.writeFile(
  "employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf-8",
  (err, data) => {
    if (err) console.log(err);
    console.log("Dosya oluşturuldu.");
  }
);

fs.readFile("employees.json", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log("Dosya içeriği: "+ data);
  console.log("Dosya okundu.");
});

fs.appendFile(
  "employees.json",
  '\n{"name": "Customer Name", "salary": 4000}',
  "utf-8",
  (err) => {
    if (err) console.log(err);
    console.log("Dosya içeriği güncellendi.");
  }
);

fs.unlink("employees.json", (err) => {
  if (err) console.log(err);
  console.log("Dosya silindi.");
});
