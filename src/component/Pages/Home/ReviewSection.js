import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { RxCross2 } from "react-icons/rx";



import {
    EffectCoverflow,
    Autoplay,
    Pagination,
    Navigation,
    FreeMode,
} from "swiper/modules";
import { Link } from 'react-router-dom';

export default function ReviewSection() {
    return (
        <>
            <div className="review_section">
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="gallery_heading w-50 mx-auto">
                                <h2 className=''>Customer Feedback</h2>
                                <p> Real Experiences, Real Results</p>
                                {/* <h2>GALLERY</h2> */}
                            </div>
                            <div
                                className="de-separator"
                                style={{
                                    backgroundSize: "100%",
                                    backgroundRepeat: "no-repeat",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='bg-transit'>
                        <div className='row'>
                            <div className="col-md-12">
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={false}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={false}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="hero-overlay"></div>
                                        <img src="./images/gallery/R3.jpg" />

                                        <div className="review_text text-center p-5">
                                            <h2 className="fw-bold text-white">Devika Gehlot</h2>
                                            <div className="d-flex gap-2">
                                                <i className="star bi bi-star-fill"></i>
                                                <i className="star bi bi-star-fill"></i>
                                                <i className="star bi bi-star-fill"></i>
                                                <i className="star bi bi-star-fill"></i>
                                                <i className="star bi bi-star-half"></i>
                                            </div>
                                            <p className="text-white fw-bold">
                                                Su Stylo is my go-to salon for the perfect haircut. The
                                                staff is professional, and the atmosphere is so welcoming.
                                                Highly recommend!
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="hero-overlay"></div>
                                        <img src="./images/gallery/R2.jpg" />

                                        <div className="review_text text-center p-5">
                                            <h2 className="fw-bold text-white"> Neha Kapoor</h2>
                                            <div className="d-flex gap-2">
                                                <i className="star bi bi-star-fill"></i>
                                                <i className="star bi bi-star-fill"></i>
                                                <i className="star bi bi-star-fill"></i>
                                                <i className="star bi bi-star-fill"></i>
                                                <i className="star bi bi-star-half"></i>
                                            </div>
                                            <p className="text-white fw-bold">
                                                Loved my styling experience! The team knows exactly what
                                                suits you best. The service was top-notch, and I left
                                                feeling fabulous!
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="hero-overlay"></div>
                                        <img src="./images/gallery/R4.jpg" />

                                        <div className="review_text text-center p-5">
                                            <h2 className="fw-bold text-white">Rahul kumar</h2>
                                            <div className="d-flex gap-2">
                                                <i className="star bi bi-star-fill"></i>
                                                <i className="star bi bi-star-fill"></i>
                                                <i className="star bi bi-star-fill"></i>
                                                <i className="star bi bi-star-fill"></i>
                                                <i className="star bi bi-star-half"></i>
                                            </div>
                                            <p className="text-white fw-bold">
                                                Excellent grooming services! I tried their beard trimming,
                                                and it was done with so much precision. Great experience!
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="hero-overlay"></div>
                                        <img src="./images/gallery/R1.jpg" />

                                        <div className="review_text text-center p-5">
                                            <h2 className="fw-bold text-white"> Vikash singh</h2>
                                            <div className="d-flex gap-2">
                                                <i className="star bi bi-star-fill"></i>
                                                <i className="star bi bi-star-fill"></i>
                                                <i className="star bi bi-star-fill"></i>
                                                <i className="star bi bi-star-fill"></i>
                                                <i className="star bi bi-star-half"></i>
                                            </div>
                                            <p className="text-white fw-bold">
                                                Best haircut I've ever had! The barbers are highly skilled
                                                and listen to exactly what you want. Five-star service!
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
