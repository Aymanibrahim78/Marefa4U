'use client'


// src/ThemeContext.js
import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from '../Theme';

const ThemeContext = createContext();



export function ThemeProviderComponent({ children }) {
  const [mode, setMode] = useState(localStorage.getItem("themeMode")?localStorage.getItem("themeMode"):"dark");


  // تحديث LocalStorage عند تغيير الوضع
  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const toggleDarkMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  return (
    
    <ThemeContext.Provider value={{ mode, toggleDarkMode }}>
   

    
      <div className={mode}>

      <ThemeProvider  theme={theme}>{children}</ThemeProvider>
      </div>
    
     
      
    </ThemeContext.Provider>
      

  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
