import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shopContext";


export const Product = (props) => {
    const [isHighlight, setHighlight] = useState(false);

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

    const {addToCart} = useContext(ShopContext);

    return (
        <div className="product">

           <img src={image} height='150px' width='150px' />
           <h2>{name}</h2>
           <p>${price}</p>
           <button className="addToCartBttn" style={{backgroundColor: isHighlight ? 'grey' : null}} onClick={() => addToCart(id)} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} name="productButton">Add to Cart</button>
        </div>
    )
}