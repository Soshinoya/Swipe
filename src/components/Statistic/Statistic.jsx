import { useEffect, useRef, useState } from 'react'

import shapesParallax from './../../utils/shapesParallax'

const Statistic = () => {

    const statisticParallaxBgGreen = useRef(null)

    const statisticParallaxBgPink = useRef(null)

    const container = useRef(null)

    const [containerRect, setContainerRect] = useState()

    useEffect(() => {
        if (statisticParallaxBgGreen !== null) shapesParallax(statisticParallaxBgGreen.current, 500)
        if (statisticParallaxBgPink !== null) shapesParallax(statisticParallaxBgPink.current, 1500)
        if (container === null) return
        setContainerRect(container.current.getBoundingClientRect())
        window.onresize = () => setContainerRect(container.current.getBoundingClientRect())
    }, [])

    return (
        <section className="statistic position-relative">
            <div ref={container} className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="statistic-top">
                            <p className="statistic-top__subtitle">
                                since 2019
                            </p>
                            <h2 className="statistic-top__title title">
                                In numbers
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="statistic-numbers">
                            <div className="statistic-numbers__line" style={{ width: `calc(100% + ${Math.ceil(containerRect?.left + 11)}px)` }}></div>
                            <div className="statistic-numbers__item d-flex align-items-center justify-content-between">
                                <div className="statistic-numbers__item-text d-flex flex-column">
                                    <h5 className="title statistic-numbers__item-text__title title">
                                        Happy clients
                                    </h5>
                                    <p className="statistic-numbers__item-text__desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet.
                                    </p>
                                </div>
                                <h1 className="statistic-numbers__item-num title">1000+</h1>
                            </div>
                            <div className="statistic-numbers__line" style={{ width: `calc(100% + ${Math.ceil(containerRect?.left + 11)}px)` }}></div>
                            <div className="statistic-numbers__item d-flex align-items-center justify-content-between">
                                <div className="statistic-numbers__item-text d-flex flex-column">
                                    <h5 className="title statistic-numbers__item-text__title title">
                                        Products created
                                    </h5>
                                    <p className="statistic-numbers__item-text__desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet.
                                    </p>
                                </div>
                                <h1 className="statistic-numbers__item-num title">20+</h1>
                            </div>
                            <div className="statistic-numbers__line" style={{ width: `calc(100% + ${Math.ceil(containerRect?.left + 11)}px)` }}></div>
                            <div className="statistic-numbers__item d-flex align-items-center justify-content-between">
                                <div className="statistic-numbers__item-text d-flex flex-column">
                                    <h5 className="title statistic-numbers__item-text__title title">
                                        Investments received
                                    </h5>
                                    <p className="statistic-numbers__item-text__desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet.
                                    </p>
                                </div>
                                <h1 className="statistic-numbers__item-num title">$5M+</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="statistic-numbers__line--wide" style={{ width: `calc(100% - ${Math.ceil(containerRect?.left + 11)}px)` }}></div>
            <div ref={statisticParallaxBgGreen} className="parallax-bg statistic__bg statistic__bg--green d-none d-lg-block"></div>
            <div ref={statisticParallaxBgPink} className="parallax-bg statistic__bg statistic__bg--pink d-none d-lg-block"></div>
        </section>
    )
}

export default Statistic
