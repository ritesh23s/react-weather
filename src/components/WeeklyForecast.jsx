import React from "react";
import { getAnimatedIcon } from "../utils/iconMap";
import { convertTemp } from "../utils/tempConvert";

export default function WeeklyForecast({ data, unit }) {
  const days = {};

  data.list.forEach((item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString("en-US", {
      weekday: "short",
    });

    if (!days[date]) days[date] = [];
    days[date].push(item);
  });

  const finalDays = Object.entries(days).slice(0, 7);

  return (
    <div className="weekly glass">
      <h3>7-Day Forecast</h3>

      <div className="week-list">
        {finalDays.map(([day, entries], index) => {
          const temps = entries.map((e) => e.main.temp);
          const min = Math.min(...temps);
          const max = Math.max(...temps);

          const main = entries[0].weather[0].main;

          return (
            <div key={index} className="day-item">
              <div className="d-name">{day}</div>
              <div className="d-icon">{getAnimatedIcon(main)}</div>
              <div className="d-temp">
                {Math.round(convertTemp(min, unit))}° / {Math.round(convertTemp(max, unit))}°
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
