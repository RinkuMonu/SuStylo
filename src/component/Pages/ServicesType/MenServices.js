import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import "../style/style.css";
import { Link } from "react-router-dom";
import SimpleParallax from "simple-parallax-js";
import { Navigation, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function MenServices() {
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

const mensServices = [
  {
    title: "Haircut & Styling",
    image: "./images/new/menhairCut.jpg",
    description:
      "Give your hair the attention it deserves with our precision cuts and expert styling. From classic looks to trendy fades, our stylists tailor every haircut to your face shape and lifestyle.",
    services: [
      "Classic Haircuts",
      "Modern & Trendy Cuts",
      "Fade & Taper Haircuts",
      "Hair Styling & Blow Dry",
      "Hair Wash & Scalp Massage",
      "Beard Shaping & Styling",
    ],
  },
  {
    title: "Beard Grooming & Shaving",
    image: "./images/new/beardSaving.jpg",
    description:
      "Shape, refine, and maintain your beard with expert techniques and luxurious products. Whether you prefer a clean shave or bold beard design, our grooming artists deliver comfort and style with every stroke.",
    services: [
      "Beard Trimming & Shaping",
      "Royal Shave with Hot Towels",
      "Clean Shave & Precision Line-Up",
      "Beard Conditioning Treatment",
      "Mustache Styling",
    ],
  },
  {
    title: "Facial Treatments for Men",
    image: "./images/new/facialTreatment.jpg",
    description:
      "Revive dull skin, treat acne, or reduce signs of aging with our dermatologist-approved facials. Each session is customized to suit men’s skin types and concerns, ensuring visible results and complete skin wellness.",
    services: [
      "Signature Deep Cleansing Facial",
      "Acne & Blemish Treatment",
      "Anti-Aging Facial",
      "Glycolic Peel & Exfoliation",
      "Hydrating & Brightening Facials",
      "Deep Pore Cleansing",
    ],
  },
  {
    title: "Hair Care Treatments",
    image: "./images/new/hairCare.jpg",
    description:
      "Rebuild and rejuvenate your hair with targeted treatments designed for men. From tackling dandruff to promoting growth, our hair care therapies focus on restoring strength, shine, and scalp health.",
    services: [
      "Organic Hair Spa & Nourishment",
      "Anti-Dandruff Treatment",
      "Hair Fall Control Therapy",
      "Scalp Detox & Rejuvenation",
      "Hair Coloring & Highlights",
    ],
  },
  {
    title: "Massage & Relaxation",
    image: "./images/new/massage.jpg",
    description:
      "Recharge your mind and body with stress-relieving massage techniques. Our therapists specialize in full-body, deep tissue, and aromatherapy massages that offer deep relaxation and muscle recovery.",
    services: [
      "Full Body Relaxation Massage",
      "Head, Neck & Shoulder Massage",
      "Aromatherapy for Stress Relief",
      "Deep Tissue Massage",
    ],
  },
  {
    title: "Additional Grooming Services",
    image: "./images/new/additionalgrooming.jpg",
    description:
      "Perfect your grooming game with finishing touches that matter. From clean nails and shaped brows to smooth skin and an even tone, we cover the essentials for a well-groomed appearance.",
    services: [
      "Manicure & Pedicure for Men",
      "Eyebrow Threading & Shaping",
      "Waxing (Chest, Back, Arms, Legs)",
      "Skin Brightening & Whitening",
    ],
  },
];

  return (
    <>
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        <section className="menservices-section d-flex align-items-center">
          <div className="hero-overlay"></div>

          <div className="container text-center position-relative">
            <h2 className="hero-title">Men’s Grooming Services at Su Stylo</h2>
            <p className="text-white fw-bold">
              Experience expert haircuts, luxury facials, skin treatments, and
              relaxing massages designed to enhance your natural beauty. From
              hair coloring to organic skincare, we offer personalized services
              for a flawless look. Pamper yourself with premium care and step
              out with confidence!
            </p>
          </div>
        </section>
        <div className="content-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="heading mb-2">
                  <h2>Crafting Confidence, One Cut at a Time</h2>
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
            <div>
              At Su Stylo, we understand that men’s grooming is more than just a
              routine — it’s a statement. Our expert stylists and skincare
              professionals offer a comprehensive range of premium services
              tailored specifically for men. Whether you want a sharp haircut,
              flawless skin, or a relaxing massage, our salon is your
              destination for all-around grooming excellence.
            </div>

            
<section className="companydetails">
  <div className="container">
    <h1 className="fw-bold text-center mb-5 third-color" data-aos="fade-up">Men’s Service Categories</h1>
    <div className="row g-5 mt-3">
      {mensServices.map((category, index) => (
        <React.Fragment key={index}>
          <div className="row align-items-center mb-4">
            {index % 2 === 0 ? (
              <>
                <div
                  className="col-md-6 mb-3 mb-md-0"
                  data-aos="fade-right"
                >
                  <SimpleParallax orientation="down" scale={1.8} delay={1}>
                    <img
                      src={category.image}
                      alt={category.title}
                      className="img-fluid"
                    />
                  </SimpleParallax>
                </div>
                <div
                  className="col-md-6 companydetails -mt-5"
                  data-aos="fade-left"
                >
                  <h3 className="fw-semibold mb-2 third-color">{category.title}</h3>
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
                <div
                  className="col-md-6 order-md-2 mb-3 mb-md-0"
                  data-aos="fade-left"
                >
                  <SimpleParallax orientation="down" scale={1.8} delay={1}>
                    <img
                      src={category.image}
                      alt={category.title}
                      className="img-fluid rounded shadow"
                    />
                  </SimpleParallax>
                </div>
                <div
                  className="col-md-6 order-md-1 companydetails"
                  data-aos="fade-right"
                >
                  <h3 className="fw-semibold mb-2 third-color">{category.title}</h3>
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
          {index !== mensServices.length - 1 && <hr className="my-4" data-aos="zoom-in" />}
        </React.Fragment>
      ))}
    </div>

    {/* Signature Services */}
    <div className="mt-5" data-aos="fade-up">
      <h4 className="fw-bold text-center mb-4">Signature Services at Su Stylo</h4>
      <ul className="listing ps-3 col-md-6 offset-md-3 mb-4">
        <li className="mb-1">
          Organic Hair Treatment: 100% natural formulas to nourish and repair hair
        </li>
        <li className="mb-1">
          Royal Shave: Hot towel and luxury shave experience with skin-soothing finish
        </li>
        <li className="mb-1">
          Acne Problem Facial: Specialized treatment to fight acne and improve skin texture
        </li>
        <li className="mb-1">
          Glycolic Peel Facial: Advanced exfoliation to brighten skin and unclog pores
        </li>
        <li className="mb-1">
          Luxury Body Massage: Full-body therapy to reduce stress and improve circulation
        </li>
      </ul>
    </div>

    {/* Why Choose Us */}
    <div className="mt-5 content-section" data-aos="fade-up">
      <h4 className="fw-bold text-center mb-4">Why Choose Su Stylo for Men’s Grooming?</h4>
      <ul className="listing ps-3 col-md-6 offset-md-3 mb-4">
        <li className="mb-1">Skilled and certified professionals</li>
        <li className="mb-1">Use of premium, skin-friendly products</li>
        <li className="mb-1">Hygienic and safe environment</li>
        <li className="mb-1">Personalized grooming consultations</li>
        <li className="mb-1">Easy online booking and transparent pricing</li>
      </ul>
      <p className="text-center fw-semibold" data-aos="fade-up">
        Discover The Expertise & Passion Behind Our Salon
      </p>
      <p className="text-center" data-aos="fade-up">
        Our team of grooming specialists combines skill with passion to deliver outstanding results.
        From precision haircuts and beard styling to luxury facials and organic treatments, every
        service is tailored to fit your unique style and personality.
      </p>
      <p className="text-center fw-semibold" data-aos="fade-up">Ready for a New Look?</p>
      <p className="text-center mb-4" data-aos="fade-up">
        Book your appointment today and step into a world of sophisticated grooming designed
        exclusively for men. Refresh, rejuvenate, and redefine your style with Su Stylo.
      </p>
      <div className="text-center" data-aos="zoom-in">
        <a href="#booking" className="btn-8 custom-btn">Book Now</a>
      </div>
    </div>
  </div>
</section>


            <div className="container mb-5">
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

            {/* <hr className="my-5" /> */}
            {/* <div className="row align-items-center">
              <div className="col-md-6 mt-5 mb-3" data-aos="zoom-in-left">
                <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                  <img src="./images/gallery/R2.jpg" className="img-fluid" />
                </SimpleParallax>
              </div>
              <div
                className="col-md-6 mb-3 about_mission right_content fadeInRight  ps-5"
                data-aos="zoom-in-right"
              >
                <h2 className="wow fadeInRight animated" data-wow-delay=".3s">
                  Discover The{" "}
                  <span className="id-color fw-bold">Experties</span> And{" "}
                  <span className="id-color fw-bold">Passion</span> behind our
                  Salon
                </h2>
                <p className="text-muted">
                  At our salon, we combine expertise with passion to deliver
                  exceptional grooming experiences. Our skilled professionals
                  specialize in precision haircuts, beard styling, luxury
                  facials, and organic treatments. Using premium products and
                  the latest trends, we personalize every service to match your
                  style and personality. Whether it's a relaxing massage, deep
                  pore cleansing, or a royal shave, we ensure top-notch care and
                  attention. Step into a world of sophistication where your
                  grooming needs are met with perfection. Elevate your
                  confidence with our expert touch!
                </p>
                <Link className="btn-8 custom-btn">
                  <span>Book Now</span>
                </Link>
              </div>
            </div> */}
            {/* <hr className="my-5" /> */}
            {/* <div className="row align-items-center">
              <div
                className="col-md-6 mb-3 about_mission right_content fadeInRight  ps-5"
                data-aos="zoom-in-right"
              >
                <h2 className="wow fadeInRight animated" data-wow-delay=".3s">
                  Step <span className="id-color fw-bold">Inside</span> our
                  Salon<span className="id-color fw-bold">experience</span> The
                  Magic of Transfomation
                </h2>
                <p className="text-muted">
                  Enter a world where style meets sophistication! Our salon
                  offers expert grooming, luxury facials, precision haircuts,
                  and rejuvenating treatments tailored to enhance your look.
                  From beard grooming to deep cleansing facials, our skilled
                  professionals use premium products and advanced techniques to
                  bring out your best. Indulge in a relaxing massage, organic
                  hair treatment, or royal shave designed to refresh and
                  revitalize. Whether you seek a bold new look or subtle
                  refinement, we ensure a seamless transformation that boosts
                  confidence. Visit us today and redefine your style!
                </p>
                <Link to={"/bookappoinment"} className="btn-8 custom-btn">
                  <span>Book Now</span>
                </Link>
              </div>
              <div className="col-md-6 mt-5 mb-3" data-aos="zoom-in-left">
                <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                  <img src="./images/gallery/R5.jpg" className="img-fluid" />
                </SimpleParallax>
              </div>
            </div> */}
          </div>

        
        </div>
      </div>
    </>
  );
}
