import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesSection() {
    return (
        <>
            <div className="service_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="gallery_heading mx-auto">
                                <h2>Service Beyond Expectation</h2>
                                <p>
                                    Book your appointment now using the best salon app in India or the
                                    barber appointment app to redefine your style!
                                </p>
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

                <div className="container px-3">
                    <div className="row g-3">
                        {/* Shaving */}
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <div className="servicesBx ">
                                <div className="icon_center">
                                    <img
                                        src="./images/shave.svg"
                                        className="img-fluid fw-bold mt-3"
                                        alt="Shaving"
                                    />
                                </div>
                                <div className="service_title mt-5">
                                    <h3>SHAVING</h3>
                                </div>
                                <div className="services_content">
                                    <p>
                                        Experience an irritation-free shave with experts and
                                        premium aftercare.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Styling */}
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <div className="servicesBx ">
                                <div className="icon_center">
                                    <img
                                        src="./images/style.svg"
                                        className="img-fluid mt-3"
                                        width={60}
                                        alt="Styling"
                                    />
                                </div>
                                <div className="service_title mt-5">
                                    <h3>STYLING</h3>
                                </div>
                                <div className="services_content">
                                    <p>
                                        Upgrade your look with personalized styling for hair and
                                        beard.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Trimming */}
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <div className="servicesBx ">
                                <div className="icon_center">
                                    <img
                                        src="./images/trim.svg"
                                        className="img-fluid fw-bold mt-3"
                                        alt="Trimming"
                                    />
                                </div>
                                <div className="service_title mt-5">
                                    <h3>TRIMMING</h3>
                                </div>
                                <div className="services_content">
                                    <p>
                                        Get precise beard trims and hair trims for a sharp,
                                        well-groomed look.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Haircut */}
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <div className="servicesBx">
                                <div className="icon_center">
                                    <img
                                        src="./images/hair-cut.svg"
                                        className="img-fluid mt-3"
                                        width={60}
                                        alt="Haircut"
                                    />
                                </div>
                                <div className="service_title mt-5">
                                    <h3>HAIRCUT</h3>
                                </div>
                                <div className="services_content">
                                    <p>
                                        From classic cuts to modern styles, get a haircut that
                                        complements your look.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

