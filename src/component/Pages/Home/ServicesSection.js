import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesSection() {
    return (
        <>
            <div className="service_section">
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="gallery_heading w-50 mx-auto">
                                <h2 className=''>Service Beyond Expectation</h2>
                                <p>Book your appointment now using the best salon app in India or the barber appointment app to redefine your style!</p>
                                {/* <h2>GALLERY</h2> */}
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
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-3">
                            <div className="servicesBx">
                                <div className="icon_center">
                                    <img
                                        src="./images/shave.svg"
                                        className="img-fluid fw-bold mt-5"
                                    />
                                </div>
                                <div className="service_title">
                                    <h3>SHAVING</h3>
                                </div>
                                <div className="services_content">
                                    <p>
                                        Experience a irritation-free shave with experts and
                                        premium aftercare.
                                    </p>
                                </div>
                                <div className="bookBtn">
                                    <Link to={"/bookappoinment"} className="custom-btn btn-8">
                                        <span>Book Now</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="servicesBx">
                                <div className="icon_center">
                                    <img src="./images/style.svg" className="img-fluid mt-5" width={60} />
                                </div>
                                <div className="service_title">
                                    <h3>STYLING</h3>
                                </div>
                                <div className="services_content">
                                    <p>
                                        Upgrade your look with personalized styling for hair and
                                        beard.
                                    </p>
                                </div>
                                <div className="bookBtn">
                                    <Link to={"/bookappoinment"} className="custom-btn btn-8">
                                        <span>Book Now</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="servicesBx">
                                <div className="icon_center">
                                    <img
                                        src="./images/trim.svg"
                                        className="img-fluid fw-bold mt-5"
                                    />
                                </div>
                                <div className="service_title">
                                    <h3>TRIMMING</h3>
                                </div>
                                <div className="services_content">
                                    <p>
                                        Get precise beard trims and hair trims for a sharp,
                                        well-groomed look.
                                    </p>
                                </div>
                                <div className="bookBtn">
                                    <Link to={"/bookappoinment"} className="custom-btn btn-8">
                                        <span>Book Now</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="servicesBx">
                                <div className="icon_center">
                                    <img
                                        src="./images/hair-cut.svg"
                                        className="img-fluid mt-5" width={60}
                                    />
                                </div>
                                <div className="service_title">
                                    <h3>HAIRCUT</h3>
                                </div>
                                <div className="services_content">
                                    <p>
                                        From classic cuts to modern styles, get a haircut that
                                        complements your look.
                                    </p>
                                </div>
                                <div className="bookBtn">
                                    <Link to={"/bookappoinment"} className="custom-btn btn-8">
                                        <span>Book Now</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
