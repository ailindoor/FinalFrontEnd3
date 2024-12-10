// src/components/ProductCard.jsx
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, image }) => {
  const { addToFavorites, removeFromFavorites, favorites } = useContext(CartContext);
  const isFavorite = favorites.some((character) => character.id === id);

  const handleFavorites = () => {
    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites({ id, name, image });
    }
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <button onClick={handleFavorites}>
        {isFavorite ? 'Eliminado de favoritos' : 'Agregado a favoritos'}
      </button>
      <Link to={`/character/${id}`}>
        <button>Ver Detalles</button>
      </Link>
    </div>
  );
};

export default ProductCard;



