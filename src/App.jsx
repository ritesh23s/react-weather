import React, { useEffect, useState } from "react";

import WeatherCard from "./components/WeatherCard";
import HourlyForecast from "./components/HourlyForecast";
import WeeklyForecast from "./components/WeeklyForecast";
import SearchHistory from "./components/SearchHistory";
import TemperatureToggle from "./components/TemperatureToggle";
import ThemeToggle from "./components/ThemeToggle";

import "./index.css";
import "./styles/glass.css";
import "./styles/forecast.css";
import "./styles/darkmode.css";

const HISTORY_KEY = "weather_history_v1";

export default function App() {
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("metric"); // "metric" OR "imperial"
  const [theme, setTheme] = useState("light");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  // ------------------------------
  // LOAD THEME FROM LOCAL STORAGE
  // ------------------------------
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  // ------------------------------
  // LOAD SEARCH HISTORY
  // ------------------------------
  useEffect(() => {
    const saved = localStorage.getItem(HISTORY_KEY);
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  function saveHistory(updated) {
    setHistory(updated);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  }

  // DELETE ONE ITEM
  function deleteHistoryItem(item) {
    const filtered = history.filter((h) => h !== item);
    saveHistory(filtered);
  }

  // ADD to History
  function addToHistory(cityName) {
    if (!cityName.trim()) return;

    const updated = [...new Set([cityName, ...history])].slice(0, 8);
    saveHistory(updated);
  }

  // MAIN SEARCH FUNCTION
  async function searchCity(cityName) {
    if (!cityName) {
      setError("Please enter a valid city name");
      return;
    }

    if (!apiKey) {
      setError("Missing API key in .env file");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);
    setForecast(null);

    try {
      // CURRENT WEATHER API
      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${apiKey}`;

      // 5-DAY FORECAST API
      const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${unit}&appid=${apiKey}`;

      const [wRes, fRes] = await Promise.all([fetch(weatherURL), fetch(forecastURL)]);

      if (!wRes.ok) throw new Error("City not found");
      if (!fRes.ok) throw new Error("Forecast unavailable");

      const weatherData = await wRes.json();
      const forecastData = await fRes.json();

      setWeather(weatherData);
      setForecast(forecastData);

      addToHistory(cityName);
    } catch (err) {
      setError(err.message || "Something went wrong");
    }

    setLoading(false);
  }

  // ------------------------------
  // SUBMIT HANDLER
  // ------------------------------
  function handleSubmit(e) {
    e.preventDefault();
    searchCity(city);
  }

  return (
    <div className="container">

      {/* HEADER */}
      <header className="site-header">
        <h1 className="title">Weather Now!</h1>
        <p className="subtitle">
          {weather
            ? `${weather.name}, ${weather.sys?.country}`
            : "Search a location..."}
        </p>
      </header>

      {/* TOP BAR: UNIT + THEME */}
      <div style={{ display: "flex", justifyContent: "flex-start", gap: "16px", marginBottom: "10px" }}>
        <TemperatureToggle unit={unit} setUnit={setUnit} />
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>

      {/* SEARCH BAR */}
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Enter city (e.g., Mumbai)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="search-btn" type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* SEARCH HISTORY */}
      <SearchHistory
        history={history}
        onSelect={(item) => {
          setCity(item);
          searchCity(item);
        }}
        onDelete={deleteHistoryItem}
      />

      {/* ERROR */}
      {error && <div className="error">{error}</div>}

      {/* WEATHER CARD */}
      {weather && <WeatherCard data={weather} unit={unit} />}

      {/* HOURLY FORECAST */}
      {forecast && <HourlyForecast data={forecast} unit={unit} />}

      {/* WEEKLY FORECAST */}
      {forecast && <WeeklyForecast data={forecast} unit={unit} />}

      <footer className="note">Weather data powered by OpenWeather · Made with React
</footer>
    </div>
  );
}
