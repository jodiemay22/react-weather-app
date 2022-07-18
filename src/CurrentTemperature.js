import React, { useState } from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
  return (
    <div className="row CurrentTemperatures">
      <ul className="col-7">
        <div className="row justify-content-center">
          <li className="col-5 current-temp p-0">{props.temperatureC}°</li>
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
          {props.feelsLike}°
        </li>
        <li>
          Humidity: {""}
          {props.humidity}%
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
