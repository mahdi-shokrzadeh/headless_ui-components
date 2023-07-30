import axios from "axios";


const SERVER_URL = "http://localhost:9000" 


export const getAllDisclosures = () => {
    const url = `${SERVER_URL}/disclosures` 
    return axios.get(url);
}