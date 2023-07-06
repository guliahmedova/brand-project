
const HomeSecion = ({ data, sectionMainCardData }) => {

  const miniCards = data.map(item => {
    return (
      <div className="card" key={item.id}>
        <div className="text">
          <h5>{item.name}</h5>
          <span>From <br /> {item.from}</span>
        </div>
        <img src={item.img} alt="" />
      </div>
    )
  })

  return (
    <section className='reusable-home-section'>
      <div className="main-card">
        <div className="gradient"></div>
        <img src={sectionMainCardData.img} alt="" />
        <div className="content">
          <h3>{sectionMainCardData.text}</h3>
          <button className="custom-btn">Source now</button>
        </div>
      </div>

      <div className="mini-cards">
        {miniCards}
      </div>
    </section>
  )
}

export default HomeSecion