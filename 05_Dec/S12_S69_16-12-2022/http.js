var http = require("http");
var fs = require("fs");

// const server = http.createServer((req, res) => {
//   //   res.end("This is My first API Response to the Client");
//   //   res.writeHead(200, {
//   //     "Content-Type": "text/html",
//   //   });
//   //   res.end("<h2> Welcome to NodeJS </h2>");
//   res.writeHead(200, {
//     "Content-Type": "application/json",
//   });
//   res.end("[{ name: 'React' }, { name: 'NodeJS' }, { name: 'Javascript' }]");
// });

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    fs.readFile("./Home.html", "utf-8", (err, data) => {
      if (err) {
        res.end("Error while accessing the Content");
      } else {
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        res.end(data);
      }
    });
  } else {
    fs.readFile("./Product.html", "utf-8", (err, data) => {
      if (err) {
        res.end("Error while accessing the Content");
      } else {
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        res.end(data);
      }
    });
  }
});

server.listen(4000, () => {
  console.log("Server Started");
});
