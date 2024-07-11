import React from 'react';
import Container from '../styles/Container';

const products = [
  { id: 1, title: 'Product 1', description: 'Description for product 1', image: '/images/product1.jpeg', price: 10.00 },
  { id: 2, title: 'Product 2', description: 'Description for product 2', image: '/images/product2.jpeg', price: 20.00 },
  { id: 3, title: 'Product 3', description: 'Description for product 3', image: '/images/product3.jpeg', price: 30.00 },
  { id: 4, title: 'Product 4', description: 'Description for product 4', image: '/images/product4.jpeg', price: 40.00 },
  { id: 5, title: 'Product 5', description: 'Description for product 5', image: '/images/product5.jpeg', price: 50.00 },
  { id: 6, title: 'Product 6', description: 'Description for product 6', image: '/images/product6.png', price: 60.00 },
];

const Home = ({ addToCart }) => {
  return (
    <Container>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Home;

