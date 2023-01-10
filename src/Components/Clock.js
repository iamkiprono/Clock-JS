import React from "react";
import { useState } from "react";
import "./clock.css";


const Clock = () => {
  const [sec, setSec] = useState();
  const [minutes, setMinutes] = useState();
  const [what, setWhat] = useState();
  const [date, setDate] = useState();
  const [weekday, setWeekday] = useState();
  const [todaymonth, setTodaymonth] = useState();
  const [year, setYear] = useState("2022")

  const days = ["", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",

  ];
  const click = () => {
    const hour = new Date().getHours();
    const min = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const day = days[new Date().getDay()];
    const todaydate = new Date().getDate();
    const month = months[new Date().getMonth()];
    const todayyear = new Date().getFullYear();


    setWhat(hour);
    if (seconds < 10) {
      setSec(`0${seconds}`);
    } else {
      setSec(seconds);
      
    }
    if (min < 10) {
      setMinutes(`0${min}`);
    } else {
      setMinutes(min);
    }
    setWeekday(day);
    setDate(todaydate);
    setTodaymonth(month);
    setYear(todayyear)
  };

  setInterval(click, 1000);

  return (
    <div className="clock-container">
      <h1 className="time">
        {what}:{minutes}:{sec}
      </h1>

      <h1 className="day">{weekday}</h1>
      <h2 className="date">
        {todaymonth}, {date}, {year}
      </h2>
    </div>
  );
};

export default Clock;
