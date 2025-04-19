import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import "../style/style.css";
import { Link } from "react-router-dom";
import axiosInstance from "../../config/axiosInstance";
import { logDOM } from "@testing-library/dom";

export default function Blog() {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    new WOW().init();
  }, []);
  useEffect(() => {
    handleBlog();
    AOS.init({ duration: 1000 });
  }, []);
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);
  const handleBlog = async () => {
    try {
      const response = await axiosInstance.get("/blogs/all");
      setBlog(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
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
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        <section className="blog-section d-flex align-items-center">
          <div className="hero-overlay"></div>

          <div className="container text-center position-relative">
            <h2 className="hero-title">Blog</h2>
            <p className="text-white fw-bold">
              Welcome to the Su Stylo Blog, your go-to source for the latest
              trends, expert grooming tips, and salon industry insights. Whether
              you're looking for hairstyling inspiration, skincare advice, or
              the best self-care routines, we’ve got you covered. Stay updated,
              stay stylish!
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
                <div
                  className="de-separator"
                  style={{
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            </div>
            {blog.map((data) => {
              return (
                <div className="row mt-5" key={data._id}>
                  <div className="col-md-1" data-aos="fade-right">
                    <div className="blogBx">
                      <div className="blog_date">
                        <div className="b_month">
                          {new Date(data.createdAt)
                            .toLocaleString("en-US", { month: "short" })
                            .toUpperCase()}
                        </div>
                        <div className="b_date">
                          {new Date(data.createdAt).getDate()}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5" data-aos="fade-right">
                    <div className="blog_img">
                      <img src={data.imageUrl} className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="fade-left">
                    <div className="blog_content">
                      <h3>{data.title}</h3>
                      <p>{data.content}</p>
                      <Link
                        to={"/blogdetail"}
                        className="custom-btn btn-8 mt-5 ms-1"
                      >
                        <span>READ MORE</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );

