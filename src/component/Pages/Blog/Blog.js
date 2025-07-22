import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/style.css";
import { Link } from "react-router-dom";
import axiosInstance from "../../config/axiosInstance";
import SEO from "../../SEO";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const domRef = useRef(null);
  const limit = 6;
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetchBlogs(1);
  }, []);
  const fetchBlogs = async (currentPage = 1) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/blogs/all?page=${currentPage}&limit=${limit}`
      );
      console.log("API Response:", response);

      const newBlogs = response.data.blogs || [];
      const apiCurrentPage = response.data.page; // ✅ correct
      const apiTotalPages = response.data.totalPages; // ✅ correct

      setBlogs((prev) => [...prev, ...newBlogs]);

      if (apiTotalPages) {
        setTotalPages(apiTotalPages);

        if (apiCurrentPage >= apiTotalPages) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setHasMore(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 600 &&
        !loading &&
        hasMore
      ) {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchBlogs(nextPage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore, page]);

  const getSummary = (html, maxLength = 150) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    const text = div.textContent || div.innerText || "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const slugify = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
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
        <div className="container blog_Section" style={{position:"relative"}}>
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

          {blogs.length === 0 && !loading ? (
            <div className="text-center py-5">No blogs available</div>
          ) : (
            <div className="row gx-3">
              {blogs.map((blog) => (
                <div
                  className="col-md-4 mb-4"
                  key={blog._id}
                  data-aos="fade-up"
                >
                  <Link
                    to={`/blogdetail/${encodeURIComponent(blog?.slug)}`}
                    state={{ blog }}
                    className="text-decoration-none"
                  >
                    <div
                      className="border shadow-lg h-100 blog-card"
                      style={{
                        cursor: "pointer",
                        transition: "transform 0.3s",
                      }}
                    >
                      <div className="blog_img text-center pt-2">
                        <img
                          src={blog?.imageUrl}
                          className="img-fluid"
                          alt={blog?.title}
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
                          <p className="blog-summary readmore fs-6">
                            {getSummary(blog.content)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}

          {loading && (
            <div className="flex justify-center mt-6">
              <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {!hasMore && blogs.length > 0 && (
            <p className="text-center mt-4 text-muted">No more blogs to load</p>
          )}
        </div>
      </div>
    </div>
  );
}
