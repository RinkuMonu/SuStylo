import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import "../style/style.css";
import SEO from "../../SEO";

import SimpleParallax from "simple-parallax-js";

// More Services
const serviceData = [
  {
    title: "Hair Care Services",
    description:
      "Your hair is more than just one style - this is the reflection of your personality. At the SU Style Partner Salon, we provide specialist hair care services for both men and women. Whether you are looking for a fashionable haircut, nutritious spa treatment, or a bold new color, our stylists are here to keep your hair healthy, stylish, and easy to manage.",
    image: "./images/new/haircut.jpg",
    services: [
      "Haircuts for men and women",
      "Hair styling and blow-dry",
      "Hair spa and deep conditioning",
      "Hair coloring (permanent and semi-stable)",
      "Reciprocity",
      "Hair permission and curling",
      "Child extensions and weaving",
    ],
  },
  {
    title: " Skin care and facial treatment",
    description:
      "Glow, healthy skin is just one session away. SU Stylo's salon partners provide adapted skin treatment and facials using modern techniques and soft, effective products. Whether you are working with acne, dullness, or aging, our experts help you get smooth, bright skin.",
    image: "./images/new/SkinCare.jpg",
    services: [
      "Classic face and skin cleaning",
      "Anti-aging facials",
      "Acne treatment facial",
      "Bright and white colored facials",
      "D-tan and bleaching",
      "chemical peels",
      
    ],
  },
  {
    title: " Waxing and hair removal",
    description:
      "Say goodbye to unwanted hair with our safe, clean, and accurate hair removal services. Designed for all types of skin, waxing and threading services of SUstylo partner focus on comfort and hygiene to leave your skin smooth and irritation-free.",
    image: "./images/new/waxing.jpg",
    services: [
      "Full body waxing",
      "Bikini and Brazilian wax",
      "Underarm waxing",
      "Facial waxing (upper lips, chin, eyebrows)",
      "Threading (eyebrows and facial hair)",
      "Back and chest waxing",
      
    ],
  },
  {
    title: "Nail care services",
    description:
      "From clean and classic to bold and artistic, our nail care services help you express your personal style. Pamper your hands and feet with fresh treatment and beautifully designed nail art, distributed by expert technicians.",
    image: "./images/new/NailCare.jpg",
    services: [
      "Manicure (Basic, French, Jail)",
      "Pedicure (basic, spa, jail)",
      "Nail art and custom designs",
      "Nail Extensions and Acrylic Nails",
      "Paraffin wax therapy",
      "Cuticle care and nail repair",
    ],
  },
  {
    title: " Body massage and treatment",
    description:
      "Relaxation begins here. Our massage physicians offer a series of remedies designed to relieve stress, relieve muscle stress, and promote overall well-being. Recharge your body and mind with cool, restorative sessions.",
    image: "./images/new/BodyMassage.jpg",
    services: [
      "Swedish massage",
      "deep tissue massage",
      "aromatherapy",
      "Hot stone therapy",
      "Massage the head, neck, and shoulders",
      "Full body rest massage",
      "Foot Reflexology",
    ],
  },
  {
    title: "Bride and special opportunity services",
    description:
      "See your best in the most important days of life. Whether it is your wedding or a grand celebration, Su Stylo, professional makeup artist and stylist, crafts elegant, memorable looks that conform to your program and personal style.",
    image: "./images/new/bridal.jpg",
    services: [
      "Bride's makeup and hairstyling",
      "Party and event makeup",
      "Pre-Bridal Skin and Hair Package",
      "Mehndi and traditional bride services",
      "Sari draping and style",
      "The package is operated for the groom",
    ],
  },
  {
    title: "Men’s Grooming Services",
    description:
      "Effortless grooming for the modern man. From sharp haircuts to rejuvenating facials, Su Stylo partner salons offer a full suite of men’s services to help you look and feel your best.",
    image: "./images/new/Grooming.jpg",
    services: [
      "Beard Shaping and Styling",
      "Haircuts and Styling",
      "Classic Hot Towel Shaves",
      "Men’s Facial Treatments",
      "Scalp and Hair Care",
      "Hand and Foot Grooming",
    ],
  },
  {
    title: "Spa and Wellness",
    description:
      "Recharge your body and restore inner balance with holistic spa treatments. Su Stylo’s wellness services are designed to detoxify, relax, and renew — leaving you refreshed from head to toe.",
    image: "./images/new/Spa.jpg",
    services: [
      "Aromatherapy Treatments",
      "Detox and Cleansing Sessions",
      "Body Scrubs and Exfoliation",
      "Steam Bath and Sauna",
      "Relaxation and Rejuvenation Packages",
      "Personalized Wellness Consultations",
    ],
  },
  {
    title: "Eyelash and Eyebrow Services",
    description:
      "Bring attention to your eyes with beautifully defined lashes and brows. Su Stylo salons offer precision treatments including shaping, tinting, lifting, and extensions — tailored for a naturally enhanced look.",
    image: "./images/new/Eyebrow.jpg",
    services: [
      "Eyebrow Shaping & Tinting",
      "Eyelash Extensions",
      "Eyebrow Threading & Waxing",
      "Eyelash Lifting & Perming",
      "Lash & Brow Tint",
    ],
  },
  {
    title: "Makeup Services",
    description:
      "Be photo-ready for any occasion. From daily wear to HD and airbrush glam, Su Stylo salons have your makeup needs covered.",
    image: "./images/new/MakeupServices.jpg",
    services: [
      "Everyday Makeup",
      "Professional Makeup Looks",
      "High Definition (HD) Makeup",
      "Airbrush Makeup",
      "Makeup Trial Sessions",
      "Personalized Makeup Consultation",
    ],
  },
];

