import axios from 'axios';
// const axios = require('axios');

const BASE_URL="https://youtube138.p.rapidapi.com";

const options = {
 
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi=async(url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}


// const BASE_URL="https://internship-service.onrender.com/videos?page=2";

// // export const fetchDataFromApi=async(url)=>{
// //     const {data}=await axios.get(`${BASE_URL}/${url}`);
// //     return data;
// // }
// export const fetchDataFromApi=async()=>{
//   const {data}=await axios.get(`${BASE_URL}`);
//   return data;
// }