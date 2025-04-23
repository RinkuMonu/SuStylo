import React from 'react';
import SimpleParallax from "simple-parallax-js";
import { Link } from "react-router-dom";

export default function AboutSection() {
    return (
        <>
            <section className='homeAboutSection'>
                <div className='container'>
                    <div className=' '>
                        <div className='row mx-5'>
                            <div className='col-md-6 d-flex justify-content-center'>
                                <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                                    <img
                                        src="./images/10.jpg"
                                        className="img-fluid aboutimg"
                                  
                                    />
                                </SimpleParallax>
                            </div>
                            <div className='col-md-6 aboutsection'>
                                <div className="right_content fadeInRight ">
                                    <h2
                                        className="wow fadeInRight animated"
                                        data-wow-delay=".3s"
                                    >
                                        Crafting {" "}
                                        <span className="third-color">Confidence</span> Through
                                        Sharp Style
                                    </h2>
                                    <p className="text-dark fw-normal">
                                        At Su Stylo, we believe grooming is more than just a routine—it’s an art. Our expert barbers blend classic techniques with modern trends to give you a sharp, stylish, and confident look.
                                        Step into our warm and inviting space, where precision meets perfection. Whether it’s a clean shave, a stylish haircut, or a well-groomed beard, we ensure every service is tailored to enhance your personality and style.
                                    </p>
                                    <Link className="btn-8 custom-btn">
                                        <span>Book Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </section>


        </>
    )
}
