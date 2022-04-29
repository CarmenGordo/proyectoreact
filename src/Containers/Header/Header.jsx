import React from "react";
import { Link } from "react-router-dom";
// style
import HeaderContainer from "./HeaderStyle";
// asset img
import Logo from '../../Components/Logo/Logo';

const Header = () =>{
    return(
        <HeaderContainer>
            <Logo />

            <nav>
                <Link to="/">Home</Link>
            </nav>
        </HeaderContainer>

    )
}

export default Header;