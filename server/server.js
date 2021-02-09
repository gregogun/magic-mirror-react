const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cron = require("node-cron");
const calendarController = require("./controllers/calendar.controller");
const verseController = require("./controllers/verse.controller");
const weatherController = require("./controllers/weather.controller");
const jobController = require("./controllers/job.controller");

dotenv.config();
const app = express();

app.use(cors());

app.get("/calendar", calendarController.getEvents);

// <----------------------------------------------------------------------

app.get("/verse", verseController.getVerse);

app.get("/weather", weatherController.getWeather);

app.get("/test", jobController.test);

// console.log("logging every minute");

// cron.schedule("* * * * *", () => {
//   console.log("logging every minute");
// });

const port = process.env.PORT || 8888;
console.log(`Listening on port ${port}.`);
app.listen(port);
