const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);
  let extname = path.extname(filePath);
  let contentType = "text/html";

  // Set correct content type for common file types
  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
  };

  if (mimeTypes[extname]) contentType = mimeTypes[extname];

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
