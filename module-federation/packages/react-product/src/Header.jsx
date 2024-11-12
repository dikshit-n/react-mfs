import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header class="text-3xl bg-blue-900 text-white p-5 flex">
            <div class="font-bold mr-5">
                Product Header
            </div>
            <div class="mr-5">|</div>
            <div class="flex gap-3 flex-grow">
                <NavLink to="/product" className="mr-3">Home</NavLink>
                <NavLink to="/product/about" className="mr-3">About</NavLink>
                <NavLink to="/product/contact" className="mr-3">Contact</NavLink>
            </div>
        </header>
    )
}

export default Header;
