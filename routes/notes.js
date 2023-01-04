const notes = require("express").Router();
const { readAndAppend, readFromFile } = require("../helpers/fsUtils");

// api Route
notes.get("/", (req, res) => {
    readFromFile("../db/db.json").then((data) => res.json(JSON.parse(data)));
});

notes.post("/", (req, res) => {
    console.log(req.body);
});

module.exports = notes;
