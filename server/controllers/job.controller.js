const axios = require("axios");
const cron = require("node-cron");

exports.test = (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

// exports.test = (req, res) => {
//   res.send("this is a test");
// };
