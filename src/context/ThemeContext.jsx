import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const location = useLocation();
  const [theme, setTheme] = useState('art'); // 'art' or 'textile'

  useEffect(() => {
    if (location.pathname.startsWith('/tejidos')) {
      setTheme('textile');
      document.body.className = 'theme-textile';
    } else {
      setTheme('art');
      document.body.className = 'theme-art';
    }
  }, [location.pathname]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
