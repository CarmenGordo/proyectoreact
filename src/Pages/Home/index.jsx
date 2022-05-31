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
import { Footer } from "../../Containers/Footer/Footer";


const Home = () => {
    const {
        // principalCharacters,
        characters,
        info,
        // paginacion
        // handleNextCharacters,
        // handlePrevCharacters
    } = useCharacter()

    // buscador
    const searchBar = useRef(null);
    const [searchedCharacter, setSearchedCharacter] = useState([]);
    const handleSearch = () => {
        const searchedValue = searchBar.current.value.toLowerCase();
        const filteredCharacter = characters.filter(character => character.name.toLowerCase().includes(searchedValue));
        setSearchedCharacter(filteredCharacter);
    }



    // console.log('principalCharacters', principalCharacters)

    // filtros
    // let [gender, updateGender] = useState("");
    // let [species, updateSpecies] = useState("");


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

            <Header reference={searchBar}
            handleChange={(e) => handleSearch(e)}/>

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

            <Footer />
            
        </HomeContainer>
     
    )
}

export default Home;