import React from "react";
import { Link } from "react-router-dom";
// style
import HeaderContainer from "./HeaderStyle";
// asset img
import Logo from '../../Components/Logo/Logo';
// import { useContext } from "react";

const Header = () =>{
    // const themeValue = useContext(ThemeContext);

    return(
        <HeaderContainer >
            {/* para que pille el tema, su valor tiene que ser = al tema theme=themeValue.theme */}
            <Logo />

            {/* button theme */}
            <button></button>

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