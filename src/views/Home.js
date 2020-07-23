import React from 'react'
import { Navbar } from '../components'
import ThemeContext from '../context/Theme'

function Home() {
    const { theme } = React.useContext(ThemeContext)

    return (
        <div style={theme.background}>
            <Navbar />
            <h1>Welcome to my Personal Web</h1>
        </div>
    );
}

export default Home;