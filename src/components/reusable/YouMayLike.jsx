import youmaylikeProducts from '../../assets/const/youmayLike';

const YouMayLike = () => {
    const cards = youmaylikeProducts.map(item =>{
        return(
            <div className='custom-card' key={item.id}>
                <img src={item.img} alt="" />
                <span>
                    <span>Apple Watch Series Space Gray</span>
                    <span>$7.00 - $99.50</span>
                </span>
            </div>
        )
    });

  return (
    <div className='you-may-like-sec'>
        {cards}
    </div>
  )
}

export default YouMayLike