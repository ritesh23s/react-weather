import React from "react";

export default function TemperatureToggle({ unit, setUnit }) {
  return (
    <div className="temp-toggle">
      <button
        className={unit === "metric" ? "active" : ""}
        onClick={() => setUnit("metric")}
      >
        °C
      </button>

      <button
        className={unit === "imperial" ? "active" : ""}
        onClick={() => setUnit("imperial")}
      >
        °F
      </button>
    </div>
  );
}
