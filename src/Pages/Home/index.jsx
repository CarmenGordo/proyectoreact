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

import { Link } from "react-router-dom";

// Filters
import Filters from "../../Components/Filters/filter";

// Search
import CharactersFilter from "../../Components/Search/search"

// Themes
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../../Themes/globalStyleThemes";
import { lightTheme, darkTheme } from "../../Themes/themes";


const Home = () => {
    const {
        principalCharacters,
        characters,
        info,
        // buscador
        handleCharacterFilter,
        // paginacion
        handleNextCharacters,
        handlePrevCharacters
    } = useCharacter()

    console.log('principalCharacters', principalCharacters)

    // const para modificar themes
   const [theme, setTheme] = useState('light');


    // filtros
    let [gender, updateGender] = useState("");
    let [species, updateSpecies] = useState("");


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

            <Header />
        

            <Filters>

            </Filters>

            <CharactersFilter handleCharacterFilter={handleCharacterFilter} />



            <Section>
                
                <CardsList>
                    {characters.map(character => (
                            <Cards
                            id={character.id}
                            src={character.image}
                            name={character.name}
                            status={character.status}
                            origin={character.origin.name}
                        />
                        
                    ))}
                </CardsList>
            </Section>


            {/* paginacion : */}
            {/* {info?.next && <button onClick={handleNextCharacters}>Next</button>}
            {info?.prev && <button onClick={handlePrevCharacters}>Prev</button>} */}

            
        </HomeContainer>
      </>
    </ThemeProvider>
        
        
    )
}

export default Home;