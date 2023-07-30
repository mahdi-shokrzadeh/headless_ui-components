import axios from "axios";


const SERVER_URL = "http://localhost:9000" 


export const getAllElements = () => {
    const url = `${SERVER_URL}/groups` 
    return axios.get(url);
}