import React, { useContext } from "react";
import { productList } from "../../productList";
import { ShopContext } from "../../context/shopContext";
import { CartItem } from "./cart-item";

export const Cart = () => {
const {cartItems} = useContext(ShopContext);

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
        
        <div className="checkout">
            <p>Subtotal: ${}</p>
            <button>Continue Shopping</button>
            <button>Checkout</button>
        </div>
    </div>
}