// src/components/FavoritesModal.jsx
import  { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const FavoritesModal = ({ isOpen, closeModal }) => {
  const { favorites, removeFromFavorites } = useContext(CartContext);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Favoritos agregados</h2>
        {favorites.length === 0 ? (
          <p>No se agregaron personajes aún.</p>
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
        <button onClick={closeModal}>Cerrar</button>
      </div>
    </div>
  );
};

export default FavoritesModal;
