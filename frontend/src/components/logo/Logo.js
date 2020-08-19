import React from 'react';
import logo from "../../assets/LOGO.png";
import {Link} from "react-router-dom";
import "./logo.css";

const Logo = () => {
    return ( 
        <Link to="/"><img id="logo" src={logo} alt="logo" /></Link>
    )
}

export default Logo
