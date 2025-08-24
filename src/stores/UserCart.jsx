import React from 'react';
import { useCart } from './context/CartContext';
import Navbar from './Components/Navbar';

const UserCart = () => {
    const { cartItems, addToCart, removeFromCart } = useCart();

    return (
        <div>
            <Navbar />
            {cartItems.map((item) => (
                <div className="cart-section" key={item.id}>
                    <div className="cart-">
                        <img src={item.image} alt={item.product} />
                        <button onClick={() => removeFromCart(item)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => addToCart(item)}>+</button>
                    </div>
                    <div className="cart-details">
                        <h3>{item.product}</h3>
                        <h2>{item.price}</h2>   
                        <h3>{item.model}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserCart;
