import React from 'react';
import { FaStore, FaUsers, FaStar, FaRupeeSign } from 'react-icons/fa';

const stats = [
  {
    icon: <FaStore size={32} className="text-warning mb-2" />,
    value: "100+",
    label: "Salons onboarded",
    subText: "and growing every day"
  },
  {
    icon: <FaUsers size={32} className="text-warning mb-2" />,
    value: "10,000+",
    label: "Bookings completed",
    subText: "by happy customers"
  },
  {
    icon: <FaStar size={32} className="text-warning mb-2" />,
    value: "4.8/5",
    label: "Average Rating",
    subText: "from verified users"
  },
  {
    icon: <FaRupeeSign size={32} className="text-warning mb-2" />,
    value: "₹4 Cr+",
    label: "Marketing Budget",
    subText: "deployed to bring customers"
  }
];

const TrustedByStats = () => {
  return (
    <section className="bg-light py-5">
      <div className="container text-center">
        <h2 className="mb-5 fw-bold text-dark">SuStylo — Already Trusted Nationwide</h2>
        <div className="row gy-4">
          {stats.map((stat, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div className="bg-white p-4 rounded shadow-sm h-100">
                {stat.icon}
                <h3 className="fw-bold text-dark">{stat.value}</h3>
                <p className="mb-1 fw-medium">{stat.label}</p>
                <small className="text-muted">{stat.subText}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedByStats;
