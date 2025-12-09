# WeatherNow (React + Vite)

A simple, responsive, premium Blue-Glass style Weather App built with React and Vite using OpenWeather APIs.  
Features current weather, hourly forecast (next 12 hours), a 7-day weekly summary (derived from 5-day data), °C/°F toggle, light/dark theme, animated icon placeholders, and search history.

---

## Features
- Search current weather by city name
- Current temperature, feels-like, humidity, wind
- Next 12 hours forecast (3-hour intervals from 5-day API)
- 7-day weekly forecast (aggregated from 5-day API)
- °C ↔ °F temperature toggle
- Light / Dark theme (persisted in localStorage)
- Search history with per-item delete (persisted in localStorage)
- Premium Blue-Glass UI, responsive for mobile/tablet/desktop
- Mock mode available for demo without an API key

---

## Quick Start (Local)

1. Clone the repository:
```bash
git clone https://github.com/ritesh23s/react-weather.git
cd react-weather
```

2. Install dependencies:
```bash
npm install
```

3. Add environment variable:
Create a `.env` file in the project root with:
```
VITE_WEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
```
> **Do not commit** `.env` — it's included in `.gitignore`.

4. Start dev server:
```bash
npm run dev
```
Open `http://localhost:5173/`.

5. Build for production:
```bash
npm run build
npm run preview
```

---

## Project Structure (exact)
```





## Notes on APIs & Data
- Uses OpenWeather **Current Weather** and **5-day / 3-hour Forecast** endpoints (free tier).
- For hourly view we take the first 4 entries (3-hour intervals → ~12 hours).
- For weekly view we aggregate each day’s min/max from the 5-day list to create a 7-day summary.
- If you need exact One Call data (single-call hourly/daily), you can switch to OpenWeather One Call API (may require different plan).

---

## Mock Mode
If you don't want to use an API key during demo, enable `MOCK_MODE` in `src/App.jsx` (set to `true`). App will show sample data without network calls.

---

## Accessibility & UX Notes
- Theme persists in `localStorage` under key `theme`.
- Search history persists under key `weather_history_v1`.
- Components are split for clarity: `components/` contains UI pieces, `utils/` contains helper logic, `styles/` contains CSS layers.

---

## Possible Enhancements
- Auto geolocation (GPS) to fetch current location weather
- Lottie/SVG animated icons instead of emoji placeholders
- PWA support (offline caching + installable)
- AQI and radar/map integration

---

## Author
Shubham (Sugu) — `@ritesh23s` on GitHub

---

## License
This project is for learning and educational purposes.

