import orders from '../../assets/const/orders';
import moreDots from '../../assets/images/moreDots.svg';
import minus from '../../assets/images/minus.svg';
import plus from '../../assets/images/plus.svg';

import items2 from '../../assets/images/items2.svg';
import items3 from '../../assets/images/items3.svg';
import items4 from '../../assets/images/items4.svg';

import { useState } from 'react';

const MobileMyCart = () => {
    const [count, setCount] = useState(2);

    const orderCards = orders.map(item => {
        return (
            <div className='card' key={item.id}>
                <div className="top">
                    <div className="left">
                        <img src={item.img} alt="" />
                        <div className="info">
                            <span className='title'>{item.title}</span>
                            <span className='size'>{item.info}</span>
                            <span className='seller'>{item.seller}</span>
                        </div>
                    </div>
                    <img src={moreDots} alt="" />
                </div>
                <div className="bottom">
                    <div className="left">
                        <button><img src={minus} alt="" /></button>
                        <span className='count'>{count}</span>
                        <button><img src={plus} alt="" /></button>
                    </div>
                    <div className="right">{item.price}</div>
                </div>
            </div>
        )
    });

    return (
        <div className="mobile-my-cart">
            <div className="cards">
                {orderCards}
            </div>

            <div className="checkout">
                <ul>
                    <li>
                        <span>Items (3):</span>
                        <span>$32.00</span>
                    </li>
                    <li>
                        <span>Shipping:</span>
                        <span>$10.00</span>
                    </li>
                    <li>
                        <span>Tax:</span>
                        <span>$7.00</span>
                    </li>
                    <li>
                        <span>Total:</span>
                        <span>$220.00</span>
                    </li>
                </ul>
                <button className='custom-btn'>Checkout (3 items)</button>
            </div>

            <div className="saved-for-later">
                <h1 className='title'>Saved for later</h1>
                <div className="cards">
                    <div className="card">
                        <div className="img"><img src={items4} alt="" /></div>
                        <div className="content">
                            <div className="top">
                                <span>Regular Fit Resort Shirt</span>
                                <span className="price">$57.70</span>
                            </div>
                            <div className="bottom">
                                <button>Move to cart</button>
                                <button>Remove</button>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img"> <img src={items2} alt="" /></div>
                        <div className="content">
                            <div className="top">
                                <span>Regular Fit Resort Shirt</span>
                                <span className="price">$57.70</span>
                            </div>
                            <div className="bottom">
                                <button>Move to cart</button>
                                <button>Remove</button>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img">   <img src={items3} alt="" /></div>
                        <div className="content">
                            <div className="top">
                                <span>Regular Fit Resort Shirt</span>
                                <span className="price">$57.70</span>
                            </div>
                            <div className="bottom">
                                <button>Move to cart</button>
                                <button>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileMyCart;