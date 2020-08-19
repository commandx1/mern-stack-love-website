import React, { useState } from "react";
import "./footer.css";

const Footer = () => {
  const [counter, setCounter] = useState({
    day: null,
    hour: null,
    minute: null,
    second: null,
  });

  const [displayFooter, setdisplayFooter] = useState(false);

  function countUpFromTime(countFrom, id) {
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
      countFrom = new Date(countFrom),
      timeDifference = now - countFrom;

    var secondsInADay = 60 * 60 * 1000 * 24,
      secondsInAHour = 60 * 60 * 1000;

    let days = Math.floor((timeDifference / secondsInADay) * 1);
    let hours = Math.floor(
      ((timeDifference % secondsInADay) / secondsInAHour) * 1
    );
    let mins = Math.floor(
      (((timeDifference % secondsInADay) % secondsInAHour) / (60 * 1000)) * 1
    );
    let secs = Math.floor(
      ((((timeDifference % secondsInADay) % secondsInAHour) % (60 * 1000)) /
        1000) *
        1
    );

    setCounter({ day: days, hour: hours, minute: mins, second: secs });

    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function () {
      countUpFromTime(countFrom, id);
    }, 1000);
  }

  window.onload = function () {
    // Month Day, Year Hour:Minute:Second, id-of-element-container
    countUpFromTime("Jun 18, 2019 22:00:00", "countup1"); // ****** Change this line!
  };
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setdisplayFooter(true)
    } else {
      setdisplayFooter(false)
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <footer style={{ display: displayFooter ? "block" : "none" }}>
      <div className="countup" id="countup1">
        <span className="timeel days">{counter.day}</span>
        <span className="timeel timeRefDays"> gün </span>
        <span className="timeel hours">{counter.hour}</span>
        <span className="timeel timeRefHours"> saat </span>
        <span className="timeel minutes">{counter.minute}</span>
        <span className="timeel timeRefMinutes"> dakika </span>
        <span className="timeel seconds">{counter.second}</span>
        <span className="timeel timeRefSeconds"> saniyedir</span>
        <span className="timeel timeRefDays"> beraberiz...</span>
      </div>
    </footer>
  );
};

export default Footer;
