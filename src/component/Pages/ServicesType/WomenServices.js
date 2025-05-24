import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import "../style/style.css";
import { Link } from "react-router-dom";
import SimpleParallax from "simple-parallax-js";
import { Pagination, Autoplay, Navigation, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function WomenServices() {
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

  const womensServices = [
    {
      title: "Hair Care & Styling",
      image: "./images/new/womenhaircare.jpg",
      description:
        "Give your hair the attention it deserves with precision cuts and expert styling. From nourishing treatments to stylish transformations, our partner salons help you express your personality through your hair.",
      services: [
        "Precision Haircuts & Layering",
        "Hair Styling & Blow Dry",
        "Hair Coloring, Highlights & Balayage",
        "Hair Spa & Deep Conditioning",
        "Keratin & Straightening Treatments",
        "Organic Hair Repair & Nourishment",
      ],
    },
    {
      title: "Facial Treatments & Skin Care",
      image: "./images/new/womenfacialcare.jpg",
      description:
        "Refresh and renew your skin with facial services designed and delivered by salon partners experienced in skin wellness. Treatments are tailored to your skin type and concern.",
      services: [
        "Signature Deep Cleansing Facial",
        "Acne & Blemish Control Facial",
        "Glycolic Peel & Exfoliation",
        "European Facial for Hydration & Glow",
        "Anti-Aging & Brightening Treatments",
        "Deep Pore Cleansing & Detox",
      ],
    },
    {
      title: "Waxing & Hair Removal",
      image: "./images/new/womenwaxcare.jpg",
      description:
        "Su Stylo partner salons offer clean, hygienic, and gentle waxing services for all skin types. Enjoy smooth results and professional care.",
      services: [
        "Full Body Waxing",
        "Bikini & Brazilian Wax",
        "Facial Waxing (Eyebrows, Upper Lip, Chin)",
        "Underarm & Leg Waxing",
        "Gentle, Painless Hair Removal",
      ],
    },
    {
      title: "Nail Care & Beauty",
      image: "./images/new/womennailcare.jpg",
      description:
        "Enhance your look with perfect nails. From quick cleanups to bold nail art, our salon partners offer services to keep your hands and feet looking elegant.",
      services: [
        "Classic Manicure & Pedicure",
        "Gel & French Manicure",
        "Nail Art & Designs",
        "Nail Extensions & Acrylic Nails",
        "Paraffin Wax Treatment for Hands & Feet",
      ],
    },
    {
      title: "Body Massages & Relaxation",
      image: "./images/new/womenbodymassage.jpg",
      description:
        "Relax your body and mind with soothing massage therapies offered by certified spa professionals. Let our salon partners help you release stress and recharge.",
      services: [
        "Aromatherapy Massage with Essential Oils",
        "Swedish & Deep Tissue Massage",
        "Hot Stone Therapy",
        "Full Body Relaxation Massage",
        "Stress Relief & Muscle Relaxation",
      ],
    },
    {
      title: "Bridal & Special Occasion Services",
      image: "./images/new/womenbridal.jpg",
      description:
        "From wedding-day glam to pre-wedding prep, our bridal beauty services are executed by highly experienced Su Stylo salon partners.",
      services: [
        "Bridal Hair & Makeup Packages",
        "Pre-Bridal Skin & Hair Care",
        "Party & Event Makeup",
        "Mehendi & Traditional Styling",
        "Grooming Packages for Brides & Bridesmaids",
      ],
    },
    {
      title: "Advanced Skin Treatments",
      image: "./images/new/advanceskin.jpg",
      description:
        "For specialized skin concerns, trust our partner salons to provide expert consultation and treatment using advanced skincare protocols.",
      services: [
        "Chemical Peels & Skin Rejuvenation",
        "Microdermabrasion",
        "Skin Brightening & Whitening",
        "Anti-Pigmentation Therapy",
        "Scar & Stretch Mark Reduction",
      ],
    },
  ];

  return (
    <>
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        <section className="womenservices-section d-flex align-items-center">
          <div className="hero-overlay"></div>

          <div className="container text-center position-relative">
            <h2 className="hero-title">
              Women’s Grooming & Beauty Services at Su Stylo
            </h2>
            <p className="text-white fw-bold">
            Women’s beauty services available near you in Vaishali Nagar, Malviya Nagar, Jagatpura & more.
            </p>
          </div>
        </section>
        <div className="">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="heading mb-2">
                  <h2>Empowering Beauty, One Service at a Time</h2>
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
            <div className="row mb-4">
              Su Stylo is not a traditional salon — it’s a digital salon service
              platform where professional beauty services are delivered by our
              verified salon partners. Every service listed here is offered
              directly by trusted local salons who have joined hands with Su
              Stylo to bring world-class grooming experiences to your
              fingertips. Our platform connects you with top-rated beauty
              experts in your area who are trained, certified, and committed to
              exceptional service.
            </div>
            {/* <div className="row mb-4">
              <div className="col-md-12">
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
                  <SwiperSlide>
                    <div
                      className="card text-white border-0 position-relative"
                      style={{ borderRadius: "12px", overflow: "hidden" }}
                    >
                      <SimpleParallax>
                        <img
                          src="./images/gallery/2149311365.jpg"
                          className="card-img"
                          alt="Organic Hair Treatment"
                          style={{
                            height: "453px",
                            objectFit: "cover",
                            filter: "brightness(50%)",
                          }}
                        />
                      </SimpleParallax>

                      <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                        <h4 className="fw-bold">Organic Hair Treatment</h4>
                        <p className="mb-0 fs-6">
                          Nourishes, strengthens, and repairs hair with natural
                          ingredients.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="card text-white border-0 position-relative"
                      style={{ borderRadius: "12px", overflow: "hidden" }}
                    >
                      <SimpleParallax>
                        <img
                          src="./images/gallery/14.jpg"
                          className="card-img"
                          alt="Organic Hair Treatment"
                          style={{
                            height: "453px",
                            objectFit: "cover",
                            filter: "brightness(50%)",
                          }}
                        />
                      </SimpleParallax>

                      <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                        <h4 className="fw-bold">Aroma Therapy</h4>
                        <p className="mb-0 fs-6">
                          Soothing essential oils for relaxation and skin
                          rejuvenation.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="card text-white border-0 position-relative"
                      style={{ borderRadius: "12px", overflow: "hidden" }}
                    >
                      <SimpleParallax>
                        <img
                          src="./images/gallery/320.jpg"
                          className="card-img"
                          alt="Organic Hair Treatment"
                          style={{
                            height: "453px",
                            objectFit: "cover",
                            filter: "brightness(50%)",
                          }}
                        />
                      </SimpleParallax>

                      <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                        <h4 className="fw-bold">Waxing</h4>
                        <p className="mb-0 fs-6">
                          Smooth, hair-free skin with gentle and effective hair
                          removal.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="card text-white border-0 position-relative"
                      style={{ borderRadius: "12px", overflow: "hidden" }}
                    >
                      <SimpleParallax>
                        <img
                          src="./images/gallery/2149265928.jpg"
                          className="card-img"
                          alt="Nail Manicure"
                          style={{
                            height: "453px",
                            objectFit: "cover",
                            filter: "brightness(50%)",
                          }}
                        />
                      </SimpleParallax>

                      <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                        <h4 className="fw-bold">Nail Manicure</h4>
                        <p className="mb-0 fs-6">
                          Manicure and pedicure for healthy, beautiful hands and
                          feet.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="card text-white border-0 position-relative"
                      style={{ borderRadius: "12px", overflow: "hidden" }}
                    >
                      <SimpleParallax>
                        <img
                          src="./images/gallery/2149871868.jpg"
                          className="card-img"
                          alt="Body Massages"
                          style={{
                            height: "453px",
                            objectFit: "cover",
                            filter: "brightness(50%)",
                          }}
                        />
                      </SimpleParallax>

                      <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                        <h4 className="fw-bold">Body Massages</h4>
                        <p className="mb-0 fs-6">
                          Relaxing therapy to relieve stress and rejuvenate the
                          body.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="card text-white border-0 position-relative"
                      style={{ borderRadius: "12px", overflow: "hidden" }}
                    >
                      <SimpleParallax>
                        <img
                          src="./images/gallery/2148976893.jpg"
                          className="card-img"
                          alt="Deep Pore Cleansing"
                          style={{
                            height: "453px",
                            objectFit: "cover",
                            filter: "brightness(50%)",
                          }}
                        />
                      </SimpleParallax>

                      <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                        <h4 className="fw-bold">Deep Pore Cleansing</h4>
                        <p className="mb-0 fs-6">
                          Removes dirt, oil, and impurities for fresh, glowing
                          skin.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="card text-white border-0 position-relative"
                      style={{ borderRadius: "12px", overflow: "hidden" }}
                    >
                      <SimpleParallax>
                        <img
                          src="./images/gallery/2150248325.jpg"
                          className="card-img"
                          alt="Acne Problem Facial"
                          style={{
                            height: "453px",
                            objectFit: "cover",
                            filter: "brightness(50%)",
                          }}
                        />
                      </SimpleParallax>

                      <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                        <h4 className="fw-bold">Acne Problem Facial</h4>
                        <p className="mb-0 fs-6">
                          Targeted treatment to reduce acne, scars, and
                          blemishes.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="card text-white border-0 position-relative"
                      style={{ borderRadius: "12px", overflow: "hidden" }}
                    >
                      <SimpleParallax>
                        <img
                          src="./images/gallery/2149037154.jpg"
                          className="card-img"
                          alt="Glycolic Peel Facial"
                          style={{
                            height: "453px",
                            objectFit: "cover",
                            filter: "brightness(50%)",
                          }}
                        />
                      </SimpleParallax>

                      <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                        <h4 className="fw-bold">Glycolic Peel Facial</h4>
                        <p className="mb-0 fs-6">
                          Exfoliating treatment for bright, smooth, and youthful
                          skin.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="card text-white border-0 position-relative"
                      style={{ borderRadius: "12px", overflow: "hidden" }}
                    >
                      <SimpleParallax>
                        <img
                          src="./images/gallery/2148878932.jpg"
                          className="card-img"
                          alt="European Facial"
                          style={{
                            height: "453px",
                            objectFit: "cover",
                            filter: "brightness(50%)",
                          }}
                        />
                      </SimpleParallax>

                      <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                        <h4 className="fw-bold">European Facial</h4>
                        <p className="mb-0 fs-6">
                          Hydrating and revitalizing facial for a radiant,
                          healthy glow.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div> */}
            {/* <hr className="my-5" /> */}
            <section className="py-5">
              <div className="container">
                <h1 className="fw-bold text-center mb-5 third-color">
                  Women’s Service Categories
                </h1>

                <div className="row g-5 mt-3">
                  {womensServices.map((category, index) => (
                    <React.Fragment key={index}>
                      <div className="row align-items-center mb-5">
                        {index % 2 === 0 ? (
                          <>
                            <div className="col-md-6 mb-3 mb-md-0">
                              <SimpleParallax
                                orientation="down"
                                scale={1.8}
                                delay={1}
                              >
                                <img
                                  src={category.image}
                                  alt={category.title}
                                  className="img-fluid"
                                />
                              </SimpleParallax>
                            </div>
                            <div className="col-md-6 companydetails">
                              <h3 className="fw-semibold mb-2 third-color">
                                {category.title}
                              </h3>
                              <p className="mb-2">{category.description}</p>
                              <ul className="listing ps-3 mb-0">
                                {category.services.map((service, idx) => (
                                  <li key={idx} className="mb-1">
                                    {service}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="col-md-6 order-md-2 mb-3 mb-md-0 companydetails">
                              <SimpleParallax
                                orientation="down"
                                scale={1.8}
                                delay={1}
                              >
                                <img
                                  src={category.image}
                                  alt={category.title}
                                  className="img-fluid"
                                />
                              </SimpleParallax>
                            </div>
                            <div className="col-md-6 order-md-1 companydetails">
                              <h3 className="fw-semibold mb-2 third-color">
                                {category.title}
                              </h3>
                              <p className="mb-2">{category.description}</p>
                              <ul className="listing ps-3 mb-0">
                                {category.services.map((service, idx) => (
                                  <li key={idx} className="mb-1">
                                    {service}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        )}
                      </div>
                      {index !== womensServices.length - 1 && (
                        <hr className="my-5" />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Signature Services for Women */}
<div className="mt-5">
  <h4 className="fw-bold text-center mb-5">Signature Services at Su Stylo</h4>
  <div className="row justify-content-center g-4">
    <div className="col-md-3 text-center">
      <img src="/images/organic-hair-women.jpg" alt="Organic Hair Treatment" className="img-fluid rounded mb-2" />
      <h6 className="fw-bold">Organic Hair Treatment</h6>
      <p className="small">Nourishing treatments using 100% natural ingredients for soft, healthy hair.</p>
    </div>
    <div className="col-md-3 text-center">
      <img src="/images/aroma-therapy.jpg" alt="Aroma Therapy" className="img-fluid rounded mb-2" />
      <h6 className="fw-bold">Aroma Therapy</h6>
      <p className="small">Relax your senses with essential oils that soothe your body and mind.</p>
    </div>
    <div className="col-md-3 text-center">
      <img src="/images/nail-manicure.jpg" alt="Nail Care" className="img-fluid rounded mb-2" />
      <h6 className="fw-bold">Nail Manicure & Pedicure</h6>
      <p className="small">Professional nail care and spa for hands and feet with a polished finish.</p>
    </div>
    <div className="col-md-3 text-center">
      <img src="/images/body-massage-women.jpg" alt="Body Massage" className="img-fluid rounded mb-2" />
      <h6 className="fw-bold">Body Massage</h6>
      <p className="small">Full-body massage sessions to detoxify, refresh, and relax.</p>
    </div>
    <div className="col-md-3 text-center">
      <img src="/images/deep-facial-women.jpg" alt="Deep Pore Cleansing" className="img-fluid rounded mb-2" />
      <h6 className="fw-bold">Deep Pore Cleansing Facial</h6>
      <p className="small">Thorough facial to remove impurities and leave your skin glowing.</p>
    </div>
    <div className="col-md-3 text-center">
      <img src="/images/acne-facial-women.jpg" alt="Acne Facial" className="img-fluid rounded mb-2" />
      <h6 className="fw-bold">Acne Problem Facial</h6>
      <p className="small">Targeted treatment to reduce acne and promote clear skin.</p>
    </div>
    <div className="col-md-3 text-center">
      <img src="/images/glycolic-peel-women.jpg" alt="Glycolic Facial" className="img-fluid rounded mb-2" />
      <h6 className="fw-bold">Glycolic Peel Facial</h6>
      <p className="small">Brightens and smoothens skin by gently exfoliating dead layers.</p>
    </div>
    <div className="col-md-3 text-center">
      <img src="/images/european-facial-women.jpg" alt="European Facial" className="img-fluid rounded mb-2" />
      <h6 className="fw-bold">European Facial</h6>
      <p className="small">A luxurious treatment that rejuvenates and hydrates all skin types.</p>
    </div>
  </div>
</div>

{/* Why Choose Us for Women */}
<div className="mt-5">
  <h4 className="fw-bold text-center mb-5">
    Why Women Choose Su Stylo Partner Salons
  </h4>
  <div className="row text-center justify-content-center g-4">
    <div className="col-md-3">
      <img
        src="/images/hygiene-salon-women.jpg"
        alt="Hygienic Salon"
        className="img-fluid rounded mb-2"
      />
      <h6 className="fw-bold">Top-Rated Salons</h6>
      <p className="small">
        Handpicked salons known for hygiene, professionalism, and expertise.
      </p>
    </div>
    <div className="col-md-3">
      <img
        src="/images/expert-team-women.jpg"
        alt="Expert Beauticians"
        className="img-fluid rounded mb-2"
      />
      <h6 className="fw-bold">Certified Professionals</h6>
      <p className="small">
        Experienced beauty experts trained in the latest techniques and trends.
      </p>
    </div>
    <div className="col-md-3">
      <img
        src="/images/transparent-booking-women.jpg"
        alt="Transparent Booking"
        className="img-fluid rounded mb-2"
      />
      <h6 className="fw-bold">Transparent & Easy Booking</h6>
      <p className="small">
        Book anytime, anywhere with full pricing visibility — no surprises.
      </p>
    </div>
    <div className="col-md-3">
      <img
        src="/images/self-care-women.jpg"
        alt="Self-Care Relaxation"
        className="img-fluid rounded mb-2"
      />
      <h6 className="fw-bold">Empowering Self-Care</h6>
      <p className="small">
        Whether it's a glam-up or me-time, experience care that uplifts you.
      </p>
    </div>
  </div>

  <div className="text-center mt-5">
    <h4 className="fw-bold mb-3">Step Into a World of Beauty, Wellness & Empowerment</h4>
    <p className="col-md-8 offset-md-2">
      Su Stylo connects you with India’s best beauty professionals through a seamless,
      transparent, and empowering platform. Enjoy luxury and care on your own terms.
    </p>
     <a href="#booking" className="btn btn-dark px-4 py-2 mt-3">Book Now</a>
      
  </div>
</div>


              </div>
            </section>

            {/* <div className="row align-items-center">
              <div className="col-md-6 mt-5 mb-3">
                <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                  <img
                    src="./images/gallery/womwn1.jpg"
                    className="img-fluid"
                  />
                </SimpleParallax>
              </div>
              <div className="col-md-6 mb-3 about_mission right_content fadeInRight  ps-5">
                <h2 className="wow fadeInRight animated" data-wow-delay=".3s">
                  Discover The{" "}
                  <span className="id-color fw-bold">Experties</span> And{" "}
                  <span className="id-color fw-bold">Passion</span> behind our
                  Women's Salon
                </h2>
                <p className="text-muted ">
                  Step into a world of beauty and elegance, where our expert
                  professionals bring years of experience and passion to every
                  service. From luxurious facials to organic hair treatments,
                  and deep cleansing to relaxing body massages, we personalize
                  every treatment to enhance your natural beauty. Our salon
                  offers expert waxing, nail care, aroma therapy, and advanced
                  skincare solutions, ensuring a flawless and radiant glow.
                  Using premium products and the latest techniques, we craft an
                  experience that refreshes, revitalizes, and transforms. Visit
                  us and embrace the beauty you deserve!
                </p>
                <Link className="btn-8 custom-btn">
                  <span>Book Now</span>
                </Link>
              </div>
            </div> */}
            {/* <hr className="my-5" /> */}
            {/* <div className="row align-items-center">
              <div className="col-md-6 mb-3 about_mission right_content fadeInRight  ps-5">
                <h2 className="wow fadeInRight animated" data-wow-delay=".3s">
                  Step <span className="id-color fw-bold">Inside</span> our
                  Salon<span className="id-color fw-bold">experience</span> The
                  Magic of Transfomation
                </h2>
                <p className="text-muted">
                  Indulge in a world of beauty and relaxation, where expert care
                  meets elegance. Our salon offers personalized hair treatments,
                  rejuvenating facials, deep cleansing therapies, and soothing
                  body massages to refresh your look and spirit. From precision
                  waxing and nail care to advanced skincare solutions like
                  glycolic peels and European facials, we bring out your natural
                  glow. Using premium products and the latest techniques, we
                  ensure a luxurious, confidence-boosting experience. Step in
                  for a transformation that enhances your beauty and leaves you
                  feeling radiant and refreshed!
                </p>
                <Link to={"/bookappoinment"} className="btn-8 custom-btn">
                  <span>Book Now</span>
                </Link>
              </div>
              <div className="col-md-6 mt-5 mb-3">
                <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                  <img
                    src="./images/gallery/women2.jpg"
                    className="img-fluid"
                  />
                </SimpleParallax>
              </div>
            </div> */}
          </div>
          {/* <div className="container-fluid ps-0">
                        <div className="aboutBG">
                            <div className="hero-overlay"></div>
                            <div className="row">
                                <div className="col-md-12 position-relative" style={{ zIndex: "999" }}>
                                    <h2 className="my-5 text-white fw-bold">Get In Touch</h2>
                                    <div className="hstack gap-3">
                                        <div className="row">
                                            <div className="col" style={{ textAlign: "justify" }}>
                                                <label style={{ fontWeight: "600", fontSize: "16px", marginBottom: "10px" }}>Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control placeholder-white border-white"
                                                    placeholder="Name"
                                                    aria-label="First name"
                                                />
                                            </div>

                                            <div className="col" style={{ textAlign: "justify" }}>
                                                <label style={{ fontWeight: "600", fontSize: "16px", marginBottom: "10px" }}>Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control placeholder-white border-white"
                                                    placeholder="Email"
                                                    aria-label="Last name"
                                                />
                                            </div>

                                            <div className="col" style={{ textAlign: "justify" }}>
                                                <label style={{ fontWeight: "600", fontSize: "16px", marginBottom: "10px" }}>Mobile</label>
                                                <input
                                                    type="number"
                                                    className="form-control placeholder-white border-white"
                                                    placeholder="Number"
                                                    aria-label="Last name"
                                                />
                                            </div>

                                            <div className="col">
                                                <button className="btn-8 custom-btn" style={{ marginTop: "40px" }}>
                                                    <span>Get In Touch</span>
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div> */}
          {/* <div className="container review_section" data-aos="zoom-in">
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
                                        <h2>Chandan Sharma</h2>
                                        <div className="d-flex gap-2">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                        </div>
                                        <p>Su Stylo is my go-to salon for the perfect haircut. The staff is professional, and the atmosphere is so welcoming. Highly recommend!</p>

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
                                        <p>Loved my styling experience! The team knows exactly what suits you best. The service was top-notch, and I left feeling fabulous!</p>

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
                                        <p>Excellent grooming services! I tried their beard trimming, and it was done with so much precision. Great experience!</p>

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
                                        <p>Best haircut I've ever had! The barbers are highly skilled and listen to exactly what you want. Five-star service!</p>

                                    </div>
                                </SwiperSlide>
                            </Swiper>

                        </div>


                    </div>   */}
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
        </div>
      </div>
    </>
  );
}
