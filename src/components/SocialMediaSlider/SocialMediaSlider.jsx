import React from "react";

import { Navigation } from "swiper";
import DataProvider from "../DataProvider/DataProvider";

import SwiperSlider from '../SwiperSlider/SwiperSlider';
import SocialMediaSlide from "../SocialMediaSlide/SocialMediaSlide";

const SocialMediaSlider = () => {

    const sliderConfig = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        modules: [Navigation],
        slidesPerView: 5,
        spaceBetween: 20
    }

    return (
        <section className="social">
            <div className="container">
                <div className="row align-items-center justify-content-between social-top">
                    <div className="col-md-6">
                        <h2 className="title social-top__title">
                            In social media
                        </h2>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex align-items-center justify-content-end">
                            <button className="button button--secondary social-top__button">Go to Instagram</button>
                        </div>
                    </div>
                </div>
                <div className="social-slider__wrapper position-relative">
                    <DataProvider url="./DB/social.json" render={data => (
                        <SwiperSlider config={sliderConfig} data={data} className="social-slider">
                            <SocialMediaSlide />
                        </SwiperSlider>
                    )} />
                </div>
            </div>
        </section>
    )
}

export default SocialMediaSlider
