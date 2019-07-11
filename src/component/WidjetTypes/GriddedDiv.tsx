import React from 'react'

const logInteraction = ():void => {
    console.log('interacted with draggables')
}


const gridDiv = () => {

    return (
        <div>
            <span>
                Test nested components
            </span>

            <h4>im the draggable</h4>

            <button onClick={() => logInteraction()}>
                click me
            </button>
        </div>
    )
}

export default gridDiv