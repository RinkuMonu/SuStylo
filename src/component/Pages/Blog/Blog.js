import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "../style/style.css";
import { Link } from "react-router-dom";
import axiosInstance from "../../config/axiosInstance";
import SEO from "../../SEO";

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

  // Function to extract plain text summary from HTML content
  const getSummary = (html, maxLength = 150) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    const text = div.textContent || div.innerText || '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <span class="loaders"></span>
      </div>
    );
  }
  const slugify = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')         // Replace spaces with dashes
    .replace(/-+/g, '-');         // Remove extra dashes
};


  return (
    <div ref={domRef}>
      <SEO />
      <section className="blog-section d-flex align-items-center">
        <div className="hero-overlay"></div>
        <div className="container text-center position-relative">
          <h1 className="hero-title">Blog</h1>
          <p className="text-white fw-bold">
            Welcome to the SuStylo Blog, your go-to source for the latest
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
                      src={blog.imageUrl}
                      className="img-fluid"
                      alt={blog.title}
                      onError={(e) => {
                       
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="blog_content">
                    <h3>{blog?.title}</h3>
                    <p className="text-muted">{blog?.category}</p>
                    <p className="blog-summary">
                      {getSummary(blog.content)}
                    </p>
                    <Link
                        to={`/blogdetail/${blog._id}/${slugify(blog.title)}`}
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