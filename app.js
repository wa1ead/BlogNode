const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

//EXPRESS APP
const app = express();

//MONGODB CONNECT
const db =
  "mongodb+srv://blogger:walid2002@blognode.v70x7ox.mongodb.net/BLOG-NODE?retryWrites=true&w=majority";

//MONGOOSE
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//REGISTER VIEW ENGINE
app.set("view engine", "ejs");

//MIDDLEWARE(morgan)
app.use(morgan("dev"));

//MIDDLEWARE & STATIC FILES
app.use(express.static("public"));

//MONGOOSE & MONGO SANDBOX ROUTES
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "my blog",
    snippet: "about my blog",
    body: "moore about blog...",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/single-blog", (req, res) => {
  Blog.findById("64033bf31ba6a01032589df4").then((result) => {
    res.send(result).catch((err) => {
      console.log(err);
    });
  });
});

//ROUTES
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
