import Navbar from "./Navbar";
import Footer from './Footer';
import { Outlet } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import { useState, useEffect } from "react";

const Layout = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, [width]);

    return (
        <>
            {
                width <= 1120 ? <MobileNavbar /> : <Navbar />
            }
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;