import React, { useState } from "react";
import "./CurrentTemperature.css";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function setFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function setCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="row CurrentTemperatures">
        <ul className="col-7">
          <div className="row justify-content-center">
            <li className="col-5 current-temp p-0">{props.temperatureC}°</li>
            <span className="col-1 unit">C</span>
            <a href="/" className="col-1 unit" onClick={setFahrenheit}>
              F
            </a>
          </div>
          <div className="row justify-content-center">
            <div className="col-1 high-temp-icon">
              <i className="fa-solid fa-caret-up"></i>
            </div>
            <div className="col-2 high-temp-value ps-0">
              <li>{props.highTemp}°</li>
            </div>
            <div className="col-1 low-temp-icon">
              <i className="fa-solid fa-caret-down"></i>
            </div>
            <div className="col-2 low-temp-value ps-0">
              <li>{props.lowTemp}°</li>
            </div>
          </div>
        </ul>
        <ul className="col-5 forecast-details">
          <li>
            Feels Like: {""}
            {props.feelsLike} °
          </li>
          <li>
            Humidity: {""}
            {props.humidity} %
          </li>
          <li>
            Wind Speed: {""}
            {props.windSpeed} mp/s
          </li>
          <li>
            Pressure: {""}
            {props.pressure} hPa
          </li>
        </ul>
      </div>
    );
  } else {
    let fahrenheit = (props.temperatureC * 9) / 5 + 32;
    let fahrenheitHigh = (props.highTemp * 9) / 5 + 32;
    let fahrenheitLow = (props.lowTemp * 9) / 5 + 32;
    let fahrenheitFeelsLike = (props.feelsLike * 9) / 5 + 32;
    return (
      <div className="row CurrentTemperatures">
        <ul className="col-7">
          <div className="row justify-content-center">
            <li className="col-5 current-temp p-0">
              {Math.round(fahrenheit)}°
            </li>
            <a href="/" className="col-1 unit">
              C
            </a>
            <span className="col-1 unit" onClick={setCelsius}>
              F
            </span>
          </div>
          <div className="row justify-content-center">
            <div className="col-1 high-temp-icon">
              <i className="fa-solid fa-caret-up"></i>
            </div>
            <div className="col-2 high-temp-value ps-0">
              <li>{Math.round(fahrenheitHigh)}°</li>
            </div>
            <div className="col-1 low-temp-icon">
              <i className="fa-solid fa-caret-down"></i>
            </div>
            <div className="col-2 low-temp-value ps-0">
              <li>{Math.round(fahrenheitLow)}°</li>
            </div>
          </div>
        </ul>
        <ul className="col-5 forecast-details">
          <li>
            Feels Like: {""}
            {Math.round(fahrenheitFeelsLike)}°
          </li>
          <li>
            Humidity: {""}
            {props.humidity} %
          </li>
          <li>
            Wind Speed: {""}
            {props.windSpeed} mp/s
          </li>
          <li>
            Pressure: {""}
            {props.pressure} hPa
          </li>
        </ul>
      </div>
    );
  }
}
