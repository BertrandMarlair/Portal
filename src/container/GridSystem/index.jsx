import React, { Suspense, useRef, useEffect, useState } from 'react'
import { withStyles } from '@material-ui/core'
import GridSystemStyle from './GridSystemStyle'
import CustomLoading from '../../component/CustomLoading/CustomLoading'
import GriddedDiv from '../../component/WidjetTypes/GriddedDiv'
import GridLayout from 'react-grid-layout'
import Paper from '@material-ui/core/Paper'
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

const GridSystem = props => (
    <Suspense fallback={<CustomLoading />}>
        <Container {...props} />
    </Suspense>
)

const Container = ({classes, grid, layout}) => {
    const dashboardLayoutEL = useRef(null);

    const [ dashboardSise,  setDashboardSize ] = useState(0)
    const [ gridLayout, setGridLayout ] = useState(
        [
            { i: 'a', x: 0, y: 0, w: 5, h: 8, static: false },
            { i: 'b', x: 0, y: 6, w: 4, h: 3, minW: 2, maxW: 4, static: false },
            { i: 'c', x: 4, y: 0, w: 10, h: 6, static: false }
        ]
    )

    useEffect(() => {
        setDashboardSize(dashboardLayoutEL.current.clientWidth)
        window.addEventListener('resize', resizeWindow)
        return () => {
            window.removeEventListener('resize', resizeWindow)
        };
    }, [])

    const resizeWindow = () => {
        setDashboardSize(dashboardLayoutEL.current.clientWidth)
    }

    console.table(layout)

    return (
        <div ref={dashboardLayoutEL}>
            <div onClick={() => setGridLayout([
                { i: 'a', x: 0, y: 0, w: 5, h: 8, static: true },
                { i: 'b', x: 0, y: 6, w: 4, h: 3, minW: 2, maxW: 4, static: true },
                { i: 'c', x: 4, y: 0, w: 10, h: 6, static: true }
            ])}>
                change layout
            </div>
            <GridLayout 
                className="layout" 
                cols={layout.cols} 
                rowHeight={layout.rowHeight} 
                width={dashboardSise} 
                layout={gridLayout}
                draggableHandle={"header, header *"}
            >
                {gridLayout.map(item => (
                    <Paper 
                        className={classes.girdLayoutItem} 
                        key={`${item.i}`} 
                    >
                        <header>Drag</header>
                        {item.i}
                        <GriddedDiv />
                    </Paper>
                ))}
            </GridLayout>
        </div>
    )
}

export default withStyles(GridSystemStyle)(GridSystem)