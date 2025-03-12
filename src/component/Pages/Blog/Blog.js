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
                    <div class="de-gradient-edge-bottom" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
                    <div className="container text-center position-relative">
                        <h2 className="hero-title">Blog</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </section>
                <div className="content-section">
                    <div className="container blog_Section">
                        <div className="row">
                            <div className="col-md-12" data-aos="fade-up">
                                <div className="heading text-center">
                                    <h2>Salon Blogs</h2>
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
                                    <h3>Unraveling the Enduring Charm and Evolution of Barbershops as Societal and Cultural Hubs</h3>
                                     <p>Lorem ipsum labore aliqua tempor quis amet dolor duis reprehenderit exercitation in mollit esse anim reprehenderit velit voluptate consequat nisi in occaecat veniam enim officia sit et excepteur ullamco veniam quis aute voluptate tempor officia qui.</p>
                                     <Link className='custom-btn btn-8 mt-5 ms-1'><span>READ MORE</span></Link>
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
                                    <h3>Unraveling the Enduring Charm and Evolution of Barbershops as Societal and Cultural Hubs</h3>
                                     <p>Lorem ipsum labore aliqua tempor quis amet dolor duis reprehenderit exercitation in mollit esse anim reprehenderit velit voluptate consequat nisi in occaecat veniam enim officia sit et excepteur ullamco veniam quis aute voluptate tempor officia qui.</p>
                                     <Link className='custom-btn btn-8 mt-5 ms-1'><span>READ MORE</span></Link>
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
                                    <h3>Unraveling the Enduring Charm and Evolution of Barbershops as Societal and Cultural Hubs</h3>
                                     <p>Lorem ipsum labore aliqua tempor quis amet dolor duis reprehenderit exercitation in mollit esse anim reprehenderit velit voluptate consequat nisi in occaecat veniam enim officia sit et excepteur ullamco veniam quis aute voluptate tempor officia qui.</p>
                                     <Link className='custom-btn btn-8 mt-5 ms-1'><span>READ MORE</span></Link>
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
                                    <h3>Unraveling the Enduring Charm and Evolution of Barbershops as Societal and Cultural Hubs</h3>
                                     <p>Lorem ipsum labore aliqua tempor quis amet dolor duis reprehenderit exercitation in mollit esse anim reprehenderit velit voluptate consequat nisi in occaecat veniam enim officia sit et excepteur ullamco veniam quis aute voluptate tempor officia qui.</p>
                                     <Link className='custom-btn btn-8 mt-5 ms-1'><span>READ MORE</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
