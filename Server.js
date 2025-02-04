let http = require("http");

let server = http.createServer((req, res) => {
  res.end("server is successfully running....");
});

server.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
