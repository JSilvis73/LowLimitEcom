import React from "react";
import './shop.css';
import { productList } from "../../productList";
import { Product } from "./product";
import {Footer} from '../../components/footer';

export const Shop = () => {
    return <div className="shopPage">
        <div className="shopHeader">
            <h1>Shop</h1>
        </div>
        <div className="productList">
         {productList.map((product) => <Product 
          data={product}
            />)}
        </div>
        <div className="shopFooter">
            <Footer />
        </div>
       
    </div>
};