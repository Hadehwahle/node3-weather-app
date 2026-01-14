const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=7890248ca9c94abc4684c5bd6befeefa&query=${latitude},${longitude}&units=m`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const temperature = body.current.temperature;
      const feelsLike = body.current.feelslike;
      const location = body.location.name;
      const weatherDescriptions = body.current.weather_descriptions[0];
      callback(undefined, {
        temperature,
        feelsLike,
        location,
        weatherDescriptions,
      });
    }
  });
};

module.exports = forecast;
