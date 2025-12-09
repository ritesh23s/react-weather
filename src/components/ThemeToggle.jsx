import React, { useEffect } from "react";

export default function ThemeToggle({ theme, setTheme }) {
  // ensure DOM attribute on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", theme || "light");
    }
  }, []);

  const toggleTheme = () => {
    const next = (document.documentElement.getAttribute("data-theme") === "dark") ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  const isDark = document.documentElement.getAttribute("data-theme") === "dark";

  return (
    <button
      className={`theme-toggle ${isDark ? "is-dark" : "is-light"}`}
      onClick={toggleTheme}
      aria-pressed={isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="theme-icon sun" aria-hidden>☀️</span>
      <span className="toggle-track" >
        <span className="toggle-knob" />
      </span>
      <span className="theme-icon moon" aria-hidden>🌙</span>
    </button>
  );
}
