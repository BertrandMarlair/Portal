import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'

import LoaderScreen from '../../component/CustomLoading/LoaderScreen'
import DynamicRoute from '../../router/DynamicRoute'
import ConnectRoute from '../../router/ConnectRoute'
import connect from '../../router/routerPath/connect'
import apiMock from '../../api-mock/api-mock'

const RouteProvider = () => {

    const [layout, setLayout] = useState([])

    useEffect(() => {
        apiMock.asyncGetCall('/layout_config').then(resp => {
            setLayout(resp.data)
        }).catch(err => {
            throw err
        })
    }, [])

    if(!layout.length) return <LoaderScreen />

    return (
        <Router>
            {layout.map(params => {
                return <DynamicRoute {...params} key={params.id} />
            })}
            {connect.map(({ component, name, path, exact }) => {
                return <ConnectRoute path={path} component={component} key={name} exact={exact} />
            })}
            <Redirect to="/app/dashboard" />
        </Router>
    )
}

export default RouteProvider