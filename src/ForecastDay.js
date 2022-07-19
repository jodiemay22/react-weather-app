import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./Forecast.css";

export default function ForecastDay(props) {
  const [colour, setColour] = useState("#e8cbb4");

  function handleColourChange(temperature) {
    const temperatureColours = {
      veryHot: "#E65100",
      hot: "#FF9800",
      warm: "#FFCC80",
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

  function descriptionData() {
    let description = props.data.weather[0].description;
    return `${description}`;
  }
  function temperatureData() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }
  return (
    <div
      className="row projected-container"
      style={{ backgroundColor: colour }}
    >
      <div className="col-7 projected-day-element">
        <ul>
          <li className="projected-day">{day()}</li>
          <li className="projected-description">{descriptionData()}</li>
        </ul>
      </div>
      <div className="col-2 projected-temp">{temperatureData()}</div>
      <div className="col-3 projected-icon">
        <WeatherIcon iconCode={props.data.weather[0].icon} size={60} />
      </div>
    </div>
  );
}
