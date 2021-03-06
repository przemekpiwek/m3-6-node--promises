// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const rp = require("request-promise");

// Returns the current position of the ISS
function getIssPosition() {
  return rp("https://api.wheretheiss.at/v1/satellites/25544")
    .then((result) => {
      return JSON.parse(result);
    })
    .then((data) => {
      return {
        lat: data.latitude,
        lgn: data.longitude,
      };
    })
    .catch((err) => {
      return err;
    });
}

// getIssPosition().then((result) => console.log(result));
module.exports = { getIssPosition };
