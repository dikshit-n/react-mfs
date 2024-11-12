import React from "react";
import { NavLink } from "react-router-dom";
import useStore from "react_host/store";

const Header = () => {

    const { count, inc } = useStore();

    return (
        <header class="text-3xl bg-blue-900 text-white p-5 flex">
            <div class="font-bold mr-5">
                Account Header
            </div>
            <div class="mr-5">|</div>
            <div class="flex gap-3 flex-grow">
                <NavLink to="/account" className="mr-3">Home</NavLink>
                <NavLink to="/account/about" className="mr-3">About</NavLink>
                <NavLink to="/account/contact" className="mr-3">Contact</NavLink>
            </div>
            <div className="flex gap-3 items-center">
                {count}
                <button onClick={inc} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add One</button>
            </div>
        </header>
    )
}

export default Header;
