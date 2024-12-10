// src/components/Cart.jsx
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import styles from './Cart.module.css';
import Counter from '../Counter/Counter';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum,{price}) => sum + price, 0);

  return (
    <div className={styles.cart}>
      <h2>Tienda</h2>
      <ul>
        {cart.map(({id, image, name, price}) => (
          <li key={id}>
            <img src={image} alt={name} />
            <span >{name}</span>
            <span>${price}</span>
            <button onClick={() => removeFromCart(id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div>
        <Counter/>
        <span>Total: ${total.toFixed(2)}</span>
        <button onClick={clearCart}>Limpiar Carrito</button>
      </div>
    </div>
  );
};

export default Cart;
