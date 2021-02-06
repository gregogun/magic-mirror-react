require("dotenv").config({ path: __dirname + `/../../.env` });
const axios = require("axios");

const app_id = process.env.WEATHER_API_KEY;

const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=Bedford&units=metric&appid=`;

exports.getWeather = (req, res) => {
  axios
    .get(`${BASE_URL}${app_id}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ err });
    });
};
