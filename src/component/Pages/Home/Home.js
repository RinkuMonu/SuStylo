import React, { useState, useEffect, useRef } from "react";
import '../style/style.css';
import AOS from "aos";
import WOW from "wow.js";
import "animate.css";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import SimpleParallax from "simple-parallax-js";
import { Link } from "react-router-dom";
import { Form, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FaMapMarkerAlt, FaClock, FaRoute } from "react-icons/fa";
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

export default function Home() {
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

    // Slider
    const slidesData = [
        { src: "./images/1.jpg", name: "Pompadour", number: "#1" },
        { src: "./images/2.jpg", name: "Fade Cut", number: "#2" },
        { src: "./images/3.jpg", name: "Buzz Cut", number: "#3" },
        { src: "./images/4.jpg", name: "Crew Cut", number: "#4" },
        { src: "./images/5.jpg", name: "Undercut", number: "#5" },
        { src: "./images/6.jpg", name: "Undercut", number: "#6" },
        { src: "./images/7.jpg", name: "Undercut", number: "#7" },
        { src: "./images/8.jpg", name: "Undercut", number: "#8" },
        { src: "./images/9.jpg", name: "Undercut", number: "#9" },
        { src: "./images/9.jpg", name: "Undercut", number: "#10" },
    ];
    const numSlides = 10;
    const middleSlideIndex = Math.floor(numSlides / 2);
    // search dropdown
    return (
        <>
            <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} ref={domRef}>
                <section className="hero-section d-flex align-items-center">
                    <div className="hero-overlay"></div>
                    <div class="de-gradient-edge-bottom" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
                    <div className="container text-center position-relative">
                        <h2 className="hero-title">THE GENTLEMEN'S CHOICE</h2>
                        <p className="hero-subtitle">
                            Established with a passion for the art of barbering, we take great pride in our craft
                            and strive to create an atmosphere that feels like home.
                        </p>
                    </div>
                    <div className="marquee-container">
                        <div className="marquee">
                            <span> CUT </span>
                            <span> SHAVE </span>
                            <span> CUT </span>
                            <span> SHAVE </span>
                        </div>
                    </div>
                </section>
                <section className="content-section">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-md-12">
                                <p>
                                    Established with a passion for the art of barbering, we take great pride in our craft and strive to create an atmosphere that feels like home.
                                    From the moment you walk through our doors, you'll be greeted by friendly smiles and a warm ambiance that instantly puts you at ease.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Slider Section */}
                    <section className="container-fluid styles_slider" data-aos='zoom-in'>
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            autoplay={{
                                delay: 3000, 
                                disableOnInteraction: false, 
                            }}
                            pagination={false}
                            modules={[EffectCoverflow, Pagination, Autoplay]} 
                            className="mySwiper"
                            initialSlide={middleSlideIndex}
                        >
                            {slidesData.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="slide-wrapper">
                                        <img src={slide.src} alt={slide.name} className="slide-image" />
                                        <div className="slide-overlay">
                                            <span className="slide-name">{slide.name}</span>
                                            <span className="slide-number">{slide.number}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </section>
                    {/* Gallery */}
                    <div className="container Gallery_section" data-aos="zoom-in-up">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="gallery_heading">
                                    <h2>GALLERY</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="de-image-hover">
                                            <img src="./images/gallery/1.jpg" className="img-fluid img1" />
                                            <span className="dih-title-wrap">
                                                <span className="dih-title">Gallery Title</span>
                                            </span>
                                            <span className="dih-overlay"></span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="de-image-hover">
                                            <img src="./images/gallery/6.jpg" className="img-fluid img1" />
                                            <span className="dih-title-wrap">
                                                <span className="dih-title">Gallery Title</span>
                                            </span>
                                            <span className="dih-overlay"></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <div className="de-image-hover">
                                            <img src="./images/gallery/7.png" className="img-fluid img2" />
                                            <span className="dih-title-wrap">
                                                <span className="dih-title">Gallery Title</span>
                                            </span>
                                            <span className="dih-overlay"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="de-image-hover" style={{ height: "100%", }}>
                                    <img src="./images/gallery/3.jpg" className="img-fluid" style={{ height: "100%", }} />
                                    <span className="dih-title-wrap">
                                        <span className="dih-title">Gallery Title</span>
                                    </span>
                                    <span className="dih-overlay"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* About Content */}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="side_img">
                                    <SimpleParallax
                                        orientation={"down"}
                                        scale={1.8}
                                        delay={1}
                                    >
                                        <img src="./images/10.jpg" className="img-fluid" style={{ height: "600px" }} />
                                    </SimpleParallax>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="right_content fadeInRight ">
                                    <h2 className="wow fadeInRight animated" data-wow-delay=".3s">
                                        We’ll Crafting <span className="id-color">Confidence</span> Through Sharp Style
                                    </h2>
                                    <p>We take pride in providing top-notch grooming services that blend classic techniques with modern trends. Step into our warm and inviting space, where you'll find a team of skilled barbers dedicated to enhancing your style and confidence.</p>
                                    <Link className='btn-8 custom-btn'><span>Book Now</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services */}
                    <div className="container service_section">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="heading">
                                    <h2>Service Beyond Expectation</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
                            </div>
                            <div className="col-md-3">
                                <div className="servicesBx">
                                    <div className="icon_center">
                                        <img src="./images/shaving.svg" className="img-fluid" />
                                    </div>
                                    <div className="service_title">
                                        <h3>SHAVING</h3>
                                    </div>
                                    <div className="services_content">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                                    <div className="bookBtn">
                                        <Link className="custom-btn btn-8"><span>Book Now</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="servicesBx">
                                    <div className="icon_center">
                                        <img src="./images/styling.svg" className="img-fluid" />
                                    </div>
                                    <div className="service_title">
                                        <h3>STYLING</h3>
                                    </div>
                                    <div className="services_content">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                                    <div className="bookBtn">
                                        <Link className="custom-btn btn-8"><span>Book Now</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="servicesBx">
                                    <div className="icon_center">
                                        <img src="./images/trimming.svg" className="img-fluid" />
                                    </div>
                                    <div className="service_title">
                                        <h3>TRIMMING</h3>
                                    </div>
                                    <div className="services_content">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                                    <div className="bookBtn">
                                        <Link className="custom-btn btn-8"><span>Book Now</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="servicesBx">
                                    <div className="icon_center">
                                        <img src="./images/haircut.svg" className="img-fluid" />
                                    </div>
                                    <div className="service_title">
                                        <h3>HAIRCUT</h3>
                                    </div>
                                    <div className="services_content">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                                    <div className="bookBtn">
                                        <Link className="custom-btn btn-8"><span>Book Now</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Near By Search */}
                    <div className="container search_result">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="heading">
                                    <h2>Services & Categories</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
                            </div>
                            <div className="col-md-12">
                                <div className="position-relative switchBtn">
                                    <p className="me-3">Female</p>
                                    <input type="checkbox" id="toggle_checkbox" />
                                    <label for="toggle_checkbox"></label>
                                    <p className="ms-3">Male</p>
                                </div>
                            </div>
                            <div className="col-md-12">
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
                            <div className="col-md-12 mb-5">
                                <div className="service_title">
                                    <h3>Mani  Pedi &amp; Hygiene near you in Jaipur (5)</h3>
                                    <span>See their opening hours &amp; prices and read all reviews.</span>
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
                    {/* Review  Section */}
                    <div className="container review_section">
                        <div className="col-md-12">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={false}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={false}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="./images/gallery/R3.jpg" />
                                    <div className="hero-overlay"></div>
                                    <div className="review_text text-center p-5">
                                        <h2>Randell Dragos</h2>
                                        <div className="d-flex gap-2">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </div>
                                        <p>I have to say, this barbershop has the best customer service I've ever experienced. From the moment I walked in, I was greeted with a smile and offered a beverage while I waited. The barbers are not only talented but also incredibly attentive.</p>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./images/gallery/R2.jpg" />
                                    <div className="hero-overlay"></div>
                                    <div className="review_text text-center p-5">
                                        <h2>Randell Dragos</h2>
                                        <div className="d-flex gap-2">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </div>
                                        <p>I have to say, this barbershop has the best customer service I've ever experienced. From the moment I walked in, I was greeted with a smile and offered a beverage while I waited. The barbers are not only talented but also incredibly attentive.</p>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./images/gallery/R4.jpg" />
                                    <div className="hero-overlay"></div>
                                    <div className="review_text text-center p-5">
                                        <h2>Randell Dragos</h2>
                                        <div className="d-flex gap-2">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </div>
                                        <p>I have to say, this barbershop has the best customer service I've ever experienced. From the moment I walked in, I was greeted with a smile and offered a beverage while I waited. The barbers are not only talented but also incredibly attentive.</p>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="./images/gallery/R1.jpg" />
                                    <div className="hero-overlay"></div>
                                    <div className="review_text text-center p-5">
                                        <h2>Randell Dragos</h2>
                                        <div className="d-flex gap-2">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </div>
                                        <p>I have to say, this barbershop has the best customer service I've ever experienced. From the moment I walked in, I was greeted with a smile and offered a beverage while I waited. The barbers are not only talented but also incredibly attentive.</p>

                                    </div>
                                </SwiperSlide>
                            </Swiper>

                        </div>


                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="marquee-container-bottom">
                                    <div className="marquees">
                                        <div className="marquee-container">
                                            <div className="marquee-content">
                                                <span> HAIR DRY <i class="d-item-block"></i></span>
                                                <span> FACIAL  <i class="d-item-block"></i></span>
                                                <span> HAIR WASH  <i class="d-item-block"></i></span>
                                                <span> FADED  <i class="d-item-block"></i></span>
                                                {/* Duplicate content for smooth looping */}
                                                <span> HAIR DRY <i class="d-item-block"></i></span>
                                                <span> FACIAL  <i class="d-item-block"></i></span>
                                                <span> HAIR WASH  <i class="d-item-block"></i></span>
                                                <span> FADED  <i class="d-item-block"></i></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>


                        </div>


                    </div>
                    {/* Logo Section */}
                    <div className="container-fluid logo_section">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="startLine">
                                    <hr />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="centerLogo">
                                    {/* <span className="logo">BLA<span className="text-warning">X</span>CUT</span> */}
                                    <img src="./images/logo.png" className="img-fluid" />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="startLine">
                                    <hr />
                                </div>
                            </div>
                        </div>


                    </div>
                </section>

            </div>
        </>
    )
}
