"use client"

import { useState, useEffect, useRef } from "react"
import AOS from "aos"
import WOW from "wow.js"
import "./Blogdetails.css"
import { useNavigate, useParams } from "react-router-dom"
import axiosInstance from "../../config/axiosInstance"
import { Helmet } from "react-helmet-async"

function BlogsDetails() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const domRef = useRef(null)
  
  // Blog states
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [blogId, setBlogId] = useState(null)
  
  // Comment states
  const [isVisible, setVisible] = useState(false)
  const [comment, setComment] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  })
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [comments, setComments] = useState([])
  const [commentsLoading, setCommentsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize animations and intersection observer
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

  // Handle comment input changes
  const handleCommentChange = (e) => {
    const { name, value } = e.target
    setComment(prev => ({ ...prev, [name]: value }))
  }

  // Submit comment form
  const handleCommentSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")
    
    try {
      // Validate required fields
      if (!comment.name || !comment.email || !comment.message) {
        throw new Error("Name, email, and message are required")
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(comment.email)) {
        throw new Error("Please enter a valid email address")
      }

      await axiosInstance.post(`/blogs/${blogId}/comments`, comment)
      setSubmitSuccess(true)
      
      // Refresh comments after successful submission
      await fetchComments(blogId)
      
      // Reset form
      setComment({
        name: "",
        email: "",
        number: "",
        message: "",
      })
      
      // Hide success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000)
    } catch (error) {
      console.error("Comment submission error:", error)
      setSubmitError(error.response?.data?.message || error.message || "Failed to submit comment")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Fetch comments for a blog
  const fetchComments = async (id) => {
    try {
      setCommentsLoading(true)
      const response = await axiosInstance.get(`/blogs/comments/approved/${id}`)
      setComments(response.data || [])
    } catch (error) {
      console.error("Error fetching comments:", error)
      setComments([])
    } finally {
      setCommentsLoading(false)
    }
  }

  // Fetch blog details and associated comments
  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axiosInstance.get(`/blogs/slug?slug=${slug}`)
        setBlog(response.data)
        setBlogId(response.data._id)
        await fetchComments(response.data._id)
      } catch (err) {
        console.error("Error fetching blog details:", err)
        setError(err.response?.data?.message || err.message || "Failed to load blog details")
      } finally {
        setLoading(false)
      }
    }
    
    fetchBlogDetails()
  }, [slug])

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    })
  }

  // Loading state
  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="text-center py-5">
        <div className="alert alert-danger">{error}</div>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/blogs")}>
          Back to Blog List
        </button>
      </div>
    )
  }

  // Blog not found state
  if (!blog) {
    return (
      <div className="text-center py-5">
        <div className="alert alert-warning">Blog not found</div>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/blogs")}>
          Back to Blog List
        </button>
      </div>
    )
  }

