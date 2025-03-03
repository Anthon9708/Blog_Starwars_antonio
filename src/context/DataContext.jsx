import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (item) => {
    if (!favorites.some((fav) => fav.name === item.name)) {
      setFavorites([...favorites, item]);
    }
  };
  
  const removeFavorite = (name) => {
    setFavorites(favorites.filter(fav => fav.name !== name));
  };

  return (
    <DataContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

