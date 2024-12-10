import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (character) => {
    setFavorites((prevFavorites) => [...prevFavorites, character]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((character) => character.id !== id));
  };

  return (
    <CartContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };




