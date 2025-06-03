import React from 'react';

const TrustedByStats = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="mb-4">SuStylo — Already Trusted Nationwide</h2>
      <div className="row gy-4">
        <div className="col-md-3">
          <h4>100+</h4>
          <p style={{fontSize:"20px"}}>salons onboarded and growing every day</p>
        </div>
        <div className="col-md-3">
          <h4>10,000+</h4>
          <p style={{fontSize:"20px"}}>customer bookings completed</p>
        </div>
        <div className="col-md-3">
          <h4>4.8/5</h4>
          <p style={{fontSize:"20px"}}> average salon rating from verified users</p>
        </div>
        <div className="col-md-3">
          <h4>₹4 Cr+</h4>
          <p style={{fontSize:"20px"}}> marketing budget deployed to bring customers to partner salons</p>
        </div>
      </div>
    </div>
  );
};

export default TrustedByStats;
