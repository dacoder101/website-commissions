const express = require("express");
const path = require("path");
const app = express();

PORT = process.env.PORT;
IP = process.env.IP;

app.use("/", express.static(path.join(__dirname, "views")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/pricing", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "pricing.html"));
});

app.use("/request", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "request.html"));
});

app.listen(PORT, IP, () => {
    console.log(`Listening on ${IP}:${PORT}`);
});