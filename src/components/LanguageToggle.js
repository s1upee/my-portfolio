import React from 'react';
import usaFlag from '../assets/usa-flag.png';
import ukraineFlag from '../assets/ukraine-flag.png';
import russiaFlag from '../assets/russia.png';
import './LanguageToggle.css'; // Add this import at the top of your LanguageToggle.js

const LanguageToggle = ({ setLanguage, language }) => {
  return (
    <div className="language-toggle">
      <button
        onClick={() => setLanguage('en')}
        className={`language-button ${language === 'en' ? 'active' : ''}`}
        aria-label="Switch to English"
      >
        <img src={usaFlag} alt="English language" className="flag-icon" />
      </button>
      <button
        onClick={() => setLanguage('ua')}
        className={`language-button ${language === 'ua' ? 'active' : ''}`}
        aria-label="Switch to Ukrainian"
      >
        <img src={ukraineFlag} alt="Ukrainian language" className="flag-icon" />
      </button>
      <button
        onClick={() => setLanguage('ru')}
        className={`language-button ${language === 'ru' ? 'active' : ''}`}
        aria-label="Switch to Russian"
      >
        <img src={russiaFlag} alt="Russian language" className="flag-icon" />
      </button>
    </div>
  );
};

export default LanguageToggle;
