import React, { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import isAuthenticated from '../utils/auth/isAuthenticated'
import { Redirect } from 'react-router-dom'
import CustomLoading from '../component/CustomLoading/CustomLoading'

const DynamicRoute = ({ component, path, ...rest }) => {

    const Page = lazy(() => import(`../container/${component}`))

    return (
        <Route
            path={path}
            render={props =>
                (isAuthenticated() ? (
                    <Suspense fallback={<CustomLoading />}>
                        <Page {...rest} {...props} />
                    </Suspense>
                ) : (
                    <Redirect to="/" />
                ))
            }
        />
    )
}

export default DynamicRoute