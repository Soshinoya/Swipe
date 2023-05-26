import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function SwiperSlider({ config, data, children, className }) {
  return (
    <>
      <Swiper {...config} className={`${className ? className : ''}`}>
        {data.length > 0 && data.map((forwardData, i) => {
          return (
            <SwiperSlide key={forwardData?.id ? forwardData?.id : i}>
              {React.cloneElement(children, forwardData)}
            </SwiperSlide>
          )
        })}
        {config?.navigation && (
          <>
            <div className="swiper-button-prev">
              <i className="fas fa-angle-left"></i>
            </div>
            <div className="swiper-button-next">
              <i className="fas fa-angle-right"></i>
            </div>
          </>
        )}
      </Swiper>
    </>
  )
}