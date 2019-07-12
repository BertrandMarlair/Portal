import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import SideBarStyle from '../SideBarStyle'

import { withStyles } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Icon from '@material-ui/core/Icon'
import CustomIcons from '../../CustomIcons/Icon'
import PropTypes from 'prop-types'

const Display = ({itemsArray, classes}) => {

    const [collapseState, onCollapse] = useState({})

    const handleCollapse = (itemId) => {
        onCollapse({...collapseState, [itemId]: !collapseState[itemId]})
    }

    const itemsRenderer = (itemArray, iteration = 0) => (
        itemArray.map(item => {
            if (!item.url) {
                return (
                    <div key={item.id} style={{ paddingLeft: 10 * iteration }}>
                        <ListItem 
                            button 
                            onClick={() => handleCollapse(item.id)}
                            className={classes.listItem}
                        >
                            <CustomIcons>
                                <Icon className={classes.listItemIcon}>
                                    {item.iconName}
                                </Icon>
                            </CustomIcons>
                            <ListItemText 
                                className={classes.listItemText}
                                inset 
                                primary={ item.label }
                            />
                            <ListItemIcon className={classes.listItemExpandIcon}>
                                {collapseState[item.id] ? <ExpandLess /> :<ExpandMore />}
                            </ListItemIcon>
                        </ListItem>
                        <Collapse 
                            in={ collapseState[item.id] } 
                            timeout="auto" 
                            unmountOnExit
                        >
                            {handleChildrenOf(item.id, iteration)}
                        </Collapse>
                    </div>
                )
            }
            // else
            return (
                <Fragment key={ item.id }>
                    <Link
                        style={{ paddingLeft: 15 * iteration }}
                        to={ item.url }
                        className={ classes.links }>
                        <ListItem 
                            button 
                            key={ item.id }
                            className={classes.listItem}
                        >
                            <CustomIcons>
                                <Icon className={classes.listItemIcon}>
                                    {item.iconName}
                                </Icon>
                            </CustomIcons>
                            <ListItemText
                                className={classes.listItemText}
                                inset 
                                primary={ item.label } 
                            />
                        </ListItem>
                    </Link>
                </Fragment>
            )
        })
    )

    const handleChildrenOf = (parentId, iteration) => {
        const childeren_array = itemsArray.filter(item => item.parentId === parentId)
        return itemsRenderer(childeren_array, iteration + 1)
    }

    return (
        <div>
            {itemsRenderer(itemsArray.filter(item => !!item.parentId === false))}
        </div>
    )
}

export default withStyles(SideBarStyle)(Display)

Display.propTypes = {
    itemsArray: PropTypes.array.isRequired,
}