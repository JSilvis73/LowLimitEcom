import React, {useContext} from "react";
import { ShopContext } from "../../context/shopContext";

export const CartItem = (props) => {
    const { id, name, price, image} = props.data;
    const {cartItems} = useContext(ShopContext);

    return (
        <div className="cartItem">
            <img src={image} height='150px' width='150px' />
            <div className="descProduct">
                <h3>{name}</h3>
                <p>${price}</p>
                <div className="handleCount">
                    <button>-</button>
                    <input value={cartItems[id]}/>
                    <button>+</button>
                </div>
            </div>
        </div>
    )
};