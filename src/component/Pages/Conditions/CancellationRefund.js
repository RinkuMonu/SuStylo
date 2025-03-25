import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import '../style/style.css'
import { Link } from "react-router-dom";

export default function CancellationRefund() {
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
                <section className="cancellationRefund-section d-flex align-items-center">
                    {/* <div className="hero-overlay"></div> */}
                    <div className="container text-center position-relative">
                        {/* <h2 className="hero-title">Cancellation & Refund Policy
                        </h2> */}
                    </div>
                </section>
                <div class="de-gradient-edge-bottom" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
            </div>
            <div className="content-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="gallery_heading text-center">
                                <h2>Cancellation & Refund Policy
                                </h2>
                            </div>
                            <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
                        </div>
                        <div className="col-md-12">
                            <div className="clearfix companydetails">
                                <img
                                    src='./images/gallery/R5.jpg'
                                    className="img-fluid col-md-6 float-md-end mb-3 ms-md-3 img-width mt-5"
                                    alt="policy img"
                                />
                                <h2 className="my-3">SU STYLO</h2>
                                <p className="mb-3"> At Su Stylo, customer satisfaction is our top priority. To ensure a hassle-free experience, we have implemented a simple and transparent cancellation policy.
                                </p>
                                <p className="mb-5">A cancellation fee may be applied when a customer cancels a booking on the platform. The fee will depend on the time of cancellation after confirming the appointment.</p>
                                <b >Case 1: When Booking Is Not Confirmed</b>
                                <p>If the booking has not been confirmed, any deducted amount (if applicable) will be refunded via the original payment method within 72 hours (refund timelines are subject to third-party payment gateway policies).
                                </p>
                                <b>Case 2: When Customers Cancel Their Appointment</b>
                                <div className="definition_list mt-4">
                                    <ul>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>If a customer cancels their appointment at least 24 hours before the scheduled time, a full refund will be provided. (Refer to Case 1 for refund timelines).</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>If a customer cancels within 24 hours of the scheduled appointment, a 35% cancellation fee will be charged.</li>
                                    </ul>
                                </div>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Cancellation Time</th>
                                            <th>Cancellation Fee</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Before 24 Hours</td>
                                            <td>No Cancellation Fee</td>
                                        </tr>
                                        <tr>
                                            <td>Within 24 Hours</td>
                                            <td>35% Cancellation Fee</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <b>Case 3: No-Show Policy</b>
                                <p>If a customer does not cancel the booking and also fails to show up at the partner salon, the refund will be subject to the partner’s discretion and policies.</p>
                                <b>Case 4: Cancellation by Partner</b>
                                <p>Su Stylo salon partners and beauty professionals may cancel an appointment in advance. However, if the scheduled appointment is within 2 hours, they are required to complete the service unless prevented by unavoidable circumstances beyond their control.</p>
                                <b>Why is a Cancellation Fee Charged?</b>
                                <p>The cancellation fee is applied to compensate for the reserved slot, time, and effort put into processing an appointment exclusively for you.</p>
                                <b>How is the Cancellation Fee Charged?</b>
                                <p>The cancellation fee is deducted from the amount paid for the canceled service. Su Stylo reserves the right to modify or waive the cancellation fee at its discretion. The fee will be quoted in Indian Rupees, and users must comply with all applicable laws for making payments to Su Stylo or its salon partners.</p>
                                <b>Contact Information</b>
                                <p>For any clarification regarding the refund policy, please contact us at:</p>
                                <div className="definition_list mt-4">
                                    <ul>
                                        <li><i class="bi bi-envelope me-2" style={{ color: "#ffb792" }}></i><Link style={{color:"#fff"}} href="mailto:info@sustylo.com">info@sustylo.com</Link></li>
                                        <li><i class="bi bi-telephone me-2" style={{ color: "#ffb792" }}></i><Link style={{color:"#fff"}} href="tel:7297026119">7297026119</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
