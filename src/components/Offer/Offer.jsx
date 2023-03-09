import { useEffect, useRef } from 'react';

import AnimationLink from '../AnimationLink/AnimationLink';

import shapesParallax from '../../utils/shapesParallax'

const Offer = () => {
    const offerParallaxBg = useRef(null)

    useEffect(() => {
        if (offerParallaxBg !== null) shapesParallax(offerParallaxBg.current, 500, { start: 'top 25%' })
    }, [])

    return (
        <section className="offer">
            <div className="container">
                <div className="offer__inner d-flex flex-column">
                    <div className="offer-info">
                        <h1 className="title offer-info__title">
                            Accessible way to start your business
                        </h1>
                        <p className="offer-info__text">Simple. Customizable. Stylish.</p>
                        <button className="button button--accent">Get demo for free</button>
                    </div>
                    <div className="offer-bottom d-flex align-items-end justify-content-between">
                        <AnimationLink text="watch full video" marginLeft={25} />
                        <div className="offer-bottom__socials d-flex flex-column">
                            <a className="offer-bottom__socials-link" href="#">
                                <i className="fab fa-twitter fa-xl"></i>
                            </a>
                            <a className="offer-bottom__socials-link" href="#">
                                <i className="fab fa-instagram fa-xl"></i>
                            </a>
                            <a className="offer-bottom__socials-link" href="#">
                                <i className="fab fa-facebook-f fa-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={offerParallaxBg} className="parallax-bg offer__bg d-none d-lg-block"></div>
        </section>
    )
}

export default Offer;
