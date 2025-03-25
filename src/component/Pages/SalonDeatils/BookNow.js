import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import "../style/style.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export default function BookNow() {
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
  const services = [
    {
      category: "Haircuts",
      options: ["Regular Haircut", "Scissors Haircut", "Kids Haircut"],
    },
    {
      category: "Shave",
      options: [
        "Head Shave",
        "Royal Shave",
        "Royal Head Shave",
        "Beard Trim No Shave",
        "Beard Trim Shave",
        "Beard Shave Up",
      ],
    },
    {
      category: "Facial",
      options: [
        "Deep Pore Cleansing",
        "Aromatherapy Facial",
        "Acne Problem Facial",
        "European Facial",
        "Glycolic Peel Facial",
      ],
    },
    {
      category: "Package",
      options: [
        "Haircut + Shave",
        "Haircut + Beard Trim",
        "Haircut + Beard Trim Shave",
        "Haircut + Beard Shape Up",
      ],
    },
  ];
  // Time Slot
  const timeSlots = ["8:00 AM to 9:00 AM"];
  const [selectedTime, setSelectedTime] = useState(null);

  const bookButton = ["Book Now"];


  return (
    <>
      {" "}
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        <section className="bookAppoinment-section d-flex align-items-center">
          <div className="hero-overlay"></div>
          <div className="container text-center position-relative">
            <h2 className="hero-title">BOOK APPOINMENT</h2>
          </div>
        </section>
        <div className="content-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="mb-4">Add Additional Services</h2>
                <div
                  className="de-separator"
                  style={{
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>

            </div>
          </div>
          <div
            className="container mt-4 additional_services"
            data-aos="fade-up"
          >
            <div className="row text-white">
              {services.map((service, index) => (
                <div key={index} className="col-md-3">
                  <h5 className="text-uppercase bg-brown p-2 text-white">
                    {service.category}
                  </h5>
                  <ul className="list-unstyled">
                    {service.options.map((option, idx) => (
                      <li key={idx} className="d-flex align-items-center">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                          />
                          <label class="form-check-label">{option}</label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="container mt-4 text-white" data-aos="zoom-in-up">
            {/* Select Date */}
            <div className="row">
              <div className="col-md-5">
                <h5 className="text-uppercase mb-2">
                  Select Date{" "}
                  <span className="border-bottom border-secondary w-25 d-inline-block"></span>
                </h5>
                <div className="input-group mb-4">
                  <input
                    type="date"
                    className="form-control bg-dark text-white border-brown"
                    placeholder="dd-mm-yyyy"
                  />
                  <span className="input-group-text bg-dark border-brown text-white">
                    <FaRegCalendarAlt />
                  </span>
                </div>

                <div className="d-flex flex-wrap">
                  {bookButton.map((time, index) => (
                    <button
                      key={index}
                      className={`bookButton btn m-1 px-3 py-2 text-white border-0 ${
                        selectedTime === time ? "bg-brown" : "bg-dark"
                      }`}
                    >
                      Book Now
                    </button>
                  ))}
                </div>
              </div>
              <div className="col-md-1 d-flex  justify-content-center align-items-center">
                <hr className="vertical" />
              </div>
              <div className="col-md-6">
                {/* Select Time */}
                <h5 className="text-uppercase mb-2">
                  Select Time{" "}
                  <span className="border-bottom border-secondary w-25 d-inline-block"></span>
                </h5>
                <div className="col-3 ">
                  <div className="dropdown slotBookBtn">
                    {timeSlots.map((time, index) => (
                      <button
                        key={index}
                        className={`slot btn text-white border-0 dropdown-toggle ${
                          selectedTime === time ? "bg-brown" : "bg-dark"
                        }`}
                        onClick={() => setSelectedTime(time)}
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {time}
                      </button>
                    ))}
                    <ul class="dropdown-menu">
                    <li>
                      <button
                        type="button"
                        className="barber text-center  btn btn-secondary dropdown-item text-white"
                      >
                        <IoPerson className="mb-2 " />
                        <h6>Sharad Kumar</h6>
                        <p className="fs-6">2 Year Experience</p>
                        <button type="button" className="btn btn-dark">
                          Reserved
                        </button>
                      </button>
                    </li>
                  </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
          {/* Form Section */}
          <div className="container" data-aos="zoom-in" style={{marginTop:"70px"}}>
            <div className="row bookingfrm">
              <div className="col-md-12">
                <h2 className="mb-4">Appoinment Form</h2>
              </div>
              <div className="col-md-6">
                <div class="mb-3">
                  <label for="username" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Your Full Name"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="mobile" class="form-label">
                    Mobile
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="mobile"
                    placeholder="01234567896"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div class="mb-3">
                  <label for="usermsg" class="form-label">
                    Your Message
                  </label>
                  <textarea
                    class="form-control"
                    id="usermsg"
                    rows="9"
                    placeholder="Type Here.."
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <button className="btn-8 custom-btn ms-0 mt-5">
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
