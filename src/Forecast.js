import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay.js";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastdata, setForecastdata] = useState(null);

  function handleForecastResponse(response) {
    setForecastdata(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecastdata);
    return (
      <div className="Forecast">
        <div className="row justify-content-center">
          <div className="col-10 projected-forecast">
            <div className="row"></div>
            <ForecastDay data={forecastdata[0]} />
          </div>
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
