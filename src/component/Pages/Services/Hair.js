import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import '../style/style.css'
import SimpleParallax from "simple-parallax-js";
import { Link } from "react-router-dom";

export default function Hair() {
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
                <section className="about-section d-flex align-items-center">
                    <div className="hero-overlay"></div>
                    <div className="container text-center position-relative">
                        <h2 className="hero-title">Hair Services</h2>
                        <p className="text-white fw-bold fs-4">Book Your Salon Appoinment Today</p>
                    </div>
                </section>

            </div>

        </>
    )
}
