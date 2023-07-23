import logo from '../../assets/images/logo.svg';
import profile from '../../assets/images/profile.svg';
import orders from '../../assets/images/orders.svg';
import message from '../../assets/images/message.svg';
import mycart from '../../assets/images/mycart.svg';
import navMenu from '../../assets/images/nav-menu.svg';
import downIcon from '../../assets/images/down.svg';
import germanFlag from '../../assets/images/german.svg';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="header">
      <section className="top-navbar">
        <Link to="/"><img src={logo} alt="" className='logo' /></Link>
        {
          location.pathname !== "/mycart" && (
            <form className='search-form' >
              <input type="text" placeholder='Search' className='search-input' />
              <div className='search-select'>All category <img src={downIcon} className='down-icon' alt="" /></div>
              <button type='submit' className='custom-btn search-btn'>Search</button>
            </form>
          )
        }
        <div className="header-links">
          <Link to="/notfound">
            <img src={profile} alt="" />
            <span>Profile</span>
          </Link>
          <Link to="/notfound">
            <img src={message} alt="" />
            <span>Message</span>
          </Link>
          <Link to="/orders">
            <img src={orders} alt="" />
            <span>Orders</span>
          </Link>
          <Link to="/mycart">
            <img src={mycart} alt="" />
            <span>My cart</span>
          </Link>
        </div>
      </section>

      <hr className='line' />

      {
        location.pathname !== "/mycart" && (
          <section className="bottom-navbar">
            <nav className="nav-links">
              <Link to="/categories" className='d-flex align-items-center column-gap-3'>
                <img src={navMenu} alt="" /> All category
              </Link>
              <Link to="/notfound">Hot offers</Link>
              <Link to="/notfound">Gift boxes</Link>
              <Link to="/notfound">Projects</Link>
              <Link to="/notfound">Menu item</Link>
              <Link to="/notfound" className='d-flex align-items-center'>Help <img src={downIcon} alt="" /></Link>
            </nav>
            <div className="nav-right-links">
              <div className="langs-menu d-flex align-items-center column-gap-2">English, USD <img src={downIcon} alt="" /></div>
              <div className="ship-to-menu d-flex align-items-center column-gap-2">Ship to<img src={germanFlag} alt="" /><img src={downIcon} alt="" /></div>
            </div>
          </section>
        )
      }
    </div>
  )
}

export default Navbar;