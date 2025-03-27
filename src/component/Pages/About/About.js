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
        { name: "Malviya Nagar", url: "#" },
        { name: "Jhotwarda", url: "#" },
        { name: "Civil Lines", url: "#" },
        { name: "New Delhi", url: "#" },
        { name: "Mansarover", url: "#" },
        { name: "Jagatpura", url: "#" },
        { name: "MI Road", url: "#" },
        { name: "Ashok Nagar", url: "#" },
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
                <div class="de-gradient-edge-bottom" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
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
                                <p className="mb-3"> Su Stylo is your last destination for spontaneous salon appointments and premium grooming services. We are bringing revolution in the salon industry with a commitment to style, convenience, and top-notch customer care. Our goal is to provide an extraordinary grooming experience where luxury fulfills, ensuring that each customer enjoys harass -free booking and world-class beauty services under one roof. We understand that modern lifestyle can be busy, and finding time for self-care can often take a backseat. That is why we have created a platform that prioritizes your convenience, which makes it easier to maintain your routine without disrupting your busy schedule.
                                </p>
                                <p className="mb-3">Founded in 2025, our mission is to transform the way you experience grooming by offering effortless booking and high-quality salon services with just a few clicks. Our expert team consists of highly skilled professionals who are passionate about delivering outstanding results, ensuring that every haircut, shave, and beauty treatment is executed with precision, creativity, and the latest trends in mind. We take pride in staying ahead of industry innovations, constantly upgrading our techniques and technology to give our customers a truly premium experience. Whether you’re seeking a classic look or something bold and contemporary, our professionals are equipped with the expertise to bring your vision to life.</p>
                                    <p>At Su Stylo, we believe that self-care should be a luxurious yet stress-free experience. Our platform is designed to eliminate the traditional challenges of salon visits, allowing customers to easily book appointments at their preferred salons without any inconvenience. No more long queues, no more uncertainty regarding availability, and no more compromises when it comes to quality service. Our cutting-edge technology ensures that you get the service you need at the time that suits you best, making beauty and grooming a seamless part of your routine. With just a few taps on your phone, you can secure an appointment and indulge in a pampering session that leaves you feeling refreshed and confident.</p>

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
                            <p>At Su Stylo, we strive to empower both salon owners and customers by making grooming services seamless, accessible, and hassle-free. Our platform helps salons expand their reach while offering customers an effortless way to book premium services. We aim to redefine self-care by blending innovation with convenience, ensuring beauty and grooming are not just services but an experience. With a focus on quality, reliability, and customer satisfaction, Su Stylo is transforming the salon industry one appointment at a time.
                            </p>
                        </div>
                    </div>
                    {/* Our Vision */}
                    <hr className="mt-5" />
                    <div className="row align-items-center">

                        <div className="col-md-6 mb-3 about_mission ps-5" data-aos="zoom-out-up">
                            <h2 className="mt-5">OUR VISION</h2>
                            <p>At Su Stylo, we envision transforming the way India experiences salon services. Our goal is to make every salon visit seamless, ensuring customers can easily discover and book their favorite salons with ease. By embracing technology-driven solutions, we empower salon owners to expand their reach and grow their businesses. We strive to set new industry standards, making beauty and grooming effortlessly accessible while supporting local salons and enhancing customer experiences.
                            </p>
                        </div>
                        <div className="col-md-6 mt-5 mb-3" data-aos="zoom-out-down">
                            <SimpleParallax
                                orientation={"down"}
                                scale={1.8}
                                delay={1}
                            >
                                <img src="./images/about-2.jpg" className="img-fluid" />
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
                                <img src="./images/about-3.jpg" className="img-fluid" />
                            </SimpleParallax>
                        </div>
                        <div className="col-md-6 mb-3 about_mission ps-5" data-aos="zoom-out-up">
                            <h2 className="mt-5">Style & Grooming, Just a Tap Away</h2>
                            <p>Discover the ease of booking with Su Stylo – your go-to destination for effortless salon appointments. In just 30 seconds, unlock a world of grooming possibilities from your smartphone. Browse nearby salons, explore exclusive deals, and book no-wait appointments instantly. With Su Stylo, beauty and self-care are just a tap away—making every salon visit seamless, convenient, and stress-free!
                            </p>
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
                <hr className="mx-5" />
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
