var fs = require("fs"); // Importing fs module in app.js file

// var content = fs.readFileSync("./doc.txt", "utf-8"); //2 seconds
// console.log(content);
// // fs.writeFileSync("NewFile.txt", content);
// fs.writeFileSync("NewFile2.txt", content);

fs.readFile("./doc.txt", "utf-8", (err, data) => {
  //   console.log(data);
  fs.writeFile("./readme.txt", data, (err) => {
    // console.log("File is Created");
  });
});

if (!fs.existsSync("Routes")) {
  fs.mkdirSync("Routes");
  fs.writeFileSync("./Routes/html.txt", "Hello this is HTML");
}

console.log("File is Reading");
