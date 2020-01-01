const request = require("request");

const forecast = (latitude, longitude, callback) => {
  // change the api key, right now I have mine "0103ea055edf1a67bb19567a5f9a8fef", it might not work in yours and its not permited. Best practice is get your own key from darksky. You can get your key by signing in.
  const url =
    "https://api.darksky.net/forecast/0103ea055edf1a67bb19567a5f9a8fef/" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          " It is currently " +
          body.currently.temperature +
          " degress out. There is a " +
          body.currently.precipProbability +
          "% chance of rain. The Humidity is " +
          body.daily.data[0].humidity +
          ", windspeed is " +
          body.daily.data[0].windSpeed +
          " miles per hour."
      );
    }
  });
};

module.exports = forecast;
