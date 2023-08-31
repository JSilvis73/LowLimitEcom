import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shopContext";


export const Product = (props) => {
    const [isHighlight, setHighlight] = useState(false);
    const {addToCart, cartItems} = useContext(ShopContext);

    function handleMouseOver(event){
        const eventTarget = event.target.name;
        if (eventTarget==='productButton') {
            setHighlight(true);
        }else
        {
            console.log('No Target')
        }
    }

    function handleMouseOut(event){
        const eventTarget = event.target.name;
        if (eventTarget==='productButton') {
            setHighlight(false);
        }else
        {
            console.log('No Target')
        }
    }

    const {id, name, price, image} = props.data;
    
    // This is to tell how many of a specific item is in the cart.
    const cartItemAmount = cartItems[id];
  

    return (
        <div className="product">

           <img src={image} height='80%' width='80%' />
           <h2>{name}</h2>
           <p>${price}</p>
           <button className="addToCartBttn" style={{backgroundColor: isHighlight ? 'grey' : null}} onClick={() => addToCart(id)} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} name="productButton">Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        </div>
    )
}