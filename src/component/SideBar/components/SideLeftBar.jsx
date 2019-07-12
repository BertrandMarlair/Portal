import React from 'react'

import { compose } from 'recompose'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import {
    NotificationsNone as NotificationsIcon,
    Add as AddIcon,
    PowerSettingsNew as LogoutIcon,
} from '@material-ui/icons'
import { withStyles, Divider, Avatar } from '@material-ui/core'

import SideBarStyle from '../SideBarStyle'
import Icon from '../../../component/CustomIcons/Icon'

const SideLeftBar = ({ classes, history}) => {

    const dispatch = useDispatch()

    const LOGOUT = () => dispatch({ type: 'LOGOUT' })
    
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('tokenRefresh')
        LOGOUT()
        history.push('/connect/login')
    }

    return (
        <div className={classes.sideBarLeft}>
            <div className={classes.sideTop}>
                <NavLink 
                    className={classes.logo}
                    to={'/app/dashboard'}
                >
                    <img
                        className={classes.img}
                        src="/images/logo/bfineSmall.jpg"
                        alt="logo"
                    />
                </NavLink>
                <Divider />
            </div>
            <div className={classes.sideBottom}>
                <Icon centered white onClick={() => logout()}><LogoutIcon className={classes.icon} /></Icon>
                <Icon centered white><NotificationsIcon className={classes.icon} /></Icon>
                <Icon centered white><NotificationsIcon className={classes.icon} /></Icon>
                <Avatar alt="Remy Sharp" src="https://image.freepik.com/vecteurs-libre/profil-avatar-homme-icone-ronde_24640-14044.jpg" />
            </div>
        </div>
    )
}

export default compose(
    withRouter,
    withStyles(SideBarStyle),
)(SideLeftBar) 