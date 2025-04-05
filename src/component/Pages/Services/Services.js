import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import "../style/style.css";
import { BiSolidHot } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Form, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
  FreeMode,
} from "swiper/modules";
import { FaMapMarkerAlt, FaClock, FaRoute } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";
import { TbHours24 } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import { Container, Row, Col } from "react-bootstrap";

// More Services
const services = [
  {
    icon: "./images/services/AromaTherapy.jpg",
    title: "Aroma Therapy",
    description:
      "Relax with essential oils and expert techniques in a private, calming space.",
  },
  {
    icon: "./images/services/Waxing.jpg",
    title: "Waxing",
    description:
      "Enjoy smooth, flawless skin with a painless and hygienic waxing experience.",
  },
  {
    icon: "./images/services/NailManicure.jpg",
    title: "Nail Manicure",
    description:
      "Get perfectly groomed nails with classic finishes or trendy nail art.",
  },
  {
    icon: "./images/services/BodyMassages.jpg",
    title: "Body Massages",
    description:
      "Rejuvenate with a soothing facial or full-body massage for deep relaxation.",
  },
];

export default function Services() {
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
  // Delas Section Active Class
  const [activeLink, setActiveLink] = useState(null);

  const links = [
    { icon: <BiSolidHot />, text: "Deals To Grab" },
    { icon: <BiSolidOffer />, text: "Choose any, from many" },
    { icon: <TbHours24 />, text: "Best hours of the day" },
    { icon: <FaPercentage />, text: "Save Big" },
  ];

  const Sideservices = [
    { name: "Packages", img: "./images/services/AromaTherapy.jpg" },
    { name: "Make your package", img: "./images/services/Waxing.jpg" },
    { name: "Waxing", img: "./images/services/NailManicure.jpg" },
    { name: "Facial & cleanup", img: "./images/services/BodyMassages.jpg" },
    { name: "Pedicure", img: "./images/services/AromaTherapy.jpg" },
    { name: "Manicure", img: "./images/services/Waxing.jpg" },
    { name: "Hair care", img: "./images/services/NailManicure.jpg" },
    { name: "Bleach & detan", img: "./images/services/BodyMassages.jpg" },
    { name: "Threading & face waxing", img: "./images/services/AromaTherapy.jpg" },
  ];

  return (
    <>
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        <section className="services-section d-flex align-items-center">
          <div className="hero-overlay"></div>
          <div className="container text-center position-relative">
            <h2 className="hero-title">Services & Categories</h2>
            <p className="text-white fw-bold">
              At Su Stylo, we offer a wide range of premium grooming and beauty
              services designed to enhance your style and confidence. Whether
              you’re looking for a sharp haircut, a relaxing spa treatment, or
              expert beard grooming, we’ve got you covered!
            </p>
          </div>
        </section>
      </div>
      <div className="content-section">
        <div className="container-fluid px-3">
          <div className="row">
            <div className="col-md-12">
              <div className="heading">
                <h2 className="third-color fw-bold text-center">Professional Spa And Beauty Services</h2>
              </div>
              <div
                className="de-separator"
                style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}
              ></div>

            </div>
            <div className="col-md-3">

              <div className="row text-center sideservices">
                {Sideservices.map((services, index) => (
                  <div className="col-4 col-md-4 mb-4  text-center" key={index}>
                    <div className=" d-flex flex-column align-items-center justify-content-center">
                      <div
                        className="rounded shadow-sm"
                        style={{
                          cursor: "pointer", border: index === 2 ? "2px solid #000" : "1px solid #ddd", backgroundImage: `url(${services.img})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          height: "80px", 
                          width: "80px",
                        }}
                      >
                      </div>
                      <small>{services.name}</small>
                    </div>

                  </div>
                ))}
              </div>
            </div>
            {/* <div className="col-md-1">
            <hr className="vr p-0 ps-1 rounded-5" />

            </div> */}
            <div className="col-md-9">
              <Container className="text-center pb-5">
                <Row className="mb-4" >
                  {services.map((service, index) => (
                    <Col md={3} sm={6} key={index}>
                      <Link to={'/salondetails/:id'} className="service-card mb-3">
                        <div className="service-icon">
                          <img className="img-fluid rounded" src={service.icon} />
                        </div>
                        <h5 className="service-title mt-4">{service.title}</h5>
                        <p className="service-text">{service.description}</p>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </div>

        </div>

        {/* <div className="container px-0 contactus mb-5 pb-5">
          <div className="row px-5">
            <div className="col-md-6" style={{ alignSelf: "center" }}>
              <div className="sideImg">
                <img src="./images/V1.png" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="sidecontent">
                <img src="" className="img-fluid" width={100} />
                <h2 className="mt-3">Find & Book Appoinment</h2>
                <p>
                  Find your next appointment and book instantly anytime,
                  anywhere.
                </p>
                <div className="row mt-5">
                  <div className="col-md-6 mb-3">
                    <div className="contentImg">
                      <div className="imgBx">
                        <img src="./images/woman.svg" width={50} />
                      </div>
                      <div class="su__box-cont">
                        <h5>
                          <strong>100</strong>+
                        </h5>
                        <p className="my-2">Male & Female Services</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="contentImg">
                      <div className="imgBx">
                        <img src="./images/cut.svg" width={50} />
                      </div>
                      <div class="su__box-cont">
                        <h5>
                          <strong>20</strong>k+
                        </h5>
                        <p className="my-2">Stylists and Professionals</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="contentImg">
                      <div className="imgBx">
                        <img src="./images/woman.svg" width={50} />
                      </div>
                      <div class="su__box-cont">
                        <h5>
                          <strong>100</strong>+
                        </h5>
                        <p className="my-2">Male & Female Services</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="contentImg">
                      <div className="imgBx">
                        <img src="./images/woman.svg" width={50} />
                      </div>
                      <div class="su__box-cont">
                        <h5>
                          <strong>100</strong>+
                        </h5>
                        <p className="my-2">Male & Female Services</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

    </>
  );
}
