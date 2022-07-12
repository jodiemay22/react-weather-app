import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row justify-content-center">
        <div className="col-10 projected-forecast">
          <div className="row">
            <div className="col-7 projected-day-element">
              <ul>
                <li className="projected-day">Monday</li>
                <li className="projected-description">Cloudy</li>
              </ul>
            </div>
            <div className="col-2 projected-temp">17°</div>
            <i className="col-3 fa-solid fa-sun projected-icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
