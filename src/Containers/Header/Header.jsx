import React, {useState} from "react";
import { Link } from "react-router-dom";
// style
import HeaderContainer from "./HeaderStyle";
// asset img
import Logo from '../../Components/Logo/Logo';

// buscador
import CharactersFilter from "../../Components/Search/Search";
import useCharacter from "../../Services/characters-service";

const Header = (handleChange) =>{
    
   // const para modificar themes
//    const [theme, setTheme] = useState('light');

//    const handleTheme = () => {
//        localStorage.setItem("name", JSON.stringify(theme === 'light' ? JSON.stringify(darkTheme) : JSON.stringify(lightTheme)))
//        theme === 'light' ? setTheme('dark') : setTheme('light')
//    }

//    boton responsive
//    const [openResponsive, setOpenResponsive] = useState(false)

//    const handleOpenButton = () =>{
//     setOpenResponsive(!openResponsive)
//    }

const {
    // buscador
    handleCharacterFilter,
} = useCharacter()


    return(
        <HeaderContainer>
            
            <Logo />

            <CharactersFilter onChange={(e) => {handleChange(e)}} />
            {/* onChange={handleChange}  */}


            <nav className="normal">
                <Link to="/" className="link-nav">Home</Link>
                <Link to="/aboutus" className="link-nav">About us</Link>
                <Link to="/contact" className="link-nav">Contact</Link>
            </nav>

            {/* <button handleOpenButton={handleOpenButton}>menu</button>
            <nav className="responsive">

            </nav> */}

        </HeaderContainer>

    )
}

export default Header;
