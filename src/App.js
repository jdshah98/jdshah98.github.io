import React, { useReducer, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Home, Profile } from './views'
import { ThemeProvider } from './context/Theme'
import { UIProvider } from './context/UI'
import { initialState, reducer } from './reducers/Reducer'
import { useMediaQuery } from '@material-ui/core'

import './App.css'

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/profile">
                <Profile />
            </Route>
            <Redirect to="/" from="/home" />
        </Switch>
    )
}

function App() {
    const [theme, setTheme] = useReducer(reducer, initialState);
    const isMobile = useMediaQuery('(max-width: 500px)');
    const isTablet = useMediaQuery('(max-width: 767px)');

    useEffect(() => {
        const themeData = localStorage.getItem("theme");
        if(themeData!=null) {
            setTheme({ type: 'SAVE', payload: JSON.parse(themeData) })
        } else {
            localStorage.setItem("theme", JSON.stringify(theme));
        }
    }, []);

    return (
        <UIProvider value={{ isMobile,isTablet }}>
            <ThemeProvider value={{ theme, setTheme }}>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </ThemeProvider>
        </UIProvider>
    )
}

export default App;