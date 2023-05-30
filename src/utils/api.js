import axios from 'axios';

const BASE_URL="https://internship-service.onrender.com";


export const fetchDataFromApi=async(url)=>{
    const response=await axios.get(`${BASE_URL}/${url}`);

    return response.data.data;
}


