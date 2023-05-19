import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode } from "swiper";
const SliderOfGallery = ({ gallery1, gallery2 }) => {


    return (
        <div>
            <Swiper
                slidesPerView={3}
           
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode]}
                className="mySwiper"
            >
                {
                    gallery1?.map(show => <SwiperSlide><img className='h-full w-full' src={show.pictureURL} alt="" /></SwiperSlide>)
                }
                <div >
                    {
                        gallery2?.map(show => <SwiperSlide><img className='h-full w-full' src={show.pictureURL} alt="" /></SwiperSlide>)
                    }
                </div>

            </Swiper>
        </div >
    );
};

export default SliderOfGallery;