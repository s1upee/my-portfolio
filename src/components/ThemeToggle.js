import React, { useEffect } from 'react';
import './ThemeToggle.css'; // Import the styles for the toggle

const ThemeToggle = ({ setTheme }) => {
  useEffect(() => {
    const checkbox = document.getElementById("checkbox");

    checkbox.addEventListener("change", () => {
      document.body.classList.toggle("dark");
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    });
  }, [setTheme]);

  return (
    <div>
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="checkbox-label">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
