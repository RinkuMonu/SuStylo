import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import '../style/style.css'
import { BiSolidHot } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Form, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import { FaMapMarkerAlt, FaClock, FaRoute } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";
import { TbHours24 } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import { Container, Row, Col } from "react-bootstrap";
const salonData = [
    {
        id: 1,
        name: "Braids & Layers",
        image: "https://d1ajkvxweygda7.cloudfront.net/1696063484114.png",
        rating: 5,
        reviews: 6,
        address: "G-267, Sitapura Industrial Area, Jaipur, Rajasthan 302022, India",
        distance: "15.27km",
        time: "09:00 am to 07:00 pm",
        startingPrice: 50,
        service: "Shampoo/Conditioner",
        duration: "30 min.",
        link: "/salondetails"
    },
    {
        id: 2,
        name: "Elegant Cuts",
        image: "https://d1ajkvxweygda7.cloudfront.net/1696063484114.png",
        rating: 4.8,
        reviews: 12,
        address: "A-12, Malviya Nagar, Jaipur, Rajasthan 302017, India",
        distance: "10.5km",
        time: "10:00 am to 08:00 pm",
        startingPrice: 80,
        service: "Haircut & Styling",
        duration: "45 min.",
        link: "/salondetails"
    },
    {
        id: 3,
        name: "Luxury Salon",
        image: "https://d1ajkvxweygda7.cloudfront.net/1696063484114.png",
        rating: 4.9,
        reviews: 20,
        address: "B-56, Vaishali Nagar, Jaipur, Rajasthan 302021, India",
        distance: "8.2km",
        time: "09:30 am to 09:00 pm",
        startingPrice: 100,
        service: "Facial & Massage",
        duration: "60 min.",
        link: "/salondetails"
    },
    {
        id: 4,
        name: "Luxury Salon",
        image: "https://d1ajkvxweygda7.cloudfront.net/1696063484114.png",
        rating: 4.9,
        reviews: 20,
        address: "B-56, Vaishali Nagar, Jaipur, Rajasthan 302021, India",
        distance: "8.2km",
        time: "09:30 am to 09:00 pm",
        startingPrice: 100,
        service: "Facial & Massage",
        duration: "60 min.",
        link: "/salondetails"
    },
    {
        id: 5,
        name: "Luxury Salon",
        image: "https://d1ajkvxweygda7.cloudfront.net/1696063484114.png",
        rating: 4.9,
        reviews: 20,
        address: "B-56, Vaishali Nagar, Jaipur, Rajasthan 302021, India",
        distance: "8.2km",
        time: "09:30 am to 09:00 pm",
        startingPrice: 100,
        service: "Facial & Massage",
        duration: "60 min.",
        link: "/salondetails"
    },
];
// More Services
const services = [
    {
        icon: "./images/services/AromaTherapy.jpg",
        title: "Aroma Therapy",
        description: "Relax with essential oils and expert techniques in a private, calming space."
    },
    {
        icon: "./images/services/Waxing.jpg",
        title: "Waxing",
        description: "Enjoy smooth, flawless skin with a painless and hygienic waxing experience."
    },
    {
        icon: "./images/services/NailManicure.jpg",
        title: "Nail Manicure",
        description: "Get perfectly groomed nails with classic finishes or trendy nail art."
    },
    {
        icon: "./images/services/BodyMassages.jpg",
        title: "Body Massages",
        description: "Rejuvenate with a soothing facial or full-body massage for deep relaxation."
    }
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
        { icon: <BiSolidHot />, text: 'Deals To Grab' },
        { icon: <BiSolidOffer />, text: 'Choose any, from many' },
        { icon: <TbHours24 />, text: 'Best hours of the day' },
        { icon: <FaPercentage />, text: 'Save Big' },
    ];
    return (
        <>
            <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} ref={domRef}>
                <section className="services-section d-flex align-items-center">
                    <div className="hero-overlay"></div>
                    <div class="de-gradient-edge-bottom" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
                    <div className="container text-center position-relative">
                        <h2 className="hero-title">Services & Categories</h2>
                        <p>At Su Stylo, we offer a wide range of premium grooming and beauty services designed to enhance your style and confidence. Whether you’re looking for a sharp haircut, a relaxing spa treatment, or expert beard grooming, we’ve got you covered!</p>
                    </div>
                </section>
                <div className="content-section">

                    {/* Near By Search */}
                    <div className="container search_result">
                        <div className="row">
                            <div className="col-md-12" data-aos="fade-up">
                                <div className="heading">
                                    <h2>Services & Categories</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
                            </div>
                            <div className="col-md-12" data-aos="fade-up">
                                <div className="position-relative switchBtn">
                                    <p className="me-3">Female</p>
                                    <input type="checkbox" id="toggle_checkbox" />
                                    <label for="toggle_checkbox"></label>
                                    <p className="ms-3">Male</p>
                                </div>
                            </div>

                            <div className="col-md-12" data-aos="fade-down">
                                <div className="row gy-1 gy-md-0 bcw-nearby__search">
                                    {/* Search Input Field */}
                                    <div className="col-md-6 position-relative px-0">
                                        <div className="input-form">
                                            <input type="hidden" name="cr_latitude" id="cr_latitude" />
                                            <input type="hidden" name="cr_longitude" id="cr_longitude" />
                                            <input type="hidden" name="location_city" id="location_city" value="" />

                                            <InputGroup>
                                                <span className="position-absolute" style={{ left: "20px", top: "50%", transform: "translateY(-50%)", zIndex: "10" }}>
                                                    <FaSearch style={{ color: "#000" }} />
                                                </span>
                                                <Form.Control
                                                    type="search"
                                                    placeholder="Where"
                                                    name="location"
                                                    id="locationfield"
                                                    autoComplete="off"
                                                    className="form-control pac-target-input"
                                                    style={{ paddingLeft: "50px" }} // Adjust padding for icon spacing
                                                />
                                                <div className="hr-bar"></div>
                                            </InputGroup>
                                        </div>
                                    </div>

                                    {/* Category Select Field */}
                                    <div className="col-md-6 px-0">
                                        <div className="input-form">
                                            <Form.Select name="category" id="servicecategory" required>
                                                <option value="">Select Category</option>
                                                <option value="category1">Category 1</option>
                                                <option value="category2">Category 2</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* Deals */}
                            <div className="container mt-4">
                                <div className="d-flex gap-3 ps-5">
                                    {links.map((link, index) => (
                                        <div className="col-md-3" key={index}>
                                            <Link
                                                className={`dealsBx ${activeLink === index ? 'active' : ''}`}
                                                onClick={() => setActiveLink(index)}
                                            >
                                                {link.icon}
                                                {link.text}
                                            </Link>
                                        </div>
                                    ))}
                                </div>

                            </div>
                            <div className="col-md-12 mb-5">
                                <div className=" d-flex justify-content-between align-items-center">
                                    <div className="service_title">
                                        <h3>Mani  Pedi &amp; Hygiene near you in Jaipur (5)</h3>
                                        <span>See their opening hours &amp; prices and read all reviews.</span>
                                    </div>
                                    <div class="btn-group mt-5">
                                        <button class="btn btn-secondary top_ratingBtn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Top Rating
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <Link class="dropdown-item">Name A to Z</Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item">Name Z to A</Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item">Top Rating</Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item">Near Me</Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <Swiper
                                slidesPerView={3}
                                spaceBetween={20}
                                centeredSlides={false}
                                pagination={false}
                                navigation={true}
                                modules={[Navigation, FreeMode]}
                                className="mySwiper"
                                data-aos="zoom-in-up"
                            >
                                {salonData.map((salon) => (
                                    <SwiperSlide key={salon.id}>
                                        <Link to={salon.link} className="cs-main__card-box">
                                            {/* Image Section */}
                                            <div className="cs-main__card-img">
                                                <img src={salon.image} className="img-fluid" alt={salon.name} />
                                                <div className="cs-main__card-rating-box">
                                                    <span className="cs-mcard-aR">{salon.rating}</span>
                                                    <span className="cs-mcard-aText">
                                                        <span>{salon.reviews}</span> ratings
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Card Content */}
                                            <div className="cs-main__card-content p-3">
                                                <h3 className="cs-main__card-title text-truncate">{salon.name}</h3>

                                                {/* Location */}
                                                <div className="cs-main__card-location">
                                                    <FaMapMarkerAlt className="icon" />
                                                    <p className="cs-main__card-location-text text-truncate">
                                                        {salon.address}
                                                    </p>
                                                </div>

                                                {/* Info List */}
                                                <ul className="cs-main__card-list">
                                                    <li className="cs-main__card-list-item">
                                                        <FaRoute className="icon" /> {salon.distance}
                                                    </li>
                                                    <li className="cs-main__card-list-item">
                                                        <FaClock className="icon" /> {salon.time}
                                                    </li>
                                                </ul>

                                                {/* Service Price */}
                                                <div className="cs-main__card-serviceStarting">
                                                    <div className="serviceStarting-cont">
                                                        Service Starting from <strong>₹{salon.startingPrice}</strong>
                                                    </div>
                                                </div>

                                                {/* Time & Price */}
                                                <div className="cs-main__card-timePrice">
                                                    <span className="cs-main__card-time">
                                                        <strong>{salon.service}</strong> {salon.duration}
                                                    </span>
                                                    <span className="cs-main__card-time">
                                                        <strong>₹ {salon.startingPrice}</strong>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>
                    {/* More Services */}
                    <Container className="text-center py-5 mt-5">
                        <div className="heading">
                            <h2>professional Spa And Beauty Services</h2>
                        </div>
                        <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>

                        <Row className="mt-4" data-aos="flip-up">
                            {services.map((service, index) => (
                                <Col md={3} sm={6} key={index}>
                                    <div className="service-card">
                                        <div className="service-icon">
                                            <img className='img-fluid rounded' src={service.icon} />
                                        </div>
                                        <h5 className="service-title mt-4">{service.title}</h5>
                                        <p className="service-text">{service.description}</p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                    {/* Main Banner */}
                    <div className="container px-0 contactus">
                        {/* <div className="main_banner">

                        </div> */}
                        <div className="row px-5" data-aos="fade-up">
                            <div className="col-md-6" style={{alignSelf:"center"}}>
                                <div className="sideImg">
                                    <img src="./images/V1.png" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="sidecontent">
                                    <img src="./images/stylo_Logo.png" className="img-fluid" width={100} />
                                    <h2 className="mt-3">Find & Book Appoinment</h2>
                                    <p>Find your next appointment and book instantly anytime, anywhere.</p>
                                    <div className="row mt-5">
                                        <div className="col-md-6 mb-3">
                                            <div className="contentImg">
                                                <div className="imgBx">
                                                    <img src="./images/woman.svg" width={50} />
                                                </div>
                                                <div class="su__box-cont">
                                                    <h5><strong>100</strong>+</h5>
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
                                                    <h5><strong>20</strong>k+</h5>
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
                                                    <h5><strong>100</strong>+</h5>
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
                                                    <h5><strong>100</strong>+</h5>
                                                    <p className="my-2">Male & Female Services</p>
                                                </div>
                                            </div>
                                        </div>
                                        

                                    </div>


                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
