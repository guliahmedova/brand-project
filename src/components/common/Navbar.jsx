import logo from '../../assets/images/logo.svg';
import profile from '../../assets/images/profile.svg';
import orders from '../../assets/images/orders.svg';
import message from '../../assets/images/message.svg';
import mycart from '../../assets/images/mycart.svg';
import navMenu from '../../assets/images/nav-menu.svg';
import downIcon from '../../assets/images/down.svg';
import germanFlag from '../../assets/images/german.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="header">
      <section className="top-navbar">
        <Link to="/"><img src={logo} alt="" className='logo' /></Link>
        <form className='search-form' >
          <input type="text" placeholder='Search' className='search-input' />
          <div className='search-select'>All category <img src={downIcon} className='down-icon' alt="" /></div>
          <button type='submit' className='custom-btn search-btn'>Search</button>
        </form>
        <div className="header-links">
          <Link to="/profile">
            <img src={profile} alt="" />
            <span>Profile</span>
          </Link>
          <Link to="/message">
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

      <section className="bottom-navbar">
        <nav className="nav-links">
          <Link to="/category" className='d-flex align-items-center column-gap-3'>
            <img src={navMenu} alt="" /> All category
          </Link>
          <Link>Hot offers</Link>
          <Link>Gift boxes</Link>
          <Link>Projects</Link>
          <Link>Menu item</Link>
          <Link className='d-flex align-items-center'>Help <img src={downIcon} alt="" /></Link>
        </nav>
        <div className="nav-right-links">
          <div className="langs-menu d-flex align-items-center column-gap-2">English, USD <img src={downIcon} alt="" /></div>
          <div className="ship-to-menu d-flex align-items-center column-gap-2">Ship to<img src={germanFlag} alt="" /><img src={downIcon} alt="" /></div>
        </div>
      </section>
    </div>
  )
}

export default Navbar;