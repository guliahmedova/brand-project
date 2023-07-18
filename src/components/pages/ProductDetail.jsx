import { useParams } from "react-router-dom";
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

const ratings = [fullStar, fullStar, fullStar, fullStar, star];

const ProductDetail = () => {
  const { productId } = useParams();
  const getProduct = categories.find(item => item.id === productId);

  return (
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
          <img src={detailMainImage} alt="" />
          <div className="small-imgs">
            <img src={detailMainImage} alt="" />
            <img src={detailMainImage} alt="" />
            <img src={detailMainImage} alt="" />
            <img src={detailMainImage} alt="" />
            <img src={detailMainImage} alt="" />
            <img src={detailMainImage} alt="" />
          </div>
        </div>

        <div className="detail-content">
          <span><img src={vertify} alt="" />In stock</span>
          <h1>{getProduct.title}</h1>
          <div className="rating">
            {ratings.map((r, index) => <img src={r} key={index} alt='' />)} {getProduct.rating}
            <img src={dot} alt="" />
            <span><img src={reviews} alt="" />32 reviews</span>
            <img src={dot} alt="" />
            <span><img src={sold} alt="" />154 sold</span>
          </div>
          <div className="price-range">
            <span><strong>$98.00</strong>50-100 pcs</span>
            <span><strong>$90.00</strong>100-700 pcs</span>
            <span><strong>$78.00</strong>700+ pcs</span>
          </div>
          <ul className="info-menu">
            <li><span>Price:</span>Negotiable</li>
            <li><span>Type:</span>Classic  shoes</li>
            <li><span>Material:</span>Plastic material</li>
            <li><span>Design:</span>Modern nice</li>
            <li><span>Customization:</span>Customized logo and design custom packages</li>
            <li><span>Protection:</span>Refund Policy</li>
            <li><span>Warranty:</span>2 years full warranty </li>
          </ul>
        </div>

        <div className="right-card">
          <div className="top">
            <img src={avatar} alt="" />
            <span>
              Supplier
              Guanjoi Trading LLC
            </span>
          </div>
          <ul>
            <li><img src={german} alt="" />Germany, Berlin</li>
            <li><img src={vertifp} alt="" />Verified Seller</li>
            <li><img src={earth} alt="" />Worldwide shipping</li>
          </ul>
          <div className="btns">
            <button>Send inquiry</button>
            <button>Seller’s profile</button>
          </div>

          <span><img src={heart} alt="" /> Save for later</span>
        </div>
      </section>

      <section className="second-section">
        <div className="cus-col-xl">
          <div className="btns">
            <button>Description</button>
            <button>Reviews</button>
            <button>Shipping</button>
            <button>About company</button>
          </div>
          <div className="body">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <ul className="cus-table">
              <li><span>Model</span><span>#8786867</span></li>
              <li><span>Style</span><span>Classic style</span></li>
              <li><span>Certificate</span><span>ISO-898921212</span></li>
              <li><span>Size</span><span>34mm x 450mm x 19mm</span></li>
              <li><span>Memory</span><span>36GB RAM</span></li>
            </ul>
            <ul className="footer-menu">
              <li><img src={v} alt="" />Some great feature name here</li>
              <li><img src={v} alt="" />Lorem ipsum dolor sit amet, consectetur </li>
              <li><img src={v} alt="" />Duis aute irure dolor in reprehenderit</li>
              <li><img src={v} alt="" />Some great feature name here</li>
            </ul>
          </div>
        </div>
        <div className="cus-col-sm">
          <YouMayLike />
        </div>
      </section>
    </div>
  )
}

export default ProductDetail