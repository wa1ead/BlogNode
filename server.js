const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //SET HEADER CONTENT-TYPE
  res.setHeader("Content-Type", "text/html");

  // res.write("<head><link rel='stylesheet' href='#'></head>");
  // res.write("<p>HELLO RESPONSE</p>");
  // res.write("<p>HELLO AGAIN</p>");
  // res.end();

  //SEND A HTML FILE
  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      // res.write(data);
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
