import React from "react";
import { getAnimatedIcon } from "../utils/iconMap";
import { convertTemp } from "../utils/tempConvert";

export default function HourlyForecast({ data, unit }) {

  const next12 = data.list.slice(0, 4); // 3-hour interval × 4 = 12 hours

  return (
    <div className="hourly glass">
      <h3>Next 12 Hours</h3>

      <div className="hourly-list">
        {next12.map((item, i) => {
          const time = new Date(item.dt * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          });

          return (
            <div key={i} className="hour-item">
              <div className="h-time">{time}</div>
              <div className="h-icon">{getAnimatedIcon(item.weather[0].main)}</div>
              <div className="h-temp">
                {Math.round(convertTemp(item.main.temp, unit))}°
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
