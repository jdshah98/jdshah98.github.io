import React from 'react';
import lightTheme from '../theme/Light';
import darkTheme from '../theme/Dark';

export const themes = {
    light: lightTheme,
    dark: darkTheme
}

const ThemeContext = React.createContext();

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;