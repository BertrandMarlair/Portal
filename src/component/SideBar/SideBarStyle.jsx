import { primaryColor, successColor } from '../../style/constant'

const drawerWidth = 200

const SideBarStyle = theme => {
    return ({
        sideBar: {
            position: 'fixed',
            display: 'flex',
            zIndex: 1201
        },
        sideBarLeft: {
            width: 70,
            background: primaryColor,
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '15px 0',
        },
        logo: {
            width: '80%',
            margin: 'auto',
            display: 'block',
        },
        img: {
            width: '100%',
        },
        subHeader: {
            color: 'white',
        },
        titleBar: {
            color: 'white',
            margin: 0,
            background: '#154375',
            padding: '20px 15px',
        },
        teamIcon: {
            width: 52,
            height: 52,
            fontSize: 18,
        },
        sideBarRight: {
            width: 25,
            background: 'white',
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '15px 0',
            left: 70,
            position: 'absolute'
        },
        sideBarControl: {
            width: 100,
            height: '100vh',
            zIndex: 1200,
            position: 'absolute',
            userSelect: 'none',
            left: 270,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            left: 70,
            background: 'rgb(25, 75, 130)',
            color: 'rgba(255, 255, 255, 0.85)',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            width: 0,
            left: 70,
            background: 'rgb(25, 75, 130)',
            color: 'rgba(255, 255, 255, 0.85)',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
        },
        icon: {
            fontSize: 18
        },
        drawerOpenIcon: {
            opacity: '1',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerCloseIcon: {
            opacity: '0',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        conncetedIcon: {
            color: successColor,
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            position: 'absolute',
            top: 'calc(50vh - 15px)',
            zIndex: 1201,
            background: 'rgb(21, 61, 105)',
            borderRadius: '50%',
            border: '2px solid #c5c5c5',
            width: 30,
            height: 30,
            left: 82,
        },
        drawerOpenToolBar: {
            left: 255,
            transition: theme.transitions.create('left', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerCloseToolBar: {
            left: 58,
            transition: theme.transitions.create('left', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        iconToolBar: {
            fontSize: 20,
            color: 'white',
        },
        iconButton: {
            padding: 4,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        subHeaderChannel: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        listItem: {
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
        },
        listItemIcon: {
            color: 'white'
        },
        listItemText: {
            paddingLeft: 0,
        },
        listItemExpandIcon: {
            minWidth: 35,
            color: 'white'
        },
        links: {
            display: 'block',
        }
    })
}

export default SideBarStyle