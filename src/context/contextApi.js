import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

import { fetchDataFromApi } from "../utils/api";
export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);
// 
    // const [currentPage, setCurrentPage] = useState(0);
// 
    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
            console.log(contents);
            setSearchResults(contents);
            setLoading(false);
        });
    };







    // useEffect(() => {
    //     fetchSelectedCategoryData(selectedCategory);
    // }, [selectedCategory,currentPage]);

    // const fetchVideos = async () => {
    //       try {
    //         const response = await axios.get('https://internship-service.onrender.com/videos?page=2');
    //         console.log(response);
    //         // setVideos(response.data);
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     }
    // }


    // const fetchSelectedCategoryData = (query) => {
    //     // setLoading(true);
    //     // // fetchDataFromApi(`videos?page=${currentPage}`).then(({ posts }) => {
    //     // fetchDataFromApi().then(({ posts }) => {

    //     //     console.log(posts);
    //     //     // setSearchResults(posts);
    //     //     setLoading(false);
    //     // });
    //     fetchVideos().then(({data})=>{
    //         console.log(data);
    //     });
    // };

    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                selectedCategory,
                setSelectedCategory,
                mobileMenu,
                setMobileMenu,
                // 
                // currentPage,
                // setCurrentPage
                // 
            }}
        >
            {props.children}
        </Context.Provider>
    );
};