import { useState, useEffect } from "react";
import { getCharactersRequest } from "../Lib/Requests/get-characters-request";

const useCharacter = (url) => {
    // carga de personajes
    const [loadingCharacter, setLoadingCharacter] = useState(true);
    // recoger character
    const [data, setData] = useState({});
    // para sacr los 5 characterprincipales
    const [principalCharacters, setPrincipalCharacters] = useState([])
    // character recargados para buscador
    // const [charactersFilter, setCharactersFilter] = useState([])

    const getCharacters = async () => {
        try{
            const characterResponse = await getCharactersRequest();

            setLoadingCharacter(false);

            return characterResponse.data;
        }catch(error){
            setLoadingCharacter(false);
        }
    }

    // para buscador
    // const handleCharacterFilter = (event) => {
    //     setCharactersFilter(
    //         data.filter(character =>
    //         character.name.toLowerCase().search(event.target.value.toLowerCase().trim()) >= 0
    //       )
    //     )
    // }



    // para paginacion:
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
            // setCharactersFilter(data)
            setData(data)
        })
    }, [])

    return{
        loadingCharacter,
        principalCharacters,
        characters: data.results || [],
        info: data.info,
        charactersSearch: data,
        // buscador
        // handleCharacterFilter,
        // paginacion
        handleNextCharacters,
        handlePrevCharacters
    }
}

export default useCharacter;