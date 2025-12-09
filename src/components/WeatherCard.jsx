import React from "react";
import { getAnimatedIcon } from "../utils/iconMap";

export default function WeatherCard({ data, unit }) {
  const temp = data.main?.temp;
  const feels = data.main?.feels_like;
  const humidity = data.main?.humidity;
  const wind = data.wind?.speed;

  const icon = getAnimatedIcon(data.weather?.[0]?.main);

  return (
    <div className="weather-card glass fade-in">
      <div className="weather-main">
        <h2 className="city-title">
          {data.name}, {data.sys?.country}
        </h2>

        <div className="icon">{icon}</div>

        <div className="temp-row">
          <div className="temp">{Math.round(temp)}°</div>
        </div>

        <p className="desc">{data.weather?.[0]?.description}</p>

        <div className="meta">
          <p>Feels like: {Math.round(feels)}°</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind: {wind} {unit === "metric" ? "m/s" : "mph"}</p>
        </div>
      </div>
    </div>
  );
}
