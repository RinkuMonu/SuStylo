import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import "./Salon.css";
import SimpleParallax from "simple-parallax-js";
import axiosInstance from "../../config/axiosInstance";
import Swal from 'sweetalert2';

export default function SalonPartner() {
  const [formData, setFormData] = useState({
    ownerName: "",
    salonName: "",
    mobile: "",
    email: "",
    salonAddress: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
        const response = await axiosInstance.post('/salon/register', formData);
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your form has been filled successfully!'
        });
        console.log('Success:', response.data);

        // Clear the form data after successful submission
        setFormData({
            ownerName: "",
            salonName: "",
            mobile: "",
            email: "",
            salonAddress: ""
        });
    } catch (error) {
        if (error.response && error.response.status === 400) {
            Swal.fire({
                icon: 'error',
                title: 'Duplicate Entry',
                text: 'Your email ID or phone number already exists!'
            });
        } else {
            console.error('Error submitting form:', error);
        }
    }
};


const handleCancel =()=>{
    setFormData({
        ownerName: "",
        salonName: "",
        mobile: "",
        email: "",
        salonAddress: ""
    });
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
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        <section className="Salon-section d-flex align-items-center">
          <div className="hero-overlay"></div>
          <div className="container text-center position-relative">
            <h2 className="hero-title">SALON PARTNER</h2>
            <p className="hero-subtitle">
              Established with a passion for the art of barbering, we take great
              pride in our craft and strive to create an atmosphere that feels
              like home.
            </p>
          </div>
        </section>
        <section className="content-section">
          <div className="container Salonpartner_slider">
            <div className="row">
              <div className="col-md-6">
                <h1>
                  Barbershop is More Than Hobby, It's Our{" "}
                  <span class="text-effect">Destiny!</span>{" "}
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
              <div className="col-md-6">
                <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                  <img src="./images/gallery/R6.jpg" className="img-fluid" />
                </SimpleParallax>
              </div>
            </div>
          </div>
          <div className="container partnerfrm">
            <div className="row">
              <div className="col-md-12">
                <div className="heading mb-4 text-center">
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
                        <label htmlFor="ownerName" className="form-label">
                          Salon Owner Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="ownerName"
                          name="ownerName"
                          value={formData.ownerName}
                          onChange={handleChange}
                          placeholder="Salon Owner Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">
                          Mobile Number
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="mobile"
                          name="mobile"
                          value={formData.mobile}
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
                        <label htmlFor="salonAddress" className="form-label">
                          Address
                        </label>
                        <textarea
                          className="form-control"
                          id="salonAddress"
                          name="salonAddress"
                          value={formData.salonAddress}
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
                        <button className="cancelBtn" onClick={handleCancel}>Cancel</button>
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