import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import useCharacter from "../../Services/characters-service";

// components
import Header from "../../Containers/Header/Header";
import { Footer } from "../../Containers/Footer/Footer";

import { CharacterDetailsContainer } from "./CharacterDetailsPageStyle";

const CharacterDetailsPage = () =>{

    const { name } = useParams();

    const {
        characters,
    } = useCharacter(`https://rickandmortyapi.com/api/character/${name}`);

    console.log("character-------------", characters);

    // const params = useParams();
    // const characterService = useCharacter();
    // // para el character seleccionado
    // const [selectedCharacter, setSelectedCharacter] = useState({});

    // const getCharacterInfo = async (url) => {
    //     try{
    //         const characterRequest = await characterService.getCharacters(url);
    //         const character = await characterRequest.data;
    //         setSelectedCharacter(character);
    //     }catch(error){
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     getCharacterInfo(`https://rickandmortyapi.com/api/character/${params.name}`);
    // }, []);


    return(
    <>
        <Header/>

        <CharacterDetailsContainer>
            <h1 className="name_character">{characters.name}</h1>
       
            <div className="card_character">
                <img className="img_character" src={characters.image} alt="img of character" />

                <div className="info_character">
                    <div>Gender: {characters.gender}</div>
                    <div>Species: {characters.species}</div>
                    <div>Status: {characters.status}</div>
                    <div>Type: {characters.type}</div>
                    {/* <div>Location: {characters.location.name}</div> */}
                </div>
            </div>
        </CharacterDetailsContainer>

        <Footer/>

    </>    
    )
}

export default CharacterDetailsPage;