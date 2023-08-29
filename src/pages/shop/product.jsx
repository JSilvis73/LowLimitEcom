import React from "react";

export const Product = (props) => {
    const {id, name, price, image} = props.data;
    return (
        <div className="product">

           <img src={image} height='150px' width='150px' />
           <h2>{name}</h2>
           <p>${price}</p>
           <button className="productButton">Add to Cart</button>
        </div>
    )
}