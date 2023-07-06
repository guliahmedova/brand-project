import avatar from '../../assets/images/Avatar.svg';
import time from '../../assets/images/time.svg';
import mobileTime from '../../assets/images/mobiletime.svg';
import { offers } from '../../assets/const/offers';
import HomeSecion from '../reusable/HomeSecion';
import { section1 } from '../../assets/const/reusable';
import { section2 } from '../../assets/const/reusable';
import section1CardImg from '../../assets/images/resuableMainCardImage1.svg';
import section2CardImg from '../../assets/images/resuableMainCardImage2.svg';
import downIcon from '../../assets/images/down.svg';
import recommendedItems from '../../assets/const/recommendedItems';
import services from '../../assets/const/services';
import regions from '../../assets/const/regions';
import { useState, useEffect } from 'react';
import MobileHomeSection from '../reusable/MobileHomeSection';

const section1Obj = {
  img: section1CardImg,
  text: "Home and outdoor"
};
const section2Obj = {
  img: section2CardImg,
  text: "Consumer electronics and gadgets"
};

const Home = () => {
  const [witdh, setWitdh] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWitdh(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    }
  }, [witdh]);


  const offersCard = offers.map(item => {
    return (
      <div className='card' key={item.id}>
        <img src={item.img} className='img' alt="" />
        <h4>{item.name}</h4>
        <span>{item.discount}</span>
      </div>
    )
  });

  const recommendedItemsCard = recommendedItems.map(item => {
    return (
      <div className='card' key={item.id}>
        <img src={item.img} alt="" className='img' />
        <h6>{item.price}</h6>
        <span>{item.text}</span>
      </div>
    )
  });

  const servicesCard = services.map(item => {
    return (
      <div className="card" key={item.id}>
        <div className="img">
          <div className="gradient"></div>
          <img src={item.img} alt="" className='card-image'/>
          <span className='icon'><img src={item.icon} alt="" /></span>
        </div>
        <p className='desc'>{item.text}</p>
      </div>
    )
  });

  const regionsCard = regions.map(item => {
    return (
      <div className='region-card' key={item.id}>
        <img src={item.img} alt="" />
        <span className='text'><h1>{item.title}</h1><p>{item.site}</p></span>
      </div>
    )
  });

  return (
    <div className='home'>
      <section className="home-hero">
        <div className="hero-list">
          <span className='active'>Automobiles</span>
          <span>Clothes and wear</span>
          <span>Home interiors</span>
          <span>Computer and tech</span>
          <span>Tools, equipments</span>
          <span>Sports and outdoor</span>
          <span>Animal and pets</span>
          <span>Machinery tools</span>
          <span>More category</span>
        </div>
        <div className="hero-mage">
          <div className="content">
            <h2>Latest trending</h2>
            <h1>Electronic items</h1>
            <a href='#' className="custom-btn">Learn more</a>
          </div>
        </div>
        <div className="hero-right-part">
          <div className="top-card">
            <div className='user'>
              <img src={avatar} alt="" />
              <span>Hi, user <br /> let's get started</span>
            </div>
            <button className='custom-btn' type='button'>Join Now</button>
            <button type='button' className='custom-btn white-btn'>Log in</button>
          </div>
          <div className="mid-card custom--card">
            Get US $10 off <br /> with a new <br /> supplier
          </div>
          <div className="bottom-card custom--card">
            Send quotes with <br /> supplier <br /> preferences
          </div>
        </div>
      </section>

      <section className={`${witdh <= 1202 ? "mobile-deals-offers" : "deals-offers"}`}>
        <div className="time">
          <div className='text'>
            <h4>Deals and offers</h4>
            <span>Hygiene equipments</span>
          </div>
          <img src={witdh <= 1202 ? mobileTime : time} alt="" />
        </div>
        <div className="cards">
          {offersCard}
        </div>
      </section>

      {
        witdh <= 1202 ? (
          <>
            <MobileHomeSection data={section1} />
            <MobileHomeSection data={section2} />
          </>
        ) : (
          <>
            <HomeSecion data={section1} sectionMainCardData={section1Obj} />
            <HomeSecion data={section2} sectionMainCardData={section2Obj} />
          </>
        )
      }

      <section className='form-section'>
        <div className="content">
          <h1>An easy way to send <br /> requests to all suppliers</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit, sed do eiusmod tempor incididunt.</p>
          <button className='mobile-btn custom-btn'>Send inquiry</button>
        </div>
        <form>
          <h2>Send quote to suppliers</h2>
          <input type="text" className='need-inpt' placeholder='What item you need?' />
          <textarea cols="30" rows="10" placeholder='Type more details'></textarea>
          <div className='last-intps'>
            <input type="text" className='quantity-inpt' placeholder='Quantity' />
            <div className='select d-flex align-items-center justify-content-between'>Pcs <img src={downIcon} alt="" /></div>
          </div>
          <button className='custom-btn'>Send inquiry</button>
        </form>
      </section>

      <section className='recommended-items'>
        <h1 className='section-title'>Recommended items</h1>
        <div className="cards">
          {recommendedItemsCard}
        </div>
      </section>

      <section className='our-extra-services'>
        <h1 className='section-title'>Our extra services</h1>
        <div className="cards">
          {servicesCard}
        </div>
      </section>

      <section className='regions-sec'>
        <h1 className='section-title'>Suppliers by region</h1>
        <div className="cards">
          {regionsCard}
        </div>
      </section>
    </div>
  )
}

export default Home