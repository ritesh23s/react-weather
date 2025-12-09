# WeatherNow — React + Vite (Premium Weather App)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-2ea44f?style=for-the-badge)](https://ritesh23s.github.io/react-weather/)
  
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-8A2BE2?style=for-the-badge&logo=vite&logoColor=FFD62E)
![OpenWeather](https://img.shields.io/badge/OpenWeather-FF851B?style=for-the-badge&logo=google-cloud&logoColor=white)
![License](https://img.shields.io/badge/License-Educational-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

A modern, responsive **Blue-Glass style Weather Application** built using **React + Vite** and **OpenWeather APIs**.  
It features current weather, hourly & weekly forecasts, a theme system, temperature switch, search history, and premium UI styling.

---

## 🚀 Features

- 🔍 Search weather by city  
- 🌡️ Temp, feels-like, humidity, wind  
- ⏳ Hourly forecast (next ~12 hours)  
- 📅 Weekly forecast (7-day summary)  
- 🔁 °C ↔ °F toggle  
- 🌓 Light / Dark theme (saved in localStorage)  
- 🧊 Premium Blue-Glass UI (fully responsive)  
- 🕓 Search history with delete option  
- 🧪 Mock Mode (useful for demos without internet)

---

## ⚡ Quick Start (Local Setup)

### 1️⃣ Clone the repo
```bash
git clone https://github.com/ritesh23s/react-weather.git
cd react-weather
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Add API Key  
Create `.env` file:
```
VITE_WEATHER_API_KEY=MY_OPENWEATHER_API_KEY
```

### 4️⃣ Start dev server
```bash
npm run dev
```
Visit: http://localhost:5173/

### 5️⃣ Build for production
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
react-weather/
├── public/
│   └── favicon.png
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── HourlyForecast.jsx
│   │   ├── SearchHistory.jsx
│   │   ├── TemperatureToggle.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── WeatherCard.jsx
│   │   └── WeeklyForecast.jsx
│   ├── styles/
│   │   ├── darkmode.css
│   │   ├── forecast.css
│   │   └── glass.css
│   ├── utils/
│   │   ├── iconMap.js
│   │   └── tempConvert.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## 🌤️ API Information

Uses **OpenWeather Free Tier**:

| Purpose | Endpoint |
|--------|----------|
| Current Weather | `/data/2.5/weather` |
| 5-Day Forecast | `/data/2.5/forecast` |

**Data Processing:**
- Hourly data = first 4 entries (3-hour intervals → ~12 hours)
- Weekly summary = min/max per day from 5-day list

---

## 🧪 Mock Mode

Enable inside `App.jsx`:

```js
const MOCK_MODE = true;
```

Disables API calls and loads sample data — great for offline demos.

---

## 🧠 UX & Local Storage

| Feature | Storage Key |
|---------|--------------|
| Theme | `theme` |
| Search History | `weather_history_v1` |

- Smooth animations  
- Optimized dark mode  
- Fully responsive on mobile, tablet, desktop  

---

## 💡 Future Enhancements

- GPS auto-detect weather  
- Lottie/SVG animated icons  
- PWA offline mode  
- AQI + radar integration  
- Notifications  

---

## 👨‍💻 Author  
**Shubham (Sugu)**  
GitHub: https://github.com/ritesh23s

---

## 📜 License  
This project is for **learning & educational purposes**.
