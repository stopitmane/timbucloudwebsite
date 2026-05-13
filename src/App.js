import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

const App = () => (
  <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  </CartProvider>
);

export default App;
