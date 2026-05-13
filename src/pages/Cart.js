import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, totalAmount } = useCart();

  if (cart.length === 0) {
    return (
      <main className="cart">
        <div className="cart__container">
          <div className="cart__empty">
            <span className="cart__empty-icon">🛒</span>
            <h2>Your cart is empty</h2>
            <p>Add some fresh produce to get started.</p>
            <Link to="/" className="cart__cta">Browse Products</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="cart">
      <div className="cart__container">
        <h1 className="cart__heading">Your Cart</h1>
        <div className="cart__layout">
          <div className="cart__items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item__img-wrap">
                  <img src={item.image} alt={item.title} className="cart-item__img" />
                </div>
                <div className="cart-item__details">
                  <h3 className="cart-item__title">{item.title}</h3>
                  <p className="cart-item__category">{item.category}</p>
                  <div className="cart-item__meta">
                    <span className="cart-item__price">₦{item.price.toLocaleString()} × {item.qty}</span>
                    <span className="cart-item__subtotal">₦{(item.price * item.qty).toLocaleString()}</span>
                  </div>
                </div>
                <button className="cart-item__remove" onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.title}`}>✕</button>
              </div>
            ))}
          </div>

          <aside className="cart__summary">
            <h2>Order Summary</h2>
            <div className="cart__summary-row">
              <span>Items ({cart.reduce((s, i) => s + i.qty, 0)})</span>
              <span>₦{parseFloat(totalAmount).toLocaleString()}</span>
            </div>
            <div className="cart__summary-row">
              <span>Delivery</span>
              <span className="cart__free">Free</span>
            </div>
            <div className="cart__summary-total">
              <span>Total</span>
              <span>₦{parseFloat(totalAmount).toLocaleString()}</span>
            </div>
            <button className="cart__checkout-btn">Proceed to Checkout</button>
            <Link to="/" className="cart__continue">← Continue Shopping</Link>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Cart;
