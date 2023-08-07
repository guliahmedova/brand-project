import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import categories from "../../assets/const/categories";
import right from '../../assets/images/right.svg';
import { Link } from "react-router-dom";
import detailMainImage from '../../assets/images/detail1.svg';
import vertify from '../../assets/images/vertify.svg';
import fullStar from '../../assets/images/fullStar.svg';
import star from '../../assets/images/star.svg';
import dot from '../../assets/images/Dot.svg';
import reviews from '../../assets/images/reviews.svg';
import sold from '../../assets/images/sold.svg';
import avatar from '../../assets/images/ravatar.svg';
import german from '../../assets/images/german.svg';
import vertifp from '../../assets/images/vertifp.svg';
import earth from '../../assets/images/earth.svg';
import heart from '../../assets/images/favoriteborder.svg';
import v from '../../assets/images/v.svg';
import YouMayLike from "../reusable/YouMayLike";
import relatedPoructs from '../../assets/const/relatedProducts';

import img from '../../assets/images/img.svg';

import t2 from '../../assets/images/t2.svg';
import t3 from '../../assets/images/t3.svg';
import t4 from '../../assets/images/t4.svg';
import t5 from '../../assets/images/t5.svg';

import controls from '../../assets/images/controls.svg';
import BlueSecion from "../reusable/BlueSecion";
import MobileProductDetail from "./MobileProductDetail";

const ratings = [fullStar, fullStar, fullStar, fullStar, star];

const ProductDetail = () => {
  const { productId } = useParams();
  const getProduct = categories.find(item => item.id === productId);

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);

  const relatedproduct = relatedPoructs.map(item => {
    return (
      <div key={item.id} className="custom">
        <img src={img} alt="" />
        <h4>Xiaomi Redmi 8 <br /> Original</h4>
        <p>{item.price}</p>
      </div>
    )
  });

  return (
    <>
      {
        width <= 480 ? <MobileProductDetail /> :
          (
            <div className="product-detail">
              <section className="categories-top-links">
                <Link>Home</Link>
                <img src={right} alt="" />
                <Link>Clothings</Link>
                <img src={right} alt="" />
                <Link>Men’s wear</Link>
                <img src={right} alt="" />
                <Link>Summer clothing</Link>
              </section>

              <section className="detail-content">
                <div className="image-side">
                  <img src={detailMainImage} className="main-img" alt="" />
                  <img src={controls} className="controls" alt="" />
                  <div className="small-imgs">
                    <img src={detailMainImage} className="active" alt="" />
                    <img src={t2} alt="" />
                    <img src={t3} alt="" />
                    <img src={t4} alt="" />
                    <img src={t5} alt="" />
                    <img src={detailMainImage} alt="" />
                  </div>
                </div>

                <div className="middle-part">
                  <span className="stock"><img src={vertify} alt="" />In stock</span>
                  <h1 className="product-title">Mens Long Sleeve T-shirt Cotton Base <br /> Layer Slim Muscle</h1>
                  <div className="rating">
                    <span className="stars">{ratings.map((r, index) => <img src={r} className="star" key={index} alt='' />)} <span className="star-text">{getProduct.rating}</span></span>
                    <img className="dot" src={dot} alt="" />
                    <span className="reviews"><img src={reviews} alt="" /><span>32 reviews</span></span>
                    <img className="dot" src={dot} alt="" />
                    <span className="sold"><img src={sold} alt="" /><span>154 sold</span></span>
                  </div>
                  <div className="price-range">
                    <span className="ran-box first"><strong className="text-danger">$98.00</strong>50-100 pcs</span>
                    <span className="ran-box first"><strong>$90.00</strong>100-700 pcs</span>
                    <span className="ran-box"><strong>$78.00</strong>700+ pcs</span>
                  </div>
                  <ul className="info-menu">
                    <li className="b-line"><span className="fr">Price:</span>Negotiable</li>
                    <li><span className="fr">Type:</span>Classic  shoes</li>
                    <li><span className="fr">Material:</span>Plastic material</li>
                    <li className="b-line"><span className="fr">Design:</span>Modern nice</li>
                    <li><span className="fr">Customization:</span>Customized logo and <br /> design custom packages</li>
                    <li><span className="fr">Protection:</span>Refund Policy</li>
                    <li className="b-line"><span className="fr">Warranty:</span>2 years full warranty </li>
                  </ul>
                </div>

                <div className="right-card">
                  <div className="card">
                    <div className="top">
                      <img src={avatar} alt="" />
                      <span>
                        Supplier <br />
                        Guanjoi Trading LLC
                      </span>
                    </div>
                    <ul>
                      <li><span><img src={german} alt="" /></span>Germany, Berlin</li>
                      <li><span><img src={vertifp} alt="" /></span>Verified Seller</li>
                      <li><span><img src={earth} alt="" /></span>Worldwide shipping</li>
                    </ul>
                    <div className="btns">
                      <button className="custom-btn">Send inquiry</button>
                      <button className="custom-btn">Seller’s profile</button>
                    </div>
                  </div>
                  <span className="save-fav"><img src={heart} alt="" /> Save for later</span>
                </div>
              </section>

              {/* <section className="second-section">
        <div className="cus-col-xl">
          <div className="btns">
            <button className="active">Description</button>
            <button>Reviews</button>
            <button>Shipping</button>
            <button>About company</button>
          </div>
          <div className="body">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <ul className="cus-table">
              <li><span className="fr-col">Model</span><span className="sec-col">#8786867</span></li>
              <li><span className="fr-col">Style</span><span className="sec-col">Classic style</span></li>
              <li><span className="fr-col">Certificate</span><span className="sec-col">ISO-898921212</span></li>
              <li><span className="fr-col">Size</span><span className="sec-col">34mm x 450mm x 19mm</span></li>
              <li><span className="fr-col">Memory</span><span className="sec-col">36GB RAM</span></li>
            </ul>
            <ul className="footer-menu">
              <li><img src={v} alt="" />Some great feature name here</li>
              <li><img src={v} alt="" />Lorem ipsum dolor sit amet, consectetur </li>
              <li><img src={v} alt="" />Duis aute irure dolor in reprehenderit</li>
              <li><img src={v} alt="" />Some great feature name here</li>
            </ul>
          </div>
        </div>
        <YouMayLike />
      </section>

      <section className="related-products">
        <h2>Related products</h2>
        <div className="cards">
          {relatedproduct}
        </div>
      </section> */}

              {/* <BlueSecion/> */}
            </div>
          )
      }
    </>
  )
}

export default ProductDetail