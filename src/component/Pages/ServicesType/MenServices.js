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
             Elevate Your Look with Expert Men’s Grooming Services at Su Stylo
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
    <h1 className="fw-bold text-center mb-5 third-color">Men’s Service Categories</h1>
    <div className="row g-5 mt-3">
      {mensServices.map((category, index) => (
        <React.Fragment key={index}>
          <div className="row align-items-center mb-4">
            {index % 2 === 0 ? (
              <>
                <div className="col-md-6 mb-3 mb-md-0">
                  <SimpleParallax orientation="down" scale={1.8} delay={1}>
                    <img
                      src={category.image}
                      alt={category.title}
                      className="img-fluid"
                    />
                  </SimpleParallax>
                </div>
                <div className="col-md-6 companydetails -mt-5">
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
                <div className="col-md-6 order-md-2 mb-3 mb-md-0">
                  <SimpleParallax orientation="down" scale={1.8} delay={1}>
                    <img
                      src={category.image}
                      alt={category.title}
                      className="img-fluid rounded shadow"
                    />
                  </SimpleParallax>
                </div>
                <div className="col-md-6 order-md-1 companydetails">
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
          {index !== mensServices.length - 1 && <hr className="my-4" />}
        </React.Fragment>
      ))}
    </div>

    {/* Signature Services */}
  <section className="py-5">
  <div className="container">
    {/* Signature Services */}
    <h2 className="fw-bold text-center mb-5">Signature Services at Su Stylo</h2>
    <div className="row text-center g-4 mb-5">
      <div className="col-md-3">
        <img src="/images/organic-hair-treatment.jpg" alt="Organic Hair Treatment" className="img-fluid rounded mb-2" />
        <h6 className="fw-bold">Organic Hair Treatment</h6>
        <p className="small">100% natural formulas to nourish and repair hair</p>
      </div>
      <div className="col-md-3">
        <img src="/images/royal-shave.jpg" alt="Royal Shave" className="img-fluid rounded mb-2" />
        <h6 className="fw-bold">Royal Shave</h6>
        <p className="small">Hot towel and luxury shave experience with skin-soothing finish</p>
      </div>
      <div className="col-md-3">
        <img src="/images/acne-facial.jpg" alt="Acne Problem Facial" className="img-fluid rounded mb-2" />
        <h6 className="fw-bold">Acne Problem Facial</h6>
        <p className="small">Specialized treatment to fight acne and improve skin texture</p>
      </div>
      <div className="col-md-3">
        <img src="/images/luxury-massage.jpg" alt="Luxury Body Massage" className="img-fluid rounded mb-2" />
        <h6 className="fw-bold">Luxury Body Massage</h6>
        <p className="small">Full-body therapy to reduce stress and improve circulation</p>
      </div>
    </div>

    {/* Why Choose Us */}
    <h2 className="fw-bold text-center mb-5">Why Choose Su Stylo for Men’s Grooming?</h2>
    <div className="row text-center g-4">
      <div className="col-md-2">
        <img src="/images/professionals.jpg" alt="Skilled Professionals" className="img-fluid rounded mb-2" />
        <p className="small fw-semibold">Skilled and certified professionals</p>
      </div>
      <div className="col-md-2">
        <img src="/images/premium-products.jpg" alt="Premium Products" className="img-fluid rounded mb-2" />
        <p className="small fw-semibold">Use of premium, skin-friendly products</p>
      </div>
      <div className="col-md-2">
        <img src="/images/hygiene.jpg" alt="Hygienic Environment" className="img-fluid rounded mb-2" />
        <p className="small fw-semibold">Hygienic and safe environment</p>
      </div>
      <div className="col-md-2">
        <img src="/images/consultation.jpg" alt="Consultations" className="img-fluid rounded mb-2" />
        <p className="small fw-semibold">Personalized grooming consultations</p>
      </div>
      <div className="col-md-2">
        <img src="/images/online-booking.jpg" alt="Online Booking" className="img-fluid rounded mb-2" />
        <p className="small fw-semibold">Easy online booking and transparent pricing</p>
      </div>
    </div>

    {/* CTA */}
    <div className="text-center mt-5">
      <h5 className="fw-semibold">Discover The Expertise & Passion Behind Our Salon</h5>
      <p>
        Book your appointment today and step into a world of sophisticated grooming designed
        exclusively for men. Refresh, rejuvenate, and redefine your style with Su Stylo.
      </p>
      <a href="#booking" className="btn btn-dark px-4 py-2 mt-3">Book Now</a>
    </div>
  </div>
</section>


  </div>
</section>



            {/* <div className="container mb-5">
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
