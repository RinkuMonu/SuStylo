import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import "./Salon.css";
import SimpleParallax from "simple-parallax-js";
import axiosInstance from "../../config/axiosInstance";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import FAQAccordion from "./FAQ";
import TrustedByStats from "./TrustedByStats";
import Feeedback from "./Feedback";
export default function SalonPartner() {
  const [formData, setFormData] = useState({
    name: "",
    salonName: "",
    mobileNumber: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.post("/user/salon-lead", formData);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your form has been filled successfully!",
      });
      console.log("Success:", response.data);

      setFormData({
        name: "",
        salonName: "",
        mobileNumber: "",
        email: "",
        address: "",
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Duplicate Entry",
          text: "Your email ID or phone number already exists!",
        });
      } else {
        console.error("Error submitting form:", error);
      }
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      salonName: "",
      mobileNumber: "",
      email: "",
      address: "",
    });
  };

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

  const cities = [
    { name: "Malviya Nagar", url: "#" },
    { name: "Jhotwara", url: "#" },
    { name: "Civil Lines", url: "#" },
    { name: "Sitapura", url: "#" },
    { name: "Mansarover", url: "#" },
    { name: "Jagatpura", url: "#" },
    { name: "MI Road", url: "#" },
    { name: "Vivek Vihar", url: "#" },
  ];

  return (
    <>
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        <section className="Salon-section d-flex align-items-center">
          <div className="hero-overlay"></div>
          <div className="container text-center position-relative">
            <h2 className="hero-title">SALON PARTNER</h2>
            <p className="hero-subtitle-partner fw-bold">
              Established with a passion for the art of barbering, we take great
              pride in our craft and strive to create an atmosphere that feels
              like home.
            </p>
          </div>
        </section>
        <section className="content-section">
          <div className="container Salonpartner_slider">
            <div className="row">
              <div className="col-md-6 my-4 orderimg">
                <h1>
                  Barbershop is More Than Hobby, It's Our{" "}
                  <span class="id-color fw-bold">Destiny!</span>{" "}
                </h1>
                <p>
                  {" "}
                  Established with a passion for the art of barbering, we take
                  great pride in our craft and strive to create an atmosphere
                  that feels like home. Established with a passion for the art
                  of barbering, we take great pride in our craft and strive to
                  create an atmosphere that feels like home.
                </p>
              </div>
              <div className="col-md-6 my-4 orderimg2">
                <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                  <img src="./images/gallery/R6.jpg" className="img-fluid" />
                </SimpleParallax>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 my-4 orderimg2">
                <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                  <img
                    src="./images/gallery/R6.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                </SimpleParallax>
              </div>
              <div className="col-md-6 my-4 orderimg">
                <h1>
                  Grow Your Salon with SuStylo
                  {/* <span class="id-color fw-bold">Destiny!</span>{" "} */}
                </h1>
                <p>
                  SuStylo is investing over ₹4 Crore to bring high-value
                  customers straight to your salon door. Be part of the beauty
                  industry’s next big movement — starting in Jaipur.
                </p>
                <div>
                  <ul className="listing">
                    <li className="disc">Reach thousands of local clients every month</li>
                    <li>Get featured in our launch marketing campaigns</li>
                    <li>Receive customer bookings directly on your phone</li>
                    <li>Transparent payouts, no hidden fees</li>
                    <li>Easy-to-use platform with 24/7 support</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 my-4 orderimg">
                <h1>
                  Exclusive Benefits for Jaipur Salons
                  {/* <span class="id-color fw-bold">Destiny!</span>{" "} */}
                </h1>
                {/* <p>
                SuStylo is investing over ₹4 Crore to bring high-value customers straight to your salon door. Be part of the beauty industry’s next big movement — starting in Jaipur.
                </p> */}
                <div>
                  <ul className="listing" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>₹10,000 Performance Bonus: Work hard, earn more</li>
                    <li>
                      Golden Partner Certificate: Get recognized as a verified
                      SuStylo salon
                    </li>
                    <li>
                      Up to ₹1,00,000 Annual Earnings Bonus: Top performers get
                      rewarded
                    </li>
                    <li>Free Registration: No setup or listing fees</li>
                    <li>
                      Free Marketing & Promotions: Let us bring customers to
                      your salon
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 my-4 orderimg2">
                <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                  <img
                    src="./images/gallery/R6.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                </SimpleParallax>
              </div>
            </div>

            <div className="row">
              
              <div className="col-md-6 my-4 orderimg2">
                <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                  <img
                    src="./images/gallery/R6.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                </SimpleParallax>
              </div>
              <div className="col-md-6 my-4 orderimg">
                <h1>
                  How It Works
                  {/* <span class="id-color fw-bold">Destiny!</span>{" "} */}
                </h1>
                <div className="fw-bold mt-3">Step 1 Sign Up</div>
                <div>Fill a short form to show your interest.</div>
                <div className="fw-bold mt-3">Step 2 Get Verified</div>
                <div>
                  Our local team in Jaipur will visit and onboard your salon.
                </div>
                <div className="fw-bold mt-3">Step 3: Start Receiving Bookings</div>
                <div>Start accepting online appointments immediately.</div>
                <div className="fw-bold mt-3">Step 4: Grow Your Business</div>
                <div>
                  {" "}
                  Track bookings, reviews, earnings, and customer trends from
                  your dashboard.
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 my-4 orderimg">
                <h1>
                  Manage Everything With Ease
                  {/* <span class="id-color fw-bold">Destiny!</span>{" "} */}
                </h1>

                <div>
                  <ul className="listing" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>Personalized Salon Dashboard</li>
                    <li>Multiple Payment Modes: UPI, Wallets, Card, Cash</li>
                    <li>Monthly Income Reports</li>
                    <li>Booking Calendar & Customer Details</li>
                    <li>SuStylo Team Support, 6 Days a Week</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 my-4 orderimg2">
                <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                  <img
                    src="./images/gallery/R6.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                </SimpleParallax>
              </div>
            </div>
          </div>
          <FAQAccordion />
          <TrustedByStats />
          <Feeedback />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-12">
                <div className="gallery_heading mx-auto text-center">
                  <h2>Join the SuStylo Community</h2>
                </div>
                <div
                  className="de-separator"
                  style={{
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <ul className="cities-container">
                    {cities.map((city, index) => (
                      <li key={index} className="cities-lists">
                        <Link to={city.url}>{city.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container partnerfrm">
            <div className="row">
              <div className="col-md-12">
                <div className="heading mb-4 text-center id-color">
                  <h2>
                    Stop Waiting for Customers – Start Generating Business!
                  </h2>
                </div>
                <div
                  className="de-separator"
                  style={{
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
              <div className="col-md-12">
                <div className="FrmBg">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="salonName" className="form-label">
                          Salon Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="salonName"
                          name="salonName"
                          value={formData.salonName}
                          onChange={handleChange}
                          placeholder="Salon Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Salon Owner Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Salon Owner Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="mobileNumber" className="form-label">
                          Mobile Number
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="mobileNumber"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          placeholder="Enter Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                          Address
                        </label>
                        <textarea
                          className="form-control"
                          id="address"
                          name="address"
                          placeholder="Address....."
                          value={formData.address}
                          onChange={handleChange}
                          rows={4}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="d-flex">
                        <button
                          className="custom-btn btn-8"
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                        <button className="cancelBtn" onClick={handleCancel}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="marquee-container-bottom">
                  <div className="marquees">
                    <div className="marquee-container">
                      <div className="marquee-content">
                        <span>
                          {" "}
                          HAIR DRY <i class="d-item-block"></i>
                        </span>
                        <span>
                          {" "}
                          FACIAL <i class="d-item-block"></i>
                        </span>
                        <span>
                          {" "}
                          HAIR WASH <i class="d-item-block"></i>
                        </span>
                        <span>
                          {" "}
                          FADED <i class="d-item-block"></i>
                        </span>
                        {/* Duplicate content for smooth looping */}
                        <span>
                          {" "}
                          HAIR DRY <i class="d-item-block"></i>
                        </span>
                        <span>
                          {" "}
                          FACIAL <i class="d-item-block"></i>
                        </span>
                        <span>
                          {" "}
                          HAIR WASH <i class="d-item-block"></i>
                        </span>
                        <span>
                          {" "}
                          FADED <i class="d-item-block"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
