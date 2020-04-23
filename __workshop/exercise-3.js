// Exercise 3 - `getAddressPosition`
// ---------------------------------

// Given a position (latitude and longitude), returns the position
const DarkSky = require('dark-sky');
const darksky = new DarkSky('fc455f20f86ba62221cb097a6d630fda');

function getCurrentTemperatureAtPosition(lat, lng) {
  darksky
    .latitude(lat)
    .longitude(lng)
    .get()
    .then(data => console.log(data.currently.temperature));
}

getCurrentTemperatureAtPosition('45.501134', '-73.830759');