import { useEffect, useRef } from 'react';

import shapesParallax from '../../utils/shapesParallax';

import swipeWhiteLogo from './../../images/companies/swipe-white.png'

const Footer = () => {

    const footerParallaxBg = useRef(null)

    useEffect(() => {
        if (footerParallaxBg !== null) shapesParallax(footerParallaxBg.current)
    }, [])


    return (
        <footer className="footer position-relative">
            <div className="footer__inner position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-info">
                                <a className="footer-info__logo logo" href="#">
                                    <img src={swipeWhiteLogo} alt="swipe logo" />
                                </a>
                                <p className="footer-info__text">
                                    New York
                                </p>
                                <a className="footer-info__email" href="#">
                                    hello.craftengine@gmail.com
                                </a>
                                <a className="footer-info__copyright" href="#">
                                    © Swipe. All rights reserved. Powered by <span>Webflow</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-links">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <ul className="footer-links__list">
                                            <li className="footer-links__item">
                                                <a className="footer-links__link" href="#">About</a>
                                            </li>
                                            <li className="footer-links__item">
                                                <a className="footer-links__link" href="#">Features</a>
                                            </li>
                                            <li className="footer-links__item">
                                                <a className="footer-links__link" href="#">Pricing</a>
                                            </li>
                                            <li className="footer-links__item">
                                                <a className="footer-links__link" href="#">Team</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-4">
                                        <ul className="footer-links__list">
                                            <li className="footer-links__item">
                                                <a className="footer-links__link" href="#">FAQ</a>
                                            </li>
                                            <li className="footer-links__item">
                                                <a className="footer-links__link" href="#">Feedback</a>
                                            </li>
                                            <li className="footer-links__item">
                                                <a className="footer-links__link" href="#">Blog</a>
                                            </li>
                                            <li className="footer-links__item">
                                                <a className="footer-links__link" href="#">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-4">
                                        <ul className="footer-links__list">
                                            <li className="footer-links__item">
                                                <a className="footer-links__link" href="#">Twitter</a>
                                            </li>
                                            <li className="footer-links__item">
                                                <a className="footer-links__link" href="#">Facebook</a>
                                            </li>
                                            <li className="footer-links__item">
                                                <a className="footer-links__link" href="#">Instagram</a>
                                            </li>
                                            <li className="footer-links__item">
                                                <a className="footer-links__link" href="#">Licensing</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-parallax">
                <div ref={footerParallaxBg} className="footer__bg d-none d-lg-block"></div>
            </div>
        </footer>
    )
};

export default Footer;
