import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import "../style/style.css";
import { MdOutlineChair } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function BookNow() {
  const { id } = useParams();
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState({});
  const [selectedTime, setSelectedTime] = useState(null);
  const [isVisible, setVisible] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const domRef = useRef(null);

  // Initialize animations
  useEffect(() => {
    new WOW().init();
    AOS.init({ duration: 1000 });
  }, []);

  // Intersection observer for fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    if (domRef.current) observer.observe(domRef.current);

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  // Complete services data structure

  const Gender = localStorage.getItem("gender");
  const services = [
    {
      category: "Haircuts",
      options: [
        {
          name: "Regular Haircut",
          price: 200,
          duration: "30 min",
          gender: Gender,
        },
        {
          name: "Scissors Haircut",
          price: 300,
          duration: "45 min",
          gender: Gender,
        },
        {
          name: "Kids Haircut",
          price: 150,
          duration: "30 min",
          gender: Gender,
        },
      ],
    },
    {
      category: "Shave",
      options: [
        { name: "Head Shave", price: 250, duration: "30 min", gender: Gender },
        { name: "Royal Shave", price: 400, duration: "45 min", gender: Gender },
        {
          name: "Royal Head Shave",
          price: 500,
          duration: "45 min",
          gender: Gender,
        },
        {
          name: "Beard Trim No Shave",
          price: 200,
          duration: "30 min",
          gender: Gender,
        },
        {
          name: "Beard Trim Shave",
          price: 300,
          duration: "30 min",
          gender: Gender,
        },
        {
          name: "Beard Shave Up",
          price: 250,
          duration: "30 min",
          gender: Gender,
        },
      ],
    },
    {
      category: "Facial",
      options: [
        {
          name: "Deep Pore Cleansing",
          price: 800,
          duration: "60 min",
          gender: Gender,
        },
        {
          name: "Aromatherapy Facial",
          price: 1000,
          duration: "60 min",
          gender: Gender,
        },
        {
          name: "Acne Problem Facial",
          price: 1200,
          duration: "75 min",
          gender: Gender,
        },
        {
          name: "European Facial",
          price: 1500,
          duration: "90 min",
          gender: Gender,
        },
        {
          name: "Glycolic Peel Facial",
          price: 1800,
          duration: "90 min",
          gender: Gender,
        },
      ],
    },
    {
      category: "Package",
      options: [
        {
          name: "Haircut + Shave",
          price: 500,
          duration: "60 min",
          gender: Gender,
        },
        {
          name: "Haircut + Beard Trim",
          price: 450,
          duration: "60 min",
          gender: Gender,
        },
        {
          name: "Haircut + Beard Trim Shave",
          price: 550,
          duration: "60 min",
          gender: Gender,
        },
        {
          name: "Haircut + Beard Shape Up",
          price: 600,
          duration: "60 min",
          gender: Gender,
        },
      ],
    },
  ];

  const handleServiceSelection = (service, isChecked) => {
    if (isChecked) {
      setSelectedServices([...selectedServices, service]);
    } else {
      setSelectedServices(
        selectedServices.filter((s) => s.name !== service.name)
      );
    }
  };

  const handleDateChange = async (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    let url = `https://sustylo-web.onrender.com/api/schedule/schedule-get?salonId=${id}&date=${selectedDate}`;
    try {
      const res = await fetch(url);
      const json = await res.json();
      setSlot(json.availableSlots || {});
    } catch (error) {
      console.error("Error fetching data:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch available slots. Please try again.",
      });
    }
  };

  const calculateTotalDuration = () => {
    return selectedServices.reduce((total, service) => {
      const duration = parseInt(service.duration);
      return isNaN(duration) ? total : total + duration;
    }, 0);
  };

  const handleBooking = async (seatNumber) => {
    const storedUserId = localStorage.getItem("id");

    if (!storedUserId) {
      window.location.href = "/login";
      return;
    }

    if (!date) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a date",
      });
      return;
    }

    if (!selectedTime) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a time slot",
      });
      return;
    }

    if (!selectedServices.length) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select at least one service",
      });
      return;
    }

    try {
      const response = await axios.post(
        "https://api.sustylo.com/api/booking/create",
        {
          salonId: id,
          userId: storedUserId,
          date: date,
          timeSlot: selectedTime,
          seatNumber: seatNumber,
          services: selectedServices.map((service) => ({
            name: service.name,
            price: service.price,
            duration: service.duration,
            discount: 0,
            gender: service.gender,
          })),
        }
      );

      if (response.status === 201) {
        Swal.fire({
          title: "Booking Successful!",
          text: "Your appointment has been confirmed",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          // Optionally redirect or refresh data
          window.location.reload();
        });
      }
    } catch (error) {
      console.error("Booking failed:", error);
      let errorMessage = "Booking failed. Please try again.";

      if (error.response) {
        if (error.response.status === 400) {
          errorMessage = error.response.data.error || errorMessage;
        } else if (error.response.status === 409) {
          errorMessage =
            "This slot is already booked. Please choose another time.";
        }
      }

      Swal.fire({
        icon: "error",
        title: "Booking Failed",
        text: errorMessage,
      });
    }
  };

  const getSeatClass = (status) => {
    return status === "available" ? "btn-success" : "btn-danger";
  };
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      <section className="bookAppoinment-section d-flex align-items-center">
        <div className="hero-overlay"></div>
        <div className="container text-center position-relative">
          <h1 className="hero-title">BOOK APPOINTMENT</h1>
        </div>
      </section>
      <div className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="mb-4">Add Additional Services</h2>
              <div className="de-separator"></div>
            </div>
          </div>
        </div>

        <div className="container mt-4 additional_services" data-aos="fade-up">
          <div className="row text-black">
            {services.map((service, index) => (
              <div key={index} className="col-md-3 mb-4">
                <h5 className="text-uppercase bg-brown p-2 text-white">
                  {service.category}
                </h5>
                <ul className="list-unstyled">
                  {service.options.map((option, idx) => (
                    <li key={idx} className="d-flex align-items-center mb-2">
                      <div className="form-check">
                        <input
                          className="form-check-input book-checkbox"
                          type="checkbox"
                          id={`service-${index}-${idx}`}
                          onChange={(e) =>
                            handleServiceSelection(option, e.target.checked)
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`service-${index}-${idx}`}
                        >
                          {option.name} (₹{option.price}, {option.duration})
                        </label>
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
                  className="form-control border-brown"
                  placeholder="dd-mm-yyyy"
                  min={new Date().toISOString().split("T")[0]}
                  onChange={handleDateChange}
                />
              </div>

              {selectedServices.length > 0 && (
                <div className="selected-services mb-4">
                  <h5 className="text-uppercase mb-2">Selected Services</h5>
                  <ul className="list-group">
                    {selectedServices.map((service, index) => (
                      <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        {service.name}
                        <span className="badge bg-brown rounded-pill">
                          ₹{service.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2">
                    <strong>Total Duration:</strong> {calculateTotalDuration()}{" "}
                    minutes
                  </div>
                </div>
              )}
            </div>

            <div className="col-md-1 d-flex justify-content-center align-items-center">
              <hr className="vertical" />
            </div>

            <div className="col-md-6">
              <h5 className="text-uppercase mb-2 text-black">Select Time</h5>
              <div className="row">
                {Object.keys(slot).length > 0 ? (
                  Object.keys(slot).map((time, index) => (
                    <div key={index} className="col-md-12 mb-4 p-4 rounded">
                      <div className="dropdown">
                        <button
                          className={`btn btn-secondary dropdown-toggle dpbook-toggle btn-lg mb-2 w-100 ${
                            selectedTime === time ? "btn-brown" : "btn-dark"
                          }`}
                          onClick={() => setSelectedTime(time)}
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {time}
                        </button>

                        <ul className="dropdown-menu dpbook-menu">
                          <li>
                            <div className="dropdown-item dpbook-item">
                              <div className="row">
                                {slot[time].map((seat, idx) => (
                                  <div key={idx} className="col-md-4 mb-3">
                                    <div
                                      className="card p-3 text-white text-center"
                                      style={{
                                        backgroundColor:
                                          seat.status === "available"
                                            ? "rgba(40, 167, 69, 0.8)"
                                            : "rgba(220, 53, 69, 0.8)",
                                        cursor:
                                          seat.status === "available"
                                            ? "pointer"
                                            : "not-allowed",
                                        transition: "all 0.3s ease",
                                      }}
                                    >
                                      <MdOutlineChair
                                        className="mb-2 mx-auto"
                                        size={24}
                                      />
                                      <p className="m-0 fs-6">
                                        Seat {seat.seatNumber}
                                      </p>
                                      <button
                                        className={`btn mt-2 ${
                                          seat.status === "available"
                                            ? "btn-light"
                                            : "btn-secondary"
                                        }`}
                                        disabled={seat.status !== "available"}
                                        onClick={() =>
                                          handleBooking(seat.seatNumber)
                                        }
                                      >
                                        {seat.status === "available"
                                          ? "Book Now"
                                          : "Booked"}
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))
                ) : date ? (
                  <div className="col-md-12">
                    <div className="alert alert-info">
                      No available time slots for the selected date. Please
                      choose another date.
                    </div>
                  </div>
                ) : (
                  <div className="col-md-12">
                    <div className="alert alert-warning">
                      Please select a date to see available time slots.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
