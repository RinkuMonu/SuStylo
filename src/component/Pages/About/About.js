import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import Swal from "sweetalert2";
import "../style/style.css";
import SimpleParallax from "simple-parallax-js";
import { Link } from "react-router-dom";
import axiosInstance from "../../config/axiosInstance";
import SEO from "../../SEO";

export default function About() {
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    number: "",
    type: "",
  });

  // Real-time validation and input handling
  const validateField = (name, value) => {
    const errors = {};
    const nameRegex = /^[A-Za-z\s]*$/;
    const mobileRegex = /^[6-9]\d{0,9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "name") {
      if (!value) {
        errors.name = "Name is required";
      } else if (!nameRegex.test(value)) {
        errors.name = "Name can only contain letters and spaces";
      }
    }

    if (name === "email") {
      if (!value) {
        errors.email = "Email is required";
      } else if (!emailRegex.test(value)) {
        errors.email = "Invalid email format";
      }
    }

    if (name === "number") {
      if (!value) {
        errors.number = "Mobile number is required";
      } else if (!mobileRegex.test(value)) {
        errors.number = "Mobile number must be 10 digits starting with 6-9";
      } else if (value.length !== 10) {
        errors.number = "Mobile number must be exactly 10 digits";
      }
    }

    if (name === "type" && !value) {
      errors.type = "Please select a user type";
    }

    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    
    if (name === "name" && !/^[A-Za-z\s]*$/.test(value)) {
      return;
    }

    
    if (name === "number" && value && !/^[6-9]\d{0,9}$/.test(value)) {
      return; 
    }

    setFormValues({ ...formValues, [name]: value });
    const errors = validateField(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: errors[name] }));
  };

  const validateForm = (data) => {
    const errors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const mobileRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.name) {
      errors.name = "Name is required and only contain letters ";
    } else if (!nameRegex.test(data.name)) {
      errors.name = "Name can only contain letters and spaces";
    }

    if (!data.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Invalid email format";
    }

    if (!data.number) {
      errors.number = "Mobile number is required";
    } else if (!mobileRegex.test(data.number)) {
      errors.number = "Mobile number must be 10 digits starting with 6-9";
    }

    if (!data.type) {
      errors.type = "Please select a user type";
    }

    return errors;
  };

  const formHendler = async (event) => {
    event.preventDefault();
    setLoading(true);

    const errors = validateForm(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axiosInstance.post("/get-in-touch", formValues);
        if (response.status === 200) {
          Swal.fire({
            title: "Good job!",
            text: response.data.message,
            icon: "success",
          });
          setLoading(false);
          setFormValues({ name: "", email: "", number: "", type: "" });
          setFormErrors({});
        }
      } catch (error) {
        console.log("error", error);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
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

  // Cities
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
        <SEO/>
        <section className="about-section d-flex align-items-center">
          <div className="hero-overlay"></div>
          <div className="container text-center position-relative">
            <h2 className="hero-title">About Su Stylo</h2>
            <p className="text-white fw-bold fs-4">
              India's most trusted <strong>Grooming </strong> partner - from Jaipur to every Indian city
            </p>
          </div>
        </section>
      </div>
      <div className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="gallery_heading mx-auto text-center">
                <h2>What Is SU Stylo</h2>
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
              <div className="clearfix companydetails">
                <img
                  src="./images/salonbanner.jpg"
                  className="img-fluid col-md-6 float-md-end mb-3 ms-md-3 img-width mt-5 "
                  alt="policy img"
                />
                <h2 className="my-3 third-color fs-3 fw-bold">SU STYLO</h2>
                <p className="mb-3">
                  SU Stylo is changing the way people in India feel about the way of grooming. The beginning of a local innovation in Jaipur is now growing into a national movement to simplify salon booking and redefine beauty and personal care for modern Indians.
                </p>
                <p>
                  Developed by Seven Unique Tech Solution Pvt. Ltd., A major IT company located in Jaipur, reflects the correct mixture of beauty industry insight and digital innovation. With a deep understanding of local business challenges and national market trends, the seven unique tech teams created SuStylo to make real grooming across India and solve salon management problems.
                </p>
                <p>
                  In today's fast-paced life, finding the right salon at the right time should not be a struggle. Whether you are preparing for the last-minute meeting, a celebration, or a weekend's self-care routine, SuStylo makes the best salon easy to discover, checks real-time availability, and immediately books a call, no waiting.
                </p>
                <p>
                  Our platform acts as a digital bridge between customers and salon professionals, providing a smooth, transparent and rewarding experience for both. We bring facilities, quality and trust in every beauty appointment.
                </p>
              </div>
              <hr className="mt-5" />
              <section className="py-5" id="who-we-are">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-7 companydetails">
                      <h2 className="my-3 third-color fs-3 fw-bold">Who We Are</h2>
                      <p className="">
                        SuStylo was launched in 2025 by a team of passionate professionals from the beauty industry, technology sector, and customer service background. We saw a common problem: Indian salons were still largely offline, unorganized, and difficult. Customers had to depend on word-of-mouth, make endless calls, and take a chance on the quality of service.
                      </p>
                      <p className="">
                        So we asked{" "}
                        <em>
                          , what if you could find the right salon for you, check availability immediately, book with confidence, and enjoy transparent pricing and verified reviews - all in one place?
                        </em>
                      </p>
                      <p className="">
                        This vision became <strong>SuStylo powerful </strong> , easy-to-use mobile platform designed to please the salon owners and delight customers.
                      </p>
                    </div>
                    <div className="col-lg-5 text-center mt-4 mt-lg-0">
                      <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                        <img
                          src="https://img.freepik.com/free-photo/young-beautiful-woman-choosing-cosmetics-beauty-shop_1303-27656.jpg"
                          alt="About Su Stylo"
                          className="img-fluid "
                        />
                      </SimpleParallax>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <hr className="mt-5" />
          </div>
          <section className="py-5" id="offers">
            <div className="container">
              <h2 className="my-3 third-color fs-3 fw-bold">What SuStylo Offers You</h2>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="p-4 bg-light rounded shadow-sm h-100">
                    <h5 className="fw-semibold mb-3">For Customers:</h5>
                    <ul className="listing ps-3 mb-0">
                      <li>Discover the top-rated, hygiene salon in Jaipur and all over India.</li>
                      <li>Book an appointment in real time - there is no need to call or wait in queues.</li>
                      <li>Enjoy special discounts for our app, cashback, and loyalty awards.</li>
                      <li>Choose flexible payment options: UPI, wallet, card or cash.</li>
                      <li>Use detailed reviews, service photos and ratings from real users.</li>
                      <li>See previous appointments and upcoming booking in a single dashboard.</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="p-4 bg-light rounded shadow-sm h-100">
                    <h5 className="fw-semibold mb-3">For the owners of the salon:</h5>
                    <ul className="listing ps-3 mb-0">
                      <li>List your salon for free - no setup or listing fee.</li>
                      <li>Draw more customers through SuStylo ₹ 4 crore marketing campaigns.</li>
                      <li>Get fast weekly payment and a bonus prize for high performance.</li>
                      <li>Use our salon dashboard to manage employees, services, income and time.</li>
                      <li>Promote customer loyalty with an in-app CRM tool and feedback tracking.</li>
                      <li>Get a golden partner certificate and earn up to 1 lakh annually in incentives.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr className="" />
          <section className="py-5 bg-white" id="why-jaipur">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mx-auto text-center companydetails">
                  <h2 className="h4 fw-bold mb-4 fs-3 " style={{color:"#fb8807"}}>Why did we start in Jaipur</h2>
                  <p className="">
                    We chose Jaipur as our launch city as it is a mixture of tradition and modernity. The beauty industry here is full of potential-from family-run parlors to high-level grooming lounges. But we paid attention to general challenges: unarmed booking, walk-in overload, irregular payment, and low online visibility.
                  </p>
                  <p className="">
                    We spent months meeting salon owners, listening to their problems, and designing solutions for them. At the same time, we spoke to hundreds of customers disappointed with transparency, cleanliness concerns, and lack of long waiting times.
                  </p>
                  <p className="">
                    We spent months meeting salon owners, listening to their problems, and designing a solution that worked for them. At the same time, we spoke to hundreds of customers frustrated by lack of transparency, cleanliness concerns, and long waiting times.
                  </p>
                  <p className=" mb-4">
                    <strong>Su Stylo</strong> were created as a reaction to these real world needs-and the results are proofs:
                  </p>
                  <div className="row text-start">
                    <div className="col-sm-6 col-md-3 mb-3">
                      <div className="bg-light rounded p-3 h-100 text-center shadow-sm">
                        <h5 className="mb-1">1,000+</h5>
                        <p className=" mb-0">Successful Booking</p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3">
                      <div className="bg-light rounded p-3 h-100 text-center shadow-sm">
                        <h5 className="mb-1">100+</h5>
                        <p className=" mb-0">active salon partners in Jaipur alone</p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3">
                      <div className="bg-light rounded p-3 h-100 text-center shadow-sm">
                        <h5 className="mb-1">4.8/5</h5>
                        <p className=" mb-0">average customer satisfaction rating</p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3">
                      <div className="bg-light rounded p-3 h-100 text-center shadow-sm">
                        <h5 className="mb-1">An increase in 3x</h5>
                        <p className=" mb-0">income for small and medium sized salons within 60 days</p>
                      </div>
                    </div>
                  </div>
                  <p className=" mt-4">
                    Today, our success story of Jaipur enhances our expansion across India.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <hr/>
          <div className="row align-items-center">
            <div className="col-md-6 mt-5 mb-3">
              <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                <img src="./images/women-2.jpg" className="img-fluid" />
              </SimpleParallax>
            </div>
            <div className="col-md-6 mb-3 about_mission ps-5">
              <h2 className="mt-5 third-color">OUR MISSION</h2>
              <p>
                To make it easy, reliable, and accessible for every Indian, they need to grow by empowering salon businesses with digital devices.
              </p>
              <div className="text-start">
                <ul className=" list-unstyled">
                  <li className="mb-2">✔ Help to strengthen the local salon without additional cost.</li>
                  <li className="mb-2">✔ Providing customers a reliable one-stop app for all grooming needs.</li>
                  <li className="mb-2">✔ Set a new standard of hygiene, convenience and care.</li>
                  <li className="mb-2">✔ Creating a joyful and regular part of Indian life.</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 about_mission ps-5">
              <h2 className="mt-5 third-color">OUR VISION</h2>
              <p>
                To become India's platform for salon discovery, appointment booking, and beauty care support-from the biggest cities to the smallest cities.
              </p>
              <div className="text-start">
                <ul className=" list-unstyled">
                  <li className="mb-2">✔ More than 10,000 salons across India by 2026</li>
                  <li className="mb-2">✔ Introduce digital changes to the offline grooming industry</li>
                  <li className="mb-2">✔ Increase earning standards for salon professionals, especially in Tier 2 and Tier 3 cities</li>
                  <li className="mb-2">✔ Promote safe, transparent and customer friendly grooming everywhere</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mt-5 mb-3">
              <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                <img src="./images/about-2.jpg" className="img-fluid" />
              </SimpleParallax>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="row align-items-center">
            <div className="col-md-6 mt-5 mb-3">
              <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                <img src="./images/about-3.jpg" className="img-fluid" />
              </SimpleParallax>
            </div>
            <div className="col-md-6 mb-3 about_mission ps-5">
              <h2 className="mt-5 third-color">
                where are we now
              </h2>
              <p>
                We are currently active in the major areas of Jaipur, including: Malavia Nagar, Mansarovar, Jagatpura, Civil Lines, Mi Road, Sitapura, Jhotwara, Vivek Vihar and the areas of the surroundings.
              </p>
              <p>
                Now we are expanding: Udaipur, Kota, Indore, Ahmedabad, Delhi, and more cities in the whole of India.
              </p>
            </div>
          </div>
          <hr/>
          <section className="py-5" id="customer-love">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0 companydetails">
                  <h2 className=" my-3 third-color fs-3 fw-bold ">Why customers love Sustylo</h2>
                  <ul className="list-unstyled text-start mb-4 ">
                    <li className="mb-2">✔ Book your beauty service in just 30 seconds</li>
                    <li className="mb-2">✔ No call - Just open the app and check for live slot availability</li>
                    <li className="mb-2">✔ View pricing, salon hygiene details, and verified reviews</li>
                    <li className="mb-2">✔ Flexible payment for your convenience</li>
                    <li className="mb-2">✔ An app to manage all your grooming needs - anywhere in India</li>
                  </ul>
                  <p className=" mb-4">
                    From everyday haircuts to festive makeovers, SuStylo helps you look your best - without stress, without delay.
                  </p>
                  <hr className="my-4" />
                  <h5 className="fw-semibold small">Let’s Connect</h5>
                  <p className="">
                    SUStylo wants to join the network or find out how we can help you. We are here to help.
                  </p>
                </div>
                <div className="col-lg-6 text-center">
                  <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                    <img 
                      src="./images/new/facialTreatment.jpg" 
                      alt="Happy salon customer"
                      className="img-fluid "
                    />
                  </SimpleParallax>
                </div>
              </div>
            </div>
          </section>
          <div className="container-fluid ps-0 pe-0">
            <div className="aboutBG">
              <div className="hero-overlay"></div>
              <div className="row">
                <div
                  className="col-md-12 position-relative px-3 px-md-5"
                  style={{ zIndex: "999" }}
                >
                  <h2 className="mt-6 mb-3  fw-bold text-white">Get In Touch</h2>
                  <div className="hstack gap-3 flex-column flex-md-row">
                    <form className="row w-100" onSubmit={formHendler}>
                      <div
                        className="col-md-4 col-12 mb-3"
                        style={{ textAlign: "justify" }}
                      >
                        <label
                          style={{
                            fontWeight: "600",
                            fontSize: "16px",
                            marginBottom: "10px",
                            color: "white"
                          }}
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formValues.name}
                          onChange={handleInputChange}
                          className={`form-control placeholder-white border-white ${formErrors.name ? 'is-invalid' : ''}`}
                          placeholder="Name"
                          aria-label="First name"
                        />
                        {formErrors.name && (
                          <div style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                            {formErrors.name}
                          </div>
                        )}
                      </div>

                      <div
                        className="col-md-4 col-12 mb-3"
                        style={{ textAlign: "justify" }}
                      >
                        <label
                          style={{
                            fontWeight: "600",
                            fontSize: "16px",
                            marginBottom: "10px",
                            color: "white"
                          }}
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formValues.email}
                          onChange={handleInputChange}
                          className={`form-control placeholder-white border-white ${formErrors.email ? 'is-invalid' : ''}`}
                          placeholder="hello@gmail.com"
                          aria-label="Last name"
                        />
                        {formErrors.email && (
                          <div style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                            {formErrors.email}
                          </div>
                        )}
                      </div>

                      <div
                        className="col-md-4 col-12 mb-3"
                        style={{ textAlign: "justify" }}
                      >
                        <label
                          style={{
                            fontWeight: "600",
                            fontSize: "16px",
                            marginBottom: "10px",
                            color: "white"
                          }}
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="number"
                          value={formValues.number}
                          onChange={handleInputChange}
                          className={`form-control placeholder-white border-white ${formErrors.number ? 'is-invalid' : ''}`}
                          placeholder="0123456789"
                          aria-label="Last name"
                          maxLength="10"
                        />
                        {formErrors.number && (
                          <div style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                            {formErrors.number}
                          </div>
                        )}
                      </div>

                      <div
                        className="col-md-4 col-12 mb-3"
                        style={{ textAlign: "justify" }}
                      >
                        <label
                          htmlFor="type"
                          style={{
                            fontWeight: "600",
                            fontSize: "16px",
                            marginBottom: "10px",
                            color: "white"
                          }}
                        >
                          User Type
                        </label>
                        <select
                          id="type"
                          name="type"
                          value={formValues.type}
                          onChange={handleInputChange}
                          className={`form-control placeholder-white border-white ${formErrors.type ? 'is-invalid' : ''}`}
                        >
                          <option value="">Select User Type</option>
                          <option value="user">User</option>
                          <option value="salonOwner">Salon Owner</option>
                        </select>
                        {formErrors.type && (
                          <div style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                            {formErrors.type}
                          </div>
                        )}
                      </div>

                      <div className="col-md-4 col-12 mb-3">
                        {loading ? (
                          <button
                            className="btn-8 custom-btn w-100"
                            style={{ marginTop: "40px" }}
                            disabled
                          >
                            <span>Please wait...</span>
                          </button>
                        ) : (
                          <button
                            className="btn-8 custom-btn w-50"
                            style={{ marginTop: "35px" }}
                            type="submit"
                          >
                            <span>Get In Touch</span>
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container my-5">
            <div className="row">
              <div className="col-md-12">
                <div className="gallery_heading mx-auto text-center">
                  <h2>Where We Are Now</h2>
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
          <hr className="mx-5" />
        </div>
      </div>
    </>
  );
}