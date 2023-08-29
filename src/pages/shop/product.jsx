import React, { useState } from "react";


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

    return (
        <div className="product">

           <img src={image} height='150px' width='150px' />
           <h2>{name}</h2>
           <p>${price}</p>
           <button className="productButton" style={{backgroundColor: isHighlight ? 'grey' : null}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} name="productButton">Add to Cart</button>
        </div>
    )
}