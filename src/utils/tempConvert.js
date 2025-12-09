export function convertTemp(value, unit) {
  if (unit === "metric") return value;         // Celsius
  if (unit === "imperial") return value * 1.8 + 32; // Fahrenheit
  return value;
}
