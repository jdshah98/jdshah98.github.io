import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: 2,
    },
    title: {
        flexGrow: 1,
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)'
    },
    col4: {
        gridColumnEnd: 'span 4'
    },
    col8: {
        gridColumnEnd: 'span 8'
    },
    col12: {
        gridColumnEnd: 'span 12'
    },
    center: {
        textAlign: 'center'
    },
    profileImageContainer: {
        margin: '30px 50px'
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    imageBelowName: {
        fontSize: 24,
        marginTop: 10
    },
    imageBelowNameTablet: {
        fontSize: 28,
        marginTop: 10
    },
    profileContentContainer: {
        padding: '30px 50px'
    }
}));

export default useStyles;