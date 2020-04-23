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
const opencage = require('opencage-api-client');
const DarkSky = require('dark-sky');
const darksky = new DarkSky('fc455f20f86ba62221cb097a6d630fda');

function getCurrentTemperature(address) {
  const requestObj = {
    key: "88a97dcaa1e547769c0823f907958a4c",
    q: address
  };
  opencage
    .geocode(requestObj)
    .then(data => {
      if (data.status.code == 200) {
        if (data.results.length > 0) {
          const place = data.results[0];
          return place.geometry;
        }
      } else {
        console.log('you got mai-- error', data.status.message);
      }
    })
    .then(place => {
      darksky
        .latitude(place.lat)
        .longitude(place.lng)
        .get()
        .then(data => console.log(data.currently.temperature));
    })
    .catch(err => console.log('err: '.err));
}
getCurrentTemperature('12575 rue bedford');