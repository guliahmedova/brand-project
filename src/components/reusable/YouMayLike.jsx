import youmaylikeProducts from '../../assets/const/youmayLike';

const YouMayLike = () => {
    const cards = youmaylikeProducts.map(item =>{
        return(
            <div className='custom-card' key={item.id}>
                <img src={item.img} className='img' alt="" />
                <span className='text'>
                    <span>Apple Watch Series <br /> Space Gray</span>
                    <span>$7.00 - $99.50</span>
                </span>
            </div>
        )
    });

  return (
    <div className='you-may-like-sec'>
        <h2>You may like</h2>
        {cards}
    </div>
  )
}

export default YouMayLike