const express = require("express");
const fs = require("fs");
const util = require("util");
// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
const path = require("path");
const api = require("./routes/index.js");
const PORT = process.env.PORT || 3001;
const app = express();

// middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", api);

app.use(express.static("./public"));
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/notes", (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});
app.post("/notes", (req, res) => {
    console.log(req.body);
});

// html Route for homepage
app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);
