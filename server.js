const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  //LODASH
  const num = _.random(1, 80);
  console.log(num);

  const greet = _.once(() => {
    console.log("HELLO");
  });
  greet();
  greet();

  //SET HEADER CONTENT-TYPE
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.setHeader("Location", "/about");
      res.statusCode = 301;
      res.end();
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  //SEND A HTML FILE
  fs.readFile(path, (err, data) => {
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
