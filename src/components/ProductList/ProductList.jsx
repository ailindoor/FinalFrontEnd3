// src/components/ProductList.jsx
import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        const charactersWithFavorites = data.results.map((character) => ({
          id: character.id,
          name: character.name,
          image: character.image,
        }));
        setCharacters(charactersWithFavorites);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching characters:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="product-list">
      {characters.map((character) => (
        <ProductCard key={character.id} {...character} />
      ))}
    </div>
  );
};

export default ProductList;


