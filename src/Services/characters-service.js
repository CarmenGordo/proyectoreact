import { useState, useEffect } from "react";
import { getCharactersRequest } from "../Lib/Requests/get-characters-request";

const useCharacter = ()=>{
    // carga de personajes
    const [loadingCharacter, setLoadingCharacter] = useState(true);
    // character
    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        try{
            const characterResponse = await getCharactersRequest();

            setLoadingCharacter(false);

            return characterResponse;
        }catch(error){
            setLoadingCharacter(false);
        }
    }

    useEffect(() => {
        getCharacters().then(characters => setCharacters(characters))
    }, [])

    console.log(characters)

    return{
        loadingCharacter,

        getCharacters,
        characters
    }

}

export default useCharacter;