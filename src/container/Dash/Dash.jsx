import React, { Suspense } from 'react'
import { withStyles } from '@material-ui/core'
import DashStyle from './DashStyle'
import DashboardLayout from '../../layouts/Dashboard/Dashboard'
import CustomLoading from '../../component/CustomLoading/CustomLoading'

const Dashboard = props => {
    return (
        <DashboardLayout>
            <Suspense fallback={<CustomLoading />}>
                <DisplayUsers {...props} />
            </Suspense>
        </DashboardLayout>
    )
}

const DisplayUsers = ({classes}) => {
    return (
        <div>
            Dashboard
        </div>
    )
}

export default withStyles(DashStyle)(Dashboard)