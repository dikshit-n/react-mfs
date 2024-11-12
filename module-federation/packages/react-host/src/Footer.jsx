import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="mt-10 text-3xl mx-auto gap-4 flex justify-center">
            <NavLink to="/">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Host</button>
            </NavLink>
            <NavLink to="/product">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Product</button>
            </NavLink>
            <NavLink to="/assessment">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Assessment</button>
            </NavLink>
            <NavLink to="/account">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Account</button>
            </NavLink>
        </footer>
    );
};

export default Footer;