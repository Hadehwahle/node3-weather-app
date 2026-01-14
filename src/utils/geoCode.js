const request = require("request");

const geoCode = (address, callback) => {
  const url = `https://geocode.maps.co/search?q=${encodeURIComponent(
    address
  )}&api_key=696126d3d77d4105978158wnt6b10a4&limit=1`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const latitude = body[0].lat;
      const longitude = body[0].lon;
      const location = body[0].name;

      callback(undefined, {
        latitude,
        longitude,
        location,
      });
    }
  });
};
module.exports = geoCode;
