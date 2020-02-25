// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const response = require("request-promise");

// Returns the current position of the ISS
function getIssPosition() {
  return response("http://api.open-notify.org/iss-now.json")
    .then(info => {
      const position = JSON.parse(info);

      return {
        lat: position.iss_position.latitude,
        lng: position.iss_position.longitude
      };
    })
    .then(data => console.log(data));
}

// psst.... don't forget to call the function
getIssPosition();
