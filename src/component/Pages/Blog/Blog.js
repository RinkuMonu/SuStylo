import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import '../style/style.css';
import { Link } from "react-router-dom";

export default function Blog() {
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
    return (
        <>
            <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} ref={domRef}>
                <section className="blog-section d-flex align-items-center">
                    <div className="hero-overlay"></div>
                    
                    <div className="container text-center position-relative">
                        <h2 className="hero-title">Blog</h2>
                        <p className="text-white fw-bold">Welcome to the Su Stylo Blog, your go-to source for the latest trends, expert grooming tips, and salon industry insights. Whether you're looking for hairstyling inspiration, skincare advice, or the best self-care routines, we’ve got you covered. Stay updated, stay stylish!
                        </p>
                    </div>
                </section>
                <div className="content-section">
                    <div className="container blog_Section">
                        <div className="row">
                            <div className="col-md-12" data-aos="fade-up">
                                <div className="heading text-center">
                                    <h2>Blog – Stay Ahead in Style & Grooming</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-1" data-aos="fade-right">
                                <div className="blogBx">
                                    <div className="blog_date">
                                        <div className="b_month">
                                            AUG
                                        </div>
                                        <div className="b_date">
                                            24
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-5" data-aos="fade-right">
                                <div className="blog_img">
                                    <img src="./images/9052.jpg" className="img-fluid" />

                                </div>

                            </div>
                            <div className="col-md-6" data-aos="fade-left">
                                <div className="blog_content">
                                    <h3> Top Hair Trends of the Year – Styles You Need to Try!</h3>
                                     <p>Stay ahead of the fashion game with this year’s hottest hair trends! From bold colors and textured layers to sleek, minimalist cuts, discover styles that suit every personality. Whether you prefer a classic look or an edgy transformation, these trends will keep you looking stylish and confident all year long.</p>
                                     <Link to={'/blogdetail'} className='custom-btn btn-8 mt-5 ms-1'><span>READ MORE</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-1" data-aos="fade-right">
                                <div className="blogBx">
                                    <div className="blog_date">
                                        <div className="b_month">
                                            AUG
                                        </div>
                                        <div className="b_date">
                                            24
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-5" data-aos="fade-right">
                                <div className="blog_img">
                                    <img src="./images/9052.jpg" className="img-fluid" />

                                </div>

                            </div>
                            <div className="col-md-6" data-aos="fade-left">
                                <div className="blog_content">
                                    <h3>The Ultimate Guide to Beard Grooming & Maintenance</h3>
                                     <p>A well-groomed beard enhances your overall appearance and confidence. Learn the secrets to maintaining a healthy, stylish beard with expert trimming techniques, the right beard care products, and proper hygiene routines. Whether you prefer a rugged or refined look, this guide will help you keep your beard in perfect shape.</p>
                                     <Link to={'/blogdetail'} className='custom-btn btn-8 mt-5 ms-1'><span>READ MORE</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-1" data-aos="fade-right">
                                <div className="blogBx">
                                    <div className="blog_date">
                                        <div className="b_month">
                                            AUG
                                        </div>
                                        <div className="b_date">
                                            24
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-5" data-aos="fade-right">
                                <div className="blog_img">
                                    <img src="./images/9052.jpg" className="img-fluid" />

                                </div>

                            </div>
                            <div className="col-md-6" data-aos="fade-left">
                                <div className="blog_content">
                                    <h3>Why Regular Salon Visits Are Essential for Self-Care</h3>
                                     <p>Self-care isn’t just a luxury—it’s a necessity! Regular salon visits not only enhance your appearance but also contribute to your overall well-being. From professional haircuts and skincare treatments to relaxing massages, discover how routine salon care can boost your confidence, improve hair health, and promote relaxation in your busy life.</p>
                                     <Link to={'/blogdetail'} className='custom-btn btn-8 mt-5 ms-1'><span>READ MORE</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-1" data-aos="fade-right">
                                <div className="blogBx">
                                    <div className="blog_date">
                                        <div className="b_month">
                                            AUG
                                        </div>
                                        <div className="b_date">
                                            24
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-5" data-aos="fade-right">
                                <div className="blog_img">
                                    <img src="./images/9052.jpg" className="img-fluid" />

                                </div>

                            </div>
                            <div className="col-md-6" data-aos="fade-left">
                                <div className="blog_content">
                                    <h3>Skincare Secrets: Best Facial Treatments for a Radiant Glow</h3>
                                     <p>Healthy, glowing skin starts with the right facial treatments! From deep cleansing facials to hydrating masks and anti-aging solutions, learn about the best treatments tailored to your skin type. Regular facials not only refresh your skin but also help in reducing blemishes, fine lines, and dullness, leaving you looking radiant.</p>
                                     <Link to={'/blogdetail'} className='custom-btn btn-8 mt-5 ms-1'><span>READ MORE</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
