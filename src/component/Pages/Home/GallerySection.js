import React from 'react';

export default function GallerySection() {
    return (
        <div className="app-promo-section py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    {/* Left Side - Image */}
                    <div className="col-lg-5 text-center">
                        <img
                            src="/images/cheerful-confident-attractive-brunette-girl-yellow-t-shirt-holding-smartphone-pointing-mobile-screen-smiling-recommend-awesome-phone-application-give-link-promo-code-giveaway-removebg-preview.png"
                            alt="App Promo"
                            className="img-fluid"
                            style={{
                                maxHeight: '650px',
                                maxWidth: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div className="col-lg-7">
                        <h1 className="mb-3" style={{ color: '#fb8807' }}>
                            Get the App – SuStylo
                        </h1>
                        <h6 className="mb-4 text-muted">
                            We will send you a link. Open it on your phone to download the app.
                        </h6>

                        {/* Input + Button */}
                        <div className="d-flex align-items-center mb-3 flex-wrap">
                            <input
                                type="tel"
                                className="form-control me-2 mb-2 mb-md-0"
                                placeholder="Enter your mobile number"
                                style={{ maxWidth: '300px' }}
                            />
                            <button
                                className="btn"
                                style={{
                                    backgroundColor: 'rgb(173 46 33)',
                                    color: '#fff',
                                    fontSize: '1rem',
                                    padding: '6px 12px',
                                    whiteSpace: 'nowrap',
                                    border: 'none',
                                }}
                            >
                                Share App Link
                            </button>
                        </div>

                        {/* Paragraph after input */}
                        <p className="mb-3">Download the app from</p>

                        {/* Download Buttons */}
                        <div className="d-flex flex-wrap gap-3 mb-3">
                            <a
                                href="#"
                                className="btn btn-dark d-flex align-items-center"
                                style={{
                                    padding: '10px 16px',
                                    fontSize: '0.9rem',
                                    borderRadius: '8px',
                                    fontWeight: '500',
                                }}
                            >
                                <i className="bi bi-google-play me-2"></i>
                                Get it on Google Play
                            </a>
                            <a
                                href="#"
                                className="btn btn-dark d-flex align-items-center"
                                style={{
                                    padding: '10px 16px',
                                    fontSize: '0.9rem',
                                    borderRadius: '8px',
                                    fontWeight: '500',
                                }}
                            >
                                <i className="bi bi-apple me-2"></i>
                                Download on App Store
                            </a>
                        </div>

                        {/* Paragraph after store buttons */}
                        <h6 className="text-muted">
                            Enjoy seamless booking and beauty services through our mobile app.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
