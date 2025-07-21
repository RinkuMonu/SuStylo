import React, { useState } from 'react';
import axiosInstance from '../../config/axiosInstance'; // Adjust path as needed

export default function GallerySection() {
  const [mobile, setMobile] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleShareAppLink = async () => {
    if (!/^\d{10}$/.test(mobile)) {
      setStatusMessage('❌ Please enter a valid 10-digit mobile number.');
      return;
    }

    try {
      const res = await axiosInstance.post('/share-app-link', { mobile });
      setStatusMessage('✅ App link sent successfully!');
      console.log('Response:', res.data);
    } catch (err) {
      console.error('SMS Error:', err.response?.data || err.message);
      setStatusMessage(`❌ Failed: ${err.response?.data?.error || err.message}`);
    }
  };

  return (
    <div className="app-promo-section py-5">
      <div className="container">
        <div className="row g-5 align-items-center">

          {/* Left Image */}
          <div className="col-lg-5 text-center">
            <img
              src="/images/cheerful-confident-attractive-brunette-girl-yellow-t-shirt-holding-smartphone-pointing-mobile-screen-smiling-recommend-awesome-phone-application-give-link-promo-code-giveaway-removebg-preview.png"
              alt="App Promo"
              className="img-fluid"
              style={{ maxHeight: '650px', maxWidth: '100%', objectFit: 'contain' }}
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-7">
            <h1 className="mb-3" style={{ color: '#fb8807' }}>Get the App – SuStylo</h1>
            <h6 className="mb-4 text-muted">We will send you a link. Open it on your phone to download the app.</h6>

            <div className="d-flex align-items-center mb-3 flex-wrap">
              <input
                type="tel"
                className="form-control me-2 mb-2 mb-md-0"
                placeholder="Enter your mobile number"
                style={{ maxWidth: '300px' }}
                value={mobile}
                onChange={(e) => {
                  const cleaned = e.target.value.replace(/\D/g, '');
                  setMobile(cleaned);
                }}
                maxLength={10}
              />
              <button
                className="btn"
                onClick={handleShareAppLink}
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

            {statusMessage && <p className="mb-3">{statusMessage}</p>}

            <p className="mb-3">Download the app from</p>

            <div className="d-flex flex-wrap gap-3 mb-3">
              <a href="#" className="btn btn-dark d-flex align-items-center" style={{ padding: '10px 16px', fontSize: '0.9rem', borderRadius: '8px', fontWeight: '500' }}>
                <i className="bi bi-google-play me-2"></i> Get it on Google Play
              </a>
              <a href="#" className="btn btn-dark d-flex align-items-center" style={{ padding: '10px 16px', fontSize: '0.9rem', borderRadius: '8px', fontWeight: '500' }}>
                <i className="bi bi-apple me-2"></i> Download on App Store
              </a>
            </div>

            <h6 className="text-muted">Enjoy seamless booking and beauty services through our mobile app.</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
