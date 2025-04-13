// ThemedBox.js
import React from 'react';
import { useTheme } from './Q9-ThemeContext';

const ThemedBox = () => {
  const { theme } = useTheme();

  const boxStyle = {
    padding: '20px',
    margin: '20px 0',
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    borderRadius: '8px',
  };

  return <div style={boxStyle}>This box is in {theme} mode!</div>;
};

export default ThemedBox;
