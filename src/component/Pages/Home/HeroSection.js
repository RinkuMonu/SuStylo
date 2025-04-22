import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
export default function HeroSection() {
    return (
        <>
            <section className="hero-section d-flex align-items-center hero-banner">
                <div className="hero-overlay"></div>
                <div className="container position-relative pt-5">
                    <div className='row'>
                        <div className='col-md-8'>
                            <h1 className="hero-title text-start">List Your Salon & Start Receiving Online Appointments</h1>
                            <p className="hero-subtitle mt-3  text-start">
                                At Su Stylo, we are dedicated to the timeless art of barbering. Our passion drives us to deliver precision, style, and an unmatched grooming experience. We take great pride in our craft, ensuring that every client leaves looking sharp and feeling confident.
                            </p>
                            <div className='sreach_input'>
                                <div className="d-flex align-items-center justify-content-between bg-white p-2 shadow rounded-1">
                                    <div className="flex-column flex-grow-1 me-3 text-start">
                                        <label className="fw-bold text-orange mb-1 ps-3">Service Name</label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control border-0 border-bottom rounded-0"
                                                placeholder="Book your services..."
                                            />
                                            <span className="input-group-text bg-white border-0">
                                                <FaSearch />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-column flex-grow-1 me-3 text-start">
                                        <label className="fw-bold text-orange mb-1 ps-3">Address</label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control border-0 border-bottom rounded-0"
                                                placeholder="Where"
                                            />
                                            <span className="input-group-text bg-white border-0">
                                                <FaMapMarkerAlt />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Search Button */}
                                    <button className="btn btn-warning rounded-2 px-4 d-flex align-items-center">
                                        <span className="me-2 fw-bold">Search</span>
                                        <FaSearch />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
