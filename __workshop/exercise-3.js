// Exercise 3 - `getAddressPosition`
// ---------------------------------

// Given a position (latitude and longitude), returns the position
const Darksky = require("dark-sky");
const darksky = new Darksky("883397a0eea3aa280f191b689552a5c6");

function getCurrentTemperatureAtPosition(lat, lng) {
  darksky
    .latitude(lat)
    .longitude(lng)
    .get()
    .then(temp => console.log(temp.currently.temperature));
}

getCurrentTemperatureAtPosition(45.459016, -73.633529);
