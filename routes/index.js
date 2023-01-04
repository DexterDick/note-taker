const express = require("express");

// Import our modular routers notes
const notesRouter = require("./notes");

const app = express();
app.use("/api/notes", notesRouter);

module.exports = app;
