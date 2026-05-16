import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Home.css';

const products = [
  {
    id: 1, title: 'Ofada Rice (5kg)', category: 'Grains',
    description: 'Authentic aromatic Nigerian brown rice, locally grown in Ogun State.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80',
    price: 4500, rating: 4.8, sold: 320,
  },
  {
    id: 2, title: 'Fresh Tomatoes (Basket)', category: 'Vegetables',
    description: 'Farm-fresh tomatoes from Jos Plateau, perfect for stews and soups.',
    image: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=400&q=80',
    price: 3200, rating: 4.6, sold: 210,
  },
  {
    id: 3, title: 'Red Palm Oil (5L)', category: 'Oils',
    description: 'Pure, unrefined palm oil from Edo State. Rich colour and full flavour.',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80',
    price: 6800, rating: 4.9, sold: 180,
  },
  {
    id: 4, title: 'Dried Ugu Leaves (200g)', category: 'Vegetables',
    description: 'Sun-dried fluted pumpkin leaves, retaining full nutrients and flavour.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80',
    price: 1200, rating: 4.5, sold: 145,
  },
  {
    id: 5, title: 'Garri Ijebu (10kg)', category: 'Grains',
    description: 'Sour and crunchy Ijebu garri — best soaked or as eba.',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80',
    price: 7500, rating: 4.7, sold: 290,
  },
  {
    id: 6, title: 'Ogiri Seasoning (100g)', category: 'Spices',
    description: 'Traditional Igbo fermented locust beans that deepen the flavour of any soup.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80',
    price: 850, rating: 4.4, sold: 98,
  },
  {
    id: 7, title: 'Groundnut Oil (3L)', category: 'Oils',
    description: 'Cold-pressed groundnut oil from Kano. Clean, light, and perfect for frying.',
    image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400&q=80',
    price: 5200, rating: 4.6, sold: 167,
  },
  {
    id: 8, title: 'Fresh Pepper Assorted (500g)', category: 'Spices',
    description: 'Mixed fresh peppers — tatashe, scotch bonnet, and green pepper.',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&q=80',
    price: 900, rating: 4.3, sold: 230,
  },
];

const categories = ['All', ...new Set(products.map(p => p.category))];

const Home = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [added, setAdded] = useState({});

  const filtered = products
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()) ||
                 p.description.toLowerCase().includes(search.toLowerCase()));

  const handleAdd = (product) => {
    addToCart(product);
    setAdded(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => setAdded(prev => ({ ...prev, [product.id]: false })), 1400);
  };

  const featured = products.slice(0, 3);

  return (
    <main className="home">

      {/* Hero */}
      <section className="home__hero">
        <div className="home__hero-content">
          <span className="home__hero-tag">🌾 Farm to Doorstep</span>
          <h1>Fresh Nigerian<br /><span>Agric Products</span></h1>
          <p>Straight from trusted local farmers across Nigeria.<br />Real produce. Fair prices. Fast delivery.</p>
          <div className="home__search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search for yam, garri, palm oil..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="home__hero-stats">
            <div className="hero-stat"><strong>500+</strong><span>Products</span></div>
            <div className="hero-stat-divider" />
            <div className="hero-stat"><strong>50+</strong><span>Farmers</span></div>
            <div className="hero-stat-divider" />
            <div className="hero-stat"><strong>24hr</strong><span>Delivery</span></div>
          </div>
        </div>
        <div className="home__hero-imgs">
          {featured.map(p => (
            <div key={p.id} className="hero-img-card">
              <img src={p.image} alt={p.title} />
              <span>₦{p.price.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Shop */}
      <section className="home__shop">
        <div className="home__container">

          <div className="home__shop-header">
            <h2>Our Products</h2>
            <span className="home__count">{filtered.length} item{filtered.length !== 1 ? 's' : ''}</span>
          </div>

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

          {filtered.length === 0 ? (
            <div className="home__empty">
              <span>🔍</span>
              <p>No products match "<strong>{search}</strong>"</p>
              <button onClick={() => setSearch('')}>Clear search</button>
            </div>
          ) : (
            <div className="home__grid">
              {filtered.map(product => (
                <article key={product.id} className="product-card">
                  <div className="product-card__img-wrap">
                    <img src={product.image} alt={product.title} className="product-card__img" loading="lazy" />
                    <span className="product-card__category">{product.category}</span>
                  </div>
                  <div className="product-card__body">
                    <h2 className="product-card__title">{product.title}</h2>
                    <p className="product-card__desc">{product.description}</p>
                    <div className="product-card__meta">
                      <span className="product-card__rating">★ {product.rating}</span>
                      <span className="product-card__sold">{product.sold} sold</span>
                    </div>
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
          )}
        </div>
      </section>

      {/* Trust banner */}
      <section className="home__trust">
        <div className="home__container">
          <div className="trust-grid">
            <div className="trust-item"><span>🚚</span><div><strong>Free Delivery</strong><p>Orders over ₦10,000</p></div></div>
            <div className="trust-item"><span>✅</span><div><strong>Verified Farmers</strong><p>Every seller is vetted</p></div></div>
            <div className="trust-item"><span>🔄</span><div><strong>Easy Returns</strong><p>7-day return policy</p></div></div>
            <div className="trust-item"><span>🔒</span><div><strong>Secure Payment</strong><p>Powered by Paystack</p></div></div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
