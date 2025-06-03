import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import Swal from "sweetalert2";
import "../style/style.css";
import { Container, Row, Col } from "react-bootstrap";
import axiosInstance from "../../config/axiosInstance";
import SEO from "../../SEO";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        mobile: "",
        message: ""
    });

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        message: ""
    });

    // Validation functions
    const validateName = (name) => {
        const nameRegex = /^[a-zA-Z\s]{2,}$/;
        if (!name) return "Name is required and must contain only letters";
        if (!nameRegex.test(name)) return "Name must contain only letters and spaces";
        return "";
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) return "Email is required";
        if (!emailRegex.test(email)) return "Invalid email format";
        return "";
    };

    const validateMobile = (mobile) => {
        const mobileRegex = /^[6-9]\d{9}$/;
        if (!mobile) return "Mobile number is required";
        if (!mobileRegex.test(mobile)) return "Mobile must be 10 digits and start with 6-9";
        return "";
    };

    const validateMessage = (message) => {
        if (!message.trim()) return "Message is required";
        return "";
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        let sanitizedValue = value;

        if (name === "fullName") {
            sanitizedValue = value.replace(/[^a-zA-Z\s]/g, "");
        } else if (name === "mobile") {
            sanitizedValue = value.replace(/\D/g, "").slice(0, 10);
        }

        setFormData((prev) => ({
            ...prev,
            [name]: sanitizedValue
        }));

        // Update validation
        const errorMessages = {
            fullName: validateName(formData.fullName),
            email: validateEmail(formData.email),
            mobile: validateMobile(formData.mobile),
            message: validateMessage(formData.message)
        };

        setErrors({
            ...errors,
            [name]: errorMessages[name]
        });
    };

    const formHandler = async (event) => {
        event.preventDefault();

        // Validate all fields
        const newErrors = {
            fullName: validateName(formData.fullName),
            email: validateEmail(formData.email),
            mobile: validateMobile(formData.mobile),
            message: validateMessage(formData.message)
        };

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some((error) => error !== "");
        if (hasErrors) return;

        setLoading(true);

        try {
            const response = await axiosInstance.post("/contact", formData);
            if (response.status === 201) {
                Swal.fire({
                    title: "Success!",
                    text: response.data.message,
                    icon: "success"
                });
                setFormData({
                    fullName: "",
                    email: "",
                    mobile: "",
                    message: ""
                });
                setErrors({
                    fullName: "",
                    email: "",
                    mobile: "",
                    message: ""
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Failed to submit the form. Please try again.",
                icon: "error"
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        new WOW().init();
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
        <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} ref={domRef}>
            <SEO />
            <section className="contact-section d-flex align-items-center">
                <div className="hero-overlay"></div>
                <div className="container text-center position-relative">
                    <h2 className="hero-title">Contact Us</h2>
                    <div className="de-separator"></div>
                </div>
            </section>

            <div className="content-section">
                <Container>
                    <Row className="text-center">
                        <Col md={4}>
                            <div className="contact-item">
                                <div className="icon-box"><i className="fa-solid fa-location-dot"></i></div>
                                <h5>Our Address</h5>
                                <p><strong className="highlight">P.NO 97, Dakshinpuri Shri Kishanpura</strong></p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="contact-item">
                                <div className="icon-box"><i className="fa-solid fa-phone"></i></div>
                                <h5>Phone Number</h5>
                                <p><a href="tel:+917297026119" className="highlight">+91 7297026119</a></p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="contact-item">
                                <div className="icon-box"><i className="fa-solid fa-envelope"></i></div>
                                <h5>Email Address</h5>
                                <p><a href="mailto:info@sustylo.com" className="highlight">info@sustylo.com</a></p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form onSubmit={formHandler} className="contact_frm bookingfrm">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="fullName">Name</label>
                                            <input
                                                name="fullName"
                                                type="text"
                                                className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                placeholder="Your Full Name"
                                            />
                                            {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                name="email"
                                                type="email"
                                                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="name@example.com"
                                            />
                                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="mobile">Mobile</label>
                                            <input
                                                name="mobile"
                                                type="tel"
                                                className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
                                                value={formData.mobile}
                                                onChange={handleInputChange}
                                                placeholder="0123456789"
                                            />
                                            {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="message">Message</label>
                                            <textarea
                                                name="message"
                                                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                                                rows="9"
                                                placeholder="Type Here.."
                                                value={formData.message}
                                                onChange={handleInputChange}
                                            ></textarea>
                                            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        {loading ? (
                                            <div className="btn-8 custom-btn ms-0 mt-5">Please Wait...</div>
                                        ) : (
                                            <button className="btn-8 custom-btn ms-0 mt-5" type="submit">
                                                <span>Submit</span>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-12 mt-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=..."
                                style={{
                                    width: "100%",
                                    height: "450px",
                                    border: "none",
                                    borderRadius: "10px"
                                }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                                title="Google Map"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
