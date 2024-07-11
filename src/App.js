import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const calculateTotalAmount = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  return (
    <Router>
      <div>
        <Navbar cart={cart} />
        <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/about" element={About} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} totalAmount={calculateTotalAmount()} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

