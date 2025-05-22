import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "../style/style.css";
import { Link } from "react-router-dom";
import axiosInstance from "../../config/axiosInstance";
  
 
export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const domRef = useRef(null);
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    handleBlog();
  }, []);
 
  const handleBlog = async () => {
    try {
      const response = await axiosInstance.get("/blogs/all");
      setBlogs(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setLoading(false);
    }
  };
 
  if (loading) {
    return <div className="text-center py-5"><span class="loaders"></span></div>;
  }
 
  return (
    <div ref={domRef}>
      <section className="blog-section d-flex align-items-center">
        <div className="hero-overlay"></div>
        <div className="container text-center position-relative">
          <h2 className="hero-title">Blog</h2>
          <p className="text-white fw-bold">
            Welcome to the Su Stylo Blog, your go-to source for the latest
            trends, expert grooming tips, and salon industry insights.
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
 
          {blogs.length === 0 ? (
            <div className="text-center py-5">No blogs available</div>
          ) : (
            blogs.map((blog) => (
              <div className="row mt-5" key={blog._id} data-aos="fade-up">
                <div className="col-md-1">
                  <div className="blogBx">
                    <div className="blog_date">
                      <div className="b_month">
                        {new Date(blog.createdAt)
                          .toLocaleString("en-US", { month: "short" })
                          .toUpperCase()}
                      </div>
                      <div className="b_date">
                        {new Date(blog.createdAt).getDate()}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="blog_img">
                    <img
                    src="https://framerusercontent.com/images/y6h3MUMisOe3SS8MABsJ8tKikA.jpeg"
                      className="img-fluid"
                      alt={blog.title}
                     
                    />
                      {/* src={blog.imageUrl} */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="blog_content">
                    <h3>{blog?.title}</h3>
                    <p className="text-muted">{blog?.category}</p>
                    <p>{blog?.content}</p>
                    <Link
                      to={`/blogdetail/${blog._id}`}
                      className="custom-btn btn-8 mt-5 ms-1"
                    >
                      <span>READ MORE</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
 