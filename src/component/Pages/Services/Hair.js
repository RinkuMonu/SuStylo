import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../style/style.css';
export default function Hair() {
    return (
        <>
            <section className="Hair-section d-flex align-items-center hero-banner">
                <div className="hero-overlay"></div>
                <div className="container position-relative pt-5">
                    <div className='row'>
                        <div className='col-md-8'>
                            <h1 className="hero-title text-start">Get Hair Style You Deserve</h1>
                            <p className="text-white fw-bold mt-3  text-start">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <Link className="bookingBtn">Book Appoinment</Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className='container-fluid hair_section'>
                <div className="row">
                    <div className="col-md-4">
                        <div className="gallery_heading">
                            <h2 className='text-start ps-0'>Our Services</h2>
                            <p className="text-start"> Beyond haircuts, discover a comprehensive range of services, from coloring to extension</p>
                            {/* <h2>GALLERY</h2> */}
                        </div>
                        <div
                            className="de-separator"
                            style={{
                                backgroundSize: "100%",
                                backgroundRepeat: "no-repeat",
                                margin: "31px 10px"
                            }}
                        ></div>
                    </div>
                    <div className="col-md-7">
                        <div className="hairSlider">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                                centeredSlides={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>Slide 1</SwiperSlide>
                                <SwiperSlide>Slide 2</SwiperSlide>
                                <SwiperSlide>Slide 3</SwiperSlide>
                                <SwiperSlide>Slide 4</SwiperSlide>
                                <SwiperSlide>Slide 5</SwiperSlide>
                                <SwiperSlide>Slide 6</SwiperSlide>
                                <SwiperSlide>Slide 7</SwiperSlide>
                                <SwiperSlide>Slide 8</SwiperSlide>
                                <SwiperSlide>Slide 9</SwiperSlide>
                            </Swiper>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
