import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import '../style/style.css'
import SimpleParallax from "simple-parallax-js";
import { Link } from "react-router-dom";


export default function About() {
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
    // Cities
    const cities = [
        { name: "Malviya Nagar", url: "https://billu.co.in/city/ludhiana" },
        { name: "Jhotwarda", url: "https://billu.co.in/city/faridabad" },
        { name: "Civil Lines", url: "https://billu.co.in/city/delhi" },
        { name: "New Delhi", url: "https://billu.co.in/city/new-delhi" },
        { name: "Gurugram", url: "https://billu.co.in/city/gurugram" },
        { name: "Noida", url: "https://billu.co.in/city/noida" },
        { name: "Ghaziabad", url: "https://billu.co.in/city/ghaziabad" },
        { name: "Gautam Buddha Nagar", url: "https://billu.co.in/city/gautam-buddha-nagar" },
    ];
    return (
        <>
            <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} ref={domRef}>
                <section className="about-section d-flex align-items-center">
                    <div className="hero-overlay"></div>
                    <div className="container text-center position-relative">
                        <h2 className="hero-title">About</h2>
                        <p>Book Your Salon Appoinment Today</p>
                    </div>
                </section>
                <div class="de-gradient-edge-bottom" style={{backgroundSize:"100%", backgroundRepeat:"no-repeat"}}></div>
            </div>
            <div className="content-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="gallery_heading text-center">
                                <h2>What Is SU Stylo</h2>
                            </div>
                            <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
                        </div>
                        <div className="col-md-12">
                            <div className="clearfix companydetails">
                                <img
                                    src='./images/salonbanner.jpg'
                                    className="img-fluid col-md-6 float-md-end mb-3 ms-md-3 img-width mt-5"
                                    alt="policy img"
                                />
                                <h2 className="my-3">SU STYLO</h2>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                        <hr className="mt-5" />

                    </div>
                    {/* Our Mission */}
                    <div className="row align-items-center">
                        <div className="col-md-6 mt-5 mb-3" data-aos="zoom-in-left">
                            <SimpleParallax
                                orientation={"down"}
                                scale={1.8}
                                delay={1}
                            >
                                <img src="./images/2149975504.jpg" className="img-fluid" />
                            </SimpleParallax>
                        </div>
                        <div className="col-md-6 mb-3 about_mission ps-5" data-aos="zoom-in-right">
                            <h2 className="mt-5">OUR MISSION</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                    </div>
                    {/* Our Vision */}
                    <hr className="mt-5" />
                    <div className="row align-items-center">

                        <div className="col-md-6 mb-3 about_mission ps-5" data-aos="zoom-out-up">
                            <h2 className="mt-5">OUR VISION</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                        <div className="col-md-6 mt-5 mb-3" data-aos="zoom-out-down">
                            <SimpleParallax
                                orientation={"down"}
                                scale={1.8}
                                delay={1}
                            >
                                <img src="./images/2149975504.jpg" className="img-fluid" />
                            </SimpleParallax>
                        </div>
                    </div>
                    {/*FAvorite Salon */}
                    <hr className="mt-5" />
                    <div className="row align-items-center">


                        <div className="col-md-6 mt-5 mb-3" data-aos="zoom-out-down">
                            <SimpleParallax
                                orientation={"down"}
                                scale={1.8}
                                delay={1}
                            >
                                <img src="./images/2149975504.jpg" className="img-fluid" />
                            </SimpleParallax>
                        </div>
                        <div className="col-md-6 mb-3 about_mission ps-5" data-aos="zoom-out-up">
                            <h2 className="mt-5">Your Favorite Salon at Your Fingertips</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
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
                {/* Browse Cities */}
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="gallery_heading text-center">
                                <h2>Browse Area</h2>
                            </div>
                            <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="d-flex justify-content-between gap-3">
                                    {cities.map((city, index) => (
                                        <li key={index} className="cities-lists">
                                            <Link to={city.url}>{city.name}</Link>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                        </div>

                    </div>


                </div>
                <hr className="mx-5"/>
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

        </>
    )
}
