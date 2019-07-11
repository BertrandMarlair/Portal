import React, { Fragment, useState, useEffect } from 'react'
import clsx from 'clsx'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Drawer from '@material-ui/core/Drawer'
import { withStyles, List } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import SideBarStyle from '../SideBarStyle'
import Icon from '../../../component/CustomIcons/Icon'
import SidebarItemsBuilder from './SidebarItemsBuilder'
import apiMock from '../../../api-mock/api-mock'

const SideRightBar = ({ classes }) => {
    const layout = useSelector(state => state.layout)
    const dispatch = useDispatch()
    const { isSidebarOpened } = layout

    const TOGGLE_SIDEBAR = () => dispatch({ type: 'Layout/TOGGLE_SIDEBAR' })

    const handleDrawerClose = () => {
        TOGGLE_SIDEBAR(!isSidebarOpened)
    }

    const [sidebarConfig, setSidebarConfig] = useState([])

    useEffect(() => {
        apiMock.asyncGetCall('/sidebar_config').then(resp => {
            setSidebarConfig(resp.data)
        }).catch(err => {
            throw err
        })
    }, [])

    const openDrawer = isSidebarOpened

    return (
        <Fragment>
            <div
                className={clsx(classes.toolbar, {
                    [classes.drawerOpenToolBar]: openDrawer,
                    [classes.drawerCloseToolBar]: !openDrawer,
                })}
            >
                <Icon onClick={handleDrawerClose} className={classes.iconButton}>
                    {isSidebarOpened ? (
                        <ChevronLeftIcon className={classes.iconToolBar}/>
                    ) : (
                        <ChevronRightIcon className={classes.iconToolBar}/>
                    )}
                </Icon>
            </div>
            <div className={classes.sideBarRight}> 
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: openDrawer,
                        [classes.drawerClose]: !openDrawer,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: openDrawer,
                            [classes.drawerClose]: !openDrawer,
                        }),
                    }}
                    open={openDrawer}
                >
                    <List>
                        <SidebarItemsBuilder itemsArray={sidebarConfig}/>
                    </List>
                </Drawer>
            </div>
        </Fragment>
    )
}

export default compose(
    withRouter,
    withStyles(SideBarStyle),
)(SideRightBar) 