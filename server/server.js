const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const calendarController = require("./controllers/calendar.controller");
const verseController = require("./controllers/verse.controller");

dotenv.config();
const app = express();

app.use(cors());

app.get("/calendar", calendarController.getEvents);

// <----------------------------------------------------------------------

app.get("/verse", verseController.getVerse);

const port = process.env.PORT || 8888;
console.log(`Listening on port ${port}.`);
app.listen(port);
