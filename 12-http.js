const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Home page");
  }
  if (req.url === "/about") {
    res.end("Welcome to About page");
  }
  res.write(`<h1>Oops!</h1>`);
});

server.listen(5000);
