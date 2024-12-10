import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToFavorites } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter({
          ...data,
          price: parseFloat((Math.random() * (50 - 10) + 10).toFixed(2)), 
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error Al obtener los datos:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (!character) return <div>No se encontro personaje</div>;

  const handleAddToFavorites = () => {
    addToFavorites(character);
  };

  return (
    <div className="character-details">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p><strong>Estado:</strong> {character.status}</p>
      <p><strong>Especie:</strong> {character.species}</p>
      <p><strong>Genero:</strong> {character.gender}</p>
      <button onClick={handleAddToFavorites}>Agregar a favoritos</button>
    </div>
  );
};

export default CharacterDetails;

