import React, {useEffect, useState, useContext, useRef} from "react";
// style
import HomeContainer from "./HomeStyle";
// components
import Header from "../../Containers/Header/Header";
import Cards from "../../Components/Cards/Cards";
import CursorPage from "../CursorPage/CursorPage";
import Section from "../../Containers/Section/Section";
import useCharacter from "../../Services/characters-service";
import CardsList from "../../Containers/CardsList/CardsList";

// Filters
import Filters from "../../Components/Filters/filter";


// Themes
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../../Themes/globalStyleThemes";
import { lightTheme, darkTheme } from "../../Themes/themes";


const Home = () => {
    const {
        principalCharacters,
        characters,
        info,
        handleNextCharacters,
        handlePrevCharacters
    } = useCharacter()

    console.log('principalCharacters', principalCharacters)

    // const para modificar themes
   const [theme, setTheme] = useState('light');


    // filtros
    let [gender, updateGender] = useState("");
    let [species, updateSpecies] = useState("");




    // buscador para que x defecto sea nullo y no pille na
    const searchFilter = useRef(null);
    // estado para buscador y actualizador listado character
    const [characterList, setCharacterList] = useState([]);
    const [searchCharacter, setSearchCharacter] = useState([]);

    const handleSearch = () => {
        const searchedValue = searchFilter.current.value.toLowerCase();
        const filteredCharacter = characterList.filter(character => character.name.toLowerCase().includes(searchedValue));
        setCharacterList(filteredCharacter);
    }


    return(
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
      
      <HomeContainer>
            {/* para que salga antes la pag de Cursorpage */}
            {/* {
                !selecterCharcater ? (
                    <CursorPage />

                ) : (
                    <Header />
                )
            } */}
            {/* final pag Cursorpage */}

            <Header>

            </Header>
        

            <Filters>

            </Filters>


            <div className="search">
                <input 
                    ref={searchFilter} 
                    type="text" 
                    placeholder="Character finder"
                    onChange={(e) => handleSearch(e)}
                />
            </div>


            <Section>
                {/* Crear componente CardsList y Cards */}
                <CardsList>
                    {characters.map(character => (
                        <Cards
                            src={character.image}
                            name={character.name}
                        />
                    ))}
                </CardsList>
            </Section>
            {info?.next && <button onClick={handleNextCharacters}>Next</button>}
            {info?.prev && <button onClick={handlePrevCharacters}>Prev</button>}

            
        </HomeContainer>
      </>
    </ThemeProvider>
        
        
    )
}

export default Home;