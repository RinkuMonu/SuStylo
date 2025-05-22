import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
    EffectCoverflow,
    Autoplay,
    Pagination,
    Navigation
} from "swiper/modules";

const reviews = [
    {
        image: "./images/gallery/R3.jpg",
        name: "Priya Beauty Lounge",
        text: "We joined SuStylo before launch, and now we’re fully booked on weekends.",
        location: "Jaipur"
    },
    {
        image: "./images/gallery/R2.jpg",
        name: "Elite Hair & Spa",
        text: "The dashboard is simple, and I get paid on time every week.",
         location: "Mansarovar"
    },
    {
        image: "./images/gallery/R4.jpg",
        name: "Glow & Shine Salon",
        text: "Appointment bookings have become so easy—no more phone call confusion.",
         location: "Vaishali Nagar"
    },
    {
        image: "./images/gallery/R1.jpg",
        name: "Blush Beauty Bar",
        text: "Our clients love the digital experience. Walk-ins have also increased.",
         location: "Malviya Nagar"
    }
];

export default function ReviewSection() {
    return (
        <div className="review_section">
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md-12">
                        <div className="gallery_heading mx-auto">
                            <h2>Our Partners Feedback</h2>
                            <p>Real Experiences, Real Results</p>
                        </div>
                        <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
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
                                pagination={{ clickable: true }}
                                navigation={false}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {reviews.map((review, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="hero-overlay"></div>
                                        <img src={review.image} alt={review.name} />
                                         
                                        <div className="review_text text-center p-5">
                                            <h2 className="fw-bold text-white">{review.name}</h2>
                                            <div className="d-flex gap-2 justify-content-center">
                                                <i className="star bi bi-star-fill"></i>
                                                <i className="star bi bi-star-fill"></i>
                                                <i className="star bi bi-star-fill"></i>
                                                <i className="star bi bi-star-fill"></i>
                                                <i className="star bi bi-star-half"></i>
                                            </div>
                                            <p className="text-white fw-bold">{review.text}</p>
                                            <p className="text-white fw-bold">{review.location}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
