import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
    return (
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <div className="text-3xl">
                Product Contact
            </div>
            <NavLink to="/product/contact/new">
                <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create New Contact</div>
            </NavLink>
        </div>
    )
};

export default Contact;
