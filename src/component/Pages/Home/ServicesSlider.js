import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function ServicesSlider() {

    // Slider
    const slidesData = [
        { src: "./images/women-1.jpg", name: "Layer Cut", number: "#1" },
        { src: "./images/men-1.jpg", name: "Beard Trim", number: "#2" },
        { src: "./images/women-2.jpg", name: "Blow Dry", number: "#3" },
        { src: "./images/slider-4.jpg", name: "Crew Cut", number: "#4" },
        { src: "./images/5.jpg", name: "Undercut", number: "#5" },
        { src: "./images/women-3.jpg", name: "Hair Styling", number: "#6" },
        { src: "./images/men-3.jpg", name: "HAIR trimming", number: "#7" },
        { src: "./images/8.jpg", name: "Kid's Haircut", number: "#8" },
        { src: "./images/men-4.jpg", name: "Men Facial", number: "#9" },
        { src: "./images/men-5.jpg", name: "Hair Wash", number: "#10" },
    ];
    const numSlides = 10;
    const middleSlideIndex = Math.floor(numSlides / 2);
    return (
        <>
           
            <section className="container-fluid  ">
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={false}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper px-5"
                    slidesPerView={6}
                    slidesPerGroup={6}
                    breakpoints={{
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                    }}
                >
                    <SwiperSlide className="second_slider px-3">
                        <div className="slider_bg">
                            <img src="./images/Newimages/beautician.png" className="img-fluid" />
                        </div>
                        <p className="slider_content">Makeup-artist</p>
                    </SwiperSlide>
                    <SwiperSlide className="second_slider px-3">
                        <div className="slider_bg">
                            <img src="./images/Newimages/facial-treatment1.png" className="img-fluid" />
                        </div>
                        <p className="slider_content">Wellnesscenter</p>
                    </SwiperSlide>
                    <SwiperSlide className="second_slider px-3">
                        <div className="slider_bg">
                            <img src="./images/Newimages/scissor1.png" className="img-fluid" />
                        </div>
                        <p className="slider_content">Barbersalon</p>
                    </SwiperSlide>
                    <SwiperSlide className="second_slider px-3">
                        <div className="slider_bg">
                            <img src="./images/Newimages/Filledoutline.png" className="img-fluid" />
                        </div>
                        <p className="slider_content">Body Massage</p>
                    </SwiperSlide>
                    <SwiperSlide className="second_slider px-3">
                        <div className="slider_bg">
                            <img src="./images/Newimages/massage.png" className="img-fluid" />
                        </div>
                        <p className="slider_content">Massageklinik</p>
                    </SwiperSlide>
                    <SwiperSlide className="second_slider px-3">
                        <div className="slider_bg">
                            <img src="./images/Newimages/foot-massage.png" className="img-fluid" />
                        </div>
                        <p className="slider_content">Foot Massage</p>
                    </SwiperSlide>
                    <SwiperSlide className="second_slider px-3">
                        <div className="slider_bg">
                            <img src="./images/Newimages/EuropeanFacial.svg" className="img-fluid" />
                        </div>
                        <p className="slider_content">European Facial</p>
                    </SwiperSlide>
                    <SwiperSlide className="second_slider px-3">
                        <div className="slider_bg">
                            <img src="./images/Newimages/SignatureFacials.svg" className="img-fluid" />
                        </div>
                        <p className="slider_content">Signature Facials</p>
                    </SwiperSlide>
                    <SwiperSlide className="second_slider px-3">
                        <div className="slider_bg">
                            <img src="./images/Newimages/HAIRCUT.svg" className="img-fluid" />
                        </div>
                        <p className="slider_content">Hair Cut</p>
                    </SwiperSlide>
                </Swiper>
            </section>

        </>
    )
}
