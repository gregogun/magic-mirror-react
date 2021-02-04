// const path = require("path");
require("dotenv").config({ path: __dirname + `/../../.env` });
const { google } = require("googleapis");

exports.getEvents = (req, res) => {
  // google client library credentials
  // <----------------------------------------------------------------------
  const api_key = process.env.API_KEY;
  const calendar_id = process.env.CALENDAR_ID;

  const currentISODate = new Date().toISOString().slice(0, 10);

  // setting up the client to help us retrieve data from our calendar
  const calendar = google.calendar({
    version: "v3",
    auth: api_key,
  });

  const params = {
    calendarId: calendar_id,
    showDeleted: false,
  };

  const fetchEvents = calendar.events
    .list(params)
    .then((res) => {
      const events = res.data.items;
      const currentEvents = events.filter(
        (event) => event.start.dateTime.slice(0, 10) === currentISODate
      );
      return currentEvents;
    })
    .catch((err) => console.log(err));

  fetchEvents.then((events) => res.send(events));
};
