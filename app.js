const express = require("express");

//EXPRESS APP
const app = express();

//LISTEN FOR REQUESTS
app.listen(3000);

app.get("/", (req, res) => {
  res.send("<p>HOME PAGE</p>");
});

app.get("/about", (req, res) => {
  res.send("<p>ABOUT PAGE</p>");
});
