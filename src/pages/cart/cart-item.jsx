import React, {useContext} from "react";
import { ShopContext } from "../../context/shopContext";

export const CartItem = (props) => {
    const { id, name, price, image} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCountCartItem} = useContext(ShopContext);

    return (
        <div className="cartItem">
            <img src={image} height='150px' width='150px' />
            <div className="descProduct">
                <h3>{name}</h3>
                <p>${price}</p>
                <div className="handleCount">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e) => updateCountCartItem(Number(e.target.value), id)}/>
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    )
};