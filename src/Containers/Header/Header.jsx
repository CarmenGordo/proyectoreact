import React, {useState} from "react";
import { Link } from "react-router-dom";
// style
import HeaderContainer from "./HeaderStyle";
// asset img
import Logo from '../../Components/Logo/Logo';
import {ThemeContext} from '../../Context/ThemeContext';
import SwitchButton from "../../Components/SwitchButton/SwitchButton";
import { darkTheme, lightTheme } from "../../Themes/themes";

const Header = () =>{
  
   const [theme, setTheme] = useState('light');
   

   const handleTheme = () => {
       changeTheme(theme);
       theme === 'light' ? setTheme('dark') : setTheme('light')
   }

   const changeTheme = (theme) =>{
    if(theme === 'dark'){
        localStorage.setItem('body', darkTheme.body);
        localStorage.setItem('text', darkTheme.text);
        localStorage.setItem('text_hover', darkTheme.text_hover);

    }else if(theme === 'light'){
        localStorage.setItem('body', lightTheme.body);
        localStorage.setItem('text', lightTheme.text);
        localStorage.setItem('text_hover', lightTheme.text_hover);
    }
 
    }

    if(theme){
        changeTheme(theme);
    }

    return(
        <HeaderContainer>
            
            <Logo />

            {/* button theme */}
            {/* <SwitchButton></SwitchButton> */}

            <button onClick={handleTheme}>Switch Themeaaa</button>


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
