import navMenu from '../../assets/images/nav-menu.svg';
import logo from '../../assets/images/logo.svg';
import shoppingCart from '../../assets/images/shopping_cart.svg';
import mobileprofile from '../../assets/images/mobileprofile.svg';
import search from '../../assets/images/mobilesearch.svg';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import left from '../../assets/images/left.svg';

const MobileNavbar = () => {
    const location = useLocation();
    console.log(location.pathname);

    return (
        <div className='mobile-navbar'>
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
                                <button className='menu-btn'><img src={navMenu} alt="" /></button>
                                <img src={logo} alt="" className='logo' />
                            </>
                        )
                    }
                </div>
                <div className="right-part top-same-style">
                    <img src={shoppingCart} alt="" />
                    <img src={mobileprofile} alt="" />
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