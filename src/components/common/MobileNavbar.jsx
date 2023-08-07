import navMenu from '../../assets/images/nav-menu.svg';
import logo from '../../assets/images/logo.svg';
import shoppingCart from '../../assets/images/shopping_cart.svg';
import mobileprofile from '../../assets/images/mobileprofile.svg';
import search from '../../assets/images/mobilesearch.svg';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import left from '../../assets/images/left.svg';
import { useState, useRef, useEffect } from 'react';
import avatar from '../../assets/images/SidebarAvatar.svg';
import home from '../../assets/images/home.svg';
import catg from '../../assets/images/catg.svg';
import hrt from '../../assets/images/hrt.svg';
import myorders from '../../assets/images/myorders.svg';
import e from '../../assets/images/e.svg';
import contactus from '../../assets/images/contactus.svg';
import about from '../../assets/images/about.svg';

const MobileNavbar = () => {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef();

    useEffect(() => {
        let handler = (event) => {
            if (!event.target.closest('.mobile-sidebar')) {
                setIsSidebarOpen(false);
            };
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.addEventListener('mousedown', handler);
        };
    }, []);

    const showSidebar = () => {
        setIsSidebarOpen(true);
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    };

    useEffect(() => {
        if (typeof window != 'undefined' && window.document && isSidebarOpen === false) {
            document.body.style.overflow = 'unset';
        }
    }, [isSidebarOpen])


    return (
        <div className='mobile-navbar'>
            {
                isSidebarOpen && (
                    <div className="mobile-sidebar-content">
                        <div ref={sidebarRef} className="mobile-sidebar">
                            <div className="top">
                                <img src={avatar} alt="" />
                                <span className='text'>Sign in | Register</span>
                            </div>
                            <div className="first-menu sidebar-menu">
                                <Link onClick={() => setIsSidebarOpen(false)} to="/"><img src={home} alt="" />Home</Link>
                                <Link onClick={() => setIsSidebarOpen(false)} to="categories"><img src={catg} alt="" />Categories</Link>
                                <Link onClick={() => setIsSidebarOpen(false)} to="notfound"><img src={hrt} alt="" />Favorites</Link>
                                <Link onClick={() => setIsSidebarOpen(false)} to="mycart"><img src={myorders} alt="" />My orders</Link>
                            </div>
                            <div className="line"></div>
                            <div className="second-menu sidebar-menu">
                                <Link onClick={() => setIsSidebarOpen(false)} to="notfound"><img src={e} alt="" />English | USD</Link>
                                <Link onClick={() => setIsSidebarOpen(false)} to="notfound"><img src={contactus} alt="" />Contact us</Link>
                                <Link onClick={() => setIsSidebarOpen(false)} to="notfound"><img src={about} alt="" />About</Link>
                            </div>
                            <div className="line"></div>
                            <div className='third-menu sidebar-menu'>
                                <Link onClick={() => setIsSidebarOpen(false)} to="notfound">User agreement</Link>
                                <Link onClick={() => setIsSidebarOpen(false)} to="notfound">Partnership</Link>
                                <Link onClick={() => setIsSidebarOpen(false)} to="notfound">Partnership</Link>
                            </div>
                        </div>
                        <div className="blur"></div>
                    </div>
                )
            }
            <div className="top">
                <div className="left-part top-same-style">
                    {
                        location.pathname === '/categories' ? (
                            <Link to="/" className='d-flex align-items-center gap-4 mb-0 text-decoration-none text-dark'>
                                <img src={left} alt="" />
                                <h2 style={{ marginBottom: 0 }}>Mobile accessory </h2>
                            </Link>
                        ) : (
                            <>
                                <button className='menu-btn' onClick={showSidebar}><img src={navMenu} alt="" /></button>
                                <img src={logo} alt="" className='logo' />
                            </>
                        )
                    }
                </div>
                <div className="right-part top-same-style">
                    <Link to="mycart"> <img src={shoppingCart} alt="" /></Link>
                    <Link to="notfound"><img src={mobileprofile} alt="" /></Link>
                </div>
            </div>
            <form className='search-bar'>
                <img src={search} alt="" className='search-icon' />
                <input type="search" placeholder='Search' />
            </form>
            {
                location.pathname === '/categories' ?
                    (
                        <div className="mobile-navbar-links">
                            <Link>Tablets</Link>
                            <Link>Phones</Link>
                            <Link>Ipads</Link>
                            <Link>Ipod</Link>
                            <Link>Jackets</Link>
                            <Link>Computers</Link>
                        </div>
                    ) : (
                        <div className="mobile-navbar-links">
                            <Link>All Category</Link>
                            <Link>Gadgets</Link>
                            <Link>Clocthes</Link>
                            <Link>Accessory</Link>
                            <Link>Projects</Link>
                            <Link>Menu item</Link>
                        </div>
                    )
            }
        </div>
    )
}

export default MobileNavbar