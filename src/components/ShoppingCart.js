import React, { useState, useEffect } from 'react';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        // Calculate total cost whenever cartItems change
        const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setTotalCost(total);
    }, [cartItems]);

    const addItem = (item) => {
        setCartItems(prevItems => [...prevItems, item]);
    };

    const removeItem = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.item_id !== itemId));
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.item_id}>
                        {item.name} - ${item.price} x {item.quantity}
                        <button onClick={() => removeItem(item.item_id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
            {/* Add functionality to add items here */}
        </div>
    );
};

export default ShoppingCart;