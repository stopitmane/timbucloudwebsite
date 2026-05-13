import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Home.css';

const products = [
  { id: 1, title: 'Ofada Rice (5kg)', category: 'Grains', description: 'Authentic aromatic Nigerian brown rice, locally grown in Ogun State.', image: '/images/product1.jpeg', price: 4500 },
  { id: 2, title: 'Fresh Tomatoes (Basket)', category: 'Vegetables', description: 'Farm-fresh tomatoes from Jos Plateau, perfect for stews and soups.', image: '/images/product2.jpeg', price: 3200 },
  { id: 3, title: 'Red Palm Oil (5L)', category: 'Oils', description: 'Pure, unrefined palm oil from Edo State. Rich colour and full flavour.', image: '/images/product3.jpeg', price: 6800 },
  { id: 4, title: 'Dried Ugu Leaves (200g)', category: 'Vegetables', description: 'Sun-dried fluted pumpkin leaves, retaining full nutrients and flavour.', image: '/images/product4.jpeg', price: 1200 },
  { id: 5, title: 'Garri (Ijebu, 10kg)', category: 'Grains', description: 'Sour and crunchy Ijebu garri. Best enjoyed soaked or as eba.', image: '/images/product5.jpeg', price: 7500 },
  { id: 6, title: 'Ogiri (Fermented Locust Beans)', category: 'Spices', description: 'Traditional Igbo seasoning that deepens the flavour of soups and stews.', image: '/images/product6.png', price: 850 },
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
          <span className="home__hero-tag">🌾 Farm to Doorstep</span>
          <h1>Fresh Nigerian<br /><span>Agric Products</span></h1>
          <p>Direct from trusted local farmers across Nigeria. Genuine produce, fair prices, fast delivery.</p>
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
