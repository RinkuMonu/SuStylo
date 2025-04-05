import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import { Link } from "react-router-dom";

import "./Blogdetails.css";
function BlogsDetails() {
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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          </div>
        </section>
        <div className="content-section">
          <div className="blogs_deatils">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-12 mb-3">
                  <div className="title-img">
                    <img src="./images/9052.jpg" className="img-fluid" />
                  </div>
                  <div className="blog-user">
                    <a href="#"><i className="bi bi-person me-2"></i>by admin</a>
                    <a href="#"><i className="bi bi-calendar-event me-2"></i>July 5, 2024</a>
                  </div>
                  <div className="blog-main_content">
                    <b className="bold-heading">Unraveling the Enduring Charm and Evolution of Barbershops as Societal and Cultural Hubs</b>
                    <p>
                      Lorem ipsum labore aliqua tempor quis amet dolor duis reprehenderit exercitation in mollit esse anim reprehenderit velit voluptate consequat nisi in occaecat veniam enim officia sit et excepteur ullamco veniam quis aute voluptate tempor officia qui.
                      Lorem ipsum labore aliqua tempor quis amet dolor duis reprehenderit exercitation in mollit esse anim reprehenderit velit voluptate consequat nisi in occaecat veniam enim officia sit et excepteur ullamco veniam quis aute voluptate tempor officia qui.
                      Lorem ipsum labore aliqua tempor quis amet dolor duis reprehenderit exercitation in mollit esse anim reprehenderit velit voluptate consequat nisi in occaecat veniam enim officia sit et excepteur ullamco veniam quis aute voluptate tempor officia qui.
                    </p>
                  </div>
                  <hr />
                  <div className="comment_section mt-5">
                    <div className="comment-heading">
                      <h5>Comments:</h5>
                    </div>
                    <div className="d-flex">
                      <div className="user-img">
                        <img src="./images/user.png" alt="" className="img-fluid" width={50} />
                      </div>
                      <div className="user-comment">
                        <h6>Ricky Smith</h6>
                        <span>July 5, 2024</span>
                        <p>I read the blog &amp; found it focused on a single task. Multitasking is a myth. When tasks pile up, our brain urges us to handle multiple tasks.</p>

                      </div>
                      <div className="reply-Btn">
                        <a href="#">Reply</a>
                      </div>
                    </div>
                    <div className="reply-users">
                      <div className="d-flex">
                        <div className="user-img">
                          <img src="./images/user.png" alt="" className="img-fluid" width={50} />
                        </div>
                        <div className="user-comment">
                          <h6>vikash Smith</h6>
                          <span>July 5, 2024</span>
                          <p>I read the blog &amp; found it focused on a single task. Multitasking is a myth. When tasks pile up, our brain urges us to handle multiple tasks.</p>

                        </div>
                        <div className="reply-Btn">
                          <a href="#">Reply</a>
                        </div>
                      </div>
                    </div>
                    <div className="leave_comment">
                      <h5>Leave a comments:</h5>
                      <div className="">
                        <div className="contact_frm bookingfrm" data-aos="zoom-out">
                          <form>
                            <div className="row">

                              <div className="col-md-6">
                                <div class="mb-3">
                                  <label for="username" class="form-label">Name</label>
                                  <input type="text" class="form-control" id="username" placeholder="Your Full Name" />
                                </div>
                                <div class="mb-3">
                                  <label for="exampleFormControlInput1" class="form-label">Email</label>
                                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                  <label for="mobile" class="form-label">Mobile</label>
                                  <input type="number" class="form-control" id="mobile" placeholder="01234567896" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div class="mb-3">
                                  <label for="usermsg" class="form-label">Your Message</label>
                                  <textarea class="form-control" id="usermsg" rows="9" placeholder="Type Here.."></textarea>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <button className="btn-8 custom-btn ms-0 mt-5"><span>Submit</span></button>
                              </div>
                            </div>
                          </form>

                        </div>
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
                      <div className="recent-post-item mt-5">
                        <div className="post-img">
                          <img src="./images/2149230917.jpg" alt="" />
                        </div>
                        <div className="post-date">
                          <span><i className="bi bi-calendar-event me-2"></i> July 5, 2024</span>
                          <div className="blog-title">
                            <h6>AEPS: Transforming Digital Banking in India
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="recent-post-item mt-5">
                        <div className="post-img">
                          <img src="./images/2149230917.jpg" alt="" />
                        </div>
                        <div className="post-date">
                          <span><i className="bi bi-calendar-event me-2"></i> July 5, 2024</span>
                          <div className="blog-title">
                            <h6>BBPS: The Future of Digital Bill Payments in India
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="recent-post-item mt-5">
                        <div className="post-img">
                          <img src="./images/2149230917.jpg" alt="" />
                        </div>
                        <div className="post-date">
                          <span><i className="bi bi-calendar-event me-2"></i> July 5, 2024</span>
                          <div className="blog-title">
                            <h6>Six ‘what ifs’ that could transformdigital agency</h6>
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
  );
}

export default BlogsDetails;