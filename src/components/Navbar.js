import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { AppBar, Toolbar, Typography, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CallIcon from '@material-ui/icons/Call';

import Constants from '../Constants'
import useStyles from '../theme/Styles'

import ThemeContext from '../context/Theme'
import UIContext from '../context/UI'

import Sidebar from './Sidebar'

function Navbar() {
    const classes = useStyles();
    const { theme, setTheme } = React.useContext(ThemeContext);
    const media = React.useContext(UIContext);

    const [open, setOpen] = React.useState(false);

    const links = (type) => {
        return (
            <List style={{ display: type }}>
                <Link to="/"
                    tabIndex={1}
                >
                    <ListItem
                        button
                        key={"1"}
                        tabIndex={-1}
                    >
                        <ListItemIcon style={theme.icon}><HomeIcon /></ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                </Link>
                <Link to="/profile"
                    tabIndex={1}
                >
                    <ListItem
                        button
                        key={"2"}
                        tabIndex={-1}
                    >
                        <ListItemIcon style={theme.icon}><AccountCircleIcon /></ListItemIcon>
                        <ListItemText>Profile</ListItemText>
                    </ListItem>
                </Link>
                <HashLink to="/#portfolio"
                    tabIndex={1}
                >
                    <ListItem
                        button
                        key={"3"}
                        tabIndex={-1}
                    >
                        <ListItemIcon style={theme.icon}><HomeIcon /></ListItemIcon>
                        <ListItemText>Portfolio</ListItemText>
                    </ListItem>
                </HashLink>
                <HashLink to="/#contact"
                    tabIndex={1}
                >
                    <ListItem
                        button
                        key={"4"}
                        tabIndex={-1}
                    >
                        <ListItemIcon style={theme.icon}><CallIcon /></ListItemIcon>
                        <ListItemText>Contact</ListItemText>
                    </ListItem>
                </HashLink>
            </List>
        )
    }

    return (
        <AppBar position="sticky" style={theme.navbar}>
            <Toolbar>
                {
                    media.isTablet && (
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                            onClick={(e) => {
                                setOpen(true)
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )
                }
                <Typography variant="h6" className={classes.title}>
                    {Constants.appName}
                </Typography>
                {
                    !media.isTablet && links("flex")
                }
                <IconButton
                    tabIndex={5}
                    aria-label="show more"
                    aria-haspopup="true"
                    color="inherit"
                    title="Toggle light/dark theme"
                    onClick={(e) => {
                        if (theme.type === Constants.light) {
                            setTheme({ type: 'TOGGLE_DARK' })
                        } else {
                            setTheme({ type: 'TOGGLE_LIGHT' })
                        }
                    }}
                >
                    {
                        theme.type === Constants.light ? <Brightness4Icon /> : <BrightnessHighIcon />
                    }
                </IconButton>
            </Toolbar>
            <Sidebar links={links()} open={media.isTablet ? open : false} setOpen={setOpen} />
        </AppBar>
    );
}

export default Navbar;