export default function Services() {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    // Initialize WOW.js
    new WOW().init();
    
    // Initialize AOS
    AOS.init({ duration: 1000 });

    // Initialize Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    if (domRef.current) observer.observe(domRef.current);

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <>
    <SEO></SEO>
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        <section className="services-section d-flex align-items-center">
          <div className="hero-overlay"></div>
          <div className="container text-center position-relative">
            <h2 className="hero-title">SuStylo Salon Services & Categories</h2>
            <p className="text-white fw-bold">
              Su Stylo offers premium grooming and beauty services to elevate your style and confidence, all in one place.
            </p>
          </div>
        </section>
      </div>
      
      <div className="content-section">
        <div className="container-fluid px-3">
          <div className="row">
            <div className="col-md-12">
              <div className="heading">
                <h2 className="third-color fw-bold text-center">Complete Grooming & Beauty Solutions Under One Roof</h2>
              </div>
              <div
                className="de-separator"
                style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}
              ></div>
            </div>
          </div>
          
          <section className="py-5 bg-white">
            <div className="container">
              <div className="row g-5">
                {serviceData.map((category, index) => (
                  <React.Fragment key={index}>
                    <div className="row align-items-center mb-5">
                      {index % 2 === 0 ? (
                        <>
                          <div className="col-md-6 mb-3 mb-md-0">
                            <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                              <img 
                                src={category.image} 
                                alt={category.title} 
                                className="img-fluid rounded shadow" 
                                loading="lazy"
                              />
                            </SimpleParallax>
                          </div>
                          <div className="col-md-6">
                            <h2 className="my-3 third-color fs-3 fw-bold">{category.title}</h2>
                            <p className="mb-2">{category.description}</p>
                            <ul className="listing ps-3 mb-0">
                              {category.services.map((service, idx) => (
                                <li key={idx} className="mb-1">{service}</li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="col-md-6 order-md-2 mb-3 mb-md-0">
                            <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                              <img 
                                src={category.image} 
                                alt={category.title} 
                                className="img-fluid" 
                                loading="lazy"
                              />
                            </SimpleParallax>
                          </div>
                          <div className="col-md-6 order-md-1">
                            <h2 className="my-3 third-color fs-3 fw-bold">{category.title}</h2>
                            <p className="mb-2">{category.description}</p>
                            <ul className="listing ps-3 mb-0">
                              {category.services.map((service, idx) => (
                                <li key={idx} className="mb-1">{service}</li>
                              ))}
                            </ul>
                          </div>
                        </>
                      )}
                    </div>
                    {index < serviceData.length - 1 && <hr className="my-4" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
            
            {/* Bonus Packages Section */}
            {/* Su Stylo Exclusive Packages */}
<div className="mt-5">
  <h4 className="fw-bold text-center mb-4">Bonus: Su Style Exclusive Package</h4>
  <p className="text-center mb-3">
   Enjoy the best of beauty with our curated combo deals and opportunity-based proposals. Choose what you like best or just design a personal care plan for you.

  </p>
  <div className="row text-center justify-content-center g-4 mb-4">
    <div className="col-md-3">
      <img src="/images/grooming-combo.jpg" alt="Grooming Combo" className="img-fluid rounded mb-2" />
      <h6 className="fw-bold">Preparation of combo package</h6>
    </div>
    <div className="col-md-3">
      <img src="/images/bridal-groom.jpeg" alt="Bridal Groom Package" className="img-fluid rounded mb-2" />
      <h6 className="fw-bold">Bride & Bride package</h6>
    </div>
    <div className="col-md-3">
      <img src="/images/festival-offer.png" alt="Festival Specials" className="img-fluid rounded mb-2" />
      <h6 className="fw-bold">Seasonal proposal & festival special</h6>
    </div>
    <div className="col-md-3">
      <img src="/images/custom-plan.jpg" alt="Customized Plan" className="img-fluid rounded mb-2" />
      <h6 className="fw-bold">Customized care plans</h6>
    </div>
  </div>
</div>

{/* Why Choose Us Section */}
<div className="mt-5">
  <h4 className="fw-bold text-center mb-4">Why Choose Su Stylo Salon Partners?</h4>
  <div className="row text-center justify-content-center g-4 mb-4">
    <div className="col-md-2">
      <img src="/images/verified-salon.jpg" alt="Verified Partners" className="img-fluid rounded mb-2" />
      <p className="small fw-semibold">Verified and reliable salon partner</p>
    </div>
    <div className="col-md-2">
      <img src="/images/experienced-beauticians.jpg" alt="Certified Professionals" className="img-fluid rounded mb-2" />
      <p className="small fw-semibold">Experienced and certified beauty professional</p>
    </div>
    <div className="col-md-2">
      <img src="/images/hygiene.jpg" alt="Hygiene Standards" className="img-fluid rounded mb-2" />
      <p className="small fw-semibold">Strict hygiene and safety standards</p>
    </div>
    <div className="col-md-2">
      <img src="/images/transparent-booking-women.jpg" alt="Transparent Pricing" className="img-fluid rounded mb-2" />
      <p className="small fw-semibold">Transparent pricing with no hidden fee</p>
    </div>
    <div className="col-md-2">
      <img src="/images/online-booking.jpg" alt="Easy Booking" className="img-fluid rounded mb-2" />
      <p className="small fw-semibold">Easy online booking, resurrection</p>
    </div>
  </div>

  <p className="text-center fw-semibold">
   Whether it’s daily care or a special event, Su Stylo ensures you always put your best self forward.
  </p>
  <p className="text-center text-muted">Explore.   Book.    Glow.    Only on Su Stylo.</p>

  {/* Centered Book Now Button */}
  <div className="text-center">
    <a href="#booking" className="btn btn-dark px-4 py-2 mt-3">Book Now</a>
  </div>
</div>


          </section>
        </div>
      </div>
    </>
  );
}