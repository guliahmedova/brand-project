import categories from "../../assets/const/categories";

const ResuableSimilarProductsSec = ({ title }) => {
    const cards = categories.map(item => {
        return (
            <div className="card" key={item.id}>
                <img src={item.img} className="main-img" alt="" />
                <div className="body">
                    <span className="price">
                        {item.price}
                    </span>
                    <div className="pr-title">
                        {item.title}
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="similar-pr-sec">
            <h1 className="title">{title}</h1>
            <div className="cards">
                {cards}
            </div>
        </div>
    )
}

export default ResuableSimilarProductsSec