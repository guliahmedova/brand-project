import nextArrow from '../../assets/images/next-arrow.svg';

const MobileHomeSection = ({ data }) => {

    const miniCards = data.map(item => {
        return (
            <div className="card" key={item.id}>
                <div className="text">
                    <h5>{item.name}</h5>
                    <span>From  {item.from}</span>
                </div>
                <img src={item.img} alt="" />
            </div>
        )
    })

    return (
        <section className='mobile-reusable-home-section'>
            <h1 className="mobile-sec-title">Home and outdoor</h1>
            <div className="mini-cards">
                {miniCards}
            </div>
            <a href="#" className='source-btn'>Source now <img src={nextArrow} alt="" /></a> 
        </section>
    )
}

export default MobileHomeSection