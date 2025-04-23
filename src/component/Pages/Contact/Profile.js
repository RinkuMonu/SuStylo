import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import '../style/style.css';
export default function Profile() {
    useEffect(() => {
        new WOW().init();
    }, []);
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });

        if (domRef.current) observer.observe(domRef.current);

        return () => {
            if (domRef.current) observer.unobserve(domRef.current);
        };
    }, []);
    return (
        <>
            <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} ref={domRef}>
                <section className="Profile-section d-flex align-items-center">
                    <div className="hero-overlay"></div>

                    <div className="container text-center position-relative">
                        <h2 className="hero-title fw-bold">Profile</h2>
                        <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
                    </div>
                </section>
                <div className="container mt-5">
                    <div className="card shadow p-4">
                        <div className="row">
                            {/* Profile Image */}
                            <div className="col-md-4 text-center">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Profile"
                                    className="img-fluid rounded-circle mb-3"
                                    style={{ width: '150px', height: '150px' }}
                                />
                                <h4 className="fw-bold">John Doe</h4>
                                <p className="text-muted">Frontend Developer</p>

                                {/* Social Icons */}
                                <div className="mt-3">
                                    <a href="#" className="text-dark me-3">
                                        <i className="fab fa-github fa-lg"></i>
                                    </a>
                                    <a href="#" className="text-primary me-3">
                                        <i className="fab fa-linkedin fa-lg"></i>
                                    </a>
                                    <a href="#" className="text-info">
                                        <i className="fab fa-twitter fa-lg"></i>
                                    </a>
                                </div>
                            </div>

                            {/* Profile Details */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
