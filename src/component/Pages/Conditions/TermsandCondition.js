import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import '../style/style.css'
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function TermsandCondition() {
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
                <section className="termscondition-section d-flex align-items-center">
                    {/* <div className="hero-overlay"></div> */}
                    <div className="container text-center position-relative">
                        {/* <h2 className="hero-title">Terms and Conditions</h2> */}
                    </div>
                </section>
                <div class="de-gradient-edge-bottom" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
            </div>
            <div className="content-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="gallery_heading text-center">
                                <h2>Terms and Conditions</h2>
                            </div>
                            <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
                        </div>
                        <div className="col-md-12">
                            <div className="clearfix companydetails">
                                <img
                                    src='./images/salonbanner.jpg'
                                    className="img-fluid col-md-6 float-md-end mb-3 ms-md-3 img-width mt-5"
                                    alt="policy img"
                                />
                                <h2 className="my-3">SU STYLO</h2>
                                <p className="mb-3"> Su Stylo Salon is an online platform providing at-home and in-salon grooming services (collectively referred to as “Services”). It is owned and operated by Su Stylo Private Limited, a company registered under the Companies Act, 2013.
                                </p>
                                <p className="mb-3">These Terms and Conditions (“T&Cs”) outline the complete terms applicable to users, clients, and visitors of the platform. By using our services, you agree to comply with these terms in their entirety. Additional terms may apply to specific services, which shall be deemed incorporated into these T&Cs.
                                </p>
                                <p>By accessing or using the platform, you acknowledge and agree to these terms, including our Privacy Policy. If you do not agree with any part of these terms, please refrain from using our services.
                                </p>
                                <p>Su Stylo reserves the right to modify these terms at any time. Any changes will take effect immediately upon being posted on the platform. Continued use of the services implies acceptance of the revised terms.
                                </p>
                                <p>This document is an electronic record under the Information Technology Act, 2000, and applicable laws. It is generated electronically and does not require physical or digital signatures. The following T&Cs govern the use of our platform and services.
                                </p>

                            </div>
                        </div>
                        <hr className="mt-5" />
                        <div className="col-md-12 mt-4">
                            <div className="gallery_heading text-left mb-2">
                                <h2>1. DEFINITIONS
                                </h2>
                            </div>
                            <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                            <b className="my-4">Unless repugnant to the context, the terms used in these T&Cs have the following meaning:</b>
                            <div className="definition_list mt-4">
                                <ul>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Account:</b> means the account created by a User on the Platform at the time of registration.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Affiliate:</b> in relation to the Company, shall mean and include any entity that directly or indirectly controls, is controlled by, or is under common control with the Company.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Appointment Slot:</b> means a specific time and date allocated to the User, contingent upon the Service Provider’s availability and the User’s selection during the booking process</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Booking:</b>  means an accepted and confirmed reservation of an Appointment Slot by the User for availing the Services through the Platform.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Booking Fee:</b> means the nominal amount paid by the Client for securing the booking through the Platform.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Client:</b> means any User that makes a successful booking through the Platform and has paid a nominal Booking Fee.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Convenience Fee:</b> means the fee charged for the convenience of booking appointment slots through the Platform.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Force Majeure Event:</b>  includes natural disasters, lockdowns, strikes, network failures, and other uncontrollable events that affect service delivery.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Platform Fee:</b> means the fee charged and retained by the Company for facilitating the booking process and maintaining the Platform.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Services:</b> collectively refer to both the Salon-at-Home and At-Salon services offered by the Service Professionals as listed on the Platform.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Service Professionals:</b> means the individual professionals engaged by the Company for rendering Services to the Clients.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Service Fee:</b> means the total fee payable by the Client for availing the Services, inclusive of taxes, Platform Fee, and Convenience Fee.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Transaction Fee:</b> means the costs associated with processing and transferring payments from the Client to the Service Professional.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>User:</b> means any individual who has registered on the Platform and created an account.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Visitor:</b> means any individual who is not a User and is solely visiting the Platform without availing any Services.</li>
                                </ul>

                            </div>

                        </div>
                        <hr className="mt-5" />
                        <div className="col-md-12 ">
                            <div className="gallery_heading text-left mb-2">
                                <h2>2. ACCEPTANCE OF TERMS
                                </h2>
                            </div>
                            <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                            <b>The Visitor, User, and/or Client is deemed to have read, understood, and accepted the T&Cs in their entirety, as well as the Privacy Policy available on the Platform if they:</b>
                            <p style={{ fontSize: "16px" }} className="my-3">The Visitor, User, and/or Client acknowledges that BY ACCESSING AND USING THE PLATFORM, THEY AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS. If the Visitor, User, and/or Client does not agree with any of these terms, they shall not access the Platform or avail of the Services.
                            </p>
                            <div className="definition_list mt-4">
                                <ul>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>These T&Cs define and establish a relationship between the Company and the Visitor, User, and/or Client, where the latter acts as a service recipient.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>These Terms and Conditions expressly supersede all prior agreements between the Company and the Visitor, User, and/or Client.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Access to the Platform and the offer of Services is conditional upon the irrevocable consent and acceptance of these Terms and any additional agreements required by the Company.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>By accessing the Platform, the Visitor, User, and/or Client agrees to receive communication from the Company, including promotional, marketing, and transactional messages through email, SMS, and other digital mediums.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>The Client represents that they are lawfully capable of entering into contracts.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>The Client acknowledges that they are solely responsible for the data they upload or transmit through the Platform and its consequences.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>The Client warrants that they have all necessary rights and permissions to upload data on the Platform and grants the Company an irrevocable license to use such data.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>The Client agrees to be solely responsible for any breach of these Terms and acknowledges the consequences of such a breach, including any losses incurred by the Company.</li>
                                </ul>

                            </div>
                        </div>
                        <hr className="mt-5" />
                        <div className="col-md-12">
                            <div className="gallery_heading text-left mb-2">
                                <h2>3. CONDITIONS FOR USE
                                </h2>
                            </div>
                            <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                            <p style={{ fontSize: "16px" }}>You Must Be At Least 18 Years Of Age Or Higher, In Order To Access, Register, And Use The Platform. By Accessing, Registering, And Using The Platform, You Warrant That You Are 18 Years Of Age Or Above, And Are Competent To Contract In The Manner Set Forth In Section 11 Of The Indian Contract Act 1872, And Hence You Have The Right, Authority And Capacity To Use The Platform, And You Therefore Agree To Abide By The Agreement. You Acknowledge That The Company Does Not Have The Responsibility To Ensure That You Conform To The Aforesaid Eligibility Criteria. It Shall Be Your Sole Responsibility To Ensure That You Meet The Required Eligibility. The Company Will Not Be Responsible For Any Consequences That May Arise Due To Misuse Of The Platform, By Any Person Including A Minor, Registering, And Using The Platform. Through Your Use Of The Platform And Its Features, You Warrant That The Data Provided By You, Including Your Name, Date Of Birth, And Age Is Accurate And Complete. Notwithstanding The Above, We Reserve The Right To Suspend Your Account And/Or Refuse To Provide You With Access To The Platform If It Is Discovered That You Are Under The Age Of 18 Years.</p>
                            <p style={{ fontSize: "16px" }}>Parental Supervision And Consent For Minors: If You Are Under The Age Of 18 Years, You May Only Access And Use The Platform Under The Supervision And With The Explicit Consent Of A Parent Or Legal Guardian. By Accessing, Registering, And Using The Platform As A Minor, You Warrant That You Have Obtained The Necessary Consent From Your Parent Or Legal Guardian. Additionally, Your Parent Or Legal Guardian Must Oversee And Take Responsibility For Any Bookings Made And Payments Processed Through The Platform On Your Behalf. The Company Shall Not Be Liable For Any Actions Or Consequences Arising From The Use Of The Platform By Minors Without Proper Parental Supervision And Consent. It Is The Responsibility Of Parents Or Legal Guardians To Ensure That Minors Use The Platform In Accordance With Applicable Laws And Regulations, And The Company Shall Not Be Held Responsible For Any Misuse Of The Platform By Minors</p>
                            <p style={{ fontSize: "16px" }}><b>OUR SERVICES :</b> Through Our Platform, We Specialize In Offering Both, ‘Salon-At-Homeʼ And ‘At-Salonʼ Services. Whether You Prefer The Convenience Of Your Own Home Or The Atmosphere Of Our Partnered Salons, Our Professional Stylists And Beauty Experts Are Dedicated To Providing Top-Quality Service Tailored To Your Needs. Our Services Include:
                                Haircuts, Styling, Coloring, And Treatments. Manicures And Pedicures. Makeup Application And Beauty Consultations. Waxing And Threading. Facials, Clean-Ups, And Other Beauty/Skincare Treatments. Special Occasion Styling For Events And Celebrations.
                            </p>
                            <p style={{ fontSize: "16px" }}>We Are Dedicated To Providing Convenient, High-Quality Salon Experiences Tailored To Your Preferences. Whether You Opt For Our ‘Salon-At-Homeʼ Service Or Prefer Visiting Our Partnered Salons, Our Goal Remains The Same: Ensuring You Look And Feel Your Best, With The Utmost Convenience And Comfort. With Booking At Your Fingertips, You Can Now Easily Schedule Your Appointment At The Time That Suits You The Best, Subject To Availability And Our Service Professionalʼs Schedule.</p>
                            <p style={{ fontSize: "16px" }}>CONDITIONS FOR SERVICES AND THE BOOKING PROCESS In Order To Avail The Services Listed On The Platform, You Shall Be Required To Fulfill The Following Conditions</p>
                        </div>
                        <hr className="mt-5" />
                        <div className="col-md-12">
                            <div className="gallery_heading text-left mb-2">
                                <h2>4 . CREATION OF ACCOUNT ON THE PLATFORM
                                </h2>
                            </div>
                            <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                            <p style={{ fontSize: "16px" }}>Registration On The Platform: In Order To Access And Use Our Services And To Make A Booking Request, You Must First Download And Install The Billu Salon App, And Proceed To Create Your Account. For Creation Of The Account, You Will Be Prompted To Provide Your Mobile Number, Which Will Serve As Your Username. An OTP Will Be Generated And Sent To Your Mobile Number For Verification. Once Verified, You Will Be Required To Provide One- Time Basic Identification Information, Including Your Full Name, Email Address, Age Bracket, And Gender (Male/Female/Others). Each Time You Wish To Use Our App, You Will Be Prompted To Provide Your Mobile Number, And Receive A New OTP For Authentication Purposes</p>
                            <p style={{ fontSize: "16px" }}>Verification Of Email Address In Profile Section: After Providing Your Email Address During The Registration Process, For Verification Purposes, You Will Need To Navigate To The Profile Section And Click On ‘Verify Your Email Addressʼ. Subsequently, An OTP Will Be Sent To The Provided Email Address. This OTP Will Remain Valid For 10 Minutes. Upon Successfully Submitting The OTP, The Verification Process Will Be Completed, And You Will Become Eligible To Make Booking Requests For Availing The Services.</p>
                            <b>Conditions For Account Creation And Use</b>
                            <p style={{ fontSize: "16px" }}>The User Hereby Agrees To Provide Accurate And Complete Information For The Purpose Of Registration On The Platform. The Company Shall Not Be Responsible For Verifying The Accuracy And Completeness Of Any Such Information. The User Agrees And Acknowledges That The Onus Of Ensuring The Completeness And Accuracy Of Such Information Shall, At All Times, Lie With The User. The Company Reserves The Right To Reject The Request For Creation Of The Account, At Its Sole Discretion, If The Data Or Information Submitted Appears To Be Incomplete, Incorrect, Or Inaccurate. The User Agrees, Undertakes, And Declares That It Has Made Its Assessment Of The Platform And Has Determined That It Is Fit For Its Purposes. The User Will Be Using The Platform At Its Own Risk, Irrespective Of The Capacity In Which It Uses The Platform And It Is Expressly Clarified That The Company Shall Owe No Fiduciary Or Other Duty Or Obligation To The User Other Than As Expressly Agreed In Writing By The Company Under The Terms. The User Agrees And Acknowledges That Any Transactions Entered Into Through The Platform Shall Be At The Sole Discretion Of The User, And That The Company Shall Not Be Liable For The Same. Upon Creation Of The Account, The Company Grants The User A Non-Exclusive, Limited Privilege To Access And Use The Platform, Subject To Compliance With The T&Cs. The Account Created By You For Use Of The Platform Shall Be Non-Transferable And Its Use Is Restricted Only To You, And No Other Person.</p>
                            <p style={{ fontSize: "16px" }}>You Are Solely Responsible For Your Account And Any Data Therein, And Must Ensure That Your Mobile Device, Used For Receiving OTPs, Is Secure At All Times. You Shall Not Share, Sell, Transfer, Or Otherwise Provide Access To Your Account To Any Other Person Without Your Authorization. You Undertake That Upon Becoming Aware Of Any Unauthorized Access To Your Account, You Shall Promptly Notify The Company Of Such Unauthorized Use Or Access At care@sustylo.in . You Agree And Acknowledge That You Will Be Solely Responsible For Any Failure To Notify The Company Regarding Any Such Unauthorized Use Of Your Account, As Well As For Any Losses/Damages Resulting From Such Unauthorized Use, And That The Company Shall Bear No Responsibility Or Liability, Whatsoever, For The Same.</p>
                            <p style={{ fontSize: "16px" }}>To Maintain Control Over The Account And To Prevent Anyone From Accessing The Account, The Account Owner Should Maintain Control Over The Devices That Are Used To Access The Service And Not Reveal The OTP Or Details Of The Payment Method Associated With The Account To Anyone. You Are Responsible For Updating And Maintaining The Accuracy Of The Information You Provide To Us Relating To Your Account. We Can Terminate Your Account Or Place Your Account On Hold In Order To Protect You, The Company, The Service Professionals And/Or Our Partners From Identity Theft Or Other Fraudulent Activity.</p>
                            <b className="mb-3">BOOKING PROCESS</b>
                            <p style={{ fontSize: "16px" }}>You Can Follow The Steps Below To Book The Services Through Our Platform: For ‘At-Salonʼ Services, Select Your Preferred Salon From The Available Options, And Choose The Services You Wish To Avail. For ‘Salon-At-Homeʼ Services, Directly Search For The Category Of The Service You Are Looking For. Open The Category And Select The Services You Wish To Avail. Review The Details Of The Selected Services, Including Pricing And Availability. Choose A Preferred Date And Time For Your Appointment. Provide Your Contact Information, Including Email Address And Mobile Number, For OTP Verification. Confirm Your Booking Details And Proceed To The Payment Section: For Prepaid Orders, Pay The Service Fee Upfront, Which Shall Be Inclusive Of The Nominal Booking Fee.</p>
                            <p style={{ fontSize: "16px" }}>For Post-Pay Options, Proceed To Complete The Booking Merely By Paying A Nominal Booking Fee. The Service Fee, As Reflected On The Account At The Time Of Booking, Shall Be Paid After The Services Are Completed. Complete The Payment Process To Secure Your Booking. Once You Have Booked A Service, Su Stylo Shall Assign The Service Professional To You Within 2 (“Two”) Hours From The Receipt Of Your Booking Request, If Such Request Is Made During Regular Working Hours. If The Booking Request Is Made After Working Hours, Su Stylo Will Assign The Service Professional On The Following Working Day. The Service Professional Shall Be Assigned Subject To Various Factors Such As Their Availability, The Nature Of The Service Requested, Their Expertise, And The Proximity Of Your Location. Su Stylo Reserves The Right To Substitute And Assign A New Service Professional In Case Of Unforeseen Circumstances Or If The Initially Assigned Professional Becomes Unavailable, Provided That The Substitution Is Available And Accepted By The Customer. Upon Successful Booking, You Will Receive A Confirmation Message With The Details Of Your Appointment On Your Registered Email Address And Mobile Number. The Assigned Service Professional Will Arrive At The Specified Address At The Scheduled Time And Provide The Requested Services, Whether It Be At Your Home For ‘Salon-At-Homeʼ Services Or At The Chosen Salon For ‘At-Salonʼ Services.</p>
                        </div>
                        <hr className="mt-5" />
                        <div className="col-md-12">
                            <div className="gallery_heading text-left mb-2">
                                <h2>5. Re-Booking The Preferred Service Professional
                                </h2>
                            </div>
                            <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                            <p style={{ fontSize: "16px" }}>If You Have Already Availed The Services Of The Service Professional Through Our Platform, You Will Have The Option To Re-Book The Same Service Professional For Future Appointments In The Following Manner: Add The Desired Services In Your Cart As Per The Process Specified Under Clause 5.2.1.(I) To (V) Above. Select The Preferred Professional And/Or Salon, As Applicable, From The List Of Professionals And Salon, For The Particular Service. In Case You Do Not Want The Same Service Professional, You Will Have The Option To Request For A New Service Professional As Well. Proceed With Requesting The Booking. Once You Have Booked A Service, Su Stylo Shall Assign The Preferred Service Professional Within 2 Hours Of The Receipt Of Your Booking Request, If Such Request Is Made During Regular Working Hours. If The Booking Request Is Made After Working Hours, Su Stylo Will Assign The Service Professional On The Following Working Day. The Preferred Service Professional Shall Be Assigned Subject To Their Availability, The Requested Appointment Slot, And The Proximity Of Your Location. If The Slot Of Your Preferred Service Professional Is Not Available, Please Proceed With Placing The Booking Request, And Su Stylo Will Try To Assign You The Best Available Service Professional Within 2 Hours Of The Receipt Of Your Booking Request, If Such Request Is Made During Regular Working Hours. If The Booking Request Is Made After Working Hours, Su Stylo Will Assign The Service Professional On The Following Working Day. Please Be Assured That All Our Service Professionals Are Trained To Deliver A High-Quality Experience.</p>
                            <p style={{ fontSize: "16px" }}>Upon Successful Booking, You Will Receive A Confirmation Message With The Details Of Your Appointment On Your Registered Email Address And Mobile Number. The Assigned Service Professional Will Arrive At The Specified Address At The Scheduled Time And Provide The Requested Services, Whether It Be At Your Home For ‘Salon-At-Homeʼ Services Or At The Chosen Salon For ‘At-Salonʼ Services.</p>
                            <p style={{ fontSize: "16px" }}>Substitution: In Case Of The Unavailability Of, Or Cancellation By The Assigned Service Professional, Due To Any Reason Whatsoever, Su Stylo Will Offer You A Substitute Of The Service Professional From Among Our Registered Service Professionals, Provided That The Substitution Is Available And Accepted By The Customer.</p>
                        </div>
                        <hr className="mt-5" />
                        <div className="col-md-12">
                            <div className="gallery_heading text-left mb-2">
                                <h2>6. PRICING, SERVICE FEES AND OTHER PAYMENT TERMS
                                </h2>
                            </div>
                            <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                            <p style={{ fontSize: '16px' }}>Pricing: Su Stylo Adheres To A Transparent Pricing Policy, And The Prices Displayed On The Platform Alongside Each Of The Listed Services Reflect The True Cost Of Such Services. Su Stylo Reserves The Right To Modify The Pricing Of The Services Offered Through The Platform, At Its Sole Discretion. However, Any Changes In The Pricing Will Not Affect Confirmed Bookings Made Before The Revised Pricing Is Published On The Platform. Payment Of Service Fee And Transaction Fee: In Lieu Of The Services Availed By You Through The Platform, You Agree To Pay The Service Fee To Su Stylo, As Notified To You At The Time Of Booking. Payment Of Service Fee For ‘Salon-At-Homeʼ Services Shall Be Prepaid. Payment Of Service Fee For ‘At-Salonʼ Services Can Be Made Either As Prepaid Or Postpaid, As Per Your Preference And The Options Provided By Su Stylo.</p>
                            <p style={{ fontSize: '16px' }}>For Prepaid Payments, You Agree To Pay The Service Fee (Inclusive Of The Transaction Fee) Using The Designated Payment Methods Facilitated By Su Stylo, Which May Include But Are Not Limited To, Credit Cards, Debit Cards, Net Banking, Wallets (Such As Google Pay), UPI (Unified Payments Interface), And Other Third-Party Payment Processors Approved By Su Stylo (Collectively, “Payment Processors”).
                            </p>
                            <p style={{ fontSize: '16px' }}>For Postpaid Payments, You Agree To Pay The Service Fee (Exclusive Of The Transaction Fee) Directly To The Service Professional, Upon Completion Of The Booked Services, Using The Designated Payment Methods. Su Stylo May Facilitate Payment By Generating A QR Code Reflecting The Requisite Amount For The Client To Scan And Make The Payment Electronically. Alternatively, The Client May Opt To Pay The Service Fee In Cash Directly To The Service Professional.</p>
                        </div>
                        <hr className="mt-5" />
                        <div className="col-md-12">
                            <div className="gallery_heading text-left mb-2">
                                <h2>7.CANCELLATION OF BOOKING AND REFUND
                                </h2>
                            </div>
                            <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                            <p style={{ fontSize: "16px" }}>Cancellation Of Booking By User: The User Shall Have The Right To Cancel The Bookings At Any Time Prior To The Scheduled Booking. We Shall Be Entitled To Charge Cancellation Fees As Follows: If Cancelled Any Time But Not Later Than 2 Hours Prior To The Scheduled Booking, No Cancellation Fee Will Be Charged. If Cancelled After 2 Hours But Prior To 1 Hour Of Booking, Then X% Of Booking Fee Shall Be Deducted, And The Remaining Amount Will Be Refunded To The User. If Cancelled Within 1 Hour Of The Booking, The Full Booking Fee May Be Charged, And No Refund Will Be Provided. Refund Of Service Fee, In Case Of Cancellation Of Prepaid Orders: In Case Of Cancellation Of Booking At Any Time Before The Arrival Of The Service Professional At The Designated Address/Location, Su Stylo Shall Process A Full Refund Of The Service Fee Paid By The Client Through The Platform. The Said Refund Shall Be Reflected Within The Source Account From Which The Payment Is Made, Within 7 (“Seven”) Working Days From The Date Of Cancellation. Su Stylo Reserves The Right To Charge You Or Deduct Applicable Taxes, If Any, Payable On Such Service Fees.
                            </p>

                        </div>
                        <hr className="mt-5" />
                        <div className="col-md-12">
                            <div className="gallery_heading text-left mb-2">
                                <h2>8. SAFETY OF CLIENTS AND SERVICE PROFESSIONALS
                                </h2>
                            </div>
                            <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                            <b>At Billu Salon App, the safety of our clients and service professionals is our highest priority and is taken extremely seriously.
                            </b>
                            <h4 className="my-4">Safety of Clients:
                            </h4>
                            <div className="definition_list mt-4">
                                <ul>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>The company conducts background verification on all service professionals before onboarding them to ensure client safety.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>An SOS button is available on our platform for clients to seek immediate assistance in case of emergencies or critical situations.</li>
                                </ul>
                            </div>
                            <h4 className="my-4">Safety of Service Professionals:
                            </h4>
                            <div className="definition_list mt-4">
                                <ul>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Client Conduct: Discrimination against service professionals is strictly prohibited, including but not limited to discrimination based on race, religion, caste, nationality, disability, sexual orientation, gender identity, age, or any other protected characteristic under applicable law.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Clients must treat service professionals with courtesy and respect, providing a safe, clean, and appropriate location to perform services.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Service professionals have the right to refuse service if the client behaves discourteously, abusively, or provides an unsafe environment.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>The company reserves the right to restrict or terminate a client's access if they engage in abusive, disrespectful, or inappropriate conduct.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Clients must disclose any information that could impact the safety or well-being of the service professional or themselves.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Any misconduct by service professionals must be reported to the grievance officer within 48 hours of the incident.</li>
                                </ul>
                            </div>
                        </div>
                        <hr className="mt-5" />
                        <div className="col-md-12">
                            <div className="gallery_heading text-left mb-2">
                                <h2>9. GENERAL UNDERTAKING BY VISITOR/USER/CLIENT
                                </h2>
                            </div>
                            <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                            <b>Users agree not to use the platform for any purpose other than booking salon services. Any unauthorized commercial use is prohibited.</b>
                            <b>Users must not:</b>
                            <div className="definition_list mt-4">
                                <ul>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Systematically extract data from the platform to create a database or directory without written permission.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Collect usernames or emails for unsolicited communication.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Use automated means to book services.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Advertise or sell goods/services on the platform.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Circumvent security features or interfere with platform functionality.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Engage in fraudulent activities, impersonation, or misrepresentation.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Submit false complaints or misuse the grievance mechanisms.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Use automated bots or scripts to interact with the platform.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Upload viruses, malware, or engage in hacking.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Disparage or harm the reputation of the company.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Violate intellectual property laws or misuse proprietary content.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Attempt unauthorized access to the platform’s servers or database.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Use the platform for illegal activities or to harass others.</li>
                                </ul>
                            </div>
                        </div>
                        <hr className="mt-5" />
                        <div className="col-md-12">
                            <div className="gallery_heading text-left mb-2">
                                <h2>10. OWNERSHIP OF INFORMATION AND INTELLECTUAL PROPERTY RIGHTS
                                </h2>
                            </div>
                            <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                            <div className="definition_list mt-4">
                                <ul>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>All content published on the platform, including text, images, and software, belongs to the company, except brand names and trademarks of salons and service professionals, which remain their property.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Users cannot modify, reproduce, distribute, or use the platform’s content for commercial purposes.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Unauthorized use of trademarks is prohibited without prior written consent.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Any infringement of copyrights, trademarks, or intellectual property rights may lead to legal action.</li>
                                </ul>
                            </div>
                        </div>
                        <hr className="mt-5" />
                        <div className="col-md-12">
                            <div className="gallery_heading text-left mb-2">
                                <h2>11. REPRESENTATIONS AND WARRANTIES
                                </h2>
                            </div>
                            <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                            <b>By using the platform, users represent and warrant that:</b>
                            <div className="definition_list mt-4">
                                <ul>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Their use complies with applicable laws.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Any uploaded content does not violate laws or third-party rights.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>All submitted information is accurate and truthful.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>They accept the company’s privacy policy.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>They will not provide false or misleading information.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>They will not use the platform for illegal purposes.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>The company reserves the right to suspend or terminate accounts for policy violations, including creating fake accounts.</li>
                                </ul>
                            </div>
                            <b>Failure to comply with these terms may result in account termination or legal action.</b>
                        </div>
                        <hr className="mt-5" />
                        <div className="col-md-12">
                            <div className="gallery_heading text-left mb-2">
                                <h2>12. CONFIDENTIALITY
                                </h2>
                            </div>
                            <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                            <p style={{ fontSize: "16px" }}>The User/Client/Visitor Acknowledges And Agrees That All Information, Data Or Details In Any Form With Respect To The Platform, Its Designs, Structure And Arrangement, Visual Interfaces, Specifications, Documentation, Components, Source Code, Object Code, Images, Icons, Audio-Visual Components And Objects, Schematics, Drawings, Protocols, Processes, And Other Visual Depictions, In Whole Or In Part, In Addition To All Documents, Data, Papers, Statements, Any Business/Customer Information, Trade Secrets And Process Of Company Relating To Its Business Practices Or In Connection With The Provision Of Services By Company, Trade And Business Of Company, Or Otherwise, Any Information Including Names, Assets, Details, Documents, Transaction Records, Potential Transactions, Negotiations, Pending Negotiations, Data, Applications, Software, Systems, Papers, Statements, Business Information, Marketing And Financial Information, Databases, Manuals, Records And Reports, Articles, Systems, Material, Sources Of Material, And Any Other Data Pertaining To Company, Available To It Through
                                Platform (Hereinafter Referred To As The “Confidential Information”) Is Of A Sensitive And Confidential Nature.
                            </p>
                            <p style={{ fontSize: "16px" }}>The User/Client/Visitor Undertakes To Maintain The Confidentiality Of All Confidential Information, At All Times, And Shall Not Perform Any Act Or Omit To Perform Any Act Whose Performance Was Otherwise Necessary, To Breach The Confidentiality. The User/Client/Visitor Undertakes To Use All Confidential Information With Such Care And Discretion, But Not Less Than Reasonable Care, To Avoid Disclosure, Publication, Or Dissemination Of Confidential Information, As It Will Exercise In Respect Of Its Own Information Of Similar Nature That It Does Not Wish To Disclose, Publish Or Disseminate, Without Its Prior Written Consent Or In An Unauthorized Manner.</p>
                            <p style={{ fontSize: "16px" }}>The User/Client/Visitor May Disclose Confidential Information Only To The Extent Required By Any Regulatory Authority Or Governmental Authority Under The Applicable Law, Provided, Prior To Such Disclosure, The User/Client/Visitor Shall Immediately Inform Company Of Such Request For Disclosure, To Enable Company To Obtain Any Order To Prevent Or Limit The Disclosure Of Confidential Information; And</p>
                            <b>The User/Client/Visitor Agrees:</b>
                            <div className="definition_list mt-4">
                                <ul>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>To Take All Necessary Action To Protect The Confidential Information Against Misuse, Sale, Loss, Destruction, Deletion, And/Or Alteration;</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>To Use The Confidential Information Only In Connection With The Services/Transaction For Which The Confidential Information Is Obtained; And
                                        Not To Misuse Or Permit Misuse Directly Or Indirectly, Commercially Exploit The Confidential Information Of The Company Or Any Of Its Affiliates Through The Platform For Economic Or Other Benefit Or In A Manner Prejudicial To The Company.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr className="mt-5" />
                        <div className="col-md-12">
                            <div className="gallery_heading text-left mb-2">
                                <h2>13. COMMUNICATION AND SUBSCRIPTION
                                </h2>
                            </div>
                            <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                            <p style={{ fontSize: '16px' }}>Your Acceptance Of These Terms Shall Also Include Your Acceptance Of Any News, Updates, Offer/Campaign-Related SMS, To The Contact Number And Email Address Provided By You. By Accessing, Registering On The Platform, And Thereby Verifying Your Contact Number And Email Address For The Same, You Explicitly Consent To Receiving Such Communications From Us Or Any Of Our Authorized Personnel/Representatives Through Phone Call, SMS, Mobile Push Notifications, E-Mail, Or Any Other Digital Or Electronic Media. These Communications May Include Information Regarding New Products, Services, Any Promotional Campaigns And Offers.</p>
                            <p style={{ fontSize: '16px' }}>You May, At Any Time, Exercise Your Right To Unsubscribe/Opt-Out Of Receiving Any Marketing/Promotional Communications, Newsletters, SMSs, E-Mails Or Any Other Such Notifications From Us At Any Time By Referring To And Following The Instructions Contained In Such Communications.</p>
                            <b>You Agree To Cooperate With The Company, As And When We Reach Out To You Through Phone Call, SMS, E-Mail Or Any Other Medium Of Communication, For The Following Purposes:</b>
                            <div className="definition_list mt-4">
                                <ul>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Obtaining Feedback/Reviews With Respect To The Platform.</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Resolving Complaints/Grievances Raised By You With Respect To Your Use Of The Platform, And/Or Of Services.</li>
                                </ul>
                            </div>
                        </div>
                        <hr className="mt-5" />
                        <div className="col-md-12">
                            <div className="gallery_heading text-left mb-2">
                                <h2>14. LIMITATION OF LIABILITY
                                </h2>
                            </div>
                            <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                            <p style={{ fontSize: '16px' }}>The Company And Its Affiliates, Employees, Agents, And Associates Make No Warranty, Express Or Implied, With Respect To The Platform Or Its Contents, The Services And Assumes No Liability Or Responsibility Whatsoever, For Any Losses/Damages, Direct Or Indirect, Suffered By You Or Any Other User, On Account Of Using The Information On The Platform, Availing Of Any Services Or Acting On The Basis Of Any Suggestion Made, Or Opinion Given By The Company On The Platform.</p>
                        </div>
                        <hr className="mt-5" />
                        <div className="col-md-12">

                            <div className="gallery_heading text-left mb-2">
                                <h2>15. TRANSFER OF RIGHTS
                                </h2>
                            </div>
                            <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                            <p style={{ fontSize: "16px" }}>The T&Cs Are Binding On The User/Client/Visitor, Its Successors And Permitted Assigns. It May Not Transfer, Assign, Charge Or Otherwise Dispose Of Any Of Its Rights, Benefits, Liabilities, Or Obligations Hereunder Without The Prior Written Consent Of The Company.</p>
                            <p style={{ fontSize: "16px" }}>However, Company May Transfer, Assign, Sub-Contract Or Otherwise Dispose Of Any Of Its Rights, Benefits, Liabilities, Or Obligations Under The T&Cs, At Any Time, Or May Involve Or Appoint Any Third Party To Satisfy Its Obligations, Without Any Necessity To Notify The Client.</p>
                            <b style={{ fontSize: "16px" }}>CONTACT INFORMATION Please Feel Free To Contact Us If You Have Any Questions About Our T&Cs Or The Information Practices Of The Services, On The Below Mentioned Details</b>
                        </div>
                        <hr className="mt-5" />
                        <Container className="mt-5">
                        <Row className="text-center">
                            {/* Address Section */}
                            <Col md={4}>
                                <div className="contact-item">
                                    <div className="icon-box">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <h5>Our Address</h5>
                                    <p><strong className="highlight">P.NO 97, Dakshinpuri Shri Kishanpura</strong></p>
                                </div>
                            </Col>

                            {/* Phone Number Section */}
                            <Col md={4}>
                                <div className="contact-item">
                                    <div className="icon-box">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <h5>Phone Number</h5>
                                    <p><Link href="tel:+919119101723" className="highlight">+91 9119101723</Link></p>
                                </div>
                            </Col>

                            {/* Email Address Section */}
                            <Col md={4}>
                                <div className="contact-item">
                                    <div className="icon-box">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <h5>Email Address</h5>
                                    <p><Link href="mailto:info@info@sustylo.com" className="highlight">info@sustylo.com</Link></p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    </div>

                </div>
            </div>
        </>
    )
}
