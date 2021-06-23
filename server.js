const express = require("express");

const app = express();

const rootDir = "./pepal-front/dist/pepal-front"

app.use(express.static(rootDir));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: rootDir });
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`);
