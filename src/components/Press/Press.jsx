import React, { useEffect, useRef, useState } from "react"

import DataProvider from './../DataProvider/DataProvider'
import PressSingle from "../PressSingle/PressSingle"

import SwiperSlider from '../SwiperSlider/SwiperSlider'

const Press = () => {

    const title = useRef(null)

    const container = useRef(null)

    const [containerRect, setContainerRect] = useState(null)

    useEffect(() => {
        setContainerRect(container.current.getBoundingClientRect())
        window.addEventListener('resize', () => setContainerRect(container.current.getBoundingClientRect()))
    }, [])

    const sliderConfig = {
        slidesPerView: 'auto',
        spaceBetween: 120
    }

    return (
        <section className="press">
            <div ref={container} className="container">
                <div className="press-top d-flex align-items-baseline justify-content-between">
                    <h2 ref={title} className="title press-top__title">
                        In the press
                    </h2>
                    <button className="button button--accent press-top__button">
                        View more
                    </button>
                </div>
            </div>
            <div className="press-articles__wrapper position-relative" style={{
                left: `${containerRect?.left}px`,
                width: `calc(100% - ${containerRect?.left * 2}px)`
                }}>
                <DataProvider url="./DB/press.json" render={data => (
                    <SwiperSlider config={sliderConfig} data={data} className="press-articles">
                        <PressSingle />
                    </SwiperSlider>
                )} />
            </div>
        </section>
    )
}

export default Press