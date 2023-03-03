const express = require("express");

//EXPRESS APP
const app = express();

//LISTEN FOR REQUESTS
app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

//REDIRECTS
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

//404 PAGE (ALWAYS IN THE BOTTOM)
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
