import Reac, {useContext} from "react";
import {ShoppingCart} from 'phosphor-react';
import { ShopContext } from "../../context/shopContext";
import './cartIcon.css';


export const CartIcon = () => {
    const {cartItems} = useContext(ShopContext);

    const getTotalItemCount = () => {
       let totalItems = 0;
       for (const item in cartItems) {
        totalItems += cartItems[item];

       }
        return totalItems;
    };


    console.log(getTotalItemCount())
    return (
        <div>
            <i className=""><ShoppingCart size={24}/></i>  
            <span className="overColorBlack backGroundWhite alignColumnCenter textXSmall">{getTotalItemCount()}</span>
        </div>

    )
}