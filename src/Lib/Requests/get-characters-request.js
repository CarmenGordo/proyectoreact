import axios from "axios";

export const getCharactersRequest = (url)=>{
    return axios(url, {
        method: 'GET'
    });
};