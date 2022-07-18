import React from "react";

export default function TemperatureColours(props) {
  let temperature = props.temperature;
  let styledElement = props.style;

  const temperatureColours = {
    veryHot: "#bc2525",
    hot: "#ff0000",
    warm: "#fdb44b",
    cool: "#00bbf0",
    cold: "#005792",
    veryCold: "#00204a",
  };

  if (temperature > 30) {
    styledElement = temperatureColours.veryHot;
  }
  return;
}
