import React, {useContext} from "react";
import { Link } from "react-router-dom";
// style
import HeaderContainer from "./HeaderStyle";
// asset img
import Logo from '../../Components/Logo/Logo';
import {ThemeContext} from '../../Context/ThemeContext';
import SwitchButton from "../../Components/SwitchButton/SwitchButton";


const Header = ({handleTheme}) =>{
    const themeValue = useContext(ThemeContext);
    // valor del tema

    return(
        <HeaderContainer theme={themeValue.theme}>
            
            <Logo />

            {/* button theme */}
            {/* <SwitchButton></SwitchButton> */}

            

            <nav>
                <span onClick={() => handleTheme()}>Pasar a modo obscuro</span>
                <Link to="/" className="link-nav">Home</Link>
                <Link to="/character" className="link-nav">Character</Link>
                <Link to="/aboutus" className="link-nav">About us</Link>
                <Link to="/contact" className="link-nav">Contact</Link>
            </nav>

        </HeaderContainer>

    )
}

export default Header;
