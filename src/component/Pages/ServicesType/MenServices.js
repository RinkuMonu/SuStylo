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
import SEO from "../../SEO";

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
    title: "Hair cut and style",
    image: "./images/new/menhairCut.jpg",
    description:
      "Search for skilled barbers and stylists who personalize every cut to match your personality and lifestyle. Book immediately through Su Stylo and walk into a salon that knows the style.",
    services: [
      "Classic haircuts",
      "Trendy and modern styles",
      "Faded and taper cut",
      "Blow-dry and hairstyle",
      "Wash hair and massage skull",
      "Beard size and design",
    ],
  },
  {
    title: " Beard grooming and shaving",
    image: "./images/new/beardSaving.jpg",
    description:
      "Whether you want a clean beard or bold, style beard, su styleo connects you by adding artists that provide a look with accurate and comfort.",
    services: [
      "Beard trimming and styling",
      "Royal beard with hot towels",
      "Clean beard with line-up",
      "Beard conditioning and hydration",
      "Mustache style",
    ],
  },
  {
    title: " Facial treatment for men",
    image: "./images/new/facialTreatment.jpg",
    description:
      "Partner salons on su styles provide specially designed expert skin treatment for men. From cleaning acne to reducing signs of fatigue, find out facial services to suit the needs of your skin.",
    services: [
      "Deep cleaning signature face",
      "Acne and defect control",
      "Finger-thali therapy",
      "Glycolic peel and exfoliation",
      "Hydrating and brighting facials",
      "Pore ​​refinement treatment",
    ],
  },
  {
    title: "Hair Care Treatment",
    image: "./images/new/hairCare.jpg",
    description:
      "Set up hair fall, dandruff, or dullness with advanced hair and skull treatments provided by the salon partners of Su stylo. Take care that your hair type and goals are right.",
    services: [
      "Organic hair spa and nutritious mask",
      "Russian control treatment",
      "Hair Fall Prevention Therapy",
      "Scalp detox and rejuvenation",
      "Hair color and natural highlights",
    ],
  },
  {
    title: "Massage and relax",
    image: "./images/new/massage.jpg",
    description:
      "Recharge with a stress massage booked through SU style. Partner salons and spas provide a cool environment and specialist physicians for complete body welfare.",
    services: [
      "Full body comfort massage",
      "Head, neck, and shoulder therapy",
      "Aromatherapy for mental clarity",
      "Deep tissue muscle recovery",
    ],
  },
  {
    title: "Additional grooming is necessary",
    image: "./images/new/additionalgrooming.jpg",
    description:
      "From hand and leg care to clean skin and barking style, fellow salons handle the finishing touch that defines a well-prepared look.",
    services: [
      "Manicure and pedicure for men",
      "Eyebrow threading and grooming",
      "Waxing (chest, back, arms, legs)",
      "Skin glow and toning",
    ],
  },
];

  return (
    <>
    <SEO></SEO>
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        <section className="menservices-section d-flex align-items-center">
          <div className="hero-overlay"></div>

          <div className="container text-center position-relative">
            <h2 className="hero-title">Men's grooming services on SuStylo</h2>
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
                  <h2>Build confidence, a cut at a time</h2>
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
             Sustylo is not just a salon- it is India's reliable digital platform for the discovery of top-rated grooming services. Through our exclusive network of verified partner salons, we connect you with expert professionals who provide experience in modern, high-quality men's grooming. Whether you are looking for a quick haircut or a full grooming upgrade, the stable partner is ready to serve the salon service.
            </div>

            
<section className="companydetails">
  <div className="container">
    <h1 className="fw-bold text-center mb-5 third-color">Explore men's grooming services through Su Style Partner Salon</h1>
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
    <h2 className="fw-bold text-center mb-5">Signature Men’s Services on Su Stylo</h2>
    <div className="row text-center g-4 mb-5">
      <div className="col-md-3">
        <img src="/images/organic-hair-treatment.jpg" alt="Organic Hair Treatment" className="img-fluid rounded mb-2" />
        <h6 className="fw-bold">Organic Hair Therapy</h6>
        <p className="small">Plant-based nutrition for strong, shiny hair</p>
      </div>
      <div className="col-md-3">
        <img src="/images/royal-shave.jpg" alt="Royal Shave" className="img-fluid rounded mb-2" />
        <h6 className="fw-bold">The Royal Shave</h6>
        <p className="small">Hot Taulia Risual and Premium Grooming Experience</p>
      </div>
      <div className="col-md-3">
        <img src="/images/acne-facial.jpg" alt="Acne Problem Facial" className="img-fluid rounded mb-2" />
        <h6 className="fw-bold">Men's Acne Facials</h6>
        <p className="small">: Clear, Advanced Care for Smooth Skin</p>
      </div>
      <div className="col-md-3">
        <img src="/images/luxury-massage.jpg" alt="Luxury Body Massage" className="img-fluid rounded mb-2" />
        <h6 className="fw-bold">Glycolic peel treatment</h6>
        <p className="small"> gentle exfoliation for bright, bright skin</p>
      </div>
    </div>

    {/* Why Choose Us */}
    <h2 className="fw-bold text-center mb-5">Why book men's services on SuStylo?</h2>
    <div className="row text-center g-4">
      <div className="col-md-2">
        <img src="/images/professionals.jpg" alt="Skilled Professionals" className="img-fluid rounded mb-2" />
        <p className="small fw-semibold">Curated a network of verified and trained salon partners</p>
      </div>
      <div className="col-md-2">
        <img src="/images/premium-products.jpg" alt="Premium Products" className="img-fluid rounded mb-2" />
        <p className="small fw-semibold">Premium products and techniques are used in services</p>
      </div>
      <div className="col-md-2">
        <img src="/images/hygiene.jpg" alt="Hygienic Environment" className="img-fluid rounded mb-2" />
        <p className="small fw-semibold">Transparent pricing and zero hidden fees</p>
      </div>
      <div className="col-md-2">
        <img src="/images/consultation.jpg" alt="Consultations" className="img-fluid rounded mb-2" />
        <p className="small fw-semibold">Flexible booking through the web or app</p>
      </div>
      <div className="col-md-2">
        <img src="/images/online-booking.jpg" alt="Online Booking" className="img-fluid rounded mb-2" />
        <p className="small fw-semibold">Hygienic, professional, and customer-focused salons</p>
      </div>
    </div>

    {/* CTA */}
    <div className="text-center mt-5">
      <h5 className="fw-semibold">Redefine Your Grooming Routine with Su Stylo</h5>
      <p>
       When you choose Su Stylo, you’re not just booking a service — you’re stepping into a curated grooming journey. Our partner salons across Jaipur (and soon across India) are ready to deliver the sharpest haircuts, smoothest shaves, and most refreshing facials tailored for today’s man.

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
