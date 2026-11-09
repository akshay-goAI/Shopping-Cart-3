import React, { useState } from 'react';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    const addItemToCart = (item) => {
        setCartItems([...cartItems, item]);
        setTotalCost(totalCost + item.price);
    };

    const removeItemFromCart = (itemId) => {
        const updatedItems = cartItems.filter(item => item.item_id !== itemId);
        const updatedTotal = updatedItems.reduce((acc, item) => acc + item.price, 0);
        setCartItems(updatedItems);
        setTotalCost(updatedTotal);
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.item_id}>
                        {item.name} - ${item.price} 
                        <button onClick={() => removeItemFromCart(item.item_id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>Total Cost: ${totalCost}</h3>
            <button onClick={() => addItemToCart({ item_id: '1', name: 'Sample Item', price: 10 })}>Add Item</button>
        </div>
    );
};

export default ShoppingCart;