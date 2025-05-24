import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import Swal from "sweetalert2";
import "../style/style.css";
import SimpleParallax from "simple-parallax-js";
import { Link } from "react-router-dom";
import axiosInstance from "../../config/axiosInstance";

export default function About() {
  const [loading, setLoading] = useState(false);
  // formHendler part start
  const formHendler = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { name, email, number, type } = event.target;
    const userData = {
      name: name.value,
      email: email.value,
      mobile: number.value,
      type: type.value,
    };
    try {
      const response = await axiosInstance.post("/get-in-touch", userData);
      if (response.status == 200) {
        Swal.fire({
          title: "God job !",
          text: response.data.message,
          icon: "success",
        });
        setLoading(false);
        event.target.reset();
      }
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };
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
  // Cities
  const cities = [
    { name: "Malviya Nagar", url: "#" },
    { name: "Jhotwara", url: "#" },
    { name: "Civil Lines", url: "#" },
    { name: "Sitapura", url: "#" },
    { name: "Mansarover", url: "#" },
    { name: "Jagatpura", url: "#" },
    { name: "MI Road", url: "#" },
    { name: "Vivek Vihar", url: "#" },
  ];
  return (
    <>
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        <section className="about-section d-flex align-items-center">
          <div className="hero-overlay"></div>
          <div className="container text-center position-relative">
            <h2 className="hero-title">About Su Stylo</h2>
            <p className="text-white fw-bold fs-4">
              India’s Most Trusted Grooming Partner — From Jaipur to Every
              Indian City
            </p>
          </div>
        </section>
      </div>
      <div className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="gallery_heading mx-auto text-center">
                <h2>What Is SU Stylo</h2>
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
              <div className="clearfix companydetails">
                <img
                  src="./images/salonbanner.jpg"
                  className="img-fluid col-md-6 float-md-end mb-3 ms-md-3 img-width mt-5 "
                  alt="policy img"
                />
                <h2 className="my-3 third-color fs-3 fw-bold">SU STYLO</h2>
                <p className="mb-3">
                
                  Su Stylo is transforming the way people experience grooming in
                  India. What began as a local innovation in Jaipur is now
                  growing into a national movement to simplify salon bookings
                  and redefine beauty and personal care for the modern Indian.
                </p>
                <p>
                  Developed by Seven Unique Tech Solution Pvt. Ltd., a leading
                  IT company based in Jaipur, Su Stylo reflects the perfect
                  blend of beauty industry insight and digital innovation. With
                  a deep understanding of local business challenges and national
                  market trends, the team at Seven Unique Tech created Su Stylo
                  to solve real grooming and salon management problems across
                  India.
                </p>
                <p>
                  In today’s fast-paced life, finding the right salon at the
                  right time shouldn’t be a struggle. Whether you are preparing
                  for a last-minute meeting, a festive celebration, or a weekend
                  self-care routine, Su Stylo makes it easy to discover the best
                  salons, check real-time availability, and book instantly — no
                  calls, no waiting.
                </p>
                <p>
                  Our platform serves as a digital bridge between customers and
                  salon professionals, offering a smooth, transparent, and
                  rewarding experience for both. We bring convenience, quality,
                  and trust into every beauty appointment.
                </p>
                {/* <p className="mb-3">Founded in 2025, our mission is to transform the way you experience grooming by offering effortless booking and high-quality salon services with just a few clicks. Our expert team consists of highly skilled professionals who are passionate about delivering outstanding results, ensuring that every haircut, shave, and beauty treatment is executed with precision, creativity, and the latest trends in mind. We take pride in staying ahead of industry innovations, constantly upgrading our techniques and technology to give our customers a truly premium experience.</p> */}
                {/* <p>At Su Stylo, we believe that self-care should be a luxurious yet stress-free experience. Our platform is designed to eliminate the traditional challenges of salon visits, allowing customers to easily book appointments at their preferred salons without any inconvenience. No more long queues, no more uncertainty regarding availability, and no more compromises when it comes to quality service. Our cutting-edge technology ensures that you get the service you need at the time that suits you best, making beauty and grooming a seamless part of your routine. With just a few taps on your phone, you can secure an appointment and indulge in a pampering session that leaves you feeling refreshed and confident.</p> */}
              </div>
              <hr className="mt-5" />
              <section className="py-5" id="who-we-are">
                <div className="container">
                  <div className="row align-items-center">
                    {/* Text Section */}
                    <div className="col-lg-7 companydetails">
                      <h2 className="my-3 third-color fs-3 fw-bold">Who We Are</h2>
                      <p className="">
                        <strong>Su Stylo</strong> was launched in 2025 by a team
                        of passionate professionals from the beauty industry,
                        technology sector, and customer service backgrounds.
                      </p>
                      <p className="">
                        We saw a common problem: Indian salons were still
                        largely offline, unorganized, and hard to reach.
                        Customers had to depend on word-of-mouth, make endless
                        calls, and take chances on service quality.
                      </p>
                      <p className="">
                        So we asked:{" "}
                        <em>
                          What if you could find the perfect salon near you,
                          check availability instantly, book confidently, and
                          enjoy transparent pricing and verified reviews — all
                          in one place?
                        </em>
                      </p>
                      <p className="">
                        That vision became <strong>Su Stylo</strong> — a
                        powerful yet easy-to-use mobile platform designed to
                        uplift salon owners and delight customers.
                      </p>
                    </div>

                    {/* Image Section */}
                    <div className="col-lg-5 text-center mt-4 mt-lg-0">
                    <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                    <img
                        src="https://img.freepik.com/free-photo/young-beautiful-woman-choosing-cosmetics-beauty-shop_1303-27656.jpg"
                        alt="About Su Stylo"
                        className="img-fluid "
                      />
                    </SimpleParallax>
                     
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <hr className="mt-5" />
          </div>
          <section className="py-5" id="offers">
      <div className="container">
        <h2 className="my-3 third-color fs-3 fw-bold">What Su Stylo Offers You</h2>
        <div className="row">
          {/* Customer Section */}
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-light rounded shadow-sm h-100">
              <h5 className="fw-semibold mb-3">For Customers:</h5>
              <ul className="listing ps-3 mb-0">
                <li>Discover top-rated, hygienic salons in Jaipur and across India.</li>
                <li>Book appointments in real time — no need to call or wait in queues.</li>
                <li>Enjoy discounts, cashbacks, and loyalty rewards exclusive to our app.</li>
                <li>Choose flexible payment options: UPI, wallet, card, or cash.</li>
                <li>Access detailed reviews, service photos, and ratings from real users.</li>
                <li>View past appointments and upcoming bookings in a single dashboard.</li>
              </ul>
            </div>
          </div>

          {/* Salon Owner Section */}
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-light rounded shadow-sm h-100">
              <h5 className="fw-semibold mb-3">For Salon Owners:</h5>
              <ul className=" listing ps-3 mb-0">
                <li>List your salon for free — no setup or listing fees.</li>
                <li>Attract more customers through Su Stylo’s ₹4 Crore+ marketing campaigns.</li>
                <li>Get fast weekly payouts and bonus rewards for high performance.</li>
                <li>Use our salon dashboard to manage staff, services, income, and timings.</li>
                <li>Boost customer loyalty with in-app CRM tools and feedback tracking.</li>
                <li>Receive a Golden Partner Certificate and earn up to ₹1 Lakh annually in incentives.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
         <hr className="" />
         {/*  */}
         <section className="py-5 bg-white" id="why-jaipur">
      <div className="container">
        <div className="row">
          {/* Text Content */}
          <div className="col-lg-12 mx-auto text-center companydetails">
            <h2 className="h4 fw-bold mb-4  fs-3 " style={{color:"#fb8807"}}>Why We Started in Jaipur</h2>
            <p className="">
              We chose Jaipur as our launch city because it’s a blend of tradition and modernity. The beauty industry here is full of potential — from family-run parlours to high-end grooming lounges.
            </p>
            <p className="">
              But we noticed common challenges: unstructured bookings, walk-in overloads, irregular payments, and low online visibility.
            </p>
            <p className="">
              We spent months meeting salon owners, listening to their problems, and designing a solution that worked for them. At the same time, we spoke to hundreds of customers frustrated by lack of transparency, cleanliness concerns, and long waiting times.
            </p>
            <p className=" mb-4">
              <strong>Su Stylo</strong> was created as a response to these real-world needs — and the results are proof:
            </p>

            {/* Stats Section */}
            <div className="row text-start">
              <div className="col-sm-6 col-md-3 mb-3">
                <div className="bg-light rounded p-3 h-100 text-center shadow-sm">
                  <h5 className="mb-1">10,000+</h5>
                  <p className=" mb-0">Successful Bookings</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 mb-3">
                <div className="bg-light rounded p-3 h-100 text-center shadow-sm">
                  <h5 className="mb-1">100+</h5>
                  <p className=" mb-0">Active Salon Partners</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 mb-3">
                <div className="bg-light rounded p-3 h-100 text-center shadow-sm">
                  <h5 className="mb-1">4.8/5</h5>
                  <p className=" mb-0">Avg. Customer Rating</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 mb-3">
                <div className="bg-light rounded p-3 h-100 text-center shadow-sm">
                  <h5 className="mb-1">Up to 3X</h5>
                  <p className=" mb-0">Salon Income Growth</p>
                </div>
              </div>
            </div>

            <p className=" mt-4">
              Today, our Jaipur success story fuels our expansion across India.
            </p>
          </div>
        </div>
      </div>
    </section>
    <hr/>
          {/* Our Mission */}
          <div className="row align-items-center">
            <div className="col-md-6 mt-5 mb-3">
              <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                <img src="./images/women-2.jpg" className="img-fluid" />
              </SimpleParallax>
            </div>
            <div className="col-md-6 mb-3 about_mission ps-5">
              <h2 className="mt-5 third-color">OUR MISSION</h2>
              <p>
             To make grooming easy, reliable, and accessible to every Indian — while empowering salon businesses with the digital tools they need to grow.
              </p>
               <div className="text-start">
              <ul className=" list-unstyled">
                <li className="mb-2">✔ Helping local salons become digitally strong without extra costs</li>
                <li className="mb-2">✔ Providing customers a trusted one-stop app for all grooming needs</li>
                <li className="mb-2">✔ Setting a new standard of hygiene, convenience, and care</li>
                <li className="mb-2">✔ Making self-care a joyful and regular part of Indian life</li>
              </ul>
            </div>
            </div>
            
          </div>
          {/* Our Vision */}
          <hr className="mt-5" />
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 about_mission ps-5">
              <h2 className="mt-5 third-color">OUR VISION</h2>
              <p>
        To become India’s go-to platform for salon discovery, appointment booking, and beauty care support — from the largest cities to the smallest towns.
              </p>
              <div className="text-start">
              <ul className=" list-unstyled">
                <li className="mb-2">✔ Onboard over 10,000 salons across India by 2028</li>
                <li className="mb-2">✔ Introduce digital transformation to the offline grooming industry</li>
                <li className="mb-2">✔ Raise earning standards for salon professionals, especially in Tier 2 and Tier 3 cities</li>
                <li className="mb-2">✔ Promote safe, transparent, and customer-friendly grooming everywhere</li>
              </ul>
            </div>
            </div>
            <div className="col-md-6 mt-5 mb-3">
              <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                <img src="./images/about-2.jpg" className="img-fluid" />
              </SimpleParallax>
            </div>
          </div>
          {/*FAvorite Salon */}
          <hr className="mt-5" />
          <div className="row align-items-center">
            <div className="col-md-6 mt-5 mb-3">
              <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
                <img src="./images/about-3.jpg" className="img-fluid" />
              </SimpleParallax>
            </div>
            <div className="col-md-6 mb-3 about_mission ps-5">
              <h2 className="mt-5 third-color">
                Style & Grooming, Just a Tap Away
              </h2>
              <p>
                Discover the ease of booking with Su Stylo – your go-to
                destination for effortless salon appointments. In just 30
                seconds, unlock a world of grooming possibilities from your
                smartphone. Browse nearby salons, explore exclusive deals, and
                book no-wait appointments instantly. With Su Stylo, beauty and
                self-care are just a tap away—making every salon visit seamless,
                convenient, and stress-free!
              </p>
            </div>
          </div>
        <hr/>
        </div>
       <section className="py-5" id="customer-love">
  <div className="container">
    <div className="row align-items-center">
      {/* Text Section */}
      <div className="col-lg-6 mb-4 mb-lg-0 companydetails">
        <h2 className=" my-3 third-color fs-3 fw-bold ">Why Customers Love Su Stylo</h2>
        <ul className="list-unstyled text-start mb-4 ">
          <li className="mb-2">✔ Book your beauty service in just 30 seconds</li>
          <li className="mb-2">✔ No calls — just open the app and check live slot availability</li>
          <li className="mb-2">✔ See pricing, salon hygiene details, and verified reviews upfront</li>
          <li className="mb-2">✔ Flexible payments for your convenience</li>
          <li className="mb-2">✔ One app to manage all your grooming needs — anywhere in India</li>
        </ul>
        <p className=" mb-4">
          From everyday haircuts to festive makeovers, <strong>Su Stylo</strong> helps you look your best — without stress, without delay.
        </p>
        <hr className="my-4" />
        <h5 className="fw-semibold small">Let’s Connect</h5>
        <p className="">
          Want to join the Su Stylo network or explore how we can help you? We’re here to assist.
        </p>
      </div>

      {/* Image Section */}
      <div className="col-lg-6 text-center">
        <SimpleParallax orientation={"down"} scale={1.8} delay={1}>
 <img 
          src="https://img.freepik.com/free-photo/young-woman-getting-beauty-treatment-salon_1303-23921.jpg" 
          alt="Happy salon customer"
          className="img-fluid "
        />
        </SimpleParallax>
       
      </div>
    </div>
  </div>
</section>

        <div className="container-fluid ps-0">
          <div className="aboutBG">
            <div className="hero-overlay"></div>
            <div className="row">
              <div
                className="col-md-12 position-relative"
                style={{ zIndex: "999" }}
              >
                <h2 className="my-5 text-white fw-bold">Get In Touch</h2>
                <div className="hstack gap-3">
                  <form className="row" onSubmit={formHendler}>
                    <div
                      className="col-md-4 col-sm-12 mb-3"
                      style={{ textAlign: "justify" }}
                    >
                      <label
                        style={{
                          fontWeight: "600",
                          fontSize: "16px",
                          marginBottom: "10px",
                        }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control placeholder-white border-white"
                        placeholder="Name"
                        aria-label="First name"
                      />
                    </div>

                    <div
                      className="col-md-4 col-sm-12 mb-3"
                      style={{ textAlign: "justify" }}
                    >
                      <label
                        style={{
                          fontWeight: "600",
                          fontSize: "16px",
                          marginBottom: "10px",
                        }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control placeholder-white border-white"
                        placeholder="Email"
                        aria-label="Last name"
                      />
                    </div>

                    <div
                      className="col-md-4 col-sm-12 mb-3"
                      style={{ textAlign: "justify" }}
                    >
                      <label
                        style={{
                          fontWeight: "600",
                          fontSize: "16px",
                          marginBottom: "10px",
                        }}
                      >
                        Mobile
                      </label>
                      <input
                        type="number"
                        name="number"
                        className="form-control placeholder-white border-white"
                        placeholder="Number"
                        aria-label="Last name"
                      />
                    </div>
                    <div
                      className="col-md-4 col-sm-12 mb-3"
                      style={{ textAlign: "justify" }}
                    >
                      <label
                        htmlFor="userType"
                        style={{
                          fontWeight: "600",
                          fontSize: "16px",
                          marginBottom: "10px",
                        }}
                      >
                        User Type
                      </label>
                      <select
                        id="type"
                        className="form-control placeholder-white border-white"
                      >
                        <option value="">Select User Type</option>
                        <option value="user">User</option>
                        <option value="salonOwner">Salon Owner</option>
                      </select>
                    </div>

                    <div className="col-md-4 col-sm-12 mb-3">
                      {loading ? (
                        <button
                          className="btn-8 custom-btn"
                          style={{ marginTop: "40px" }}
                        >
                          <span>Please wait..</span>
                        </button>
                      ) : (
                        <button
                          className="btn-8 custom-btn"
                          style={{ marginTop: "40px" }}
                          type="submit"
                        >
                          <span>Get In Touch</span>
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Browse Cities */}
        <div className="container my-5">
          <div className="row">
            <div className="col-md-12">
              <div className="gallery_heading mx-auto text-center">
                <h2>Where We Are Now</h2>
              </div>
              <div
                className="de-separator"
                style={{
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <ul className="cities-container">
                  {cities.map((city, index) => (
                    <li key={index} className="cities-lists">
                      <Link to={city.url}>{city.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="mx-5" />
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
    </>
  );
}
