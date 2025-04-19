import React from "react";
import { FaMapMarkerAlt, FaRoute } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
 
export default function SearchResults() {
  const location = useLocation();
  const {
    salons = [],
    searchQuery = "",
    location: userLocation = "",
  } = location.state || {};
 
 
 
  console.log("Data from navigate:", location.state);
 
  return (
    <div className="container mt-5  d-flex align-items-center">
      <h2>
        Showing results for "<strong>{searchQuery}</strong>" near "
        <strong>{userLocation}</strong>"
      </h2>
 
      {salons.length === 0 ? (
        <p>No salons found.</p>
      ) : (
        <div className="row mt-4">
          {salons.map((salon) => (
            <div className="col-md-4 mb-4" key={salon._id}>
              <Link
                to={`/salondetails`}
                state={{ salonId: salon }}
                className="cs-main__card-box text-decoration-none"
              >
       
                <div className="cs-main__card-img">
                  <img
                    src={salon.salonPhotos?.[0] || "/placeholder.jpg"}
                    className="img-fluid"
                    alt={salon.salonName}
                  />
                </div>
                <div className="cs-main__card-content p-3">
                  <h3 className="cs-main__card-title text-truncate d-flex justify-content-between">
                    {salon.salonName}
                  </h3>
                  <div className="cs-main__card-location d-flex align-items-start">
                    <FaMapMarkerAlt className="icon mt-1 me-2" />
                    <p className="cs-main__card-location-text text-truncate mb-0">
                      {salon.salonAddress}
                    </p>
                  </div>
                  <ul className="cs-main__card-list my-2 list-unstyled">
                    <li className="cs-main__card-list-item d-flex align-items-center">
                      <FaRoute className="icon me-2" />
                      {salon.distance?.toFixed(2)} km
                    </li>
                  </ul>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
 
 