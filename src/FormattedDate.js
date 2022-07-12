import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[props.date.getDay()];
  let dayDate = props.date.getDate();
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();
  return (
    <div>
      {day} {dayDate} {month} {year}
    </div>
  );
}
