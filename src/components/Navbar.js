import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cart }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cart">Cart ({cart.length})</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;




