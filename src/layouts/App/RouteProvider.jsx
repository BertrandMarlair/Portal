import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import DashboardLayout from '../../layouts/Dashboard/Dashboard'

import LoaderScreen from '../../component/CustomLoading/LoaderScreen'
import DynamicRoute from '../../router/DynamicRoute'
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
            <DashboardLayout>
                {layout.map(params => {
                    return <DynamicRoute {...params} key={params.id} />
                })}
            </DashboardLayout>
        </Router>
    )
}

export default RouteProvider