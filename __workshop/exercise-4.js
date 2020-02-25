// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
// While it's useful to get the current temperature for a specific lat/lng,
// most often we want to provide the name of a place instead.
//
// You already created a function that can do address ==> position,
// and one that can do position ==> temperature. For this exercise,
// re-use these two functions to create one that goes directly from address ==> temperature.
//
// You can copy/paste your code from the previous exercises,
// or require them at the top of this file.
// Remember to _export_ them from their file, if you plan on _requiring_ them.

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
const response = require("require-promise");
const opencage = require("opencage-api-client");
const Darksky = require("dark-sky");
const darksky = new Darksky("883397a0eea3aa280f191b689552a5c6");

function getCurrentTemperature(address) {
  const requestObj = {
    key: "f7cdfbb4f26443abbdeb34b1d1838e70",
    q: address
  };
  opencage
    .geocode(requestObj)
    .then(data => {
      const place = data.results[0];
      console.log(place.geometry);
      return place;
      // if (data.status.code == 200) {
      //   if (data.results.length > 0) {
      //     let place = data.resuts[0];
      //     console.log(place.geometry);
      //   } else console.log("error 1", error.message);
      // }
    })
    .then(place => {
      darksky
        .latitude(place.geometry.lat)
        .longitude(place.geometry.lng)
        .get()
        .then(temp => console.log(temp.currently.temperature));
    })
    .catch(error => {
      console.log("error 2", error.message);
    });
}

console.log(getCurrentTemperature("882 rue grou h4b 2c7"));
