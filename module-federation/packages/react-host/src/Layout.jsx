import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div className="mx-auto text-3xl flex-col">
            <Header />
            <main style={{ flex: 'auto' }} className='flex'>
                {children}
            </main>
        </div>
    );
}

export default Layout