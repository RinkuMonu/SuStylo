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
  Navigation,
  FreeMode,
} from "swiper/modules";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaRoute } from "react-icons/fa";
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
    latitude: "",
    longitude: "",
  });

  console.log("lllllllll", location.latitude);
  const [address, setAddress] = useState("Fetching address...");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [salonData, setSalonData] = useState([]);
  const [fulladdress, setfulladdress] = useState("");
  const [nearbySalons, setNearbySalons] = useState([]);
  const [popularSalonData, setpopularSalonData] = useState([]);
  const [category, setCategory] = useState('all');
  const [salons, setSalons] = useState([]);
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
          console.log("Location found.....:", latitude, longitude);

          fetchData(latitude, longitude);

          // Set location state
          setLocation({ latitude: latitude, longitude: longitude });

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

  const fetchData = async (latitude, longitude) => {
    try {
      const response = await axiosInstance.get("/salon/nearby", {
        params: {
          latitude: latitude,
          longitude: longitude,
        },
      });

      setSalonData(response.data.salons);
      console.log("Salon Data:-", response.data.salons);
    } catch (error) {
      console.error(error);
    }
  };
  const getAddressFromCoords = async (latitude, longitude) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCklkVV3ho7yawqRP-imgtd1OtfbrH_akU`;

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
  console.log("lllllllll", location.latitude);

  useEffect(() => {
    const mostPopularData = async () => {
      try {
        const response = await axiosInstance.get("/salon/mostreview");

        setpopularSalonData(response.data?.salons);
      } catch (error) {
        console.error(error);
      }
    };

    mostPopularData();
  }, []);

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
  useEffect(() => {
    if (location.latitude && location.longitude) {
      fetchData(location.latitude, location.longitude);
    }
  }, [location.latitude, location.longitude]);


  useEffect(() => {
    const searchByCategory = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(
          `/salon/nearby?latitude=26.799739&longitude=75.869721&category=${category}`
        );
        setSalons(response.data.salons);
        console.log("saloon category:-", response.data.salons);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.log("slon not found", err.message);
      } finally {
        setLoading(false);
      }
    };

    searchByCategory();
  }, [category]);
  // search dropdown
  return (
    <>
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        <HeroSection />
        <div>
          <div className="container">
              <div className="row mb-4 mt-3">
                <div
                  className="deals_heading mb-4 d-flex gap-2"
                  style={{ alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      background: "#fb8807",
                      padding: "6px 10px",
                      borderRadius: "8px",
                    }}
                  >
                    <i class="bi bi-graph-up" style={{ color: "#fff" }}></i>
                  </div>
                  <h3>Most Popular Salon</h3>
                </div>
                <Swiper
                  spaceBetween={20}
                  centeredSlides={false}
                  pagination={false}
                  navigation={true}
                  modules={[Navigation, FreeMode]}
                  className="mySwiper"
                  breakpoints={{

                    576: {
                      slidesPerView: 2,
                    },

                    768: {
                      slidesPerView: 3,
                    },

                    992: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {popularSalonData.map((salon) => (
                    <SwiperSlide key={salon._id} className="">
                      <Link
                        to={`/salondetails`}
                        state={{ userId: salon._id }}
                        className="cs-main__card-box text-decoration-none"
                      >
                        <div className="cs-main__card-img">
                          <img
                            src="https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?cs=srgb&dl=pexels-delbeautybox-211032-853427.jpg&fm=jpg"
                            className="img-fluid"
                            alt={salon.salonName}
                          />
                          <div className="cs-main__card-rating-box">
                            <span className="cs-mcard-aR">{parseFloat(salon?.avgRating).toFixed(1)}</span>
                            <span className="cs-mcard-aText">
                              <span></span> ratings
                            </span>
                          </div>
                        </div>
                        <div className="cs-main__card-content p-3">
                          <h3 className="cs-main__card-title text-truncate d-flex justify-content-between">
                            {salon.salonName}
                          </h3>
                          <div className="cs-main__card-location d-flex align-items-start">
                            <FaMapMarkerAlt className="icon mt-1 me-2" />
                            <p className="cs-main__card-location-text text-truncate">
                              {salon.salonAddress}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="row mb-4">
                <div
                  className="deals_heading mb-4 d-flex gap-2"
                  style={{ alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      background: "#fb8807",
                      padding: "6px 10px",
                      borderRadius: "8px",
                    }}
                  >
                    <i class="bi bi-pin-map" style={{ color: "#fff" }}></i>
                  </div>
                  <h3>Near By Salon</h3>
                </div>
                <Swiper
                  spaceBetween={20}
                  centeredSlides={false}
                  pagination={false}
                  navigation={true}
                  modules={[Navigation, FreeMode]}
                  className="mySwiper"
                  breakpoints={{

                    576: {
                      slidesPerView: 2,
                    },

                    768: {
                      slidesPerView: 3,
                    },

                    992: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {salonData.map((salon) => (
                    <SwiperSlide key={salon.id} className="">
                      <Link
                        to={`/salondetails`}
                        state={{ userId: salon._id }}
                        className="cs-main__card-box text-decoration-none"
                      >
                        <div className="cs-main__card-img">
                          <img
                            src="https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?cs=srgb&dl=pexels-delbeautybox-211032-853427.jpg&fm=jpg"
                            className="img-fluid"
                            alt={salon.salonName}
                          />

                          <div className="cs-main__card-rating-box">
                            {/* <span className="cs-mcard-aR">
                              {salon.reviewCount}
                            </span> */}
                            <span className="cs-mcard-aText">
                              <span>{parseFloat(salon.reviewCount).toFixed(1)}</span> ratings
                            </span>
                          </div>
                        </div>
                        <div className="cs-main__card-content p-3">
                          <h3 className="cs-main__card-title text-truncate d-flex justify-content-between">
                            {salon.salonName}
                          </h3>
                          <h3 className="cs-main__card-title text-truncate d-flex justify-content-between">
                            {/* {salon.name} */}
                            <p style={{ fontSize: "12px" }}>
                              <i className="bi bi-star me-1"></i>
                              {salon.reviewCount} Review
                            </p>
                          </h3>
                          <div className="cs-main__card-location d-flex align-items-start">
                            <FaMapMarkerAlt className="icon mt-1 me-2" />
                            <p className="cs-main__card-location-text text-truncate">
                              {salon.salonAddress}
                            </p>
                          </div>
                          <ul className="cs-main__card-list my-0 list-unstyled">
                            <li className="cs-main__card-list-item d-flex align-items-center">
                              <FaRoute className="icon me-2" />{" "}
                              {parseFloat(salon.distance).toFixed(2)} km
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* <div className="row">
                <div className="deals_heading mb-4 d-flex gap-2" style={{ alignItems: "flex-start" }}>
                  <div style={{ background: "#fb8807", padding: '6px 10px', borderRadius: "8px", }}>
                    <i class="bi bi-tags" style={{ color: "#fff" }}></i>
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
              </div> */}
            </div>
        </div>
        <section className="content-section">
          <ServicesSlider />
          
          <AboutSection />
          <ServicesSection />
          <GallerySection />
          {/* 
          
          
          */}
          {/* Near By Search */}
          {/* <div className="search_result">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="gallery_heading  mx-auto">
                    <h2 className="text-center">Services & Categories</h2>
                    <p>
                      Book your appointment now using the best salon app in
                      India or the barber appointment app to redefine your
                      style!
                    </p>
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
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                  <div className="category-filter d-flex justify-content-between gap-2 mb-4">
                    <select class="form-select" aria-label="Default select example" value={category} onChange={(e) => setCategory(e.target.value)}>
                      {['all', 'premium', 'general'].map((type) => (
                        <option key={type} value={type}>
                          {type === 'all' ? 'All Salons' : type.charAt(0).toUpperCase() + type.slice(1) + ' Salons'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>


            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : error ? (
              <div className="alert alert-danger text-center">{error}</div>
            ) : (
              <div className="container">

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 g-4 mb-4">
                  {salons.map((salon) => (
                    <Link
                        to={`/salondetails`}
                        state={{ userId: salon._id }}
                        key={salon._id}
                        className="cs-main__card-box text-decoration-none p-0"
                      >
                        <div className="cs-main__card-img">
                          <img
                            src="https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?cs=srgb&dl=pexels-delbeautybox-211032-853427.jpg&fm=jpg"
                            className="img-fluid"
                            alt={salon.salonName}
                          />

                          <div className="cs-main__card-rating-box">
                           
                            <span className="cs-mcard-aText">
                              <span>{parseFloat(salon.reviewCount).toFixed(1)}</span> ratings
                            </span>
                          </div>
                        </div>
                        <div className="cs-main__card-content p-3">
                          <h3 className="cs-main__card-title text-truncate d-flex justify-content-between">
                            {salon.salonName}
                          </h3>
                         
                          <div className="cs-main__card-location d-flex align-items-start">
                            <FaMapMarkerAlt className="icon mt-1 me-2" />
                            <p className="cs-main__card-location-text text-truncate">
                              {salon.salonAddress}
                            </p>
                          </div>
                          <ul className="cs-main__card-list my-0 list-unstyled">
                            <li className="cs-main__card-list-item d-flex align-items-center">
                              <FaRoute className="icon me-2" />{" "}
                              {parseFloat(salon.distance).toFixed(2)} km
                            </li>
                          </ul>
                        </div>
                      </Link>
                  ))}

                </div>
              </div>
            )}
            
          </div> */}
          <ReviewSection />
          {/* <div className="container">
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
          </div> */}
          <LogoSection />
        </section>
      </div>
    </>
  );
}
