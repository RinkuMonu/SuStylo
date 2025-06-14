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
import SEO from "../../SEO";

export default function SalonPartner() {
  const [formData, setFormData] = useState({
    salonName: "",
    salonOwnerName: "",
    mobileNumber: "",
    email: "",
    address: "",
  });
  const [errors, setErrors] = useState({
    salonName: "",
    salonOwnerName: "",
    mobileNumber: "",
    email: "",
    address: "",
  });

  // Validation functions
  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    if (!name) return "Name is required and must contain only letters ";
    if (!nameRegex.test(name)) return "Name must contain only letters and spaces (minimum 2 characters)";
    return "";
  };

  const validateSalonName = (salonName) => {
    const salonNameRegex = /^[a-zA-Z0-9\s]{2,}$/;
    if (!salonName) return "Salon name is required";
    if (!salonNameRegex.test(salonName)) return "Salon name must contain only letters, numbers, and spaces (minimum 2 characters)";
    return "";
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobile) return "Mobile number is required";
    if (!mobileRegex.test(mobile)) return "Mobile must be 10 digits and start with 6-9";
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Invalid email format";
    return "";
  };

  const validateAddress = (address) => {
    if (!address.trim()) return "Address is required";
    if (address.trim().length < 5) return "Address must be at least 5 characters long";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let sanitizedValue = value;

    // Sanitize inputs
    if (name === "salonName") {
      sanitizedValue = value.replace(/[^a-zA-Z\s]/g, "");
    } else if (name === "salonOwnerName") {
      sanitizedValue = value.replace(/[^a-zA-Z0-9\s]/g, "");
    } else if (name === "mobileNumber") {
      sanitizedValue = value.replace(/\D/g, "").slice(0, 10);
    } else if (name === "email") {
      sanitizedValue = value.trim();
    } else if (name === "address") {
      sanitizedValue = value;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));

    // Update validation
    const errorMessages = {
      name: name === "name" ? validateName(sanitizedValue) : errors.name,
      salonName: name === "salonName" ? validateSalonName(sanitizedValue) : errors.salonName,
      mobileNumber: name === "mobileNumber" ? validateMobile(sanitizedValue) : errors.mobileNumber,
      email: name === "email" ? validateEmail(sanitizedValue) : errors.email,
      address: name === "address" ? validateAddress(sanitizedValue) : errors.address,
    };

    setErrors((prev) => ({
      ...prev,
      ...errorMessages,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate all fields
    const newErrors = {
      salonName: validateSalonName(formData.salonName),
      salonOwnerName: validateName(formData.salonOwnerName),
      mobileNumber: validateMobile(formData.mobileNumber),
      email: validateEmail(formData.email),
      address: validateAddress(formData.address),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (hasErrors) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please fix the errors in the form before submitting",
      });
      return;
    }

    try {
      const response = await axiosInstance.post("/lead", formData);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your form has been filled successfully!",
      });
      console.log("Success:", response.data);

      setFormData({
        salonName: "",
        salonOwnerName: "",
        mobileNumber: "",
        email: "",
        address: "",
      });
      setErrors({
        salonName: "",
      salonOwnerName: "",
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
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to submit the form. Please try again.",
        });
        console.error("Error submitting form:", error);
      }
    }
  };

  const handleCancel = () => {
    setFormData({
      salonName: "",
      salonOwnerName: "",
      mobileNumber: "",
      email: "",
      address: "",
    });
    setErrors({
      salonName: "",
      salonOwnerName: "",
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
    <SEO />
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        <section className="Salon-section d-flex align-items-center">
          <div className="hero-overlay"></div>
          <div className="container text-center position-relative">
            <h1 className="hero-title">SALON PARTNER</h1>
            <p className="text-white fw-bold">
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
                  The barber shop is more than a hobby - this is our {" "}
                  <span className="id-color fw-bold">Destiny!</span>{" "}
                </h1>
                <p>
                  Made from passion, built on accuracy.
                  In Sustylo, we understand that barbering is not just a skill - this is a way of life. Inherent in tradition and elevated by artistry, our fellow barbershop brings out the best grooming for customers who appreciate authenticity, style, and comfort. We are building a network where local barbers can develop, thrive, and be recognized for the craft for which they live.

                </p>
              </div>
              <div className="col-md-6 my-4 orderimg2">
                <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                  <img src="./images/gallery/R6.jpg" className="img-fluid pt-5" />
                </SimpleParallax>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 my-4 orderimg2">
                <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                  <img
                    src="./images/gallery/8.jpg"
                    alt="img"
                    className="img-fluid pt-5"
                  />
                </SimpleParallax>
              </div>
              <div className="col-md-6 my-4 orderimg">
                <h1>
                  Grow Your Salon with SuStylo
                </h1>
                <h6>Launching in Jaipur with ₹4 Crore in Growth Support</h6>
                <p>
                  SuStylo is India’s fastest-growing digital salon platform — and we’re investing heavily to help your salon succeed. Our mission is to bring a steady stream of high-value, ready-to-book customers directly to your salon.
                </p>
                <div>
                  <ul className="listing">
                    <li className="disc">Access to thousands of local clients each month</li>
                    <li>Featured promotions in our Jaipur launch marketing campaigns</li>
                    <li>Real-time bookings delivered straight to your phone</li>
                    <li>Weekly payouts with no hidden charges</li>
                    <li>User-friendly partner dashboard and dedicated support</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 my-4 orderimg">
                <h1>
                  Exclusive benefits for participant salons in Jaipur
                </h1>
                <div>
                  <ul className="listing" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>₹ 10,000 performance bonus
                      Get awards for consistently great service and positive reviews
                    </li>
                    <li>
                      Gold -Sathi Certificate
                      Get recognized as a reliable hairstyle salon officially

                    </li>
                    <li>
                      Up to ₹ 100,000 in annual bonus
                      High-performing partners get encouragement at the end of the major year

                    </li>
                    <li>Zero registration fee
                      Join without any setup or listing fee
                    </li>
                    <li>
                      Honorable Marketing and Promotion
                      We take care of digital advertisements, branding and customer outreach

                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 my-4 orderimg2">
                <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                  <img
                    src="./images/gallery/benifit.jpg"
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
                    src="./images/gallery/howtowork.jpeg"
                    alt="img"
                    className="img-fluid"
                  />
                </SimpleParallax>
              </div>
              <div className="col-md-6 my-4 orderimg">
                <h1>
                  How It Works
                </h1>
                <div className="fw-bold mt-3"> Step 1: Sign Up</div>
                <div>Complete a simple form to express your interest</div>
                <div className="fw-bold mt-3">Step 2: Get Verified</div>
                <div>
                  Our Jaipur-based team will visit your salon for a quick quality check
                </div>
                <div className="fw-bold mt-3">Step 3: Start Receiving Bookings</div>
                <div> Begin accepting online appointments from customers right away</div>
                <div className="fw-bold mt-3">Step 4: Track and Grow</div>
                <div>
                  Monitor your earnings, reviews, and appointments from your personal dashboard
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 my-4 orderimg">
                <h1>
                  Simple, Powerful Salon Management
                </h1>
                <div>
                  <ul className="listing" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                    <li>Custom Salon Dashboard</li>
                    <li>Multiple Payment Options (UPI, Wallets, Cards, Cash)</li>
                    <li>Monthly Income Summaries</li>
                    <li>Booking Calendar and Client Details</li>
                    <li>Ongoing Partner Support, 6 Days a Week</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 my-4 orderimg2">
                <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                  <img
                    src="./images/gallery/manage.jpg"
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

                <form onSubmit={handleSubmit} className="contact_frm bookingfrm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="salonName" className="form-label">
                          Salon Name
                        </label>
                        <input
                          type="text"
                          className={`form-control ${errors.salonName ? "is-invalid" : ""}`}
                          id="salonName"
                          name="salonName"
                          value={formData.salonName}
                          onChange={handleChange}
                          placeholder="Salon Name"
                        />
                        {errors.salonName && (
                          <div className="invalid-feedback">{errors.salonName}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Salon Owner Name
                        </label>
                        <input
                          type="text"
                          className={`form-control ${errors.salonOwnerName ? "is-invalid" : ""}`}
                          id="salonOwnerName"
                          name="salonOwnerName"
                          value={formData.salonOwnerName}
                          onChange={handleChange}
                          placeholder="Salon Owner Name"
                        />
                        {errors.salonOwnerName && (
                          <div className="invalid-feedback">{errors.salonOwnerName}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="mobileNumber" className="form-label">
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          className={`form-control ${errors.mobileNumber ? "is-invalid" : ""}`}
                          id="mobileNumber"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          placeholder="0123456789"
                        />
                        {errors.mobileNumber && (
                          <div className="invalid-feedback">{errors.mobileNumber}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className={`form-control ${errors.email ? "is-invalid" : ""}`}
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                          Address
                        </label>
                        <textarea
                          className={`form-control ${errors.address ? "is-invalid" : ""}`}
                          id="address"
                          name="address"
                          placeholder="Address....."
                          value={formData.address}
                          onChange={handleChange}
                          rows={4}
                        ></textarea>
                        {errors.address && (
                          <div className="invalid-feedback">{errors.address}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="d-flex">
                        <button
                          className="custom-btn btn-8"
                          type="submit"
                        >
                          Submit
                        </button>
                        <button
                          className="cancelBtn"
                          type="button"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

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
                          HAIR DRY <i className="d-item-block"></i>
                        </span>
                        <span>
                          {" "}
                          FACIAL <i className="d-item-block"></i>
                        </span>
                        <span>
                          {" "}
                          HAIR WASH <i className="d-item-block"></i>
                        </span>
                        <span>
                          {" "}
                          FADED <i className="d-item-block"></i>
                        </span>
                        <span>
                          {" "}
                          HAIR DRY <i className="d-item-block"></i>
                        </span>
                        <span>
                          {" "}
                          FACIAL <i className="d-item-block"></i>
                        </span>
                        <span>
                          {" "}
                          HAIR WASH <i className="d-item-block"></i>
                        </span>
                        <span>
                          {" "}
                          FADED <i className="d-item-block"></i>
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