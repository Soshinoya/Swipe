import React from "react"

import AnimationLink from '../AnimationLink/AnimationLink'

const PressSingle = ({ imgPath, title, tags }) => {
    return (
        <li className="press-article position-relative">
            <div className="press-article__img">
                <img src={imgPath} alt="превью статьи" />
            </div>
            <div className="press-article__info">
                <div className="press-article__tags d-flex align-items-center g-2 flex-wrap">
                    {tags.length > 0 && tags.map((tag, i) => <a href="#" className="press-article__tag" key={i}>{tag}</a>)}
                </div>
                <h4 className="title press-article__title">{title}</h4>
            </div>
            <AnimationLink text='READ MORE' marginLeft={25} />
        </li>
    )
}

export default PressSingle