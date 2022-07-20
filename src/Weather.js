import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate.js";
import WeatherInfo from "./WeatherInfo.js";
import Forecast from "./Forecast.js";

export default function Weather(props) {
  const [weatherdata, setWeatherdata] = useState({ loading: false });
  const [city, setCity] = useState(props.defaultCity);
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

  function handleresponse(response) {
    setWeatherdata({
      loading: true,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
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
    handleColourChange(Math.round(response.data.main.temp));
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function searchCity() {
    const apiKey = "4fce36700b4b676ed1ad5e32df7026c3";
    let unit = "metric";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiURL).then(handleresponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherdata.loading) {
    return (
      <div className="Weather-app" style={{ backgroundColor: colour }}>
        <div className="row justify-content-between">
          <div className=" date col-sm-6 pt-3 pb-3">
            <FormattedDate date={weatherdata.date} />
          </div>
          <form className="search-engine col-sm-6" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search a city"
              className="rounded p-2"
              autoFocus="on"
              onChange={handleCityChange}
            />
          </form>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <WeatherInfo data={weatherdata} />
          </div>
          <div className="col-sm-6">
            <Forecast coordinates={weatherdata.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    searchCity();
    return <p>Loading...</p>;
  }
}
