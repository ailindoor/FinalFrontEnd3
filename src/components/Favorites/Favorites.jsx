// src/components/Favorites.jsx
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(CartContext);

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No hay favoritos aún, agrega algunos.</p>
      ) : (
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite.id}>
              <img src={favorite.image} alt={favorite.name} />
              <span>{favorite.name}</span>
              <button onClick={() => removeFromFavorites(favorite.id)}>Eliminar</button>
              <Link to={`/character/${favorite.id}`}>
                <button>Ver Detalles</button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
