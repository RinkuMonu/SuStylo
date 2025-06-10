import React from 'react';
import SimpleParallax from "simple-parallax-js";
import { Link } from "react-router-dom";

export default function AboutSection() {
    return (
        <>
            <section className='homeAboutSection'>
                <div className='container'>
                    <div className='row gx-0 gy-4 px-md-5 px-2'>
                        <div className='col-md-6 d-flex justify-content-center align-items-center'>
                            <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                                <img
                                    src="./images/10.jpg"
                                    className="img-fluid aboutimg"
                                    alt="About Su Stylo"
                                    style={{
                                        height: '600px',
                                        objectFit: 'cover',
                                        width: '100%',
                                        maxWidth: '500px'
                                    }}
                                />
                            </SimpleParallax>
                        </div>
                        <div className='col-md-6 aboutsection d-flex align-items-center'>
                            <div className="right_content fadeInRight px-3 px-md-0">
                                <h2 className="wow fadeInRight animated" data-wow-delay=".3s">
                                    Crafting <span className="third-color">Confidence</span> a style at a time
                                </h2>
                                <p className="text-dark fw-normal">
                                    In SuStylo, grooming is more than only one routine - this is a true reflection of your personality.
                                    Our expert stylists mix classic craftsmanship with modern trends, which is sharp, stylish, and sure to make you look good.

                                    <br /><br />
                                    Whether it is an accurate haircut, a clean beard, or a fully prepared beard, every service is prepared to enhance your confidence and personality.
                                    Step into a place where comfort meets class, and let the SuStylo bring out the best version of you.

                                </p>
                                <Link to="/search-results" className="btn-8 custom-btn">
                                    <span>Book Now</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

