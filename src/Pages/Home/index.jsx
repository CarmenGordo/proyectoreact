import React, {useEffect, useState, useContext} from "react";
// style
import HomeContainer from "./HomeStyle";
// components
import Header from "../../Containers/Header/Header";
import Cards from "../../Components/Cards/Cards";
import CursorPage from "../CursorPage/CursorPage";
import Section from "../../Containers/Section/Section";
import useCharacter from "../../Services/characters-service";
import CardsList from "../../Containers/CardsList/CardsList";

//context
import {ThemeContext} from '../../Context/ThemeContext';


const Home = () => {
    const {
        principalCharacters,
        characters,
        info,
        handleNextCharacters,
        handlePrevCharacters
    } = useCharacter()

    console.log('principalCharacters', principalCharacters)

    // tema 
    const themeValue = useContext(ThemeContext);

    return(
        <HomeContainer theme={themeValue.theme}>
            {/* para que salga antes la pag de Cursorpage */}
            {/* {
                !selecterCharcater ? (
                    <CursorPage />

                ) : (
                    <Header />
                )
            } */}
            {/* final pag Cursorpage */}

            <Header 
                handleTheme={() => themeValue.handleTheme()}
            />

            <Section>
                {/* filtros y busqueda */}
                {/* Crear componente CardsList y Cards */}
                {characters.map(character => (
                    <CardsList>
                        
                    </CardsList>
                ))}
            </Section>
            {info?.next && <button onClick={handleNextCharacters}>Next</button>}
            {info?.prev && <button onClick={handlePrevCharacters}>Prev</button>}

            
        </HomeContainer>
        
    )
}

export default Home;