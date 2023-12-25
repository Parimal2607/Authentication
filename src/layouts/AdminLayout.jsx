import React, { useState } from "react";
import Header from "../components/common/Dashboard";
import Footer from "../components/common/Footer";

const AdminLayout = ({ children }) => {

    return (
        <>
            <div className='theme-section '>
                <Header />
                <section className="mid-section">
                    <div className="full-height">{children}</div>
                </section>
                <Footer />
            </div>
        </>
    );
};

export default AdminLayout;
