import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay.js";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastdata, setForecastdata] = useState(null);

  const temperatureColours = {
    veryHot: "#F57F17",
    hot: "#F9A825",
    warm: "#FBC02D",
    cool: "#E1F5FE",
    cold: "#81D4FA",
    veryCold: "#03A9F4",
  };

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleForecastResponse(response) {
    setForecastdata(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row justify-content-center">
          {forecastdata.map(function (dailyForecast, index) {
            if (index >= 1 && index <= 5) {
              let temperatureColour = "";
              if (dailyForecast.temp.max >= 30) {
                temperatureColour = temperatureColours.veryHot;
              } else if (
                dailyForecast.temp.max >= 20 &&
                dailyForecast.temp.max < 30
              ) {
                temperatureColour = temperatureColours.hot;
              } else if (
                dailyForecast.temp.max >= 15 &&
                dailyForecast.temp.max < 20
              ) {
                temperatureColour = temperatureColours.warm;
              } else if (
                dailyForecast.temp.max >= 10 &&
                dailyForecast.temp.max < 15
              ) {
                temperatureColour = temperatureColours.cool;
              } else if (
                dailyForecast.temp.max >= 5 &&
                dailyForecast.temp.max < 10
              ) {
                temperatureColour = temperatureColours.cold;
              } else if (dailyForecast.temp.max < 5) {
                temperatureColour = temperatureColours.veryCold;
              }
              return (
                <div
                  className="col-10 projected-forecast"
                  key={index}
                  style={{ backgroundColor: temperatureColour }}
                >
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "4fce36700b4b676ed1ad5e32df7026c3";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let unit = "metric";
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

    axios.get(apiURL).then(handleForecastResponse);
    return null;
  }
}
