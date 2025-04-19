import React from 'react';
import './Footer.css';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import axiosInstance from '../config/axiosInstance';

export default function Footer() {
    const emailHendler = async (event) => {
        event.preventDefault();
        const emailData = {
            email: event.target.email.value
        }
        try {
            const response = await axiosInstance.post('/subscribe', emailData)
            if (response.status === 200) {
                Swal.fire({
                    text: response.data.message,
                    icon: "success"
                });
                event.target.reset();
            }
        } catch (error) {
            console.log('error', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }
    }
    return (
        <>
            <footer className="footer-section">
                <div className="footer-overlay"></div>
                <div className="container FooterTop">
                    <div className='row'>
                        <div className='col-md-6 col-sm-12 d-md-flex gap-5'>
                            <div className='navLinks'>
                                <h2>Pages</h2>
                                <ul>
                                    <li>
                                        <Link to={'/about'} data-replace="About" className='mt-3 fw-bold'><span>About</span></Link>
                                    </li>
                                    <li>
                                        <Link to={'/services'} data-replace="Our Services" className='fw-bold'><span>Our Services</span></Link>
                                    </li>
                                    <li>
                                        <Link to={'/termsandcondition'} data-replace="Terms and Conditions" className='fw-bold'><span>Terms and Conditions</span></Link>
                                    </li>
                                    <li>
                                        <Link to={'/cancellationrefundpolicy'} data-replace="Cancellation/Refund Policy" className='fw-bold'><span>Cancellation/Refund Policy</span></Link>
                                    </li>
                                    <li>
                                        <Link to={'/privacypolicy'} data-replace="Privacy Policy" className='fw-bold'><span>Privacy Policy</span></Link>
                                    </li>
                                </ul>

                            </div>                          

                            <div className='navLinks'>
                                <h2>Services</h2>
                                <ul>
                                    <li>
                                        <Link to={'/services'} data-replace="Shaving" className='mt-3'><span className='fw-bold'>Shaving</span></Link>
                                    </li>
                                    <li>
                                        <Link to={'/services'} data-replace="Hair Spa"><span className='fw-bold'>Hair Spa</span></Link>
                                    </li>
                                    <li>
                                        <Link to={'/services'} data-replace="AboHair Cutut"><span className='fw-bold'>Hair Cut</span></Link>
                                    </li>
                                    <li>
                                        <Link to={'/services'} data-replace="Facial"><span className='fw-bold'>Facial</span></Link>
                                    </li>
                                    <li>
                                        <Link to={'/services'} data-replace="Trimming"><span className='fw-bold'>Trimming</span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='navLinks'>
                                <h2>Contact</h2>
                                <ul>
                                    <li className='d-flex gap-3 align-items-center'>
                                        <IoCallOutline style={{ color: "#fff", fontWeight: "500" }} />
                                        <a href="tel:+917297026119" data-replace="+91 72970 26119"><span className='fw-bold'>+91 72970 26119</span></a>
                                    </li>
                                    <li className='d-flex gap-3 align-items-center'>
                                        <CiMail style={{ color: "#fff", fontWeight: "500" }} />
                                        <a href="mailto:info@sustylo.com" data-replace="info@sustylo.com"><span className='fw-bold'>info@sustylo.com</span></a>
                                    </li>
                                    <li className='d-flex gap-3 align-items-center'>
                                        <GoClock style={{ color: "#fff", fontWeight: "500" }} />
                                        <a href='#' data-replace="Mon-Sun : 08:00 - 17:00" className='fw-bold'>Mon-Sun : 08:00 - 17:00</a>
                                    </li>
                                </ul>
                            </div>


                        </div>
                        <div className='col-md-6'>
                            <div className='rightSide'>
                                {/* <span className="logo">BLA<span className="text-warning">X</span>CUT</span> */}
                                <img src='/images/stylo_Logo.png' className='img-fluid mb-3' width={100} />
                                <p className='w-100'>Su Stylo revolutionizes salon bookings with seamless, premium grooming services. Effortlessly book top-tier salons, enjoy hassle free appointments, and experience luxury self care all at your convenience. Redefine beauty and grooming with just a tap!</p>
                                <label for="subscribeMAil" class="form-label">Email address</label>
                                <form class="mb-3 d-flex align-items-center" onSubmit={emailHendler}>
                                    <input type="email" name='email' class="form-control" id="subscribeMAil" placeholder="Your Mail..." />
                                    <button type='submit' className='SendBtn'>
                                        <IoIosSend />
                                        {/* <Link className='SendBtn'><IoIosSend /></Link> */}
                                    </button>
                                </form>
                                <div className='social_media'>
                                    <h3>Social Media</h3>

                                    <div className=' d-flex gap-3'>

                                        <Link to={'https://www.instagram.com/?hl=en'}><img src='/images/insta-logo.png' className='social-logo' width={34} /></Link>
                                        <img src='/images/youtube-logo.png' className='social-logo' width={34} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr style={{ borderColor: "#fff" }} />
                    <div className='row'>
                        <div className='col-md-12'>
                            <p className='mb-0 text-white position-relative text-center' style={{ zIndex: "99" }}>© 2025 Su Stylo. All Rights Reserved.</p>

                        </div>

                    </div>
                </div>
            </footer>

        </>
    )
}
