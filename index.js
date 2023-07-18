const express = require("express");
const path = require("path");
const fs = require("fs")
const app = express();

PORT = process.env.PORT;
IP = process.env.IP;

const root = path.join(__dirname, '/views');
app.use("/public", express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  const file = req.url + ".html";
  fs.exists(path.join(root, file), (exists) =>
    exists ? res.sendFile(file, {root}) : next()
  );
});

app.listen(8080, () => {
    console.log(`Listening on ${IP}:${PORT}`);
});