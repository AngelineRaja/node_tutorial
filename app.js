const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to our home page");
    return;
  }
  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to our about page");
    return;
  }
  res.writeHead(404, { "Content-Type": "text/html" });
  res.end(
    `<h2>Oops! Sorry</h2><p>Landed on the wrong page</p> <a href='/'>Back home</a>`
  );
  // res.write("Hello Hi & Welcome to Node.js!");
  // res.end();
});
server.listen(5000);
