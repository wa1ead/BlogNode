const fs = require("fs");

//READING FILES
fs.readFile("./docs/blog.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

WRITING FILES
fs.writeFile("./docs/blog.txt", "HELLO EARTH", () => {
  console.log("file was written");
});

fs.writeFile("./docs/blog0.txt", "HELLO AGAIN", () => {
  console.log("file was written");
});

//DIRECTORIES
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder was created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder was removed");
  });
}

//DELETING FILES
if (fs.existsSync("./docs/blog0.txt")) {
  fs.unlink("./docs/blog0.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file was deleted");
  });
}
