const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("", (req, res) => {
    res.sendFile(path.join(__dirname, "../view/index.html"));
});

app.get("/women", (req, res) => {
    res.sendFile(path.join(__dirname, "../view/women.html"));
});

app.get("/men", (req, res) => {
    res.sendFile(path.join(__dirname, "../view/men.html"));
});

app.get("/kids", (req, res) => {
    res.sendFile(path.join(__dirname, "../view/kids.html"));
});

app.listen(3000, () => {
    console.log("The H & M website, port is up on 3000");
});