// ThemeToggleButton.js
import React from 'react';
import { useTheme } from './Q9-ThemeContext';

const ThemeToggleButton = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggleButton;
