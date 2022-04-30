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
                <Link to="/" className="link-nav">Home</Link>
                <Link to="/character" className="link-nav">Character</Link>
                <Link to="/aboutus" className="link-nav">About us</Link>
                <Link to="/contact" className="link-nav">Contact</Link>
            </nav>
        </HeaderContainer>

    )
}

export default Header;