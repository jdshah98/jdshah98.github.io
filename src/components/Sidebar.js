import React from 'react'
import { SwipeableDrawer } from '@material-ui/core'
import ThemeContext from '../context/Theme'

function Sidebar(props) {
    const { theme } = React.useContext(ThemeContext);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        props.setOpen(open);
    }

    return (
        <SwipeableDrawer
            open={props.open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
        >
            <div
                style={{ width: 250, ...theme.background }}
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                {props.links}
            </div>
        </SwipeableDrawer>
    )
}

export default Sidebar;