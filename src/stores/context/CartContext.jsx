import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]); 

    const addToCart = (item) => {
        setCartItems((prevCart) => {
            const existingItem = prevCart.find((i) => i.id === item.id);
            if (existingItem) {
                return prevCart.map((i) => 
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prevCart, { ...item, id: item.id || Date.now(), quantity: 1 }];  // Assign unique id if missing
        });
    };

    const removeFromCart = (item) => {
        setCartItems((prevCart) => {
            const existingItem = prevCart.find((i) => i.id === item.id);
            if (existingItem.quantity > 1) {
                return prevCart.map((i) => 
                    i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
                );
            }
            return prevCart.filter((i) => i.id !== item.id);
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
