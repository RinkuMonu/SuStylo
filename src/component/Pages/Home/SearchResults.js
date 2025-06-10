import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { HiAdjustments } from "react-icons/hi";

const Main = () => {
 const [filters, setFilters] = useState({
  gender: "",
  sortBy: "",
  rating: 0,
  pricing: [100, 5000],
  amenities: [],
  services: [], // ✅ Add this
  offers: false,
  category: "",
  location: "",
});



  // Dummy services data by gender
 const serviceData = {
  male: [
    "Beard Trim",
    "Haircut",
    "Facial",
    "Head Massage",
    "Hair Spa",
    "Shaving",
    "Hair Coloring",
    "Body Scrub",
    "Manicure",
    "Pedicure"
  ],
  female: [
    "Hair Spa",
    "Manicure",
    "Pedicure",
    "Facial",
    "Threading",
    "Waxing",
    "Hair Coloring",
    "Makeup",
    "Body Polishing",
    "Henna Application"
  ],
  unisex: [
    "Massage",
    "Hair Color",
    "Body Spa",
    "Detan Treatment",
    "Foot Massage",
    "Body Wrap",
    "Aromatherapy",
    "Scalp Treatment",
    "Rejuvenation Therapy",
    "Steam Bath"
  ]
};


  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const locationText = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
          setFilters((prev) => ({ ...prev, location: locationText }));
        },
        () => {
          setFilters((prev) => ({ ...prev, location: "Unable to fetch" }));
        }
      );
    }
  };

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  if (name === "amenities" || name === "services") {
    setFilters((prev) => ({
      ...prev,
      [name]: checked
        ? [...prev[name], value]
        : prev[name].filter((item) => item !== value),
    }));
  } else if (type === "checkbox") {
    setFilters((prev) => ({ ...prev, [name]: checked }));
  } else {
    setFilters((prev) => ({ ...prev, [name]: value }));
  }
};


  const handleStarRating = (value) => {
    setFilters((prev) => ({ ...prev, rating: value }));
  };

  return (
    <div className="d-flex" style={{ paddingTop: "6rem" }}>
      <aside className="border-end bg-light p-4" style={{ width: "300px", minHeight: "100vh" }}>
        <h4 className="mb-4" style={{ color: "rgb(251, 136, 7)" }}>Filters</h4>

        {/* Gender */}
        <div className="mb-4">
          <label className="fw-semibold mb-2 d-block">Gender</label>
         <select
  name="gender"
  value={filters.gender}
  onChange={(e) => {
    handleChange(e);
    setFilters((prev) => ({ ...prev, services: [] })); // Clear previous services
  }}
  className="form-select"
>
  <option value="">Select Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="unisex">Unisex</option>
</select>


          {/* Services as checkboxes */}
          {filters.gender && (
            <div className="mt-3">
              <h6 className="fw-semibold">
                Services for {filters.gender.charAt(0).toUpperCase() + filters.gender.slice(1)}:
              </h6>
              {serviceData[filters.gender]?.map((service, idx) => (
                <div className="form-check" key={idx}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="services"
                    value={service}
                    onChange={handleChange}
                    checked={filters.services.includes(service)}
                  />
                  <label className="form-check-label">{service}</label>
                </div>
              ))}
            </div>
          )}
        </div>


        {/* Sort By */}
        <div className="mb-4">
          <label className="fw-semibold mb-2 d-block">Sort By</label>
          <select
            name="sortBy"
            value={filters.sortBy}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        {/* Star Rating */}
        <div className="mb-4">
          <label className="fw-semibold mb-2 d-block">Rating</label>
          <div className="d-flex align-items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={20}
                style={{ cursor: "pointer" }}
                color={filters.rating >= star ? "#f59e0b" : "#e5e7eb"}
                onClick={() => handleStarRating(star)}
              />
            ))}
          </div>
          <small className="text-muted">Selected: {filters.rating}★ & up</small>
        </div>

        {/* Pricing Range */}
        <div className="mb-4">
          <label className="fw-semibold mb-2 d-block">Pricing Range (₹)</label>
          <div className="d-flex gap-2 align-items-center">
            <input
              type="number"
              min="100"
              max={filters.pricing[1]}
              value={filters.pricing[0]}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  pricing: [Number(e.target.value), prev.pricing[1]],
                }))
              }
              className="form-control"
              style={{ width: "45%" }}
              placeholder="Min"
            />
            <span>–</span>
            <input
              type="number"
              min={filters.pricing[0]}
              max="5000"
              value={filters.pricing[1]}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  pricing: [prev.pricing[0], Number(e.target.value)],
                }))
              }
              className="form-control"
              style={{ width: "45%" }}
              placeholder="Max"
            />
          </div>
          <small className="text-muted">
            ₹{filters.pricing[0]} – ₹{filters.pricing[1]}
          </small>
        </div>

        {/* Amenities */}
        <div className="mb-4">
          <label className="fw-semibold mb-2 d-block">Amenities</label>
          {["ac", "parking", "hygiene", "Sanitized Tools and Equipment ", "CCTV for Security ","Comfortable Seating Area ", "Wi-Fi Access" , "Kids Play Area ","Private Treatment Rooms "].map((amenity) => (
            <div key={amenity} className="form-check">
              <input
                type="checkbox"
                name="amenities"
                value={amenity}
                onChange={handleChange}
                checked={filters.amenities.includes(amenity)}
                className="form-check-input"
              />
              <label className="form-check-label text-capitalize">{amenity}</label>
            </div>
          ))}
        </div>

        {/* Offers */}
        <div className="mb-4">
          <label className="fw-semibold mb-2 d-block">Offers</label>
          <div className="form-check">
            <input
              type="checkbox"
              name="offers"
              checked={filters.offers}
              onChange={handleChange}
              className="form-check-input"
            />
            <label className="form-check-label">Show Only with Offers</label>
          </div>
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="fw-semibold mb-2 d-block">Category</label>
          <select
            name="category"
            value={filters.category}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select</option>
            <option value="premium">Premium</option>
            <option value="general">General</option>
          </select>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="fw-semibold mb-2 d-block">Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={filters.location}
            onChange={handleChange}
            placeholder="Enter location"
          />
        </div>

        {/* Apply Filters Button */}
        <button
          className="btn btn-sm d-flex align-items-center gap-2"
          style={{
            backgroundColor: "#FB8807",
            borderColor: "#FB8807",
            color: "white",
            borderRadius: "8px",
            padding: "0.4rem 0.8rem",
            fontWeight: "500",
            width: "auto",
          }}
        >
          <HiAdjustments size={18} /> Apply Filters
        </button>
      </aside>

      <main className="flex-grow-1 p-4">
        <h2 className="mb-4">Salon Listings</h2>
        <p className="text-muted">Filtered results will appear here based on selected options.</p>
      </main>
    </div>
  );
};

export default Main;
