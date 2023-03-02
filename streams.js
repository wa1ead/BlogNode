const fs = require("fs");

const readStream = fs.createReadStream("./docs/strm.txt", {
  encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./docs/strm0.txt");

readStream.on("data", (chunk) => {
  console.log("-----NEW CHUNK-----");
  console.log(chunk);
  writreStream.write("\nNEW CHUNK\n");
  writeStream.write(chunk);
});

//PIPING
readStream.pipe(writeStream);
