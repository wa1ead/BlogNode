const express = require("express");
const morgan = require("morgan");

//EXPRESS APP
const app = express();

//REGISTER VIEW ENGINE
app.set("view engine", "ejs");

//LISTEN FOR REQUESTS
app.listen(3000);

//MIDDLEWARE(morgan)
app.use(morgan("dev"));

//MIDDLEWARE & STATIC FILES
app.use(express.static("public"));

app.get("/", (req, res) => {
  const blogs = [
    { title: "MAN VS AI", snippet: "CHATGPT AND MORE...." },
    { title: "WORLD MACHINE", snippet: "ROBOTS AND MORE...." },
    { title: "CREATIVITY END", snippet: "SUBJECT AND MORE...." },
  ];
  res.render("index", { title: "HOME", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "ABOUT" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "CREATE" });
});

//ERROR PAGE (ALWAYS IN THE BOTTOM)
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
