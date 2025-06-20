import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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

  const getSummary = (html, maxLength = 150) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    const text = div.textContent || div.innerText || "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  const slugify = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <span className="loaders"></span>
      </div>
    );
  }

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
            <div className="row gx-3">
              {blogs.map((blog) => (
                <div className="col-md-4 mb-4" key={blog._id} data-aos="fade-up">
                  <Link
                    to={{
                      pathname: `/blogdetail/${slugify(blog.title)}`,
                    }}
                    state={{ blog }}
                    className="text-decoration-none"
                  >
                    <div
                      className="border shadow-lg h-100 blog-card"
                      style={{ cursor: "pointer", transition: "transform 0.3s" }}
                    >
                      <div className="blog_img text-center pt-2">
                        <img
                          src={blog.imageUrl}
                          className="img-fluid"
                          alt={blog.title}
                          onError={(e) => {}}
                          style={{
                            maxHeight: "200px",
                            objectFit: "cover",
                            width: "100%",
                          }}
                        />
                      </div>
                      <div className="pt-4">
                        <div className="blog_content px-3 text-black">
                          <h3 className="fs-5">{blog?.title}</h3>
                          <p className="text-muted fs-6">
                            {blog?.category} |{" "}
                            {new Date(blog.createdAt)
                              .toLocaleString("en-US", { month: "short" })
                              .toUpperCase()}{" "}
                            {new Date(blog.createdAt).getDate()} | by{" "}
                            {blog.author || "admin"}
                          </p>
                          <p className="blog-summary readmore fs-6">{getSummary(blog.content)}</p>

                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
