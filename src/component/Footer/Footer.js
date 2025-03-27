import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className="footer-section">
            <div className="hero-overlay"></div>
                <div className="container FooterTop">
                    <div className='row'>
                        <div className='col-md-6 d-flex gap-5'>
                            <div className='navLinks'>
                                <h2>Pages</h2>
                                <ul>
                                    <li>
                                        <Link to={'/about'} data-replace="About" className='mt-3'><span>About</span></Link>
                                    </li>
                                    <li>
                                        <Link to={'/services'} data-replace="Our Services"><span>Our Services</span></Link>
                                    </li>
                                    <li>
                                        <Link to={'/termsandcondition'} data-replace="Terms and Conditions"><span>Terms and Conditions</span></Link>
                                    </li>
                                    <li>
                                        <Link to={'/cancellationrefundpolicy'} data-replace="Cancellation/Refund Policy"><span>Cancellation/Refund Policy</span></Link>
                                    </li>
                                    <li>
                                        <Link to={'/privacypolicy'} data-replace="Privacy Policy"><span>Privacy Policy</span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='navLinks'>
                                <h2>Services</h2>
                                <ul>
                                    <li>
                                        <Link to={'/services'} data-replace="Shaving" className='mt-3'><span>Shaving</span></Link>
                                    </li>
                                    <li>
                                        <Link to={'/services'} data-replace="Hair Spa"><span>Hair Spa</span></Link>
                                    </li>
                                    <li>
                                        <Link to={'/services'} data-replace="AboHair Cutut"><span>Hair Cut</span></Link>
                                    </li>
                                    <li>
                                        <Link to={'/services'} data-replace="Facial"><span>Facial</span></Link>
                                    </li>
                                    <li>
                                        <Link to={'/services'} data-replace="Trimming"><span>Trimming</span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='navLinks'>
                                <h2>Contact</h2>
                                <ul>
                                    <li className='d-flex gap-3 align-items-center'>
                                        <IoCallOutline style={{ color: "#fff", fontWeight: "500" }} />
                                        <a href="tel:+917297026119" data-replace="+91 72970 26119"><span>+91 72970 26119</span></a>
                                    </li>
                                    <li className='d-flex gap-3 align-items-center'>
                                        <CiMail style={{ color: "#fff", fontWeight: "500" }} />
                                        <a href="mailto:info@sustylo.com" data-replace="info@sustylo.com"><span>info@sustylo.com</span></a>
                                    </li>
                                    <li className='d-flex gap-3 align-items-center'>
                                        <GoClock style={{ color: "#fff", fontWeight: "500" }} />
                                        <a href='#' data-replace="Mon-Sun : 08:00 - 17:00">Mon-Sun : 08:00 - 17:00</a>
                                    </li>
                                </ul>
                            </div>


                        </div>
                        <div className='col-md-6'>
                            <div className='rightSide'>
                                {/* <span className="logo">BLA<span className="text-warning">X</span>CUT</span> */}
                                <img src='./images/stylo_Logo.png' className='img-fluid mb-3' width={100} />
                                <p className='w-100'>Su Stylo revolutionizes salon bookings with seamless, premium grooming services. Effortlessly book top-tier salons, enjoy hassle free appointments, and experience luxury self care all at your convenience. Redefine beauty and grooming with just a tap!</p>
                                <label for="subscribeMAil" class="form-label">Email address</label>
                                <div class="mb-3 d-flex align-items-center">
                                    <input type="email" class="form-control" id="subscribeMAil" placeholder="Your Mail..." />
                                    <Link className='SendBtn'><IoIosSend /></Link>
                                </div>
                                <div className='social_media'>
                                    <h3>Social Media</h3>

                                    <div className=' d-flex gap-3'>
                                        <FaFacebook />
                                        <Link to={'https://www.instagram.com/?hl=en'}><FaInstagram /></Link>
                                        <FaYoutube />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr style={{borderColor:"#fff"}} />
                    <div className='row'>
                        <div className='col-md-12'>
                            <p className='mb-0 text-white position-relative text-center' style={{zIndex:"99"}}>© 2025 Su Stylo. All Rights Reserved.</p>

                        </div>

                    </div>
                </div>
            </footer>

        </>
    )
}
