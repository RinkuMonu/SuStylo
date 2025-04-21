import React from "react";
import { FaMapMarkerAlt, FaRoute, FaSearch } from "react-icons/fa";
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
    <div className="container my-4">
      {/* Search header with breadcrumb */}
      <div className="d-flex align-items-center mb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Search Results
            </li>
          </ol>
        </nav>
      </div>

      {/* Search summary */}
      <div className="bg-light p-4 rounded mb-4">
        <h2 className="mb-3">
          <FaSearch className="me-2" />
          Search Results
        </h2>
        <p className="lead mb-0">
          Showing results for "<strong>{searchQuery}</strong>" near "
          <strong>{userLocation}</strong>"
        </p>
        {salons.length > 0 && (
          <p className="text-muted mt-2">{salons.length} salons found</p>
        )}
      </div>

      {/* Results grid */}
      {salons.length === 0 ? (
        <div className="text-center py-5">
          <div className="display-4 text-muted mb-4">😕</div>
          <h3>No salons found</h3>
          <p className="lead">
            We couldn't find any salons matching your search criteria.
          </p>
          <Link to="/" className="btn btn-primary">
            Try a different search
          </Link>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {salons.map((salon) => (
            <div className="col" key={salon._id}>
              <Link
                to={`/salondetails`}
                state={{ salonId: salon }}
                className="card h-100 text-decoration-none hover-shadow"
              >
                <div className="card-img-top overflow-hidden" style={{ height: "200px" }}>
                  <img
                  src="https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?cs=srgb&dl=pexels-delbeautybox-211032-853427.jpg&fm=jpg"
                    className="img-fluid h-100 w-100 object-fit-cover"
                    alt={salon.salonName}
                    onError={(e) => {
                      e.target.src = "/placeholder.jpg";
                    }}
                  />
                    {/* src={salon.salonPhotos?.[0] || "/placeholder.jpg"} */}
                </div>
                <div className="card-body">
                  <h3 className="h5 card-title text-truncate">{salon.salonName}</h3>
                  <div className="d-flex align-items-start mb-2">
                    <FaMapMarkerAlt className="text-muted mt-1 me-2" />
                    <p className="card-text text-muted text-truncate mb-0">
                      {salon.salonAddress}
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaRoute className="text-muted me-2" />
                    <span className="text-muted">{salon.distance?.toFixed(2)} km away</span>
                  </div>
                </div>
                <div className="card-footer bg-transparent border-top-0">
                  <button className="btn btn btn-warning w-100 text-white">
                    View Details
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}