import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import '../style/style.css';
import { Link } from "react-router-dom";
import SimpleParallax from "simple-parallax-js";
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
export default function MenServices() {
    useEffect(() => {
        new WOW().init();
    }, []);
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => setVisible(entry.isIntersecting));
        });

        if (domRef.current) observer.observe(domRef.current);

        return () => {
            if (domRef.current) observer.unobserve(domRef.current);
        };
    }, []);
    return (
        <>
            <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} ref={domRef}>
                <section className="menservices-section d-flex align-items-center">
                    <div className="hero-overlay"></div>
                    <div class="de-gradient-edge-bottom" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
                    <div className="container text-center position-relative">
                        <h2 className="hero-title">Mens Services</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </section>
                <div className="content-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="heading mb-2">
                                    <h2>SUStylo Crafting Confidence, One Cut at a Time</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-12">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={30}
                                    pagination={false}
                                    modules={[Pagination, Autoplay]}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                    }}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="card text-white border-0 position-relative" style={{ borderRadius: "12px", overflow: "hidden" }}>
                                            <SimpleParallax>

                                                <img
                                                    src="./images/gallery/3.1.jpg"
                                                    className="card-img"
                                                    alt="Organic Hair Treatment"
                                                    style={{ height: "453px", objectFit: "cover", filter: "brightness(50%)" }}
                                                />
                                            </SimpleParallax>

                                            <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                                                <h4 className="fw-bold">Organic Hair Treatment</h4>
                                                <p className="mb-0 fs-6">
                                                    Lorem ipsum dolor sit amet consectetur. Mi mattis tortor potenti a eu quis. Massa laoreet sagittis.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card text-white border-0 position-relative" style={{ borderRadius: "12px", overflow: "hidden" }}>
                                            <SimpleParallax>

                                                <img
                                                    src="./images/gallery/2148256865.jpg"
                                                    className="card-img"
                                                    alt="Organic Hair Treatment"
                                                    style={{ height: "453px", objectFit: "cover", filter: "brightness(50%)" }}
                                                />
                                            </SimpleParallax>

                                            <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                                                <h4 className="fw-bold">Beard Grooming</h4>
                                                <p className="mb-0 fs-6">
                                                    Lorem ipsum dolor sit amet consectetur. Mi mattis tortor potenti a eu quis. Massa laoreet sagittis.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card text-white border-0 position-relative" style={{ borderRadius: "12px", overflow: "hidden" }}>
                                            <SimpleParallax>

                                                <img
                                                    src="./images/2148181976.jpg"
                                                    className="card-img"
                                                    alt="Organic Hair Treatment"
                                                    style={{ height: "453px", objectFit: "cover", filter: "brightness(50%)" }}
                                                />
                                            </SimpleParallax>

                                            <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                                                <h4 className="fw-bold">Signature Facials</h4>
                                                <p className="mb-0 fs-6">
                                                    Lorem ipsum dolor sit amet consectetur. Mi mattis tortor potenti a eu quis. Massa laoreet sagittis.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card text-white border-0 position-relative" style={{ borderRadius: "12px", overflow: "hidden" }}>
                                            <SimpleParallax>

                                                <img
                                                    src="./images/gallery/94765.jpg"
                                                    className="card-img"
                                                    alt="Organic Hair Treatment"
                                                    style={{ height: "453px", objectFit: "cover", filter: "brightness(50%)" }}
                                                />
                                            </SimpleParallax>

                                            <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                                                <h4 className="fw-bold">Luxuary Body Massages</h4>
                                                <p className="mb-0 fs-6">
                                                    Lorem ipsum dolor sit amet consectetur. Mi mattis tortor potenti a eu quis. Massa laoreet sagittis.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card text-white border-0 position-relative" style={{ borderRadius: "12px", overflow: "hidden" }}>
                                            <SimpleParallax>

                                                <img
                                                    src="./images/gallery/16029.jpg"
                                                    className="card-img"
                                                    alt="Organic Hair Treatment"
                                                    style={{ height: "453px", objectFit: "cover", filter: "brightness(50%)" }}
                                                />
                                            </SimpleParallax>

                                            <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                                                <h4 className="fw-bold">Beard Trim Shave</h4>
                                                <p className="mb-0 fs-6">
                                                    Lorem ipsum dolor sit amet consectetur. Mi mattis tortor potenti a eu quis. Massa laoreet sagittis.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card text-white border-0 position-relative" style={{ borderRadius: "12px", overflow: "hidden" }}>
                                            <SimpleParallax>

                                                <img
                                                    src="./images/gallery/2148696707.jpg"
                                                    className="card-img"
                                                    alt="Organic Hair Treatment"
                                                    style={{ height: "453px", objectFit: "cover", filter: "brightness(50%)" }}
                                                />
                                            </SimpleParallax>

                                            <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                                                <h4 className="fw-bold">Deep Pore Cleansing</h4>
                                                <p className="mb-0 fs-6">
                                                    Lorem ipsum dolor sit amet consectetur. Mi mattis tortor potenti a eu quis. Massa laoreet sagittis.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card text-white border-0 position-relative" style={{ borderRadius: "12px", overflow: "hidden" }}>
                                            <SimpleParallax>

                                                <img
                                                    src="./images/gallery/2148883830.jpg"
                                                    className="card-img"
                                                    alt="Organic Hair Treatment"
                                                    style={{ height: "453px", objectFit: "cover", filter: "brightness(50%)" }}
                                                />
                                            </SimpleParallax>

                                            <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                                                <h4 className="fw-bold">Acne Problem Facial</h4>
                                                <p className="mb-0 fs-6">
                                                    Lorem ipsum dolor sit amet consectetur. Mi mattis tortor potenti a eu quis. Massa laoreet sagittis.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card text-white border-0 position-relative" style={{ borderRadius: "12px", overflow: "hidden" }}>
                                            <SimpleParallax>

                                                <img
                                                    src="./images/gallery/2149273897.jpg"
                                                    className="card-img"
                                                    alt="Organic Hair Treatment"
                                                    style={{ height: "453px", objectFit: "cover", filter: "brightness(50%)" }}
                                                />
                                            </SimpleParallax>

                                            <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                                                <h4 className="fw-bold">Glycolic Peel Facial</h4>
                                                <p className="mb-0 fs-6">
                                                    Lorem ipsum dolor sit amet consectetur. Mi mattis tortor potenti a eu quis. Massa laoreet sagittis.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card text-white border-0 position-relative" style={{ borderRadius: "12px", overflow: "hidden" }}>
                                            <SimpleParallax>

                                                <img
                                                    src="./images/gallery/13528.jpg"
                                                    className="card-img"
                                                    alt="Organic Hair Treatment"
                                                    style={{ height: "453px", objectFit: "cover", filter: "brightness(50%)" }}
                                                />
                                            </SimpleParallax>

                                            <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                                                <h4 className="fw-bold">Royal Shave</h4>
                                                <p className="mb-0 fs-6">
                                                    Lorem ipsum dolor sit amet consectetur. Mi mattis tortor potenti a eu quis. Massa laoreet sagittis.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <hr className="my-5" />
                        <div className="row align-items-center">
                            <div className="col-md-6 mt-5 mb-3" data-aos="zoom-in-left">
                                <SimpleParallax
                                    orientation={"down"}
                                    scale={1.8}
                                    delay={1}
                                >
                                    <img src="./images/gallery/R2.jpg" className="img-fluid" />
                                </SimpleParallax>
                            </div>
                            <div className="col-md-6 mb-3 about_mission right_content fadeInRight  ps-5" data-aos="zoom-in-right">
                                <h2 className="wow fadeInRight animated" data-wow-delay=".3s">
                                    Discover The <span className="id-color">Experties</span> And <span className="text-effect">Passion</span> behind our Salon
                                </h2>
                                <p>At Su Stylo, we strive to empower both salon owners and customers by making grooming services seamless, accessible, and hassle-free. Our platform helps salons expand their reach while offering customers an effortless way to book premium services. We aim to redefine self-care by blending innovation with convenience, ensuring beauty and grooming are not just services but an experience. With a focus on quality, reliability, and customer satisfaction, Su Stylo is transforming the salon industry one appointment at a time.
                                </p>
                                <Link className='btn-8 custom-btn'><span>Book Now</span></Link>
                            </div>
                        </div>
                        <hr className="my-5" />
                        <div className="row align-items-center">

                            <div className="col-md-6 mb-3 about_mission right_content fadeInRight  ps-5" data-aos="zoom-in-right">
                                <h2 className="wow fadeInRight animated" data-wow-delay=".3s">
                                    Step <span className="id-color">Inside</span> our Salon<span className="text-effect">experience</span> The Magic of Transfomation
                                </h2>
                                <p>At Su Stylo, we strive to empower both salon owners and customers by making grooming services seamless, accessible, and hassle-free. Our platform helps salons expand their reach while offering customers an effortless way to book premium services. We aim to redefine self-care by blending innovation with convenience, ensuring beauty and grooming are not just services but an experience. With a focus on quality, reliability, and customer satisfaction, Su Stylo is transforming the salon industry one appointment at a time.
                                </p>
                                <Link to={'/bookappoinment'} className='btn-8 custom-btn'><span>Book Now</span></Link>
                            </div>
                            <div className="col-md-6 mt-5 mb-3" data-aos="zoom-in-left">
                                <SimpleParallax
                                    orientation={"down"}
                                    scale={1.8}
                                    delay={1}
                                >
                                    <img src="./images/gallery/R5.jpg" className="img-fluid" />
                                </SimpleParallax>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid ps-0">
                        <div className="aboutBG">
                            <div className="hero-overlay"></div>
                            <div className="row">
                                <div className="col-md-12 position-relative" style={{ zIndex: "999" }}>
                                    <h2 className="my-5">Get In Touch</h2>
                                    <div className="hstack gap-3">
                                        <div class="row">
                                            <div class="col" style={{ textAlign: "justify" }}>
                                                <label style={{ fontWeight: "600", fontSize: "16px", marginBottom: "10px" }}>Name</label>

                                                <input type="text" class="form-control" placeholder="Name" aria-label="First name" />
                                            </div>
                                            <div class="col" style={{ textAlign: "justify" }}>
                                                <label style={{ fontWeight: "600", fontSize: "16px", marginBottom: "10px" }}>Email</label>

                                                <input type="email" class="form-control" placeholder="Email" aria-label="Last name" />
                                            </div>
                                            <div class="col" style={{ textAlign: "justify" }}>
                                                <label style={{ fontWeight: "600", fontSize: "16px", marginBottom: "10px" }}>Mobile</label>
                                                <input type="number" class="form-control" placeholder="Number" aria-label="Last name" />
                                            </div>
                                            <div class="col">
                                                <buttion className='btn-8 custom-btn' style={{ marginTop: "40px" }}><span>Get In Touch</span></buttion>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="container review_section" data-aos="zoom-in">
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
                                    <img src="./images/gallery/R3.jpg" />
                                    <div className="hero-overlay"></div>
                                    <div className="review_text text-center p-5">
                                        <h2>Chandan Sharma</h2>
                                        <div className="d-flex gap-2">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </div>
                                        <p>Su Stylo is my go-to salon for the perfect haircut. The staff is professional, and the atmosphere is so welcoming. Highly recommend!</p>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./images/gallery/R2.jpg" />
                                    <div className="hero-overlay"></div>
                                    <div className="review_text text-center p-5">
                                        <h2> Neha Kapoor</h2>
                                        <div className="d-flex gap-2">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </div>
                                        <p>Loved my styling experience! The team knows exactly what suits you best. The service was top-notch, and I left feeling fabulous!</p>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./images/gallery/R4.jpg" />
                                    <div className="hero-overlay"></div>
                                    <div className="review_text text-center p-5">
                                        <h2>Rahul kumar</h2>
                                        <div className="d-flex gap-2">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </div>
                                        <p>Excellent grooming services! I tried their beard trimming, and it was done with so much precision. Great experience!</p>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./images/gallery/R1.jpg" />
                                    <div className="hero-overlay"></div>
                                    <div className="review_text text-center p-5">
                                        <h2> Vikash singh</h2>
                                        <div className="d-flex gap-2">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </div>
                                        <p>Best haircut I've ever had! The barbers are highly skilled and listen to exactly what you want. Five-star service!</p>

                                    </div>
                                </SwiperSlide>
                            </Swiper>

                        </div>


                    </div>  
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="marquee-container-bottom">
                                    <div className="marquees">
                                        <div className="marquee-container">
                                            <div className="marquee-content">
                                                <span> HAIR DRY <i class="d-item-block"></i></span>
                                                <span> FACIAL  <i class="d-item-block"></i></span>
                                                <span> HAIR WASH  <i class="d-item-block"></i></span>
                                                <span> FADED  <i class="d-item-block"></i></span>
                                                {/* Duplicate content for smooth looping */}
                                                <span> HAIR DRY <i class="d-item-block"></i></span>
                                                <span> FACIAL  <i class="d-item-block"></i></span>
                                                <span> HAIR WASH  <i class="d-item-block"></i></span>
                                                <span> FADED  <i class="d-item-block"></i></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>


                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}
