import React, { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import isAuthenticated from '../utils/auth/isAuthenticated'
import { Redirect } from 'react-router-dom'
import CustomLoading from '../component/CustomLoading/CustomLoading'
import DashboardLayout from '../layouts/Dashboard/Dashboard'

const DynamicRoute = ({ component, path, ...rest }) => {

    const Page = lazy(() => import(`../container/${component}`))

    return (
        <Route
            path={path}
            render={props =>
                (isAuthenticated() ? (
                    <Suspense fallback={<CustomLoading />}>
                        <DashboardLayout>
                            <Page {...rest} {...props} />
                        </DashboardLayout>
                    </Suspense>
                ) : (
                    <Redirect to="/connect/login" />
                ))
            }
        />
    )
}

export default DynamicRoute