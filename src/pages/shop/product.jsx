import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shopContext";


export const Product = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const {addToCart, cartItems} = useContext(ShopContext);

    // Handle highlighting of text/buttons
    const handleMouseOver = () => {
            setIsHovered(true);
    }

    const handleMouseOut = () => {
            setIsHovered(false);
    }

    const {id, name, price, image} = props.data;
    
    // This is to tell how many of a specific item is in the cart.
    const cartItemAmount = cartItems[id];
  

    return (
        <div className="product">
            <button className="productItemBttn">
           <img  className="productImg" src={image} />
           <h2>{name}</h2>
           <p>${price}</p>
           <button className="addToCartBttn" style={{backgroundColor: isHovered ? 'grey' : null}} onClick={() => addToCart(id)} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} name="productButton">Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
           </button>
        </div>
    )
}