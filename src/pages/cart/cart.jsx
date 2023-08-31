import React, { useContext } from "react";
import { productList } from "../../productList";
import { ShopContext } from "../../context/shopContext";
import { CartItem } from "./cart-item";
import {useNavigate} from 'react-router-dom';

export const Cart = () => {
const {cartItems, getTotalAmount} = useContext(ShopContext);
const totalAmount = getTotalAmount();
const navigate = useNavigate();

    return <div
         className="cart">
            <div className="cartHeader">
                <h1>Your Cart Items:</h1>
            </div>
            <div className="cartItems">
                {productList.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />;
                    }
                })}
            </div>
        
        {totalAmount > 0? (
        <div className="checkout">
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={() => navigate('/')}>Continue Shopping</button>
            <button>Checkout</button>
        </div>
        ):(
            <h1>Your cart is empty</h1>
        )}
    </div>
}