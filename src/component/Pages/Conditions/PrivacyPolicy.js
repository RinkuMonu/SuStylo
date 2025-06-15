import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import WOW from "wow.js";
import '../style/style.css'
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
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
                <section className="privacy-section d-flex align-items-center">
                    {/* <div className="hero-overlay"></div> */}
                    <div className="container text-center position-relative">
                        {/* <h2 className="hero-title">PRIVACY POLICY
                        </h2> */}
                    </div>
                </section>
                
            </div>
            <div className="content-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="gallery_heading text-center mx-auto">
                                <h2>PRIVACY POLICY
                                </h2>
                            </div>
                            <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat" }}></div>
                        </div>
                        <div className="col-md-12">
                            <div className="clearfix companydetails">
                                <img
                                    src='./images/gallery/R5.jpg'
                                    className="img-fluid col-md-6 float-md-end mb-3 ms-md-3 img-width mt-5"
                                    alt="policy img"
                                />
                                <h2 className="my-3">1. SCOPE OF THIS POLICY</h2>
                                <p className="mb-3">This Privacy Policy is an electronic record in the form of an electronic contract formed under applicable laws. It does not require any physical, electronic, or digital signature. This Privacy Policy is a legally binding document between you ("Visitor"/ "User"/ "Client"/ "You"/ "Your"/ "Yourself") and SuStylo ("Company"/ "We"/ "Our"/ "Us"/ "Ourselves"). We collect and process your personal data, sensitive personal data, and third-party data carefully, only for the purposes described in this policy and the associated Terms and Conditions ("T&Cs"), and only to the extent necessary as defined herein and within the scope of applicable legal regulations.
                                </p>
                                <p>Please read this Privacy Policy carefully before accessing or using our website/mobile application (collectively referred to as the "Platform"). By accessing or using the Platform, including our services, you agree to and accept the terms of this Policy, and you understand and agree to the collection, use, sharing, and processing of personal information as described herein. If you do not agree with the terms of this Policy, please do not use this Platform.</p>
                                <h2 className="mb-3 mt-4">2. CONSENT</h2>
                                <p>By using the Platform, you expressly consent to the Company’s use and disclosure of your personal/business data, sensitive personal data, and third-party information in accordance with this Policy. If you do not agree with the terms of this Policy, please discontinue the use of this Platform. This Policy shall be deemed to be incorporated into the T&Cs governing the use of the Platform and shall be read in addition to those T&Cs.</p>
                                <h2 className="mb-3 mt-4">3. APPLICABILITY</h2>
                                <p>This Privacy Policy applies to all services offered by the Company and its affiliates, agents, representatives, contractors, employees, and service providers. It does not apply to services that have separate privacy policies or third-party platforms linked to or integrated with our Platform.</p>
                                <b>This Privacy Policy does not apply to:</b>
                                <div className="definition_list mt-4">
                                    <ul>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>The information practices of other companies, consultants, or organizations that advertise our services</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Services offered by third parties, including sites that may be linked from our Platform.</li>
                                    </ul>
                                </div>
                                <h2 className="mb-3 mt-4">4. DEFINITIONS</h2>
                                <div className="definition_list mt-4">
                                    <ul>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Personal Data or Information: </b>Any data relating to an identified or identifiable natural person ("Data Subject"/ "User"/ "Client").</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Business Information: </b>&nbsp;  &nbsp;Any data used to identify an entity’s business, including name, address, registration details, financial information, and other relevant details.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Non-Personal/Non-Business: Data: </b>Information that does not specifically identify an individual or business but includes browser type, IP address, device information, and other anonymous data.</li>
                                        <li className="d-block"><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Sensitive Personal Data or Information (SPDI): </b>Includes but is not limited to:
                                            <div className="definition_list mt-2 ps-4" style={{ borderLeft: "1px dashed", marginLeft: "6px" }}>
                                                <ul>
                                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>OTP for login and transaction verification.</li>
                                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Financial information such as bank account details, credit/debit card details, and payment instrument details.</li>
                                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Other legally required data for providing services.</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Data Subject: </b>A natural person intending to avail services and identifiable through personal identifiers</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Processing: </b>Any operation on personal/business data such as collection, storage, structuring, or erasure.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Recipient: </b> Any entity receiving personal/business data, excluding public authorities complying with legal obligations.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>User: </b>Any individual or business entity registered on the Platform with access to services.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>User Account: </b>An account created on the Platform by an individual or business entity at the time of registration.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Visitor: </b>Any person browsing the Platform without registering or availing of services.</li>
                                    </ul>
                                </div>
                                <hr className="mt-5" />
                                <div className="gallery_heading text-left mb-2">
                                    <h2>5. INFORMATION COLLECTED BY COMPANY</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                                <b>We collect and process information to provide better services. The following data is collected, preserved, and used for specific purposes at the time of registration and during the use of services:</b>
                                <div className="definition_list mt-4">
                                    <ul>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Full name and/or alias</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Business identification number (for entities)</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Email address</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Mobile number (verified via OTP)</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Registered office address and principal place of business (for entities)</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Billing and shipping information</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Financial information such as bank account details, credit/debit card details, transaction authentication numbers, and OTP for transactions</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Any correspondence through the Platform</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Any data provided through calls, chats, or social media interactions</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Any additional information required for service fulfillment or legal compliance</li>
                                    </ul>
                                </div>
                                <b>Even if you do not register on the Platform, you may voluntarily provide us with contact details (such as an email address or phone number) to receive updates and newsletters.</b>
                                <hr className="mt-5" />
                                <div className="gallery_heading text-left mb-2">
                                    <h2>6. INFORMATION COLLECTED AUTOMATICALLY BY COMPANY</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                                <p>When You Visit Or Use Our Platform, Subscribe To Our Newsletters, Or Otherwise Interact With Us Through Our Platform, We May Collect Information Sent By Your Computer, Mobile Phone, Or Other Access Device(s) Based On Your Behavior On Our Platform. This Helps Us Conduct Internal Research On User Demographics, Interests, And Behavior To Better Understand, Protect, And Serve Our Users.</p>
                                <b>When You Visit Our Platform Or Register An Account, Certain Information Is Automatically Collected On Our Servers To Provide Verified Access To Our Service Portal. The Information Includes:</b>
                                <div className="definition_list mt-4">
                                    <ul>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Unique Identifiers, Browser Type, And Settings</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Device Identifiers And Features (Type, OS, Mobile Network, ISP/Carrier Name, Phone Number, App Version).</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Referring Website, General Geographic Location (IP Address), Web/App Behavior, And Interaction With Content.</li>
                                        <li className="d-block"><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Information Collected When Visiting Or Leaving The Platform, Including Plugins Or Cookies:</b>
                                            <div className="definition_list mt-2 ps-4" style={{ borderLeft: "1px dashed", marginLeft: "6px" }}>
                                                <ul>
                                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>URL Of The Site Visited Before/After Ours</li>
                                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>IP Address</li>
                                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Proxy Server</li>
                                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Operating System</li>
                                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Web Browser And Add-Ons</li>
                                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Device Identifier And Features</li>
                                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>ISP Or Mobile Carrier</li>
                                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Transactional SMSs/Emails</li>
                                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Prior Search Results</li>
                                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Log-In And Log-Out Time</li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <p>We Collect Information When You Install Our Application From The Play Store Or Apple Store, Or When A Service Checks For Automatic Updates. Your Device Periodically Contacts Our Servers To Provide Information About Your Device And Connection, Including Device Type, Carrier Name, Crash Reports, And Installed Applications.</p>
                                <p>We Use Cookies, Web Beacons, And Third-Party Cookies To Collect This Information For Enhancing User Experience, Improving Security, And Analyzing Usage Trends.</p>
                                <hr className="mt-5" />
                                <div className="gallery_heading text-left mb-2">
                                    <h2>7. COLLECTION OF PERSONAL/BUSINESS DATA AND SENSITIVE PERSONAL DATA</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                                <p>We Collect Only The Personal/Business Data You Provide To Us Directly, Subject To Your Consent, For A Smooth User Experience.</p>
                                <p>In Certain Cases, We Collect, Process, And Use Special Categories Of Personal Data That Are More Sensitive In Nature ("Sensitive Personal Data/Information" Or "SPDI"). This Includes Data Such As Time-Sensitive One-Time Passwords (OTP), Credit/Debit Card Details (Stored Only With Consent), And Other Information Needed To Provide Our Services.</p>
                                <b>We May Collect Your Information When You:</b>
                                <div className="definition_list mt-4">
                                    <ul>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Register On Our Platform.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Login/Register Using A Third-Party Service (E.G., Google), Based On Privacy Settings.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Update/Change Personal Details In Your Account.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Use The Platform For Services.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Participate In Company Campaigns.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Download/Update Software</li>
                                    </ul>
                                </div>
                                <b>Cookies And Web Beacons Are Used Solely To Enhance The User Experience And Not For Collecting Personal/Sensitive Information.</b>
                                <hr className="mt-5" />
                                <div className="gallery_heading text-left mb-2">
                                    <h2>8. USE OF INFORMATION</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                                <b>We Use Your Information For The Following Purposes:</b>
                                <div className="definition_list mt-4">
                                    <ul>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Operating, Administering, And Maintaining Your Account.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Providing Requested Services</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Responding To Queries Or Concerns.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Facilitating Transactions And Verifying Funds.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Enabling User Interaction With Our Team.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Verifying OTPs.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Complying With Financial Regulations.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Providing Customer Support.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Invoicing And Account Management.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Enhancing Security And Safety.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Sending Marketing/Promotional Communications (With Consent).</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Sending Newsletters (If Subscribed).</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Notifying About Service Changes/Upgrades.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Resolving Disputes And Troubleshooting.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Conducting Data/System Analytics For Service Improvement.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Preventing Fraud And Security Threats.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Complying With Legal Obligations.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Other Business-Related Purposes.</li>
                                    </ul>
                                </div>
                                <p>We Also Use Your Information To Understand Your Service Preferences And May Contact You To Offer Relevant Services. Additionally, We May Use Non-Personal Data For Business Analysis, Research, And Service Improvements.</p>
                                <hr className="mt-5" />
                                <div className="gallery_heading text-left mb-2">
                                    <h2>9. STORAGE OF COLLECTED DATA</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                                <p>All Information Provided To Us Is Stored On Secure Systems. Data Is Retained For Eight (8) Years From The Date Of Service Discontinuation Or Account Deletion. In Some Cases, Longer Retention May Be Required By Law.</p>
                                <b>Factors Determining Retention:</b>
                                <div className="definition_list mt-4">
                                    <ul>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Data Necessity For Service/Business Operations.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Active User Account Status.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Legal, Contractual, Or Regulatory Obligations.</li>
                                    </ul>
                                </div>
                                <b>Collected Data Includes:</b>
                                <div className="definition_list mt-4">
                                    <ul>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Visitor's IP Data.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Date/Time Of Visit.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Pages Visited And Navigation Data.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Browser Type.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Country Of Access.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Language Preferences.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Search Terms.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Pixel Tags.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Feedback Provided.</li>
                                    </ul>
                                </div>
                                <hr className="mt-5" />
                                <div className="gallery_heading text-left mb-2">
                                    <h2>10. USER ACCOUNT</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                                <p>Users Must Keep Account Information Confidential. Company May Access User Accounts Only On Request To Resolve Technical Issues.</p>
                                <hr className="mt-5" />
                                <div className="gallery_heading text-left mb-2">
                                    <h2>11. RETENTION OF DATA/INFORMATION</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                                <p>We Retain Personal And Sensitive Data Only As Long As Required To Fulfill Its Purpose, Meet Legal/Regulatory Requirements, And Protect Business Interests. Typically, Data Is Retained For Five (5) Years From The Last Activity Date (Or Longer If Required By Law). After This Period, Data Is Securely Destroyed.</p>
                                <hr className="mt-5" />
                                <div className="gallery_heading text-left mb-2">
                                    <h2>12. THIRD-PARTY SHARING OR USE OF DATA/INFORMATION</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                                <b>We Do Not Sell/Rent Personal Or Business Information. However, We May Share Encrypted Data With Third Parties With User Consent And Proper NDAs. This Includes:</b>
                                <div className="definition_list mt-4">
                                    <ul>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Advertisements :</b> Information Entered On Ads May Be Collected By Both Us And The Ad Network.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Ad Serving :</b> We May Serve Ads Based On Your Search/Platform Usage.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Cookies :</b> Third-Party Ad Partners May Use Cookies For Ads, But We Do Not Control Their Policies.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Affiliate Advertising :</b> Affiliate Partners May Use Cookies To Track Engagement.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Internal Service Providers :</b> Third-Party Service Providers May Receive Encrypted Data For Service Facilitation.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Corporate Mergers :</b> Data May Be Shared If The Company Merges Or Is Acquired.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Legal Requests :</b> Information May Be Disclosed To Law Enforcement/Regulatory Bodies As Required By Law.</li>
                                    </ul>
                                </div>
                                <p>Users Can Opt-Out Of Interest-Based Ads, Text Messages, And Promotional Communications Through The Platform Settings. If Mobile Numbers Are Changed, Users Must Update Account Information To Avoid Messages Being Sent To Old Numbers.</p>
                                <b>We May Share Data With:</b>
                                <div className="definition_list mt-4">
                                    <ul>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Other Group Entities For Business And Marketing.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Professional Advisors (Lawyers, Bankers, Auditors, Insurers).</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Regulators.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Service Providers.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Government Authorities When Required By Law.</li>
                                    </ul>
                                </div>
                                <p>If Data Is Shared With Regulators Or In Legal Proceedings, It Will Be Done To Comply With The Law And Protect Our Rights.</p>
                                <hr className="mt-5" />
                                <div className="gallery_heading text-left mb-2">
                                    <h2>13. USER SUBMISSIONS</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                                <p>Any content, personal, or business information that you voluntarily share on our platform, such as in chat areas, reviews, or public forums, may be viewed by other visitors and users. By submitting content on our platform, you acknowledge that such information can be accessed, used, and shared by other users. We are not responsible for how other users may use this publicly shared content.</p>
                                <hr className="mt-5" />
                                <div className="gallery_heading text-left mb-2">
                                    <h2>14. COOKIES</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                                <p>Cookies are small text files that our platform stores on your device to improve your user experience. These cookies help us enhance website functionality, remember user preferences, and provide personalized content. We and our service providers may use cookies, web beacons, and other tracking technologies to collect data, including browsing behavior, session duration, and site interactions. If you choose to disable cookies, some features of our platform may not function properly.</p>
                                <hr className="mt-5" />
                                <div className="gallery_heading text-left mb-2">
                                    <h2>15. WEB BEACONS</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                                <p>Web beacons are tiny graphic images embedded in emails and web pages that help track user activity. We use web beacons for analytics, marketing, and service improvements. They allow us to monitor visitor engagement, analyze trends, and measure the effectiveness of our communication strategies. You can disable web beacons by rejecting associated cookies in your browser settings.</p>
                                <hr className="mt-5" />
                                <div className="gallery_heading text-left mb-2">
                                    <h2>16. CHANGE OF OWNERSHIP</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                                <p>In the event of a merger, acquisition, or change of ownership of SuStylo, your personal and business data may be transferred to the new entity. We will ensure that the new owner continues to honor the commitments made under this Privacy Policy.</p>
                                <hr className="mt-5" />
                                <div className="gallery_heading text-left mb-2">
                                    <h2>17. LEGAL RIGHTS AND CHOICES OF USERS</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                                <b>Under applicable data protection laws, users have the following rights:</b>
                                <div className="definition_list mt-4">
                                    <ul>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Right of Access – Users can request copies of their personal/business data held by us.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Right to Rectification – Users can request corrections to inaccurate or incomplete data.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Right to Erasure – Users can request deletion of their data under certain conditions.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Right to Restriction of Processing – Users can request limits on how their data is processed in certain circumstances.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Right to Object to Processing – Users can object to data processing under specific conditions.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>Right to Data Portability – Users can request their data in a structured, machine-readable format and transfer it to another entity.</li>
                                        <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i>No Fees for Exercising Rights – Users can exercise their rights free of charge. Requests will be processed within one month. Users can submit requests via info@sustylo.com</li>
                                    </ul>
                                </div>
                                <hr className="mt-5" />
                                <div className="gallery_heading text-left mb-2">
                                    <h2>18. LINKS TO OTHER WEBSITES</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                                <p>Our platform may contain links to external websites not operated by SuStylo. We are not responsible for the privacy policies, security measures, or data collection practices of third-party websites. Users should review the privacy policies of any third-party site they visit through our platform.</p>
                                <hr className="mt-5" />
                                <div className="gallery_heading text-left mb-2">
                                    <h2>19. REASONABLE SECURITY PRACTICES AND PROCEDURES</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                                <p>We employ security measures, including encryption, secure servers, and access controls, to protect user data from unauthorized access, alteration, disclosure, or destruction. While we take necessary precautions, no security system is impenetrable. Users are advised to use strong passwords and exercise caution when sharing sensitive information online.</p>
                                <hr className="mt-5" />
                                <div className="gallery_heading text-left mb-2">
                                    <h2>20. DATA PRIVACY OFFICER</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                                <b>For any privacy-related inquiries or concerns, please contact our Data Privacy Officer:</b>
                                <div className="definition_list mt-4">
                                    <ul>
                                        <li><i class="bi bi-envelope me-2" style={{ color: "#ffb792" }}></i><Link style={{ color: "#000" }} href="mailto:info@sustylo.com">info@sustylo.com</Link></li>
                                        <li><i class="bi bi-telephone me-2" style={{ color: "#ffb792" }}></i><Link style={{ color: "#000" }} href="tel:7297026119">7297026119</Link></li>
                                    </ul>
                                </div>
                                <p>In compliance with the Information Technology Act, 2008, and applicable regulations, our Grievance Officer is responsible for addressing user complaints and discrepancies.</p>
                                <div className="definition_list mt-4">
                                    <ul>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Website :</b>&nbsp; <a style={{color:"#000", textDecoration:"underline"}} href="https://www.sevenunique.com/" target="blank">https://www.sevenunique.com/</a></li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Address :</b>&nbsp; P.NO 97, Dakshinpuri Shri Kishanpura</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Email :</b>&nbsp; info@sustylo.com</li>
                                    <li><i class="bi bi-check2-circle me-2" style={{ color: "#ffb792" }}></i><b>Phone :</b>&nbsp;7297026119</li>
                                    </ul>
                                </div>
                                <hr className="mt-5" />
                                <div className="gallery_heading text-left mb-2">
                                    <h2>22. SIGNATURE CLAUSE</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                                <p>References to "We," "Us," and "Our" in this Privacy Policy refer to SuStylo. As the controller of user data, SuStylo determines the type of data collected and how it is processed in accordance with the services offered on our platform.</p>
                                <hr className="mt-5" />
                                <div className="gallery_heading text-left mb-2">
                                    <h2>23. UPDATE TO THE PRIVACY POLICY</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                                <p>SuStylo reserves the right to update this Privacy Policy at any time. Any significant changes will be communicated to users through appropriate channels. The latest version of this policy will always be available under the "Privacy Policy" section on our platform.</p>
                                <hr className="mt-5" />
                                <div className="gallery_heading text-left mb-2">
                                    <h2>24. FURTHER INFORMATION</h2>
                                </div>
                                <div className="de-separator" style={{ backgroundSize: "100%", backgroundRepeat: "no-repeat", margin: "0px", marginTop: "16px", marginBottom: "25px" }}></div>
                                <p>For further details or clarifications regarding this Privacy Policy, please contact us at info@sustylo.com</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
