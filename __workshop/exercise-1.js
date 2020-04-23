// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
function getIssPosition() {
  return request("http://api.open-notify.org/iss-now.json")
    .then(res => {
      // parse as JSON
      const issLocation = JSON.parse(res);
      //returns an object with lat and lng
      return {
        lat: issLocation.iss_position.latitude,
        lng: issLocation.iss_position.longitude
      };
    })
    .then(data => {
      console.log(data); // console.log inspects the data
      return data; // then returns again for the next .then to use
    })
    .catch(err => console.log("error: ", err));

}

// psst.... don't forget to call the function
getIssPosition();
