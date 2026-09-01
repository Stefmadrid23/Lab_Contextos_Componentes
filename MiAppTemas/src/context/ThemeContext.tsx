
import { createContext, useContext, useState, ReactNode, Children } from "react";

const lightColors = {
    background: '#FFFFFF',
    surface: '#f5f5f5',
    text: '#a1a1a1',
    textSecondary:'#666666',
    primary: '#5f0650',
    border: '#e0e0e0',
    cardBackground: '#ffffff',
    cardBorder: '#E0e0e0',
};


const darkColors = {
  background:     '#121212',
  surface:        '#1E1E1E',
  text:           '#F5F5F5',
  textSecondary:  '#AAAAAA',
  primary:        '#CE93D8',
  border:         '#333333',
  cardBackground: '#2C2C2C',
  cardBorder:     '#444444',
};

export type ThemeColors =typeof lightColors;
 
type ThemeContextType = {
    isDark: boolean;
    colors: ThemeColors;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ Children}: { Children: ReactNode}){
    const [isDark, setIsDark] = useState(false);
    const colors = isDark ? darkColors: lightColors;
    const toggleTheme = () => setIsDark(prev => !prev);

    return(
        <ThemeContext.Provider value={{ isDark, colors, toggleTheme}}>
            {Children}
        </ThemeContext.Provider>
    );
}

export function useTheme (){
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme debe usarse dentro de ThemeProvider');
    return ctx;
}
