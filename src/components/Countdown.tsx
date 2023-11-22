import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useInterval } from "../hooks";

const start = dayjs("2023-11-23T10:00:00");

export default function Countdown() {
  const [now, setNow] = useState(dayjs());

  useInterval(() => {
    setNow(dayjs());
  }, 333);

  const diffDays = start.diff(now, "days");
  const diffHours = start.subtract(diffDays, "day").diff(now, "hours");
  const diffMinutes = start
    .subtract(diffDays, "day")
    .subtract(diffHours, "hour")
    .diff(now, "minutes");
  const diffSeconds = start
    .subtract(diffDays, "day")
    .subtract(diffHours, "hour")
    .subtract(diffMinutes, "minutes")
    .diff(now, "seconds");

  return (
    <div className="countdown">
      <div className="countdown__time">
        <div className="countdown__item">
          {diffDays >= 0 ? diffDays : 0} <div>days</div>
        </div>
        <div className="countdown__item">
          {diffHours >= 0 ? diffHours : 0} <div>hours</div>
        </div>
        <div className="countdown__item">
          {diffMinutes >= 0 ? diffMinutes : 0} <div>minutes</div>
        </div>
        <div className="countdown__item">
          {diffSeconds >= 0 ? diffSeconds : 0} <div>seconds</div>
        </div>
      </div>
    </div>
  );
}