return (
  <>
    <Helmet>
      <title>{blog?.metaTitle || blog?.title || "Blog - SuStylo"}</title>
      <meta
        name="description"
        content={
          blog?.metaDescription ||
          blog?.summary ||
          blog?.content?.replace(/<[^>]+>/g, '').slice(0, 150)
        }
      />
      {blog?.metaKeywords?.length > 0 && (
        <meta name="keywords" content={blog?.metaKeywords?.join(", ")} />
      )}
    </Helmet>

    <div className={`${isVisible ? "is-visible overflow-hidden" : "overflow-hidden"}`} ref={domRef}>
      <section className="blogs-section d-flex align-items-center">
        <div className="container text-center position-relative">
          <h1 className="hero-title">Blog</h1>
          <p className="text-white fw-bold">
            Welcome to the SuStylo Blog, your go-to source for the latest trends, 
            expert grooming tips, and salon industry insights.
          </p>
        </div>
      </section>

      <div className="content-section">
        <div className="blogs_deatils mb-0">
          <div className="container">
            <div className="row">
              {/* Main Content Column */}
              <div className="col-md-8 col-sm-12">
                {/* Blog Image */}
                <div className="title-img">
                  <img
                    src={blog?.imageUrl}
                    className="img-fluid"
                    alt={blog?.title}
                    loading="lazy"
                  />
                </div>

                {/* Blog Meta Info */}
                <div className="blogs-user pt-4">
                  <span>
                    <i className="bi bi-person me-2"></i>by {blog?.author || "admin"}
                  </span>
                  <span>
                    <i className="bi bi-calendar-event me-2"></i>
                    {formatDate(blog?.date) || "July 5, 2024"}
                  </span>
                </div>

                {/* Blog Content */}
                <div className="blogs-main_content pt-3">
                  <h1 className="bold-heading">
                    {blog?.title ||
                      "Unraveling the Enduring Charm and Evolution of Barbershops"}
                  </h1>
                  <div
                    className="blogs-content pt-3"
                    dangerouslySetInnerHTML={{ __html: blog?.content }}
                  />
                </div>

                <hr />

                {/* Comments Section */}
                <div className="comment_section mt-5">
                  <div className="comment-heading">
                    <h5>Comments ({comments?.length})</h5>
                  </div>

                  {/* Comments List */}
                  {commentsLoading ? (
                    <div className="text-center py-3">
                      <div className="spinner-border spinner-border-sm text-primary" role="status">
                        <span className="visually-hidden">Loading comments...</span>
                      </div>
                    </div>
                  ) : comments?.length > 0 ? (
                    comments?.map((comment) => (
                      <div key={comment?._id} className="d-flex mb-4">
                        <div className="user-img">
                          <img 
                            src="./images/user.png" 
                            alt="User" 
                            className="img-fluid" 
                            width={50} 
                            loading="lazy"
                          />
                        </div>
                        <div className="user-comment">
                          <h6>{comment?.name}</h6>
                          <span>{formatDate(comment?.createdAt)}</span>
                          <p>{comment?.message}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="alert alert-light">No comments yet. Be the first to comment!</div>
                  )}

                  {/* Comment Form */}
                  <div className="leave_comment">
                    <h5>Leave a comment:</h5>
                    {submitSuccess && (
                      <div className="alert alert-success">
                        Comment submitted successfully!
                      </div>
                    )}
                    {submitError && (
                      <div className="alert alert-danger">
                        {submitError}
                      </div>
                    )}
                    <div className="contact_frm bookingfrm" data-aos="zoom-out">
                      <form onSubmit={handleCommentSubmit}>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="username" className="form-label">
                                Name *
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="name"
                                placeholder="Your Full Name"
                                value={comment?.name}
                                onChange={handleCommentChange}
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="exampleFormControlInput1" className="form-label">
                                Email *
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                name="email"
                                placeholder="name@example.com"
                                value={comment?.email}
                                onChange={handleCommentChange}
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="mobile" className="form-label">
                                Mobile
                              </label>
                              <input
                                type="tel"
                                className="form-control"
                                id="mobile"
                                name="number"
                                placeholder="01234567896"
                                value={comment?.number}
                                onChange={handleCommentChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="usermsg" className="form-label">
                                Your Message *
                              </label>
                              <textarea
                                className="form-control"
                                id="usermsg"
                                name="message"
                                rows="9"
                                placeholder="Type Here.."
                                value={comment?.message}
                                onChange={handleCommentChange}
                                required
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button 
                              type="submit" 
                              className="btn-8 custom-btn ms-0 mt-5"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? (
                                <>
                                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                  Submitting...
                                </>
                              ) : (
                                <span>Submit</span>
                              )}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Column */}
              <div className="col-md-4 col-sm-12 mb-3">
                {/* Search Widget */}
                <div className="rightSide_content">
                  <div className="search-box">
                    <i className="bi bi-search"></i>
                    <input 
                      type="search" 
                      placeholder="Type to search..." 
                    />
                  </div>
                </div>

                {/* Categories Widget */}
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

                {/* Recent Posts Widget */}
                <div className="rightSide_content">
                  <div className="recentPost">
                    <p>Recent Posts</p>
                    <hr />
                    <div className="recent-post-item mt-5 d-block d-lg-flex">
                      <div className="post-img">
                        <img 
                          src="./images/2149230917.jpg" 
                          alt="Recent Post" 
                          loading="lazy"
                        />
                      </div>
                      <div className="post-date">
                        <span>
                          <i className="bi bi-calendar-event me-2"></i> July 5, 2024
                        </span>
                        <div className="blogs-title">
                          <h6>AEPS: Transforming Digital Banking in India</h6>
                        </div>
                      </div>
                    </div>

                    <div className="recent-post-item mt-5 d-block d-lg-flex">
                      <div className="post-img">
                        <img 
                          src="./images/2149230917.jpg" 
                          alt="Recent Post" 
                          loading="lazy"
                        />
                      </div>
                      <div className="post-date">
                        <span>
                          <i className="bi bi-calendar-event me-2"></i> July 5, 2024
                        </span>
                        <div className="blogs-title">
                          <h6>BBPS: The Future of Digital Bill Payments</h6>
                        </div>
                      </div>
                    </div>

                    <div className="recent-post-item mt-5 d-block d-lg-flex">
                      <div className="post-img">
                        <img 
                          src="./images/2149230917.jpg" 
                          alt="Recent Post" 
                          loading="lazy"
                        />
                      </div>
                      <div className="post-date">
                        <span>
                          <i className="bi bi-calendar-event me-2"></i> July 5, 2024
                        </span>
                        <div className="blogs-title">
                          <h6>Six 'what ifs' that could transform digital agency</h6>
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
  </>
)

}

export default BlogsDetails