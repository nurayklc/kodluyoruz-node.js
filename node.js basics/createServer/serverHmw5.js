const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/index" || url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h2>Index sayfasina hosgeldiniz...</h2>`);
  } else if (url === "/hakkinda") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h2>Hakkinda sayfasina hosgeldiniz...</h2>`);
  } else if (url === "/iletisim") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h2>Iletisim sayfasina hosgeldiniz...</h2>`);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(`<h2>404 NOT FOUND</h2>`);
  }
  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server ${port} numaralı portta dinleniyor.`);
});
