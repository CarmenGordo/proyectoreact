import { useState, useEffect } from "react";
import { getCharactersRequest } from "../Lib/Requests/get-characters-request";

const useCharacter = (url) => {
    // carga de personajes
    const [loadingCharacter, setLoadingCharacter] = useState(true);
    // character
    const [data, setData] = useState({});
    const [principalCharacters, setPrincipalCharacters] = useState([])

    const getCharacters = async () => {
        try{
            const characterResponse = await getCharactersRequest();

            setLoadingCharacter(false);

            return characterResponse.data;
        }catch(error){
            setLoadingCharacter(false);
        }
    }

    const handleNextCharacters = () => {

    }

    const handlePrevCharacters = () => {

    }

    useEffect(() => {
        getCharacters().then(data => {
            // coger los 5 primeros de data.results
            setPrincipalCharacters([
                data.results.slice(0, 5)
            ])
            setData(data)
        })
    }, [])

    return{
        loadingCharacter,
        principalCharacters,
        characters: data.results || [],
        info: data.info,
        handleNextCharacters,
        handlePrevCharacters
    }
}

export default useCharacter;