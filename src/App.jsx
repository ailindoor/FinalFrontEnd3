import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';
import Favorites from './components/Favorites/Favorites';
import FavoritesModal from './components/FavoritesModal/FavoritesModal';
import { CartProvider } from './context/CartContext';
import './App.css';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <CartProvider>
      <Router>
        <div className="card">
          <h1>Rick and Morty Shop</h1>
          <button onClick={openModal}>ver favoritos </button>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/character/:id" element={<CharacterDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>

          {/* Modal de Favoritos */}
          <FavoritesModal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;


