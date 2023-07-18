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
import dropdowDownIcon from '../../assets/images/dropdowDownIcon.svg';
import { useState } from 'react';
import pagerightgray from '../../assets/images/pagerightgray.svg';
import pageleftgray from '../../assets/images/pageleftgray.svg';
import pagerightblack from '../../assets/images/pagerightblack.svg';
import pageleftblack from '../../assets/images/pageleftblack.svg';
import sort from '../../assets/images/sort.svg';
import filter from '../../assets/images/filter.svg';
import deletetagicon from '../../assets/images/deletetag.svg';

const ratings = [
    [fullStar, fullStar, fullStar, fullStar, fullStar],
    [fullStar, fullStar, fullStar, fullStar, star],
    [fullStar, fullStar, fullStar, star, star],
    [fullStar, fullStar, star, star, star]
]

const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(2);
    const [activeDropdown, setActiveDropdown] = useState(1);

    const toggleDropdown = (index) => {
        setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
    };

    const categoriesCard_menu = categories.map(item => {
        return (
            <Link to={`/categories/${item.id}`} className='custom-card' key={item.id}>
                <div className="left">
                    <img src={item.img} alt="" className='card-img' />
                    <div className="content">
                        <h3 className='title'>{item.title} </h3>
                        <span className='price'>{item.price}</span>
                        <span className='discount'>{item.discount}</span>
                        <div className='rating-menu'>
                            <img src={rating} alt="" /> <span className="rate-score">7.5</span>
                            <img src={dot} alt="" />
                            <span className='order'>154 orders</span>
                            <img src={dot} alt=""  className='second-dot'/> <br />
                            <span className='free'>Free Shipping</span>
                        </div>
                        <span className='mobile-free'>Free Shipping</span>
                        <p className='desc'>{item.desc}</p>
                        <button className='view-details'>View details</button>
                    </div>
                </div>
                <img src={favorite} className='img-fav' alt="" />
            </Link>
        )
    });

    const categoriesCard_grid = categories.map(item => {
        return (
            <Link to={`/categories/${item.id}`} className='card' key={item.id}>
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
            </Link>
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
                        <h3 onClick={() => toggleDropdown(1)}>{categoriesSidebarItems[0].title} <img src={activeDropdown === 1 ? downIcon : dropdowDownIcon} alt="" /></h3>
                        {
                            activeDropdown === 1 && (
                                <>
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
                                </>
                            )
                        }
                    </div>
                    <div className="sidebar-card checkbox-card">
                        <h3 onClick={() => toggleDropdown(2)}>{categoriesSidebarItems[1].title} <img src={activeDropdown === 2 ? downIcon : dropdowDownIcon} alt="" /></h3>
                        {
                            activeDropdown === 2 && (
                                <>
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
                                </>
                            )
                        }
                    </div>
                    <div className="sidebar-card checkbox-card">
                        <h3 onClick={() => toggleDropdown(3)}>{categoriesSidebarItems[2].title} <img src={activeDropdown === 3 ? downIcon : dropdowDownIcon} alt="" /></h3>
                        {
                            activeDropdown === 3 && (
                                <>
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
                                </>
                            )
                        }
                    </div>
                    <div className="sidebar-card price-card">
                        <h3 onClick={() => toggleDropdown(4)}>Price range  <img src={activeDropdown === 4 ? downIcon : dropdowDownIcon} alt="" /></h3>
                        {
                            activeDropdown === 4 && (
                                <div className="range">
                                    <div className="range-slider">
                                        <span className="range-selected"></span>
                                    </div>
                                    <div className="range-input">
                                        <input type="range" className="min" min="0" max="1000" defaultValue="300" step="10" />
                                        <input type="range" className="max" min="0" max="1000" defaultValue="700" step="10" />
                                    </div>
                                    <div className="range-price">
                                        <div className="form-group">
                                            <label htmlFor="min">Min</label>
                                            <input type="number" name="min" defaultValue="0" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="max">Max</label>
                                            <input type="number" name="max" defaultValue="999999" />
                                        </div>
                                    </div>
                                    <button className='apply-btn'>Apply</button>
                                </div>
                            )
                        }
                    </div>
                    <div className="sidebar-card condition">
                        <h3 onClick={() => toggleDropdown(5)}>{categoriesSidebarItems[3].title} <img src={activeDropdown === 5 ? downIcon : dropdowDownIcon} alt="" /></h3>
                        {
                            activeDropdown === 5 && (
                                <ul>
                                    {
                                        categoriesSidebarItems[3].list.map((item, index) => {
                                            return (
                                                <li key={index}><input type="radio" />{item}</li>
                                            )
                                        })
                                    }
                                </ul>
                            )
                        }
                    </div>
                    <div className="sidebar-card checkbox-card">
                        <h3 onClick={() => toggleDropdown(6)}>Ratings <img src={activeDropdown === 6 ? downIcon : dropdowDownIcon} alt="" /></h3>
                        {
                            activeDropdown === 6 && (
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
                            )
                        }
                    </div>
                </div>

                <div className="main">
                    <div className="main-top">
                        <div className='left-side'>12,911 items in <strong>Mobile accessory</strong></div>
                        <div className="right-side">
                            <div className="vertf"> <input type="checkbox" defaultChecked /> Verified only</div>
                            <div className="select-features">Featured <img src={down} alt="" /></div>
                            <div className="btns">
                                <button onClick={() => handleOnClick(1)} className={`first ${activeIndex === 1 && "active"}`}><img src={gridview} alt="" /></button>
                                <button onClick={() => handleOnClick(2)} className={`second ${activeIndex === 2 && "active"}`}><img src={gridmenu} alt="" /></button>
                            </div>
                        </div>
                    </div>

                    <div className="mobile-main-top">
                        <div className="sort same-style">
                            Sort: Newest <img src={sort} alt="" />
                        </div>
                        <div className="filter same-style">
                            Filter (3) <img src={filter} alt="" />
                        </div>
                        <div className="btns">
                            <button onClick={() => handleOnClick(1)} className={`first ${activeIndex === 1 && "active"}`}><img src={gridview} alt="" /></button>
                            <button onClick={() => handleOnClick(2)} className={`second ${activeIndex === 2 && "active"}`}><img src={gridmenu} alt="" /></button>
                        </div>
                    </div>

                    {
                        activeIndex === 1 && (
                            <div className="tags">
                                <ul className='tag-menu'>
                                    <li>Samsung <img src={deletetagicon} alt="" /></li>
                                    <li>Apple <img src={deletetagicon} alt="" /></li>
                                    <li>Poco <img src={deletetagicon} alt="" /></li>
                                    <li>Metallic <img src={deletetagicon} alt="" /></li>
                                    <li>4 star <img src={deletetagicon} alt="" /></li>
                                    <li>3 star <img src={deletetagicon} alt="" /></li>
                                </ul>
                                <button className='clear-filter'>Clear all filter</button>
                            </div>
                        )
                    }
                    <div className={`${activeIndex === 1 ? "main-grid-cards" : "main-cards"}`}>
                        {activeIndex === 1 ? categoriesCard_grid : categoriesCard_menu}
                    </div>
                </div>
            </section>

            <section className='pagenation'>
                <div className='select-page-size'>Show 10 <img src={down} alt="" /></div>
                <ul className='pagenation-menu'>
                    <li className='prev item'><img src={pageleftgray} alt="" /></li>
                    <li className="item active">1</li>
                    <li className="item">2</li>
                    <li className="item">3</li>
                    <li className='next item'><img src={pagerightblack} alt="" /></li>
                </ul>
            </section>
        </div>
    )
}

export default Categories