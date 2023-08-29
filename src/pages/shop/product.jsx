import React from "react";

export const Product = (props) => {
    const {id, name, price, image} = props.data;
    return (
        <div className="product">
           <h2>{name}</h2>
           <p>${price}</p>
           <img src={image} height='100px' />
        </div>
    )
}