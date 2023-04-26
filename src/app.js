const express = require("express");
const path = require("path");

const app = express();

// Tagged the public folder
app.use(express.static(path.join(__dirname, "../public")));

// The default index page
app.get("", (req, res) => {
    res.sendFile(path.join(__dirname, "../view/index.html"));
});

// The womens clothes section
app.get("/women", (req, res) => {
    res.sendFile(path.join(__dirname, "../view/women.html"));
});

// The mens clothes section
app.get("/men", (req, res) => {
    res.sendFile(path.join(__dirname, "../view/men.html"));
});

// The kids clothes section
app.get("/kids", (req, res) => {
    res.sendFile(path.join(__dirname, "../view/kids.html"));
});

// The service port starter
app.listen(3000, () => {
    console.log("The H & M website, port is up on 3000");
});