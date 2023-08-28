import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="navigation">
            <div className="links">
                <Link to='/'>Shop</Link>
                <Link to='/cart'></Link>
            </div>
        </div>
    )
}