import React from 'react';
import LanguageToggle from './LanguageToggle'; // Import LanguageToggle
import ThemeToggle from './ThemeToggle'; // Import ThemeToggle
import './Header.css';

const Header = ({ setLanguage, setTheme }) => {
  return (
    <header className="header">
      <div className="header-content">
        {/* Language toggle on the left */}
        <div className="language-toggle-container">
          <LanguageToggle setLanguage={setLanguage} />
        </div>

        {/* Theme toggle on the right */}
        <div className="theme-toggle-container">
          <ThemeToggle setTheme={setTheme} />
        </div>
      </div>
    </header>
  );
};

export default Header;
