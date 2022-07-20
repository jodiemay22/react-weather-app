import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./Forecast.css";

export default function ForecastDay(props) {
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
      style={{ backgroundColor: props.temperatureColours }}
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
