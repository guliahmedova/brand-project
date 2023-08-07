// import rightArrow from '../../assets/images/rig.svg';
// import mobileprofile from '../../assets/images/mobileprofile.svg';
// import shoppingCart from '../../assets/images/shopping_cart.svg';
import controls from '../../assets/images/controls.svg';
import detailMainImage from '../../assets/images/detail1.svg';
import fullStar from '../../assets/images/fullStar.svg';
import star from '../../assets/images/star.svg';
const ratings = [fullStar, fullStar, fullStar, fullStar, star];
import dot from '../../assets/images/Dot.svg';
import reviews from '../../assets/images/reviews.svg';
import sold from '../../assets/images/sold.svg';
import heart from '../../assets/images/favoriteborder.svg';
import avatar from '../../assets/images/ravatar.svg';
import german from '../../assets/images/german.svg';
import vertifp from '../../assets/images/vertifp.svg';
import earth from '../../assets/images/earth.svg';
import nextBtn from '../../assets/images/nextBTN.svg';
import ResuableSimilarProductsSec from './ResuableSimilarProductsSec';

const MobileProductDetail = () => {
    return (
        <section className="mobile-product-detail">
            {/* <div className="top">
                <img src={rightArrow} alt="" />
                <div className="left">
                    <img src={shoppingCart} alt="" />
                    <img src={mobileprofile} alt="" />
                </div>
            </div> */}
            <div className="content">
                <div className="img-content">
                    <img src={detailMainImage} className='main-img' alt="" />
                    <img src={controls} alt=""  className='controls'/>
                </div>
                <div className="content-body">
                    <div className="header">
                        <span className="stars">{ratings.map((r, index) => <img src={r} className="star" key={index} alt='' />)}</span>
                        <img src={dot} alt="" />
                        <span>
                            <img src={reviews} alt="" /> 32 reviews
                        </span>
                        <img src={dot} alt="" />
                        <span>
                            <img src={sold} alt="" /> 154 sold
                        </span>
                    </div>

                    <h1 className='product-title'>Product name goes here</h1>

                    <div className="price">
                        <strong>$129.95</strong>
                        <span>(50-100 pcs)</span>
                    </div>

                    <div className="btns">
                        <button className='custom-btn'>Send inquiry</button>
                        <img src={heart} alt="" className='heart-btn'/>
                    </div>

                    <ul>
                        <li>
                            <span>Condition</span>
                            <span>Brand new</span>
                        </li>
                        <li>
                            <span>Material</span>
                            <span>Plastic</span>
                        </li>
                        <li>
                            <span>Category</span>
                            <span>Electronics, gadgets</span>
                        </li>
                        <li>
                            <span>Item num</span>
                            <span>23421</span>
                        </li>
                    </ul>

                    <p className='desc'>
                        Info about edu item is an ideal companion for anyone engaged in learning.
                        The drone provides precise and ...
                    </p>

                    <a href="#" className='read-more-btn'>Read more</a>
                </div>
            </div>

            <div className="second-card">
                <div className="top">
                    <div className="left">
                        <img src={avatar} alt="" />
                        <span>
                            Supplier <br />
                            Guanjoi Trading LLC
                        </span>
                    </div>
                    <img src={nextBtn} alt="" />
                </div>
                <hr className='line' />
                <ul>
                    <li><img src={german} alt="" /><span>Germany</span></li>
                    <li><img src={vertifp} alt="" /><span>Verified</span></li>
                    <li><img src={earth} alt="" /><span>Shipping</span></li>
                </ul>
            </div>

            <ResuableSimilarProductsSec title="Similar products"/>
        </section>
    )
}

export default MobileProductDetail