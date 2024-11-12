import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import NewContact from "./routes/NewContact";
import Layout from "./Layout";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/product" element={<Layout><Home /></Layout>} />
                <Route path="/product/about" element={<Layout><About /></Layout>} />
                <Route path="/product/contact" element={<Layout><Contact /></Layout>} />
                <Route path="/product/contact/new" element={<Layout><NewContact /></Layout>} />
            </Routes>
        </>
    );
}

export default Router
