import React from "react"

const SocialMediaSlide = ({ imgPath }) => {
    return (
        <div className="social-slider__item">
            <div className="social-slider__img">
                <img src={imgPath} alt="пост из соцсети" />
            </div>
        </div>
    )
}

export default SocialMediaSlide