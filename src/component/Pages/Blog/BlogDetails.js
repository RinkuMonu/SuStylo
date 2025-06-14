"use client"

import { useState, useEffect, useRef } from "react"
import AOS from "aos"
import WOW from "wow.js"
import "./Blogdetails.css"
import { useNavigate, useParams } from "react-router-dom"
import axiosInstance from "../../config/axiosInstance"

function BlogsDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const domRef = useRef(null)

  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isVisible, setVisible] = useState(false)
  const [comment, setComment] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  })
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [comments, setComments] = useState([])
  const [commentsLoading, setCommentsLoading] = useState(true)

  useEffect(() => {
    new WOW().init()
    AOS.init({ duration: 1000 })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting))
    })

    if (domRef.current) observer.observe(domRef.current)

    return () => {
      if (domRef.current) observer.unobserve(domRef.current)
    }
  }, [])

  // Fetch comments for the blog post
  useEffect(() => {
    const fetchComments = async () => {
      if (!id) return

      setCommentsLoading(true)
      try {
        const response = await axiosInstance.get(`/blogs/${id}/comments`)
        setComments(response.data || [])
      } catch (err) {
        console.error("Error fetching comments:", err)
      } finally {
        setCommentsLoading(false)
      }
    }

    fetchComments()
  }, [id])

  const handleCommentChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value })
  }

  const handleCommentSubmit = async (e) => {
    e.preventDefault()
    try {
      await axiosInstance.post(`/blogs/${id}/comments`, comment)
      setSubmitSuccess(true)

      // Refresh comments after successful submission
      const response = await axiosInstance.get(`/blogs/${id}/comments`)
      setComments(response.data || [])

      setComment({
        name: "",
        email: "",
        number: "",
        message: "",
      })
    } catch (error) {
      console.error("Comment submission error:", error)
      setSubmitSuccess(false)
    }
  }

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axiosInstance.get(`/blogs/${id}`)
        if (!response.data) {
          throw new Error("Blog not found")
        }
        setBlog(response.data)
      } catch (err) {
        console.error("Error fetching blog details:", err)
        setError(err.message || "Failed to load blog details")
        navigate("/blog")
      } finally {
        setLoading(false)
      }
    }

    fetchBlogDetails()
  }, [id, navigate])

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-5">
        <div className="alert alert-danger">{error}</div>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/blog")}>
          Back to Blog List
        </button>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="text-center py-5">
        <div className="alert alert-warning">Blog not found</div>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/blog")}>
          Back to Blog List
        </button>
      </div>
    )
  }

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  return (
    <div className={` ${isVisible ? "is-visible overflow-hidden" : "overflow-hidden"}`} ref={domRef}>
      <section className="blog-section d-flex align-items-center">
        <div className="hero-overlay"></div>

        <div className="container text-center position-relative">
          <h1 className="hero-title">Blog</h1>
          <p className="text-white fw-bold">
            Welcome to the SuStylo Blog, your go-to source for the latest trends, expert grooming tips, and salon
            industry insights.
          </p>
        </div>
      </section>

      <div className="content-section">
        <div className="blogs_deatils mb-0">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-12 ">
                <div className="title-img">
                  <img
                    src={blog.image || "https://framerusercontent.com/images/y6h3MUMisOe3SS8MABsJ8tKikA.jpeg"}
                    className="img-fluid"
                    alt={blog.title}
                  />
                </div>
                <div className="blog-user">
                  <a>
                    <i className="bi bi-person me-2"></i>by {blog.author || "admin"}
                  </a>
                  <a>
                    <i className="bi bi-calendar-event me-2"></i>
                    {blog.date || "July 5, 2024"}
                  </a>
                </div>
                <div className="blog-main_content">
                  <b className="bold-heading">
                    {blog.title ||
                      "Unraveling the Enduring Charm and Evolution of Barbershops as Societal and Cultural Hubs"}
                  </b>
                  <p>
                    {blog.content ||
                      "Lorem ipsum labore aliqua tempor quis amet dolor duis reprehenderit exercitation in mollit esse anim reprehenderit velit voluptate consequat nisi in occaecat veniam enim officia sit et excepteur ullamco veniam quis aute voluptate tempor officia qui.".repeat(
                        3,
                      )}
                  </p>
                </div>

                <hr />

                <div className="comment_section mt-5">
                  <div className="comment-heading">
                    <h5>Comments:</h5>
                  </div>

                  {commentsLoading ? (
                    <div className="text-center py-3">
                      <div className="spinner-border spinner-border-sm text-primary" role="status">
                        <span className="visually-hidden">Loading comments...</span>
                      </div>
                    </div>
                  ) : comments.length > 0 ? (
                    comments.map((comment, index) => (
                      <div key={comment._id || index} className="d-flex mb-4">
                        <div className="user-img">
                          <img src="./images/user.png" alt="" className="img-fluid" width={50} />
                        </div>
                        <div className="user-comment">
                          <h6>{comment.name}</h6>
                          <span>{formatDate(comment.createdAt)}</span>
                          <p>{comment.message}</p>
                        </div>
                        {/* <div className="reply-Btn">
                          <a href="#">Reply</a>
                        </div> */}
                      </div>
                    ))
                  ) : (
                    <div className="alert alert-light">No comments yet. Be the first to comment!</div>
                  )}

                  <div className="leave_comment">
                    <h5>Leave a comment:</h5>
                    {submitSuccess && <div className="alert alert-success">Comment submitted successfully!</div>}
                    <div className="contact_frm bookingfrm" data-aos="zoom-out">
                      <form onSubmit={handleCommentSubmit}>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="username" className="form-label">
                                Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="name"
                                placeholder="Your Full Name"
                                value={comment.name}
                                onChange={handleCommentChange}
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="exampleFormControlInput1" className="form-label">
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                name="email"
                                placeholder="name@example.com"
                                value={comment.email}
                                onChange={handleCommentChange}
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="mobile" className="form-label">
                                Mobile
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="mobile"
                                name="number"
                                placeholder="01234567896"
                                value={comment.number}
                                onChange={handleCommentChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="usermsg" className="form-label">
                                Your Message
                              </label>
                              <textarea
                                className="form-control"
                                id="usermsg"
                                name="message"
                                rows="9"
                                placeholder="Type Here.."
                                value={comment.message}
                                onChange={handleCommentChange}
                                required
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button type="submit" className="btn-8 custom-btn ms-0 mt-5">
                              <span>Submit</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 mb-3">
                <div className="rightSide_content">
                  <div className="search-box">
                    <i className="bi bi-search"></i>
                    <input type="search" placeholder="Type to search..." />
                  </div>
                </div>

                <div className="rightSide_content">
                  <div className="categories-heading">
                    <p>Blog Categories</p>
                    <hr />
                    <ul className="ps-0">
                      <li>
                        <a href="#">Uncategorized (78)</a>
                      </li>
                      <li>
                        <a href="#">Technology (05)</a>
                      </li>
                      <li>
                        <a href="#">Business & Marketing (23)</a>
                      </li>
                      <li>
                        <a href="#">Digital Agency (10)</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rightSide_content">
                  <div className="recentPost">
                    <p>Recent Post</p>
                    <hr />
                    <div className="recent-post-item mt-5 d-block d-lg-flex">
                      <div className="post-img">
                        <img src="./images/2149230917.jpg" alt="" />
                      </div>
                      <div className="post-date">
                        <span>
                          <i className="bi bi-calendar-event me-2"></i> July 5, 2024
                        </span>
                        <div className="blog-title">
                          <h6>AEPS: Transforming Digital Banking in India</h6>
                        </div>
                      </div>
                    </div>

                    <div className="recent-post-item mt-5 d-block d-lg-flex">
                      <div className="post-img">
                        <img src="./images/2149230917.jpg" alt="" />
                      </div>
                      <div className="post-date">
                        <span>
                          <i className="bi bi-calendar-event me-2"></i> July 5, 2024
                        </span>
                        <div className="blog-title">
                          <h6>BBPS: The Future of Digital Bill Payments in India</h6>
                        </div>
                      </div>
                    </div>

                    <div className="recent-post-item mt-5 d-block d-lg-flex">
                      <div className="post-img">
                        <img src="./images/2149230917.jpg" alt="" />
                      </div>
                      <div className="post-date">
                        <span>
                          <i className="bi bi-calendar-event me-2"></i> July 5, 2024
                        </span>
                        <div className="blog-title">
                          <h6>Six 'what ifs' that could transformdigital agency</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogsDetails
