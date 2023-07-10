import right from '../../assets/images/right.svg';
import { Link } from 'react-router-dom';
import categoriesSidebarItems from '../../assets/const/categoriesSidebarItems';
import downIcon from '../../assets/images/categorydown.svg';
import fullStar from '../../assets/images/fullStar.svg';
import star from '../../assets/images/star.svg';
import rating from '../../assets/images/rating.svg';
import gridmenu from '../../assets/images/gridmenu.svg';
import gridview from '../../assets/images/gridview.svg';
import categories from '../../assets/const/categories';
import dot from '../../assets/images/Dot.svg';
import favorite from '../../assets/images/favorite-btn.svg';
import down from '../../assets/images/down.svg';
import { useState } from 'react';

const ratings = [
    [fullStar, fullStar, fullStar, fullStar, fullStar],
    [fullStar, fullStar, fullStar, fullStar, star],
    [fullStar, fullStar, fullStar, star, star],
    [fullStar, fullStar, star, star, star]
]

const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    const categoriesCard_menu = categories.map(item => {
        return (
            <div className='card' key={item.id}>
                <img src={item.img} alt="" className='card-img' />
                <div className="content">
                    <h3 className='title'>{item.title} <img src={favorite} className='img-fav' alt="" /></h3>
                    <span className='price'>{item.price}</span>
                    <span className='discount'>{item.discount}</span>
                    <div className='rating-menu'>
                        <img src={rating} alt="" /> <span className="rate-score">7.5</span>
                        <img src={dot} alt="" />
                        <span className='order'>154 orders</span>
                        <img src={dot} alt="" />
                        <span className='free'>Free Shipping</span>
                    </div>
                    <p className='desc'>{item.desc}</p>
                    <a href="#" className='view-details'>View details</a>
                </div>
            </div>
        )
    });

    const categoriesCard_grid = categories.map(item => {
        return (
            <div className='card' key={item.id}>
                <img src={item.img} alt="" className='card-img' />
                <div className="content">
                    <div className="content-title">
                        <div className='left'>
                            <span className='d-flex align-items-center gap-2 mb-2'>
                                <span className='price'>{item.price}</span>
                                <span className='discount'>{item.discount}</span>
                            </span>
                            <span className='d-flex align-items-center gap-2 rating-menu'> <img src={rating} alt="" /> <span className="rate-score">7.5</span></span>
                        </div>
                        <img src={favorite} className='img-fav' alt="" />
                    </div>
                    <p className='title'>{item.title}</p>
                </div>
            </div>
        )
    });

    const handleOnClick = index => {
        setActiveIndex(index);
    };

    return (
        <div className="categories">
            <section className="categories-top-links">
                <Link>Home</Link>
                <img src={right} alt="" />
                <Link>Clothings</Link>
                <img src={right} alt="" />
                <Link>Men’s wear</Link>
                <img src={right} alt="" />
                <Link>Summer clothing</Link>
            </section>

            <section className='catogories-content'>
                <div className="sidebar">
                    <div className="sidebar-card">
                        <h3>{categoriesSidebarItems[0].title} <img src={downIcon} alt="" /></h3>
                        <ul>
                            {
                                categoriesSidebarItems[0].list.map((item, index) => {
                                    return (
                                        <li key={index}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                        <a href="#" className='link-btn'>See all</a>
                    </div>
                    <div className="sidebar-card checkbox-card">
                        <h3>{categoriesSidebarItems[1].title} <img src={downIcon} alt="" /></h3>
                        <ul>
                            {
                                categoriesSidebarItems[1].list.map((item, index) => {
                                    return (
                                        <li key={index}><input type="checkbox" />{item}</li>
                                    )
                                })
                            }
                        </ul>
                        <a href="#" className='link-btn'>See all</a>
                    </div>
                    <div className="sidebar-card checkbox-card">
                        <h3>{categoriesSidebarItems[2].title} <img src={downIcon} alt="" /></h3>
                        <ul>
                            {
                                categoriesSidebarItems[2].list.map((item, index) => {
                                    return (
                                        <li key={index}><input type="checkbox" />{item}</li>
                                    )
                                })
                            }
                        </ul>
                        <a href="#" className='link-btn'>See all</a>
                    </div>
                    <div className="sidebar-card price-card">
                        <h3>Price range  <img src={downIcon} alt="" /></h3>
                        <div className="range">
                            <div className="range-slider">
                                <span className="range-selected"></span>
                            </div>
                            <div className="range-input">
                                <input type="range" className="min" min="0" max="1000" value="300" step="10" />
                                <input type="range" className="max" min="0" max="1000" value="700" step="10" />
                            </div>
                            <div className="range-price">
                                <div className="form-group">
                                    <label htmlFor="min">Min</label>
                                    <input type="number" name="min" value="0" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="max">Max</label>
                                    <input type="number" name="max" value="999999" />
                                </div>
                            </div>
                            <button className='apply-btn'>Apply</button>
                        </div>
                    </div>
                    <div className="sidebar-card condition">
                        <h3>{categoriesSidebarItems[3].title} <img src={downIcon} alt="" /></h3>
                        <ul>
                            {
                                categoriesSidebarItems[3].list.map((item, index) => {
                                    return (
                                        <li key={index}><input type="radio" />{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="sidebar-card checkbox-card">
                        <h3>Ratings <img src={downIcon} alt="" /></h3>
                        <ul>
                            {
                                ratings.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <input type="checkbox" /> <div>{item.map((i, index) => <img key={index} src={i} alt='' />)}</div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className="main">
                    <div className="main-top">
                        <div className='left-side'>12,911 items in <strong>Mobile accessory</strong></div>
                        <div className="right-side">
                            <div className="vertf"> <input type="checkbox" checked /> Verified only</div>
                            <div className="select-features">Featured <img src={down} alt="" /></div>
                            <div className="btns">
                                <button onClick={() => handleOnClick(1)} className={`first ${activeIndex === 1 && "active"}`}><img src={gridview} alt="" /></button>
                                <button onClick={() => handleOnClick(2)} className={`second ${activeIndex === 2 && "active"}`}><img src={gridmenu} alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <div className={`${activeIndex === 1 ? "main-grid-cards" : "main-cards"}`}>
                        {activeIndex === 1 ? categoriesCard_grid : categoriesCard_menu}
                    </div>
                </div>
            </section>

            <section className='pagenation'>1,2,3,...</section>
        </div>
    )
}

export default Categories