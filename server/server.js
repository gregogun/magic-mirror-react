const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const calendarController = require("./controllers/calendar.controller");
const verseController = require("./controllers/verse.controller");
const weatherController = require("./controllers/weather.controller");

dotenv.config();
const app = express();

app.use(cors());

app.get("/calendar", calendarController.getEvents);

// <----------------------------------------------------------------------

app.get("/verse", verseController.getVerse);

app.get("/weather", weatherController.getWeather);

const port = process.env.PORT || 8888;
console.log(`Listening on port ${port}.`);
app.listen(port);
