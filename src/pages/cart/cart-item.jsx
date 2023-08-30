import React from "react";

export const CartItem = (props) => {
    const { id, name, price, image} = props.data;

    return (
        <div className="cartItem">
            <img src={image} height='150px' width='150px' />
            <div className="descProduct">
                <h3>{name}</h3>
                <p>${price}</p>
            </div>
        </div>
    )
};