import Headroom from 'react-headroom'

import swipeLogo from './../../images/companies/swipe.png'

const Header = () => {

    return (
        <Headroom>
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <a className="header__logo logo" href="#">
                            <img src={swipeLogo} alt="swipe logo" />
                        </a>
                        <nav className="header-nav">
                            <ul className="header-nav__list">
                                <li className="header-nav__item">
                                    <a className="header-nav__item-link" href="#">About</a>
                                </li>
                                <li className="header-nav__item">
                                    <a className="header-nav__item-link" href="#">Features</a>
                                </li>
                                <li className="header-nav__item">
                                    <a className="header-nav__item-link" href="#">Pricing</a>
                                </li>
                                <li className="header-nav__item">
                                    <a className="header-nav__item-link" href="#">Team</a>
                                </li>
                                <li className="header-nav__item">
                                    <a className="header-nav__item-link" href="#">FAQ</a>
                                </li>
                                <li className="header-nav__item">
                                    <a className="header-nav__item-link" href="#">Feedback</a>
                                </li>
                                <li className="header-nav__item">
                                    <a className="header-nav__item-link" href="#">Blog</a>
                                </li>
                                <li className="header-nav__item">
                                    <a className="header-nav__item-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </nav>
                        <button className="button button--secondary">Buy now</button>
                    </div>
                </div>
            </header>
        </Headroom>
    )
};

export default Header;
