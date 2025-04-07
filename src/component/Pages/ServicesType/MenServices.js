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

                    <div className="container text-center position-relative">
                        <h2 className="hero-title">Mens Services</h2>
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
                                                    Nourishes, strengthens, and repairs hair with natural ingredients.
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
                                                    Expert trimming, shaping, and styling for a sharp, polished look.
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
                                                    Premium skincare treatment for deep cleansing, hydration, and glowing skin.
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
                                                    Relaxing full-body massage for stress relief and muscle relaxation.
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
                                                    Precise trimming and smooth shaving for a clean, refined appearance.
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
                                                    Removes dirt, oil, and impurities for fresh, glowing skin.
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
                                                    Targeted facial treatment to reduce acne, scars, and blemishes.
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
                                                    Exfoliating peel to brighten skin and remove dead cells effectively.
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
                                                    Premium shave with luxurious care for a smooth, irritation-free finish.
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>



                        <div className="container mb-5">
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
                                    Discover The <span className="id-color fw-bold">Experties</span> And <span className="id-color fw-bold">Passion</span> behind our Salon
                                </h2>
                                <p className="text-muted">At our salon, we combine expertise with passion to deliver exceptional grooming experiences. Our skilled professionals specialize in precision haircuts, beard styling, luxury facials, and organic treatments. Using premium products and the latest trends, we personalize every service to match your style and personality. Whether it's a relaxing massage, deep pore cleansing, or a royal shave, we ensure top-notch care and attention. Step into a world of sophistication where your grooming needs are met with perfection. Elevate your confidence with our expert touch!
                                </p>
                                <Link className='btn-8 custom-btn'><span>Book Now</span></Link>
                            </div>
                        </div>
                        <hr className="my-5" />
                        <div className="row align-items-center">

                            <div className="col-md-6 mb-3 about_mission right_content fadeInRight  ps-5" data-aos="zoom-in-right">
                                <h2 className="wow fadeInRight animated" data-wow-delay=".3s">
                                    Step <span className="id-color fw-bold">Inside</span> our Salon<span className="id-color fw-bold">experience</span> The Magic of Transfomation
                                </h2>
                                <p className="text-muted">Enter a world where style meets sophistication! Our salon offers expert grooming, luxury facials, precision haircuts, and rejuvenating treatments tailored to enhance your look. From beard grooming to deep cleansing facials, our skilled professionals use premium products and advanced techniques to bring out your best. Indulge in a relaxing massage, organic hair treatment, or royal shave designed to refresh and revitalize. Whether you seek a bold new look or subtle refinement, we ensure a seamless transformation that boosts confidence. Visit us today and redefine your style!
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

                </div>
            </div>

        </>
    )
}
