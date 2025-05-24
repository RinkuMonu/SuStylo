import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import "../style/style.css";

import SimpleParallax from "simple-parallax-js";

// More Services
const serviceData = [
  {
    title: "Hair Care Services",
    description:
      "Your hair is a key part of your personal style. At Su Stylo partner salons, experience expert hair services for men and women designed to keep your hair healthy, stylish, and manageable.",
    image: "./images/new/haircut.jpg",
    services: [
      "Haircut (Men & Women)",
      "Hair Styling & Blow Dry",
      "Hair Spa & Deep Conditioning",
      "Hair Coloring (Permanent, Semi-Permanent)",
      "Highlights & Balayage",
      "Hair Rebonding & Straightening",
      "Hair Perming & Curling",
      "Scalp Treatment & Dandruff Control",
      "Beard Grooming & Trimming",
      "Hair Extensions & Weaving",
    ],
  },
  {
    title: "Skin Care & Facial Treatments",
    description:
      "Healthy, glowing skin is just a session away. Su Stylo partner salons offer customized skin treatments and facials for every skin type and concern — from acne to anti-aging.",
    image: "./images/new/SkinCare.jpg",
    services: [
      "Classic Facial & Skin Cleanup",
      "Anti-Aging Facial",
      "Acne Treatment Facial",
      "Brightening & Whitening Facial",
      "De-tan & Bleaching",
      "Chemical Peel",
      "Microdermabrasion",
      "Hydrating Facial",
      "Skin Tightening Treatments",
    ],
  },
  {
    title: "Waxing & Hair Removal",
    description:
      "Smooth and silky skin made simple. Choose from a range of safe and hygienic waxing and threading services suited for every skin type.",
    image: "./images/new/waxing.jpg",
    services: [
      "Full Body Waxing",
      "Bikini & Brazilian Wax",
      "Underarm Waxing",
      "Facial Waxing (Upper Lip, Chin, Eyebrows)",
      "Threading (Eyebrows, Facial Hair)",
      "Back & Chest Waxing",
      "Leg & Arm Waxing",
    ],
  },
  {
    title: "Nail Care Services",
    description:
      "From basic nail hygiene to premium gel extensions and nail art, Su Stylo salons offer stylish, professional nail care.",
    image: "./images/new/NailCare.jpg",
    services: [
      "Manicure (Basic, French, Gel)",
      "Pedicure (Basic, Spa, Gel)",
      "Nail Art & Designs",
      "Nail Extensions & Acrylic Nails",
      "Paraffin Wax Treatment",
      "Cuticle Care & Nail Repair",
    ],
  },
  {
    title: "Body Massage & Therapies",
    description:
      "Relax, reset, and recharge. Su Stylo partner spas and salons provide therapeutic massage treatments for stress relief, muscle recovery, and full-body wellness.",
    image: "./images/new/BodyMassage.jpg",
    services: [
      "Swedish Massage",
      "Deep Tissue Massage",
      "Aromatherapy Massage",
      "Hot Stone Massage",
      "Head, Neck & Shoulder Massage",
      "Full Body Relaxation Massage",
      "Foot Reflexology",
    ],
  },
  {
    title: "Bridal & Special Occasion Services",
    description:
      "Look and feel your best on life's most important days. Our experienced makeup artists and stylists specialize in bridal and festive looks.",
    image: "./images/new/bridal.jpg",
    services: [
      "Bridal Makeup & Hairstyling",
      "Party & Event Makeup",
      "Pre-Bridal Skin & Hair Packages",
      "Mehendi & Traditional Bridal Services",
      "Saree Draping & Styling",
      "Grooming Packages for Grooms",
    ],
  },
  {
    title: "Men's Grooming Services",
    description:
      "Grooming made easy and comfortable for today's modern man. Our expert salons ensure you look sharp and feel confident.",
    image: "./images/new/Grooming.jpg",
    services: [
      "Beard Shaping & Styling",
      "Haircut & Styling",
      "Hot Towel Shave",
      "Facial Treatments for Men",
      "Hair & Scalp Treatments",
      "Manicure & Pedicure for Men",
    ],
  },
  {
    title: "Spa & Wellness",
    description:
      "Restore your inner balance and outer glow. Our spa partners provide holistic services that detoxify, de-stress, and rejuvenate your body.",
    image: "./images/new/Spa.jpg",
    services: [
      "Aromatherapy",
      "Detox Treatments",
      "Body Scrubs & Exfoliation",
      "Steam Bath & Sauna",
      "Relaxation Packages",
      "Wellness Consultations",
    ],
  },
  {
    title: "Eyelash & Eyebrow Services",
    description:
      "Enhance your eyes with precision shaping and advanced lash treatments — from tinting to extensions.",
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
      "Daily Makeup",
      "Professional Makeup",
      "HD Makeup",
      "Airbrush Makeup",
      "Makeup Trial Sessions",
      "Makeup Consultation",
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
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        <section className="services-section d-flex align-items-center">
          <div className="hero-overlay"></div>
          <div className="container text-center position-relative">
            <h2 className="hero-title">Su Stylo Salon Services & Categories</h2>
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
  <h4 className="fw-bold text-center mb-4">Bonus: Su Stylo Exclusive Packages</h4>
  <p className="text-center mb-3">
    Enjoy the best of beauty with our curated combo deals and occasion-based offers.
    Choose what fits you best or let us design a personalized care plan just for you.
  </p>
  <div className="row text-center justify-content-center g-4 mb-4">
    <div className="col-md-3">
      <img src="/images/grooming-combo.jpg" alt="Grooming Combo" className="img-fluid rounded mb-2" />
      <h6 className="fw-bold">Grooming Combo Packages</h6>
    </div>
    <div className="col-md-3">
      <img src="/images/bridal-groom.jpeg" alt="Bridal Groom Package" className="img-fluid rounded mb-2" />
      <h6 className="fw-bold">Bridal & Groom Packages</h6>
    </div>
    <div className="col-md-3">
      <img src="/images/festival-offer.png" alt="Festival Specials" className="img-fluid rounded mb-2" />
      <h6 className="fw-bold">Seasonal & Festival Offers</h6>
    </div>
    <div className="col-md-3">
      <img src="/images/custom-plan.jpg" alt="Customized Plan" className="img-fluid rounded mb-2" />
      <h6 className="fw-bold">Customized Care Plans</h6>
    </div>
  </div>
</div>

{/* Why Choose Us Section */}
<div className="mt-5">
  <h4 className="fw-bold text-center mb-4">Why Choose Su Stylo Salons?</h4>
  <div className="row text-center justify-content-center g-4 mb-4">
    <div className="col-md-2">
      <img src="/images/verified-salon.jpg" alt="Verified Partners" className="img-fluid rounded mb-2" />
      <p className="small fw-semibold">Verified & Trusted Partners</p>
    </div>
    <div className="col-md-2">
      <img src="/images/experienced-beauticians.jpg" alt="Certified Professionals" className="img-fluid rounded mb-2" />
      <p className="small fw-semibold">Certified Beauty Experts</p>
    </div>
    <div className="col-md-2">
      <img src="/images/hygiene.jpg" alt="Hygiene Standards" className="img-fluid rounded mb-2" />
      <p className="small fw-semibold">Strict Hygiene Standards</p>
    </div>
    <div className="col-md-2">
      <img src="/images/transparent-booking-women.jpg" alt="Transparent Pricing" className="img-fluid rounded mb-2" />
      <p className="small fw-semibold">No Hidden Charges</p>
    </div>
    <div className="col-md-2">
      <img src="/images/online-booking.jpg" alt="Easy Booking" className="img-fluid rounded mb-2" />
      <p className="small fw-semibold">Easy Booking & Secure Payments</p>
    </div>
  </div>

  <p className="text-center fw-semibold">
    Whether it's daily care or a special event, Su Stylo ensures you always put your best self forward.
  </p>
  <p className="text-center text-muted">Explore. Book. Glow. Only on Su Stylo.</p>

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