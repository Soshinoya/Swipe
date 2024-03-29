import { useEffect, useRef, useState } from 'react'

import Shape from '../Shape/Shape'

const Statistic = () => {

    const container = useRef(null)

    const [containerRect, setContainerRect] = useState()

    useEffect(() => {
        if (container === null) return
        setContainerRect(container.current.getBoundingClientRect())
        window.addEventListener('resize', () => setContainerRect(container.current.getBoundingClientRect()))
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
                            <div className="statistic-numbers__line containerOf__line" style={{ width: `calc(100% + ${Math.ceil(containerRect?.left + 11)}px)` }}></div>
                            <div className="statistic-numbers__item d-flex align-items-center justify-content-between">
                                <div className="statistic-numbers__item-text d-flex flex-column">
                                    <h5 className="statistic-numbers__item-text__title">
                                        Happy clients
                                    </h5>
                                    <p className="statistic-numbers__item-text__desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet.
                                    </p>
                                </div>
                                <h1 className="statistic-numbers__item-num title">1000+</h1>
                            </div>
                            <div className="statistic-numbers__line containerOf__line" style={{ width: `calc(100% + ${Math.ceil(containerRect?.left + 11)}px)` }}></div>
                            <div className="statistic-numbers__item d-flex align-items-center justify-content-between">
                                <div className="statistic-numbers__item-text d-flex flex-column">
                                    <h5 className="statistic-numbers__item-text__title">
                                        Products created
                                    </h5>
                                    <p className="statistic-numbers__item-text__desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet.
                                    </p>
                                </div>
                                <h1 className="statistic-numbers__item-num title">20+</h1>
                            </div>
                            <div className="statistic-numbers__line containerOf__line" style={{ width: `calc(100% + ${Math.ceil(containerRect?.left + 11)}px)` }}></div>
                            <div className="statistic-numbers__item d-flex align-items-center justify-content-between">
                                <div className="statistic-numbers__item-text d-flex flex-column">
                                    <h5 className="statistic-numbers__item-text__title">
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
            <div className="statistic-numbers__line--wide containerOf__line--wide" style={{ width: `calc(100% - ${Math.ceil(containerRect?.left + 11)}px)` }}></div>
            <Shape offset={500} className="statistic__bg--green" />
            <Shape offset={1500} className="statistic__bg--pink" />
        </section>
    )
}

export default Statistic
