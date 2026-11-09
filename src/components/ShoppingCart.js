import React from 'react';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="shopping-cart">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty. Add items to your cart!</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.item_id}>
                                {item.name} - {item.quantity} x ${item.price.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                    <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;