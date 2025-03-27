import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import "../style/style.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineChair } from "react-icons/md";
import { useParams } from "react-router-dom";

export default function BookNow() {
  const { id } = useParams();
  console.log("Salon ID:", id);

  const [date, setDate] = useState("");
  const [slot, setSlot] = useState({});
  const [selectedTime, setSelectedTime] = useState(null);
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    new WOW().init();
    AOS.init({ duration: 1000 });
  }, []);

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

  const handleDateChange = async (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    console.log("Selected Date:", selectedDate);

    let url = `https://sustylo-web.onrender.com/api/schedule/schedule-get?salonId=${id}&date=${selectedDate}`;

    try {
      const res = await fetch(url);
      const json = await res.json();
      console.log("API Response:", json);

      setSlot(json.availableSlots || {});
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleBooking = () => {
    const user = localStorage.getItem('user');  // Retrieve user data from localStorage

    if (user) {
      // User is logged in, proceed with booking logic
      console.log('User is logged in:', JSON.parse(user));
      // Add your booking logic here
    } else {
      // User not logged in, redirect to the login page
      window.location.href = '/login';  // Redirect to login page
    }
  };


  const getSeatClass = (status) => {
    return status === "available" ? "btn-success" : "btn-danger";
  };

  return (
    <>
      <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} ref={domRef}>
        <section className="bookAppoinment-section d-flex align-items-center">
          <div className="hero-overlay"></div>
          <div className="container text-center position-relative">
            <h2 className="hero-title">BOOK APPOINTMENT</h2>
          </div>
        </section>

        <div className="content-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="mb-4">Add Additional Services</h2>
                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
              </div>
            </div>
          </div>

          <div className="container mt-4 additional_services" data-aos="fade-up">
            <div className="row text-white">
              {services.map((service, index) => (
                <div key={index} className="col-md-3">
                  <h5 className="text-uppercase bg-brown p-2 text-white">{service.category}</h5>
                  <ul className="list-unstyled">
                    {service.options.map((option, idx) => (
                      <li key={idx} className="d-flex align-items-center">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" />
                          <label className="form-check-label">{option}</label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="container mt-4 text-white" data-aos="zoom-in-up">
            <div className="row">
              <div className="col-md-5">
                <h5 className="text-uppercase mb-2">Select Date</h5>
                <div className="input-group mb-4">
                  <input
                    type="date"
                    className="form-control  border-brown "
                    placeholder="dd-mm-yyyy"
                    onChange={handleDateChange}

                  />
                  {/* <span className="input-group-text bg-dark border-brown text-white" value={date}
                    >
                    <FaRegCalendarAlt />
                  </span> */}
                </div>
              </div>

              <div className="col-md-1 d-flex justify-content-center align-items-center">
                <hr className="vertical" />
              </div>

              <div className="col-md-6">
                <h5 className="text-uppercase mb-2">Select Time</h5>
                <div className="row">
                  {Object.keys(slot).map((time, index) => (
                    <div key={index} className="col-md-12 mb-4">
                      <button
                        className={`btn btn-lg mb-2 w-100 ${
                          selectedTime === time ? "btn-brown" : "btn-dark"
                        }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </button>

                      <div className="row ">
                        {slot[time].map((seat, idx) => (
                          <div key={idx} className="col-md-4">
                            <div
                              className={`card p-3 mb-3 text-white text-center  ${getSeatClass(seat.status)}`}
                              style={{ cursor: "pointer" , backgroundColor:"grey"}}
                            >
                              <MdOutlineChair className="chair-icon mb-2 align-self-center" />
                              <p className="m-0 fs-6">Seat {seat.seatNumber}</p>
                              <button
                                className={`btn w-100 ${
                                  seat.status === "available" ? "btn-primary" : "btn-secondary"
                                }`}
                                disabled={seat.status !== "available"}
                                onClick={handleBooking}

                              >
                                {seat.status === "available" ? "Reserve" : "Booked"}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="container" data-aos="zoom-in" style={{ marginTop: "70px" }}>
            <div className="row bookingfrm">
              <div className="col-md-12">
                <h2 className="mb-4">Appointment Form</h2>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Name</label>
                  <input type="text" className="form-control" id="username" placeholder="Your Full Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">Mobile</label>
                  <input type="number" className="form-control" id="mobile" placeholder="01234567896" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="usermsg" className="form-label">Your Message</label>
                  <textarea className="form-control" id="usermsg" rows="9" placeholder="Type Here.."></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <button className="btn-8 custom-btn ms-0 mt-5"><span>Submit</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
