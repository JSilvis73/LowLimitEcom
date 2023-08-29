import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="navigation">
            <div className="links">
                <Link className="navLinkShop" to='/'>Shop</Link>
                <Link className="navLinkCart" to='/cart'>Cart</Link>
            </div>
        </div>
    )
}