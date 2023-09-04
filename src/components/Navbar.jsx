import React, { useState } from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import {ShoppingCart} from 'phosphor-react';
import { CartIcon } from "../pages/cart/cartIcon";

export default function Navbar(){
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredCart, setIsHoveredCart] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const handleMouseEnterCart = () => {
        setIsHoveredCart(true);
    }

    const handleMouseLeaveCart = () => {
        setIsHoveredCart(false);
    }

    return (
        <div className="navigation">
             <h3 className="navHeader" style={{color: 'yellowgreen'}}>LowLimit</h3>
            <div className="links">
               
                <Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{color: isHovered? 'white' : ''}} to='/'>Shop</Link>
                <Link onMouseEnter={handleMouseEnterCart} onMouseLeave={handleMouseLeaveCart} style={{color: isHoveredCart? 'white' : ''}} to='/cart'><CartIcon/></Link> 
                {/* <ShoppingCart size={24} /> */}
            </div>
        </div>
    )
}