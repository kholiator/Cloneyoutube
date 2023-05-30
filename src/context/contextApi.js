import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../utils/api";
export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchSelectedCategoryData(currentPage);
  }, [selectedCategory, setCurrentPage, currentPage]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`videos?page=${query}`).then(({ posts }) => {
      setSearchResults(posts);
      setLoading(false);
    });
  };

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
        currentPage,
        setCurrentPage,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
