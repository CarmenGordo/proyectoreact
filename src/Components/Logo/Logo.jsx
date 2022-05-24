import React from "react";
import { Link } from "react-router-dom";
// style
import LogoContainer from "./LogoStyle";
// assets img
import logo from '../../Assets/Images/logo.png';


const Logo = () => {
    return(
        <LogoContainer>
            <Link to="/">
                <img className="logo-image" src={logo} alt="Logotipo Pickle Rick" />
            </Link>
        </LogoContainer>
    )
}

export default Logo;
