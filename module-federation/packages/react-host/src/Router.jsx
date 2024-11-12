import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Layout from "./Layout";
import NewContact from "./routes/NewContact";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="/contact" element={<Layout><Contact /></Layout>} />
                <Route path="/contact/new" element={<Layout><NewContact /></Layout>} />
            </Routes>
        </>
    );
}

export default Router
