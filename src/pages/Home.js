import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Home.css';

const products = [
  { id: 1, title: 'Stylish Shoulder Bag', category: 'Bags', description: 'Trendy shoulder bag with adjustable strap, perfect for everyday use and casual outings.', image: '/images/product1.jpeg', price: 15000 },
  { id: 2, title: 'Designer Handbag', category: 'Bags', description: 'Elegant designer handbag crafted from premium materials with spacious compartments.', image: '/images/product2.jpeg', price: 22000 },
  { id: 3, title: 'Classic Tote Bag', category: 'Bags', description: 'Spacious tote bag with multiple pockets, ideal for work, shopping, or travel.', image: '/images/product3.jpeg', price: 18500 },
  { id: 4, title: 'Fashion Sunglasses', category: 'Eyewear', description: 'UV protection sunglasses with stylish frames and polarized lenses for eye comfort.', image: '/images/product4.jpeg', price: 8500 },
  { id: 5, title: 'Statement Necklace', category: 'Jewelry', description: 'Eye-catching statement necklace to elevate any outfit with elegant design.', image: '/images/product5.jpeg', price: 12000 },
  { id: 6, title: 'Woven Palm Bag', category: 'Bags', description: 'Handcrafted woven palm bag with natural texture, perfect for beach or casual wear.', image: '/images/product6.png', price: 9500 },
];

const categories = ['All', ...new Set(products.map(p => p.category))];

const Home = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');
  const [added, setAdded] = useState({});

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  const handleAdd = (product) => {
    addToCart(product);
    setAdded(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => setAdded(prev => ({ ...prev, [product.id]: false })), 1200);
  };

  return (
    <main className="home">
      <section className="home__hero">
        <div className="home__hero-content">
          <span className="home__hero-tag">✨ Fresh Accessories</span>
          <h1>Premium<br /><span>Accessories Store</span></h1>
          <p>Discover the latest collection of shoes, bags, cameras, glasses, and more. Quality accessories for your lifestyle.</p>
        </div>
      </section>

      <section className="home__shop">
        <div className="home__container">
          <div className="home__filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`home__filter-btn ${activeCategory === cat ? 'home__filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="home__grid">
            {filtered.map(product => (
              <article key={product.id} className="product-card">
                <div className="product-card__img-wrap">
                  <img src={product.image} alt={product.title} className="product-card__img" />
                  <span className="product-card__category">{product.category}</span>
                </div>
                <div className="product-card__body">
                  <h2 className="product-card__title">{product.title}</h2>
                  <p className="product-card__desc">{product.description}</p>
                  <div className="product-card__footer">
                    <span className="product-card__price">₦{product.price.toLocaleString()}</span>
                    <button
                      className={`product-card__btn ${added[product.id] ? 'product-card__btn--added' : ''}`}
                      onClick={() => handleAdd(product)}
                    >
                      {added[product.id] ? '✓ Added' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
