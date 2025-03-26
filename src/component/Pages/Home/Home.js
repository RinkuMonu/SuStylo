import React, { useState, useEffect, useRef } from "react";
import "../style/style.css";
import AOS from "aos";
import WOW from "wow.js";
import "animate.css";
import "aos/dist/aos.css";
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
import SimpleParallax from "simple-parallax-js";
import { Link } from "react-router-dom";
import { Form, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FaMapMarkerAlt, FaClock, FaRoute } from "react-icons/fa";
import axiosInstance from "../../config/axiosInstance";
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
    link: "/salondetails",
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
    link: "/salondetails",
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
    link: "/salondetails",
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
    link: "/salondetails",
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
    link: "/salondetails",
  },
];

export default function Home() {
  const [location, setLocation] = useState({
    latitude: "" || 2871.24324252,
    longitude: "" || 2871.24324252,
  });
  const [address, setAddress] = useState("Fetching address...");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [salonData, setSalonData] = useState([]);
  const [fulladdress, setfulladdress] = useState("");

  const [data, setData] = useState({
    location: "",
    category: "",
    gender: "female",
  });

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    console.log("Getting location...");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Location found:", latitude, longitude);

          // Set location state
          setLocation({ latitude, longitude });

          // Fetch and set address
          const addr = await getAddressFromCoords(latitude, longitude);
          setAddress(addr);
        },
        (error) => {
          console.error("Error getting location:", error);
          setAddress("Error fetching location.");
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setAddress("Geolocation not supported.");
    }
  };
  const getAddressFromCoords = async (latitude, longitude) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDZW0zTKDKdxBG1eC5ACKsR1Gp9PcduvKo`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "OK" && data.results.length > 0) {
        const address = data.results[0].formatted_address; // ✅ Correct field
        setfulladdress(address);
        console.log("Address:", address);
        return address;
      } else {
        console.error("Address not found:", data.status);
        return null;
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      return null;
    }
  };

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGenderChange = () => {
    setData((prevData) => ({
      ...prevData,
      gender: prevData.gender === "male" ? "female" : "male",
    }));
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/salon/nearby", {
          params: {
            latitude: location.latitude,
            longitude: location.longitude,
            maxDistance: "5000",
            gender: data.gender,
            category: data.category,
          },
        });

        setSalonData(response.data.salons);
        console.log("Salon Data:-", response.data.salons);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [data.gender, data.category]);


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
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        <section className="hero-section d-flex align-items-center">
          <div className="hero-overlay"></div>
          <div
            class="de-gradient-edge-bottom"
            style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}
          ></div>
          <div className="container text-center position-relative">
            <h2 className="hero-title">THE GENTLEMEN'S CHOICE</h2>
            <p className="hero-subtitle">
              At SuStylo, we are dedicated to the timeless art of barbering. Our
              passion drives us to deliver precision, style, and an unmatched
              grooming experience. We take great pride in our craft, ensuring
              that every client leaves looking sharp and feeling confident.
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
                  Established with a deep passion for the art of barbering, Su
                  Stylo is more than just a grooming destination—it’s an
                  experience. We take great pride in our craft, blending
                  traditional techniques with modern trends to deliver
                  exceptional results.
                </p>
              </div>
            </div>
          </div>
          {/* Slider Section */}
          <section className="container-fluid styles_slider" data-aos="zoom-in">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
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
                    <img
                      src={slide.src}
                      alt={slide.name}
                      className="slide-image"
                    />
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
                <div
                  className="de-separator"
                  style={{
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6">
                    <div className="de-image-hover">
                      <img
                        src="./images/gallery/1.jpg"
                        className="img-fluid img1"
                      />
                      <span className="dih-title-wrap">
                        <span className="dih-title">Gallery Title</span>
                      </span>
                      <span className="dih-overlay"></span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="de-image-hover">
                      <img
                        src="./images/gallery/6.jpg"
                        className="img-fluid img1"
                      />
                      <span className="dih-title-wrap">
                        <span className="dih-title">Gallery Title</span>
                      </span>
                      <span className="dih-overlay"></span>
                    </div>
                  </div>
                  <div className="col-md-12 mt-2">
                    <div className="de-image-hover">
                      <img
                        src="./images/gallery/7.png"
                        className="img-fluid img2"
                      />
                      <span className="dih-title-wrap">
                        <span className="dih-title">Gallery Title</span>
                      </span>
                      <span className="dih-overlay"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="de-image-hover" style={{ height: "100%" }}>
                  <img
                    src="./images/gallery/3.jpg"
                    className="img-fluid"
                    style={{ height: "100%" }}
                  />
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
                  <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                    <img
                      src="./images/10.jpg"
                      className="img-fluid"
                      style={{ height: "600px" }}
                    />
                  </SimpleParallax>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right_content fadeInRight ">
                  <h2 className="wow fadeInRight animated" data-wow-delay=".3s">
                    We’ll Crafting <span className="id-color">Confidence</span>{" "}
                    Through Sharp Style
                  </h2>
                  <p>
                    At Su Stylo, we believe that grooming is more than just a
                    routine—it’s an art. Our expert barbers blend classic
                    techniques with modern trends to give you a sharp, stylish,
                    and confident look. Step into our warm and inviting space,
                    where precision meets perfection. Whether it’s a clean
                    shave, a stylish haircut, or a well-groomed beard, we ensure
                    every service is tailored to enhance your personality and
                    style.
                  </p>
                  <Link className="btn-8 custom-btn">
                    <span>Book Now</span>
                  </Link>
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
                <div
                  className="de-separator"
                  style={{
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
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
                    <p>
                      Experience a irritation-free shave with experts and
                      premium aftercare.
                    </p>
                  </div>
                  <div className="bookBtn">
                    <Link to={"/bookappoinment"} className="custom-btn btn-8">
                      <span>Book Now</span>
                    </Link>
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
                    <p>
                      Upgrade your look with personalized styling for hair and
                      beard.
                    </p>
                  </div>
                  <div className="bookBtn">
                    <Link to={"/bookappoinment"} className="custom-btn btn-8">
                      <span>Book Now</span>
                    </Link>
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
                    <p>
                      Get precise beard and hair trims for a sharp, well-groomed
                      look.
                    </p>
                  </div>
                  <div className="bookBtn">
                    <Link to={"/bookappoinment"} className="custom-btn btn-8">
                      <span>Book Now</span>
                    </Link>
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
                    <p>
                      From classic cuts to modern styles, get a haircut that
                      complements your look.
                    </p>
                  </div>
                  <div className="bookBtn">
                    <Link to={"/bookappoinment"} className="custom-btn btn-8">
                      <span>Book Now</span>
                    </Link>
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
                <div
                  className="de-separator"
                  style={{
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
              <div className="col-md-12">
                <div className="position-relative switchBtn d-flex align-items-center">
                  <p className="me-3">Male</p>
                  <input
                    type="checkbox"
                    id="toggle_checkbox"
                    checked={data.gender === "female"}
                    onChange={handleGenderChange}
                  />
                  <label
                    htmlFor="toggle_checkbox"
                    className="custom-toggle"
                  ></label>
                  <p className="ms-3">Female</p>
                </div>
              </div>

              <div className="col-md-12">
                <div className="row gy-1 gy-md-0 bcw-nearby__search">
                  {/* Search Input Field */}
                  <div className="col-md-6 position-relative px-0">
                    <div className="input-form">
                      <InputGroup>
                        <span
                          className="position-absolute"
                          style={{
                            left: "20px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            zIndex: "10",
                          }}
                        >
                          <FaSearch style={{ color: "#000" }} />
                        </span>
                        <Form.Control
                          type="search"
                          placeholder="Where"
                          name="location"
                          value={fulladdress}
                          onChange={handleChange}
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
                      <Form.Select
                        name="category"
                        type="search"
                        value={data.category}
                        onChange={handleChange}
                        id="servicecategory"
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="Hair Cut">Hair cut </option>
                        <option value="hairspa">Hair Spa</option>
                        <option value="haircolor">Hair Color</option>
                        <option value="hairwash">Hair wash</option>
                        <option value="Facial">Facial</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 mb-5">
                <div className="service_title">
                  <h3>Mani Pedi &amp; Hygiene near you in Jaipur (5)</h3>
                  <span>
                    See their opening hours &amp; prices and read all reviews.
                  </span>
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
                  <SwiperSlide key={salon?._id}>
                    <Link
                      to={`/salondetails/${salon?._id}`}
                      className="cs-main__card-box"
                    >
                      {/* Image Section */}
                      <div className="cs-main__card-img">
                        <img
                          src={salon.salonPhotos?.[0]}
                          className="img-fluid"
                          alt={salon.salonPhotos?.[0]}
                        />

                        <div className="cs-main__card-rating-box">
                          <span className="cs-mcard-aR">{salon?.rating}</span>
                          <span className="cs-mcard-aText">
                            <span>
                              {/* Display the review count instead of the object */}
                              {Array.isArray(salon?.reviews)
                                ? salon.reviews.length
                                : 0}
                            </span>{" "}
                            ratings
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="cs-main__card-content p-3">
                        <h3 className="cs-main__card-title text-truncate">
                          {salon?.salonName}
                        </h3>

                        {/* Location */}
                        <div className="cs-main__card-location">
                          <FaMapMarkerAlt className="icon" />
                          <p className="cs-main__card-location-text text-truncate">
                            {salon?.salonAddress}
                          </p>
                        </div>

                        {/* Info List */}
                        <ul className="cs-main__card-list">
                          <li className="cs-main__card-list-item">
                            <FaRoute className="icon" /> {salon.distance}
                          </li>
                          <li className="cs-main__card-list-item">
                            <FaClock className="icon" />
                            {salon.services[0].duration}
                          </li>
                        </ul>

                        {/* Service Price */}
                        <div className="cs-main__card-serviceStarting">
                          <div className="serviceStarting-cont">
                            Service Starting from{" "}
                            <strong>₹ {salon.services[0].rate}</strong>
                          </div>
                        </div>

                        {/* Time & Price */}
                        <div className="cs-main__card-timePrice">
                          <span className="cs-main__card-time">
                            <strong>{salon?.service}</strong> {salon?.duration}
                          </span>
                          <span className="cs-main__card-time">
                            {/* <strong> ₹ {salon?.startingPrice}</strong> */}
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
                    <h2>Devika Gehlot</h2>
                    <div className="d-flex gap-2">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i>
                    </div>
                    <p>
                      Su Stylo is my go-to salon for the perfect haircut. The
                      staff is professional, and the atmosphere is so welcoming.
                      Highly recommend!
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/gallery/R2.jpg" />
                  <div className="hero-overlay"></div>
                  <div className="review_text text-center p-5">
                    <h2> Neha Kapoor</h2>
                    <div className="d-flex gap-2">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i>
                    </div>
                    <p>
                      Loved my styling experience! The team knows exactly what
                      suits you best. The service was top-notch, and I left
                      feeling fabulous!
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/gallery/R4.jpg" />
                  <div className="hero-overlay"></div>
                  <div className="review_text text-center p-5">
                    <h2>Rahul kumar</h2>
                    <div className="d-flex gap-2">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i>
                    </div>
                    <p>
                      Excellent grooming services! I tried their beard trimming,
                      and it was done with so much precision. Great experience!
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/gallery/R1.jpg" />
                  <div className="hero-overlay"></div>
                  <div className="review_text text-center p-5">
                    <h2> Vikash singh</h2>
                    <div className="d-flex gap-2">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i>
                    </div>
                    <p>
                      Best haircut I've ever had! The barbers are highly skilled
                      and listen to exactly what you want. Five-star service!
                    </p>
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
  );
}
