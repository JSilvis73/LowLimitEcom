import React, {useContext} from "react";
import { ShopContext } from "../../context/shopContext";
import '../cart/cart-item';

export const CartItem = (props) => {
    const { id, name, price, image} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCountCartItem} = useContext(ShopContext);

    return (
        <div className="cartItem">
            <img src={image} height='60%' width='60%' />
            <div className="descProduct">
                <h3>{name}</h3>
                <p>${price}</p>
                <div className="handleCountElem">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input className="inputItemBox" value={cartItems[id]} onChange={(e) => updateCountCartItem(Number(e.target.value), id)}/>
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    )
};