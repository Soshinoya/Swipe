import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Flip from 'gsap/Flip';

import shapesParallax from '../../utils/shapesParallax'

gsap.registerPlugin(Flip)

const Offer = () => {
    const offerParallaxBg = useRef(null)

    const offerBottomLinkTextMarginLeft = 25

    const offerBottomLinkText = useRef(null)

    const offerBottomLinkBox = useRef(null)

    const tl = gsap.timeline()

    const offerBottomLinkMouseEnterHandler = () => {
        tl.to(offerBottomLinkBox.current, { duration: .3, height: `${offerBottomLinkText.current.offsetHeight + offerBottomLinkTextMarginLeft / 2}`, borderRadius: '10' })
        tl.to(offerBottomLinkBox.current, { duration: .3, width: `${offerBottomLinkText.current.offsetWidth + offerBottomLinkTextMarginLeft * 2}` })
        tl.to(offerBottomLinkText.current, { duration: .3, color: '#FFF' })
    }

    const offerBottomLinkMouseLeaveHandler = () => {
        tl.to(offerBottomLinkText.current, { duration: .3, color: '#1A1930' })
        tl.to(offerBottomLinkBox.current, { duration: .3, width: '15' })
        tl.to(offerBottomLinkBox.current, { duration: .3, height: '15', borderRadius: 0 })
    }

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
                        <a className="offer-bottom__link position-relative d-flex align-items-center" href='#' onMouseEnter={offerBottomLinkMouseEnterHandler} onMouseLeave={offerBottomLinkMouseLeaveHandler}>
                            <div ref={offerBottomLinkBox} className="offer-bottom__link-box position-absolute"></div>
                            <p ref={offerBottomLinkText} style={{ marginLeft: `${offerBottomLinkTextMarginLeft}px` }}>watch full video</p>
                        </a>
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
