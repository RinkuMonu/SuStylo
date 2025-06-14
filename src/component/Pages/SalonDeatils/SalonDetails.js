import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import "../style/style.css";
import { FaRoute } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { Link ,useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import axiosInstance from "../../config/axiosInstance";

export default function SalonDetails() {
  const location = useLocation();
  const { userId } = location.state || {};
  const { salonId } = location.state || {};


  const [salonDetails, setSalonDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const idToUse = salonId?._id || userId;
  useEffect(() => {
    const fetchData = async () => {
      try {
      
      if (!idToUse) {
        console.error("No ID available for fetching salon data");
        setLoading(false);
        return;
      }
        const response = await axiosInstance.get(`/salon/view/${idToUse}`);

        setSalonDetails(response?.data);
        console.log("salonData:-", response);
        console.log("salonData:-", response.data);
        console.log("data:- ", response?.data?.salon?.salonName);
        console.log("Address:- ", response?.data?.salon?.salonAddress);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching salon data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [userId,salonId?._id]);


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
  const schedule = [
    { day: "Monday", time: "10:00 AM - 6:00 PM" },
    { day: "Tuesday", time: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", time: "10:00 AM - 6:00 PM" },
    { day: "Thursday", time: "10:00 AM - 6:00 PM" },
    { day: "Friday", time: "9:00 AM - 7:00 PM" },
    { day: "Saturday", time: "10:00 AM - 3:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  // const services1 = salonDetails?.salon?.services;
  // console.log("Salon Details:-",services1)
  // Tabs Services
  const services = [
    {
      title: "Classic manicure",
      description: "manual form of the nail and cuticle + cream",
      price: "₹3000.00+",
      duration: "30 min",
    },
    {
      title: "Hardware manicure",
      description: "hardware the shape of the nail and cuticle + cream",
      price: "₹4000.00+",
      duration: "30 min",
    },
    {
      title: "European manicure",
      description:
        "the shape of the nail and the cuticle very disappointed + cream",
      price: "₹7000.00+",
      duration: "30 min",
    },
  ];

  // Review Section
  const reviews = [
    {
      name: "Sonam Test",
      date: "24 January, 2024",
      rating: 5,
    },
    {
      name: "wNilesh Kothari",
      date: "11 December, 2023",
      rating: 5,
    },
  ];

  return (
    <>
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        <section className="Salondetails-section d-flex align-items-center">
          <div className="hero-overlay"></div>
          <div
            className="container text-center position-relative"
            data-aos="zoom-in"
          >
            <h1 className="hero-title">{salonDetails?.salon?.salonName}</h1>
            <p className=" text-white fw-bold">
              <FaRoute className="icon" />
              {salonDetails?.salon?.salonAddress}

              {/*
              G-267, Sitapura Industrial Area,
              Sitapura, Jaipur, Rajasthan 302022, India */}
            </p>
            <div className="d-flex justify-content-center gap-3 mt-3 social-icon">
              <Link>
                <FaFacebook className="fs-4" />
              </Link>
              <Link>
               
                <BsInstagram className="fs-4" />
              </Link>
              <Link>
                <FaYoutube className="fs-4" />
              </Link>
            </div>
            
          </div>
        </section>
        <div className="container-fluid content-section">
          <div className="salon_description">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="salon-img">
                    <img
                    src="https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?cs=srgb&dl=pexels-delbeautybox-211032-853427.jpg&fm=jpg"
                      className="img-fluid rounded"
                      alt=""
                    />
                  </div>
                      {/* src={salonDetails?.salon?.salonPhotos[0]} */}
                  <div className="salon_name my-4 d-flex justify-content-between">
                    <div className="left_side">
                      <h2>{salonDetails?.salon?.salonName}</h2>
                      <p>
                        {salonDetails?.salon?.salonTitle}
                        {/* Pick a name that reflects what makes your salon uniquer */}
                      </p>
                    </div>
                    <div className="right_side">
                      <div className="review_text text-center">
                        <div className="d-flex gap-2">
                          <i
                            className="bi bi-star-fill"
                            style={{ color: "#FDCC0D" }}
                          ></i>
                          <i
                            className="bi bi-star-fill"
                            style={{ color: "#FDCC0D" }}
                          ></i>
                          <i
                            className="bi bi-star-fill"
                            style={{ color: "#FDCC0D" }}
                          ></i>
                          <i
                            className="bi bi-star-fill"
                            style={{ color: "#FDCC0D" }}
                          ></i>
                          <i
                            className="bi bi-star-half"
                            style={{ color: "#FDCC0D" }}
                          ></i>
                        </div>
                        <h2>
                          4.9 <span>(76 review)</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  {/* Tabs Section Salon Deatils */}
                  <nav className="salon-tabs">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        Services
                      </button>
                      <button
                        className="nav-link"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        About
                      </button>
                      <button
                        className="nav-link"
                        id="nav-contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-contact"
                        type="button"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        Review
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content Service_tab" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                      tabindex="0"
                    >
                      <div className="container mt-4">
                        {salonDetails?.salon?.services?.map(
                          (service, index) => (
                            <div
                              key={index}
                              className="d-flex justify-content-between align-items-center py-3 border-bottom"
                            >
                              {/* Service Details */}
                              <div>
                                <h5 className="mb-1">{service.title}</h5>
                                <p className="text-muted mb-0">
                                  {service.description}
                                </p>
                              </div>

                              {/* Price & Duration */}
                              <div className="price_section d-flex justify-content-between gap-3">
                                <div className="text-end">
                                  <h5 className="mb-0 fw-bold">
                                    ₹ {service.rate}
                                  </h5>
                                  <p className="text-muted mb-0">
                                    {service.duration}
                                  </p>
                                </div>
                                <Link
                                  to={`/bookappoinment/${idToUse}`}
                                  className="BookAppBtn custom-btn btn-8"
                                >
                                  Book
                                </Link>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                      tabindex="0"
                    >
                      <div className="row">
                        <div className="col-md-12 aboutSalon mt-4">
                          <h3>{salonDetails?.salon?.salonTitle} Mission</h3>
                          <p>{salonDetails?.salon?.salonDescription}</p>

                          <div className="facilities_section">
                            <h3>Facilities</h3>
                            <ul className="d-flex justify-content-between">
                              {salonDetails?.salon?.facilities.map(
                                (item, index) => (
                                  <li key={index}>
                                    <Link>{item}</Link>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                      tabindex="0"
                    >
                      <div className="container mt-4">
                        {/* Overall Rating */}
                        <div className="d-flex align-items-center">
                          <h1 className="me-3">5.0</h1>
                          <div>
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className="text-warning fs-3" />
                            ))}
                            <p className="mb-0 text-muted">6 global ratings</p>
                          </div>
                        </div>

                        {/* Rating Breakdown */}
                        <div className="mt-3">
                          {[5, 4, 3, 2, 1].map((star, index) => (
                            <div
                              key={index}
                              className="d-flex align-items-center mb-2"
                            >
                              <span className="me-2">{star} star</span>
                              <div
                                className="progress flex-grow-1"
                                style={{ height: "8px" }}
                              >
                                <div
                                  className={`progress-bar ${
                                    star === 5 ? "bg-rating" : "bg-light"
                                  }`}
                                  role="progressbar"
                                  style={{ width: star === 5 ? "100%" : "0%" }}
                                ></div>
                              </div>
                              <span className="ms-2">
                                {star === 5 ? "100.0%" : "0.0%"}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Top Reviews */}
                        <h4 className="mt-4">Top reviews</h4>
                        {salonDetails?.salon?.reviews?.map((review, index) => (
                          <div
                            key={index}
                            className="border rounded p-3 mt-3 d-flex align-items-center"
                          >
                            {/* Profile Icon */}
                            <div className="me-3">
                              <div
                                className="bg-light rounded-circle d-flex align-items-center justify-content-center"
                                style={{ width: "50px", height: "50px" }}
                              >
                                <i className="bi bi-person-circle fs-2 text-secondary"></i>
                              </div>
                            </div>

                            {/* Review Details */}
                            <div>
                              <h6 className="mb-1">{review.comment}</h6>
                              <p className="text-muted mb-1">
                                Reviewed on {review.createdAt}
                              </p>
                              <div>
                                {[...Array(parseInt(review.rating))].map(
                                  (_, i) => (
                                    <FaStar key={i} className="text-warning" />
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="salon_address">
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
                  <div className="salon_about text-center my-3">
                    <h2>About</h2>
                    <p>
                      Bookup is an app making schdulling of the best
                      professionals in the health. wellness, and beauty industry
                      in Jaipur. Find reliable review and make an appointment
                      with the best professionals.
                    </p>
                  </div>
                  <hr className="mt-5" />
                  <div className="weekly-opening">
                    <h4 className="mb-3">Weekly Schedule</h4>
                    <div className="d-flex flex-column gap-2">
                      {salonDetails?.salon?.openingHours &&
                        Object.entries(salonDetails.salon.openingHours).map(
                          ([day, time], index) => (
                            <div
                              key={index}
                              className="d-flex justify-content-between p-2 border rounded"
                            >
                              <span className="fw-bold">{day}:</span>
                              <span
                                className={
                                  time === "Closed" ? "text-danger fw-bold" : ""
                                }
                              >
                                {time}
                              </span>
                            </div>
                          )
                        )}
                    </div>
                  </div>
                  <hr className="mt-5" />
                  <div className="salon_contact text-center">
                    <h3>Contact & Business Hours</h3>
                    <p className="mb-4">{salonDetails?.salon?.mobile}</p>
                    <a
                      className="mt-4"
                      data-replace="+91 72970 26119"
                      href={`tel:${salonDetails?.salon?.mobile}`}
                    >
                      Call
                    </a>
                  </div>
                  <hr className="mt-5" />
                  <h3 className="social-title">Share</h3>
                  <div className="d-flex justify-content-center gap-3 mt-3 social-icon">
                    <Link>
                      <FaFacebook className="fs-4" />
                    </Link>
                    <Link>
                      {" "}
                      <BsInstagram className="fs-4" />
                    </Link>
                    <Link>
                      <FaYoutube className="fs-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}