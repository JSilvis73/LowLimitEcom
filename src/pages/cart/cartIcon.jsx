import Reac, {useContext} from "react";
import {ShoppingCart} from 'phosphor-react';
import { ShopContext } from "../../context/shopContext";


export const CartIcon = () => {
    const {cartItems} = useContext(ShopContext);

    const getTotalItemCount = () => {
       let totalItems = 0;
       for (const item in cartItems) {
        totalItems += cartItems[item];

       }
        return totalItems;
    };

    // const getTotalAmount = () => {
    //     let totalAmount = 0;
    //    for (const item in cartItems){
    //     if (cartItems[item] > 0) {
    //         let itemInfo = productList.find((product) => product.id===Number(item));
    //         totalAmount += cartItems[item] * itemInfo.price;
    //     }
    //    }
    //    return totalAmount;
    // };

    console.log(getTotalItemCount())
    return (
        <div>
            <i><ShoppingCart size={24}/></i>
            
            <span>{getTotalItemCount()}</span>
        </div>

    )
}