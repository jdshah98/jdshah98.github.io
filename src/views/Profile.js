import React from 'react'
import { Navbar } from '../components'
import ThemeContext from '../context/Theme'
import UIContext from '../context/UI'
import useStyles from '../theme/Styles'
import profileImage from '../images/profile.jpg'

function Profile() {
    const { theme } = React.useContext(ThemeContext);
    const media = React.useContext(UIContext);
    const classes = useStyles();

    return (
        <div style={theme.background}>
            <Navbar />
            <div className={classes.container}>
                <div className={`${!media.isTablet ? classes.col4 : `${classes.col12}`} ${classes.profileImageContainer} ${classes.center}`}>
                    <img style={theme.profileImage} src={profileImage} alt="profile" className={classes.profileImage} />
                    <p style={theme.imageBelowName} className={media.isTablet ? classes.imageBelowNameTablet : classes.imageBelowName}>Mern Stack Developer</p>
                </div>
                <div className={`${!media.isTablet ? classes.col8 : classes.col12} ${classes.profileContentContainer}`}>
                    <p>Profile</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;