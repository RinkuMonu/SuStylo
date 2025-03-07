import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import './Salon.css';
import SimpleParallax from "simple-parallax-js";

export default function SalonPartner() {
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
                <section className="Salon-section d-flex align-items-center">
                    <div className="hero-overlay"></div>
                    <div className="container text-center position-relative">
                        <h2 className="hero-title">SALON PARTNER</h2>
                        <p className="hero-subtitle">
                            Established with a passion for the art of barbering, we take great pride in our craft
                            and strive to create an atmosphere that feels like home.
                        </p>
                    </div>
                </section>
                <section className="content-section">
                    <div className="container Salonpartner_slider">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>Barbershop is More Than Hobby, It's Our <span class="text-effect">Destiny!</span> </h1>
                                <p> Established with a passion for the art of barbering, we take great pride in our craft
                                    and strive to create an atmosphere that feels like home. Established with a passion for the art of barbering, we take great pride in our craft
                                    and strive to create an atmosphere that feels like home.</p>
                            </div>
                            <div className="col-md-6">
                                <SimpleParallax
                                    orientation={"down"}
                                    scale={1.8}
                                    delay={1}
                                >
                                    <img src="./images/gallery/R6.jpg" className="img-fluid" />
                                </SimpleParallax>
                            </div>
                        </div>
                    </div>
                    <div className="container partnerfrm">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="heading mb-4 text-center">
                                    <h2>Stop Waiting for Customers – Start Generating Business!</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
                            </div>
                            <div className="col-md-12">
                                <div className="FrmBg">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div class="mb-3">
                                                <label for="name" class="form-label">Salon Name</label>
                                                <input type="text" class="form-control" id="name" placeholder="Salon Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div class="mb-3">
                                                <label for="ownername" class="form-label">Salon Owner Name</label>
                                                <input type="text" class="form-control" id="ownername" placeholder="Salon Owner Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div class="mb-3">
                                                <label for="number" class="form-label">Mobile Number</label>
                                                <input type="number" class="form-control" id="number" placeholder="Enter Number" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div class="mb-3">
                                                <label for="email" class="form-label">Email</label>
                                                <input type="enail" class="form-control" id="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div class="mb-3">
                                                <label for="email" class="form-label">With textarea</label>
                                                <textarea class="form-control" aria-label="With textarea" rows={4}></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="d-flex">
                                                <button className="custom-btn btn-8">Submit</button>
                                                <button className="cancelBtn">Cancel</button>
                                            </div>


                                        </div>

                                    </div>

                                </div>


                            </div>
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
                </section>

            </div>

        </>
    )
}
