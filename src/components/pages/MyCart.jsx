import orders from "../../assets/const/orders";
import downIcon from '../../assets/images/down.svg';
import left from '../../assets/images/orderleft.svg';
import pay from '../../assets/images/payment.svg';
import pay1 from '../../assets/images/payment-1.svg';
import pay2 from '../../assets/images/payment-2.svg';
import pay3 from '../../assets/images/payment-3.svg';
import pay4 from '../../assets/images/payment-4.svg';
import ordersInfoSec from '../../assets/const/ordersInfoSec';
import savedProducts from '../../assets/const/savedProducts';
import shopCar from '../../assets/images/shopCar.svg';
import BlueSection from '../reusable/BlueSecion';
import { useState, useEffect } from "react";
import MobileMyCart from "./MobileMyCart";

const MyCart = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);

  const orderCard = orders.map(item => {
    return (
      <div className="order-card" key={item.id}>
        <div className="cl-1">
          <div className="img-bg"><img src={item.img} alt="" /></div>
          <div className="content">
            <h2>{item.title}</h2>
            <p>{item.info}</p>
            <p>{item.seller}</p>
            <div className="btns">
              <button>Remove</button>
              <button>Save for later</button>
            </div>
          </div>
        </div>
        <div className="cl-2">
          <span>{item.price}</span>
          <div className="qty">Qty: {item.qty} <img src={downIcon} alt="" /></div>
        </div>
      </div>
    )
  });

  const secOrderCard = ordersInfoSec.map(item => {
    return (
      <div className="cus-card" key={item.id}>
        <img src={item.img} alt="" />
        <div className="text">
          <span>{item.title}</span>
          <span>{item.desc}</span>
        </div>
      </div>
    )
  });

  const savedPr = savedProducts.map(item => {
    return (
      <div className="card" key={item.id}>
        <img src={item.img} alt="" className="main-img" />
        <div className="body">
          <span className="price">{item.price}</span>
          <h4>{item.title}</h4>
          <button><img src={shopCar} alt="" />Move to cart</button>
        </div>
      </div>
    )
  });

  return (
    <>
      {
        width <= 703 ? <MobileMyCart /> : (
          <section className="mycart">
            <div className="orders">
              <h1 className="title">My cart (3)</h1>
              <div className="card-contents">
                <div className="big-card">
                  <div className="cards">{orderCard}</div>
                  <div className="footer-btns">
                    <button><img src={left} alt="" />Back to shop</button>
                    <button>Remove all</button>
                  </div>
                </div>
                <div className="sml-card">
                  <div className="sml-top-card">
                    <h4>Have a coupon?</h4>
                    <form>
                      <input type="text" placeholder="Add coupon" />
                      <button>Apply</button>
                    </form>
                  </div>
                  <div className="checkbout-card">
                    <ul>
                      <li><span>Subtotal:</span><span>$1403.97</span></li>
                      <li><span>Discount:</span><span className="red">- $60.00</span></li>
                      <li><span>Tax:</span><span className="green">+ $14.00</span></li>
                    </ul>
                    <div className="total-price">
                      <strong className="total">Total:</strong>
                      <strong className="price">$1357.97</strong>
                    </div>
                    <button className="checkout-btn">Checkout</button>
                    <div className="imgs">
                      <img src={pay} alt="" />
                      <img src={pay1} alt="" />
                      <img src={pay2} alt="" />
                      <img src={pay3} alt="" />
                      <img src={pay4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="second-sec">
              {secOrderCard}
            </div>

            <div className="saved-products">
              <h1>Saved for later</h1>
              <div className="cards">
                {savedPr}
              </div>
            </div>

            <BlueSection />
          </section>
        )
      }
    </>
  )
}

export default MyCart