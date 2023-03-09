import React, { useEffect, useRef } from 'react'

import AnimationLink from '../AnimationLink/AnimationLink'

import shapesParallax from '../../utils/shapesParallax'

const Technologies = ({ itemTitle, text, isRight = false, bgClass = [] }) => {

    const offerParallaxRefs = useRef([...Array(bgClass.length)].map(() => React.createRef()));

    useEffect(() => {
        if (offerParallaxRefs.current[offerParallaxRefs.current.length - 1].current) offerParallaxRefs.current.forEach((ref, i) => shapesParallax(ref.current, 300));
    }, [])

    return (
        <div className="technologies__content">
            <div className="technologies__content-item" style={{ marginLeft: !isRight && '550px' }}>
                {bgClass?.map((bg, i) => (
                    <div ref={offerParallaxRefs.current[i]} className={`parallax-bg ${bg} d-none d-lg-block`} key={i}></div>
                ))}
                <div className="technologies__content-item__info d-flex flex-column">
                    <h4 className="technologies__content-item__title title">{itemTitle}</h4>
                    <p className="technologies__content-item__text">{text}</p>
                    <AnimationLink text="learn more" marginLeft={25} />
                </div>
            </div>
        </div>
    )
}

export default Technologies
