const axios = require("axios");

const BASE_URL =
  "http://www.ourmanna.com/verses/api/get?format=json&order=random";

exports.getVerse = (req, res) => {
  axios
    .get(BASE_URL)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ err });
    });
};
