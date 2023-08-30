import React, {createContext, useState} from "react";
import { productList } from "../productList";

export const ShopContext = createContext(null);

//Looping through cart to calculate how many of the item is requested.
const getDefaultCart = () => {
    let cart = {};
    for (let index = 1; index < productList.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // Adding to cart.
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    }

    // Removing from cart.
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }

    //Creating a value to pass out of component.
    const contextValue = {cartItems, addToCart, removeFromCart};

    console.log(cartItems);

    return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
    );
}