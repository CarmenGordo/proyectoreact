import React, {useEffect, useState} from "react";
// style
import HomeContainer from "./HomeStyle";
// components
import Header from "../../Containers/Header/Header";
import Cards from "../../Components/Cards/Cards";
import CursorPage from "../CursorPage/CursorPage";
import Section from "../../Containers/Section/Section";
import useCharacter from "../../Services/characters-service";


const Home = () => {

    const {
        characters

    } = useCharacter()

    console.log(characters)

    return(
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

            <Section>
                {/* filtros y busqueda */}

                {characters.map(character => {
                    return(
                        <li key={character.id}>
                            <Cards 
                                src= {character.image}
                                name={character.name}
                            />
                        </li>
                    )
                })}

            </Section>

            
        </HomeContainer>
        
    )
}

export default Home;