import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import Swal from 'sweetalert2'
import '../style/style.css';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axiosInstance from "../../config/axiosInstance";
export default function Contact() {
    // formHendler start
    const [loading, setLoading] = useState(false);
    const formHendler = async (event) => {
        event.preventDefault();
        setLoading(true)
        const userData = {
            fullName: event.target.username.value,
            email: event.target.email.value,
            mobile: event.target.mobile.value,
            message: event.target.message.value
        }
        try {
            const response = await axiosInstance.post('/contact', userData)
            if (response.status === 201) {
                Swal.fire({
                    title: "God job !",
                    text: response.data.message,
                    icon: "success"
                });
                setLoading(false)
                event.target.reset();
            }
        } catch (error) {
            console.log('error', error);
            setLoading(false)
        }

    }

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
                <section className="contact-section d-flex align-items-center">
                    <div className="hero-overlay"></div>

                    <div className="container text-center position-relative">
                        <h2 className="hero-title">Contact Us</h2>
                        <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
                    </div>
                </section>
                <div className="content-section">
                    <Container>
                        <Row className="text-center">
                            {/* Address Section */}
                            <Col md={4}>
                                <div className="contact-item">
                                    <div className="icon-box">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <h5>Our Address</h5>
                                    <p><strong className="highlight">P.NO 97, Dakshinpuri Shri Kishanpura</strong></p>
                                </div>
                            </Col>

                            {/* Phone Number Section */}
                            <Col md={4}>
                                <div className="contact-item">
                                    <div className="icon-box">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <h5>Phone Number</h5>
                                    <p><Link href="tel:+917297026119" className="highlight">+91 7297026119</Link></p>
                                </div>
                            </Col>

                            {/* Email Address Section */}
                            <Col md={4}>
                                <div className="contact-item">
                                    <div className="icon-box">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <h5>Email Address</h5>
                                    <p><Link href="mailto:info@info@sustylo.com" className="highlight">info@sustylo.com</Link></p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="contact_frm bookingfrm" >
                                    <form onSubmit={formHendler}>
                                        <div className="row">

                                            <div className="col-md-6">
                                                <div class="mb-3">
                                                    <label for="username" class="form-label">Name</label>
                                                    <input name="username" type="text" class="form-control" id="username" placeholder="Your Full Name" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                                                    <input name="email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="mobile" class="form-label">Mobile</label>
                                                    <input name="mobile" type="number" class="form-control" id="mobile" placeholder="01234567896" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div class="mb-3">
                                                    <label for="usermsg" class="form-label">Your Message</label>
                                                    <textarea name="message" class="form-control" id="usermsg" rows="9" placeholder="Type Here.."></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                {
                                                    loading
                                                        ?
                                                        <div className="btn-8 custom-btn ms-0 mt-5 ">Please Wait...</div>
                                                        :
                                                        <button className="btn-8 custom-btn ms-0 mt-5" type="submit"><span>Submit</span></button>
                                                }
                                            </div>
                                        </div>
                                    </form>

                                </div>

                            </div>
                            <div className="col-md-12" >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3561.264701407029!2d75.869785!3d26.799699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQ3JzU4LjkiTiA3NcKwNTInMTEuMiJF!5e0!3m2!1sen!2sin!4v1724749044503!5m2!1sen!2sin"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        border: "none",
                                        borderRadius: "10px",
                                    }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

