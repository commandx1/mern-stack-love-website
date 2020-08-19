import React from 'react';
import "./DrawerToggleButton.css";
import RightArrow from "@material-ui/icons/ArrowRight"

const DrawerToggleButton = props => {
    return (
        <div>
            <button onClick={props.drawerToggleClickHandler} className="toggle-button">
                {/* <div className="toggle-button__line"/>
                <div className="toggle-button__line"/>
                <div className="toggle-button__line"/> */}
                {props.children}
                <RightArrow/>
            </button>
        </div>
    )
}

export default DrawerToggleButton
