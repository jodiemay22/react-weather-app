import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import CurrentTemperature from "./CurrentTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <h1 className="current-city">{props.data.city}</h1>
      </div>
      <div className="row">
        <h2 className="weather-description">{props.data.description}</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-8 p-3">
          <WeatherIcon
            iconCode={props.data.icon}
            alt={props.data.description}
          />
        </div>
      </div>
      <CurrentTemperature
        temperatureC={props.data.temperature}
        highTemp={props.data.highTemp}
        lowTemp={props.data.lowTemp}
        feelsLike={props.data.feelsLike}
        humidity={props.data.humidity}
        windSpeed={props.data.windSpeed}
        pressure={props.data.pressure}
      />
    </div>
  );
}
