// 🟦 Apple-style Blue Glass UI Animated Icons
export function getAnimatedIcon(main) {
  if (!main) return "☀️";

  main = main.toLowerCase();

  if (main.includes("clear")) return "☀️";
  if (main.includes("cloud")) return "⛅";
  if (main.includes("rain")) return "🌧️";
  if (main.includes("drizzle")) return "🌦️";
  if (main.includes("thunder")) return "⛈️";
  if (main.includes("snow")) return "❄️";
  if (main.includes("mist") || main.includes("fog") || main.includes("haze"))
    return "🌫️";

  return "🌤️";
}
