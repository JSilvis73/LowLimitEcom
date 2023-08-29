import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import {ShoppingCart} from 'phosphor-react';

export default function Navbar(){
    return (
        <div className="navigation">
            <div className="links">
                <Link  to='/'>Shop</Link>
                <Link  to='/cart'><ShoppingCart size={24} /></Link>
            </div>
        </div>
    )
}