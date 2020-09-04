import React, { useContext } from 'react';
import logo from "../../assets/LOGO.png";
import {Link} from "react-router-dom";
import {authContext} from '../../WRAPPERS/Context/myContext'
import "./logo.css";

const Logo = () => {
    const auth = useContext(authContext)
    
    return ( 
        <Link to={auth.isLoggedIn ? "/" : "/Login"}><img id="logo" src={logo} alt="logo" /></Link>
    )
}

export default Logo
