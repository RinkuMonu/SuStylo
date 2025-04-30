import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import '../style/style.css';
import { Link } from "react-router-dom";
import SimpleParallax from "simple-parallax-js";
import { Pagination, Autoplay, Navigation, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function WomenServices() {
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
                <section className="womenservices-section d-flex align-items-center">
                    <div className="hero-overlay"></div>

                    <div className="container text-center position-relative">
                        <h2 className="hero-title">Woman Services</h2>
                        <p className="text-white fw-bold">Experience expert haircuts, luxury facials, skin treatments, and relaxing massages designed to enhance your natural beauty. From hair coloring to organic skincare, we offer personalized services for a flawless look. Pamper yourself with premium care and step out with confidence!</p>
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
                                     spaceBetween={20}
                  centeredSlides={false}
                  pagination={false}
                  navigation={true}
                  modules={[Navigation, FreeMode]}
                  className="mySwiper"
                  breakpoints={{

                    576: {
                      slidesPerView: 2,
                    },

                    768: {
                      slidesPerView: 3,
                    },

                    992: {
                      slidesPerView: 4,
                    },
                  }}
                                >
                                    <SwiperSlide>
                                        <div className="card text-white border-0 position-relative" style={{ borderRadius: "12px", overflow: "hidden" }}>
                                            <SimpleParallax>

                                                <img
                                                    src="./images/gallery/2149311365.jpg"
                                                    className="card-img"
                                                    alt="Organic Hair Treatment"
                                                    style={{ height: "453px", objectFit: "cover", filter: "brightness(50%)" }}
                                                />
                                            </SimpleParallax>

                                            <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                                                <h4 className="fw-bold">Organic Hair Treatment</h4>
                                                <p className="mb-0 fs-6">
                                                    Nourishes, strengthens, and repairs hair with natural ingredients.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card text-white border-0 position-relative" style={{ borderRadius: "12px", overflow: "hidden" }}>
                                            <SimpleParallax>

                                                <img
                                                    src="./images/gallery/14.jpg"
                                                    className="card-img"
                                                    alt="Organic Hair Treatment"
                                                    style={{ height: "453px", objectFit: "cover", filter: "brightness(50%)" }}
                                                />
                                            </SimpleParallax>

                                            <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                                                <h4 className="fw-bold">Aroma Therapy</h4>
                                                <p className="mb-0 fs-6">
                                                    Soothing essential oils for relaxation and skin rejuvenation.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card text-white border-0 position-relative" style={{ borderRadius: "12px", overflow: "hidden" }}>
                                            <SimpleParallax>

                                                <img
                                                    src="./images/gallery/320.jpg"
                                                    className="card-img"
                                                    alt="Organic Hair Treatment"
                                                    style={{ height: "453px", objectFit: "cover", filter: "brightness(50%)" }}
                                                />
                                            </SimpleParallax>

                                            <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                                                <h4 className="fw-bold">Waxing</h4>
                                                <p className="mb-0 fs-6">
                                                    Smooth, hair-free skin with gentle and effective hair removal.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card text-white border-0 position-relative" style={{ borderRadius: "12px", overflow: "hidden" }}>
                                            <SimpleParallax>

                                                <img
                                                    src="./images/gallery/2149265928.jpg"
                                                    className="card-img"
                                                    alt="Nail Manicure"
                                                    style={{ height: "453px", objectFit: "cover", filter: "brightness(50%)" }}
                                                />
                                            </SimpleParallax>

                                            <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                                                <h4 className="fw-bold">Nail Manicure</h4>
                                                <p className="mb-0 fs-6">
                                                    Manicure and pedicure for healthy, beautiful hands and feet.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card text-white border-0 position-relative" style={{ borderRadius: "12px", overflow: "hidden" }}>
                                            <SimpleParallax>

                                                <img
                                                    src="./images/gallery/2149871868.jpg"
                                                    className="card-img"
                                                    alt="Body Massages"
                                                    style={{ height: "453px", objectFit: "cover", filter: "brightness(50%)" }}
                                                />
                                            </SimpleParallax>

                                            <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                                                <h4 className="fw-bold">Body Massages</h4>
                                                <p className="mb-0 fs-6">
                                                    Relaxing therapy to relieve stress and rejuvenate the body.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card text-white border-0 position-relative" style={{ borderRadius: "12px", overflow: "hidden" }}>
                                            <SimpleParallax>

                                                <img
                                                    src="./images/gallery/2148976893.jpg"
                                                    className="card-img"
                                                    alt="Deep Pore Cleansing"
                                                    style={{ height: "453px", objectFit: "cover", filter: "brightness(50%)" }}
                                                />
                                            </SimpleParallax>

                                            <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                                                <h4 className="fw-bold">Deep Pore Cleansing</h4>
                                                <p className="mb-0 fs-6">
                                                    Removes dirt, oil, and impurities for fresh, glowing skin.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card text-white border-0 position-relative" style={{ borderRadius: "12px", overflow: "hidden" }}>
                                            <SimpleParallax>

                                                <img
                                                    src="./images/gallery/2150248325.jpg"
                                                    className="card-img"
                                                    alt="Acne Problem Facial"
                                                    style={{ height: "453px", objectFit: "cover", filter: "brightness(50%)" }}
                                                />
                                            </SimpleParallax>

                                            <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                                                <h4 className="fw-bold">Acne Problem Facial</h4>
                                                <p className="mb-0 fs-6">
                                                    Targeted treatment to reduce acne, scars, and blemishes.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card text-white border-0 position-relative" style={{ borderRadius: "12px", overflow: "hidden" }}>
                                            <SimpleParallax>

                                                <img
                                                    src="./images/gallery/2149037154.jpg"
                                                    className="card-img"
                                                    alt="Glycolic Peel Facial"
                                                    style={{ height: "453px", objectFit: "cover", filter: "brightness(50%)" }}
                                                />
                                            </SimpleParallax>

                                            <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                                                <h4 className="fw-bold">Glycolic Peel Facial</h4>
                                                <p className="mb-0 fs-6">
                                                    Exfoliating treatment for bright, smooth, and youthful skin.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="card text-white border-0 position-relative" style={{ borderRadius: "12px", overflow: "hidden" }}>
                                            <SimpleParallax>

                                                <img
                                                    src="./images/gallery/2148878932.jpg"
                                                    className="card-img"
                                                    alt="European Facial"
                                                    style={{ height: "453px", objectFit: "cover", filter: "brightness(50%)" }}
                                                />
                                            </SimpleParallax>

                                            <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                                                <h4 className="fw-bold">European Facial</h4>
                                                <p className="mb-0 fs-6">
                                                    Hydrating and revitalizing facial for a radiant, healthy glow.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <hr className="my-5" />
                        <div className="row align-items-center">
                            <div className="col-md-6 mt-5 mb-3">
                                <SimpleParallax
                                    orientation={"down"}
                                    scale={1.8}
                                    delay={1}
                                >
                                    <img src="./images/gallery/womwn1.jpg" className="img-fluid" />
                                </SimpleParallax>
                            </div>
                            <div className="col-md-6 mb-3 about_mission right_content fadeInRight  ps-5">
                                <h2 className="wow fadeInRight animated" data-wow-delay=".3s">
                                    Discover The <span className="id-color fw-bold">Experties</span> And <span className="id-color fw-bold">Passion</span> behind our Women's Salon
                                </h2>
                                <p className="text-muted ">Step into a world of beauty and elegance, where our expert professionals bring years of experience and passion to every service. From luxurious facials to organic hair treatments, and deep cleansing to relaxing body massages, we personalize every treatment to enhance your natural beauty. Our salon offers expert waxing, nail care, aroma therapy, and advanced skincare solutions, ensuring a flawless and radiant glow. Using premium products and the latest techniques, we craft an experience that refreshes, revitalizes, and transforms. Visit us and embrace the beauty you deserve!

                                </p>
                                <Link className='btn-8 custom-btn'><span>Book Now</span></Link>
                            </div>
                        </div>
                        <hr className="my-5" />
                        <div className="row align-items-center">

                            <div className="col-md-6 mb-3 about_mission right_content fadeInRight  ps-5">
                                <h2 className="wow fadeInRight animated" data-wow-delay=".3s">
                                    Step <span className="id-color fw-bold">Inside</span> our Salon<span className="id-color fw-bold">experience</span> The Magic of Transfomation
                                </h2>
                                <p className="text-muted">Indulge in a world of beauty and relaxation, where expert care meets elegance. Our salon offers personalized hair treatments, rejuvenating facials, deep cleansing therapies, and soothing body massages to refresh your look and spirit. From precision waxing and nail care to advanced skincare solutions like glycolic peels and European facials, we bring out your natural glow. Using premium products and the latest techniques, we ensure a luxurious, confidence-boosting experience. Step in for a transformation that enhances your beauty and leaves you feeling radiant and refreshed!
                                </p>
                                <Link to={'/bookappoinment'} className='btn-8 custom-btn'><span>Book Now</span></Link>
                            </div>
                            <div className="col-md-6 mt-5 mb-3">
                                <SimpleParallax
                                    orientation={"down"}
                                    scale={1.8}
                                    delay={1}
                                >
                                    <img src="./images/gallery/women2.jpg" className="img-fluid" />
                                </SimpleParallax>
                            </div>
                        </div>
                    </div>
                    {/* <div className="container-fluid ps-0">
                        <div className="aboutBG">
                            <div className="hero-overlay"></div>
                            <div className="row">
                                <div className="col-md-12 position-relative" style={{ zIndex: "999" }}>
                                    <h2 className="my-5 text-white fw-bold">Get In Touch</h2>
                                    <div className="hstack gap-3">
                                        <div className="row">
                                            <div className="col" style={{ textAlign: "justify" }}>
                                                <label style={{ fontWeight: "600", fontSize: "16px", marginBottom: "10px" }}>Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control placeholder-white border-white"
                                                    placeholder="Name"
                                                    aria-label="First name"
                                                />
                                            </div>

                                            <div className="col" style={{ textAlign: "justify" }}>
                                                <label style={{ fontWeight: "600", fontSize: "16px", marginBottom: "10px" }}>Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control placeholder-white border-white"
                                                    placeholder="Email"
                                                    aria-label="Last name"
                                                />
                                            </div>

                                            <div className="col" style={{ textAlign: "justify" }}>
                                                <label style={{ fontWeight: "600", fontSize: "16px", marginBottom: "10px" }}>Mobile</label>
                                                <input
                                                    type="number"
                                                    className="form-control placeholder-white border-white"
                                                    placeholder="Number"
                                                    aria-label="Last name"
                                                />
                                            </div>

                                            <div className="col">
                                                <button className="btn-8 custom-btn" style={{ marginTop: "40px" }}>
                                                    <span>Get In Touch</span>
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div> */}
                    {/* <div className="container review_section" data-aos="zoom-in">
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


                    </div>   */}
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
