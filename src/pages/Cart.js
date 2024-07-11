import React from 'react';
import Container from '../styles/Container';

const Cart = ({ cart, removeFromCart, totalAmount }) => {
  return (
    <Container>
      <h1>Your Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
            <p>Price: ${item.price.toFixed(2)}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total Amount: ${totalAmount}</h2>
    </Container>
  );
};

export default Cart;



