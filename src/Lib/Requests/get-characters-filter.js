import axios from "axios";

export const getCharactersRequest = ()=>{
    return axios(`https://rickandmortyapi.com/api/character/gender=${gender}&species=${species}`, {
        method: 'GET'
    });
};