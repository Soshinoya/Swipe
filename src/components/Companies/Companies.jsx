import swipeLogo from './../../images/companies/swipe.png'
import webflowLogo from './../../images/companies/webflow.svg'

const Companies = () => {
    return (
        <section className="companies">
            <div className="container">
                <div className="companies__inner d-flex align-items-center justify-content-around">
                    <div className="companies__item">
                        <img src={swipeLogo} alt="swipe logo" />
                    </div>
                    <div className="companies__item companies__item--webflow">
                        <img src={webflowLogo} alt="webflow logo" />
                    </div>
                    <div className="companies__item">
                        <img src={swipeLogo} alt="swipe logo" />
                    </div>
                    <div className="companies__item companies__item--webflow">
                        <img src={webflowLogo} alt="webflow logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Companies
