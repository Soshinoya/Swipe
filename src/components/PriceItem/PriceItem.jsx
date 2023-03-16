const PriceItem = ({ title, isCool, arrOfStr, price }) => {
    return (
        <div className={`glassmorphic-bg price-item ${isCool ? 'price-item--cool' : ''}`}>
            <div className="position-relative">
                <h3 className="title price-item__title">{title}</h3>
                {isCool && <p className="price-item__box position-absolute">Best value</p>}
                <ul className="price-item__list">
                    {arrOfStr.map((s, i) => <li className={`price-item__list-item d-flex align-items-center ${s.isIncluded ? 'price-item__list-item--included' : ''}`} key={i}>
                        <i className="fas fa-check"></i>
                        <p className="price-item__list-item__text">{s.text}</p>
                    </li>)}
                </ul>
                <div className="price-item__bottom d-flex justify-content-between align-items-center">
                    <h4 className="price-item__bottom-title">${price}</h4>
                    <button className="button button--accent price-item__bottom-button">
                        Buy now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PriceItem
