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
import { Link } from "react-router-dom";
import { Form, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FaMapMarkerAlt, FaClock, FaRoute } from "react-icons/fa";
import axiosInstance from "../../config/axiosInstance";
import HeroSection from "./HeroSection";
import ServicesSlider from "./ServicesSlider";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import GallerySection from "./GallerySection";
import ReviewSection from "./ReviewSection";
import LogoSection from "./LogoSection";
const salons = [
  {
    id: 1,
    name: "Braids & Layers",
    image: "https://d1ajkvxweygda7.cloudfront.net/1696063484114.png",
    rating: 5,
    reviews: 6,
    address: "G-267, Sitapura Industrial Area, Jaipur, Rajasthan 302022, India",
    distance: "15.27km",
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

  // search dropdown
  return (
    <>
      <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} ref={domRef} >
        <HeroSection />
        <section className="content-section">
          <ServicesSlider />
          <GallerySection />
          <AboutSection />
          <ServicesSection />
          {/* 
          
          
          */}
          {/* Near By Search */}
          <div className="search_result">
            <div className='container-fluid'>
              <div className="row">
                <div className="col-md-12">
                  <div className="gallery_heading w-50 mx-auto">
                    <h2 className='text-center'>Services & Categories</h2>
                    <p>Book your appointment now using the best salon app in India or the barber appointment app to redefine your style!</p>
                  </div>
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
            <div className="container">
              <div className="row mb-4">
                <div className="deals_heading mb-4 d-flex gap-2" style={{alignItems:"flex-start"}}>
                  <div style={{ background: "#fb8807", padding: '6px 10px', borderRadius: "8px", }}>
                    <i class="bi bi-graph-up" style={{color:"#fff"}}></i>
                  </div>
                  <h3>Most Popular Salon</h3>
                </div>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={20}
                  centeredSlides={false}
                  pagination={false}
                  navigation={true}
                  modules={[Navigation, FreeMode]}
                  className="mySwiper"
                >
                  {salons.map((salon) => (
                    <SwiperSlide key={salon.id} className="">
                      <Link to={salon.link} className="cs-main__card-box text-decoration-none">
                        <div className="cs-main__card-img">
                          <img
                            src={salon.image}
                            className="img-fluid"
                            alt={salon.name}
                          />
                          <div className="cs-main__card-rating-box">
                            <span className="cs-mcard-aR">{salon.rating}</span>
                            <span className="cs-mcard-aText">
                              <span>{salon.reviews}</span> ratings
                            </span>
                          </div>
                        </div>
                        <div className="cs-main__card-content p-3">
                          <h3 className="cs-main__card-title text-truncate d-flex justify-content-between">
                            {salon.name}
                            <p style={{ fontSize: "12px" }}>
                              <i className="bi bi-star me-1"></i>
                              {salon.rating} Review
                            </p>
                          </h3>
                          <div className="cs-main__card-location d-flex align-items-start">
                            <FaMapMarkerAlt className="icon mt-1 me-2" />
                            <p className="cs-main__card-location-text text-truncate">
                              {salon.address}
                            </p>
                          </div>
                          <ul className="cs-main__card-list my-0 list-unstyled">
                            <li className="cs-main__card-list-item d-flex align-items-center">
                              <FaRoute className="icon me-2" /> {salon.distance}
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="row mb-4">
                <div className="deals_heading mb-4 d-flex gap-2" style={{alignItems:"flex-start"}}>
                  <div style={{ background: "#fb8807", padding: '6px 10px', borderRadius: "8px", }}>
                    <i class="bi bi-pin-map" style={{color:"#fff"}}></i>
                  </div>
                  <h3>Near By Salon</h3>
                </div>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={20}
                  centeredSlides={false}
                  pagination={false}
                  navigation={true}
                  modules={[Navigation, FreeMode]}
                  className="mySwiper"
                >
                  {salons.map((salon) => (
                    <SwiperSlide key={salon.id} className="">
                      <Link to={salon.link} className="cs-main__card-box text-decoration-none">
                        <div className="cs-main__card-img">
                          <img
                            src={salon.image}
                            className="img-fluid"
                            alt={salon.name}
                          />
                          <div className="cs-main__card-rating-box">
                            <span className="cs-mcard-aR">{salon.rating}</span>
                            <span className="cs-mcard-aText">
                              <span>{salon.reviews}</span> ratings
                            </span>
                          </div>
                        </div>
                        <div className="cs-main__card-content p-3">
                          <h3 className="cs-main__card-title text-truncate d-flex justify-content-between">
                            {salon.name}
                            <p style={{ fontSize: "12px" }}>
                              <i className="bi bi-star me-1"></i>
                              {salon.rating} Review
                            </p>
                          </h3>
                          <div className="cs-main__card-location d-flex align-items-start">
                            <FaMapMarkerAlt className="icon mt-1 me-2" />
                            <p className="cs-main__card-location-text text-truncate">
                              {salon.address}
                            </p>
                          </div>
                          <ul className="cs-main__card-list my-0 list-unstyled">
                            <li className="cs-main__card-list-item d-flex align-items-center">
                              <FaRoute className="icon me-2" /> {salon.distance}
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="row">
                <div className="deals_heading mb-4 d-flex gap-2" style={{alignItems:"flex-start"}}>
                  <div style={{ background: "#fb8807", padding: '6px 10px', borderRadius: "8px", }}>
                    <i class="bi bi-tags" style={{color:"#fff"}}></i>
                  </div>
                  <h3>Top Deals</h3>
                </div>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={20}
                  centeredSlides={false}
                  pagination={false}
                  navigation={true}
                  modules={[Navigation, FreeMode]}
                  className="mySwiper"
                >
                  {salons.map((salon) => (
                    <SwiperSlide key={salon.id} className="">
                      <Link to={salon.link} className="cs-main__card-box text-decoration-none">
                        <div className="cs-main__card-img">
                          <img
                            src={salon.image}
                            className="img-fluid"
                            alt={salon.name}
                          />
                          <div className="cs-main__card-rating-box">
                            <span className="cs-mcard-aR">{salon.rating}</span>
                            <span className="cs-mcard-aText">
                              <span>{salon.reviews}</span> ratings
                            </span>
                          </div>
                        </div>
                        <div className="cs-main__card-content p-3">
                          <h3 className="cs-main__card-title text-truncate d-flex justify-content-between">
                            {salon.name}
                            <p style={{ fontSize: "12px" }}>
                              <i className="bi bi-star me-1"></i>
                              {salon.rating} Review
                            </p>
                          </h3>
                          <div className="cs-main__card-location d-flex align-items-start">
                            <FaMapMarkerAlt className="icon mt-1 me-2" />
                            <p className="cs-main__card-location-text text-truncate">
                              {salon.address}
                            </p>
                          </div>
                          <ul className="cs-main__card-list my-0 list-unstyled">
                            <li className="cs-main__card-list-item d-flex align-items-center">
                              <FaRoute className="icon me-2" /> {salon.distance}
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <ReviewSection />
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
          <LogoSection />
        </section>
      </div>
    </>
  );
}
