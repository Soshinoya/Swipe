const FeaturesItem = ({ title, text, featureClass, featureList }) => {
    return (
        <div className={`features-item ${featureClass ? featureClass : ''}`}>
            <h4 className="title features-item__title">{title}</h4>
            <p className="features-item__text">{text}</p>
            <ul className="features-item__list d-flex flex-column">
                {featureList.map((item, i) => (
                    <li className="features-item__position d-flex" key={i}>
                        <div className="features-item__position-icon">{item[0]}</div>
                        <p className="features-item__position-text">{item[1]}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FeaturesItem
