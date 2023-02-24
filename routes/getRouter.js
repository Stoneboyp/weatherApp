var express = require("express");
var router = express.Router();

const { getCurrentPosition, searchWeather } = require("../requestWeather");
/* GET users listing. */
router.get("/", (req, res) => {
  const latitude = req.query.latitude;
  const longitude = req.query.longitude;
  const searchCity = req.query.searchCity;
  if (latitude && longitude) {
    getCurrentPosition(latitude, longitude)
      .then((result) => {
        // console.log(result)
        res.send(result);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Error getting current position");
      });
  } else if (searchCity) {
    searchWeather(searchCity)
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Error searching weather for city");
      });
  } else {
    res.status(400).send("Invalid request parameters");
  }
});

module.exports = router;


