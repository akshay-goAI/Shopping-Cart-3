import React, { useState } from 'react';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeItem = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity} 
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>Total: ${calculateTotal()}</h3>
            <button onClick={() => addItem({ id: 'new-item', name: 'New Item', price: 10, quantity: 1 })}>Add Item</button>
        </div>
    );
};

export default ShoppingCart;