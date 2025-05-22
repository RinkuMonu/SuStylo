import React from 'react';

const TrustedByStats = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="mb-4">Already Trusted Nationwide</h2>
      <div className="row gy-4">
        <div className="col-md-3">
          <h4>100+</h4>
          <p style={{fontSize:"20px"}}>salons onboarded</p>
        </div>
        <div className="col-md-3">
          <h4>10,000+</h4>
          <p style={{fontSize:"20px"}}>customer bookings</p>
        </div>
        <div className="col-md-3">
          <h4>4.8/5</h4>
          <p style={{fontSize:"20px"}}>average salon rating</p>
        </div>
        <div className="col-md-3">
          <h4>₹4 Cr+</h4>
          <p style={{fontSize:"20px"}}>marketing budget deployed</p>
        </div>
      </div>
    </div>
  );
};

export default TrustedByStats;
