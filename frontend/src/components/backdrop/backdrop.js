import React from 'react'
import './backdrop.css'

const backdrop = (props) => {
    return (
        <div onClick={props.backdropClickHandler} className="backdrop" />
    )
}

export default backdrop
