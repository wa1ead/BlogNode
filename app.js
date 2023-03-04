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

//ROUTES
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "ABOUT" });
});

//BLOG ROUTES
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "ALL BLOGS", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "CREATE" });
});

//ERROR PAGE (ALWAYS IN THE BOTTOM)
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
