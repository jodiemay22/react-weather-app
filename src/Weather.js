import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate.js";
import WeatherInfo from "./WeatherInfo.js";

export default function Weather(props) {
  const [weatherdata, setWeatherdata] = useState({ loading: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleresponse(response) {
    setWeatherdata({
      loading: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      highTemp: Math.round(response.data.main.temp_max),
      lowTemp: Math.round(response.data.main.temp_min),
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: Math.round(response.data.main.humidity),
      windSpeed: Math.round(response.data.wind.speed),
      pressure: Math.round(response.data.main.pressure),
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function searchCity() {
    const apiKey = "120813c35ed58ddba478b72f03dd1a3e";
    let unit = "metric";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiURL).then(handleresponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherdata.loading) {
    return (
      <div className="Weather-element">
        <div className="row justify-content-between">
          <div className=" date col-5 pt-3 pb-3">
            <FormattedDate date={weatherdata.date} />
          </div>
          <form className="search-engine col-7" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search a city"
              className="rounded p-2"
              autoFocus="on"
              onChange={handleCityChange}
            />
          </form>
        </div>
        <WeatherInfo data={weatherdata} />
      </div>
    );
  } else {
    searchCity();
    return <p>Loading...</p>;
  }
}
