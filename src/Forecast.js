import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay.js";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastdata, setForecastdata] = useState(null);
  const [colour, setColour] = useState("#e8cbb4");

  function handleColourChange(temperature) {
    const temperatureColours = {
      veryHot: "#F57F17",
      hot: "#F9A825",
      warm: "#FBC02D",
      cool: "#E1F5FE",
      cold: "#81D4FA",
      veryCold: "#03A9F4",
    };

    if (temperature >= 30) {
      setColour(temperatureColours.veryHot);
    } else if (temperature >= 20 && temperature < 30) {
      setColour(temperatureColours.hot);
    } else if (temperature >= 15 && temperature < 20) {
      setColour(temperatureColours.warm);
    } else if (temperature >= 10 && temperature < 15) {
      setColour(temperatureColours.cool);
    } else if (temperature >= 5 && temperature < 10) {
      setColour(temperatureColours.cold);
    } else if (temperature < 5) {
      setColour(temperatureColours.veryCold);
    }
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleForecastResponse(response) {
    setForecastdata(response.data.daily);
    setLoaded(true);
    handleColourChange(response.data.daily[0].temp.max);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row justify-content-center">
          {forecastdata.map(function (dailyForecast, index) {
            if (index >= 1 && index <= 5) {
              return (
                <div className="col-10 projected-forecast" key={index}>
                  <ForecastDay
                    data={dailyForecast}
                    temperatureColours={colour}
                  />
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
